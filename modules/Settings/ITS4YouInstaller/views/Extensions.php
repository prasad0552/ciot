<?php
/* * *******************************************************************************
 * The content of this file is subject to the ITS4YouInstaller license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 * ****************************************************************************** */

include_once dirname(__FILE__).'/../../ExtensionStore/libraries/LoaderSuggest.php';

class Settings_ITS4YouInstaller_Extensions_View  extends Settings_Vtiger_Index_View {

	private $registrationStatus;
	private $passwordStatus;
	private $customerProfile;

	public $shopLink = 'https://www.its4you.sk/en/vtiger-shop';

	/**
	 * Settings_ITS4YouInstaller_Extensions_View constructor.
	 */
	public function __construct() {
        parent::__construct();

        $this->exposeMethod('searchExtension');
        $this->exposeMethod('detail');
        $this->exposeMethod('installationLog');
        $this->exposeMethod('oneClickInstall');
    }

	/**
	 * @param Vtiger_Request $request
	 * @return bool|void
	 * @throws AppException
	 */

	public function checkPermission(Vtiger_Request $request) {
		$currentUserModel = Users_Record_Model::getCurrentUserModel();
		if(!$currentUserModel->isAdminUser() || !vtlib_isModuleActive('ITS4YouInstaller')) {
			throw new AppException(vtranslate('LBL_PERMISSION_DENIED', 'Vtiger'));
		}
	}

	/**
	 * @return string
	 */
	public function getShopLink() {
    	return $this->shopLink;
    }

	/**
	 * @throws Exception
	 */
	protected function init() {
        $modelInstance = $this->getModelInstance();
        $this->registrationStatus = $modelInstance->checkRegistration();

        if ($this->registrationStatus) {
            $pwdStatus = $modelInstance->passwordStatus();
            if (!$pwdStatus) {
                $sessionIdentifier = $modelInstance->getSessionIdentifier();
                $pwd = $_SESSION[$sessionIdentifier.'_password'];
                if (!empty($pwd)) {
                    $pwdStatus = true;
                }
            }
            $this->passwordStatus = $pwdStatus;
        }

        if ($this->registrationStatus && $this->passwordStatus) {
            $customerProfile = $modelInstance->getProfile();

            if ($customerProfile['id']) {
                $this->customerProfile = $customerProfile;
            } else {
                $this->passwordStatus = false;
                exit;
            }
        }
    }

	/**
	 * @param Vtiger_Request $request
	 * @param bool $display
	 * @return bool|void
	 * @throws Exception
	 */
	public function preProcess (Vtiger_Request $request, $display=true) {
        parent::preProcess($request, false);

        $viewer = $this->getViewer($request);
        $modelInstance = $this->getModelInstance();
        $registrationStatus = $modelInstance->checkRegistration();

        if ($registrationStatus) {
            $userName = $modelInstance->getRegisteredUser();
            $pwdStatus = $modelInstance->passwordStatus();
            $viewer->assign('USER_NAME', $userName);
            $viewer->assign('PASSWORD_STATUS', $pwdStatus);
        }

        $viewer->assign('APP_IMAGE_MAP', array(
        	'MARKETING' => 'fa-users',
	        'SALES'		=> 'fa-dot-circle-o',
	        'SUPPORT'	=> 'fa-life-ring',
	        'INVENTORY'	=> 'vicon-inventory',
	        'PROJECT'	=> 'fa-briefcase',
	        'TOOLS'		=> 'fa-wrench',
        ));

        if($display) {
            $this->preProcessDisplay($request);
        }
    }

	/**
	 * @param Vtiger_Request $request
	 * @return bool|string
	 */

    protected function preProcessTplName(Vtiger_Request $request) {
    	global $vtiger_current_version;

    	if((int) $vtiger_current_version == 6) {
		    return 'IndexViewPreProcess';
	    } else {
		    return parent::preProcessTplName($request);
	    }
    }

	/**
	 * @return Settings_ITS4YouInstaller_Extension_Model
	 * @throws Exception
	 */
	protected function getModelInstance() {
        if (!isset($this->modelInstance)) {
            $this->modelInstance = Settings_ITS4YouInstaller_Extension_Model::getInstance();
        }

        return $this->modelInstance;
    }

