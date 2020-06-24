<?php /* Smarty version Smarty-3.1.7, created on 2020-06-09 20:05:04
         compiled from "C:\Program Files\Ampps\www\ciot-app\includes\runtime/../../layouts/v7\modules\Vtiger\dashboards\DashBoardContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:15985515455eb96020679600-74656685%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'dc5df92ac678171200ee85d5898d9e63e54ebd57' => 
    array (
      0 => 'C:\\Program Files\\Ampps\\www\\ciot-app\\includes\\runtime/../../layouts/v7\\modules\\Vtiger\\dashboards\\DashBoardContents.tpl',
      1 => 1591733098,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15985515455eb96020679600-74656685',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5eb960206aa55',
  'variables' => 
  array (
    'DASHBOARD_TABS' => 0,
    'TAB_DATA' => 0,
    'SELECTED_TAB' => 0,
    'MODULE' => 0,
    'TABID' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5eb960206aa55')) {function content_5eb960206aa55($_smarty_tpl) {?>

    
<div class="dashBoardContainer clearfix"><div class="tabContainer"><ul class="nav nav-tabs tabs sortable container-fluid"></ul><div class="tab-content"><?php  $_smarty_tpl->tpl_vars['TAB_DATA'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['TAB_DATA']->_loop = false;
 $_smarty_tpl->tpl_vars['index'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DASHBOARD_TABS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['TAB_DATA']->key => $_smarty_tpl->tpl_vars['TAB_DATA']->value){
$_smarty_tpl->tpl_vars['TAB_DATA']->_loop = true;
 $_smarty_tpl->tpl_vars['index']->value = $_smarty_tpl->tpl_vars['TAB_DATA']->key;
?><div id="tab_<?php echo $_smarty_tpl->tpl_vars['TAB_DATA']->value["id"];?>
" data-tabid="<?php echo $_smarty_tpl->tpl_vars['TAB_DATA']->value["id"];?>
" data-tabname="<?php echo $_smarty_tpl->tpl_vars['TAB_DATA']->value["tabname"];?>
" class="tab-pane fade <?php if ($_smarty_tpl->tpl_vars['TAB_DATA']->value["id"]==$_smarty_tpl->tpl_vars['SELECTED_TAB']->value){?>in active<?php }?>"><?php if ($_smarty_tpl->tpl_vars['TAB_DATA']->value["id"]==$_smarty_tpl->tpl_vars['SELECTED_TAB']->value){?><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("dashboards/DashBoardTabContents.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('TABID'=>$_smarty_tpl->tpl_vars['TABID']->value), 0);?>
<?php }?></div><?php } ?></div></div></div>
<?php }} ?>