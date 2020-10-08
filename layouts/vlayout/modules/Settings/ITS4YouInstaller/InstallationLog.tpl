{* *********************************************************************************
 * The content of this file is subject to the ITS4YouInstaller license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ******************************************************************************* *}
{strip}
<div class="modal-dialog modal-lg installationLog" style="background: #fff;">
    <div class='modal-content'>
        <div class="modal-header">
            <div class="pull-right" >
                <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true" class='fa fa-close'>X</span>
                </button>
            </div>
            <div>
                <div class="col-lg-11 col-md-11">
                    {if $ERROR}
                        <input type="hidden" name="installationStatus" value="error" />
                        <h3 class="modal-title" style="color: red">
                            {if $MODULE_ACTION eq "Upgrade"}
                                {vtranslate('LBL_UPGRADE_FAILED', $QUALIFIED_MODULE)}
                            {else}
                                {vtranslate('LBL_INSTALLATION_FAILED', $QUALIFIED_MODULE)}
                            {/if}
                        </h3>
                    {else}
                        <input type="hidden" name="installationStatus" value="success" />
                        <h3 class="modal-title">
                            {if $MODULE_ACTION eq "Upgrade"}
                                {vtranslate('LBL_SUCCESSFULL_UPGRADE', $QUALIFIED_MODULE)}
                            {else}
                                {vtranslate('LBL_SUCCESSFULL_INSTALLATION', $QUALIFIED_MODULE)}
                            {/if}
                        </h3>
                    {/if}
                </div>
            </div>
        </div>
        <div class="modal-body" id="installationLog" style="width: 600px; height: 400px; overflow: auto;">
            <h4>
                {if $MODULE_ACTION eq "Upgrade"}
                    {vtranslate('LBL_UPGRADE_LOG', $QUALIFIED_MODULE)}
                {else}
                    {vtranslate('LBL_INSTALLATION_LOG', $QUALIFIED_MODULE)}
                {/if}
            </h4>
            {if $ERROR}
                <p style="color:red;">{vtranslate($ERROR_MESSAGE, $QUALIFIED_MODULE)}</p>
            {else}
                <div id="extensionInstallationInfo" class="backgroundImageNone" style="background-color: white;padding: 2%;">
                    {if $MODULE_ACTION eq "Upgrade"}
                        {$MODULE_PACKAGE->update($TARGET_MODULE_INSTANCE, $MODULE_FILE_NAME)}
                    {else}
                        {$MODULE_PACKAGE->import($MODULE_FILE_NAME, 'false')}
                    {/if}
                </div>
            {/if}
        </div>
        <div class="modal-footer">
            <span class="pull-right">
                <button class="btn btn-success" id="importCompleted" onclick="location.reload()">{vtranslate('LBL_OK', $QUALIFIED_MODULE)}</button>
            </span>
        </div>
    </div>
</div>
{/strip}