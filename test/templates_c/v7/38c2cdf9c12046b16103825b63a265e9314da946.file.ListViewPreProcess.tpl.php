<?php /* Smarty version Smarty-3.1.7, created on 2020-11-07 16:43:20
         compiled from "/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/RecycleBin/ListViewPreProcess.tpl" */ ?>
<?php /*%%SmartyHeaderCode:8716946655fa6cea82b9665-80015537%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '38c2cdf9c12046b16103825b63a265e9314da946' => 
    array (
      0 => '/var/www/html/ciot/includes/runtime/../../layouts/v7/modules/RecycleBin/ListViewPreProcess.tpl',
      1 => 1593008135,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '8716946655fa6cea82b9665-80015537',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'MODULE' => 0,
    'CURRENT_USER_MODEL' => 0,
    'LEFTPANELHIDE' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5fa6cea82e22b',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5fa6cea82e22b')) {function content_5fa6cea82e22b($_smarty_tpl) {?>



<?php echo $_smarty_tpl->getSubTemplate ("modules/Vtiger/partials/Topbar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


<div class="container-fluid app-nav">
    <div class="row">
        <?php echo $_smarty_tpl->getSubTemplate ("modules/RecycleBin/partials/SidebarHeader.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        <?php echo $_smarty_tpl->getSubTemplate (vtemplate_path("ModuleHeader.tpl",$_smarty_tpl->tpl_vars['MODULE']->value), $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

    </div>
</div>
</nav>
     <div id='overlayPageContent' class='fade modal overlayPageContent content-area overlay-container-60' tabindex='-1' role='dialog' aria-hidden='true'>
        <div class="data">
        </div>
        <div class="modal-dialog">
        </div>
    </div>
<div class="main-container main-container-<?php echo $_smarty_tpl->tpl_vars['MODULE']->value;?>
">
		<?php $_smarty_tpl->tpl_vars['LEFTPANELHIDE'] = new Smarty_variable($_smarty_tpl->tpl_vars['CURRENT_USER_MODEL']->value->get('leftpanelhide'), null, 0);?>
        <div id="modnavigator" class="module-nav">
            <div class="hidden-xs hidden-sm mod-switcher-container">
            </div>
        </div>
        <div id="sidebar-essentials" class="sidebar-essentials <?php if ($_smarty_tpl->tpl_vars['LEFTPANELHIDE']->value=='1'){?> hide <?php }?>">
            <?php echo $_smarty_tpl->getSubTemplate ("modules/RecycleBin/partials/SidebarEssentials.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        </div>
        <div class="listViewPageDiv content-area <?php if ($_smarty_tpl->tpl_vars['LEFTPANELHIDE']->value=='1'){?> full-width <?php }?>" id="listViewContent">
                
    
            
    
<?php }} ?>