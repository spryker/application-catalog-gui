<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Dependency\Client;

use Generated\Shared\Transfer\ApplicationCategoryCollectionTransfer;
use Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationCollectionTransfer;
use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Generated\Shared\Transfer\LabelCollectionTransfer;
use Generated\Shared\Transfer\LabelCriteriaTransfer;

class ApplicationCatalogGuiToApplicationCatalogClientBridge implements ApplicationCatalogGuiToApplicationCatalogClientInterface
{
    /**
     * @var \Spryker\Client\ApplicationCatalog\ApplicationCatalogClientInterface
     */
    protected $applicationCatalogClient;

    /**
     * @param \Spryker\Client\ApplicationCatalog\ApplicationCatalogClientInterface $applicationCatalogClient
     */
    public function __construct($applicationCatalogClient)
    {
        $this->applicationCatalogClient = $applicationCatalogClient;
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationTransfer|null
     */
    public function findApplication(
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ): ?ApplicationTransfer {
        return $this->applicationCatalogClient->findApplication($applicationCriteriaTransfer);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationCollectionTransfer
     */
    public function getApplicationCollection(
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ): ApplicationCollectionTransfer {
        return $this->applicationCatalogClient->getApplicationCollection($applicationCriteriaTransfer);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer $applicationCategoryCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationCategoryCollectionTransfer
     */
    public function getCategoryCollection(
        ApplicationCategoryCriteriaTransfer $applicationCategoryCriteriaTransfer
    ): ApplicationCategoryCollectionTransfer {
        return $this->applicationCatalogClient->getCategoryCollection($applicationCategoryCriteriaTransfer);
    }

    /**
     * @param \Generated\Shared\Transfer\LabelCriteriaTransfer $labelCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\LabelCollectionTransfer
     */
    public function getLabelCollection(
        LabelCriteriaTransfer $labelCriteriaTransfer
    ): LabelCollectionTransfer {
        return $this->applicationCatalogClient->getLabelCollection($labelCriteriaTransfer);
    }
}
