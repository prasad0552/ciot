<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:03:53
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ProcessFlowConditions.tpl" */ ?>
<?php /*%%SmartyHeaderCode:11565974035f680a091e4821-01652252%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '60860d0e4b1f9fcf439aeb4222dee1e1a1c9596b' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ProcessFlowConditions.tpl',
      1 => 1600651998,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11565974035f680a091e4821-01652252',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'QUALIFIED_MODULE' => 0,
    'RECORD_STRUCTURE' => 0,
    'RECORD_MODEL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680a0920888',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680a0920888')) {function content_5f680a0920888($_smarty_tpl) {?>
<input type="hidden" name="conditions" id="advanced_filter" value=''/><div class="editViewHeader"><div class='row'><div class="col-lg-12 col-md-12 col-lg-pull-0"><h4><?php echo vtranslate('LBL_PROCESSFLOW_CONDITION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4></div></div></div><hr style="margin-top: 0px !important;"><div class="editViewBody"><div class="editViewContents" style="padding-bottom: 0px;"><div class="form-group"><div class="col-sm-12"><div id="advanceFilterContainer" class="conditionsContainer"><div class="col-sm-12"><div class="table table-bordered" style="padding: 5%"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('AdvanceFilter.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('RECORD_STRUCTURE'=>$_smarty_tpl->tpl_vars['RECORD_STRUCTURE']->value), 0);?>
</div></div><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("FieldExpressions.tpl",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('EXECUTION_CONDITION'=>$_smarty_tpl->tpl_vars['RECORD_MODEL']->value->get('execution_condition')), 0);?>
</div></div></div></div></div>
<?php }} ?>