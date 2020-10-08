<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:08:52
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/DetailHeader.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13097471495f680b342c1ca2-37859657%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6cfcbfb0a83e29b870759418325d50ea4d324cd0' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/DetailHeader.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13097471495f680b342c1ca2-37859657',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODE' => 0,
    'QUALIFIED_MODULE' => 0,
    'RECORD_MODEL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680b342e3f9',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680b342e3f9')) {function content_5f680b342e3f9($_smarty_tpl) {?>
<div class="dynamicfieldsContents col-lg-12 col-md-12 col-sm-12"><div class="editViewHeader col-lg-12"><h4><?php if ($_smarty_tpl->tpl_vars['MODE']->value=="FieldsGroup"){?><?php echo vtranslate('LBL_DETAIL_DYNAMIC_GROUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_DYNAMIC_FIELDS_LAYOUT',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?><?php if ($_smarty_tpl->tpl_vars['RECORD_MODEL']->value){?> - <?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getName();?>
<?php }?></h4><br></div>
<?php }} ?>