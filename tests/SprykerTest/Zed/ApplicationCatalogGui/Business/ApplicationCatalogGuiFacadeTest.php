<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace SprykerTest\Zed\ApplicationCatalogGui\Business;

use Codeception\Test\Unit;
use Generated\Shared\Transfer\LocaleTransfer;
use Generated\Shared\Transfer\OauthClientResponseTransfer;
use Generated\Shared\Transfer\OauthResponseErrorTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Shared\ApplicationCatalogGui\Exception\AopIdpUrlNotFoundException;
use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;
use Spryker\Zed\ApplicationCatalogGui\Dependency\Facade\ApplicationCatalogGuiToLocaleFacadeInterface;

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
     * @var string
     */
    protected const EXCEPTION_MESSAGE = 'Aop Idp Url not found';

    /**
     * @var string
     */
    protected const ERROR_MESSAGE_EN = 'Authentication failed';

    /**
     * @var string
     */
    protected const ERROR_MESSAGE_DE = 'Authentifizierung fehlgeschlagen';

    /**
     * @var string
     */
    protected const TEST_LOCALE_NAME_DE = 'de_DE';

    /**
     * @var \SprykerTest\Zed\ApplicationCatalogGui\ApplicationCatalogGuiBusinessTester
     */
    protected $tester;

    /**
     * @return void
     */
    public function testRequestAccessTokenReturnsValidToken(): void
    {
        // Arrange
        $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
            ->setIsSuccessful(true)
            ->setAccessToken(static::TEST_ACCESS_TOKEN)
            ->setExpiresIn(static::TEST_EXPIRES_IN)
            ->setTokenType(static::TEST_TOKEN_TYPE);

        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestOauthAccessToken')->willReturn($oauthClientResponseTransfer);

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertTrue($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertEquals(static::TEST_ACCESS_TOKEN, $oauthClientResponseTransfer->getAccessToken());
        $this->assertEquals(static::TEST_EXPIRES_IN, $oauthClientResponseTransfer->getExpiresIn());
        $this->assertEquals(static::TEST_TOKEN_TYPE, $oauthClientResponseTransfer->getTokenType());
    }

    /**
     * @return void
     */
    public function testRequestAccessTokenReturnsErrorWhenOauthRequestIsUnsuccessful(): void
    {
        // Arrange
        $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
            ->setError(static::TEST_ERROR)
            ->setErrorDescription(static::TEST_ERROR_DESCRIPTION);
        $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
            ->setIsSuccessful(false)
            ->setOauthResponseError($oauthResponseErrorTransfer);

        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestOauthAccessToken')->willReturn($oauthClientResponseTransfer);

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertFalse($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertSame(static::TEST_ERROR, $oauthClientResponseTransfer->getOauthResponseError()->getError());
        $this->assertSame(static::TEST_ERROR_DESCRIPTION, $oauthClientResponseTransfer->getOauthResponseError()->getErrorDescription());
        $this->assertSame(static::ERROR_MESSAGE_EN, $oauthClientResponseTransfer->getErrorMessage());
    }

    /**
     * @return void
     */
    public function testRequestAccessTokenReturnsErrorWhenOauthRequestIsUnsuccessfulWithDeLocale(): void
    {
        // Arrange
        $oauthResponseErrorTransfer = (new OauthResponseErrorTransfer())
            ->setError(static::TEST_ERROR)
            ->setErrorDescription(static::TEST_ERROR_DESCRIPTION);
        $oauthClientResponseTransfer = (new OauthClientResponseTransfer())
            ->setIsSuccessful(false)
            ->setOauthResponseError($oauthResponseErrorTransfer);

        $this->mockLocaleFacade(static::TEST_LOCALE_NAME_DE);
        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestOauthAccessToken')->willReturn($oauthClientResponseTransfer);

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertFalse($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertSame(static::TEST_ERROR, $oauthClientResponseTransfer->getOauthResponseError()->getError());
        $this->assertSame(static::TEST_ERROR_DESCRIPTION, $oauthClientResponseTransfer->getOauthResponseError()->getErrorDescription());
        $this->assertSame(static::ERROR_MESSAGE_DE, $oauthClientResponseTransfer->getErrorMessage());
    }

    /**
     * @return void
     */
    public function testGetAccessTokenThrowsAopIdpUrlNotFoundException(): void
    {
        // Arrange
        $aopIdpUrlNotFoundException = new AopIdpUrlNotFoundException(static::EXCEPTION_MESSAGE);
        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestOauthAccessToken')->willThrowException($aopIdpUrlNotFoundException);

        // Act
        $oauthClientResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertFalse($oauthClientResponseTransfer->getIsSuccessful());
        $this->assertSame(static::EXCEPTION_MESSAGE, $oauthClientResponseTransfer->getOauthResponseError()->getError());
        $this->assertNull($oauthClientResponseTransfer->getOauthResponseError()->getErrorDescription());
        $this->assertSame(static::ERROR_MESSAGE_EN, $oauthClientResponseTransfer->getErrorMessage());
    }

    /**
     * @return \Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface|\PHPUnit\Framework\MockObject\MockObject
     */
    protected function getApplicationCatalogGuiClientMock(): ApplicationCatalogGuiClientInterface
    {
        $applicationCatalogGuiClientMock = $this->createMock(ApplicationCatalogGuiClientInterface::class);

        $this->tester->setDependency(
            ApplicationCatalogGuiDependencyProvider::CLIENT_APPLICATION_CATALOG_GUI,
            $applicationCatalogGuiClientMock,
        );

        return $applicationCatalogGuiClientMock;
    }

    /**
     * @param string $localeName
     *
     * @return void
     */
    protected function mockLocaleFacade(string $localeName): void
    {
        $localeFacadeMock = $this->createMock(ApplicationCatalogGuiToLocaleFacadeInterface::class);

        $localeFacadeMock->method('getCurrentLocale')->willReturn(
            (new LocaleTransfer())->setLocaleName($localeName),
        );

        $this->tester->setDependency(
            ApplicationCatalogGuiDependencyProvider::FACADE_LOCALE,
            $localeFacadeMock,
        );
    }
}
