<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business\AccessToken;

use Generated\Shared\Transfer\AccessTokenErrorTransfer;
use Generated\Shared\Transfer\AccessTokenResponseTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Shared\Log\LoggerTrait;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToTranslatorFacadeInterface;

class AccessTokenReader implements AccessTokenReaderInterface
{
    use LoggerTrait;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface
     */
    protected $applicationCatalogGuiClient;

    /**
     * @var \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToTranslatorFacadeInterface
     */
    protected $translatorFacade;

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface $applicationCatalogGuiClient
     * @param \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToTranslatorFacadeInterface $translatorFacade
     */
    public function __construct(
        ApplicationCatalogGuiClientInterface $applicationCatalogGuiClient,
        ApplicationCatalogGuiToTranslatorFacadeInterface $translatorFacade
    ) {
        $this->applicationCatalogGuiClient = $applicationCatalogGuiClient;
        $this->translatorFacade = $translatorFacade;
    }

    /**
     * @return \Generated\Shared\Transfer\AccessTokenResponseTransfer
     */
    public function requestAccessToken(): AccessTokenResponseTransfer
    {
        $oauthClientResponseTransfer = $this->applicationCatalogGuiClient->requestAccessToken();

        if (!$oauthClientResponseTransfer->getIsSuccessful()) {
            $this->getLogger()->error(sprintf(
                'Reason: %s; Description: %s.',
                $oauthClientResponseTransfer->getAccessTokenErrorOrFail()->getError(),
                $oauthClientResponseTransfer->getAccessTokenErrorOrFail()->getErrorDescription(),
            ));

            $oauthClientResponseTransfer->setAccessTokenError(
                (new AccessTokenErrorTransfer())
                    ->setError($oauthClientResponseTransfer->getAccessTokenErrorOrFail()->getError())
                    ->setErrorDescription($this->translatorFacade->trans('Authentication failed.')),
            );
        }

        return $oauthClientResponseTransfer;
    }
}
