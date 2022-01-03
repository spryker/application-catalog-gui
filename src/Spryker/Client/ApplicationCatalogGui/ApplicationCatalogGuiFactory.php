<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface;
use Spryker\Client\ApplicationCatalogGui\ExternalClient\OauthAccessTokenClient;
use Spryker\Client\ApplicationCatalogGui\ExternalClient\OauthAccessTokenClientInterface;
use Spryker\Client\Kernel\AbstractFactory;

/**
 * @method \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiFactory extends AbstractFactory
{
    /**
     * @return \Spryker\Client\ApplicationCatalogGui\ExternalClient\OauthAccessTokenClientInterface
     */
    public function createOauthAccessTokenClient(): OauthAccessTokenClientInterface
    {
        return new OauthAccessTokenClient(
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
     * @return \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface
     */
    public function getServiceUtilEncoding(): ApplicationCatalogGuiToUtilEncodingInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::SERVICE_UTIL_ENCODING);
    }
}
