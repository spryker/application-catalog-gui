<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business;

use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Business\AccessToken\AccessTokenReader;
use Spryker\Zed\ApplicationCatalogGui\Business\AccessToken\AccessTokenReaderInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\Kernel\Business\AbstractBusinessFactory;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiBusinessFactory extends AbstractBusinessFactory
{
    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Business\AccessToken\AccessTokenReaderInterface
     */
    public function createAccessTokenReader(): AccessTokenReaderInterface
    {
        return new AccessTokenReader(
            $this->getApplicationCatalogGuiClient(),
            $this->getGlossaryFacade(),
            $this->getLocaleFacade(),
        );
    }

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface
     */
    public function getLocaleFacade(): ApplicationCatalogGuiToLocaleFacadeInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::FACADE_LOCALE);
    }

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface
     */
    public function getGlossaryFacade(): ApplicationCatalogGuiToGlossaryInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::FACADE_GLOSSARY);
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface
     */
    public function getApplicationCatalogGuiClient(): ApplicationCatalogGuiClientInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::CLIENT_APPLICATION_CATALOG_GUI);
    }
}
