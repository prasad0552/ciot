<?php
require_once('include/utils/ListViewUtils.php');

function Project_createTasksOnProjectApproval($entityData)
{
    $adb = PearDatabase::getInstance();
    $moduleName = $entityData->getModuleName();
    $wsId = $entityData->getId();
    $parts = explode('x', $wsId);
    $entityId = $parts[1];
    $adb = PearDatabase::getInstance();
    $projecttype = $entityData->get('projecttype');

    $milestones = $adb->pquery(getListQuery('ProjectMilestone') . " AND vtiger_projectmilestone.projectid= ?", array($entityId));

    if ($milestones) {
        $row = $adb->fetch_array($milestones);
    }

//    getListQuery('ProjectTask');
//    exit();
}
