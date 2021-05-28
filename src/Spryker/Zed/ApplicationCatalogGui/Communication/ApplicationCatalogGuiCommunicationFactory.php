<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication;

use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Communication\Table\ApplicationsTable;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\Kernel\Communication\AbstractCommunicationFactory;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiCommunicationFactory extends AbstractCommunicationFactory
{
    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientInterface
     */
    public function getApplicationCatalogClient(): ApplicationCatalogGuiToApplicationCatalogClientInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::CLIENT_APP_STORE);
    }

    /**
     * @return \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface
     */
    public function getLocaleFacade(): ApplicationCatalogGuiToLocaleFacadeInterface
    {
        return $this->getProvidedDependency(ApplicationCatalogGuiDependencyProvider::FACADE_LOCALE);
    }

    /**
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     *
     * @return \Spryker\Zed\ApplicationCatalogGui\Communication\Table\ApplicationsTable
     */
    public function createApplicationsTable(
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ): ApplicationsTable {
        return new ApplicationsTable($this->getApplicationCatalogClient(), $applicationCriteriaTransfer);
    }
}
