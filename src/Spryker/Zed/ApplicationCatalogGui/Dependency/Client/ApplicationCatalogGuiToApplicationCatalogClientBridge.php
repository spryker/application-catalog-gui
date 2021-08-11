<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Dependency\Client;

use Generated\Shared\Transfer\AdvertisementBannerCollectionTransfer;
use Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationCategoryCollectionTransfer;
use Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationCollectionTransfer;
use Generated\Shared\Transfer\ApplicationConfigurationRequestTransfer;
use Generated\Shared\Transfer\ApplicationConfigurationResponseTransfer;
use Generated\Shared\Transfer\ApplicationConnectRequestTransfer;
use Generated\Shared\Transfer\ApplicationConnectResponseTransfer;
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

    /**
     * @param \Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\AdvertisementBannerCollectionTransfer
     */
    public function getAdvertisementBannerCollection(
        AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer
    ): AdvertisementBannerCollectionTransfer {
        return $this->applicationCatalogClient->getAdvertisementBannerCollection($advertisementBannerCriteriaTransfer);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationConnectRequestTransfer $applicationConnectRequestTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationConnectResponseTransfer
     */
    public function connectApplication(ApplicationConnectRequestTransfer $applicationConnectRequestTransfer): ApplicationConnectResponseTransfer
    {
        return $this->applicationCatalogClient->connectApplication($applicationConnectRequestTransfer);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationConfigurationRequestTransfer $applicationConfigRequestTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationConfigurationResponseTransfer
     */
    public function getApplicationConfiguration(
        ApplicationConfigurationRequestTransfer $applicationConfigRequestTransfer
    ): ApplicationConfigurationResponseTransfer {
        return $this->applicationCatalogClient->getApplicationConfiguration($applicationConfigRequestTransfer);
    }
}
