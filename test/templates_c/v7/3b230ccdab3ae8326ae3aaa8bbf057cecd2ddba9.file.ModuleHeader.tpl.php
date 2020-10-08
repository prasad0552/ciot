<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 03:06:17
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/ModuleHeader.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2174767465f68022bd2b2a8-54913653%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3b230ccdab3ae8326ae3aaa8bbf057cecd2ddba9' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/ModuleHeader.tpl',
      1 => 1600657567,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2174767465f68022bd2b2a8-54913653',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68022bd341b',
  'variables' => 
  array (
    'MODULE' => 0,
    'PASSWORD_STATUS' => 0,
    'QUALIFIED_MODULE' => 0,
    'USER_NAME' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68022bd341b')) {function content_5f68022bd341b($_smarty_tpl) {?>
<div class="col-sm-12 col-xs-12 module-action-bar clearfix coloredBorderTop"><div class="module-action-content clearfix"><div class="col-lg-4 col-md-4"><h4 title="<?php echo strtoupper(vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value));?>
" class="module-title pull-left text-uppercase"> <?php echo strtoupper(vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value));?>
 </h4></div><div class="col-lg-8 col-md-8"><div class="navbar-right"><ul class="nav navbar-nav"><li><?php if (!($_smarty_tpl->tpl_vars['PASSWORD_STATUS']->value)){?><button class="btn btn-default module-buttons" type="button" id="logintoInstaller"><div class="fa fa-sign-in" aria-hidden="true"></div>&nbsp;<?php echo vtranslate('LBL_LOGIN',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button><?php }else{ ?><button class="btn btn-default module-buttons" type="button" style="text-transform:none"><?php echo $_smarty_tpl->tpl_vars['USER_NAME']->value;?>
</button>&nbsp;<button class="btn btn-danger" type="button" id="logoutInstaller"><span class="fa fa-power-off"></span>&nbsp;<?php echo vtranslate('LBL_LOGOUT',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button><?php }?></li></ul></div></div></div></div><?php }} ?>