<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:12:44
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditFieldsAll.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1695637725f680c1caca001-49602214%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '25a5d88a9b09ead993e85ed9b5be4afb97b19289' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditFieldsAll.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1695637725f680c1caca001-49602214',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'RECORD_STRUCTURE' => 0,
    'BLOCK_LABEL' => 0,
    'ALL_BLOCKS' => 0,
    'MODE' => 0,
    'SELECTED_MODULE_NAME' => 0,
    'BLOCK_SEQ' => 0,
    'DYNAMICFIELDS_MODEL' => 0,
    'VISIBLE_KEY' => 0,
    'BLOCK_VISIBLE_TYPE' => 0,
    'VISIBLE_VALUE' => 0,
    'QUALIFIED_MODULE' => 0,
    'IS_INVENTORY_MODULE' => 0,
    'LABEL_VISIBLE' => 0,
    'LABEL_MANDATORY' => 0,
    'BLOCK_FIELDS' => 0,
    'COUNTER' => 0,
    'FIELD_NAME' => 0,
    'DYNAMICFIELDS_RECORD_MODEL' => 0,
    'VISIBLE_TYPE' => 0,
    'FIELD_MODEL' => 0,
    'IS_MANDATORY' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f680c1cb2c47',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f680c1cb2c47')) {function content_5f680c1cb2c47($_smarty_tpl) {?>
<?php  $_smarty_tpl->tpl_vars['BLOCK_FIELDS'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = false;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['RECORD_STRUCTURE']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachblocks"]['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key => $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value){
$_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = true;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value = $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachblocks"]['iteration']++;
?>
    <?php $_smarty_tpl->tpl_vars['BLOCK_SEQ'] = new Smarty_variable($_smarty_tpl->getVariable('smarty')->value['foreach']['foreachblocks']['iteration'], null, 0);?>
    <?php $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['ALL_BLOCKS']->value[$_smarty_tpl->tpl_vars['BLOCK_LABEL']->value], null, 0);?>
    <table class="table table-bordered blockContainer showInlineTable equalSplit">
        <thead>
        <tr>
            <th class="listViewHeaders bgColor" colspan="<?php if ($_smarty_tpl->tpl_vars['MODE']->value=="DefaultForm"){?>4<?php }else{ ?>6<?php }?>">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <?php echo vtranslate($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
&nbsp;&nbsp;
                        <input class="selectVisibleBlock" type="hidden" name="block_visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value;?>
">
                        <select class="select2 hideBlockSelect" data-blockseq="<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" name="block_select_visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" id="visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
">
                            <?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?>
                                <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value!="3"){?>
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value){?>selected<?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
                                <?php }?>
                            <?php } ?>
                        </select>
                    </div>
                    <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                        <div class="col-md-6 col-sm-6 <?php if ($_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value=="2"){?>hide<?php }?>" id="table_set_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
">
                            <?php echo vtranslate("LBL_SET",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 :&nbsp;
                            <select class="select2 set-all-select col-md-6 col-sm-6">
                                <option value="0"><?php echo vtranslate("LBL_SELECT_OPTION",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
                                <?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?>
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
"><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 </option>
                                <?php } ?>
                            </select>
                            &nbsp;
                            <input type="button" class="btn btn-success btn-set-all" value="<?php echo vtranslate("LBL_SET",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
">
                        </div>
                    <?php }?>
                </div>
            </th>
        </tr>
        </thead>
        <tbody id="table_tbody_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value=="2"){?>class="hide"<?php }?>>
        <?php if ($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value!='LBL_ITEM_DETAILS'||$_smarty_tpl->tpl_vars['IS_INVENTORY_MODULE']->value!="yes"){?>
            <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                <tr>
                    <?php ob_start();?><?php echo vtranslate('LBL_VISIBLE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_VISIBLE'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp1."</label>", null, 0);?>
                    <?php ob_start();?><?php echo vtranslate('LBL_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp2=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_MANDATORY'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp2."</label>", null, 0);?>
                    <td class="fieldLabel medium" style="width: 20%"></td>
                    <td class="fieldLabel medium" style="width: 20%"><?php echo $_smarty_tpl->tpl_vars['LABEL_VISIBLE']->value;?>
</td>
                    <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                        <td class="fieldLabel medium" style="width: 10%"><?php echo $_smarty_tpl->tpl_vars['LABEL_MANDATORY']->value;?>
</td><?php }?>

                    <td class="fieldLabel medium" style="width: 20%"></td>
                    <td class="fieldLabel medium" style="width: 20%"><?php if (count($_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value)>1){?><?php echo $_smarty_tpl->tpl_vars['LABEL_VISIBLE']->value;?>
<?php }else{ ?>&nbsp;<?php }?></td>
                    <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                        <td class="fieldLabel medium" style="width: 10%"><?php if (count($_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value)>1){?><?php echo $_smarty_tpl->tpl_vars['LABEL_MANDATORY']->value;?>
<?php }else{ ?>&nbsp;<?php }?></td><?php }?>
                </tr>
            <?php }?>
            <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable(0, null, 0);?>
            <?php  $_smarty_tpl->tpl_vars['FIELD_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['FIELD_NAME'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['FIELD_MODEL']->key => $_smarty_tpl->tpl_vars['FIELD_MODEL']->value){
$_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['FIELD_NAME']->value = $_smarty_tpl->tpl_vars['FIELD_MODEL']->key;
?>

                <?php if ($_smarty_tpl->tpl_vars['COUNTER']->value==0){?>
                    <tr>
                <?php }?>
                <?php $_smarty_tpl->tpl_vars['VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['DYNAMICFIELDS_RECORD_MODEL']->value->getVisibility($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?>
                <td class="fieldLabel medium" <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>style="width: 20%;"<?php }?>>
                    <label class="muted pull-right marginRight10px" style="<?php if ($_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value=="1"){?>font-weight:bold;<?php }?><?php if ($_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value=="2"){?>text-decoration:line-through;<?php }?><?php if ($_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value=="3"){?>text-decoration:underline;<?php }?>"><?php echo vtranslate($_smarty_tpl->tpl_vars['FIELD_MODEL']->value->get('label'),$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</label>
                </td>
                <td <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>style="width: 20%"<?php }?> data-fieldname="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
">
                    <select class="select2 col-md-6 col-sm-6" name="visibility_<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
" id="visibility_<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
">
                        <option value="0"><?php echo vtranslate("LBL_SELECT_OPTION",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>

                        <?php  $_smarty_tpl->tpl_vars['VISIBLE_VALUE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = false;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['DYNAMICFIELDS_MODEL']->value->getVisibilityCases(); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key => $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value){
$_smarty_tpl->tpl_vars['VISIBLE_VALUE']->_loop = true;
 $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value = $_smarty_tpl->tpl_vars['VISIBLE_VALUE']->key;
?>
                            <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value!="1"||$_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                                <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value){?>selected<?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 </option>
                            <?php }?>
                        <?php } ?>
                    </select>
                </td>
                <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                    <td style="width: 10%; text-align: center" data-fieldname="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
">
                        <?php $_smarty_tpl->tpl_vars['IS_MANDATORY'] = new Smarty_variable($_smarty_tpl->tpl_vars['DYNAMICFIELDS_RECORD_MODEL']->value->isMandatory($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?>
                        <input type="checkbox" name="mandatory_<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
" id="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
_mandatory" <?php if ($_smarty_tpl->tpl_vars['IS_MANDATORY']->value=="yes"){?>checked<?php }?> value="1">
                    </td>
                <?php }?>
                <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable($_smarty_tpl->tpl_vars['COUNTER']->value+1, null, 0);?>
                <?php if ($_smarty_tpl->tpl_vars['COUNTER']->value==2){?>
                    </tr>
                    <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable(0, null, 0);?>
                <?php }?>

            <?php } ?>
            <?php if ($_smarty_tpl->tpl_vars['COUNTER']->value=="1"){?>
                <td class="fieldLabel medium">&nbsp;</td>
                <td>&nbsp;</td>
                <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="DefaultForm"){?>
                    <td>&nbsp;</td>
                <?php }?>
                </tr>
            <?php }?>
        <?php }?>
        </tbody>
    </table>
    <br>
<?php } ?>
<input type='hidden' value='<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
' id='new_blocks' name='new_blocks'><?php }} ?>