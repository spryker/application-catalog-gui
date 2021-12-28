<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business\AccessToken;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Shared\ApplicationCatalogGui\Exception\AopIdpUrlNotFoundException;
use Spryker\Shared\ErrorHandler\ErrorLogger;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;
use Spryker\Zed\ApplicationCatalogGui\Exception\OauthAuthenticationFailedException;

class AccessTokenReader implements AccessTokenReaderInterface
{
    /**
     * @var \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface
     */
    protected $applicationCatalogGuiClient;

    /**
     * @var \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface
     */
    protected $glossaryFacade;

    /**
     * @var \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface
     */
    protected $localeFacade;

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface $applicationCatalogGuiClient
     * @param \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface $glossaryFacade
     * @param \Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface $localeFacade
     */
    public function __construct(
        ApplicationCatalogGuiClientInterface $applicationCatalogGuiClient,
        ApplicationCatalogGuiToGlossaryInterface $glossaryFacade,
        ApplicationCatalogGuiToLocaleFacadeInterface $localeFacade
    ) {
        $this->applicationCatalogGuiClient = $applicationCatalogGuiClient;
        $this->glossaryFacade = $glossaryFacade;
        $this->localeFacade = $localeFacade;
    }

    /**
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function getAccessToken(): OauthClientResponseTransfer
    {
        try {
            $oauthClientResponseTransfer = $this->applicationCatalogGuiClient->processAccessTokenRequest();
        } catch (AopIdpUrlNotFoundException $aopIdpUrlNotFoundException) {
            $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
                ->setError($aopIdpUrlNotFoundException->getMessage());

            $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
                ->setOauthResponseError($oauthResponseErrorTransfer)
                ->setIsSuccessful(false);
        }

        if (!$oauthClientResponseTransfer->getIsSuccessful()) {
            $oauthClientResponseTransfer->setErrorMessage(
                $this->glossaryFacade->translate(
                    'application_catalog_gui.access_token.oauth_error',
                    [],
                    $this->localeFacade->getCurrentLocale(),
                ),
            );

            $oauthAuthenticationFailedException = new OauthAuthenticationFailedException(sprintf(
                'Error: %s; ErrorDescription: %s.',
                $oauthClientResponseTransfer->getOauthResponseError()->getError(),
                $oauthClientResponseTransfer->getOauthResponseError()->getErrorDescription(),
            ));

            ErrorLogger::getInstance()->log($oauthAuthenticationFailedException);
        }

        return $oauthClientResponseTransfer;
    }
}
