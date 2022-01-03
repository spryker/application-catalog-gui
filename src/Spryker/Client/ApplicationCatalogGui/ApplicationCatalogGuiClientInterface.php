<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui;

use Generated\Shared\Transfer\OauthClientResponseTransfer;

interface ApplicationCatalogGuiClientInterface
{
    /**
     * Specification:
     * - Sends the request to the Auth0 service.
     * - Adds accessToken, expiresIn, tokenType to OauthClientResponseTransfer if the request is successful.
     * - Adds the error and the errorDescription to OauthClientResponseTransfer.oauthResponseError if the request is failed.
     * - Returns OauthClientResponseTransfer.
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestOauthAccessToken(): OauthClientResponseTransfer;
}
