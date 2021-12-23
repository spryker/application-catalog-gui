<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication;

use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\Kernel\Communication\AbstractCommunicationFactory;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiCommunicationFactory extends AbstractCommunicationFactory
{
    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface
     */
    public function getLocaleFacade(): ApplicationCatalogGuiToLocaleFacadeInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::FACADE_LOCALE);
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface
     */
    public function getApplicationCatalogGuiClient(): ApplicationCatalogGuiClientInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::CLIENT_APPLICATION_CATALOG_GUI);
    }
}
