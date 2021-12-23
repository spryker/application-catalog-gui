<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication;

use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\Kernel\Communication\AbstractCommunicationFactory;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 * @method \Spryker\Zed\ApplicationCatalogGui\Business\ApplicationCatalogGuiFacadeInterface getFacade()
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
}
