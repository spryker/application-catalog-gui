<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Communication\Controller;

use Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Generated\Shared\Transfer\LabelCriteriaTransfer;
use Spryker\Zed\Kernel\Communication\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * @method \Spryker\Zed\ApplicationCatalogGui\Communication\ApplicationCatalogGuiCommunicationFactory getFactory()
 */
class IndexController extends AbstractController
{
    protected const PARAM_SEARCH_TERM = 'search';
    protected const PARAM_PAGE = 'page';
    protected const PARAM_FILTER = 'filter';
    protected const PARAM_CONNECTION_STATE_IDS = 'connection-states';
    protected const PARAM_IDENTIFIER = 'id';

    protected const KEY_PAGE_NUMBER = 'number';
    protected const KEY_PAGE_SIZE = 'size';
    protected const KEY_CATEGORY_IDS = 'categories';
    protected const KEY_LABEL_IDS = 'labels';
    protected const KEY_SEARCH_VALUE = 'value';

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     *
     * @return mixed[]
     */
    public function indexAction(Request $request): array
    {
        $applicationCriteriaTransfer = $this->getApplicationCriteriaTransferFromRequest($request);
        $applicationsTable = $this->getFactory()->createApplicationsTable($applicationCriteriaTransfer);

        $applicationCategoryCriteriaTransfer = (new ApplicationCategoryCriteriaTransfer())
            ->setLocale($applicationCriteriaTransfer->getLocale());
        $applicationCategoryCollectionTransfer = $this->getFactory()->getApplicationCatalogClient()
            ->getCategoryCollection($applicationCategoryCriteriaTransfer);

        $labelCriteriaTransfer = (new LabelCriteriaTransfer())
            ->setLocale($applicationCriteriaTransfer->getLocale());
        $labelCollectionTransfer = $this->getFactory()->getApplicationCatalogClient()
            ->getLabelCollection($labelCriteriaTransfer);

        return $this->viewResponse([
            'appsTable' => $applicationsTable->render(),
            'labelButtons' => $applicationsTable->renderLabelButtons(
                $labelCollectionTransfer->getLabels(),
                $applicationCriteriaTransfer->getLabelIds()
            ),
            'categoriesMenu' => $applicationsTable->renderCategoriesMenu(
                $applicationCategoryCollectionTransfer->getCategories(),
                $applicationCriteriaTransfer->getCategoryIds()
            ),
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
     * @return \Generated\Shared\Transfer\ApplicationTransfer|null
     */
    protected function getApplicationTransfer(Request $request): ?ApplicationTransfer
    {
        $identifier = (string)$request->query->get(static::PARAM_IDENTIFIER);

        $applicationCriteriaTransfer = (new ApplicationCriteriaTransfer())
            ->setIdApplication($identifier)
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
        $filterData = (array)$request->query->get(static::PARAM_FILTER);

        $applicationCriteriaTransfer = (new ApplicationCriteriaTransfer())
            ->setLocale($this->getFactory()->getLocaleFacade()->getCurrentLocale());

        if (!empty($filterData[self::KEY_CATEGORY_IDS])) {
            $applicationCriteriaTransfer->setCategoryIds(explode(',', $filterData[self::KEY_CATEGORY_IDS]));
        }

        if (!empty($filterData[self::KEY_LABEL_IDS])) {
            $applicationCriteriaTransfer->setLabelIds(explode(',', $filterData[self::KEY_LABEL_IDS]));
        }

        $searchData = (array)$request->query->get(static::PARAM_SEARCH_TERM);
        if (!empty($searchData[self::KEY_SEARCH_VALUE])) {
            $applicationCriteriaTransfer->setSearchTerm($searchData[self::KEY_SEARCH_VALUE]);
        }

        return $applicationCriteriaTransfer;
    }
}
