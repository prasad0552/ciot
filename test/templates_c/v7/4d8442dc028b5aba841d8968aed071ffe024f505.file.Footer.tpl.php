<?php /* Smarty version Smarty-3.1.7, created on 2020-10-09 15:39:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouCreator/Footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:5112274185f80841462d939-91230636%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4d8442dc028b5aba841d8968aed071ffe024f505' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouCreator/Footer.tpl',
      1 => 1602257820,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '5112274185f80841462d939-91230636',
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
  'unifunc' => 'content_5f8084146348a',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f8084146348a')) {function content_5f8084146348a($_smarty_tpl) {?>

<br><div class="small" style="color: rgb(153, 153, 153);text-align: center;"><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo ITS4YouCreator_Version_Helper::$version;?>
 <?php echo vtranslate("COPYRIGHT",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("Footer.tpl",'Vtiger'), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>