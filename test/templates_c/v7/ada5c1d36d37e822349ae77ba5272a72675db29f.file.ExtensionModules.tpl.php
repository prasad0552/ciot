<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 03:06:19
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/ExtensionModules.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12409184775f68022dd2d383-99252029%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ada5c1d36d37e822349ae77ba5272a72675db29f' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/ExtensionModules.tpl',
      1 => 1600657567,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12409184775f68022dd2d383-99252029',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68022dd3431',
  'variables' => 
  array (
    'REGISTRATION_STATUS' => 0,
    'PASSWORD_STATUS' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68022dd3431')) {function content_5f68022dd3431($_smarty_tpl) {?>
<?php $_smarty_tpl->tpl_vars['IS_AUTH'] = new Smarty_variable(($_smarty_tpl->tpl_vars['REGISTRATION_STATUS']->value&&$_smarty_tpl->tpl_vars['PASSWORD_STATUS']->value), null, 0);?><div class="row" style="height:100%"><ul class="nav nav-tabs layoutTabs massEditTabs"><li class="tab-item taxesTab active"><a data-toggle="tab" href="#installedModules"><strong><?php echo vtranslate('LBL_INSTALLED_AND_AVAILABLE_MODULES',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li><li class="tab-item chargesTab"><a data-toggle="tab" href="#modulesShop"><strong><?php echo vtranslate('LBL_MODULES_SHOP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></a></li></ul><div class="tab-content layoutContent padding20 overflowVisible" style="height:100%"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("InstalledModules.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ModulesShop.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div></div><?php }} ?>