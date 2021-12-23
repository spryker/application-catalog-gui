<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business\AccessToken;

use Generated\Shared\Transfer\OauthClientResponseTransfer;

interface AccessTokenReaderInterface
{
    /**
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function getAccessToken(): OauthClientResponseTransfer;
}
