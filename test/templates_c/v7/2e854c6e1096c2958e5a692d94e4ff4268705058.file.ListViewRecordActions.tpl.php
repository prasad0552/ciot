<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:24:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ListViewRecordActions.tpl" */ ?>
<?php /*%%SmartyHeaderCode:408937885f680ec0c64ee1-84130469%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2e854c6e1096c2958e5a692d94e4ff4268705058' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ListViewRecordActions.tpl',
      1 => 1600651998,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '408937885f680ec0c64ee1-84130469',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'LISTVIEW_ENTRY' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680ec0c86e1',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680ec0c86e1')) {function content_5f680ec0c86e1($_smarty_tpl) {?>
<!--LIST VIEW RECORD ACTIONS--><div style="width:120px ;"><span class="actionsRecordButton" style="opacity: 0; padding: 0 5px; padding: 0 5px;"><a class="deleteRecordButton" style="padding: 0 5px;"><i title="<?php echo vtranslate('LBL_DELETE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="fa fa-trash alignMiddle"></i></a><a class="editRecordButton" data-id="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getId();?>
" href="javascript:void(0);" data-url="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getEditViewUrl();?>
" name="editlink"><i title="<?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="fa fa-pencil alignMiddle"></i></a></span><input style="opacity: 0;" <?php if ($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->get('status')){?> checked value="on" <?php }else{ ?> value="off"<?php }?> data-on-color="success" data-id="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getId();?>
" type="checkbox" name="processflowstatus" id="processflowstatus"></div><?php }} ?>