<?php /* Smarty version Smarty-3.1.7, created on 2020-11-07 16:35:02
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/UnifiedSearchResultsContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:18524530345fa6ccb615be77-30948713%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ad597e88f9746a2468e38c7ee6a83786d6cac87b' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/UnifiedSearchResultsContents.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '18524530345fa6ccb615be77-30948713',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'LISTVIEW_ENTRIES_COUNT' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5fa6ccb61641d',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5fa6ccb61641d')) {function content_5fa6ccb61641d($_smarty_tpl) {?>
<div class="col-lg-12 listViewPageDiv moduleSearchResults">
    <div class="row">
        <div class="col-lg-8">
            <h4 class="searchModuleHeader"><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['MODULE']->value);?>
</h4>
        </div>
        <div class="col-lg-4 pull-right">
                <?php $_smarty_tpl->tpl_vars['RECORD_COUNT'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRIES_COUNT']->value, null, 0);?>
                <?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("Pagination.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('SHOWPAGEJUMP'=>true), 0);?>

        </div>
    </div>
    <div class="row">
        <?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ListViewContents.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('SEARCH_MODE_RESULTS'=>true), 0);?>

    </div>
</div><?php }} ?>