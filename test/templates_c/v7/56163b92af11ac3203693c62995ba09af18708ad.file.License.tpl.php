<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:51:11
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/License.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19362579305f68151f2efb34-26461025%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '56163b92af11ac3203693c62995ba09af18708ad' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/License.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19362579305f68151f2efb34-26461025',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'QUALIFIED_MODULE' => 0,
    'MODULE_MODEL' => 0,
    'URL' => 0,
    'ERRORS' => 0,
    'ERROR' => 0,
    'INFO' => 0,
    'I' => 0,
    'IS_ALLOWED' => 0,
    'INSTALLER_MODEL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68151f321f0',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68151f321f0')) {function content_5f68151f321f0($_smarty_tpl) {?>
<div id="licenseContainer" style="padding: 15px"><div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><h3><?php echo vtranslate('LBL_MODULE_NAME',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 <?php echo vtranslate('LBL_LICENSE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h3><hr></div></div><div class="row"><div class="col-sm-12 col-md-12 col-lg-12"><br><table class="table table-bordered table-condensed themeTableColor"><thead><tr class="blockHeader"><th colspan="2" class="mediumWidthType"><span class="alignMiddle"><?php echo vtranslate('LBL_MODULE_NAME',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 <?php echo vtranslate('LBL_LICENSE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></th></tr></thead><tbody><tr><td style="width: 25%"><label class="muted pull-right marginRight10px"><?php echo vtranslate('LBL_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td style="border-left: none;"><div class="pull-left" id="vatid_label"><a href="<?php echo $_smarty_tpl->tpl_vars['MODULE_MODEL']->value->getDefaultUrl();?>
"><?php echo vtranslate('LBL_MODULE_NAME',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</a></div></td></tr><tr><td style="width: 25%"><label class="muted pull-right marginRight10px"><?php echo vtranslate('LBL_URL',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td style="border-left: none;"><div class="pull-left" id="vatid_label"><?php echo $_smarty_tpl->tpl_vars['URL']->value;?>
</div></td></tr><tr><td style="width: 25%"><label class="muted pull-right marginRight10px"><?php echo vtranslate('LBL_DESCRIPTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</label></td><td style="border-left: none;"><div class="clearfix"><?php  $_smarty_tpl->tpl_vars['ERROR'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['ERROR']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['ERRORS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['ERROR']->key => $_smarty_tpl->tpl_vars['ERROR']->value){
$_smarty_tpl->tpl_vars['ERROR']->_loop = true;
?><div><div class="alert alert-danger displayInlineBlock"><?php echo vtranslate($_smarty_tpl->tpl_vars['ERROR']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div></div><?php } ?><?php  $_smarty_tpl->tpl_vars['I'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['I']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['INFO']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['I']->key => $_smarty_tpl->tpl_vars['I']->value){
$_smarty_tpl->tpl_vars['I']->_loop = true;
?><div><div class="alert alert-warning displayInlineBlock"><?php echo vtranslate($_smarty_tpl->tpl_vars['I']->value,'Settings:ITS4YouInstaller');?>
</div></div><?php } ?><?php if (empty($_smarty_tpl->tpl_vars['INFO']->value)&&empty($_smarty_tpl->tpl_vars['ERRORS']->value)){?><?php if ($_smarty_tpl->tpl_vars['IS_ALLOWED']->value){?><div class="alert alert-info displayInlineBlock"><?php echo vtranslate('LBL_LICENSE_ACTIVE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php }else{ ?><div class="alert alert-danger displayInlineBlock"><?php echo vtranslate('LBL_LICENSE_INACTIVE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</div><?php }?><?php }?></div></td></tr></tbody></table><div style="text-align: center"><?php if ($_smarty_tpl->tpl_vars['INSTALLER_MODEL']->value){?><a href="<?php echo $_smarty_tpl->tpl_vars['INSTALLER_MODEL']->value->getDefaultUrl();?>
" target="_blank" class="btn btn-primary"><?php echo vtranslate('LBL_LICENSE_MANAGE','Settings:ITS4YouInstaller');?>
</a><?php }else{ ?><a target="_blank" href="https://www.its4you.sk/en/vtiger-shop" class="btn btn-danger" type="button"><?php echo vtranslate('LBL_DOWNLOAD_INSTALLER',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</a><?php }?></div></div></div></div></div><?php }} ?>