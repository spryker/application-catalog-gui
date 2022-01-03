<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Spryker\Client\Kernel\AbstractClient;

/**
 * @method \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiFactory getFactory()
 */
class ApplicationCatalogGuiClient extends AbstractClient implements ApplicationCatalogGuiClientInterface
{
    /**
     * {@inheritDoc}
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestOauthAccessToken(): OauthClientResponseTransfer
    {
        return $this->getFactory()
            ->createOauthAccessTokenClient()
            ->requestOauthAccessToken();
    }
}
