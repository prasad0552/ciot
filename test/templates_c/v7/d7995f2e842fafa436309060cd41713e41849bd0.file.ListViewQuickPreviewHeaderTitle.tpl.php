<?php /* Smarty version Smarty-3.1.7, created on 2020-05-28 18:17:01
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Vtiger\ListViewQuickPreviewHeaderTitle.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12268685635ed0001db570a8-90589554%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd7995f2e842fafa436309060cd41713e41849bd0' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Vtiger\\ListViewQuickPreviewHeaderTitle.tpl',
      1 => 1572909986,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12268685635ed0001db570a8-90589554',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE_NAME' => 0,
    'MODULE_MODEL' => 0,
    'RECORD' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ed0001ddbbfd',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ed0001ddbbfd')) {function content_5ed0001ddbbfd($_smarty_tpl) {?>
<?php $_smarty_tpl->tpl_vars['QUICK_PREVIEW'] = new Smarty_variable("true", null, 0);?><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("DetailViewHeaderTitle.tpl",$_smarty_tpl->tpl_vars['MODULE_NAME']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('MODULE_MODEL'=>$_smarty_tpl->tpl_vars['MODULE_MODEL']->value,'RECORD'=>$_smarty_tpl->tpl_vars['RECORD']->value), 0);?>

<?php }} ?>