<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 01:55:00
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditFields.tpl" */ ?>
<?php /*%%SmartyHeaderCode:3105129995f6807f4a7ecd7-32563825%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '46761404605d3fae72027f871465a9eb52feb812' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouDynamicFields/EditFields.tpl',
      1 => 1600653062,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3105129995f6807f4a7ecd7-32563825',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODE' => 0,
    'IS_INVENTORY_MODULE' => 0,
    'ALL_FIELDS' => 0,
    'ALL_BLOCKS' => 0,
    'ALL_FIELDS_GROUPS' => 0,
    'QUALIFIED_MODULE' => 0,
    'RECORD_STRUCTURE' => 0,
    'BLOCK_LABEL' => 0,
    'SELECTED_MODULE_NAME' => 0,
    'BLOCK_FIELDS' => 0,
    'FIELD_NAME' => 0,
    'FIELD_MODEL' => 0,
    'DYNAMICFIELDS_MODEL' => 0,
    'VISIBLE_KEY' => 0,
    'VISIBLE_VALUE' => 0,
    'FIELDS_GROUPS_STRUCTURE' => 0,
    'GROUP_ID' => 0,
    'GROUP_LABEL' => 0,
    'DYNAMICFIELDS_RECORD_MODEL' => 0,
    'VISIBLE_TYPE' => 0,
    'IS_MANDATORY' => 0,
    'BLOCK_SEQ' => 0,
    'BLOCK_ID' => 0,
    'BLOCK_VISIBLE_TYPE' => 0,
    'FG_DATA' => 0,
    'FG_ID' => 0,
    'FG_VISIBLE_TYPE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f6807f4aea60',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f6807f4aea60')) {function content_5f6807f4aea60($_smarty_tpl) {?>
<input type='hidden' value='<?php echo $_smarty_tpl->tpl_vars['MODE']->value;?>
' name='actualmode'>
<div class='hide'>
    <input type='hidden' value='0' name='isgroup'>
    <input type='hidden' value='<?php if ($_smarty_tpl->tpl_vars['IS_INVENTORY_MODULE']->value=="yes"){?>1<?php }else{ ?>0<?php }?>' id='is_inventory_module' name='is_inventory_module'>
    <input type='hidden' value='<?php echo count($_smarty_tpl->tpl_vars['ALL_FIELDS']->value);?>
' id='new_fields' name='new_fields'>
    <input type='hidden' value='<?php echo count($_smarty_tpl->tpl_vars['ALL_BLOCKS']->value);?>
' id='new_blocks' name='new_blocks'>
    <input type='hidden' value='<?php echo count($_smarty_tpl->tpl_vars['ALL_FIELDS_GROUPS']->value);?>
' id='new_fields_groups' name='new_fields_groups'>
    <select id='field_options'>
        <option value="0"><?php echo vtranslate("LBL_SELECT_OPTION",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
        <?php  $_smarty_tpl->tpl_vars['BLOCK_FIELDS'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = false;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['RECORD_STRUCTURE']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key => $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value){
$_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = true;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value = $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key;
?>
            <?php if ($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value!='LBL_ITEM_DETAILS'||$_smarty_tpl->tpl_vars['IS_INVENTORY_MODULE']->value!="yes"){?>
                <optgroup label="<?php echo vtranslate($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
">
                    <?php  $_smarty_tpl->tpl_vars['FIELD_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['FIELD_NAME'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['FIELD_MODEL']->key => $_smarty_tpl->tpl_vars['FIELD_MODEL']->value){
$_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['FIELD_NAME']->value = $_smarty_tpl->tpl_vars['FIELD_MODEL']->key;
?>
                        <option value="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
"><?php echo vtranslate($_smarty_tpl->tpl_vars['FIELD_MODEL']->value->get('label'),$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</option>
                    <?php } ?>
                </optgroup>
            <?php }?>
        <?php } ?>
    </select>

    <select id="field_action_options">
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
        <option value='mandatory'><?php echo vtranslate('LBL_SHOW_AS_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
    </select>

    <select class="select2 col-lg-12" id='block_options'>
        <option value="0"><?php echo vtranslate("LBL_SELECT_OPTION",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
        <?php  $_smarty_tpl->tpl_vars['BLOCK_FIELDS'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = false;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['RECORD_STRUCTURE']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key => $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->value){
$_smarty_tpl->tpl_vars['BLOCK_FIELDS']->_loop = true;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value = $_smarty_tpl->tpl_vars['BLOCK_FIELDS']->key;
?>
            <option value="<?php echo $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value;?>
"><?php echo vtranslate($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</option>
        <?php } ?>
    </select>

    <select id="block_action_options">
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

    <?php if (count($_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value)>0){?>
        <select class="select2 col-lg-12" id='fields_groups_options'>
            <option value="0"><?php echo vtranslate("LBL_SELECT_OPTION",$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
            <?php  $_smarty_tpl->tpl_vars['GROUP_LABEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['GROUP_LABEL']->_loop = false;
 $_smarty_tpl->tpl_vars['GROUP_ID'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['GROUP_LABEL']->key => $_smarty_tpl->tpl_vars['GROUP_LABEL']->value){
$_smarty_tpl->tpl_vars['GROUP_LABEL']->_loop = true;
 $_smarty_tpl->tpl_vars['GROUP_ID']->value = $_smarty_tpl->tpl_vars['GROUP_LABEL']->key;
?>
                <option value="<?php echo $_smarty_tpl->tpl_vars['GROUP_ID']->value;?>
"><?php echo vtranslate($_smarty_tpl->tpl_vars['GROUP_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</option>
            <?php } ?>
        </select>
    <?php }?>
</div>

<div class=" tab-content layoutContent themeTableColor overflowVisible">
    <div>
        <table id='fieldsTable' class="table table-bordered">
            <thead>
            <tr>
                <th class="listViewHeaders bgColor" colspan="3">
                    <?php echo vtranslate('LBL_FIELDS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <?php ob_start();?><?php echo vtranslate('LBL_VISIBLE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp1=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_VISIBLE'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp1."</label>", null, 0);?>
                <?php ob_start();?><?php echo vtranslate('LBL_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp2=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_MANDATORY'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp2."</label>", null, 0);?>
                <td class="fieldLabel medium" style="width: 60%"></td>
                <td class="fieldLabel medium" style="width: 40%" <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?>colspan='2'<?php }?>><?php echo vtranslate('LBL_ACTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</td>
            </tr>
            <?php  $_smarty_tpl->tpl_vars['FIELD_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['FIELD_NAME'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_FIELDS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachfields"]['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['FIELD_MODEL']->key => $_smarty_tpl->tpl_vars['FIELD_MODEL']->value){
$_smarty_tpl->tpl_vars['FIELD_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['FIELD_NAME']->value = $_smarty_tpl->tpl_vars['FIELD_MODEL']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachfields"]['iteration']++;
?>

                <?php $_smarty_tpl->tpl_vars['IS_MANDATORY'] = new Smarty_variable($_smarty_tpl->tpl_vars['DYNAMICFIELDS_RECORD_MODEL']->value->isMandatory($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?>
                <tr id='field_tr_seq_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfields']['iteration'];?>
'>
                    <?php $_smarty_tpl->tpl_vars['VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['DYNAMICFIELDS_RECORD_MODEL']->value->getVisibility($_smarty_tpl->tpl_vars['FIELD_NAME']->value), null, 0);?>
                    <td class="fieldLabel medium" style="width: 20%;">
                        <label class="muted pull-right marginRight10px"><?php echo vtranslate($_smarty_tpl->tpl_vars['FIELD_MODEL']->value->get('label'),$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</label>
                        <input type="hidden" name="field_visibility_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfields']['iteration'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
">
                    </td>
                    <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?>
                        <td style="width: 20%" data-fieldname="<?php echo $_smarty_tpl->tpl_vars['FIELD_NAME']->value;?>
">
                            <select class="select2 col-lg-6" name="field_select_visibility_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfields']['iteration'];?>
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
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['VISIBLE_TYPE']->value&&$_smarty_tpl->tpl_vars['IS_MANDATORY']->value!="yes"){?>selected<?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
                                <?php } ?>
                                <option value='mandatory' <?php if ($_smarty_tpl->tpl_vars['IS_MANDATORY']->value=="yes"){?>selected<?php }?>> <?php echo vtranslate('LBL_SHOW_AS_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
                            </select>
                        </td>
                    <?php }?>
                    <td style='width:2%;vertical-align: middle;'>
                        <a href='javascript:;'><i class="fa fa-trash trashField" data-type="field" data-seq='<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfields']['iteration'];?>
'></i></a>
                    </td>
                </tr>
            <?php } ?>
            </tbody>
        </table>

        <div class="row-fluid marginBottom10px">
            <div class="span6 btn-toolbar">
                <button class="btn addButton addField"><i class="fa fa-plus"></i>&nbsp;<strong><?php echo vtranslate('LBL_ADD_FIELD',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></button>
            </div>
        </div>

        <table id='blocksTable' class="table table-bordered blockContainer showInlineTable equalSplit">
            <thead>
            <tr>
                <th class="listViewHeaders bgColor" colspan="3">
                    <?php echo vtranslate('LBL_BLOCKS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <?php ob_start();?><?php echo vtranslate('LBL_VISIBLE',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp3=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_VISIBLE'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp3."</label>", null, 0);?>
                <?php ob_start();?><?php echo vtranslate('LBL_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
<?php $_tmp4=ob_get_clean();?><?php $_smarty_tpl->tpl_vars['LABEL_MANDATORY'] = new Smarty_variable("<label class=\"muted textAlignCenter marginRight10px\">".$_tmp4."</label>", null, 0);?>
                <td class="fieldLabel medium" style="width: 60%"></td>
                <td class="fieldLabel medium" style="width: 40%" <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?>colspan='2'<?php }?>><?php echo vtranslate('LBL_ACTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</td>
            </tr>
            <?php  $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->_loop = false;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_BLOCKS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['foreachblocks']['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->key => $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value){
$_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->_loop = true;
 $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value = $_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['foreachblocks']['iteration']++;
?>
                <tr id="block_tr_seq_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachblocks']['iteration'];?>
">
                    <?php $_smarty_tpl->tpl_vars['BLOCK_SEQ'] = new Smarty_variable($_smarty_tpl->getVariable('smarty')->value['foreach']['foreachblocks']['iteration'], null, 0);?>
                    <td class="fieldLabel medium" style="width: 20%;">
                        <label class="muted pull-right marginRight10px"><?php echo vtranslate($_smarty_tpl->tpl_vars['BLOCK_LABEL']->value,$_smarty_tpl->tpl_vars['SELECTED_MODULE_NAME']->value);?>
</label>
                        <input type="hidden" name="block_visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['BLOCK_LABEL']->value;?>
">
                    </td>
                    <?php if ($_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?>
                        <td style="width: 20%" data-fieldname="<?php echo $_smarty_tpl->tpl_vars['BLOCK_ID']->value;?>
">
                            <select class="select2 col-lg-6" name="block_select_visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
" id="visibility_<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
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
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['BLOCK_VISIBLE_TYPE']->value){?>selected<?php }?> <?php if ($_smarty_tpl->tpl_vars['IS_INVENTORY_MODULE']->value=="yes"&&$_smarty_tpl->tpl_vars['BLOCK_LABEL']->value=="LBL_ITEM_DETAILS"&&$_smarty_tpl->tpl_vars['VISIBLE_KEY']->value=="3"){?>disabled="disabled"<?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 </option>
                                <?php } ?>
                            </select>
                        </td>
                    <?php }?>
                    <td style='width:2%;vertical-align: middle;'>
                        <a href="javascript:"><i class="fa fa-trash trashBlock" data-type="block" data-seq='<?php echo $_smarty_tpl->tpl_vars['BLOCK_SEQ']->value;?>
'></i></a>
                    </td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
        <div class="row-fluid">
            <div class="span8 btn-toolbar">
                <button class="btn addButton addBlock"><i class="fa fa-plus"></i>&nbsp;<strong><?php echo vtranslate('LBL_ADD_BLOCK',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></button>
            </div>
        </div>
        <br>
        <?php if (count($_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value)>0&&$_smarty_tpl->tpl_vars['MODE']->value!="FieldsGroup"){?>
            <table id='fieldsGroupsTable' class="table table-bordered blockContainer showInlineTable equalSplit">
                <thead>
                <tr>
                    <th class="listViewHeaders bgColor" colspan="3">
                        <?php echo vtranslate('LBL_FIELDS_GROUPS',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>

                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="fieldLabel medium" style="width: 60%"></td>
                    <td class="fieldLabel medium" style="width: 40%" colspan='2'><?php echo vtranslate('LBL_ACTION',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</td>
                </tr>
                <?php  $_smarty_tpl->tpl_vars['FG_DATA'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['FG_DATA']->_loop = false;
 $_smarty_tpl->tpl_vars['FG_ID'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_FIELDS_GROUPS']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachfieldsgroups"]['iteration']=0;
foreach ($_from as $_smarty_tpl->tpl_vars['FG_DATA']->key => $_smarty_tpl->tpl_vars['FG_DATA']->value){
$_smarty_tpl->tpl_vars['FG_DATA']->_loop = true;
 $_smarty_tpl->tpl_vars['FG_ID']->value = $_smarty_tpl->tpl_vars['FG_DATA']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']["foreachfieldsgroups"]['iteration']++;
?>
                    <?php $_smarty_tpl->tpl_vars['FG_VISIBLE_TYPE'] = new Smarty_variable($_smarty_tpl->tpl_vars['FG_DATA']->value['visible'], null, 0);?>
                    <?php $_smarty_tpl->tpl_vars['IS_MANDATORY'] = new Smarty_variable($_smarty_tpl->tpl_vars['FG_DATA']->value['mandatory'], null, 0);?>
                    <tr id='fields_group_tr_seq_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfieldsgroups']['iteration'];?>
'>
                        <td class="fieldLabel medium" style="width: 20%;">
                            <label class="muted pull-right marginRight10px"><?php echo $_smarty_tpl->tpl_vars['FIELDS_GROUPS_STRUCTURE']->value[$_smarty_tpl->tpl_vars['FG_ID']->value];?>
</label>
                            <input type="hidden" name="fields_group_visibility_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfieldsgroups']['iteration'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['FG_ID']->value;?>
">
                        </td>
                        <td style="width: 20%" data-fieldname="<?php echo $_smarty_tpl->tpl_vars['FG_ID']->value;?>
">
                            <select class="select2 col-lg-6" name="fields_group_select_visibility_<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfieldsgroups']['iteration'];?>
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
                                    <option value="<?php echo $_smarty_tpl->tpl_vars['VISIBLE_KEY']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['VISIBLE_KEY']->value==$_smarty_tpl->tpl_vars['FG_VISIBLE_TYPE']->value&&$_smarty_tpl->tpl_vars['IS_MANDATORY']->value!="1"){?>selected<?php }?>><?php echo vtranslate($_smarty_tpl->tpl_vars['VISIBLE_VALUE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 </option>
                                <?php } ?>
                                <option value='mandatory' <?php if ($_smarty_tpl->tpl_vars['IS_MANDATORY']->value=="1"){?>selected<?php }?>> <?php echo vtranslate('LBL_SHOW_AS_MANDATORY',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</option>
                            </select>
                        </td>
                        <td style='width:2%;vertical-align: middle;'>
                            <a href="javascript:"><i class="fa fa-trash trashFieldsGroup" data-type="fields_group" data-seq='<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['foreachfieldsgroups']['iteration'];?>
'></i></a>
                        </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            <div class="row-fluid marginBottom10px">
                <div class="span6 btn-toolbar">
                    <button class="btn addButton addFieldsGroup"><i class="fa fa-plus"></i>&nbsp;<strong><?php echo vtranslate('LBL_ADD_FIELDS_GROUP',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</strong></button>
                </div>
            </div>
        <?php }?>
    </div>
</div><?php }} ?>