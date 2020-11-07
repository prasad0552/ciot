<?php /* Smarty version Smarty-3.1.7, created on 2020-10-09 15:39:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouCreator/Uninstall.tpl" */ ?>
<?php /*%%SmartyHeaderCode:18062649905f808414608a07-93299889%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c4ecca90bc92e0e2c4424aab270bb796b570e001' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouCreator/Uninstall.tpl',
      1 => 1602257820,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '18062649905f808414608a07-93299889',
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
  'unifunc' => 'content_5f80841462a03',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f80841462a03')) {function content_5f80841462a03($_smarty_tpl) {?>
<div class="container" id="Uninstall_<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
_Container"><form name="profiles_privilegies" action="index.php" method="post" class="form-horizontal"><input type="hidden" name="module" value="<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
" /><input type="hidden" name="view" value="" /><input type="hidden" name="license_key_val" id="license_key_val" value="<?php echo $_smarty_tpl->tpl_vars['LICENSE']->value;?>
" /><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><h3><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h3><hr></div></div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><label class="fieldLabel"><strong><?php echo vtranslate('LBL_UNINSTALL_DESC',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
:</strong></label></div></div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><table class="table table-bordered table-condensed table-responsive themeTableColor"><thead><tr class="blockHeader"><th class="mediumWidthType"><span class="alignMiddle"><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></th></tr></thead><tbody><tr><td class="textAlignCenter"><button id="ITS4YouUninstall_btn" type="button" class="btn btn-danger marginLeftZero"><?php echo vtranslate('LBL_UNINSTALL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></td></tr></tbody></table></div></div></form></div><?php }} ?>