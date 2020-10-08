<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:08:52
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/DetailView.tpl" */ ?>
<?php /*%%SmartyHeaderCode:6456088365f680b341482b4-17905027%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b31d656060db598293fa482820411549b8c7f765' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/DetailView.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6456088365f680b341482b4-17905027',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'TEMPLATEID' => 0,
    'PARENTTAB' => 0,
    'IS_OVERLAY' => 0,
    'MODE' => 0,
    'QUALIFIED_MODULE' => 0,
    'RECORD_MODEL' => 0,
    'MODULE' => 0,
    'SELECTED_MODULE_NAME' => 0,
    'SHOW_POPUP' => 0,
    'ALL_FIELDS' => 0,
    'FIELD_NAME' => 0,
    'FIELD_MODEL' => 0,
    'DYNAMICFIELDS_MODEL' => 0,
    'VISIBLE_KEY' => 0,
    'VISIBLE_TYPE' => 0,
    'IS_MANDATORY' => 0,
    'VISIBLE_VALUE' => 0,
    'ALL_BLOCKS' => 0,
    'BLOCK_LABEL' => 0,
    'BLOCK_VISIBLE_TYPE' => 0,
    'FIELDS_GROUPS_STRUCTURE' => 0,
    'ALL_FIELDS_GROUPS' => 0,
    'FG_DATA' => 0,
    'FG_ID' => 0,
    'FG_VISIBLE_TYPE' => 0,
    'PROCESSFLOW_LIST' => 0,
    'action_data' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680b3419671',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680b3419671')) {function content_5f680b3419671($_smarty_tpl) {?>
<div class="detailview-content container-fluid"><div class="details row tabbable"><form id="detailView" method="post" action="index.php" name="etemplatedetailview" onsubmit="VtigerJS_DialogBox.block();"><input type="hidden" name="action" value=""><input type="hidden" name="view" value=""><input type="hidden" name="module" value="ITS4YouDynamicFields"><input type="hidden" name="retur_module" value="ITS4YouDynamicFields"><input type="hidden" name="return_action" value="ITS4YouDynamicFields"><input type="hidden" name="return_view" value="Detail"><input type="hidden" name="templateid" value="<?php echo $_smarty_tpl->tpl_vars['TEMPLATEID']->value;?>
"><input type="hidden" name="parenttab" value="<?php echo $_smarty_tpl->tpl_vars['PARENTTAB']->value;?>
"><input type="hidden" name="isDuplicate" value="false"><input type="hidden" name="subjectChanged" value=""><input id="recordId" value="<?php echo $_smarty_tpl->tpl_vars['TEMPLATEID']->value;?>
" type="hidden"><?php if ($_smarty_tpl->tpl_vars['IS_OVERLAY']->value!="yes"&&$_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?><div class="clearfix"><div class="col-lg-12"><ul class="nav nav-tabs layoutTabs massEditTabs"><li class="active"><a data-toggle="tab" href="#detailViewLayout"><strong><?php echo vtranslate('LBL_DETAILVIEW_BASIC_TAB',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li><li class="relatedListTab"><a data-toggle="tab" href="#relatedTabPf"><strong><?php echo vtranslate('LBL_RELATED_PF_TAB',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li></ul></div></div><?php }?><div class="tab-content layoutContent padding20 themeTableColor overflowVisible"><div class="col-lg-12 tab-pane active" id="detailViewLayout"><div class="left-block col-lg-4"><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_BASIC_INFORMATION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4><?php if ($_smarty_tpl->tpl_vars['IS_OVERLAY']->value!="yes"){?><div class="pull-right"><button type="button" class="btn btn-default editDF" data-url="index.php?module=ITS4YouDynamicFields&parent=Settings&view=Edit&record=<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getId();?>
&mode=<?php echo $_smarty_tpl->tpl_vars['MODE']->value;?>
">&nbsp;<?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</button></div><?php }?></div><div class="summaryViewFields"><div class="recordDetails"><table class="summary-table no-border"><tbody><tr class="summaryViewEntries"><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo vtranslate('LBL_DESCRIPTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue"><?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->get('description');?>
</td></tr><tr class="summaryViewEntries"><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo vtranslate('LBL_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue"><?php echo vtranslate($_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</td></tr><?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?><tr class="summaryViewEntries"><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo vtranslate('LBL_SHOW_POPUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td class="fieldValue" valign=top><?php if ($_smarty_tpl->tpl_vars['SHOW_POPUP']->value=="1"){?><?php echo vtranslate('LBL_YES',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_NO',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></td></tr><?php }?></tbody></table></div></div></div><br><?php if (count($_smarty_tpl->tpl_vars['ALL_FIELDS']->value)>0){?><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_FIELDS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="summaryViewFields"><div class="recordDetails"><table class="summary-table no-border"><tbody><?php  $_smarty_tpl->tpl_vars['FIELD_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['FIELD_NAME'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_FIELDS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['FIELD_MODEL']->key => $_smarty_tpl->tpl_vars['FIELD_MODEL']->value){
$_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['FIELD_NAME']->value = $_smarty_tpl->tpl_vars['FIELD_MODEL']->key;
?><?php $_smarty_tpl->tpl_vars['IS_MANDATORY'] = new Smarty_variable($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->isMandatory($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?><tr class="summaryViewEntries"><?php $_smarty_tpl->tpl_vars['VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getVisibility($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo vtranslate($_smarty_tpl->tpl_vars['FIELD_MODEL']->value->get('label'),$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</label></td><?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?><td class="fieldValue"><?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?><?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value&&$_smarty_tpl->tpl_vars['IS_MANDATORY']->value!="yes"){?><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php } ?><?php if ($_smarty_tpl->tpl_vars['IS_MANDATORY']->value=="yes"){?><?php echo vtranslate('LBL_SHOW_AS_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></td><?php }?></tr><?php } ?></tbody></table></div></div></div><br><?php }?><?php if (count($_smarty_tpl->tpl_vars['ALL_BLOCKS']->value)>0){?><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_BLOCKS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="summaryViewFields"><div class="recordDetails"><table class="summary-table no-border"><tbody><?php  $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->_loop = false;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_BLOCKS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['foreachblocks']['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->key => $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value){
$_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->_loop = true;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value = $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['foreachblocks']['iteration']++;
?><tr class="summaryViewEntries"><?php $_smarty_tpl->tpl_vars['BLOCK_SEQ'] = new Smarty_variable($_smarty_tpl->getVariable('smarty')->value['foreach']['foreachblocks']['iteration'], null, 0);?><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo vtranslate($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</label></td><?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?><td class="fieldValue"><?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?><?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value){?><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php } ?></td><?php }?></tr><?php } ?></tbody></table></div></div></div><br><?php }?><?php if (count($_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value)>0){?><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_FIELDS_GROUPS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div class="summaryViewFields"><div class="recordDetails"><table class="summary-table no-border"><tbody><?php  $_smarty_tpl->tpl_vars['FG_DATA'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FG_DATA']->_loop = false;
 $_smarty_tpl->tpl_vars['FG_ID'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_FIELDS_GROUPS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['FG_DATA']->key => $_smarty_tpl->tpl_vars['FG_DATA']->value){
$_smarty_tpl->tpl_vars['FG_DATA']->_loop = true;
 $_smarty_tpl->tpl_vars['FG_ID']->value = $_smarty_tpl->tpl_vars['FG_DATA']->key;
?><?php $_smarty_tpl->tpl_vars['FG_VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['FG_DATA']->value['visible'], null, 0);?><?php $_smarty_tpl->tpl_vars['IS_MANDATORY'] = new Smarty_variable($_smarty_tpl->tpl_vars['FG_DATA']->value['mandatory'], null, 0);?><tr class="summaryViewEntries"><td class="fieldLabel"><label class="muted textOverflowEllipsis"><?php echo $_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value[$_smarty_tpl->tpl_vars['FG_ID']->value];?>
</label></td><td class="fieldValue"><?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?><?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['FG_VISIBLE_TYPE']->value&&$_smarty_tpl->tpl_vars['IS_MANDATORY']->value!="1"){?><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php } ?><?php if ($_smarty_tpl->tpl_vars['IS_MANDATORY']->value=="1"){?><?php echo vtranslate('LBL_SHOW_AS_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></td></tr><?php } ?></tbody></table></div></div></div><?php }?></div></div><div  class="col-lg-12 tab-pane" id="relatedTabPf"><?php if ($_smarty_tpl->tpl_vars['IS_OVERLAY']->value!="yes"&&$_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?><div id="relatedTabPf"><div class="summaryView"><div class="summaryViewHeader"><h4 class="display-inline-block"><?php echo vtranslate('LBL_RELATED_PF_TAB',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div><div id="listContainer" class="noContent"><?php if ($_smarty_tpl->tpl_vars['PROCESSFLOW_LIST']->value){?><div id="table-content" class="table-container"><table id="relatedActionsList" class="table listview-table"><thead><tr class="listViewContentHeader"><th><?php echo vtranslate('Name',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</th><th><?php echo vtranslate('LBL_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</th></tr></thead><tbody class="overflow-y"><?php  $_smarty_tpl->tpl_vars['action_data'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['action_data']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['PROCESSFLOW_LIST']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['action_data']->key => $_smarty_tpl->tpl_vars['action_data']->value){
$_smarty_tpl->tpl_vars['action_data']->_loop = true;
?><tr class="listViewEntries" data-id="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['id'];?>
" data-recordUrl="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['detail_link'];?>
"><td class="listViewEntryValue textOverflowEllipsis"><a href="<?php echo $_smarty_tpl->tpl_vars['action_data']->value['detail_link'];?>
"><?php echo $_smarty_tpl->tpl_vars['action_data']->value['name'];?>
</a></td><td width="30%"><?php echo $_smarty_tpl->tpl_vars['action_data']->value['module_name'];?>
</td></tr><?php } ?></tbody></table></div><?php }else{ ?><div class="border1px"><br><div class="textAlignCenter"><?php echo vtranslate('LBL_NO_RELATED_PF',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><br></div><?php }?></div></div></div><?php }?></div></div></form></div></div><?php }} ?>