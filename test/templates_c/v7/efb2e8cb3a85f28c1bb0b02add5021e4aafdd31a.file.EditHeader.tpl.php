<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:51:30
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditHeader.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10780670995f680722135ea8-85067832%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'efb2e8cb3a85f28c1bb0b02add5021e4aafdd31a' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditHeader.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10780670995f680722135ea8-85067832',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'RECORDID' => 0,
    'MODE' => 0,
    'QUALIFIED_MODULE' => 0,
    'SOURCE_MODULE' => 0,
    'LOAD_STEP' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68072215f74',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68072215f74')) {function content_5f68072215f74($_smarty_tpl) {?>
<div class="dynamicfieldsContents col-lg-12 col-md-12 col-sm-12"><div class="editViewHeader"><h4><?php if ($_smarty_tpl->tpl_vars['RECORDID']->value==''){?><?php if ($_smarty_tpl->tpl_vars['MODE']->value=='FieldsLayout'){?><?php echo vtranslate('LBL_NEW_DYNAMIC_FIELDS_LAYOUT',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }elseif($_smarty_tpl->tpl_vars['MODE']->value=='DefaultForm'){?><?php echo vtranslate('LBL_DEFAULT_FORM_FOR_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
: <?php echo vtranslate($_smarty_tpl->tpl_vars['SOURCE_MODULE']->value,$_smarty_tpl->tpl_vars['SOURCE_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_NEW_DYNAMIC_FIELDS_GROUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php }else{ ?><?php if ($_smarty_tpl->tpl_vars['MODE']->value=='FieldsLayout'){?><?php echo vtranslate('LBL_EDITING_DYNAMIC_FIELDS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }elseif($_smarty_tpl->tpl_vars['MODE']->value=='DefaultForm'){?><?php echo vtranslate('LBL_DEFAULT_FORM_FOR_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
: <?php echo vtranslate($_smarty_tpl->tpl_vars['SOURCE_MODULE']->value,$_smarty_tpl->tpl_vars['SOURCE_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_EDITING_DYNAMIC_GROUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php }?></h4><br></div><input type="hidden" class="load_step" value="<?php echo $_smarty_tpl->tpl_vars['LOAD_STEP']->value;?>
"/>
<?php }} ?>