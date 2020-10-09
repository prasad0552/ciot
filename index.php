<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/

//Overrides GetRelatedList : used to get related query
//TODO : Eliminate below hacking solution
include_once 'config.php';
include_once 'include/Webservices/Relation.php';
include_once 'vtlib/Vtiger/Module.php';
include_once 'includes/main/WebUI.php';

//----------- START ITS4YOU TRACY IMPLEMENTATION -----------
session_start();
$session_tracy = false;
if (isset($_REQUEST['tracy'])) {
    if ($_REQUEST['tracy'] == 'start') {
        $_SESSION['its4you_tracy'] = true;
    } else {
        unset($_SESSION['its4you_tracy']);
    }
}
if (isset($_REQUEST['tracylog'])) {
    if ($_REQUEST['tracylog'] == 'start') {
        $_SESSION['its4you_tracylog'] = true;
    } else {
        unset($_SESSION['its4you_tracylog']);
    }
}
include_once 'include/tracy/src/tracy.php';

use Tracy\Debugger;

$tracy_mode = Debugger::PRODUCTION;
if (isset($_SESSION['its4you_tracy'])) {
    $tracy_mode = Debugger::DEVELOPMENT;
}
$tracylog_dir = null;
if (isset($_SESSION['its4you_tracylog'])) {
    $rootDirectory = vglobal('root_directory');
    $tracylog_dir = $rootDirectory . 'logs/';
}
//Debugger::$logSeverity = E_NOTICE | E_WARNING;
Debugger::$logSeverity = E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED & ~E_USER_DEPRECATED;
Debugger::$strictMode = E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED & ~E_USER_DEPRECATED; // all errors except deprecated notices
//Tracy\OutputDebugger::enable();
//Debugger::enable($tracy_mode, $tracylog_dir);

//----------- END ITS4YOU TRACY IMPLEMENTATION -----------
$webUI = new Vtiger_WebUI();
$webUI->process(new Vtiger_Request($_REQUEST, $_REQUEST));
