<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\ExternalClient;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\RequestOptions;
use Psr\Http\Message\ResponseInterface;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig;
use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface;
use Spryker\Shared\ApplicationCatalogGui\Exception\AopIdpUrlNotFoundException;
use Symfony\Component\HttpFoundation\Request;

class OauthAccessTokenClient implements OauthAccessTokenClientInterface
{
    /**
     * @var string
     */
    protected const GRANT_TYPE = 'client_credentials';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_ERROR = 'error';

    /**
     * @var string
     */
    protected const RESPONSE_KEY_ERROR_DESCRIPTION = 'error_description';

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface
     */
    protected $applicationCatalogGuiToGuzzleClient;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface
     */
    protected $utilEncodingService;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig
     */
    protected $applicationCatalogGuiConfig;

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface $applicationCatalogGuiToGuzzleClient
     * @param \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface $utilEncodingService
     * @param \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
     */
    public function __construct(
        ApplicationCatalogGuiToGuzzleClientInterface $applicationCatalogGuiToGuzzleClient,
        ApplicationCatalogGuiToUtilEncodingInterface $utilEncodingService,
        ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
    ) {
        $this->applicationCatalogGuiToGuzzleClient = $applicationCatalogGuiToGuzzleClient;
        $this->utilEncodingService = $utilEncodingService;
        $this->applicationCatalogGuiConfig = $applicationCatalogGuiConfig;
    }

    /**
     * @throws \Spryker\Shared\ApplicationCatalogGui\Exception\AopIdpUrlNotFoundException
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestOauthAccessToken(): OauthClientResponseTransfer
    {
        $aopIdpUrl = $this->applicationCatalogGuiConfig->getAopIdpUrl();

        if (!$aopIdpUrl) {
            throw new AopIdpUrlNotFoundException('Aop IDP url was not found.');
        }

        try {
            $response = $this->applicationCatalogGuiToGuzzleClient->request(
                Request::METHOD_POST,
                $aopIdpUrl,
                [
                    RequestOptions::JSON => [
                        'client_id' => $this->applicationCatalogGuiConfig->getAopClientId(),
                        'client_secret' => $this->applicationCatalogGuiConfig->getAopClientSecret(),
                        'grant_type' => static::GRANT_TYPE,
                        'audience' => $this->applicationCatalogGuiConfig->getAopAudience(),
                    ],
                ],
            );

            $responseData = $this->utilEncodingService->decodeJson($response->getBody()->getContents(), true);

            return (new OauthClientResponseTransfer())
                ->setIsSuccessful(true)
                ->fromArray($responseData, true);
        } catch (RequestException $requestException) {
            return $this->processUnexpectedResponse($requestException->getResponse());
        }
    }

    /**
     * @param \Psr\Http\Message\ResponseInterface|null $response
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    protected function processUnexpectedResponse(?ResponseInterface $response): OauthClientResponseTransfer
    {
        $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
            ->setIsSuccessful(false);

        if ($response) {
            $responseData = $this->utilEncodingService->decodeJson($response->getBody()->getContents(), true);

            $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
                ->setError($responseData[static::RESPONSE_KEY_ERROR] ?? null)
                ->setErrorDescription($responseData[static::RESPONSE_KEY_ERROR_DESCRIPTION] ?? null);
        } else {
            $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
                ->setError('Response is empty.');
        }

        return $oauthClientResponseTransfer->setOauthResponseError($oauthResponseErrorTransfer);
    }
}
