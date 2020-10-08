{*/* * *******************************************************************************
 * The content of this file is subject to the ITS4YouInstaller license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */*}
{strip}
{assign var=IS_AUTH value=($REGISTRATION_STATUS and $PASSWORD_STATUS)}
    <div class="row" style="height:100%">
        <ul class="nav nav-tabs layoutTabs massEditTabs">
            <li class="tab-item taxesTab active"><a data-toggle="tab" href="#installedModules"><strong>{vtranslate('LBL_INSTALLED_AND_AVAILABLE_MODULES', $QUALIFIED_MODULE)}</strong></a></li>
            <li class="tab-item chargesTab"><a data-toggle="tab" href="#modulesShop"><strong>{vtranslate('LBL_MODULES_SHOP', $QUALIFIED_MODULE)}</strong></a></li>
        </ul>
        <div class="tab-content layoutContent padding20 overflowVisible" style="height:100%">
            {include file="InstalledModules.tpl"|vtemplate_path:$QUALIFIED_MODULE}
            {include file="ModulesShop.tpl"|vtemplate_path:$QUALIFIED_MODULE}
        </div>
    </div>
{/strip}