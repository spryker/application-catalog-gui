<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Controller;

use Generated\Shared\Transfer\ApplicationConfigurationRequestTransfer;
use Generated\Shared\Transfer\ApplicationConnectRequestTransfer;
use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Spryker\Zed\ApplicationCatalogGui\Communication\Table\ApplicationsTable;
use Spryker\Zed\Kernel\Communication\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Communication\ApplicationCatalogGuiCommunicationFactory getFactory()
 */
class IndexController extends AbstractController
{
    /**
     * @var string
     */
    protected const PARAM_SEARCH_TERM = 'search';
    /**
     * @var string
     */
    protected const PARAM_PAGE = 'page';
    /**
     * @var string
     */
    protected const PARAM_CONNECTION_STATE_IDS = 'connection-states';

    /**
     * @var string
     */
    protected const MESSAGE_CONNECTION_FAILED = 'Connection is failed';

    /**
     * @return mixed[]
     */
    public function indexAction(): array
    {
        $localeTransfer = $this->getFactory()->getLocaleFacade()
            ->getCurrentLocale();

        return $this->viewResponse([
            'localeName' => mb_substr($localeTransfer->getLocaleNameOrFail(), 0, 2),
            'tenantUuid' => $this->getFactory()->getConfig()
                ->getTenantUuid(),
            'baseUrlZed' => $this->getFactory()->getConfig()
                ->getBaseUrlZed(),
            'registryServiceEndpoint' => $this->getFactory()->getConfig()
                ->getRegistryServiceEndpoint(),
        ]);
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function tableAction(Request $request): JsonResponse
    {
        $applicationCriteriaTransfer = $this->getApplicationCriteriaTransferFromRequest($request);
        $applicationsTable = $this->getFactory()->createApplicationsTable($applicationCriteriaTransfer);

        return $this->jsonResponse(
            $applicationsTable->fetchData()
        );
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     *
     * @return mixed[]
     */
    public function detailsAction(Request $request): array
    {
        $applicationTransfer = $this->getApplicationTransfer($request);

        if ($applicationTransfer === null) {
            throw new NotFoundHttpException('Application not found');
        }

        return $this->viewResponse([
            'appData' => $applicationTransfer,
        ]);
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function connectAction(Request $request): RedirectResponse
    {
        $uuid = (string)$request->query->get(ApplicationsTable::KEY_UUID, '');

        $applicationConnectRequestTransfer = (new ApplicationConnectRequestTransfer())
            ->setApplicationUuid($uuid);

        $applicationConnectResponseTransfer = $this->getFactory()
            ->getApplicationCatalogClient()
            ->connectApplication($applicationConnectRequestTransfer);

        if (!$applicationConnectResponseTransfer->getIsConnected()) {
            $this->addErrorMessage(static::MESSAGE_CONNECTION_FAILED);
        }

        return $this->redirectResponse($request->headers->get('referer'));
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     *
     * @return mixed[]
     */
    public function configureAction(Request $request): array
    {
        $uuid = (string)$request->query->get(ApplicationsTable::KEY_UUID, '');
        $applicationTransfer = $this->getApplicationTransfer($request);

        if ($applicationTransfer === null) {
            throw new NotFoundHttpException('Application not found');
        }

        $applicationSchemaAndHost = $request->getSchemeAndHttpHost();

        $applicationConfigRequestTransfer = (new ApplicationConfigurationRequestTransfer())
            ->setApplicationUuid($uuid)
            ->setTenantDomain($applicationSchemaAndHost)
            ->setTenantUuid($this->getFactory()->getConfig()->getTenantUuid());

        $applicationConfigResponseTransfer = $this->getFactory()
            ->getApplicationCatalogClient()
            ->getApplicationConfiguration($applicationConfigRequestTransfer);

        return $this->viewResponse([
            'frameSourceUrl' => $applicationConfigResponseTransfer->getConfigUrlOrFail(),
            'appName' => $applicationTransfer->getName(),
        ]);
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return \Generated\Shared\Transfer\ApplicationTransfer|null
     */
    protected function getApplicationTransfer(Request $request): ?ApplicationTransfer
    {
        $uuid = (string)$request->query->get(ApplicationsTable::KEY_UUID, '');

        $applicationCriteriaTransfer = (new ApplicationCriteriaTransfer())
            ->setApplicationUuid($uuid)
            ->setLocale($this->getFactory()->getLocaleFacade()->getCurrentLocale());

        return $this->getFactory()
            ->getApplicationCatalogClient()
            ->findApplication($applicationCriteriaTransfer);
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return \Generated\Shared\Transfer\ApplicationCriteriaTransfer
     */
    protected function getApplicationCriteriaTransferFromRequest(Request $request): ApplicationCriteriaTransfer
    {
        $filterData = (array)$request->query->get(ApplicationsTable::KEY_FILTER);

        $applicationCriteriaTransfer = (new ApplicationCriteriaTransfer())
            ->setLocale($this->getFactory()->getLocaleFacade()->getCurrentLocale());

        if (!empty($filterData[ApplicationsTable::KEY_CATEGORY_IDS])) {
            $applicationCriteriaTransfer->setCategoryIds(explode(',', $filterData[ApplicationsTable::KEY_CATEGORY_IDS]));
        }

        if (!empty($filterData[ApplicationsTable::KEY_LABEL_IDS])) {
            $applicationCriteriaTransfer->setLabelIds(explode(',', $filterData[ApplicationsTable::KEY_LABEL_IDS]));
        }

        $searchData = (array)$request->query->get(static::PARAM_SEARCH_TERM);
        if (!empty($searchData[ApplicationsTable::KEY_SEARCH_VALUE])) {
            $applicationCriteriaTransfer->setSearchTerm($searchData[ApplicationsTable::KEY_SEARCH_VALUE]);
        }

        return $applicationCriteriaTransfer;
    }
}
