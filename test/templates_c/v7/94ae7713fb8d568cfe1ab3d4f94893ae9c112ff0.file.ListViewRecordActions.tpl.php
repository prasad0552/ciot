<?php /* Smarty version Smarty-3.1.7, created on 2020-11-07 16:43:45
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/RecycleBin/ListViewRecordActions.tpl" */ ?>
<?php /*%%SmartyHeaderCode:10550285325fa6cec14b8434-28478498%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '94ae7713fb8d568cfe1ab3d4f94893ae9c112ff0' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/RecycleBin/ListViewRecordActions.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10550285325fa6cec14b8434-28478498',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'SEARCH_MODE_RESULTS' => 0,
    'LISTVIEW_ENTRY' => 0,
    'MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5fa6cec14da79',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5fa6cec14da79')) {function content_5fa6cec14da79($_smarty_tpl) {?>
<!--LIST VIEW RECORD ACTIONS--><div class="table-actions"><?php if (!$_smarty_tpl->tpl_vars['SEARCH_MODE_RESULTS']->value){?><span class="input" ><input type="checkbox" value="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getId();?>
" class="listViewEntriesCheckBox"/></span><?php }?><span class="restoreRecordButton"><i title="<?php echo vtranslate('LBL_RESTORE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="fa fa-refresh alignMiddle"></i></span><span class="deleteRecordButton"><i title="<?php echo vtranslate('LBL_DELETE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
" class="fa fa-trash alignMiddle"></i></span></div><?php }} ?>