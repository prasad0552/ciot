<?php /* Smarty version Smarty-3.1.7, created on 2020-06-24 17:33:47
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Users/CalendarDetailViewPreProcess.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2866554825ef38e7b4e3971-78166028%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '04de5436eb28a156cc1d2bdec57af02a85cb709b' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Users/CalendarDetailViewPreProcess.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2866554825ef38e7b4e3971-78166028',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ef38e7b50478',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ef38e7b50478')) {function content_5ef38e7b50478($_smarty_tpl) {?>

<?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("SettingsMenuStart.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<div class="bodyContents"><div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("CalendarDetailViewHeader.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>