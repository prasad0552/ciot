<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:04:47
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouDynamicFields/PopupContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:17320615395f680a3f2edf57-03813796%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9bcb18d144defa76371d2bd1c785e876a31cecbd' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/ITS4YouDynamicFields/PopupContents.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17320615395f680a3f2edf57-03813796',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'PAGE_NUMBER' => 0,
    'PAGING_MODEL' => 0,
    'LISTVIEW_ENTRIES_COUNT' => 0,
    'LISTVIEW_COUNT' => 0,
    'SEARCH_DETAILS' => 0,
    'ORDER_BY' => 0,
    'SORT_ORDER' => 0,
    'SOURCE_MODULE' => 0,
    'CURRENT_USER_MODEL' => 0,
    'LISTVIEW_HEADERS' => 0,
    'WIDTHTYPE' => 0,
    'LISTVIEW_HEADER' => 0,
    'LISTVIEW_ENTRIES' => 0,
    'LISTVIEW_ENTRY' => 0,
    'PROCESS_FLOW_INFO' => 0,
    'LISTVIEW_HEADERNAME' => 0,
    'RECORD_DATA' => 0,
    'IS_MODULE_DISABLED' => 0,
    'RELATED_MODULE' => 0,
    'FIELDS_INFO' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680a3f317c6',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680a3f317c6')) {function content_5f680a3f317c6($_smarty_tpl) {?>
<div class="row"><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('PopupNavigation.tpl',$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
</div><div class="row"><div class="col-md-12"><input type='hidden' id='pageNumber' value="<?php echo $_smarty_tpl->tpl_vars['PAGE_NUMBER']->value;?>
"><input type='hidden' id='pageLimit' value="<?php echo $_smarty_tpl->tpl_vars['PAGING_MODEL']->value->getPageLimit();?>
"><input type="hidden" id="noOfEntries" value="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRIES_COUNT']->value;?>
"><input type="hidden" id="pageStartRange" value="<?php echo $_smarty_tpl->tpl_vars['PAGING_MODEL']->value->getRecordStartRange();?>
"/><input type="hidden" id="pageEndRange" value="<?php echo $_smarty_tpl->tpl_vars['PAGING_MODEL']->value->getRecordEndRange();?>
"/><input type="hidden" id="previousPageExist" value="<?php echo $_smarty_tpl->tpl_vars['PAGING_MODEL']->value->isPrevPageExists();?>
"/><input type="hidden" id="nextPageExist" value="<?php echo $_smarty_tpl->tpl_vars['PAGING_MODEL']->value->isNextPageExists();?>
"/><input type="hidden" id="totalCount" value="<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_COUNT']->value;?>
"/><input type="hidden" value="<?php echo Vtiger_Util_Helper::toSafeHTML(Zend_JSON::encode($_smarty_tpl->tpl_vars['SEARCH_DETAILS']->value));?>
" id="currentSearchParams"/><div class="contents-topscroll"><div class="topscroll-div">&nbsp;</div></div><div class="popupEntriesDiv relatedContents"><input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['ORDER_BY']->value;?>
" id="orderBy"><input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['SORT_ORDER']->value;?>
" id="sortOrder"><?php if ($_smarty_tpl->tpl_vars['SOURCE_MODULE']->value=="Emails"){?><?php if ($_smarty_tpl->tpl_vars['MODULE']->value!='Documents'){?><input type="hidden" value="Vtiger_EmailsRelatedModule_Popup_Js" id="popUpClassName"/><?php }?><?php }?><?php $_smarty_tpl->tpl_vars['WIDTHTYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['CURRENT_USER_MODEL']->value->get('rowheight'), null, 0);?><div class="popupEntriesTableContainer <?php if ($_smarty_tpl->tpl_vars['MODULE']->value=='EmailTemplates'){?> emailTemplatesPopupTableContainer<?php }?>"><table class="listview-table table-bordered listViewEntriesTable"><thead><tr class="listViewHeaders"><?php  $_smarty_tpl->tpl_vars['LISTVIEW_HEADER'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_HEADERS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->key => $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = true;
?><th class="<?php echo $_smarty_tpl->tpl_vars['WIDTHTYPE']->value;?>
" width="30%"><?php echo vtranslate($_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value->get('label'),$_smarty_tpl->tpl_vars['MODULE']->value);?>
</th><?php } ?></tr></thead><?php  $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_ENTRIES']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['popupListView']['index']=-1;
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->key => $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->_loop = true;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['popupListView']['index']++;
?><?php $_smarty_tpl->tpl_vars["PROCESS_FLOW_INFO"] = new Smarty_variable(Vtiger_Util_Helper::toSafeHTML(Zend_Json::encode($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getProcessFlowData($_REQUEST['parenttype']))), null, 0);?><tr class="listViewEntries" data-id='<?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getId();?>
' data-info="<?php echo $_smarty_tpl->tpl_vars['PROCESS_FLOW_INFO']->value;?>
" id="<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
_popUpListView_row_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['popupListView']['index']+1;?>
"><?php  $_smarty_tpl->tpl_vars['LISTVIEW_HEADER'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['LISTVIEW_HEADERS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->key => $_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value){
$_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->_loop = true;
?><?php $_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_HEADER']->value->get('name'), null, 0);?><?php $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY_VALUE'] = new Smarty_variable($_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->get($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value), null, 0);?><td class="listViewEntryValue value textOverflowEllipsis <?php echo $_smarty_tpl->tpl_vars['WIDTHTYPE']->value;?>
" title="<?php echo $_smarty_tpl->tpl_vars['RECORD_DATA']->value[$_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value];?>
"><?php echo $_smarty_tpl->tpl_vars['LISTVIEW_ENTRY']->value->getDisplayValue($_smarty_tpl->tpl_vars['LISTVIEW_HEADERNAME']->value);?>
</td><?php } ?></tr><?php } ?></table></div><!--added this div for Temporarily --><?php if ($_smarty_tpl->tpl_vars['LISTVIEW_ENTRIES_COUNT']->value=='0'){?><div class="row"><div class="emptyRecordsDiv"><?php if ($_smarty_tpl->tpl_vars['IS_MODULE_DISABLED']->value=='true'){?><?php echo vtranslate($_smarty_tpl->tpl_vars['RELATED_MODULE']->value,$_smarty_tpl->tpl_vars['RELATED_MODULE']->value);?>
<?php echo vtranslate('LBL_MODULE_DISABLED',$_smarty_tpl->tpl_vars['RELATED_MODULE']->value);?>
<?php }else{ ?><?php echo vtranslate('LBL_NO',$_smarty_tpl->tpl_vars['MODULE']->value);?>
 <?php echo vtranslate($_smarty_tpl->tpl_vars['RELATED_MODULE']->value,$_smarty_tpl->tpl_vars['RELATED_MODULE']->value);?>
 <?php echo vtranslate('LBL_FOUND',$_smarty_tpl->tpl_vars['MODULE']->value);?>
.<?php }?></div></div><?php }?><?php if ($_smarty_tpl->tpl_vars['FIELDS_INFO']->value!=null){?><script type="text/javascript">var popup_uimeta = (function () {var fieldInfo = <?php echo $_smarty_tpl->tpl_vars['FIELDS_INFO']->value;?>
;return {field: {get: function (name, property) {if (name && property === undefined) {return fieldInfo[name];}if (name && property) {return fieldInfo[name][property]}},isMandatory: function (name) {if (fieldInfo[name]) {return fieldInfo[name].mandatory;}return false;},getType: function (name) {if (fieldInfo[name]) {return fieldInfo[name].type}return false;}},};})();</script><?php }?></div></div></div>
<?php }} ?>