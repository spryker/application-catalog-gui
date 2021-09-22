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
     * @var int
     */
    protected const DEFAULT_PAGE_SIZE = 9;
    /**
     * @var int
     */
    protected const DEFAULT_START_PAGE = 1;

    /**
     * @api
     *
     * @return int
     */
    public function getDefaultPageSize(): int
    {
        return static::DEFAULT_PAGE_SIZE;
    }

    /**
     * @api
     *
     * @return int
     */
    public function getDefaultStartPage(): int
    {
        return static::DEFAULT_START_PAGE;
    }

    /**
     * @api
     *
     * @return string
     */
    public function getTenantUuid(): string
    {
        return getenv('TENANT_UUID') ?? getenv('SPRYKER_BE_HOST');
    }
}
