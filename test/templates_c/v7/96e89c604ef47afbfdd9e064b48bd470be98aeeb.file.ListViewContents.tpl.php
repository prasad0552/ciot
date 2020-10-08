<?php /* Smarty version Smarty-3.1.7, created on 2020-09-21 02:03:33
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ListViewContents.tpl" */ ?>
<?php /*%%SmartyHeaderCode:19579984985f6809f54b1c96-08368473%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '96e89c604ef47afbfdd9e064b48bd470be98aeeb' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/ITS4YouProcessFlow/ListViewContents.tpl',
      1 => 1600651998,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19579984985f6809f54b1c96-08368473',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'QUALIFIED_MODULE' => 0,
    'ALL_MODULES' => 0,
    'COUNTER' => 0,
    'S_MODULE_MODEL' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f6809f54bc65',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f6809f54bc65')) {function content_5f6809f54bc65($_smarty_tpl) {?>
<div class="listViewEntriesDiv" style='overflow-x:auto;'>
    <div class="col-sm-12 col-xs-12 ">
        <h4><?php echo vtranslate($_smarty_tpl->tpl_vars['MODULE']->value,$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
 <?php echo vtranslate('LBL_MODULES',$_smarty_tpl->tpl_vars['QUALIFIED_MODULE']->value);?>
</h4>
        <hr>
        <div>
            <div>
                <div class="<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
Search padding1per">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable(0, null, 0);?>
                                <?php  $_smarty_tpl->tpl_vars['S_MODULE_MODEL'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['S_MODULE_MODEL']->_loop = false;
 $_smarty_tpl->tpl_vars['TAB_ID'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['ALL_MODULES']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['S_MODULE_MODEL']->key => $_smarty_tpl->tpl_vars['S_MODULE_MODEL']->value){
$_smarty_tpl->tpl_vars['S_MODULE_MODEL']->_loop = true;
 $_smarty_tpl->tpl_vars['TAB_ID']->value = $_smarty_tpl->tpl_vars['S_MODULE_MODEL']->key;
?>
                                    <?php if ($_smarty_tpl->tpl_vars['COUNTER']->value==2){?>
                                        </tr><tr>
                                        <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable(0, null, 0);?>
                                    <?php }?>
                                    <td width="50%" class="listViewEntries cursorPointer" data-recordurl="index.php?module=ITS4YouProcessFlow&view=Detail&parent=Settings&sourceModule=<?php echo $_smarty_tpl->tpl_vars['S_MODULE_MODEL']->value->getName();?>
">
                                        <?php echo vtranslate($_smarty_tpl->tpl_vars['S_MODULE_MODEL']->value->getName(),$_smarty_tpl->tpl_vars['S_MODULE_MODEL']->value->getName());?>

                                    </td>
                                    <?php $_smarty_tpl->tpl_vars['COUNTER'] = new Smarty_variable($_smarty_tpl->tpl_vars['COUNTER']->value+1, null, 0);?>
                                <?php } ?>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div><?php }} ?>