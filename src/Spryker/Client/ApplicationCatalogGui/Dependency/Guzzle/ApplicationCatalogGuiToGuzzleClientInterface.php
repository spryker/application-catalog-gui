<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Client\ApplicationCatalogGui\Dependency\Guzzle;

use Psr\Http\Message\ResponseInterface;

interface ApplicationCatalogGuiToGuzzleClientInterface
{
    /**
     * @param string $method
     * @param string $uri
     * @param array<string, mixed> $options
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function request(string $method, string $uri, array $options = []): ResponseInterface;
}
