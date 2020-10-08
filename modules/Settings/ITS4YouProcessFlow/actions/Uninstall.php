<?php
/* * *******************************************************************************
 * The content of this file is subject to the ListView Colors 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

class Settings_ITS4YouProcessFlow_Uninstall_Action extends Settings_Vtiger_Basic_Action
{
    public function checkPermission(Vtiger_Request $request)
    {
        return;
    }

    public function process(Vtiger_Request $request)
    {
        include_once('vtlib/Vtiger/Module.php');

        $adb = PearDatabase::getInstance();
        $module = Vtiger_Module::getInstance('ITS4YouProcessFlow');
        if ($module) {


            $adb->pquery("DELETE FROM vtiger_settings_field WHERE name= ?", array("Process Flow"));

            $module->delete();
            @shell_exec('rm -r modules/ITS4YouProcessFlow');
            @shell_exec('rm -r modules/Settings/ITS4YouProcessFlow');
            @shell_exec('rm -r layouts/v7/modules/ITS4YouProcessFlow');
            @shell_exec('rm -r layouts/v7/modules/Settings/ITS4YouProcessFlow');
            @shell_exec('rm -f languages/ar_ae/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/ar_ae/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/cz_cz/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/cz_cz/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/de_de/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/de_de/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/en_gb/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/en_gb/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/en_us/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/en_us/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_co/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_co/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_es/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_es/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_mx/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_mx/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_ve/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/es_ve/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/fi_fi/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/fi_fi/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/fr_fr/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/fr_fr/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/hi_hi/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/hi_hi/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/hu_hu/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/hu_hu/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/it_it/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/it_it/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/nl_nl/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/nl_nl/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/pl_pl/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/pl_pl/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/pt_br/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/pt_br/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/ro_ro/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/ro_ro/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/ru_ru/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/ru_ru/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/sk_sk/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/sk_sk/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/sv_se/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/sv_se/Settings/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/tr_tr/ITS4YouProcessFlow.php');
            @shell_exec('rm -f languages/tr_tr/Settings/ITS4YouProcessFlow.php');

            $adb->pquery("DROP TABLE IF EXISTS its4you_processflow", array());
            $adb->pquery("DROP TABLE IF EXISTS its4you_processflow_seq", array());
            $adb->pquery("DROP TABLE IF EXISTS its4you_processflowrel", array());
            $adb->pquery("DROP TABLE IF EXISTS its4you_processflowrel_seq", array());

            $result = array('success' => true);
        } else {
            $result = array('success' => false);
        }

        $result = array('success' => true);
        ob_clean();
        $response = new Vtiger_Response();
        $response->setResult($result);
        $response->emit();
    }
}
