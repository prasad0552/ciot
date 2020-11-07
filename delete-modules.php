<?php

include_once 'vtlib/Vtiger/Module.php';

$Vtiger_Utils_Log = true;

$module = Vtiger_Module::getInstance('Contacts');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Opportunities');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Organizations');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Leads');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Products');
if ($module)
    $module->delete();
