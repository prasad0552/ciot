<?php
/*+***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 * ************************************************************************************/

class Project_Module_Model extends Vtiger_Module_Model
{

    public function getSideBarLinks($linkParams)
    {
        $userPrivilegesModel = Users_Privileges_Model::getCurrentUserPrivilegesModel();
        $linkTypes = array('SIDEBARLINK', 'SIDEBARWIDGET');
        $links = parent::getSideBarLinks($linkParams);
        $quickLinks = array();

        $projectTaskInstance = Vtiger_Module_Model::getInstance('ProjectTask');
        if ($userPrivilegesModel->hasModulePermission($projectTaskInstance->getId())) {
            $quickLinks[] = array(
                'linktype' => 'SIDEBARLINK',
                'linklabel' => 'LBL_TASKS_LIST',
                'linkurl' => $this->getTasksListUrl(),
                'linkicon' => '',
            );
        }

        $projectMileStoneInstance = Vtiger_Module_Model::getInstance('ProjectMilestone');
        if ($userPrivilegesModel->hasModulePermission($projectMileStoneInstance->getId())) {
            $quickLinks[] = array(
                'linktype' => 'SIDEBARLINK',
                'linklabel' => 'LBL_MILESTONES_LIST',
                'linkurl' => $this->getMilestonesListUrl(),
                'linkicon' => '',
            );
        }

        foreach ($quickLinks as $quickLink) {
            $links['SIDEBARLINK'][] = Vtiger_Link_Model::getInstanceFromValues($quickLink);
        }

        return $links;
    }

    public function getTasksListUrl()
    {
        $taskModel = Vtiger_Module_Model::getInstance('ProjectTask');
        return $taskModel->getListViewUrl();
    }

    public function getMilestonesListUrl()
    {
        $milestoneModel = Vtiger_Module_Model::getInstance('ProjectMilestone');
        return $milestoneModel->getListViewUrl();
    }

    /*
     * Function to get supported utility actions for a module
     */
    function getUtilityActionsNames()
    {
        return array('Import', 'Export', 'DuplicatesHandling');
    }

    /**
     * Function to get relation query for particular module with function name
     * @param <record> $recordId
     * @param <String> $functionName
     * @param Vtiger_Module_Model $relatedModule
     * @return <String>
     */
    public function getRelationQuery($recordId, $functionName, $relatedModule, $relationId)
    {
        $relatedModuleName = $relatedModule->getName();
        $query = parent::getRelationQuery($recordId, $functionName, $relatedModule, $relationId);
        return $query;
    }

    /**
     * Function to get list view query for popup window
     * @param <String> $sourceModule Parent module
     * @param <String> $field parent fieldname
     * @param <Integer> $record parent id
     * @param <String> $listQuery
     * @return <String> Listview Query
     */
    public function getQueryByModuleField($sourceModule, $field, $record, $listQuery)
    {
        if ($sourceModule === 'HelpDesk') {
            $condition = " vtiger_project.projectid NOT IN (SELECT relcrmid FROM vtiger_crmentityrel WHERE crmid = ? UNION SELECT crmid FROM vtiger_crmentityrel WHERE relcrmid = ?) ";
            $db = PearDatabase::getInstance();
            $condition = $db->convert2Sql($condition, array($record, $record));

            $pos = stripos($listQuery, 'where');
            if ($pos) {
                $split = preg_split('/where/i', $listQuery);
                $overRideQuery = $split[0] . ' WHERE ' . $split[1] . ' AND ' . $condition;
            } else {
                $overRideQuery = $listQuery . ' WHERE ' . $condition;
            }
            return $overRideQuery;
        }
    }

    /**
     * Function returns Leads grouped by Status
     * @param type $data
     * @return <Array>
     */
    public function getProjectsByStatus($owner, $dateFilter)
    {
        $db = PearDatabase::getInstance();

        $ownerSql = $this->getOwnerWhereConditionForDashBoards($owner);
        if (!empty($ownerSql)) {
            $ownerSql = ' AND ' . $ownerSql;
        }

        $params = array();
        if (!empty($dateFilter)) {
            $dateFilterSql = ' AND createdtime BETWEEN ? AND ? ';
            //appended time frame and converted to db time zone in showwidget.php
            $params[] = $dateFilter['start'];
            $params[] = $dateFilter['end'];
        }
        $picklistvaluesmap = getAllPickListValues("projectstatus");
        foreach ($picklistvaluesmap as $picklistValue) {
            $params[] = $picklistValue;
        }

        $result = $db->pquery('SELECT COUNT(*) as count, CASE WHEN vtiger_projectstatus.projectstatus IS NULL OR vtiger_projectstatus.projectstatus = "" THEN "" ELSE 
						vtiger_projectstatus.projectstatus END AS projectstatusvalue FROM vtiger_project 
						INNER JOIN vtiger_crmentity ON vtiger_project.projectid = vtiger_crmentity.crmid
						AND deleted=0  ' . Users_Privileges_Model::getNonAdminAccessControlQuery($this->getName()) . $ownerSql . ' ' . $dateFilterSql .
            'INNER JOIN vtiger_projectstatus ON vtiger_project.projectstatus = vtiger_projectstatus.projectstatus 
                        WHERE vtiger_project.projectstatus IN (' . generateQuestionMarks($picklistvaluesmap) . ') 
						GROUP BY projectstatusvalue ORDER BY vtiger_projectstatus.sortorderid', $params);

        $response = array();

        for ($i = 0; $i < $db->num_rows($result); $i++) {
            $row = $db->query_result_rowdata($result, $i);
            $response[$i][0] = $row['count'];
            $projectstatusVal = $row['projectstatusvalue'];
            if ($projectstatusVal == '') {
                $projectstatusVal = 'LBL_BLANK';
            }
            $response[$i][1] = vtranslate($projectstatusVal, $this->getName());
            $response[$i][2] = $projectstatusVal;
        }
        return $response;
    }
}
