<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Table;

use ArrayObject;
use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Spryker\Service\UtilText\Model\Url\Url;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface;
use Spryker\Zed\Gui\Communication\Table\AbstractTable;
use Spryker\Zed\Gui\Communication\Table\TableConfiguration;

class ApplicationsTable extends AbstractTable
{
    protected const CONNECT_BTN_NAME = 'Connect';
    protected const DETAILS_BTN_NAME = 'Details';
    protected const PAGE_URL = '/application-catalog-gui';
    protected const TABLE_DATA_URL = '/table';
    protected const APP_DETAILS_URL = '/application-catalog-gui/index/details';

    /**
     * @var \Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface
     */
    protected $applicationCatalogClient;

    /**
     * @var \Generated\Shared\Transfer\ApplicationCriteriaTransfer
     */
    protected $applicationCriteriaTransfer;

    /**
     * @param \Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface $applicationCatalogClient
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     */
    public function __construct(
        ApplicationCatalogGuiToApplicationCatalogClientInterface $applicationCatalogClient,
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ) {
        $this->applicationCatalogClient = $applicationCatalogClient;
        $this->applicationCriteriaTransfer = $applicationCriteriaTransfer;
    }

    /**
     * @phpstan-param \ArrayObject<int, \Generated\Shared\Transfer\LabelTransfer> $labelTransfers
     *
     * @param \ArrayObject|\Generated\Shared\Transfer\LabelTransfer[] $labelTransfers
     * @param string[] $selectedLabelIds
     *
     * @return string[]
     */
    public function renderLabelButtons(ArrayObject $labelTransfers, array $selectedLabelIds): array
    {
        $queryData = $this->getRequest()->query->all();

        $data = [];
        foreach ($labelTransfers as $labelTransfer) {
            $queryData['filter']['labels'] = $labelTransfer->getIdLabel();

            $defaultOptions = ['class' => 'btn btn-success'];
            if (in_array($labelTransfer->getIdLabel(), $selectedLabelIds)) {
                $defaultOptions = ['style' => 'btn btn-dark'];
                unset($queryData['filter']['labels']);
            }

            $url = Url::generate(static::PAGE_URL, $queryData);
            $data[] = $this->generateButton($url, $labelTransfer->getName(), $defaultOptions);
        }

        return $data;
    }

    /**
     * @phpstan-param \ArrayObject<int, \Generated\Shared\Transfer\ApplicationCategoryTransfer> $applicationCategoryTransfers
     *
     * @param \ArrayObject|\Generated\Shared\Transfer\ApplicationCategoryTransfer[] $applicationCategoryTransfers
     * @param string[] $selectedCategoryIds
     *
     * @return mixed[]
     */
    public function renderCategoriesMenu(ArrayObject $applicationCategoryTransfers, array $selectedCategoryIds): array
    {
        $queryData = $this->getRequest()->query->all();

        $defaultCategoryData = $this->getDefaultCategoryMenu($selectedCategoryIds, $queryData);
        $categoriesData = $this->getCategoriesMenu($applicationCategoryTransfers, $selectedCategoryIds, $queryData);

        return array_merge($defaultCategoryData, $categoriesData);
    }

    /**
     * @param string[] $selectedCategoryIds
     * @param mixed[] $queryData
     *
     * @return mixed[]
     */
    public function getDefaultCategoryMenu(array $selectedCategoryIds, array $queryData): array
    {
        unset($queryData['filter']['categories']);

        $defaultCategoryData = [];
        $defaultCategoryData[] = [
            'category_url' => Url::generate(static::PAGE_URL, $queryData),
            'id_category' => '',
            'name' => 'All Categories',
            'is_active' => !count($selectedCategoryIds),
            'children' => [],
        ];

        return $defaultCategoryData;
    }

    /**
     * @phpstan-param \ArrayObject<int, \Generated\Shared\Transfer\ApplicationCategoryTransfer> $applicationCategoryTransfers
     *
     * @param \ArrayObject|\Generated\Shared\Transfer\ApplicationCategoryTransfer[] $applicationCategoryTransfers
     * @param string[] $selectedCategoryIds
     * @param mixed[] $queryData
     *
     * @return mixed[]
     */
    public function getCategoriesMenu(
        ArrayObject $applicationCategoryTransfers,
        array $selectedCategoryIds,
        array $queryData
    ): array {
        $data = [];
        foreach ($applicationCategoryTransfers as $applicationCategoryTransfer) {
            if ($applicationCategoryTransfer->getIdCategory() === null) {
                continue;
            }

            $queryData['filter']['categories'] = $applicationCategoryTransfer->getIdCategory();
            $url = Url::generate(static::PAGE_URL, $queryData);

            $categoryChildren = $this->getCategoriesMenu(
                $applicationCategoryTransfer->getChildren(),
                $selectedCategoryIds,
                $queryData
            );
            $categoryData = [
                'category_url' => $url,
                'id_category' => $applicationCategoryTransfer->getIdCategory(),
                'name' => $applicationCategoryTransfer->getName(),
                'is_active' => $this->isCategoryActive(
                    $applicationCategoryTransfer->getIdCategory(),
                    $categoryChildren,
                    $selectedCategoryIds
                ),
                'children' => $categoryChildren,
            ];

            $data[] = $categoryData;
        }

        return $data;
    }

