<?php /* Smarty version Smarty-3.1.7, created on 2020-05-11 14:41:42
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Vtiger\ModalFooter.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19521918725eb96426ac16c7-36610828%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '31d8a030a196b60ac45edbfa93bc5262823cc7a1' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Vtiger\\ModalFooter.tpl',
      1 => 1572909986,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19521918725eb96426ac16c7-36610828',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'BUTTON_NAME' => 0,
    'MODULE' => 0,
    'BUTTON_ID' => 0,
    'BUTTON_LABEL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5eb96426b03b2',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5eb96426b03b2')) {function content_5eb96426b03b2($_smarty_tpl) {?>
<div class="modal-footer "><center><?php if ($_smarty_tpl->tpl_vars['BUTTON_NAME']->value!=null){?><?php $_smarty_tpl->tpl_vars['BUTTON_LABEL'] = new Smarty_variable($_smarty_tpl->tpl_vars['BUTTON_NAME']->value, null, 0);?><?php }else{ ?><?php ob_start();?><?php echo vtranslate('LBL_SAVE',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['BUTTON_LABEL'] = new Smarty_variable($_tmp1, null, 0);?><?php }?><button <?php if ($_smarty_tpl->tpl_vars['BUTTON_ID']->value!=null){?> id="<?php echo $_smarty_tpl->tpl_vars['BUTTON_ID']->value;?>
" <?php }?> class="btn btn-success" type="submit" name="saveButton"><strong><?php echo $_smarty_tpl->tpl_vars['BUTTON_LABEL']->value;?>
</strong></button><a href="#" class="cancelLink" type="reset" data-dismiss="modal"><?php echo vtranslate('LBL_CANCEL',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</a></center></div><?php }} ?>