	/**
	 * @param Vtiger_Request $request
	 * @throws Exception
	 */
	public function process(Vtiger_Request $request) {
    	$timeCheck[] = date('H:i:s');
        $mode = $request->getMode();

        if (!empty($mode)) {
            $this->invokeExposedMethod($mode, $request);
            return;
        }

        $viewer = $this->getViewer($request);
        $qualifiedModuleName = $request->getModule(false);
        $modelInstance = $this->getModelInstance();
        $registrationStatus = $modelInstance->checkRegistration();
	    $pwdStatus = false;

        if ($registrationStatus) {
            $userName = $modelInstance->getRegisteredUser();
            $pwdStatus = $modelInstance->passwordStatus();

            if (!$pwdStatus) {
                $sessionIdentifier = $modelInstance->getSessionIdentifier();
                $pwd = $_SESSION[$sessionIdentifier . '_password'];
                if (!empty($pwd)) {
                    $pwdStatus = true;
                }
            }
            $viewer->assign('USER_NAME', $userName);

	        if ($pwdStatus) {
                $profile = $modelInstance->getProfile();

                if (isset($profile['errorCode']) && !empty($profile['errorCode'])) {
                    $viewer->assign('ERROR_MESSAGES', [$profile['message'], 'LBL_LOG_OUT_IN',]);
                }

                $viewer->assign('CUSTOMER_PROFILE', $profile);
            }
        }

	    $viewer->assign('REGISTRATION_STATUS', $registrationStatus);
        $viewer->assign('PASSWORD_STATUS', $pwdStatus);
        $viewer->assign('IS_PRO', true);
        $viewer->assign('QUALIFIED_MODULE', $qualifiedModuleName);
        $viewer->assign('SHOP_LINK', $this->getShopLink());
	    $viewer->assign('LICENSES_LIST', $modelInstance->getActiveLicenses());

	    $List = array("Extension"=> array(),"LanguagePack"=> array(), "Package"=> array());

        foreach ($modelInstance->getListings() AS $extId => $LoadModel) {
        	if(is_object($LoadModel) && is_numeric($extId)) {
                $List[$LoadModel->get('type')][$extId] = $LoadModel;
	        }
        }

        $viewer->assign('PACKAGES_LIST', $List["Package"]);
        $viewer->assign('EXTENSIONS_LIST', $List["Extension"]);
        $viewer->assign('LANGUAGES_LIST', $List["LanguagePack"]);
	    $viewer->assign('ALL_LANGUAGES', Vtiger_Language_Handler::getAllLanguages());
	    $viewer->assign('EMPTY_LICENSES', Settings_ITS4YouInstaller_License_Model::getEmptyLicenses());
        $viewer->view('Index.tpl', $qualifiedModuleName);
    }

	/**
	 * @param Vtiger_Request $request
	 * @return array
	 */
	public function getHeaderCss(Vtiger_Request $request) {
        $headerCssInstances = parent::getHeaderCss($request);
	    $layout = (string) Vtiger_Viewer::getDefaultLayoutName();

        $cssFileNames = array(
	        '~/layouts/'.$layout.'/skins/marketing/style.css',
            '~/layouts/'.$layout.'/modules/Settings/ITS4YouInstaller/resources/Style.css',
        );

        $cssInstances = $this->checkAndConvertCssStyles($cssFileNames);
        $headerCssInstances = array_merge($headerCssInstances, $cssInstances);

        return $headerCssInstances;
    }

	/**
	 * @param Vtiger_Request $request
	 * @throws Exception
	 */
	protected function searchExtension(Vtiger_Request $request) {
        $searchTerm = $request->get('searchTerm');
        $searchType = $request->get('type');
        $viewer = $this->getViewer($request);
        $qualifiedModuleName = $request->getModule(false);
        $modelInstance = $this->getModelInstance();
        $registrationStatus = $modelInstance->checkRegistration();
		$pwdStatus = false;

        if ($registrationStatus) {
            $pwdStatus = $modelInstance->passwordStatus();
            if (!$pwdStatus) {
                $sessionIdentifer = $modelInstance->getSessionIdentifier();
                $pwd = $_SESSION[$sessionIdentifer . '_password'];
                if (!empty($pwd)) {
                    $pwdStatus = true;
                }
            }
        }

        $viewer->assign('PASSWORD_STATUS', $pwdStatus);
        $viewer->assign('IS_PRO', true);
        $viewer->assign('REGISTRATION_STATUS', $registrationStatus);
        $viewer->assign('QUALIFIED_MODULE', $qualifiedModuleName);
        $viewer->assign('EXTENSIONS_LIST', $modelInstance->findListings($searchTerm, $searchType));
        $viewer->view('ExtensionModules.tpl', $qualifiedModuleName);
    }

