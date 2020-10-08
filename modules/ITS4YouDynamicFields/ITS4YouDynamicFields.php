<?php
/* * *******************************************************************************
 * The content of this file is subject to the Dynamic Fields 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

require_once 'modules/Webforms/model/WebformsModel.php';
require_once 'include/Webservices/DescribeObject.php';

class ITS4YouDynamicFields
{

    protected static $moduleDescribeCache = array();
    public $LBL_MODULE_NAME = 'Dynamic Fields 4 You';
    public $LBL_MODULE_NAME_OLD = 'Dynamic Fields 4 You';
    public $db;
    public $log;
    // Cache to speed up describe information store
    public $moduleInstance;

    public function __construct()
    {
        global $log, $currentModule;

        $this->db = PearDatabase::getInstance();
        $this->log = $log;
    }

    /**
     * Invoked when special actions are performed on the module.
     * @param String Module name
     * @param String Event Type
     */
    public function vtlib_handler($moduleName, $eventType)
    {
        $this->moduleInstance = Vtiger_Module::getInstance('ITS4YouDynamicFields');

        switch ($eventType) {
            case 'module.postupdate':
            case 'module.enabled':
            case 'module.postinstall':
                $this->addCustomLinks();
                break;
            case 'module.preupdate':
            case 'module.preuninstall':
            case 'module.disabled':
                $this->deleteCustomLinks();
                break;
        }
    }

    public function addCustomLinks()
    {
        $image = '';
        $description = 'Show and hide fields in modules...';
        $linkto = 'index.php?module=ITS4YouDynamicFields&parent=Settings&view=List';

        $result1 = $this->db->pquery('SELECT 1 FROM vtiger_settings_field WHERE name=?', array($this->LBL_MODULE_NAME_OLD));
        if ($this->db->num_rows($result1)) {
            $this->db->pquery('UPDATE vtiger_settings_field SET name=?, iconpath=?, description=?, linkto=?, active = ? WHERE name=?', array($this->LBL_MODULE_NAME, $image, $description, $linkto, '0', $this->LBL_MODULE_NAME_OLD));
        }

        $result2 = $this->db->pquery('SELECT 1 FROM vtiger_settings_field WHERE name=?', array($this->LBL_MODULE_NAME));
        if (!$this->db->num_rows($result2)) {

            $fieldid = $this->db->getUniqueID('vtiger_settings_field');
            $blockid = getSettingsBlockId('LBL_OTHER_SETTINGS');
            $seq_res = $this->db->pquery("SELECT max(sequence) AS max_seq FROM vtiger_settings_field WHERE blockid = ?", array($blockid));
            if ($this->db->num_rows($seq_res) > 0) {
                $cur_seq = $this->db->query_result($seq_res, 0, 'max_seq');
                if ($cur_seq != null) {
                    $seq = $cur_seq + 1;
                }
            }

            $this->db->pquery('INSERT INTO vtiger_settings_field(fieldid, blockid, name, iconpath, description, linkto, sequence) VALUES (?,?,?,?,?,?,?)', array($fieldid, $blockid, $this->LBL_MODULE_NAME, $image, $description, $linkto, $seq));
        }

        $this->db->pquery('UPDATE vtiger_settings_field SET active= 0  WHERE  name= ?', array($this->LBL_MODULE_NAME));

        $this->moduleInstance->addLink('HEADERSCRIPT', 'ITS4YouDynamicFieldsPFActionsJS', 'layouts/v7/modules/ITS4YouDynamicFields/resources/PFActions.js');
    }

    public function deleteCustomLinks()
    {
        $this->db->pquery('UPDATE vtiger_settings_field SET active= 1  WHERE  name= ?', array($this->LBL_MODULE_NAME));

        $this->moduleInstance->deleteLink('HEADERSCRIPT', 'ITS4YouDynamicFieldsPFActionsJS', 'layouts/v7/modules/ITS4YouDynamicFields/resources/PFActions.js');
    }
}
