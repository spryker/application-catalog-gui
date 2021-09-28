<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Table;

use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Spryker\Service\UtilText\Model\Url\Url;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface;
use Spryker\Zed\Gui\Communication\Table\AbstractTable;
use Spryker\Zed\Gui\Communication\Table\TableConfiguration;

class ApplicationsTable extends AbstractTable
{
    public const KEY_FILTER = 'filter';
    public const KEY_UUID = 'uuid';

    public const KEY_CATEGORY_IDS = 'categories';
    public const KEY_LABEL_IDS = 'labels';
    public const KEY_SEARCH_VALUE = 'value';

    public const PAGE_URL = '/application-catalog-gui';
    public const APP_DETAILS_URL = '/application-catalog-gui/index/details';

    protected const CONNECT_BTN_NAME = 'Connect';
    protected const DISCONNECT_BTN_NAME = 'Disconnect';
    protected const DETAILS_BTN_NAME = 'Details';
    protected const TABLE_DATA_URL = '/table';
    protected const CONNECT_URL = '/application-catalog-gui/index/connect';

    protected const CONNECTED_STATUS = 'connected';

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
        $config->setOrdering(false);

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
        $detailsUrl = Url::generate(static::APP_DETAILS_URL, [static::KEY_UUID => $applicationTransfer->getApplicationUuid()]);
        $detailButton = $this->generateButton($detailsUrl, static::DETAILS_BTN_NAME, [
            'class' => 'btn-success',
        ]);
//        $connectionButton = $this->prepareConnectionButton($applicationTransfer);
        $connectionButton = '';

        return $connectionButton . ' ' . $detailButton;
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationTransfer $applicationTransfer
     *
     * @return string
     */
    protected function prepareConnectionButton(ApplicationTransfer $applicationTransfer): string
    {
        $connectUrl = Url::generate(static::CONNECT_URL, [
            static::KEY_UUID => $applicationTransfer->getApplicationUuid(),
        ]);

        if ($applicationTransfer->getConnectionState()->getCode() == static::CONNECTED_STATUS) {
            return $this->generateButton('#', static::DISCONNECT_BTN_NAME, [
                'disabled' => 'disabled',
                'class' => 'btn-create',
            ]);
        }

        return $this->generateButton($connectUrl, static::CONNECT_BTN_NAME, [
            'class' => 'btn-create',
        ]);
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
            $categories[] = '<span class="badge badge-light m-r-xs">' . $applicationCategoryTransfer->getTitle() . '</span>';
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
            $labels[] = '<span class="badge badge-light m-r-xs">' . $labelTransfer->getTitle() . '</span>';
        }

        return implode('', $labels);
    }
}
