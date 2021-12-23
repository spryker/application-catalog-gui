<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Spryker\Client\Kernel\AbstractBundleConfig;
use Spryker\Shared\ApplicationCatalogGui\ApplicationCatalogGuiConstants;

class ApplicationCatalogGuiConfig extends AbstractBundleConfig
{
    /**
     * @api
     *
     * @return string
     */
    public function getAopIdpUrl(): string
    {
        return $this->get(ApplicationCatalogGuiConstants::AOP_IDP_URL, getenv('SPRYKER_AOP_IDP_URL'));
    }

    /**
     * @api
     *
     * @return string
     */
    public function getAopClientId(): string
    {
        return $this->get(ApplicationCatalogGuiConstants::OAP_CLIENT_ID, getenv('SPRYKER_OAP_CLIENT_ID'));
    }

    /**
     * @api
     *
     * @return string
     */
    public function getAopClientSecret(): string
    {
        return $this->get(ApplicationCatalogGuiConstants::OAP_CLIENT_SECRET, getenv('SPRYKER_OAP_CLIENT_SECRET'));
    }

    /**
     * @api
     *
     * @return string
     */
    public function getAopAudience(): string
    {
        return $this->get(ApplicationCatalogGuiConstants::OAP_CLIENT_AUDIENCE, getenv('SPRYKER_OAP_CLIENT_AUDIENCE'));
    }
}
