<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:03:33
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouProcessFlow/Footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:14190843995f6809f54c1e24-73826731%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '79339b1c345eddfa1e14e663f95bce29be6a5942' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouProcessFlow/Footer.tpl',
      1 => 1600651998,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14190843995f6809f54c1e24-73826731',
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
  'unifunc' => 'content_5f6809f54c661',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f6809f54c661')) {function content_5f6809f54c661($_smarty_tpl) {?>

<br><div class="small" style="color: rgb(153, 153, 153);text-align: center;"><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo ITS4YouProcessFlow_Version_Helper::$version;?>
 <?php echo vtranslate("COPYRIGHT",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("Footer.tpl",'Vtiger'), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>