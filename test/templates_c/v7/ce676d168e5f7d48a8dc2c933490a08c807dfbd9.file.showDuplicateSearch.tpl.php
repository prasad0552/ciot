<?php /* Smarty version Smarty-3.1.7, created on 2020-11-07 16:38:59
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/showDuplicateSearch.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20866259775fa6cda328b3e6-17608429%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ce676d168e5f7d48a8dc2c933490a08c807dfbd9' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/showDuplicateSearch.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20866259775fa6cda328b3e6-17608429',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'HEADER_TITLE' => 0,
    'FIELDS' => 0,
    'FIELD' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5fa6cda32b6ed',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5fa6cda32b6ed')) {function content_5fa6cda32b6ed($_smarty_tpl) {?>



<div class="modal-dialog">
    <div class="modal-content">
        <form class="form-horizontal" id="findDuplicate">
            <input type='hidden' name='module' value='<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
' />
            <input type='hidden' name='view' value='FindDuplicates' />
            
            <?php ob_start();?><?php echo vtranslate('LBL_MATCH_CRITERIA',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['HEADER_TITLE'] = new Smarty_variable($_tmp1, null, 0);?>
            <?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ModalHeader.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('TITLE'=>$_smarty_tpl->tpl_vars['HEADER_TITLE']->value), 0);?>

            <div class="modal-body">
                <div class="form-group">
                    <label class="col-lg-3 control-label"><?php echo vtranslate('LBL_MATCH_FIELDS',$_smarty_tpl->tpl_vars['MODULE']->value);?>
</label>
                    <div class="col-lg-8">
                        <select id="fieldList" class="select2 form-control" multiple="true" name="fields[]"
							data-rule-required="true">
							<?php  $_smarty_tpl->tpl_vars['FIELD'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FIELD']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['FIELDS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['FIELD']->key => $_smarty_tpl->tpl_vars['FIELD']->value){
$_smarty_tpl->tpl_vars['FIELD']->_loop = true;
?>
								<?php if ($_smarty_tpl->tpl_vars['FIELD']->value->isViewableInDetailView()){?>
									<option value="<?php echo $_smarty_tpl->tpl_vars['FIELD']->value->getName();?>
"><?php echo vtranslate($_smarty_tpl->tpl_vars['FIELD']->value->get('label'),$_smarty_tpl->tpl_vars['MODULE']->value);?>
</option>
								<?php }?>
							<?php } ?>
						</select> 
                    </div>
                </div>    
                <div class="form-group">
                    <div class="col-lg-3">&nbsp;</div>
                    <div class="col-lg-8">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" checked="checked" name="ignoreEmpty"/> &nbsp;<?php echo vtranslate('LBL_IGNORE_EMPTY_VALUES',$_smarty_tpl->tpl_vars['MODULE']->value);?>

                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <?php ob_start();?><?php echo vtranslate('LBL_FIND_DUPLICATES',$_smarty_tpl->tpl_vars['MODULE']->value);?>
<?php $_tmp2=ob_get_clean();?><?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('ModalFooter.tpl',$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array('BUTTON_NAME'=>$_tmp2), 0);?>

        </form>
    </div>
</div>
<?php }} ?>