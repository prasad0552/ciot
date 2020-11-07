<?php /* Smarty version Smarty-3.1.7, created on 2020-10-09 18:14:38
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Reports/IndexViewPreProcess.tpl" */ ?>
<?php /*%%SmartyHeaderCode:16683274545f80a88e26f0c3-13275703%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '60e3f7831850bf2031686896c9af378d75cb0252' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Reports/IndexViewPreProcess.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16683274545f80a88e26f0c3-13275703',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f80a88e28f8c',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f80a88e28f8c')) {function content_5f80a88e28f8c($_smarty_tpl) {?>
<?php echo $_smarty_tpl->getSubTemplate ("modules/Vtiger/partials/Topbar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<div class="container-fluid app-nav"><div class="row"><?php echo $_smarty_tpl->getSubTemplate ("modules/Reports/partials/SidebarHeader.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ModuleHeader.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div></div></nav><div class="clearfix main-container"><div><div class="editViewPageDiv viewContent"><div class="reports-content-area"><?php }} ?>