/*********************************************************************************
 * The content of this file is subject to the Process Flow 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 ********************************************************************************/

Vtiger.Class("ITS4YouProcessFlow_Actions_Js", {}, {
    its4you_modulefields: [],
    its4you_nummodulefields: [],
    its4you_modulefields_data: [],
    instances: [],
    modulefields: false,
    nummodulefields: 0,
    formElement: false,
    pfContainer: false,
    forModule: false,
    forView: false,

    getInstance: function () {
        let view = app.view();
        let parentModule = app.getParentModuleName();

        if ('Settings' !== parentModule) {
            this.getListActions(view, '');
            this.registerPostEventsListener();

            if ('Edit' === view) {
                this.registerEditEventsListener();
            }
        }
    },
    controlField: function (field, validate) {

        const thisInstance = this;

        thisInstance.setDebugText('control field start');

        let modulefields = thisInstance.its4you_modulefields,
            nummodulefields = thisInstance.its4you_nummodulefields,
            forfieldname = field.data('fieldname');

        thisInstance.setDebugText('control field name:' + forfieldname);

        if ('undefined' === typeof forfieldname) {
            forfieldname = field.attr('name');
        }

        if ('undefined' !== typeof forfieldname) {

            if ('[]' === forfieldname.substring(forfieldname.length - 2, forfieldname.length)) {
                forfieldname = forfieldname.substring(0, forfieldname.length - 2);
            }
            thisInstance.setDebugText('control field A');
            if (jQuery.inArray(forfieldname, modulefields) !== -1) {
                thisInstance.setDebugText('control field B');
                if (typeof field != 'undefined' && typeof thisInstance.its4you_modulefields_data != 'undefined') {
                    let field_val = field.val();

                    if ('checkbox' === field.attr('type')) {
                        if (field.not(':checked')) {
                            field_val = "";
                        }
                    }

                    if (thisInstance.its4you_modulefields_data[forfieldname] == field_val) {
                        return false;
                    }
                }
                thisInstance.setDebugText('control field C');
                thisInstance.controlFields();
            } else {
                thisInstance.setDebugText('control field A end');
            }
        }
    },
    getFieldElementByName: function (fieldname) {
        let fieldElement = jQuery("[name='" + fieldname + "[]']");
        if (!fieldElement.length) {
            fieldElement = jQuery("[name='" + fieldname + "']");
        }
        return fieldElement;
    },
    requestValues: false,
    getRequestValue: function (name) {
        if (!this.requestValues) {
            this.requestValues = new URLSearchParams(window.location.search);
        }

        if (this.requestValues.has(name)) {
            return this.requestValues.get(name);
        }

        return '';
    },
    controlFields: function () {
        let thisInstance = this,
            modulefields = thisInstance.its4you_modulefields,
            nummodulefields = thisInstance.its4you_nummodulefields,
            formElement = thisInstance.getForm(),
            for_module = thisInstance.getForModule(),
            for_view = thisInstance.getForView();

        let params = {
                module: 'ITS4YouProcessFlow',
                action: 'IndexAjax',
                mode: 'controlFields',
                for_module: for_module,
                for_view: for_view,
                record: formElement.find('[name=record]').val()
            },
            postData = {},
            formData = formElement.serializeFormData();

        for (let i = 0; i < nummodulefields; i++) {
            let fieldName = modulefields[i];
            let fieldValue = formData[fieldName];
            //if (typeof formData[fieldName] == 'undefined') {
            let fieldElement = thisInstance.getFieldElementByName(fieldName);
            if (typeof fieldElement != 'undefined') {
                let fieldtype = fieldElement.data('fieldtype');


                if (typeof fieldtype == 'undefined') {

                    let alterElement = jQuery("#" + for_module + "_editView_fieldName_" + fieldName);

                    if (typeof alterElement != 'undefined') {
                        fieldtype = alterElement.data('fieldtype');
                        fieldElement = alterElement;
                    }
                }
                if (typeof fieldtype != 'undefined') {

                    if ('multipicklist' === fieldtype) {
                        fieldValue = "";
                        if (fieldElement.val() != null) {
                            fieldValue = fieldElement.val().join(" |##| ");
                        }
                    }
                    if ('file' === fieldtype) {
                        let fieldValue = "";
                        if (fieldElement.val() != null && fieldElement.val() != "") {
                            fieldValue = fieldElement.val();
                        } else {
                            let closestDiv = fieldElement.closest("div");
                            let inputElements = jQuery(".uploadedFileDetails", closestDiv).find("input[value='1']");
                            if (inputElements && inputElements.length > 0) {
                                fieldValue = "1";
                            }
                        }
                    }
                    if ('checkbox' === fieldtype) {
                        if (fieldElement.is(':checked')) {
                            fieldValue = "1";
                        } else {
                            fieldValue = "0";
                        }
                    }
                }
            }
            postData[fieldName] = fieldValue;
        }

        thisInstance.its4you_modulefields_data = postData;
        params['postData'] = JSON.stringify(postData);

        let str = jQuery.param(params);
        thisInstance.setDebugText(str);

        app.request.post({data: params}).then(
            function (error, result) {
                app.helper.hideProgress();
                if (!error) {
                    if (result.success) {
                        jQuery.each(result.entries, function (i, data) {
                            thisInstance.executeActions(i, data);
                        });
                    }
                }
            }
        )
    },
    getForm: function () {
        if (this.formElement == false) {
            this.setForm(jQuery('#EditView'));
        }
        return this.formElement;
    },
    setForm: function (element) {
        this.formElement = element;
        return this;
    },
    getForModule: function () {
        if (this.forModule === false) {
            let module = jQuery('#EditView [name="module"]').val();

            if (!module) {
                module = app.getModuleName()
            }
            this.setForModule(module);
        }
        return this.forModule;
    },
    setForModule: function (for_module) {
        if ('Calendar' === for_module && 'Events' === this.getRequestValue('mode')) {
            for_module = 'Events';
        }
        this.forModule = for_module;
        return this;
    },
    getForView: function () {
        if (this.forView == false) {
            this.setForView(app.view());
        }
        return this.forView;
    },
    setForView: function (for_view) {
        this.forView = for_view;
        return this;
    },
    registerEditEventsListener: function () {
        let thisInstance = this;
        let formElement = this.getForm();

        //formElement.find('.inputElement').trigger('Vtiger.Validation.Hide.Messsage')
        formElement.find('.inputElement').on('Vtiger.Validation.Hide.Messsage', function (e) {
            thisInstance.setDebugText('Vtiger.Validation.Hide.Messsage inputElement:' + jQuery(this).val());

            thisInstance.controlField(jQuery(this), false);
        });

        formElement.find('.dateField').on('Vtiger.Validation.Hide.Messsage', function (e) {
            thisInstance.setDebugText('Vtiger.Validation.Hide.Messsage dateField:' + jQuery(this).val());

            thisInstance.controlField(jQuery(this), false);
        });

        jQuery(".select2", formElement).change(function () {
            thisInstance.controlField(jQuery(this), false);
        });

        formElement.find('[type=checkbox]').click(function () {
            thisInstance.controlField(jQuery(this), false);
        });

        jQuery(document).on('Vtiger.Reference.Selection', function (e, data) {
            let selectElement = jQuery(e.target);
            thisInstance.controlField(selectElement, false);
        });
    },
    getListViewContainer: function () {
        if (this.listViewContainer === false) {
            this.listViewContainer = jQuery('#listViewContent');
        }
        return this.listViewContainer;
    },

    executeActions: function (id, actions) {
        const self = this;

        jQuery.each(actions, function (i, action) {
            try {
                let instance = self.getPFActionInstanceByModuleName(action.parent_module);

                if (instance) {
                    instance.run(id, action, self.getContainer());
                }
            } catch (e) {
                console.log(e);
            }
        });
    },
    getPFActionInstanceByModuleName: function (moduleName) {
        let moduleClassName = moduleName + '_PFActions_Js';

        if ('undefined' === typeof this.instances[moduleClassName]) {
            if ('undefined' !== typeof window[moduleClassName]) {
                this.instances[moduleClassName] = new window[moduleClassName]();
            }
        }

        return this.instances[moduleClassName];
    },

    getListActions: function (for_view, event_name) {
        let thisInstance = this,
            params = {};

        thisInstance.instances = [];

        let actualInstance = window.app.controller();

        if (actualInstance && typeof actualInstance.getDefaultParams == "function") {
            params = actualInstance.getDefaultParams();
        }

        if ('Edit' === for_view) {
            let formElement = this.getForm();
            params['record'] = formElement.find('[name=record]').val();
        } else if ('List' === for_view && actualInstance && jQuery.isFunction(actualInstance.getListSearchParams)) {
            params['search_params'] = JSON.stringify(actualInstance.getListSearchParams());
        }
        params['module'] = 'ITS4YouProcessFlow';
        params['for_module'] = thisInstance.getForModule();
        params['for_view'] = for_view;
        params['event_name'] = event_name;
        params['action'] = 'IndexAjax';
        params['mode'] = 'getPFListActions';
        params['view'] = '';

        app.helper.showProgress();

        let str = jQuery.param(params);
        thisInstance.setDebugText('getListActions');
        thisInstance.setDebugText(str);


        app.request.post({data: params}).then(
            function (error, result) {

                app.helper.hideProgress();
                if (!error) {

                    if (result.fields) {
                        thisInstance.its4you_modulefields = result.fields;
                        thisInstance.its4you_nummodulefields = result.numfields;
                    }
                    if (result.success) {
                        jQuery.each(result.entries, function (i, data) {
                            thisInstance.executeActions(i, data);
                        });
                    }
                }
            }
        )
    },
    registerPostEventsListener: function () {

        let self = this;
        app.event.on('post.listViewFilter.click', function (event, searchRow) {
            self.getListActions('List', 'post.listViewFilter.click');
        });
        app.event.on('post.relatedListLoad.click', function (event, searchRow) {
            let linkKey = self.getLinkKey();
            let forView = 'relatedList';
            if (linkKey == 'LBL_RECORD_DETAILS' || linkKey == 'LBL_RECORD_SUMMARY') {
                forView = 'Detail';
            }
            self.getListActions(forView, 'post.relatedListLoad.click');
        });
        app.event.on('post.overlay.load', function (parentRecordId, params) {
            self.getListActions('relatedDetail', 'post.overlay.load');
        });
        app.event.on('post.QuickCreateForm.save', function (event, data) {
            self.getListActions('Detail', 'post.QuickCreateForm.save');
        });

        app.event.on('PostAjaxSaveEvent', function (e, fieldBasicData, postSaveRecordDetails, contentHolder) {
            self.getListActions('Detail', 'PostAjaxSaveEvent');
        });

        app.event.on('post.overLayEditView.loaded', function (e, container) {
            self.setContainer(container);
            let for_view = 'Edit';
            self.getListActions(for_view, 'post.overLayEditView.loaded');
            let formElement = container.find('#EditView');

            self.setForm(formElement);

            let for_module = formElement.find('[name=module]').val();

            self.setForModule(for_module);
            self.setForView(for_view);

            self.registerEditEventsListener();
        });
    },
    getContainer: function () {
        return this.pfContainer;
    },
    setContainer: function (element) {
        this.pfContainer = element;
        return this;
    },
    setDebugText: function (text) {
        //if (window.console) console.log('[ITS4YouDynamicFields] ' + text);
    },
    getLinkKey: function () {

        let link_key = '';
        let tabContainer = jQuery('div.related-tabs');
        if (typeof tabContainer != 'undefined') {
            let active_tab = tabContainer.find('li.active');
            if (typeof active_tab != 'undefined') {
                let link_key = active_tab.data('link-key');
                if (typeof link_key == 'undefined') {
                    link_key = '';
                }
            }
        }
        return link_key;
    },
});

jQuery(document).ready(function () {
    let ITS4YouProcessFlowActionsInstance = new ITS4YouProcessFlow_Actions_Js();
    ITS4YouProcessFlowActionsInstance.getInstance();
});
