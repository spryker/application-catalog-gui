<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Advertisement;

use Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer;
use Generated\Shared\Transfer\AdvertisementBannerTransfer;

interface AdvertisementBannerInterface
{
    /**
     * @param \Generated\Shared\Transfer\AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\AdvertisementBannerTransfer
     */
    public function getAdvertisementBanner(AdvertisementBannerCriteriaTransfer $advertisementBannerCriteriaTransfer): AdvertisementBannerTransfer;
}
