<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\ApplicationCatalogGui\Dependency\Client;

use Generated\Shared\Transfer\ApplicationCategoryCollectionTransfer;
use Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationCollectionTransfer;
use Generated\Shared\Transfer\ApplicationConnectRequestTransfer;
use Generated\Shared\Transfer\ApplicationConnectResponseTransfer;
use Generated\Shared\Transfer\ApplicationCriteriaTransfer;
use Generated\Shared\Transfer\ApplicationTransfer;
use Generated\Shared\Transfer\LabelCollectionTransfer;
use Generated\Shared\Transfer\LabelCriteriaTransfer;

interface ApplicationCatalogGuiToApplicationCatalogClientInterface
{
    /**
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationTransfer|null
     */
    public function findApplication(
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ): ?ApplicationTransfer;

    /**
     * @param \Generated\Shared\Transfer\ApplicationCriteriaTransfer $applicationCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationCollectionTransfer
     */
    public function getApplicationCollection(
        ApplicationCriteriaTransfer $applicationCriteriaTransfer
    ): ApplicationCollectionTransfer;

    /**
     * @param \Generated\Shared\Transfer\ApplicationCategoryCriteriaTransfer $applicationCategoryCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationCategoryCollectionTransfer
     */
    public function getCategoryCollection(
        ApplicationCategoryCriteriaTransfer $applicationCategoryCriteriaTransfer
    ): ApplicationCategoryCollectionTransfer;

    /**
     * @param \Generated\Shared\Transfer\LabelCriteriaTransfer $labelCriteriaTransfer
     *
     * @return \Generated\Shared\Transfer\LabelCollectionTransfer
     */
    public function getLabelCollection(
        LabelCriteriaTransfer $labelCriteriaTransfer
    ): LabelCollectionTransfer;

    /**
     * @param \Generated\Shared\Transfer\ApplicationConnectRequestTransfer $applicationConnectRequestTransfer
     *
     * @return \Generated\Shared\Transfer\ApplicationConnectResponseTransfer
     */
    public function connectApplication(ApplicationConnectRequestTransfer $applicationConnectRequestTransfer): ApplicationConnectResponseTransfer;
}
