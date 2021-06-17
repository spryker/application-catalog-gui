<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Navigation;

use ArrayObject;
use Symfony\Component\HttpFoundation\Request;

interface CategoriesNavigationInterface
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
    public function renderCategoriesMenu(ArrayObject $applicationCategoryTransfers, array $selectedCategoryIds, Request $request): array;
}