	/**
	 * @param Vtiger_Request $request
	 * @throws Exception
	 */
	protected function detail(Vtiger_Request $request) {
        $viewer = $this->getViewer($request);
        $qualifiedModuleName = $request->getModule(false);
        $extensionId = $request->get('extensionId');
        $moduleAction = $request->get('moduleAction');
        $modelInstance = $this->getModelInstance();
		$pwdStatus = false;

        $extensionDetail = $modelInstance->getExtensionListings($extensionId);
        $customerReviews = $modelInstance->getCustomerReviews($extensionId);
        $screenShots = $modelInstance->getScreenShots($extensionId);
        $authorInfo = $modelInstance->getListingAuthor($extensionId);
        $registrationStatus = $modelInstance->checkRegistration();

        if ($registrationStatus) {
            $pwdStatus = $modelInstance->passwordStatus();
            if (!$pwdStatus) {
                $sessionIdentifer = $modelInstance->getSessionIdentifier();
                $pwd = $_SESSION[$sessionIdentifer . '_password'];
                if (!empty($pwd)) {
                    $pwdStatus = true;
                }
            }
            $viewer->assign('PASSWORD_STATUS', $pwdStatus);
        }

        if ($registrationStatus && $pwdStatus) {
            $customerProfile = $modelInstance->getProfile();
            $viewer->assign('CUSTOMER_PROFILE', $customerProfile);
        }

        $extension = $extensionDetail[$extensionId];
        $viewer->assign('IS_PRO', true);
        $viewer->assign('MODULE_ACTION', $moduleAction);
        $viewer->assign('SCREEN_SHOTS', $screenShots);
        $viewer->assign('AUTHOR_INFO', $authorInfo);
        $viewer->assign('CUSTOMER_REVIEWS', $customerReviews);
        $viewer->assign('EXTENSION_DETAIL', $extension);
        $viewer->assign('EXTENSION_MODULE_MODEL', $extension->get('moduleModel'));
        $viewer->assign('EXTENSION_ID', $extensionId);
        $viewer->assign('QUALIFIED_MODULE', $qualifiedModuleName);
        $viewer->assign('REGISTRATION_STATUS', $registrationStatus);
        $viewer->view('Detail.tpl', $qualifiedModuleName);
    }

	/**
	 * @param Vtiger_Request $request
	 * @throws Exception
	 */
	protected function installationLog(Vtiger_Request $request) {
        $viewer = $this->getViewer($request);
        global $Vtiger_Utils_Log;
        $viewer->assign('VTIGER_UTILS_LOG', $Vtiger_Utils_Log);
        $Vtiger_Utils_Log = true;
        $qualifiedModuleName = $request->getModule(false);
	    $error = array(false, false);
	    $moduleType = $extensionModel = $fileName = false;
	    $upgradeError = true;
        $extensionId = $request->get('extensionId');
        $targetModuleName = $request->get('targetModule');
        $moduleAction = $request->get('moduleAction');
        $modelInstance = $this->getModelInstance();

        $response = $modelInstance->getInstanceById($extensionId);

        if ($response['success']) {
            $extensionModel = $response['result'];

            if($extensionModel->isAvailable()) {
	            $package = $extensionModel->getPackage();
	            if ($package) {
	                $importedModuleName = $package->getModuleName();
	                $isLanguagePackage = $package->isLanguageType();

	                if ($moduleAction === 'Upgrade') {
	                    if (($isLanguagePackage && (trim($package->xpath_value('prefix')) == $targetModuleName)) || (!$isLanguagePackage && $importedModuleName === $targetModuleName)) {
	                        $upgradeError = false;
	                    }
	                } else {
	                    $upgradeError = false;
	                }
	                if (!$upgradeError) {
	                    if (!$isLanguagePackage) {
	                        $moduleModel = Vtiger_Module_Model::getInstance($importedModuleName);
	                        $viewer->assign('MODULE_EXISTS', ($moduleModel) ? true : false);
	                        $viewer->assign('MODULE_DIR_NAME', '../modules/' . $importedModuleName);

	                        if (!$extensionModel->isUpgradable()) {
	                            $viewer->assign('SAME_VERSION', true);
	                        }
	                    }
	                    $moduleType = $package->type();
	                    $fileName = $extensionModel->getFileName();
	                } else {
		                $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
	                }
	            } else {
		            $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
	            }
            } else {
	            $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
            }
        } else {
	        $error = array(true, $response['message']);
        }

	    $moduleFile = false;

        if ($extensionId && $extensionModel) {
            if ($moduleAction !== 'Upgrade') {
                $extensionModel->installTrackDetails();
            }
            if (strtolower($moduleType) === 'language') {
                $package = new Vtiger_Language();
            } else {
                $package = new Vtiger_Package();
            }

	        $moduleFile = Settings_ExtensionStore_Extension_Model::getUploadDirectory() . '/' . $fileName;

            $viewer->assign('MODULE_ACTION', $moduleAction);
            $viewer->assign('MODULE_PACKAGE', $package);
            $viewer->assign('TARGET_MODULE_INSTANCE', Vtiger_Module_Model::getInstance($targetModuleName));
            $viewer->assign('MODULE_FILE_NAME', $moduleFile);
        }
        $viewer->assign('QUALIFIED_MODULE', $qualifiedModuleName);
	    $viewer->assign('ERROR', $error[0]);
	    $viewer->assign('ERROR_MESSAGE', $error[1]);
        $viewer->view('InstallationLog.tpl', $qualifiedModuleName);

	    (new Settings_ITS4YouInstaller_License_Model())->clearCache();
	    unlink($moduleFile);
    }

