<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui;

use Spryker\Zed\ApplicationCatalogGui\Dependency\Client\ApplicationCatalogGuiToApplicationCatalogClientBridge;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeBridge;
use Spryker\Zed\Kernel\AbstractBundleDependencyProvider;
use Spryker\Zed\Kernel\Container;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiConfig getConfig()
 */
class ApplicationCatalogGuiDependencyProvider extends AbstractBundleDependencyProvider
{
    public const CLIENT_APP_STORE = 'CLIENT_APP_STORE';
    public const FACADE_LOCALE = 'FACADE_LOCALE';

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\Kernel\Container
     */
    public function provideCommunicationLayerDependencies(Container $container): Container
    {
        $container = $this->addApplicationCatalogClient($container);
        $container = $this->addLocaleFacade($container);

        return $container;
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\Kernel\Container
     */
    protected function addApplicationCatalogClient(Container $container): Container
    {
        $container->set(static::CLIENT_APP_STORE, function (Container $container) {
            return new ApplicationCatalogGuiToApplicationCatalogClientBridge(
                $container->getLocator()->applicationCatalog()->client()
            );
        });

        return $container;
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\Kernel\Container
     */
    protected function addLocaleFacade(Container $container): Container
    {
        $container->set(static::FACADE_LOCALE, function (Container $container) {
            return new ApplicationCatalogGuiToLocaleFacadeBridge(
                $container->getLocator()->locale()->facade()
            );
        });

        return $container;
    }
}
