<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:51:30
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/Step1.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12334434935f680722162f51-37930379%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2e3601607a0175f77aeea3698b1599b5cdba9b13' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/Step1.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12334434935f680722162f51-37930379',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'QUALIFIED_MODULE' => 0,
    'MODE' => 0,
    'RECORDID' => 0,
    'PARENT_ID' => 0,
    'PARENT_MODULE' => 0,
    'PARENT_TYPE' => 0,
    'ALL_MODULES' => 0,
    'MODULE_MODEL' => 0,
    'SELECTED_MODULE' => 0,
    'DESCRIPTION' => 0,
    'SHOW_POPUP' => 0,
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68072217fe5',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68072217fe5')) {function content_5f68072217fe5($_smarty_tpl) {?>
<div class="editViewPageDiv"><div id="EditView"><form name="EditDynamicFields" action="index.php" method="post" id="dynamicfields_step1" class="form-horizontal"><div class="row-fluid"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('EditSteps.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div><input type="hidden" name="module" value="ITS4YouDynamicFields"><input type="hidden" name="view" value="Edit"><input type="hidden" name="mode" value="<?php echo $_smarty_tpl->tpl_vars['MODE']->value;?>
"/><input type="hidden" name="parent" value="Settings"/><input type="hidden" class="actual_step" value="1"/><input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['RECORDID']->value;?>
"/><input type="hidden" name="parentid" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_ID']->value;?>
"/><input type="hidden" name="parentmodule" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_MODULE']->value;?>
"/><input type="hidden" name="parenttype" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_TYPE']->value;?>
"/><div class="padding-left1per padding-right1per"><br><div class="contentsBackground"><label><strong><?php echo vtranslate('LBL_STEP_1',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
: <?php echo vtranslate('LBL_STEP_1_INFO',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></label><br><br><div class="form-group"><label for="name" class="col-sm-2 control-label"><?php if ($_smarty_tpl->tpl_vars['PARENT_ID']->value==''&&$_smarty_tpl->tpl_vars['PARENT_MODULE']->value==''){?><?php echo vtranslate('LBL_SELECT_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<span class="redColor">*</span><?php }else{ ?><?php echo vtranslate('LBL_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></label><div class="col-sm-5 controls"><?php if ($_smarty_tpl->tpl_vars['PARENT_ID']->value!=''&&$_smarty_tpl->tpl_vars['PARENT_MODULE']->value!=''){?><input type="hidden" name="module_name" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_MODULE']->value;?>
"/><?php echo vtranslate($_smarty_tpl->tpl_vars['PARENT_MODULE']->value,$_smarty_tpl->tpl_vars['PARENT_MODULE']->value);?>
<?php }else{ ?><select class="select2" id="moduleName" name="module_name" required="true" data-placeholder="Select Module..."><?php  $_smarty_tpl->tpl_vars['MODULE_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['MODULE_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['TABID'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_MODULES']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['MODULE_MODEL']->key => $_smarty_tpl->tpl_vars['MODULE_MODEL']->value){
$_smarty_tpl->tpl_vars['MODULE_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['TABID']->value = $_smarty_tpl->tpl_vars['MODULE_MODEL']->key;
?><option value="<?php echo $_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName();?>
" <?php if ($_smarty_tpl->tpl_vars['SELECTED_MODULE']->value==$_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName()){?> selected <?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName(),$_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getName());?>
</option><?php } ?></select><?php }?></div></div><div class="form-group"><label for="name" class="col-sm-2 control-label"><?php echo vtranslate('LBL_DESCRIPTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<span class="redColor">*</span></label><div class="col-sm-5 controls"><input type="text" name="description" class="form-control" data-rule-required="true" value="<?php echo $_smarty_tpl->tpl_vars['DESCRIPTION']->value;?>
" id="description"/></div></div><?php if ($_smarty_tpl->tpl_vars['MODE']->value=='FieldsLayout'){?><div class="form-group"><label class="col-sm-2 control-label"><?php echo vtranslate('LBL_SHOW_POPUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label><div class="col-sm-5 controls"><input type="checkbox" name="show_popup" value="1" <?php if ($_smarty_tpl->tpl_vars['SHOW_POPUP']->value=="1"){?>checked<?php }?>/></div></div><?php }?></div></div><div class="clearfix"></div><div class="modal-overlay-footer clearfix"><div class="row clearfix"><div class='textAlignCenter col-lg-12 col-md-12 col-sm-12'><button type='submit' class='btn btn-success nextButton'><?php echo vtranslate('LBL_NEXT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</button>&nbsp;&nbsp;<a class='cancelLink' href="javascript:history.back()" type="reset"><?php echo vtranslate('LBL_CANCEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</a></div></div></div></form></div></div><?php }} ?>