<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Mapper;

use Generated\Shared\Transfer\OauthClientResponseTransfer;

interface OauthClientResponseTransferToResponseDataMapperInterface
{
    /**
     * @param \Generated\Shared\Transfer\OauthClientResponseTransfer $oauthClientResponseTransfer
     * @param array<string, mixed> $data
     *
     * @return array<string, mixed>
     */
    public function mapFailedOauthClientResponseTransferToResponseErrorData(
        OauthClientResponseTransfer $oauthClientResponseTransfer,
        array $data
    ): array;

    /**
     * @param \Generated\Shared\Transfer\OauthClientResponseTransfer $oauthClientResponseTransfer
     * @param array<string, mixed> $data
     *
     * @return array<string, mixed>
     */
    public function mapSuccessOauthClientResponseTransferToResponseAccessTokenData(
        OauthClientResponseTransfer $oauthClientResponseTransfer,
        array $data
    ): array;
}
