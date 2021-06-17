<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Navigation;

use ArrayObject;
use Spryker\Service\UtilText\Model\Url\Url;
use Spryker\Zed\ApplicationCatalogGui\Communication\Table\ApplicationsTable;
use Symfony\Component\HttpFoundation\Request;

class CategoriesNavigation implements CategoriesNavigationInterface
{
    /**
     * @phpstan-param \ArrayObject<int, \Generated\Shared\Transfer\ApplicationCategoryTransfer> $applicationCategoryTransfers
     *
     * @param \ArrayObject|\Generated\Shared\Transfer\ApplicationCategoryTransfer[] $applicationCategoryTransfers
     * @param string[] $selectedCategoryIds
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return mixed[]
     */
    public function renderCategoriesMenu(ArrayObject $applicationCategoryTransfers, array $selectedCategoryIds, Request $request): array
    {
        $queryData = $request->query->all();

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
        unset($queryData[ApplicationsTable::KEY_FILTER][ApplicationsTable::KEY_CATEGORY_IDS]);

        $defaultCategoryData = [];
        $defaultCategoryData[] = [
            'category_url' => Url::generate(ApplicationsTable::PAGE_URL, $queryData),
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

            $queryData[ApplicationsTable::KEY_FILTER][ApplicationsTable::KEY_CATEGORY_IDS] = $applicationCategoryTransfer->getIdCategory();
            $url = Url::generate(ApplicationsTable::PAGE_URL, $queryData);

            $categoryChildren = $this->getCategoriesMenu(
                $applicationCategoryTransfer->getChildren(),
                $selectedCategoryIds,
                $queryData
            );
            $categoryData = [
                'category_url' => $url,
                'id_category' => $applicationCategoryTransfer->getIdCategory(),
                'name' => $applicationCategoryTransfer->getTitle(),
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
