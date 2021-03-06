<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui;

use Spryker\Zed\Kernel\AbstractBundleConfig;

class ApplicationCatalogGuiConfig extends AbstractBundleConfig
{
    /**
     * @uses \Spryker\Shared\Application\ApplicationConstants::BASE_URL_ZED
     *
     * @var string
     */
    protected const BASE_URL_ZED = 'APPLICATION:BASE_URL_ZED';

    /**
     * @api
     *
     * @return string
     */
    public function getTenantIdentifier(): string
    {
        $beHostInsteadOfTenantIdentifier = getenv('SPRYKER_BE_HOST') !== false ? getenv('SPRYKER_BE_HOST') : 'TENANT_IDENTIFIER_UNDEFINED';

        return getenv('TENANT_IDENTIFIER') !== false ? getenv('TENANT_IDENTIFIER') : $beHostInsteadOfTenantIdentifier;
    }

    /**
     * @api
     *
     * @return string
     */
    public function getBaseUrlZed(): string
    {
        return $this->get(static::BASE_URL_ZED);
    }

    /**
     * @api
     *
     * @return string
     */
    public function getAppCatalogScriptUrl(): string
    {
        return getenv('APP_CATALOG_SCRIPT_URL') ?: '';
    }
}
