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
     * - Does nothing with the OauthClientResponse if the OauthClientResponse.isSuccessful is `true`.
     * - Adds general translatable message to OauthClientResponse.errorMessage if the OauthClientResponse.isSuccessful is `false`.
     * - Logs the error if the OauthClientResponse.isSuccessful is `false` or catches the AopIdpUrlNotFoundException.
     * - Returns OauthClientResponse.
     *
     * @api
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestAccessToken(): OauthClientResponseTransfer;
}
