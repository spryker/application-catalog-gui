<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Mapper;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Symfony\Component\HttpFoundation\Response;

class OauthClientResponseTransferToResponseDataMapper implements OauthClientResponseTransferToResponseDataMapperInterface
{
    /**
     * @var string
     */
    protected const RESPONSE_KEY_ERRORS = 'errors';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_ERROR_STATUS = 'status';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_ERROR_DETAIL = 'detail';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_ACCESS_TOKEN = 'access_token';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_EXPIRES_IN = 'expires_in';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_TOKEN_TYPE = 'token_type';

    /**
     * @param \Generated\Shared\Transfer\OauthClientResponseTransfer $oauthClientResponseTransfer
     * @param array<string, mixed> $data
     *
     * @return array<string, mixed>
     */
    public function mapFailedOauthClientResponseTransferToResponseErrorData(
        OauthClientResponseTransfer $oauthClientResponseTransfer,
        array $data
    ): array {
        if (!isset($data[static::RESPONSE_KEY_ERRORS])) {
            $data[static::RESPONSE_KEY_ERRORS] = [];
        }

        $data['errors'][] = [
            static::RESPONSE_KEY_ERROR_DETAIL => $oauthClientResponseTransfer->getErrorMessage(),
            static::RESPONSE_KEY_ERROR_STATUS => Response::HTTP_BAD_REQUEST,
        ];

        return $data;
    }

    /**
     * @param \Generated\Shared\Transfer\OauthClientResponseTransfer $oauthClientResponseTransfer
     * @param array<string, mixed> $data
     *
     * @return array<string, mixed>
     */
    public function mapSuccessOauthClientResponseTransferToResponseAccessTokenData(
        OauthClientResponseTransfer $oauthClientResponseTransfer,
        array $data
    ): array {
        $data[static::RESPONSE_KEY_ACCESS_TOKEN] = $oauthClientResponseTransfer->getAccessToken();
        $data[static::RESPONSE_KEY_EXPIRES_IN] = $oauthClientResponseTransfer->getExpiresIn();
        $data[static::RESPONSE_KEY_TOKEN_TYPE] = $oauthClientResponseTransfer->getTokenType();

        return $data;
    }
}
