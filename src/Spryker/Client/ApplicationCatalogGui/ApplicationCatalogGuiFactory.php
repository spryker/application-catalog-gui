<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Spryker\Client\ApplicationCatalogGui\Executor\AccessTokenRequestExecutor;
use Spryker\Client\ApplicationCatalogGui\Executor\AccessTokenRequestExecutorInterface;
use Spryker\Client\Kernel\AbstractFactory;
use Spryker\Service\UtilEncoding\UtilEncodingServiceInterface;

/**
 * @method \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiFactory extends AbstractFactory
{
    /**
     * @return \Spryker\Client\ApplicationCatalogGui\Executor\AccessTokenRequestExecutorInterface
     */
    public function createAccessTokenRequestExecutor(): AccessTokenRequestExecutorInterface
    {
        return new AccessTokenRequestExecutor(
            $this->getHttpClient(),
            $this->getServiceUtilEncoding(),
            $this->getConfig(),
        );
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface
     */
    public function getHttpClient(): ApplicationCatalogGuiToGuzzleClientInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::CLIENT_HTTP);
    }

    /**
     * @return \Spryker\Service\UtilEncoding\UtilEncodingServiceInterface
     */
    public function getServiceUtilEncoding(): UtilEncodingServiceInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::SERVICE_UTIL_ENCODING);
    }
}
