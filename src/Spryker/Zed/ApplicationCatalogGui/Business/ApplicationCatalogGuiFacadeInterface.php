<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business;

use Generated\Shared\Transfer\OauthClientResponseTransfer;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Business\ApplicationCatalogGuiBusinessFactory getFactory()
 */
interface ApplicationCatalogGuiFacadeInterface
{
    /**
     * Specification:
     * - Uses ApplicationCatalogGuiClient to get the access token.
     * - Does nothing with the OauthClientResponseTransfer if the OauthClientResponseTransfer.isSuccessful is `true`.
     * - Adds general translatable message to OauthClientResponseTransfer.errorMessage if the OauthClientResponseTransfer.isSuccessful is `false`.
     * - Logs the error if the OauthClientResponseTransfer.isSuccessful is `false` or catches the AopIdpUrlNotFoundException.
     * - Returns OauthClientResponseTransfer.
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestAccessToken(): OauthClientResponseTransfer;
}
