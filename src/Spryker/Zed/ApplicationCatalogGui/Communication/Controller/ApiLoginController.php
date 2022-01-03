<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Controller;

use Spryker\Zed\Kernel\Communication\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Communication\ApplicationCatalogGuiCommunicationFactory getFactory()
 * @method \Spryker\Zed\ApplicationCatalogGui\Business\ApplicationCatalogGuiFacadeInterface getFacade()
 */
class ApiLoginController extends AbstractController
{
    /**
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function indexAction(): JsonResponse
    {
        $oauthClientResponseTransfer = $this->getFacade()->requestAccessToken();

        if ($oauthClientResponseTransfer->getIsSuccessful()) {
            $responseData = $this->getFactory()->createOauthClientResponseTransferToResponseDataMapper()
                ->mapSuccessOauthClientResponseTransferToResponseAccessTokenData($oauthClientResponseTransfer, []);
            $status = Response::HTTP_OK;
        } else {
            $responseData = $this->getFactory()->createOauthClientResponseTransferToResponseDataMapper()
                ->mapFailedOauthClientResponseTransferToResponseErrorData($oauthClientResponseTransfer, []);
            $status = Response::HTTP_BAD_REQUEST;
        }

        return $this->jsonResponse($responseData, $status);
    }
}
