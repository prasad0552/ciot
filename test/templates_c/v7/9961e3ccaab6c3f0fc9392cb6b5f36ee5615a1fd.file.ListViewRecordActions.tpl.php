<?php /* Smarty version Smarty-3.1.7, created on 2020-05-16 12:36:27
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Settings\PickListDependency\ListViewRecordActions.tpl" */ ?>
<?php /*%%SmartyHeaderCode:13977140035ebfde4b9d43e0-47924581%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9961e3ccaab6c3f0fc9392cb6b5f36ee5615a1fd' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Settings\\PickListDependency\\ListViewRecordActions.tpl',
      1 => 1572909986,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13977140035ebfde4b9d43e0-47924581',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'LISTVIEW_ENTRY' => 0,
    'RECORD_SOURCE_MODULE' => 0,
    'RECORD_SOURCE_FIELD' => 0,
    'RECORD_TARGET_FIELD' => 0,
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ebfde4ba6137',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ebfde4ba6137')) {function content_5ebfde4ba6137($_smarty_tpl) {?>
<div class="table-actions"><?php $_smarty_tpl->tpl_vars['RECORD_SOURCE_MODULE'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->get('sourceModule'), null, 0);?><?php $_smarty_tpl->tpl_vars['RECORD_SOURCE_FIELD'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->get('sourcefield'), null, 0);?><?php $_smarty_tpl->tpl_vars['RECORD_TARGET_FIELD'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->get('targetfield'), null, 0);?><span class="fa fa-pencil" onclick="javascript:Settings_PickListDependency_Js.triggerEdit(event, '<?php echo $_smarty_tpl->tpl_vars['RECORD_SOURCE_MODULE']->value;?>
', '<?php echo $_smarty_tpl->tpl_vars['RECORD_SOURCE_FIELD']->value;?>
', '<?php echo $_smarty_tpl->tpl_vars['RECORD_TARGET_FIELD']->value;?>
')" title="<?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
"></span><span class="fa fa-trash-o" onclick="javascript:Settings_PickListDependency_Js.triggerDelete(event, '<?php echo $_smarty_tpl->tpl_vars['RECORD_SOURCE_MODULE']->value;?>
', '<?php echo $_smarty_tpl->tpl_vars['RECORD_SOURCE_FIELD']->value;?>
', '<?php echo $_smarty_tpl->tpl_vars['RECORD_TARGET_FIELD']->value;?>
')" title="<?php echo vtranslate('LBL_DELETE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
"></span></div><?php }} ?>