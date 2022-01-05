<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\RequestExecutor;

use Generated\Shared\Transfer\OauthClientResponseTransfer;

interface OauthRequestExecutorInterface
{
    /**
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestOauthAccessToken(): OauthClientResponseTransfer;
}
