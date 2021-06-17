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

class LabelsNavigation implements LabelsNavigationInterface
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
    public function getLabelsData(ArrayObject $labelTransfers, array $selectedLabelIds, Request $request): array
    {
        $queryData = $request->query->all();

        $data = [];
        foreach ($labelTransfers as $labelTransfer) {
            $queryData[ApplicationsTable::KEY_FILTER][ApplicationsTable::KEY_LABEL_IDS] = $labelTransfer->getIdLabel();

            $buttonClass = 'btn-success';
            if (in_array($labelTransfer->getIdLabel(), $selectedLabelIds)) {
                $buttonClass = 'btn-dark';
                unset($queryData[ApplicationsTable::KEY_FILTER][ApplicationsTable::KEY_LABEL_IDS]);
            }

            $url = Url::generate(ApplicationsTable::PAGE_URL, $queryData);
            $data[] = [
                'url' => (string)$url,
                'title' => $labelTransfer->getTitle(),
                'class' => $buttonClass,
            ];
        }

        return $data;
    }
}
