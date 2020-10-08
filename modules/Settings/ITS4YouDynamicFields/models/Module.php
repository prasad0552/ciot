<?php
/* * *******************************************************************************
 * The content of this file is subject to the Dynamic Fields 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

class Settings_ITS4YouDynamicFields_Module_Model extends Settings_Vtiger_Module_Model
{

    public $baseTable = 'its4you_dynamicfields';
    public $baseIndex = 'dfid';
    public $listFields = array('description' => 'LBL_DESCRIPTION', 'module' => 'LBL_MODULE');
    public $listFieldModels = array();
    public $casesOfVisibility = array('1' => 'LBL_VISIBLE', '2' => 'LBL_INVISIBLE', '3' => 'LBL_READONLY');

    public $name = 'ITS4YouDynamicFields';

    public static function getDefaultUrl()
    {
        return 'index.php?module=ITS4YouDynamicFields&parent=Settings&view=List';
    }

    public static function getCreateViewUrl($type = "")
    {
        return "javascript:Settings_ITS4YouDynamicFields_List_Js.triggerCreate('index.php?module=ITS4YouDynamicFields&parent=Settings&view=Edit" . $type . "')";
    }

    public static function getCreateRecordUrl()
    {
        return 'index.php?module=ITS4YouDynamicFields&parent=Settings&view=Edit';
    }

    public static function saveFields($recordId, $AllValues, $isgroup = '0')
    {
        $adb = PearDatabase::getInstance();

        $Delete_Tables = array("fields", "blocks", "fields_groups ");

        foreach ($Delete_Tables AS $table_type) {
            $deleteSql = "DELETE FROM its4you_dynamicfields_" . $table_type . " WHERE dfid = ?";
            $adb->pquery($deleteSql, array($recordId));
        }

        $sql1 = "INSERT INTO its4you_dynamicfields_fields (dfid, fieldname, visible, mandatory) VALUES (?, ?, ?, ?)";

        $sql2 = "INSERT INTO its4you_dynamicfields_blocks (dfid, block, visible) VALUES (?, ?, ?)";

        $sql3 = "INSERT INTO its4you_dynamicfields_fields_groups (dfid, fieldsgroup, visible, mandatory) VALUES (?, ?, ?, ?)";

        foreach ($AllValues as $key => $value) {
            if ($value != "" || $isgroup == "1") {
                $sql = "";
                $Atr = array();

                if (substr($key, 0, 11) == "visibility_") {
                    $mandatory = 0;
                    $visible = $value;
                    $field_name = substr($key, 11);
                    $mandatory_name = "mandatory_" . $field_name;

                    if (isset($AllValues[$mandatory_name]) && $AllValues[$mandatory_name] == "1") {
                        $mandatory = "1";
                    }

                    if ($value != "0" || $mandatory == "1" || $isgroup == "1") {

                        if ($value > 1) {
                            $mandatory = "0";
                        }
                        $sql = $sql1;
                        $Atr = array($recordId, $field_name, $visible, $mandatory);
                    }

                } elseif (substr($key, 0, 21) == "set_block_visibility_") {
                    $visible = $value;
                    $block = substr($key, 21);

                    if ($value != "0" || $isgroup == "1") {

                        $Atr = array($recordId, $block, $visible);
                        $sql = $sql2;
                    }

                } elseif (substr($key, 0, 28) == "set_fields_group_visibility_") {
                    $mandatory = 0;
                    $visible = $value;
                    $fg = substr($key, 28);
                    $mandatory_name = "set_fields_group_mandatory_" . $fg;

                    if ($AllValues[$mandatory_name] && $AllValues[$mandatory_name] == "1") {
                        $mandatory = "1";
                    }

                    if ($value != "0" || $mandatory == "1" || $isgroup == "1") {

                        if ($value > 1) {
                            $mandatory = "0";
                        }
                        $sql = $sql3;
                        $Atr = array($recordId, $fg, $visible, $mandatory);
                    }

                }

                if ($sql != "") {
                    $adb->pquery($sql, $Atr);
                }
            }
        }
    }

    public static function getSupportedModules()
    {
        $moduleModels = Vtiger_Module_Model::getAll(array(0, 2));
        $supportedModuleModels = array();
        foreach ($moduleModels as $tabId => $moduleModel) {
            if ($moduleModel->isEntityModule() && $moduleModel->getName() != 'Webmails') {
                $supportedModuleModels[$tabId] = $moduleModel;
            }
        }
        return $supportedModuleModels;
    }

    public static function getExpressions()
    {
        $db = PearDatabase::getInstance();

        $mem = new VTExpressionsManager($db);
        return $mem->expressionFunctions();
    }

    public static function getMetaVariables()
    {
        return self::$metaVariables;
    }

    /**
     * Function to check whether the module is an entity type module or not
     * @return <Boolean> true/false
     */
    public function isEntityModule()
    {
        return false;
    }

    public function getListFields()
    {
        if (empty($this->listFieldModels)) {
            $fields = $this->listFields;
            $fieldObjects = array();
            foreach ($fields as $fieldName => $fieldLabel) {
                if ($fieldName == 'module_name' || $fieldName == 'execution_condition') {
                    $fieldObjects[$fieldName] = new Vtiger_Base_Model(array('name' => $fieldName, 'label' => $fieldLabel, 'sort' => false));
                } else {
                    $fieldObjects[$fieldName] = new Vtiger_Base_Model(array('name' => $fieldName, 'label' => $fieldLabel));
                }
            }
            $this->listFieldModels = $fieldObjects;
        }
        return $this->listFieldModels;
    }

    public function getVisibilityCases()
    {
        return $this->casesOfVisibility;
    }

    public function isPagingSupported()
    {
        return false;
    }

    /**
     * Function to get Module Header Links (for Vtiger7)
     * @return array
     */
    /*
    public function getModuleBasicLinks(){

        $listViewModel = Vtiger_ListView_Model::getInstance($this->getName());
        return $listViewModel->getBasicLinks();

    }
*/
    public function getModuleBasicLinks()
    {
        return array();
    }

}
