<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\RequestExecutor;

use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use GuzzleHttp\RequestOptions;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig;
use Spryker\Client\ApplicationCatalogGui\Dependency\External\ApplicationCatalogGuiToHttpClientAdapterInterface;
use Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface;
use Spryker\Client\ApplicationCatalogGui\Exception\ExternalHttpRequestException;
use Symfony\Component\HttpFoundation\Request;

class OauthRequestExecutor implements OauthRequestExecutorInterface
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
     * @var \Spryker\Client\ApplicationCatalogGui\Dependency\External\ApplicationCatalogGuiToHttpClientAdapterInterface
     */
    protected $applicationCatalogGuiToHttpClientAdapter;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface
     */
    protected $utilEncodingService;

    /**
     * @var \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig
     */
    protected $applicationCatalogGuiConfig;

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\Dependency\External\ApplicationCatalogGuiToHttpClientAdapterInterface $applicationCatalogGuiToHttpClientAdapter
     * @param \Spryker\Client\ApplicationCatalogGui\Dependency\Service\ApplicationCatalogGuiToUtilEncodingInterface $utilEncodingService
     * @param \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
     */
    public function __construct(
        ApplicationCatalogGuiToHttpClientAdapterInterface $applicationCatalogGuiToHttpClientAdapter,
        ApplicationCatalogGuiToUtilEncodingInterface $utilEncodingService,
        ApplicationCatalogGuiConfig $applicationCatalogGuiConfig
    ) {
        $this->applicationCatalogGuiToHttpClientAdapter = $applicationCatalogGuiToHttpClientAdapter;
        $this->utilEncodingService = $utilEncodingService;
        $this->applicationCatalogGuiConfig = $applicationCatalogGuiConfig;
    }

    /**
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    public function requestOauthAccessToken(): OauthClientResponseTransfer
    {
        $aopIdpUrl = $this->applicationCatalogGuiConfig->getAopIdpUrl();

        if (!$aopIdpUrl) {
            $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
                ->setError('Aop IDP url was not found.');

            return (new OauthClientResponseTransfer())
                ->setOauthResponseError($oauthResponseErrorTransfer)
                ->setIsSuccessful(false);
        }

        try {
            $response = $this->applicationCatalogGuiToHttpClientAdapter->request(
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
        } catch (ExternalHttpRequestException $requestException) {
            return $this->processUnexpectedResponse($requestException);
        }
    }

    /**
     * @param \Spryker\Client\ApplicationCatalogGui\Exception\ExternalHttpRequestException $externalHttpRequestException
     *
     * @return \Generated\Shared\Transfer\OauthClientResponseTransfer
     */
    protected function processUnexpectedResponse(ExternalHttpRequestException $externalHttpRequestException): OauthClientResponseTransfer
    {
        $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
            ->setIsSuccessful(false);

        if (!empty($externalHttpRequestException->getResponseBody())) {
            $responseData = $this->utilEncodingService->decodeJson($externalHttpRequestException->getResponseBody(), true);

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
