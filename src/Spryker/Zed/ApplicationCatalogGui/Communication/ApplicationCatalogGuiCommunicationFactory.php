<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication;

use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Communication\Mapper\OauthClientResponseTransferToResponseDataMapper;
use Spryker\Zed\ApplicationCatalogGui\Communication\Mapper\OauthClientResponseTransferToResponseDataMapperInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToStoreFacadeInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToStoreReferenceInterface;
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

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToStoreFacadeInterface;
     */
    public function getStoreFacade(): ApplicationCatalogGuiToStoreFacadeInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::FACADE_STORE);
    }

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToStoreReferenceInterface;
     */
    public function getStoreReferenceService(): ApplicationCatalogGuiToStoreReferenceInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::SERVICE_STORE_REFERENCE);
    }

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Communication\Mapper\OauthClientResponseTransferToResponseDataMapperInterface
     */
    public function createOauthClientResponseTransferToResponseDataMapper(): OauthClientResponseTransferToResponseDataMapperInterface
    {
        return new OauthClientResponseTransferToResponseDataMapper();
    }
}
