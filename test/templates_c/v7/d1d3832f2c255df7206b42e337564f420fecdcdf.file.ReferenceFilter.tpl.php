<?php /* Smarty version Smarty-3.1.7, created on 2020-10-08 12:48:51
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/SwVtTools/ReferenceFilter.tpl" */ ?>
<?php /*%%SmartyHeaderCode:9918434145f7f0ab3b48068-59689488%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd1d3832f2c255df7206b42e337564f420fecdcdf' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Settings/SwVtTools/ReferenceFilter.tpl',
      1 => 1600657806,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9918434145f7f0ab3b48068-59689488',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'referencefilter' => 0,
    'filter' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5f7f0ab3b6e8c',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5f7f0ab3b6e8c')) {function content_5f7f0ab3b6e8c($_smarty_tpl) {?><table class="table table-condensed">
<?php  $_smarty_tpl->tpl_vars['filter'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['filter']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['referencefilter']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['filter']->key => $_smarty_tpl->tpl_vars['filter']->value){
$_smarty_tpl->tpl_vars['filter']->_loop = true;
?>
    <tr data-id="<?php echo $_smarty_tpl->tpl_vars['filter']->value['id'];?>
">
        <td><?php echo vtranslate($_smarty_tpl->tpl_vars['filter']->value['modulename'],$_smarty_tpl->tpl_vars['filter']->value['modulename']);?>
</td>
        <td><?php echo vtranslate($_smarty_tpl->tpl_vars['filter']->value['field']['fieldlabel'],$_smarty_tpl->tpl_vars['filter']->value['modulename']);?>
</td>
        <td><?php echo vtranslate($_smarty_tpl->tpl_vars['filter']->value['tomodule'],$_smarty_tpl->tpl_vars['filter']->value['tomodule']);?>
</td>
        <td><?php echo nl2br($_smarty_tpl->tpl_vars['filter']->value['condition']);?>
</td>
        <td><a href="#" class="EditReferenceFilter">edit</a> | <a href="#" class="DeleteReferenceFilter">del</a></td>
    </tr>
<?php } ?>
</table>
<?php }} ?>