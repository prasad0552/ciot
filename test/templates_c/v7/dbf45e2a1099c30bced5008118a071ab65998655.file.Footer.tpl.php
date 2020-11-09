<?php /* Smarty version Smarty-3.1.7, created on 2020-11-07 16:51:48
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/Footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:21253073195ef370d672d2d2-33753778%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'dbf45e2a1099c30bced5008118a071ab65998655' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/Vtiger/Footer.tpl',
      1 => 1604756375,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '21253073195ef370d672d2d2-33753778',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5ef370d673266',
  'variables' => 
  array (
    'LANGUAGE_STRINGS' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5ef370d673266')) {function content_5ef370d673266($_smarty_tpl) {?>

<footer class="app-footer">
	<p>
		Powered by SCILTECH - &nbsp;&nbsp;© <?php echo date('Y');?>
&nbsp;&nbsp;
	</p>
</footer>
</div>
<div id='overlayPage'>
	<!-- arrow is added to point arrow to the clicked element (Ex:- TaskManagement), 
	any one can use this by adding "show" class to it -->
	<div class='arrow'></div>
	<div class='data'>
	</div>
</div>
<div id='helpPageOverlay'></div>
<div id="js_strings" class="hide noprint"><?php echo Zend_Json::encode($_smarty_tpl->tpl_vars['LANGUAGE_STRINGS']->value);?>
</div>
<div class="modal myModal fade"></div>
<?php echo $_smarty_tpl->getSubTemplate (vtemplate_path('JSResources.tpl'), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

</body>

</html>
<?php }} ?>