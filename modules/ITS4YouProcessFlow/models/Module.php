<?php
/* * *******************************************************************************
 * The content of this file is subject to the ITS4YouGoogleCalendarSync license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

class ITS4YouProcessFlow_Module_Model extends Vtiger_Module_Model
{


    public function getSettingLinks()
    {

        $settingsLinks = array();

        $currentUserModel = Users_Record_Model::getCurrentUserModel();
        if ($currentUserModel->isAdminUser()) {

            $settingsLinks[] = array(
                'linktype' => 'LISTVIEWSETTING',
                'linklabel' => 'LBL_SETTINGS',
                'linkurl' => $this->getDefaultUrl(),
                'linkicon' => ''
            );

            $settingsLinks[] = array(
                'linktype' => 'LISTVIEWSETTING',
                'linklabel' => vtranslate('LBL_UPGRADE', "Settings:" . $this->getName()),
                'linkurl' => 'index.php?module=ModuleManager&parent=Settings&view=ModuleImport&mode=importUserModuleStep1',
                'linkicon' => ''
            );

            $settingsLinks[] = array(
                'linktype' => 'LISTVIEWSETTING',
                'linklabel' => vtranslate('LBL_UNINSTALL', "Settings:" . $this->getName()),
                'linkurl' => 'index.php?module=' . $this->getName() . '&parent=Settings&view=Uninstall',
                'linkicon' => ''
            );
        }
        return $settingsLinks;
    }

    public function getDefaultUrl()
    {
        return (string)parent::getDefaultUrl() . '&parent=Settings';
    }
}