    /**
     * @param \Spryker\Zed\Gui\Communication\Table\TableConfiguration $config
     *
     * @return \Spryker\Zed\Gui\Communication\Table\TableConfiguration
     */
    protected function configure(TableConfiguration $config): TableConfiguration
    {
        $url = Url::generate(static::TABLE_DATA_URL, $this->getRequest()->query->all());

        $config->setUrl($url);
        $config->setHeader([
            'provider' => 'Provider',
            'name' => 'Name',
            'category' => 'Category',
            'label' => 'Label',
            'rating_reviews' => 'Rating & Reviews',
            'status' => 'Status',
            'actions' => '',
        ]);
        $config->setRawColumns([
            'provider',
            'category',
            'label',
            'rating_reviews',
            'actions',
        ]);
        $config->setPaging(false);

        return $config;
    }

    /**
     * @param \Spryker\Zed\Gui\Communication\Table\TableConfiguration $config
     *
     * @return mixed[]
     */
    protected function prepareData(TableConfiguration $config): array
    {
        $applicationCollectionTransfer = $this->applicationCatalogClient
            ->getApplicationCollection($this->applicationCriteriaTransfer);

        $applications = [];
        foreach ($applicationCollectionTransfer->getApplications() as $applicationTransfer) {
            $applications[] = [
                'provider' => $this->prepareAppView($applicationTransfer),
                'name' => $applicationTransfer->getName(),
                'category' => $this->prepareCategoriesView($applicationTransfer),
                'label' => $this->prepareLabelsView($applicationTransfer),
                'rating_reviews' => $this->prepareRatingAndReviewsView($applicationTransfer),
                'status' => $applicationTransfer->getConnectionState()->getDescription(),
                'actions' => $this->prepareActionButtonsView($applicationTransfer),
            ];
        }
        $this->setTotal($applicationCollectionTransfer->getApplications()->count());
        $this->setFiltered($applicationCollectionTransfer->getApplications()->count());

        return $applications;
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareAppView(ApplicationTransfer $applicationTransfer): string
    {
        if (!empty($applicationTransfer->getIconUrl())) {
            return '
                <a href="' . $applicationTransfer->getUrl() . '">
                    <img src="' . $applicationTransfer->getIconUrl() . '" width="50px" style="margin-right:5px;" alt="logo"/>
                </a>';
        }

        return '';
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareRatingAndReviewsView(ApplicationTransfer $applicationTransfer): string
    {
        $rating = '';
        $firstStarNumber = 1;
        $lastStarNumber = 5;

        for ($i = $firstStarNumber; $i <= $lastStarNumber; $i++) {
            if ($i <= $applicationTransfer->getRating()) {
                $rating .= '<span class="fa fa-star checked" style="color: yellow;"></span>';
            } else {
                $rating .= '<span class="fa fa-star-o"></span>';
            }
        }
        $reviews = '(' . $applicationTransfer->getTotalReviews() . ')';

        return $rating . ' ' . $reviews;
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareActionButtonsView(ApplicationTransfer $applicationTransfer): string
    {
        $detailsUrl = Url::generate(static::APP_DETAILS_URL, ['id' => $applicationTransfer->getIdApplication()]);

        $connectButton = $this->generateButton('#', static::CONNECT_BTN_NAME, [
            'disabled' => 'disabled',
            'class' => 'btn-create',
        ]);
        $detailButton = $this->generateButton($detailsUrl, static::DETAILS_BTN_NAME, [
            'class' => 'btn-success',
        ]);

        return $connectButton . ' ' . $detailButton;
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareCategoriesView(ApplicationTransfer $applicationTransfer): string
    {
        $categories = [];
        foreach ($applicationTransfer->getCategories() as $applicationCategoryTransfer) {
            $categories[] = '<span class="badge badge-light m-r-xs">' . $applicationCategoryTransfer->getName() . '</span>';
        }

        return implode('', $categories);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareLabelsView(ApplicationTransfer $applicationTransfer): string
    {
        $labels = [];
        foreach ($applicationTransfer->getLabels() as $labelTransfer) {
            $labels[] = '<span class="badge badge-light m-r-xs">' . $labelTransfer->getName() . '</span>';
        }

        return implode('', $labels);
    }

    /**
     * @param string $currentIdCategory
     * @param mixed[] $categoryChildren
     * @param mixed[] $selectedCategoryIds
     *
     * @return bool
     */
    protected function isCategoryActive(
        string $currentIdCategory,
        array $categoryChildren,
        array $selectedCategoryIds
    ): bool {
        foreach ($categoryChildren as $categoryChild) {
            if (!empty($categoryChild['is_active'])) {
                return true;
            }
        }

        return in_array($currentIdCategory, $selectedCategoryIds);
    }
}
