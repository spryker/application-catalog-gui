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
     * - Send request to Auth0 service.
     * - Add accessToken, expiresIn, tokenType if request successful.
     * - Add errorMessage to OauthClientResponseTransfer if request failed.
     * - Return OauthClientResponseTransfer.
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function processAccessTokenRequest(): OauthClientResponseTransfer;
}
