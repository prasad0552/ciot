<?php /* Smarty version Smarty-3.1.7, created on 2020-05-21 12:08:11
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Project\DetailViewSummaryContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13741252155ec66f2b35da60-53455663%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'de3e98d29e0bf10980243bb7d97ba76e3e3ec2b3' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Project\\DetailViewSummaryContents.tpl',
      1 => 1573038840,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13741252155ec66f2b35da60-53455663',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ec66f2b636c4',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ec66f2b636c4')) {function content_5ec66f2b636c4($_smarty_tpl) {?>
<form id="detailView" method="POST"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('SummaryViewWidgets.tpl',$_smarty_tpl->tpl_vars['MODULE_NAME']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</form><?php }} ?>