	/**
	 * @param Vtiger_Request $request
	 * @throws Exception
	 */
	protected function oneClickInstall(Vtiger_Request $request) {
        $viewer = $this->getViewer($request);
        global $Vtiger_Utils_Log;
        $viewer->assign('VTIGER_UTILS_LOG', $Vtiger_Utils_Log);
        $Vtiger_Utils_Log = true;
	    $error = array(false, false);
	    $fileName = $targetModuleName = $moduleType = $extensionModel = false;
        $upgradeError = true;
        $qualifiedModuleName = $request->getModule(false);
        $extensionId = $request->get('extensionId');
        $moduleAction = $request->get('moduleAction'); //Import/Upgrade
        $trial = $request->get('trial');
        $modelInstance = $this->getModelInstance();
        $response = $modelInstance->getInstanceById($extensionId, $trial);

        if ($response['success']) {
	        $extensionModel = $response['result'];
	        if ($extensionModel->isAvailable()) {
		        $package = $extensionModel->getPackage();
		        if ($package) {
			        $importedModuleName = $package->getModuleName();
			        $isLanguagePackage = $package->isLanguageType();

			        if ($moduleAction === 'Upgrade') {
				        $targetModuleName = $request->get('extensionName');
				        if (($isLanguagePackage && (trim($package->xpath_value('prefix')) == $targetModuleName)) || (!$isLanguagePackage && $importedModuleName === $targetModuleName)) {
					        $upgradeError = false;
				        }
			        } else {
				        $upgradeError = false;
			        }
			        if (!$upgradeError) {
				        if (!$isLanguagePackage) {
					        $moduleModel = Vtiger_Module_Model::getInstance($importedModuleName);

					        if (!$extensionModel->isUpgradable()) {
						        $viewer->assign('SAME_VERSION', true);
					        }
				        }

				        $moduleType = $packageType = $package->type();
				        $fileName = $extensionModel->getFileName();
			        } else {
				        $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
			        }
		        } else {
			        $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
		        }
	        } else {
		        $error = array(true, vtranslate('LBL_INVALID_FILE', $qualifiedModuleName));
	        }
        } else {
	        $error = array( true, $response['message']);
        }

	    $moduleFile = false;

        if ($extensionId && $extensionModel) {
            if ($moduleAction !== 'Upgrade') {
                $extensionModel->installTrackDetails();
            }
            if (strtolower($moduleType) === 'language') {
                $package = new Vtiger_Language();
            } else {
                $package = new Vtiger_Package();
            }

            $moduleFile = Settings_ExtensionStore_Extension_Model::getUploadDirectory() . '/' . $fileName;
            $viewer->assign('MODULE_ACTION', $moduleAction);
            $viewer->assign('MODULE_PACKAGE', $package);
            $viewer->assign('TARGET_MODULE_INSTANCE', Vtiger_Module_Model::getInstance($targetModuleName));
            $viewer->assign('MODULE_FILE_NAME', $moduleFile);
        }

	    $viewer->assign('ERROR', $error[0]);
	    $viewer->assign('ERROR_MESSAGE', $error[1]);
        $viewer->assign('QUALIFIED_MODULE', $qualifiedModuleName);
        $viewer->view('InstallationLog.tpl', $qualifiedModuleName);

	    (new Settings_ITS4YouInstaller_License_Model())->clearCache();
        unlink($moduleFile);
    }
}