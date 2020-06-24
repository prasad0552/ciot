<?php /* Smarty version Smarty-3.1.7, created on 2020-06-09 19:51:14
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Vtiger\dashboards\KeyMetricsContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:16259448505edfe832892889-31263945%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '82a3901926dac4d6b1671064d06c1c25c6141bfa' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Vtiger\\dashboards\\KeyMetricsContents.tpl',
      1 => 1572909986,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16259448505edfe832892889-31263945',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'KEYMETRICS' => 0,
    'KEYMETRIC' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5edfe8328f066',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5edfe8328f066')) {function content_5edfe8328f066($_smarty_tpl) {?>
<div><?php  $_smarty_tpl->tpl_vars['KEYMETRIC'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['KEYMETRIC']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['KEYMETRICS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['KEYMETRIC']->key => $_smarty_tpl->tpl_vars['KEYMETRIC']->value){
$_smarty_tpl->tpl_vars['KEYMETRIC']->_loop = true;
?><div style="padding-bottom:6px;"><span class="pull-right"><?php echo $_smarty_tpl->tpl_vars['KEYMETRIC']->value['count'];?>
</span><a href="?module=<?php echo $_smarty_tpl->tpl_vars['KEYMETRIC']->value['module'];?>
&view=List&viewname=<?php echo $_smarty_tpl->tpl_vars['KEYMETRIC']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['KEYMETRIC']->value['name'];?>
</a></div><?php } ?></div>
<?php }} ?>