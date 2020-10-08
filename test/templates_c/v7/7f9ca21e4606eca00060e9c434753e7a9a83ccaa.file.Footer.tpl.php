<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:51:18
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouDynamicFields/Footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10318589995f680716918a05-91532422%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7f9ca21e4606eca00060e9c434753e7a9a83ccaa' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouDynamicFields/Footer.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10318589995f680716918a05-91532422',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68071691d29',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68071691d29')) {function content_5f68071691d29($_smarty_tpl) {?>

<br><div class="small" style="color: rgb(153, 153, 153);text-align: center;"><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo ITS4YouDynamicFields_Version_Helper::$version;?>
 <?php echo vtranslate("COPYRIGHT",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("Footer.tpl",'Vtiger'), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>