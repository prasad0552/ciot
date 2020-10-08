<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:51:30
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditSteps.tpl" */ ?>
<?php /*%%SmartyHeaderCode:8398838615f680722181d77-88664227%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '750d45799eabff5fe8b80c8fed9ed22cf9db6888' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditSteps.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '8398838615f680722181d77-88664227',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'ACTUAL_STEP' => 0,
    'QUALIFIED_MODULE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f68072218788',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f68072218788')) {function content_5f68072218788($_smarty_tpl) {?>
<div class="span6"><div id="breadcrumb"><ul class="crumbs marginLeftZero"><li class="first step <?php if ($_smarty_tpl->tpl_vars['ACTUAL_STEP']->value=="1"){?>active<?php }?>" style="z-index:9" id="step1"><a><span class="stepNum">1 </span><span class="stepText"><?php echo vtranslate('LBL_MODULE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></a></li><li class="step last <?php if ($_smarty_tpl->tpl_vars['ACTUAL_STEP']->value=="2"){?>active<?php }?>" style="z-index:7" id="step3"><a><span class="stepNum">2</span><span class="stepText"><?php echo vtranslate('LBL_FIELDS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</span></a></li></ul></div></div>
<?php }} ?>