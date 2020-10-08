<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:55:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/Step2.tpl" */ ?>
<?php /*%%SmartyHeaderCode:558110395f6807f4a47eb6-80475126%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bec0ded1d5c338dd328ba8284b2b890d15b647ea' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/Step2.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '558110395f6807f4a47eb6-80475126',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'SHOW_STEPS' => 0,
    'QUALIFIED_MODULE' => 0,
    'SOURCE_MODULE' => 0,
    'MODE' => 0,
    'RECORDID' => 0,
    'PARENT_ID' => 0,
    'PARENT_MODULE' => 0,
    'PARENT_TYPE' => 0,
    'DESCRIPTION' => 0,
    'SHOW_POPUP' => 0,
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f6807f4a7af5',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f6807f4a7af5')) {function content_5f6807f4a7af5($_smarty_tpl) {?>
<div class="editViewPageDiv"><div id="EditView"><form name="EditDynamicFields" action="index.php" method="post" id="dynamicfields_step2" class="form-horizontal"><?php if ($_smarty_tpl->tpl_vars['SHOW_STEPS']->value=="yes"){?><div class="row-fluid"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('EditSteps.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div><?php }?><input type="hidden" name="module" value="ITS4YouDynamicFields"/><input type="hidden" name="action" value="Save"><input type="hidden" name="source_module" value="<?php echo $_smarty_tpl->tpl_vars['SOURCE_MODULE']->value;?>
"><input type="hidden" name="mode" value="<?php echo $_smarty_tpl->tpl_vars['MODE']->value;?>
"/><input type="hidden" name="parent" value="Settings"/><input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['RECORDID']->value;?>
"/><input type="hidden" class="actual_step" value="2"/><input type="hidden" name="parentid" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_ID']->value;?>
"/><input type="hidden" name="parentmodule" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_MODULE']->value;?>
"/><input type="hidden" name="parenttype" value="<?php echo $_smarty_tpl->tpl_vars['PARENT_TYPE']->value;?>
"/><?php if ($_smarty_tpl->tpl_vars['SHOW_STEPS']->value=="no"){?><hr style="margin-top: 0px !important;"><?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?><div class="form-group"><label for="name" class="col-sm-4 control-label"><?php echo vtranslate('LBL_DESCRIPTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<span class="redColor">*</span></label><div class="col-sm-4 controls"><input class="form-control" id="description" name="description" value="<?php echo $_smarty_tpl->tpl_vars['DESCRIPTION']->value;?>
" data-rule-required="true"></div></div><?php }?><?php if ($_smarty_tpl->tpl_vars['MODE']->value=="FieldsLayout"){?><div class="form-group"><label for="name" class="col-sm-4 control-label"><?php echo vtranslate('LBL_SHOW_POPUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label><div class="col-sm-4 controls"><input type="checkbox" name="show_popup" value="1" <?php if ($_smarty_tpl->tpl_vars['SHOW_POPUP']->value=="1"){?>checked<?php }?>/></div></div><?php }?><?php }else{ ?><input type="hidden" name="description" value="<?php echo $_smarty_tpl->tpl_vars['DESCRIPTION']->value;?>
"><input type="hidden" name="show_popup" value="<?php echo $_smarty_tpl->tpl_vars['SHOW_POPUP']->value;?>
"><?php }?><div class="padding-left1per padding-right1per"><br><div class="contentsBackground"><?php if ($_smarty_tpl->tpl_vars['MODE']->value=="DefaultForm"){?><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('EditFieldsAll.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }else{ ?><input type="hidden" name="save_type" value="individual"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('EditFields.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }?></div></div><div class="clearfix"></div><div class="modal-overlay-footer clearfix"><div class="row clearfix"><div class='textAlignCenter col-lg-12 col-md-12 col-sm-12'><button type='submit' class='btn btn-success saveButton'><?php if ($_smarty_tpl->tpl_vars['SHOW_STEPS']->value=="no"){?><?php echo vtranslate('LBL_SAVE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_FINISH',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<?php }?></button>&nbsp;&nbsp;<a class='cancelLink' href="javascript:history.back()" type="reset"><?php echo vtranslate('LBL_BACK',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</a></div></div></div></form></div></div><?php }} ?>