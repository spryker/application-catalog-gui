<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Business\AccessToken;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Shared\Log\LoggerTrait;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToGlossaryInterface;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;

class AccessTokenReader implements AccessTokenReaderInterface
{
    use LoggerTrait;

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
    public function requestAccessToken(): OauthClientResponseTransfer
    {
        $oauthClientResponseTransfer = $this->applicationCatalogGuiClient->requestOauthAccessToken();

        if (!$oauthClientResponseTransfer->getIsSuccessful()) {
            $oauthClientResponseTransfer->setErrorMessage(
                $this->glossaryFacade->translate(
                    'application_catalog_gui.access_token.oauth_error',
                    [],
                    $this->localeFacade->getCurrentLocale(),
                ),
            );

            $this->getLogger()->error(sprintf(
                'Error: %s; ErrorDescription: %s.',
                $oauthClientResponseTransfer->getOauthResponseErrorOrFail()->getError(),
                $oauthClientResponseTransfer->getOauthResponseErrorOrFail()->getErrorDescription(),
            ));
        }

        return $oauthClientResponseTransfer;
    }
}
