<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 03:06:19
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouInstaller/Footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20376130195f68022dede5c0-37898137%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eab681d16ecefa4ceb1322da810d3d5c6be52ef5' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouInstaller/Footer.tpl',
      1 => 1600657567,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20376130195f68022dede5c0-37898137',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68022dee33b',
  'variables' => 
  array (
    'MODULE' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68022dee33b')) {function content_5f68022dee33b($_smarty_tpl) {?>

<br><div class="small" style="color: rgb(153, 153, 153);text-align: center;"><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo ITS4YouInstaller_Version_Helper::$version;?>
 <?php echo vtranslate("COPYRIGHT",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("Footer.tpl",'Vtiger'), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>