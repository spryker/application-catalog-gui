<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle;

use Psr\Http\Message\ResponseInterface;

class ApplicationCatalogGuiToGuzzleClientBridge implements ApplicationCatalogGuiToGuzzleClientInterface
{
    /**
     * @var \GuzzleHttp\ClientInterface
     */
    protected $guzzleClient;

    /**
     * @param \GuzzleHttp\ClientInterface $guzzleClient
     */
    public function __construct($guzzleClient)
    {
        $this->guzzleClient = $guzzleClient;
    }

    /**
     * @param string $method
     * @param string $uri
     * @param array<mixed> $options
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function request(string $method, string $uri, array $options = []): ResponseInterface
    {
        return $this->guzzleClient->request($method, $uri, $options);
    }
}
