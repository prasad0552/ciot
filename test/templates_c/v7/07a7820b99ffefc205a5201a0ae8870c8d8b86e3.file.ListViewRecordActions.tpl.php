<?php /* Smarty version Smarty-3.1.7, created on 2020-05-21 11:32:30
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Settings\Vtiger\ListViewRecordActions.tpl" */ ?>
<?php /*%%SmartyHeaderCode:6512940975ec666ced18d60-41537690%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '07a7820b99ffefc205a5201a0ae8870c8d8b86e3' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Settings\\Vtiger\\ListViewRecordActions.tpl',
      1 => 1572909986,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6512940975ec666ced18d60-41537690',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'LISTVIEW_ENTRY' => 0,
    'RECORD_LINK' => 0,
    'RECORD_LINK_URL' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ec666cf03710',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ec666cf03710')) {function content_5ec666cf03710($_smarty_tpl) {?>



<div class="table-actions" style = "width:60px">
    <?php  $_smarty_tpl->tpl_vars['RECORD_LINK'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['RECORD_LINK']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getRecordLinks(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['RECORD_LINK']->total= $_smarty_tpl->_count($_from);
 $_smarty_tpl->tpl_vars['RECORD_LINK']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['RECORD_LINK']->key => $_smarty_tpl->tpl_vars['RECORD_LINK']->value){
$_smarty_tpl->tpl_vars['RECORD_LINK']->_loop = true;
 $_smarty_tpl->tpl_vars['RECORD_LINK']->iteration++;
 $_smarty_tpl->tpl_vars['RECORD_LINK']->last = $_smarty_tpl->tpl_vars['RECORD_LINK']->iteration === $_smarty_tpl->tpl_vars['RECORD_LINK']->total;
?>
        <?php $_smarty_tpl->tpl_vars["RECORD_LINK_URL"] = new Smarty_variable($_smarty_tpl->tpl_vars['RECORD_LINK']->value->getUrl(), null, 0);?>
        <a <?php if (stripos($_smarty_tpl->tpl_vars['RECORD_LINK_URL']->value,'javascript:')===0){?> onclick="<?php echo substr($_smarty_tpl->tpl_vars['RECORD_LINK_URL']->value,strlen("javascript:"));?>
;
                if (event.stopPropagation){
        event.stopPropagation();} else{
        event.cancelBubble = true;}" <?php }else{ ?> href='<?php echo $_smarty_tpl->tpl_vars['RECORD_LINK_URL']->value;?>
' <?php }?>>
            <i class="<?php if ($_smarty_tpl->tpl_vars['RECORD_LINK']->value->getLabel()=='LBL_EDIT'){?>fa fa-pencil<?php }elseif($_smarty_tpl->tpl_vars['RECORD_LINK']->value->getLabel()=='LBL_DELETE'){?>fa fa-trash<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['RECORD_LINK']->value->getIcon();?>
<?php }?>" title="<?php echo vtranslate($_smarty_tpl->tpl_vars['RECORD_LINK']->value->getLabel(),$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
"></i>
        </a>
        <?php if (!$_smarty_tpl->tpl_vars['RECORD_LINK']->last){?>
            &nbsp;&nbsp;
        <?php }?>
    <?php } ?>
</div>
<?php }} ?>