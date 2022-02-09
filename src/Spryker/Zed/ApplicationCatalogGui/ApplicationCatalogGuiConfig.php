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
     * @api
     *
     * @return string
     */
    public function getAppCatalogScriptUrl(): string
    {
        return getenv('APP_CATALOG_SCRIPT_URL') ?: '';
    }
}
