<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Navigation;

use ArrayObject;
use Symfony\Component\HttpFoundation\Request;

interface LabelsNavigationInterface
{
    /**
     * @phpstan-param \ArrayObject<int, \Generated\Shared\Transfer\LabelTransfer> $labelTransfers
     *
     * @param \ArrayObject|\Generated\Shared\Transfer\LabelTransfer[] $labelTransfers
     * @param string[] $selectedLabelIds
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return mixed[]
     */
    public function getLabelsData(ArrayObject $labelTransfers, array $selectedLabelIds, Request $request): array;
}
