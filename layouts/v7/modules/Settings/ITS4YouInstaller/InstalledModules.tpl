{*/* * *******************************************************************************
 * The content of this file is subject to the ITS4YouInstaller license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */*}
{strip}
    <div class="tab-pane active" id="installedModules">
        {if $ERROR_MESSAGES}
            <div class="col-md-12">
                {foreach from=$ERROR_MESSAGES item=ERROR_MESSAGE}
                    <div>
                        <div class="displayInlineBlock alert alert-danger">{vtranslate($ERROR_MESSAGE, $QUALIFIED_MODULE)}</div>
                    </div>
                {/foreach}
            </div>
        {elseif !$IS_AUTH}
            <div style="text-align: center;">
                <div class="alert alert-danger displayInlineBlock logintoInstaller extensionLoginAlert">{vtranslate('LBL_LOGIN_TO_INSTALLER', $QUALIFIED_MODULE)}</div>
                <br>
            </div>
        {else}
            <div class="col-md-12">
                <h4>{vtranslate('LBL_ACTIVATED_LICENSES', $QUALIFIED_MODULE)}</h4>
                <hr>
                <div>
                    <button class="btn btn-primary activateButton" type="button">
                    <i class="fa fa-plus"></i>&nbsp;&nbsp;
                    <div class="displayInlineBlock">{vtranslate('LBL_ACTIVATE',$QUALIFIED_MODULE)} {vtranslate('LBL_LICENSE_KEY',$QUALIFIED_MODULE)}</div>
                </button>
                &nbsp;&nbsp;
                <button class="btn btn-default updateButton" type="button">
                    <i class="fa fa-refresh"></i>&nbsp;&nbsp;
                    <div class="displayInlineBlock">{vtranslate('LBL_UPDATE_LICENSES',$QUALIFIED_MODULE)}</div>
                </button>
            </div>
            <br>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>{vtranslate('LBL_LICENSE_KEY', $QUALIFIED_MODULE)}</th>
                    <th>{vtranslate('LBL_LICENSE_NAME', $QUALIFIED_MODULE)}</th>
                    <th>{vtranslate('LBL_LICENSE_DUE_DATE', $QUALIFIED_MODULE)}</th>
                    <th>{vtranslate('LBL_LICENSE_TYPE', $QUALIFIED_MODULE)}</th>
                    <th>{vtranslate('LBL_ACTION', $QUALIFIED_MODULE)}</th>
                </tr>
                </thead>
                <tbody>
                {foreach key=LICENSE_KEY item=LICENSE from=$LICENSES_LIST}
                    {if !$LICENSE}{continue}{/if}
                    <tr>
                        <td style="border-left:none;border-right:none;">
                            <a class="licenseColors" href="#{if $LICENSE->get('service_usageunit') neq 'Package'}{$LICENSE->get('cf_identifier')}{/if}">
                                {$LICENSE_KEY}
                            </a>
                        </td>
                        <td style="border-left:none;border-right:none;">
                            {$LICENSE->get('servicename')}
                        </td>
                        <td style="border-left:none;border-right:none;">
                            {if $LICENSE->get('due_date') neq ""}
                                {Vtiger_Util_Helper::formatDateIntoStrings($LICENSE->get('due_date'))}
                            {/if}
                        </td>
                        <td style="border-left:none;border-right:none;">
                            {if $LICENSE->get('subscription') eq "1"}
                               {vtranslate('LBL_SUBSCRIPTION',$QUALIFIED_MODULE)}
                            {elseif $LICENSE->get('demo_free') eq "1"}
                                {vtranslate('LBL_DEMO_FREE',$QUALIFIED_MODULE)}
                            {else}
                                {vtranslate('LBL_FULL',$QUALIFIED_MODULE)}
                            {/if}
                        </td>
                        <td style="border-left:none;border-right:none;">
                            {if $LICENSE->isRenewReady()}
                                {if $LICENSE->get('subscription') eq "1"}
                                    <a class="btn btn-info" target="_blank" href="{$SHOP_LINK}?addidtob={$LICENSE->get('buy_id')}">{vtranslate('LBL_PROLONG_LICENSE',$QUALIFIED_MODULE)}</a>
                                {elseif $LICENSE->get('demo_free') eq true}
                                    <a class="btn btn-success" target="_blank" href="{$SHOP_LINK}?addidtob={$LICENSE->get('buy_id')}">{vtranslate('LBL_BUY_LICENSE',$QUALIFIED_MODULE)}</a>
                                {else}
                                    <a class="btn btn-primary" target="_blank" href="{$LICENSE->getRenewUrl()}">{vtranslate('LBL_RENEW_LICENSE',$QUALIFIED_MODULE)}</a>
                                {/if}
                                &nbsp;&nbsp;
                            {/if}
                            <button class="btn btn-danger actionLicenses" type="button" data-mode="deactivate" data-license="{$LICENSE_KEY}">{vtranslate('LBL_DEACTIVATE_LICENSES', $QUALIFIED_MODULE)}</button>
                            <div class="pull-right">
                                {if $LICENSE->isExpired()}
                                    <div class="alert alert-danger displayInlineBlock" style="margin:0;">{if $LICENSE->isTrial()}{vtranslate('LBL_TRIAL_INACTIVE', $QUALIFIED_MODULE)}{else}{vtranslate('LBL_MEMBERSHIP_INACTIVE', $QUALIFIED_MODULE)}{/if}{$LICENSE->getExpireString()}</div>
                                {else}
                                    <div class="alert alert-{if $LICENSE->isRenewReady()}warning{else}info{/if} displayInlineBlock" style="margin:0;">{if $LICENSE->isTrial()}{vtranslate('LBL_TRIAL_ACTIVE', $QUALIFIED_MODULE)}{else}{vtranslate('LBL_MEMBERSHIP_ACTIVE', $QUALIFIED_MODULE)}{/if}{$LICENSE->getExpireString()}</div>
                                {/if}
                            </div>
                        </td>
                    </tr>
                {/foreach}
                {if !empty($EMPTY_LICENSES)}
                    <tr>
                        <td style="border-left:none;border-right:none;" colspan="4">
                            {foreach item=EMPTY_LICENSE from=$EMPTY_LICENSES}
                                <div>{$EMPTY_LICENSE}</div>
                                <br>
                            {/foreach}
                        </td>
                        <td style="border-left:none;border-right:none;" title="{vtranslate('LBL_EMPTY_LICENSES_MESSAGE', $QUALIFIED_MODULE)}">
                            <form action="index.php" method="post">
                                <input type="hidden" name="module" value="{$MODULE}">
                                <input type="hidden" name="parent" value="Settings">
                                <input type="hidden" name="action" value="Basic">
                                <input type="hidden" name="mode" value="clearEmptyLicenses">
                                <button class="btn btn-warning">{vtranslate('LBL_EMPTY_LICENSES_BUTTON', $QUALIFIED_MODULE)}</>
                            </form>
                        </td>
                    </tr>
                {/if}
                </tbody>
            </table>
        </div>
        {/if}
        <div class="col-md-12">
            <div>
                <h4>{vtranslate('LBL_MODULES', $QUALIFIED_MODULE)}</h4>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="border-right:0;">{vtranslate('Name', $QUALIFIED_MODULE)}</th>
                        {*<th style="border-left:0;">&nbsp;</th>*}
                        <th>{vtranslate('LBL_INSTALLED_VERSION', $QUALIFIED_MODULE)}</th>
                        <th>{vtranslate('LBL_NEWEST_VERSION', $QUALIFIED_MODULE)}</th>
                        <th>{vtranslate('LBL_ACTION', $QUALIFIED_MODULE)}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {foreach item=EXTENSION key=EXTENSION_ID from=$EXTENSIONS_LIST}
                            {if !$EXTENSION->isAvailable()}{continue}{/if}
                            {assign var=MODULE_MODEL value=$EXTENSION->get('moduleModel')}
                            {assign var=MODULE_NAME value=$EXTENSION->get('name')}
                            <tr class="installedModuleRow {*$EXTENSION->isFilesReady()*}" data-cfmid="1" id="{$MODULE_NAME}">
                                <td style="border-left:none;border-right:none;"><a {if $MODULE_MODEL && $MODULE_MODEL->isActive()}href="{$MODULE_MODEL->getDefaultUrl()}" target="_blank" {else} href="#{$MODULE_NAME}" {/if}>{vtranslate($EXTENSION->get('label'), $QUALIFIED_MODULE)}</a></td>
                                {*<td style="border-left:none;border-right:none;">{if !is_numeric($EXTENSION->get('price')) || !$EXTENSION->get('price')}Free{/if}</td>*}
                                <td style="border-left:none;border-right:none;" class="validateVersion">{$EXTENSION->getVersion()}</td>
                                <td style="border-left:none;border-right:none;">{$EXTENSION->get('pkgVersion')}</td>
                                <td style="border-left:none;border-right:none;">
                                    <span class="extension_container">
                                        {if $EXTENSION->isVtigerCompatible()}
                                            <input type="hidden" name="extensionName" value="{$EXTENSION->get('name')}"/>
                                            <input type="hidden" name="extensionUrl" value="{$EXTENSION->get('downloadURL')}"/>
                                            <input type="hidden" name="extensionId" value="{$EXTENSION->get('id')}"/>
                                            {if !$EXTENSION->isAlreadyExists()}
                                                <input type="hidden" name="moduleAction" value="Install"/>
                                                <button class="oneclickInstallFree btn btn-primary {if $IS_AUTH}authenticated {else} loginRequired{/if}">
                                                    {vtranslate('LBL_INSTALL', $QUALIFIED_MODULE)}
                                                </button>
                                            {elseif $EXTENSION->isUpgradable()}
                                                <input type="hidden" name="moduleAction" value="Upgrade"/>
                                                <button class="oneclickInstallFree isUpdateBtn btn btn-success margin0px {if $IS_AUTH}authenticated {else} loginRequired{/if}">
                                                    {vtranslate('LBL_UPDATE', $QUALIFIED_MODULE)}
                                                </button>
                                            {/if}
                                        {/if}
                                    </span>
                                    {if $MODULE_MODEL}
                                        {assign var=SETTINGS_LINKS value=$MODULE_MODEL->getSettingLinks()}
                                        {if (count($SETTINGS_LINKS) > 0)}
                                            <span class="btn-group pull-right {if !$MODULE_MODEL->isActive()}hide{/if}">
                                                <button class="btn btn-default btn dropdown-toggle unpin hiden " data-toggle="dropdown">
                                                    {vtranslate('LBL_SETTINGS', $QUALIFIED_MODULE)}&nbsp;<i class="caret"></i>
                                                </button>
                                                <ul class="dropdown-menu pull-right dropdownfields">
                                                    {foreach item=SETTINGS_LINK from=$SETTINGS_LINKS}
                                                        <li>
                                                            <a target="_blank" {if stripos($SETTINGS_LINK['linkurl'], 'javascript:') === 0}
                                                                    onclick='{$SETTINGS_LINK['linkurl']|substr:strlen("javascript:")}'
                                                                {else}
                                                                    href='{$SETTINGS_LINK['linkurl']}'
                                                                {/if}>
                                                                {vtranslate($SETTINGS_LINK['linklabel'], $MODULE_NAME, vtranslate("SINGLE_$MODULE_NAME", $MODULE_NAME))}
                                                            </a>
                                                        </li>
                                                    {/foreach}
                                                </ul>
                                            </span>
                                        {/if}
                                    {/if}
                                    <span class="pull-right">
                                        {if $EXTENSION->get('website') neq ""}
                                            <button class="btn installExtension addButton" style="margin-right:5px;" data-url="{$EXTENSION->get('website')}">{vtranslate('LBL_MORE_DETAILS', $QUALIFIED_MODULE)}</button>
                                        {/if}
                                    </span>
                                </td>
                            </tr>
                        {/foreach}
                    </tbody>
                </table>
            </div>
            <div>
                <h4>{vtranslate('LBL_AVAILABLE_LANGUAGES', $QUALIFIED_MODULE)}</h4>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>{vtranslate('LBL_LANGUAGE_NAME', $QUALIFIED_MODULE)}</th>
                        <th>{vtranslate('LBL_DESCRIPTION', $QUALIFIED_MODULE)}</th>
                        <th>{vtranslate('LBL_ACTION', $QUALIFIED_MODULE)}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {foreach item=LANGUAGE from=$LANGUAGES_LIST name=languages}
                            {if $LANGUAGE->isVtigerCompatible() && !$LANGUAGE->isAlreadyExists() && ($LANGUAGE->get('price') eq 'Free' or $LANGUAGE->get('price') eq 0 or $LANGUAGE->get('available') eq 1)}
                                <tr class="" data-cfmid="1">
                                    <td style="border-left:none;border-right:none;">{vtranslate($LANGUAGE->get('label'), $QUALIFIED_MODULE)}</td>
                                    <td style="border-left:none;border-right:none;">{vtranslate($LANGUAGE->get('description'), $QUALIFIED_MODULE)}</td>
                                    <td style="border-left:none;border-right:none;">
                                        <span class="extension_container">
                                            <input type="hidden" name="extensionName" value="{$LANGUAGE->get('name')}"/>
                                            <input type="hidden" name="extensionUrl" value="{$LANGUAGE->get('downloadURL')}"/>
                                            <input type="hidden" name="moduleAction" value="Install"/>
                                            <input type="hidden" name="extensionId" value="{$LANGUAGE->get('id')}"/>
                                            <span class="pull-right">
                                                {if $LANGUAGE->get('website') neq ""}
                                                    <button class="btn installExtension addButton" style="margin-right:5px;" data-url="{$LANGUAGE->get('website')}">{vtranslate('LBL_MORE_DETAILS', $QUALIFIED_MODULE)}</button>
                                                {/if}
                                                {assign var=LANG_KEY value=$LANGUAGE->get('name')}

                                                {if $ALL_LANGUAGES[$LANG_KEY] neq ""}
                                                    <div class="alert alert-info displayInlineBlock" style="margin:0;">{vtranslate('LBL_INSTALLED', $QUALIFIED_MODULE)}</div>
                                                {else}
                                                    <button class="oneclickInstallFree btn btn-primary {if $IS_AUTH}authenticated {else} loginRequired{/if}">{vtranslate('LBL_INSTALL', $QUALIFIED_MODULE)}</button>
                                                {/if}
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            {/if}
                        {/foreach}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
{/strip}