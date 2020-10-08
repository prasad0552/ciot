<?php
/* * *******************************************************************************
 * The content of this file is subject to the Process Flow 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

require_once 'modules/Webforms/model/WebformsModel.php';
require_once 'include/Webservices/DescribeObject.php';

class ITS4YouProcessFlow
{

    protected static $moduleDescribeCache = array();
    // Cache to speed up describe information store
    public $LBL_MODULE_NAME = 'Process Flow';

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
        if ($eventType == 'module.postinstall') {
            $this->updateSettings();
        } elseif ($eventType == 'module.disabled') {

            $this->db->pquery('UPDATE vtiger_settings_field SET active= 1  WHERE  name= ?', array($this->LBL_MODULE_NAME));
        } elseif ($eventType == 'module.enabled') {

            $this->db->pquery('UPDATE vtiger_settings_field SET active= 0  WHERE  name= ?', array($this->LBL_MODULE_NAME));
        } elseif ($eventType == 'module.preuninstall') {

            $this->db->pquery('UPDATE vtiger_settings_field SET active= 1  WHERE  name= ?', array($this->LBL_MODULE_NAME));
        } elseif ($eventType == 'module.preupdate') {

        } elseif ($eventType == 'module.postupdate') {

            $this->updateSettings();
        }
    }

    public function updateSettings()
    {

        $image = '';
        $description = '';
        $linkto = 'index.php?module=ITS4YouProcessFlow&parent=Settings&view=List';

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
    }

    public function retrieve_entity_info()
    {
    }
}
