<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 03:05:31
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/Uninstall.tpl" */ ?>
<?php /*%%SmartyHeaderCode:14479004305f68187b046160-94070814%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '861cb6aa1ea600c53577ec3d0dca0974c9696012' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/Uninstall.tpl',
      1 => 1600657520,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14479004305f68187b046160-94070814',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'LICENSE' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68187b04c5c',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68187b04c5c')) {function content_5f68187b04c5c($_smarty_tpl) {?>
<div class="container" id="Uninstall_<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
_Container"><form name="profiles_privilegies" action="index.php" method="post" class="form-horizontal"><input type="hidden" name="module" value="<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
" /><input type="hidden" name="view" value="" /><input type="hidden" name="license_key_val" id="license_key_val" value="<?php echo $_smarty_tpl->tpl_vars['LICENSE']->value;?>
" /><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><h3><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h3><hr></div></div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><label class="fieldLabel"><strong><?php echo vtranslate('LBL_UNINSTALL_DESC',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
:</strong></label></div></div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><table class="table table-bordered table-condensed table-responsive themeTableColor"><thead><tr class="blockHeader"><th class="mediumWidthType"><span class="alignMiddle"><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></th></tr></thead><tbody><tr><td class="textAlignCenter"><button id="ITS4YouUninstall_btn" type="button" class="btn btn-danger marginLeftZero"><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></td></tr></tbody></table></div></div></form></div><?php }} ?>