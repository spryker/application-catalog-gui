<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Spryker\Client\ApplicationCatalogGui\Dependency\External\ApplicationCatalogGuiToHttpClientAdapterInterface;
use Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface;
use Spryker\Client\ApplicationCatalogGui\RequestExecutor\OauthRequestExecutor;
use Spryker\Client\ApplicationCatalogGui\RequestExecutor\OauthRequestExecutorInterface;
use Spryker\Client\Kernel\AbstractFactory;

/**
 * @method \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiFactory extends AbstractFactory
{
    /**
     * @return \Spryker\Client\ApplicationCatalogGui\RequestExecutor\OauthRequestExecutorInterface
     */
    public function createAccessTokenClient(): OauthRequestExecutorInterface
    {
        return new OauthRequestExecutor(
            $this->getHttpClient(),
            $this->getServiceUtilEncoding(),
            $this->getConfig(),
        );
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\Dependency\External\ApplicationCatalogGuiToHttpClientAdapterInterface
     */
    public function getHttpClient(): ApplicationCatalogGuiToHttpClientAdapterInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::CLIENT_HTTP);
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface
     */
    public function getServiceUtilEncoding(): ApplicationCatalogGuiToUtilEncodingInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::SERVICE_UTIL_ENCODING);
    }
}
