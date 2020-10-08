<?php
/*********************************************************************************
 * The content of this file is subject to the Dynamic Fields 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * *******************************************************************************/

class ITS4YouDynamicFields_Popup_View extends Vtiger_Popup_View
{
    protected $listViewEntries = false;
    protected $listViewHeaders = false;

    public function checkPermission(Vtiger_Request $request)
    {
        $currentUserModel = Users_Record_Model::getCurrentUserModel();
        if (!$currentUserModel->isAdminUser()) {
            throw new AppException(vtranslate('LBL_PERMISSION_DENIED', 'Vtiger'));
        }
    }

    public function process(Vtiger_Request $request)
    {
        $viewer = $this->getViewer($request);
        $moduleName = $this->getModule($request);
        $companyDetails = Vtiger_CompanyDetails_Model::getInstanceById();
        $companyLogo = $companyDetails->getLogo();

        $this->initializeListViewContents($request, $viewer);

        $viewer->assign('COMPANY_LOGO', $companyLogo);

        $viewer->view('Popup.tpl', $moduleName);
    }

    /*
     * Function to initialize the required data in smarty to display the List View Contents
     */
    public function initializeListViewContents(Vtiger_Request $request, Vtiger_Viewer $viewer)
    {
        $moduleName = $this->getModule($request);
        $pageNumber = $request->get('page');
        $orderBy = $request->get('orderby');
        $sortOrder = $request->get('sortorder');
        $moduleModel = Vtiger_Module_Model::getInstance($moduleName);
        $getUrl = $request->get('get_url');

        if (empty ($pageNumber)) {
            $pageNumber = '1';
        }

        $pagingModel = new Vtiger_Paging_Model();
        $pagingModel->set('page', $pageNumber);
        /** @var $listViewModel Settings_ITS4YouDynamicFields_ListView_Model */
        $listViewModel = Settings_Vtiger_ListView_Model::getInstance("Settings:ITS4YouDynamicFields");
        $listViewModel->set('sourceModule', $request->get('parentmodule'));
        $listViewModel->set('isgroup', '0');

        if (!empty($orderBy)) {
            $listViewModel->set('orderby', $orderBy);
            $listViewModel->set('sortorder', $sortOrder);
        }

        $this->listViewHeaders = $listViewModel->getListViewHeaders();
        $this->listViewEntries = $listViewModel->getListViewEntries($pagingModel);
        $noOfEntries = count($this->listViewEntries);

        if (empty($sortOrder)) {
            $sortOrder = "ASC";
        }
        if ($sortOrder == "ASC") {
            $nextSortOrder = "DESC";
            $sortImage = "icon-chevron-down";
            $faSortImage = "fa-sort-desc";
        } else {
            $nextSortOrder = "ASC";
            $sortImage = "icon-chevron-up";
            $faSortImage = "fa-sort-asc";
        }

        $viewer->assign('MODULE', $moduleName);
        $viewer->assign('RELATED_MODULE', $moduleName);
        $viewer->assign('MODULE_NAME', $moduleName);
        $viewer->assign('SOURCE_MODULE', $request->get('src_module'));
        $viewer->assign('SOURCE_FIELD', $request->get('src_field'));
        $viewer->assign('SOURCE_RECORD', $request->get('src_record'));
        $viewer->assign('SEARCH_KEY', $request->get('search_key'));
        $viewer->assign('SEARCH_VALUE', $request->get('search_value'));
        $viewer->assign('ORDER_BY', $orderBy);
        $viewer->assign('SORT_ORDER', $sortOrder);
        $viewer->assign('NEXT_SORT_ORDER', $nextSortOrder);
        $viewer->assign('SORT_IMAGE', $sortImage);
        $viewer->assign('FASORT_IMAGE', $faSortImage);
        $viewer->assign('GETURL', $getUrl);
        $viewer->assign('CURRENCY_ID', $request->get('currency_id'));
        $viewer->assign('PAGING_MODEL', $pagingModel);
        $viewer->assign('PAGE_NUMBER', $pageNumber);
        $viewer->assign('LISTVIEW_ENTRIES_COUNT', $noOfEntries);
        $viewer->assign('LISTVIEW_HEADERS', $this->listViewHeaders);
        $viewer->assign('LISTVIEW_ENTRIES', $this->listViewEntries);
        $viewer->assign('SEARCH_DETAILS', $request->get('search_params'));
        $viewer->assign('MODULE_MODEL', $moduleModel);
        $viewer->assign('VIEW', $request->get('view'));

        if (PerformancePrefs::getBoolean('LISTVIEW_COMPUTE_PAGE_COUNT', false)) {
            if (!$this->listViewCount) {
                $this->listViewCount = $listViewModel->getListViewCount();
            }

            $totalCount = $this->listViewCount;
            $pageLimit = $pagingModel->getPageLimit();
            $pageCount = ceil((int)$totalCount / (int)$pageLimit);

            if ($pageCount == 0) {
                $pageCount = 1;
            }

            $viewer->assign('PAGE_COUNT', $pageCount);
            $viewer->assign('LISTVIEW_COUNT', $totalCount);
        }

        $viewer->assign('MULTI_SELECT', false);
        $viewer->assign('CURRENT_USER_MODEL', Users_Record_Model::getCurrentUserModel());
    }

    /**
     * Function to get listView count
     * @param Vtiger_Request $request
     */
    public function getListViewCount(Vtiger_Request $request)
    {

        $listViewModel = Settings_Vtiger_ListView_Model::getInstance("Settings:ITS4YouDynamicFields");
        $count = $listViewModel->getListViewCount();

        return $count;
    }
}