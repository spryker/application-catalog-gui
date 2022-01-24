<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace SprykerTest\Zed\ApplicationCatalogGui\Business;

use Codeception\Test\Unit;
use Generated\Shared\Transfer\AccessTokenErrorTransfer;
use Generated\Shared\Transfer\AccessTokenResponseTransfer;
use Spryker\Client\ApplicationCatalogGui\ApplicationCatalogGuiClientInterface;
use Spryker\Zed\ApplicationCatalogGui\ApplicationCatalogGuiDependencyProvider;

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
    protected const TEST_ERROR = 'access_denied';

    /**
     * @var string
     */
    protected const TEST_ERROR_DESCRIPTION = 'Authentication failed.';

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
        $accessTokenResponseTransfer = (new AccessTokenResponseTransfer())
            ->setIsSuccessful(true)
            ->setAccessToken(static::TEST_ACCESS_TOKEN)
            ->setExpiresIn(static::TEST_EXPIRES_IN);

        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestAccessToken')->willReturn($accessTokenResponseTransfer);

        // Act
        $accessTokenResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertTrue($accessTokenResponseTransfer->getIsSuccessful());
        $this->assertEquals(static::TEST_ACCESS_TOKEN, $accessTokenResponseTransfer->getAccessToken());
        $this->assertEquals(static::TEST_EXPIRES_IN, $accessTokenResponseTransfer->getExpiresIn());
    }

    /**
     * @return void
     */
    public function testRequestAccessTokenReturnsErrorWhenOauthRequestIsUnsuccessful(): void
    {
        // Arrange
        $accessTokenErrorTransfer = (new AccessTokenErrorTransfer())
            ->setError(static::TEST_ERROR)
            ->setErrorDescription(static::TEST_ERROR_DESCRIPTION);
        $accessTokenResponseTransfer = (new AccessTokenResponseTransfer())
            ->setIsSuccessful(false)
            ->setAccessTokenError($accessTokenErrorTransfer);

        $applicationCatalogGuiClientMock = $this->getApplicationCatalogGuiClientMock();
        $applicationCatalogGuiClientMock->method('requestAccessToken')->willReturn($accessTokenResponseTransfer);

        // Act
        $accessTokenResponseTransfer = $this->tester->getFacade()->requestAccessToken();

        // Assert
        $this->assertFalse($accessTokenResponseTransfer->getIsSuccessful());
        $this->assertSame(static::TEST_ERROR, $accessTokenResponseTransfer->getAccessTokenError()->getError());
        $this->assertSame(static::TEST_ERROR_DESCRIPTION, $accessTokenResponseTransfer->getAccessTokenError()->getErrorDescription());
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
}
