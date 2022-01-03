<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace SprykerTest\Client\ApplicationCatalogGui;

use Codeception\Test\Unit;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response as GuzzleHttpResponse;
use Psr\Http\Message\StreamInterface;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Spryker\Shared\ApplicationCatalogGui\Exception\AopIdpUrlNotFoundException;
use Symfony\Component\HttpFoundation\Response as SymfonyHttpResponse;

/**
 * Auto-generated group annotations
 *
 * @group SprykerTest
 * @group Client
 * @group ApplicationCatalogGui
 * @group ApplicationCatalogGuiClientTest
 * Add your own group annotations below this line
 */
class ApplicationCatalogGuiClientTest extends Unit
{
    /**
     * @var string
     */
    protected const TEST_ACCESS_TOKEN = 'some-access-token';

    /**
     * @var int
     */
    protected const TEST_EXPIRES_IN = 86400;

    /**
     * @var string
     */
    protected const TEST_TOKEN_TYPE = 'Bearer';

    /**
     * @var string
     */
    protected const TEST_ERROR = 'access_denied';

    /**
     * @var string
     */
    protected const TEST_ERROR_DESCRIPTION = 'Unauthorized';

    /**
     * @var \SprykerTest\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientTester
     */
    protected $tester;

    /**
     * @return void
     */
    public function testRequestOauthAccessTokenThrowsAopIdpUrlNotFoundException(): void
    {
        // Arrange
        $this->tester->mockAopClientConfig(null);

        // Assert
        $this->expectException(AopIdpUrlNotFoundException::class);

        // Act
        $this->tester->getClient()->requestOauthAccessToken();
    }

    /**
     * @return void
     */
    public function testRequestOauthAccessTokenReturnsErrorWhenUnauthorized(): void
    {
        // Arrange
        $httpClientMock = $this->getHttpClientMock();
        $responseMock = $this->getResponseMock(
            'unsuccessful_response.json',
            SymfonyHttpResponse::HTTP_UNAUTHORIZED,
        );
        $httpClientMock->method('request')->willThrowException(
            new RequestException('', new Request('post', 'uri'), $responseMock),
        );
        $this->tester->mockAopClientConfig();

        // Act
        $oauthClientResponseTransfer = $this->tester->getClient()->requestOauthAccessToken();

        // Assert
        $this->assertFalse($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertSame(static::TEST_ERROR, $oauthClientResponseTransfer->getOauthResponseError()->getError());
        $this->assertSame(static::TEST_ERROR_DESCRIPTION, $oauthClientResponseTransfer->getOauthResponseError()->getErrorDescription());
    }

    /**
     * @return void
     */
    public function testRequestOauthAccessTokenReturnsAccessTokenWhenSuccess(): void
    {
        // Arrange
        $httpClientMock = $this->getHttpClientMock();
        $responseMock = $this->getResponseMock(
            'successful_response.json',
            SymfonyHttpResponse::HTTP_OK,
        );
        $httpClientMock->method('request')->willReturn($responseMock);
        $this->tester->mockAopClientConfig();

        // Act
        $oauthClientResponseTransfer = $this->tester->getClient()->requestOauthAccessToken();

        // Assert
        $this->assertTrue($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertEquals(static::TEST_ACCESS_TOKEN, $oauthClientResponseTransfer->getAccessToken());
        $this->assertEquals(static::TEST_EXPIRES_IN, $oauthClientResponseTransfer->getExpiresIn());
        $this->assertEquals(static::TEST_TOKEN_TYPE, $oauthClientResponseTransfer->getTokenType());
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface|\PHPUnit\Framework\MockObject\MockObject
     */
    protected function getHttpClientMock(): ApplicationCatalogGuiToGuzzleClientInterface
    {
        $httpClientMock = $this->createMock(ApplicationCatalogGuiToGuzzleClientInterface::class);

        $this->tester->setDependency(
            ApplicationCatalogGuiDependencyProvider::CLIENT_HTTP,
            $httpClientMock,
        );

        return $httpClientMock;
    }

    /**
     * @param string $responseFileName
     * @param int $responseCode
     *
     * @return \GuzzleHttp\Psr7\Response|\PHPUnit\Framework\MockObject\MockObject
     */
    protected function getResponseMock(string $responseFileName, int $responseCode): GuzzleHttpResponse
    {
        $responseBody = $this->tester->getFixture($responseFileName);
        $responseMock = $this->createMock(GuzzleHttpResponse::class);
        $streamMock = $this->createMock(StreamInterface::class);

        $streamMock->method('getContents')
            ->willReturn($responseBody);
        $responseMock->method('getBody')
            ->willReturn($streamMock);
        $responseMock->method('getStatusCode')
            ->willReturn($responseCode);

        return $responseMock;
    }
}
