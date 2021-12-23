<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\Executor;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\RequestOptions;
use Psr\Http\Message\ResponseInterface;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig;
use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Spryker\Service\UtilEncoding\UtilEncodingServiceInterface;
use Symfony\Component\HttpFoundation\Request;

class AccessTokenRequestExecutor implements AccessTokenRequestExecutorInterface
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
     * @var \Spryker\Service\UtilEncoding\UtilEncodingServiceInterface
     */
    protected $utilEncodingService;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig
     */
    protected $applicationCatalogGuiConfig;

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface $applicationCatalogGuiToGuzzleClient
     * @param \Spryker\Service\UtilEncoding\UtilEncodingServiceInterface $utilEncodingService
     * @param \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
     */
    public function __construct(
        ApplicationCatalogGuiToGuzzleClientInterface $applicationCatalogGuiToGuzzleClient,
        UtilEncodingServiceInterface $utilEncodingService,
        ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
    ) {
        $this->applicationCatalogGuiToGuzzleClient = $applicationCatalogGuiToGuzzleClient;
        $this->utilEncodingService = $utilEncodingService;
        $this->applicationCatalogGuiConfig = $applicationCatalogGuiConfig;
    }

    /**
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function processAccessTokenRequest(): OauthClientResponseTransfer
    {
        try {
            $response = $this->applicationCatalogGuiToGuzzleClient->request(
                Request::METHOD_POST,
                $this->applicationCatalogGuiConfig->getAopIdpUrl(),
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
                ->fromArray($responseData);
        } catch (RequestException $requestException) {
            return $this->processUnexpectedResponse($requestException->getResponse());
        }
    }

    /**
     * @param \Psr\Http\Message\ResponseInterface $response
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    protected function processUnexpectedResponse(ResponseInterface $response): OauthClientResponseTransfer
    {
        $responseData = $this->utilEncodingService->decodeJson($response->getBody()->getContents(), true);

        $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
            ->setError($responseData[static::RESPONSE_KEY_ERROR] ?? null)
            ->setErrorDescription($responseData[static::RESPONSE_KEY_ERROR_DESCRIPTION] ?? null);

        return (new OauthClientResponseTransfer())
                ->setIsSuccessful(false)
                ->setOauthResponseError($oauthResponseErrorTransfer);
    }
}
