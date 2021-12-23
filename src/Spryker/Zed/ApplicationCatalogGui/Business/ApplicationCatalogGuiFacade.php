<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Spryker\Zed\Kernel\Business\AbstractFacade;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Business\ApplicationCatalogGuiBusinessFactory getFactory()
 */
class ApplicationCatalogGuiFacade extends AbstractFacade implements ApplicationCatalogGuiFacadeInterface
{
    /**
     * {@inheritDoc}
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function getAccessToken(): OauthClientResponseTransfer
    {
        return $this->getFactory()->createAccessTokenReader()->getAccessToken();
    }
}
