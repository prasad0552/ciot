<?php /* Smarty version Smarty-3.1.7, created on 2020-10-08 12:48:50
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/SwVtTools/Index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:4746233395f7f0ab20497e8-63235220%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd309b15349355dff22fd468a0dc13163be451430' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/SwVtTools/Index.tpl',
      1 => 1600657806,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4746233395f7f0ab20497e8-63235220',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'show_cron_warning' => 0,
    'current_tab' => 0,
    'comma_numbers_enabled' => 0,
    'entityModules' => 0,
    'tabid' => 0,
    'module' => 0,
    'referenceFields' => 0,
    'fieldname' => 0,
    'label' => 0,
    'availableUsers' => 0,
    'userItem' => 0,
    'gcal_autosync' => 0,
    'customViews' => 0,
    'viewId' => 0,
    'filterName' => 0,
    'importKey' => 0,
    'cvImportColumns' => 0,
    'column' => 0,
    'import_available_fields' => 0,
    'field' => 0,
    'showCVImportError' => 0,
    'SHOW_ADDITIONAL' => 0,
    'PartialDetailViewModificationRequired' => 0,
    'detailviewTabs' => 0,
    'tab' => 0,
    'relTabs' => 0,
    'EmailLogModificationRequired' => 0,
    'Logs' => 0,
    'Log' => 0,
    'listwidgets' => 0,
    'widget' => 0,
    'moduleFields' => 0,
    'blockLabel' => 0,
    'blockFields' => 0,
    'availableBlocks' => 0,
    'blockIndex' => 0,
    'availableTabIndex' => 0,
    'availableTabs' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f7f0ab20fbad',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f7f0ab20fbad')) {function content_5f7f0ab20fbad($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include '/var/www/html/ciot/libraries/Smarty/libs/plugins/modifier.date_format.php';
?><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<div id="pageOverlay" onclick="closePageOverlay();" style='cursor:url("modules/SwVtTools/icons/cross-button.png"), auto;position:fixed;z-index:20000;top:0;left:0;display:none;height:100%;width:100%;background-image:url("modules/Workflow2/icons/modal.png");'><div id='pageOverlayContent' style='position:fixed;cursor:default;top:100px;margin:auto;left:50%;padding:10px;background-color:#ffffff;'>&nbsp;</div></div>
<div class="container-fluid" id="moduleManagerContents">

    <div class="widget_header row">
        <div class="col-lg-12">
            <h3>
                <b>
                    <a href="https://redoo-networks.com" target="_blank">
                        <img src="https://redoo.click/img/redoo-80.png" class="pull-right" /> Redoo Networks VtigerCRM Tools
                    </a>
                </b>
            </h3>
        </div>
    </div>
    <hr>
    <?php if ($_smarty_tpl->tpl_vars['show_cron_warning']->value==true){?>
        <p class="alert alert-danger"><strong>ERROR:</strong><br/>It looks like you don't activate the Cronjob of this VtigerCRM System. <strong>Please activate!</strong> Otherwise lot's of functions won't work like expected.</p>
    <?php }?>
    <div class="pcss3t pcss3t-icons-bottom pcss3t-theme-5 pcss3t-height-auto">
        <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first" <?php if ($_smarty_tpl->tpl_vars['current_tab']->value=='tab1'){?>checked="checked"<?php }?>>
        <label for="tab1">General Settings<i class="fa fa-cogs" aria-hidden="true"></i></label>

        <input type="radio" name="pcss3t"  id="tab2" class="tab-content-2" <?php if ($_smarty_tpl->tpl_vars['current_tab']->value=='tab2'){?>checked="checked"<?php }?>>
        <label for="tab2">Partial DetailView<i class="fa fa-columns" aria-hidden="true"></i></label>

        
        

        
        

        
        

        <ul>
            <li class="tab-content tab-content-first typography">
                <div class="row">
                <div class="col-lg-6">

                    <fieldset class="vtToolBox">
                        <legend>Numbers with comma</legend>
                        <?php if ($_smarty_tpl->tpl_vars['comma_numbers_enabled']->value==true){?>
                            You could enter numbers with the use of the comma. <button class="btn btn-warning pull-right" type="button" onclick="return SwVtTools.commaNumbers(false);">deactivate this function</button><br/>
                        <?php }else{ ?>
                            You could <strong>NOT</strong> enter numbers with the use of the comma. <button class="btn btn-primary pull-right" type="button" onclick="return SwVtTools.commaNumbers(true);">activate this function</button><br/>
                        <?php }?>
                    </fieldset>
                    <fieldset class="vtToolBox">
                        <legend>create default Related Lists</legend>

                        <form method="POST" action="#">
                            <input type="hidden" name="tool_action" value="createRelation"/>
                            <input type="radio" name="reltype" value="get_dependents_list" /> Relation against UIType 10 field<br/>
                            <p style="margin-left: 5px;border-left:2px solid #ccc; padding-left:5px;margin:5px;"><strong>Example</strong>: You create a UIType 10 field within Invoices to Projects.<br/>Normally you don't see linked Invoices in a Project. This relation could be activated with this option.<br/><strong>This type require a UIType 10 field in the other direction!</strong></p>
                            <input type="radio" name="reltype" value="get_related_list" checked="checked" /> free Relation without a field<br/>
                            <p style="margin-left: 5px;border-left:2px solid #ccc; padding-left:5px;margin-top:5px;"><strong>Example</strong>: Works like the relation to documents. You could freely add a link in the direction of this relation. If you want to link one invoice to multiple projects, you couldn't use a UIType 10 field. You need to use this option!</strong></p>
                            <table style="width:100%;">
                                <tr>
                                    <td>Create RelatedTab here:</td>
                                    <td><select name="tabid" class="select2" style="width:100%;">
                                            <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['tabid']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                                            <?php } ?>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td>Related module:</td>
                                    <td><select name="related_tabid" class="select2" style="width:100%;">
                                            <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['tabid']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                                            <?php } ?>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td style="padding-top:5px;">Label of Relation</td>
                                    <td style="padding-top:5px;"><input type="text" name="label" value="" style="line-height:16px;padding:5px;width:100%;"/></td>
                                </tr>
                                <tr>
                                    <td><input type="submit" name="submit" class="btn btn-primary" value="create Relation"> </td>
                                </tr>
                            </table>
                        </form>
                    </fieldset>

                    <fieldset class="vtToolBox">
                        <legend>Limit Reference Selection</legend>
                        <div id="ReferenceFilterList" data-url="index.php?module=SwVtTools&parent=Settings&view=ReferenceFilter"></div>
                        <select id="addreferencefield" name="addreferencefield" class="select2" style="margin:0;width:50%;min-width:300px;">
                            <?php  $_smarty_tpl->tpl_vars['label'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['label']->_loop = false;
 $_smarty_tpl->tpl_vars['fieldname'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['referenceFields']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['label']->key => $_smarty_tpl->tpl_vars['label']->value){
$_smarty_tpl->tpl_vars['label']->_loop = true;
 $_smarty_tpl->tpl_vars['fieldname']->value = $_smarty_tpl->tpl_vars['label']->key;
?>
                                <option value="<?php echo $_smarty_tpl->tpl_vars['fieldname']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['label']->value;?>
</option>
                            <?php } ?>
                        </select>
                        <input type="button" class="btn btn-default addReferenceFilter" value="Add Reference Filter" />
                        <div id="ReferenceFilterEditor" style="display:none;padding:5px;margin:5px;border:1px solid #ccc;overflow:hidden;">
                            <input type="hidden" id="ReferenceFilterId" value="" />
                            <textarea style="margin:0;width:100%;height:100px;" id="ReferenceFilterCondition"></textarea>
                            <input type="button" style="margin:0;" class="pull-right btn btn-success SaveReferenceFilter" value="Save Reference Filter" />
                        </div>
                    </fieldset>
                    
                        
                        
                            
                            
                                

                                
                                

                                
                                
                                
                                
                                
                                

                                
                                
                            
                            
                                
                                    

                                    
                                        
                                                
                                                    
                                                        
                                                        
                                                    
                                                
                                        
                                    

                                
                            
                        
                        
                            
                            
                                
                                    
                                
                            
                            
                        
                        
                            
                                
                                    
                                        
                                        
                                        
                                            
                                            
                                        
                                    
                                
                            
                        
                    
                    <fieldset class="vtToolBox">
                        <legend>Switch User</legend>
                        <form method="POST" action="#">
                            <em>You will immediatelly logged in into the new User. You need to Relogin to get access to the Admin User.</em><br/><br/>
                            <input type="hidden" name="tool_action" value="switchUser"/>
                            <select name="user" style="margin:0; width:50%;" class="select2">
                                <?php  $_smarty_tpl->tpl_vars['userItem'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['userItem']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['availableUsers']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['userItem']->key => $_smarty_tpl->tpl_vars['userItem']->value){
$_smarty_tpl->tpl_vars['userItem']->_loop = true;
?>
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['userItem']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['userItem']->value['user_name'];?>
 - <?php echo $_smarty_tpl->tpl_vars['userItem']->value['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['userItem']->value['last_name'];?>
</option>
                                <?php } ?>
                            </select>
                            <input type="submit" class="btn btn-default" value="Switch User" />
                        </form>
                    </fieldset>
                    
                </div> <!-- col-lg-6 -->

                <div class="col-lg-6">
                    <fieldset class="vtToolbox">
                        <iframe src="https://redoo-networks.com/modules" width="100%" height="200" frameborder=0 ALLOWTRANSPARENCY="true"></iframe>
                    </fieldset>
                    <!--<fieldset style="border: 1px solid #cccccc; padding:10px;">
                <legend>activate Comments</legend>
                <form method="POST" action="#">
                    <input type="hidden" name="tool_action" value="addModcomment"/>

                    Activate Comments in this module:
                    <select name="tabid" class="select2" style="width:180px;">
                        <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['tabid']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                        <?php } ?>
                    </select>
                    <input type="submit" class="btn btn-primary" name="submit" value="Activate"/>
                </form>
            </fieldset>-->
                    <fieldset class="vtToolBox">
                        <legend>Google Calendar Sync</legend>
                        <p><strong>AutoSync:</strong></p>
                        <?php if ($_smarty_tpl->tpl_vars['gcal_autosync']->value==true){?>
                            Every configured Google Calendar Sync will be automatically executed from Scheduler.
                            <button class="btn btn-warning" type="button" onclick="return SwVtTools.GCalSync(false);">deactivate this function</button>
                            <button class="btn btn-warning" type="button" onclick="return SwVtTools.GeneralOptions('gsync_test');">test cronjob</button>
                            <br/>
                        <?php }else{ ?>
                            This function will automatically sync configured Google Calendar connections. <button class="btn btn-primary" type="button" onclick="return SwVtTools.GCalSync(true);">activate this function</button><br/>
                        <?php }?>

                        
                        
                            
                            
                        
                    </fieldset>
                    <fieldset class="vtToolBox">
                        <legend>Filter Im-/Export</legend>
                        <form method="POST" action="index.php?module=SwVtTools&action=ExportCustomView&parent=Settings" enctype="multipart/form-data">
                            <select name="filterId" class="select2" style="width:350px;">
                                <?php  $_smarty_tpl->tpl_vars['filterName'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filterName']->_loop = false;
 $_smarty_tpl->tpl_vars['viewId'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['customViews']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filterName']->key => $_smarty_tpl->tpl_vars['filterName']->value){
$_smarty_tpl->tpl_vars['filterName']->_loop = true;
 $_smarty_tpl->tpl_vars['viewId']->value = $_smarty_tpl->tpl_vars['filterName']->key;
?>
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['viewId']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['filterName']->value;?>
</option>
                                <?php } ?>
                            </select>
                            <input type="submit" class="btn btn-primary" name="export" value="export filter" />
                        </form>
                        <hr/>
                        <form method="POST" action="#" enctype="multipart/form-data">
                            <?php if (!isset($_smarty_tpl->tpl_vars['importKey']->value)){?>
                                <input type="hidden" name="tool_action" value="cv_import1" />
                                Step 1: Import view: <input type="file" name="customview" />
                                <br/>
                                Select module to Import:
                                <br/>
                                <select name="cvImportModule"class="select2" style="width:350px;"
                                    <option value="">Original one from CustomView</option>
                                    <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                        <option value="<?php echo $_smarty_tpl->tpl_vars['module']->value[0];?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                                    <?php } ?>
                                </select>
                                <input type="submit" class="btn btn-primary" name="import" value="import filter" />
                            <?php }else{ ?>
                                <input type="hidden" name="tool_action" value="cv_import2" />
                                <input type="hidden" name="cvImportKey" value="<?php echo $_smarty_tpl->tpl_vars['importKey']->value;?>
" />
                                Step 2: Select corresponding fields
                                <div>
                                    <label style="display: inline-block;width:200px;font-weight: bold;">Filter Name</label>
                                    <input type="text" name="filterName" value="imported Filter" />
                                </div>
                                <br/>
                                <?php  $_smarty_tpl->tpl_vars['column'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['column']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['cvImportColumns']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['column']->key => $_smarty_tpl->tpl_vars['column']->value){
$_smarty_tpl->tpl_vars['column']->_loop = true;
?>
                                    <div>
                                        <label style="display: inline-block;width:200px;"><?php echo vtranslate($_smarty_tpl->tpl_vars['column']->value[2],$_smarty_tpl->tpl_vars['column']->value[1]);?>
</label>
                                        <select name="column[<?php echo $_smarty_tpl->tpl_vars['column']->value[0];?>
]">
                                            <?php  $_smarty_tpl->tpl_vars['field'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['field']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['import_available_fields']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['field']->key => $_smarty_tpl->tpl_vars['field']->value){
$_smarty_tpl->tpl_vars['field']->_loop = true;
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['field']->value->name;?>
" <?php if ($_smarty_tpl->tpl_vars['column']->value[5]==$_smarty_tpl->tpl_vars['field']->value->name){?>selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['field']->value->label;?>
</option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                <?php } ?>
                                <input type="submit" class="btn btn-success" name="import" value="Spalten anwenden" />
                            <?php }?>
                            <?php if ($_smarty_tpl->tpl_vars['showCVImportError']->value!=false){?>
                                <br/><strong style="color:red;"><?php echo $_smarty_tpl->tpl_vars['showCVImportError']->value;?>
</strong>
                            <?php }?>
                        </form>
                        <div></div>
                    </fieldset>
                    <!--<fieldset style="border: 1px solid #cccccc; padding:10px;">
                <legend>Make Filter to default for all Users</legend>
                <form method="POST" action="#">
                    <input type="hidden" name="tool_action" value="makeCvToDefault" />
                    <select multiple="multiple" name="filterIds[]" class="select2" style="width:350px;">
                        <?php  $_smarty_tpl->tpl_vars['filterName'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filterName']->_loop = false;
 $_smarty_tpl->tpl_vars['viewId'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['customViews']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filterName']->key => $_smarty_tpl->tpl_vars['filterName']->value){
$_smarty_tpl->tpl_vars['filterName']->_loop = true;
 $_smarty_tpl->tpl_vars['viewId']->value = $_smarty_tpl->tpl_vars['filterName']->key;
?>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['viewId']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['filterName']->value;?>
</option>
                        <?php } ?>
                    </select>
                    <br/>
                    Set for Users:<br/>
                    <select multiple="multiple" name="userIds[]" id="setDefaultCVuserIds" class="select2" style="width:350px;">
                        <?php  $_smarty_tpl->tpl_vars['userItem'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['userItem']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['availableUsers']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['userItem']->key => $_smarty_tpl->tpl_vars['userItem']->value){
$_smarty_tpl->tpl_vars['userItem']->_loop = true;
?>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['userItem']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['userItem']->value['username'];?>
 - <?php echo $_smarty_tpl->tpl_vars['userItem']->value['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['userItem']->value['last_name'];?>
</option>
                        <?php } ?>
                    </select> <a href="#" onclick='$("#setDefaultCVuserIds > option").prop("selected","selected");$("#setDefaultCVuserIds").trigger("change");return false;'>Select all</a>&nbsp;&nbsp;&nbsp;
                    </select> <a href="#" onclick='$("#setDefaultCVuserIds > option").removeAttr("selected");$("#setDefaultCVuserIds").trigger("change");return false;'>Deselect all</a><br/>
                    <br/>
                    <input type="submit" class="btn btn-primary" name="export" value="make default" />
                </form>
                </fieldset>-->
                    <fieldset class="vtToolBox">
                        <legend>General Options</legend>
                        <table style="width:100%;">
                            
                                
                                
                            
                            <tr>
                                <td colspan="2"><a class="btn btn-default" href="index.php?module=SwVtTools&parent=Settings&view=GermanDateFormat">enable german Dateformat</a></td>
                            </tr>
                            <tr>
                                <td colspan="2"><button class="btn btn-default" type="button" onclick="return SwVtTools.GeneralOptions('recreateUserPrivilegs', true);">Recreate all User Privilege Files</button></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <select id="checkColumnsModule" style="margin:0;">
                                        <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                            <option value="<?php echo $_smarty_tpl->tpl_vars['module']->value[0];?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                                        <?php } ?>
                                    </select>
                                    <button class="btn btn-default" type="button" onclick="return SwVtTools.GeneralOptions('checkModuleFields', {moduleName:$('#checkColumnsModule').val()}, true);">Check missing table columns for fields in Database</button>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"><button class="btn btn-default" type="button" onclick="return SwVtTools.GeneralOptions('removeMarketplaceBanner', true);">Remove Marketplace Banner from Dashboard</button></td>
                            </tr>
                            <!--<tr>
                                <td><strong>copy mailscanner mailbox:</strong></td>
                                <td><button class="btn btn-warning" type="button" onclick="return SwVtTools.GeneralOptions('initFilterSortOrder', true);">Initialize</button></td>
                            </tr>-->
                        </table>
                    </fieldset>

                    <?php if ($_smarty_tpl->tpl_vars['SHOW_ADDITIONAL']->value==true){?>
                        <fieldset class="vtToolBox">
                            <legend>Additional Functions</legend>
                            <table style="width:100%;">
                                <tr>
                                    <td><strong>Remove all Records from Vtiger:</strong></td>
                                    <td><button class="btn" type="button" onclick="return SwVtTools.AdvancedOptions('clearVtiger', true);">apply this</button></td>
                                </tr>
                            </table>
                        </fieldset>
                    <?php }?>
                    
                    <a class="btn pull-right" href="index.php?module=SwVtTools&parent=Settings&view=Upgrade">Check for Update</a>
                </div> <!-- col-lg-6 -->
    </div>
            </li>
            <li class="tab-content tab-content-2">
                <?php if ($_smarty_tpl->tpl_vars['PartialDetailViewModificationRequired']->value==true){?>
                    <div class="alert alert-info">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> To use this feature, you need to execute this process to apply filemodifications: <a class="btn btn-default" href="index.php?module=SwVtTools&parent=Settings&&view=Patcher&hash=partialdetailview">Check modifications</a>
                    </div>
                <?php }else{ ?>
                    <div class="alert alert-success">
                        <i class="fa fa-check-square" aria-hidden="true"></i> Required File modification found!
                    </div>
                <?php }?>
                <form method="POST" action="#">
                    <input type="hidden" name="tool_action" value="add_detailview_part" />
                    <p>Add Block to module for this module:
                        <select name="modulename" class="select2" style="width:350px;margin:0;">
                            <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                <option value="<?php echo $_smarty_tpl->tpl_vars['module']->value[0];?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                            <?php } ?>
                        </select>
                        <input class="btn btn-default" type="submit" name="add_subview" value="Add Related Tab for special DetailView" />
                    </p>
                </form>
                <hr/>
                <form method="POST" action="#">
                <?php if (!empty($_smarty_tpl->tpl_vars['detailviewTabs']->value)){?>
                    <div class="alert alert-info">If you name a View "_default", you define the Main Detail View.</div>
                    <table class="table table-condensed">
                        <input type="hidden" name="tool_action" value="save_detailviewpart" />
                        <?php  $_smarty_tpl->tpl_vars['tab'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tab']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['detailviewTabs']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tab']->key => $_smarty_tpl->tpl_vars['tab']->value){
$_smarty_tpl->tpl_vars['tab']->_loop = true;
?>
                            <tr>
                                <td style="width:200px;"><i class="fa fa-trash trashPartialDetailView" data-id="<?php echo $_smarty_tpl->tpl_vars['tab']->value['id'];?>
" aria-hidden="true"></i>&nbsp;&nbsp;<?php echo vtranslate($_smarty_tpl->tpl_vars['tab']->value['modulename'],$_smarty_tpl->tpl_vars['tab']->value['modulename']);?>
</td>
                                <td style="width:200px;">
                                    <?php if ($_smarty_tpl->tpl_vars['tab']->value['title']!='_default'){?>
                                        <input type="text" name="detailviewpart[<?php echo $_smarty_tpl->tpl_vars['tab']->value['id'];?>
][title]" value="<?php echo $_smarty_tpl->tpl_vars['tab']->value['title'];?>
" />
                                    <?php }else{ ?>
                                        <input type="hidden" name="detailviewpart[<?php echo $_smarty_tpl->tpl_vars['tab']->value['id'];?>
][title]" value="<?php echo $_smarty_tpl->tpl_vars['tab']->value['title'];?>
" />
                                        Default View
                                    <?php }?>
                                </td>
                                <td><input type="hidden" class="Select2ForBlockSelection" data-module="<?php echo $_smarty_tpl->tpl_vars['tab']->value['modulename'];?>
" name="detailviewpart[<?php echo $_smarty_tpl->tpl_vars['tab']->value['id'];?>
][blockids]" value="<?php echo $_smarty_tpl->tpl_vars['tab']->value['blockids'];?>
" /></td>
                            </tr>
                        <?php } ?>
                    </table>
                <?php }?>
                    <button class="btn btn-primary" type="submit"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>

                </form>
            </li>
            <li class="tab-content tab-content-3">
                <?php if ($_smarty_tpl->tpl_vars['PartialDetailViewModificationRequired']->value==true){?>
                    <div class="alert alert-info">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> To use this feature, you need to execute this process to apply filemodifications: <a class="btn btn-default" href="index.php?module=SwVtTools&parent=Settings&&view=Patcher&hash=partialdetailview">Check modifications</a>
                    </div>
                <?php }else{ ?>
                    <div class="alert alert-success">
                        <i class="fa fa-check-square" aria-hidden="true"></i> Required File modification found!
                    </div>
                <?php }?>

                <div class="alert alert-info">This Category allows you to ReOrder the Related Tabs</div>
                <div class="alert alert-warn">If you configure a module here, you must add new tabs manually. They do <strong>NOT</strong> appear automatically if you install new modules.<br/>Also you need to resave this configuration, if you rename a related tab.</div>
                <form method="POST" action="#">
                    <input type="hidden" name="tool_action" value="add_reltab_order" />
                    <p>Add Order for this module:
                        <select name="modulename" class="select2" style="width:350px;margin:0;">
                            <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                                <option value="<?php echo $_smarty_tpl->tpl_vars['module']->value[0];?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                            <?php } ?>
                        </select>
                        <input class="btn btn-default" type="submit" name="add_subview" value="Add Related Tab for special DetailView" />
                    </p>
                </form>
                <hr/>

                <form method="POST" action="#">
                    <input type="hidden" name="tool_action" value="save_reltab_order" />
                    <table class="table table-condensed">
                        <?php  $_smarty_tpl->tpl_vars['tab'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['tab']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['relTabs']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['tab']->key => $_smarty_tpl->tpl_vars['tab']->value){
$_smarty_tpl->tpl_vars['tab']->_loop = true;
?>
                            <tr>
                                <td style="width:200px;"><i class="fa fa-trash trashRelTabOrder" data-id="<?php echo $_smarty_tpl->tpl_vars['tab']->value['id'];?>
" aria-hidden="true"></i>&nbsp;&nbsp;<?php echo vtranslate($_smarty_tpl->tpl_vars['tab']->value['modulename'],$_smarty_tpl->tpl_vars['tab']->value['modulename']);?>
</td>
                                <td>
                                    <input type="hidden" class="Select2ForRelTabSelection" data-module="<?php echo $_smarty_tpl->tpl_vars['tab']->value['modulename'];?>
" name="reltaborder[<?php echo $_smarty_tpl->tpl_vars['tab']->value['modulename'];?>
][relations]" value="" />
                                </td>
                            </tr>
                        <?php } ?>
                    </table>
                    <button class="btn btn-primary" type="submit"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
                </form>
            </li>
            <li class="tab-content tab-content-4">
                <?php if ($_smarty_tpl->tpl_vars['EmailLogModificationRequired']->value==true){?>
                    <div class="alert alert-info">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> To use this feature, you need to execute this process to apply filemodifications: <a class="btn btn-default" href="index.php?module=SwVtTools&parent=Settings&&view=Patcher&hash=emaillog">Check modifications</a>
                        <br/>
                        Please store the recover/repair Link from Patch process. It will deactive the Maillog after work is finished.
                    </div>
                <?php }else{ ?>
                    <div class="alert alert-success">
                        <i class="fa fa-check-square" aria-hidden="true"></i> Required File modification found!
                    </div>
                    <div class="alert alert-info">
                        <i class="fa fa-check-square" aria-hidden="true"></i> Deactivate: <a class="btn btn-default" href="index.php?module=SwVtTools&parent=Settings&&view=Patcher&hash=emaillog&remove=1">Remove modifications</a>
                    </div>
                    <input type="button" class="btn btn-primary ClearLogBtn" data-type="mail" value="Clear Mail Log" />
                    <hr/><br/>
                    <?php  $_smarty_tpl->tpl_vars['Log'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['Log']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['Logs']->value['mail']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['Log']->key => $_smarty_tpl->tpl_vars['Log']->value){
$_smarty_tpl->tpl_vars['Log']->_loop = true;
?>
                        <div style="font-size:14px;padding:5px 0;cursor:pointer;" onclick="window.open('index.php?module=SwVtTools&parent=Settings&view=LogView&lid=<?php echo $_smarty_tpl->tpl_vars['Log']->value['id'];?>
');">show Log from <?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['Log']->value['created'],'d.m.Y H:i:s');?>
</div>
                    <?php } ?>

                <?php }?>
            </li>
            <li class="tab-content tab-content-5">
                <?php if (!empty($_smarty_tpl->tpl_vars['listwidgets']->value)){?>
                    <form method="POST" action="index.php?module=SwVtTools&view=Index&parent=Settings&tab=tab5">
                        <input type="hidden" name="tool_action" value="save_listviewwidget"/>

                        <table class="table table-condensed">
                        <?php  $_smarty_tpl->tpl_vars['widget'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['widget']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['listwidgets']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['widget']->key => $_smarty_tpl->tpl_vars['widget']->value){
$_smarty_tpl->tpl_vars['widget']->_loop = true;
?>
                            <tr>
                                <td><input type="checkbox" name="widget[<?php echo $_smarty_tpl->tpl_vars['widget']->value['id'];?>
][active]" value="1" <?php if ($_smarty_tpl->tpl_vars['widget']->value['active']=='1'){?>checked="checked"<?php }?> /></td>
                                <td><input type="hidden" name="widget[<?php echo $_smarty_tpl->tpl_vars['widget']->value['id'];?>
][module]" value="<?php echo $_smarty_tpl->tpl_vars['widget']->value['module'];?>
" /><?php echo $_smarty_tpl->tpl_vars['widget']->value['module'];?>
</td>
                                <td><input type="text" name="widget[<?php echo $_smarty_tpl->tpl_vars['widget']->value['id'];?>
][title]" value="<?php echo $_smarty_tpl->tpl_vars['widget']->value['title'];?>
" /></td>
                                <td><select class="select2" style="width:300px;" name="widget[<?php echo $_smarty_tpl->tpl_vars['widget']->value['id'];?>
][fields][]" multiple>
                                        <?php  $_smarty_tpl->tpl_vars['blockFields'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['blockFields']->_loop = false;
 $_smarty_tpl->tpl_vars['blockLabel'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['moduleFields']->value[$_smarty_tpl->tpl_vars['widget']->value['module']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['blockFields']->key => $_smarty_tpl->tpl_vars['blockFields']->value){
$_smarty_tpl->tpl_vars['blockFields']->_loop = true;
 $_smarty_tpl->tpl_vars['blockLabel']->value = $_smarty_tpl->tpl_vars['blockFields']->key;
?>
                                            <optgroup label="<?php echo $_smarty_tpl->tpl_vars['blockLabel']->value;?>
">
                                                <?php  $_smarty_tpl->tpl_vars['field'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['field']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['blockFields']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['field']->key => $_smarty_tpl->tpl_vars['field']->value){
$_smarty_tpl->tpl_vars['field']->_loop = true;
?>
                                                    <option value="<?php echo $_smarty_tpl->tpl_vars['field']->value->name;?>
" <?php if (!empty($_smarty_tpl->tpl_vars['widget']->value['settings']['fields'])&&in_array($_smarty_tpl->tpl_vars['field']->value->name,$_smarty_tpl->tpl_vars['widget']->value['settings']['fields'])){?>selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['field']->value->label;?>
</option>
                                                <?php } ?>
                                            </optgroup>
                                        <?php } ?>
                                    </select></td>
                            </tr>
                        <?php } ?>
                        </table>
                        <input type="submit" class="btn btn-success" name="save" value="Save Widget Data" />
                    </form>
                <?php }else{ ?>
                    <p>No Quicksearch Widgets configured</p>
                <?php }?>
                <br/>
                <br/>
                <form method="POST" action="index.php?module=SwVtTools&view=Index&parent=Settings&tab=tab5">
                    <input type="hidden" name="tool_action" value="add_listviewwidget"/>
                    <select class="select2" name="modulename" style="margin:0;width:300px;">
                        <?php  $_smarty_tpl->tpl_vars['module'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['module']->_loop = false;
 $_smarty_tpl->tpl_vars['tabid'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['entityModules']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['module']->key => $_smarty_tpl->tpl_vars['module']->value){
$_smarty_tpl->tpl_vars['module']->_loop = true;
 $_smarty_tpl->tpl_vars['tabid']->value = $_smarty_tpl->tpl_vars['module']->key;
?>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['module']->value[0];?>
"><?php echo $_smarty_tpl->tpl_vars['module']->value[1];?>
</option>
                        <?php } ?>
                    </select>

                     <input type="submit" class="btn btn-primary" value="Add Quicksearch Widgets" />
                </form>

            </li>
        </ul>




    <br/>


</div>

<script type="text/javascript">
    var blocks = <?php echo json_encode($_smarty_tpl->tpl_vars['availableBlocks']->value);?>
;
    var blockIndex = <?php echo json_encode($_smarty_tpl->tpl_vars['blockIndex']->value);?>
;

    var relTabs = <?php echo json_encode($_smarty_tpl->tpl_vars['relTabs']->value);?>
;
    var relTabIndex = <?php echo json_encode($_smarty_tpl->tpl_vars['availableTabIndex']->value);?>
;
    var relTabAvailable = <?php echo json_encode($_smarty_tpl->tpl_vars['availableTabs']->value);?>
;
</script><?php }} ?>