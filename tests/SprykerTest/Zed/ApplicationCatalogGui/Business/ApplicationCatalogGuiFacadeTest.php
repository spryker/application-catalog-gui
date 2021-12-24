<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace SprykerTest\Zed\ApplicationCatalogGui\Business;

use Codeception\Test\Unit;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response as GuzzleHttpResponse;
use Psr\Http\Message\StreamInterface;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle\ApplicationCatalogGuiToGuzzleClientInterface;
use Symfony\Component\HttpFoundation\Response as SymfonyHttpResponse;

/**
 * Auto-generated group annotations
 *
 * @group SprykerTest
 * @group Zed
 * @group ApplicationCatalogGui
 * @group Business
 * @group Facade
 * @group ApplicationCatalogGuiFacadeTest
 * Add your own group annotations below this line
 */
class ApplicationCatalogGuiFacadeTest extends Unit
{
    /**
     * @var \SprykerTest\Zed\ApplicationCatalogGui\ApplicationCatalogGuiBusinessTester
     */
    protected $tester;

    /**
     * @return void
     */
    public function testGetAccessTokenWithSuccesssfulResponse(): void
    {
        // Arrange
        $httpClientMock = $this->getHttpClientMock();
        $responseMock = $this->getResponseMock('successful_request.json', SymfonyHttpResponse::HTTP_OK);
        $httpClientMock->method('request')->willReturn($responseMock);

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->getAccessToken();

        // Assert
        $this->assertTrue($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertEquals('some-access-token', $oauthClientResponseTransfer->getAccessToken());
        $this->assertEquals(86400, $oauthClientResponseTransfer->getExpiresIn());
        $this->assertEquals('Bearer', $oauthClientResponseTransfer->getTokenType());
    }

    /**
     * @return void
     */
    public function testGetAccessTokenWithFailedResponse(): void
    {
        // Arrange
        $httpClientMock = $this->getHttpClientMock();
        $responseMock = $this->getResponseMock('unsuccessful_request.json', SymfonyHttpResponse::HTTP_UNAUTHORIZED);
        $httpClientMock->method('request')->willThrowException((new RequestException('', new Request('post', 'uri'), $responseMock)));

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->getAccessToken();

        // Assert
        $this->assertFalse($oauthClientResponseTransfer->getIsSuccessful());
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
        $responseBody = $this->getFixture($responseFileName);
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

    /**
     * @param string $fileName
     *
     * @return string
     */
    protected function getFixture(string $fileName): string
    {
        return file_get_contents(codecept_data_dir('Fixtures/' . $fileName));
    }
}
