<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Advertisement;

use Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer;
use Generated\Shared\Transfer\AdvertisementBannerTransfer;
use Spryker\Service\UtilText\Model\Url\Url;
use Spryker\Zed\ApplicationCatalogGui\Communication\Table\ApplicationsTable;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface;

class AdvertisementBanner implements AdvertisementBannerInterface
{
    /**
     * @var string
     */
    protected const TYPE_APPLICATION = 'application';

    /**
     * @var \Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface
     */
    protected $applicationCatalogClient;

    /**
     * @param \Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface $applicationCatalogClient
     */
    public function __construct(
        ApplicationCatalogGuiToApplicationCatalogClientInterface $applicationCatalogClient
    ) {
        $this->applicationCatalogClient = $applicationCatalogClient;
    }

    /**
     * @param \Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\AdvertisementBannerTransfer
     */
    public function getAdvertisementBanner(AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer): AdvertisementBannerTransfer
    {
        $advertisementBannerTransfer = $this->getRandomAdvertisementBanner($advertisementBannerCriteriaTransfer);

        if ($advertisementBannerTransfer->getType() == static::TYPE_APPLICATION) {
            $advertisementBannerTransfer->setTargetUrl(
                $this->getApplicationDetailUrl($advertisementBannerTransfer->getApplicationUuid())
            );
        }

        return $advertisementBannerTransfer;
    }

    /**
     * @param \Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\AdvertisementBannerTransfer
     */
    protected function getRandomAdvertisementBanner(AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer): AdvertisementBannerTransfer
    {
        $advertisementBannerCollectionTransfer = $this->applicationCatalogClient->getAdvertisementBannerCollection($advertisementBannerCriteriaTransfer);

        $advertisementBanners = $advertisementBannerCollectionTransfer->getAdvertisementBanners()->getArrayCopy();
        $randomAdvertisementBannerKey = array_rand($advertisementBanners);

        return $advertisementBanners[$randomAdvertisementBannerKey];
    }

    /**
     * @param string $applicationUuid
     *
     * @return string
     */
    protected function getApplicationDetailUrl(string $applicationUuid): string
    {
        return Url::generate(ApplicationsTable::APP_DETAILS_URL, [ApplicationsTable::KEY_UUID => $applicationUuid]);
    }
}
