<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:03:41
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/DetailView.tpl" */ ?>
<?php /*%%SmartyHeaderCode:16473571055f6809fd1919e3-84947138%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '38e456b7f3c6953bd6a4fee958f11fdcc5f4a41d' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/DetailView.tpl',
      1 => 1600651998,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16473571055f6809fd1919e3-84947138',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'RECORD_MODEL' => 0,
    'MODULE_MODEL' => 0,
    'PARENTTAB' => 0,
    'QUALIFIED_MODULE' => 0,
    'MODULE' => 0,
    'QUALIFIED_MODULE_NAME' => 0,
    'ACTION_LINKS' => 0,
    'LINK' => 0,
    'LIST_TYPES' => 0,
    'SELECTED_ACTION_TAB' => 0,
    'LIST_TYPE' => 0,
    'ACTIONS_LIST' => 0,
    'action_data' => 0,
    'SELECTED_PF_TAB' => 0,
    'CURRENT_USER_MODEL' => 0,
    'LISTVIEW_HEADERS' => 0,
    'LISTVIEW_HEADER' => 0,
    'HEADER_NAME' => 0,
    'LISTVIEW_ENTRIES' => 0,
    'LISTVIEW_ENTRY' => 0,
    'LISTVIEW_HEADERNAME' => 0,
    'WIDTHTYPE' => 0,
    'WIDTH' => 0,
    'WORKFLOW_CONDITION' => 0,
    'ALL_CONDITIONS' => 0,
    'ALL_CONDITION' => 0,
    'ANY_CONDITIONS' => 0,
    'ANY_CONDITION' => 0,
    'COLSPAN_WIDTH' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f6809fd22351',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f6809fd22351')) {function content_5f6809fd22351($_smarty_tpl) {?>
<div class="detailview-content"><div class="details"><form id="detailView" method="post" action="index.php" name="etemplatedetailview"onsubmit="VtigerJS_DialogBox.block();"><input type="hidden" name="action" value=""><input type="hidden" name="view" value=""><input type="hidden" name="module" value="ITS4YouProcessFlow"><input type="hidden" name="retur_module" value="ITS4YouProcessFlow"><input type="hidden" name="return_action" value="ITS4YouProcessFlow"><input type="hidden" name="return_view" value="Detail"><input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
"><input type="hidden" name="source_module" id="source_module" value="<?php echo $_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName();?>
"><input type="hidden" name="parenttab" value="<?php echo $_smarty_tpl->tpl_vars['PARENTTAB']->value;?>
"><input type="hidden" name="isDuplicate" value="false"><input type="hidden" name="subjectChanged" value=""><input id="recordId" value="<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
" type="hidden"><div><div class="left-block col-lg-4"><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_BASIC_INFORMATION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4><div class="pull-right"><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()=="0"){?><button type="button" class="btn btn-default debugProcessFlow">&nbsp;<?php echo vtranslate('LBL_DEBUG',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</button><?php }else{ ?><button type="button" class="btn btn-default editProcessFlow"data-url="index.php?module=ITS4YouProcessFlow&parent=Settings&view=Edit&record=<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
">&nbsp;<?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</button><?php }?></div></div><div class="summaryViewFields"><div class="recordDetails"><table class="summary-table no-border"><tbody><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()!="0"){?><tr class="summaryViewEntries"><td class="fieldLabel"><labelclass="muted textOverflowEllipsis"><?php echo vtranslate('LBL_PROCESSFLOW_NAME',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue"><?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->get('name');?>
</td></tr><tr class="summaryViewEntries"><td class="fieldLabel"><labelclass="muted textOverflowEllipsis"><?php echo vtranslate('LBL_DESCRIPTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue"valign=top><?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->get('description');?>
</td></tr><?php }?><tr class="summaryViewEntries"><td class="fieldLabel"><labelclass="muted textOverflowEllipsis"><?php echo vtranslate('LBL_TARGET_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue"valign=top><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName(),$_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName());?>
</td></tr><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()!="0"){?><tr class="summaryViewEntries"><td class="fieldLabel"><labelclass="muted textOverflowEllipsis"><?php echo vtranslate('Status');?>
</label></td><td class="fieldValue"valign=top> <?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->get('status')=='1'){?><?php echo vtranslate('Active',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('InActive',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></td></tr><?php }?></tbody></table></div></div></div><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()!="0"){?><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_PROCESSFLOW_CONDITION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="summaryViewFields"><div class="recordDetails"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('DetailDisplayConditions.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div></div></div><br><?php }?><div class="summaryView"><div class="contents tabbable clearfix"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_ACTIONS_OF_PROCESS_FLOW',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="row marginBottom10px"><div class="col-sm-7 col-xs-7"><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()){?><ul class="nav nav-tabs layoutTabs massEditTabs" style="border-bottom: 0;"><li class="tab-item yesActionTab active" title="<?php echo vtranslate('LBL_IF_YES_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
"><a data-toggle="tab" href="#yesActionTab"><strong><?php echo vtranslate('LBL_IF_YES',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li><li class="tab-item noActionTab" title="<?php echo vtranslate('LBL_IF_NO_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
"><a data-toggle="tab" href="#noActionTab"><strong><?php echo vtranslate('LBL_IF_NO',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li></ul><?php }?></div><div class="col-sm-5 col-xs-5"><div class="pull-right btn-group"><button href="javascript:void(0);" data-toggle="dropdown" class="btn btn-default" style="margin-left: 4px;"><?php echo vtranslate('LBL_ACTIONS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE_NAME']->value);?>
&nbsp;<i class="caret"></i></button><ul class="dropdown-menu pull-right"><?php  $_smarty_tpl->tpl_vars['LINK'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LINK']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['ACTION_LINKS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LINK']->key => $_smarty_tpl->tpl_vars['LINK']->value){
$_smarty_tpl->tpl_vars['LINK']->_loop = true;
?><li><a href='javascript:void(0);' data-url="<?php echo $_smarty_tpl->tpl_vars['LINK']->value->getUrl();?>
"onclick='<?php if (strpos($_smarty_tpl->tpl_vars['LINK']->value->getUrl(),'javascript:')===0){?><?php echo substr($_smarty_tpl->tpl_vars['LINK']->value->getUrl(),strlen("javascript:"));?>
;<?php }else{ ?>Settings_ITS4YouProcessFlow_Detail_Js.createRelation(this)<?php }?>'><?php echo $_smarty_tpl->tpl_vars['LINK']->value->getLabel();?>
</a></li><?php } ?></ul></div></div><br></div><div class="noContent tab-content"><?php  $_smarty_tpl->tpl_vars['LIST_TYPE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LIST_TYPE']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LIST_TYPES']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LIST_TYPE']->key => $_smarty_tpl->tpl_vars['LIST_TYPE']->value){
$_smarty_tpl->tpl_vars['LIST_TYPE']->_loop = true;
?><div class="tab-pane <?php if ($_smarty_tpl->tpl_vars['SELECTED_ACTION_TAB']->value=='yesActionTab'&&$_smarty_tpl->tpl_vars['LIST_TYPE']->value=='yes'){?>active<?php }elseif($_smarty_tpl->tpl_vars['SELECTED_ACTION_TAB']->value=='noActionTab'&&$_smarty_tpl->tpl_vars['LIST_TYPE']->value=='no'){?>active<?php }?>"id="<?php echo $_smarty_tpl->tpl_vars['LIST_TYPE']->value;?>
ActionTab"><?php if ($_smarty_tpl->tpl_vars['ACTIONS_LIST']->value[$_smarty_tpl->tpl_vars['LIST_TYPE']->value]){?><div id="table-content" class="table-container tab-content"style="padding-top:0px !important; margin-top:0px;"><table id="relatedActionsList" class="table listview-table"><thead><tr class="listViewContentHeader"><th style="width:55px;"></th><th nowrap><?php echo vtranslate('Name',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</th><th nowrap><?php echo vtranslate('LBL_TYPE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</th></tr></thead><tbody class="overflow-y"><?php  $_smarty_tpl->tpl_vars['action_data'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['action_data']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['ACTIONS_LIST']->value[$_smarty_tpl->tpl_vars['LIST_TYPE']->value]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['action_data']->key => $_smarty_tpl->tpl_vars['action_data']->value){
$_smarty_tpl->tpl_vars['action_data']->_loop = true;
?><tr class="listViewEntries" data-id="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['id'];?>
" data-recordUrl="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['detail_link'];?>
&pfid=<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
"><td style="width:80px"><div class="pull-left actions"><span class="actionImages"><a href="#" class="deleteRelatedAction" style="padding: 0 5px;" data-deleteurl="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['delete_link'];?>
"><i title="<?php echo vtranslate('LBL_DELETE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="fa fa-trash alignMiddle"></i></a></span></div><input style="opacity: 0;" type="checkbox" data-on-color="success" class="processFlowActionStatus" data-statusurl="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['statuschange_link'];?>
" <?php if ($_smarty_tpl->tpl_vars['action_data']->value['status']=="0"){?> checked="" value="on" <?php }else{ ?> value="off" <?php }?> /></td><td class="listViewEntryValue textOverflowEllipsis " width="%" nowrap><a href="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['detail_link'];?>
&pfid=<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
"><?php echo $_smarty_tpl->tpl_vars['action_data']->value['name'];?>
</a></td><td class="listViewEntryValue textOverflowEllipsis " width="%" nowrap><?php echo $_smarty_tpl->tpl_vars['action_data']->value['type'];?>
</td></tr><?php } ?></tbody></table></div><?php }else{ ?><div class="border1px"><br><div class="textAlignCenter"><?php echo vtranslate('LBL_NO_RELATED',$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo vtranslate('LBL_ACTIONS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><br></div><?php }?></div><?php } ?></div></div></div></div><div class="middle-block col-lg-8"><div id="listContainer" class="summaryView"><div class="contents tabbable clearfix"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_RELATED_PROCESS_FLOW',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="row marginBottom10px"><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId()=="0"){?><div class="col-lg-12"><div class="pull-right"><button type="button" class="btn btn-default addProcessFlow"data-url="index.php?module=ITS4YouProcessFlow&parent=Settings&view=Edit&source_module=<?php echo $_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName();?>
">&nbsp;<?php echo vtranslate('LBL_ADD_RECORD',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></div></div><?php }else{ ?><div class="col-sm-7 col-xs-7"><ul class="nav nav-tabs layoutTabs massEditTabs"style="border-bottom: 0px;"><li class="tab-item yesPFTab active"><a data-toggle="tab"href="#yesPFTab"><strong><?php echo vtranslate('LBL_IF_YES_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li><li class="tab-item noPFTab"><a data-toggle="tab"href="#noPFTab"><strong><?php echo vtranslate('LBL_IF_NO_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li></ul></div><div class="col-sm-5 col-xs-5"><div class="pull-right btn-group"><button type="button" class="btn btn-default addProcessFlow"data-url="index.php?module=ITS4YouProcessFlow&parent=Settings&view=Edit&parentId=<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
">&nbsp;<?php echo vtranslate('LBL_ADD_RELATED_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></div></div><?php }?></div><div id="table-content" class="table-container tab-content"style="padding-top:0px !important; margin-top:0px;"><?php  $_smarty_tpl->tpl_vars['LIST_TYPE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LIST_TYPE']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LIST_TYPES']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LIST_TYPE']->key => $_smarty_tpl->tpl_vars['LIST_TYPE']->value){
$_smarty_tpl->tpl_vars['LIST_TYPE']->_loop = true;
?><div class="tab-pane <?php if ($_smarty_tpl->tpl_vars['SELECTED_PF_TAB']->value=='yesPFTab'&&$_smarty_tpl->tpl_vars['LIST_TYPE']->value=='yes'){?>active<?php }elseif($_smarty_tpl->tpl_vars['SELECTED_PF_TAB']->value=='noPFTab'&&$_smarty_tpl->tpl_vars['LIST_TYPE']->value=='no'){?>active<?php }?>"id="<?php echo $_smarty_tpl->tpl_vars['LIST_TYPE']->value;?>
PFTab"><table id="listview-table" class="workflow-table table listview-table"><?php $_smarty_tpl->tpl_vars["NAME_FIELDS"] = new Smarty_variable($_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getNameFields(), null, 0);?><?php $_smarty_tpl->tpl_vars['WIDTHTYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['CURRENT_USER_MODEL']->value->get('rowheight'), null, 0);?><thead><tr class="listViewContentHeader"><th style="width: 100px;"></th><?php  $_smarty_tpl->tpl_vars['LISTVIEW_HEADER'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_HEADERS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->key => $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = true;
?><?php $_smarty_tpl->tpl_vars["HEADER_NAME"] = new Smarty_variable(($_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value->get('name')), null, 0);?><?php if ($_smarty_tpl->tpl_vars['HEADER_NAME']->value!='module_name'){?><th nowrap><a class="listViewHeaderValues"><?php echo vtranslate($_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value->get('label'),$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</a>&nbsp;</th><?php }?><?php } ?></tr></thead><tbody><?php  $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_ENTRIES']->value[$_smarty_tpl->tpl_vars['LIST_TYPE']->value]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->key => $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->_loop = true;
?><tr class="listViewEntries" data-id="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getId();?>
"data-recordurl="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getDetailViewUrl();?>
"><td><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ListViewRecordActions.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</td><?php  $_smarty_tpl->tpl_vars['LISTVIEW_HEADER'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_HEADERS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->key => $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = true;
?><?php $_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value->get('name'), null, 0);?><?php if ($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value!='module_name'){?><td class="listViewEntryValue <?php echo $_smarty_tpl->tpl_vars['WIDTHTYPE']->value;?>
"width="<?php echo $_smarty_tpl->tpl_vars['WIDTH']->value;?>
%" nowrap><?php if ($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value=='conditions'){?><?php $_smarty_tpl->tpl_vars['WORKFLOW_CONDITION'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getConditonDisplayValue(), null, 0);?><?php $_smarty_tpl->tpl_vars['ALL_CONDITIONS'] = new Smarty_variable($_smarty_tpl->tpl_vars['WORKFLOW_CONDITION']->value['All'], null, 0);?><?php $_smarty_tpl->tpl_vars['ANY_CONDITIONS'] = new Smarty_variable($_smarty_tpl->tpl_vars['WORKFLOW_CONDITION']->value['Any'], null, 0);?><span><strong><?php echo vtranslate('All');?>
&nbsp;:&nbsp;&nbsp;&nbsp;</strong></span><?php if (is_array($_smarty_tpl->tpl_vars['ALL_CONDITIONS']->value)&&!empty($_smarty_tpl->tpl_vars['ALL_CONDITIONS']->value)){?><?php  $_smarty_tpl->tpl_vars['ALL_CONDITION'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['ALL_CONDITION']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['ALL_CONDITIONS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['allCounter']['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['ALL_CONDITION']->key => $_smarty_tpl->tpl_vars['ALL_CONDITION']->value){
$_smarty_tpl->tpl_vars['ALL_CONDITION']->_loop = true;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['allCounter']['iteration']++;
?><?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['allCounter']['iteration']!=1){?><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><?php }?><span><?php echo $_smarty_tpl->tpl_vars['ALL_CONDITION']->value;?>
</span><br><?php } ?><?php }else{ ?><?php echo vtranslate('LBL_NA');?>
<?php }?><br><span><strong><?php echo vtranslate('Any');?>
&nbsp;:&nbsp;</strong></span><?php if (is_array($_smarty_tpl->tpl_vars['ANY_CONDITIONS']->value)&&!empty($_smarty_tpl->tpl_vars['ANY_CONDITIONS']->value)){?><?php  $_smarty_tpl->tpl_vars['ANY_CONDITION'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['ANY_CONDITION']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['ANY_CONDITIONS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['anyCounter']['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['ANY_CONDITION']->key => $_smarty_tpl->tpl_vars['ANY_CONDITION']->value){
$_smarty_tpl->tpl_vars['ANY_CONDITION']->_loop = true;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['anyCounter']['iteration']++;
?><?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['anyCounter']['iteration']!=1){?><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><?php }?><span><?php echo $_smarty_tpl->tpl_vars['ANY_CONDITION']->value;?>
</span><br><?php } ?><?php }else{ ?><?php echo vtranslate('LBL_NA');?>
<?php }?><?php }elseif($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value=='execution_condition'){?><?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getDisplayValue('v7_execution_condition');?>
<?php }elseif($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value=='pfname'){?><?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getName();?>
<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getDisplayValue($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value);?>
<?php }?></td><?php }?><?php } ?></tr><?php }
if (!$_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->_loop) {
?><tr class="emptyRecordsDiv"><?php ob_start();?><?php echo count($_smarty_tpl->tpl_vars['LISTVIEW_HEADERS']->value)+1;?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['COLSPAN_WIDTH'] = new Smarty_variable($_tmp1, null, 0);?><td colspan="<?php echo $_smarty_tpl->tpl_vars['COLSPAN_WIDTH']->value;?>
"style="vertical-align:inherit !important;"><center><?php echo vtranslate('LBL_NO_RELATED_PF_FOUND',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</center></td></tr><?php } ?></tbody></table></div><?php } ?></div></div></div></div></div></form></div></div><?php }} ?>