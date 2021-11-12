<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Controller;

use Spryker\Zed\Kernel\Communication\Controller\AbstractController;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Communication\ApplicationCatalogGuiCommunicationFactory getFactory()
 */
class IndexController extends AbstractController
{
    /**
     * @return array<mixed>
     */
    public function indexAction(): array
    {
        $localeTransfer = $this->getFactory()->getLocaleFacade()
            ->getCurrentLocale();

        return $this->viewResponse([
            'localeName' => mb_substr($localeTransfer->getLocaleNameOrFail(), 0, 2),
            'tenantUuid' => $this->getFactory()->getConfig()
                ->getTenantUuid(),
            'baseUrlZed' => $this->getFactory()->getConfig()
                ->getBaseUrlZed(),
            'registryServiceEndpoint' => $this->getFactory()->getConfig()
                ->getRegistryServiceEndpoint(),
        ]);
    }
}
