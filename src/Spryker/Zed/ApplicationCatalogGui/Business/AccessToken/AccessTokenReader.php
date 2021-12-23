<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business\AccessToken;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;

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
        $oauthClientResponseTransfer = $this->applicationCatalogGuiClient->processAccessTokenRequest();

        if (!$oauthClientResponseTransfer->getIsSuccessful()) {
            $oauthClientResponseTransfer->setErrorMessage(
                $this->glossaryFacade->translate(
                    $this->getTranslationKey($oauthClientResponseTransfer->getOauthResponseError()),
                    [],
                    $this->localeFacade->getCurrentLocale(),
                ),
            );
        }

        return $oauthClientResponseTransfer;
    }

    /**
     * @param \Generated\Shared\Transfer\OauthResponseErrorTransfer $oauthResponseErrorTransfer
     *
     * @return string
     */
    protected function getTranslationKey(OauthResponseErrorTransfer $oauthResponseErrorTransfer): string
    {
        //Create some mapper
        return 'application_catalog_gui.access_token.oauth_error.1';
    }
}
