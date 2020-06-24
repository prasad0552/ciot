<?php /* Smarty version Smarty-3.1.7, created on 2020-05-21 12:08:10
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Project\ModuleSummaryView.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12834167715ec66f2a450e00-50148247%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '218c3e63685e9f6c4b9d0aaefabc0558d2ce53eb' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Project\\ModuleSummaryView.tpl',
      1 => 1573038840,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12834167715ec66f2a450e00-50148247',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ec66f2ab9fd2',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ec66f2ab9fd2')) {function content_5ec66f2ab9fd2($_smarty_tpl) {?>
<div class="recordDetails"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('SummaryViewContents.tpl',$_smarty_tpl->tpl_vars['MODULE_NAME']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div>
<?php }} ?>