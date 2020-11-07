<?php

include_once 'vtlib/Vtiger/Module.php';

$Vtiger_Utils_Log = true;


$module = Vtiger_Module::getInstance('Faq');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('SwVtTools');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Portal');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Assets');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('SMSNotifier');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Emails');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Google');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('ServiceContracts');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Services');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('PBXManager');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('HelpDesk');
if ($module)
    $module->delete();


$module = Vtiger_Module::getInstance('Contacts');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Potentials');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Accounts');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Leads');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Products');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Vendors');
if ($module)
    $module->delete();


$module = Vtiger_Module::getInstance('PriceBooks');
if ($module)
    $module->delete();


$module = Vtiger_Module::getInstance('Quotes');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('PurchaseOrder');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('SalesOrder');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Invoice');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Campaigns');
if ($module)
    $module->delete();

$module = Vtiger_Module::getInstance('Rss');
if ($module)
    $module->delete();


