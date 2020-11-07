<?php /* Smarty version Smarty-3.1.7, created on 2020-10-09 15:37:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/InstallationLog.tpl" */ ?>
<?php /*%%SmartyHeaderCode:12143403925f680260733ed6-61001425%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'fe004ca1a798b5b8c3facbd29bef23ce771f1001' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouInstaller/InstallationLog.tpl',
      1 => 1600657567,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12143403925f680260733ed6-61001425',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680260762dd',
  'variables' => 
  array (
    'ERROR' => 0,
    'MODULE_ACTION' => 0,
    'QUALIFIED_MODULE' => 0,
    'ERROR_MESSAGE' => 0,
    'TARGET_MODULE_INSTANCE' => 0,
    'MODULE_FILE_NAME' => 0,
    'MODULE_PACKAGE' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680260762dd')) {function content_5f680260762dd($_smarty_tpl) {?>
<div class="modal-dialog modal-lg installationLog"><div class='modal-content'><div class="modal-header" style="background: #596875;color:white;"><div class="pull-right " ><button type="button" class="close" aria-label="Close" data-dismiss="modal"><span aria-hidden="true" class='fa fa-close'></span></button></div><div class="row"><div class="col-lg-11 col-md-11"><?php if ($_smarty_tpl->tpl_vars['ERROR']->value){?><input type="hidden" name="installationStatus" value="error" /><h3 class="modal-title" style="color: red"><?php if ($_smarty_tpl->tpl_vars['MODULE_ACTION']->value=="Upgrade"){?><?php echo vtranslate('LBL_UPGRADE_FAILED',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_INSTALLATION_FAILED',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></h3><?php }else{ ?><input type="hidden" name="installationStatus" value="success" /><h3 class="modal-title"><?php if ($_smarty_tpl->tpl_vars['MODULE_ACTION']->value=="Upgrade"){?><?php echo vtranslate('LBL_SUCCESSFULL_UPGRADE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_SUCCESSFULL_INSTALLATION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></h3><?php }?></div></div></div><div class="modal-body" id="installationLog"><h4><?php if ($_smarty_tpl->tpl_vars['MODULE_ACTION']->value=="Upgrade"){?><?php echo vtranslate('LBL_UPGRADE_LOG',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_INSTALLATION_LOG',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php }?></h4><?php if ($_smarty_tpl->tpl_vars['ERROR']->value){?><p style="color:red;"><?php echo vtranslate($_smarty_tpl->tpl_vars['ERROR_MESSAGE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</p><?php }else{ ?><div id="extensionInstallationInfo" class="backgroundImageNone" style="background-color: white;padding: 2%;"><?php if ($_smarty_tpl->tpl_vars['MODULE_ACTION']->value=="Upgrade"){?><?php echo $_smarty_tpl->tpl_vars['MODULE_PACKAGE']->value->update($_smarty_tpl->tpl_vars['TARGET_MODULE_INSTANCE']->value,$_smarty_tpl->tpl_vars['MODULE_FILE_NAME']->value);?>
<?php }else{ ?><?php echo $_smarty_tpl->tpl_vars['MODULE_PACKAGE']->value->import($_smarty_tpl->tpl_vars['MODULE_FILE_NAME']->value,'false');?>
<?php }?></div><?php }?></div><div class="modal-footer"><span class="pull-right"><button class="btn btn-success" id="importCompleted" onclick="location.reload()"><?php echo vtranslate('LBL_OK',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</button></span></div></div></div><?php }} ?>