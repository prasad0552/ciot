<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:08:52
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/OverlayDetailView.tpl" */ ?>
<?php /*%%SmartyHeaderCode:9527127285f680b341236f0-97502436%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '22bfc9705477d5faf5bc128e2359364e7c59b984' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/OverlayDetailView.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9527127285f680b341236f0-97502436',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'QUALIFIED_MODULE' => 0,
    'RECORD_MODEL' => 0,
    'MODULE_NAME' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680b3414508',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680b3414508')) {function content_5f680b3414508($_smarty_tpl) {?>
<div class='fc-overlay-modal overlayDetail'>
    <div class="modal-content" style="overflow: hidden">
        <div class="overlayDetailHeader col-lg-12 col-md-12 col-sm-12">
            <div class="col-lg-9 col-md-9 col-sm-9">
                <h4><?php echo vtranslate('ITS4YouDynamicFields',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2">
                <div class="clearfix">
                    <div class="btn-group">
                        <button class="btn btn-default fullDetailsButton" onclick="window.location.href = '<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getDetailViewUrl();?>
'">
                            <?php echo vtranslate('LBL_DETAILS',$_smarty_tpl->tpl_vars['MODULE_NAME']->value);?>
</button>
                        <button class="btn btn-default editRelatedRecord" data-url="<?php echo $_smarty_tpl->tpl_vars['RECORD_MODEL']->value->getEditViewUrl();?>
"><?php echo vtranslate('LBL_EDIT',$_smarty_tpl->tpl_vars['MODULE_NAME']->value);?>
</button>
                    </div>
                    <div class="pull-right">
                        <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                            <span aria-hidden="true" class='fa fa-close'></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class='modal-body'>
            <div class="detailViewContainer">
                <?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('DetailView.tpl',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('IS_OVERLAY'=>"yes"), 0);?>

            </div>
        </div>
    </div>
</div><?php }} ?>