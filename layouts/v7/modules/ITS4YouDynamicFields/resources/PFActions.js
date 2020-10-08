/*********************************************************************************
 * The content of this file is subject to the Dynamic Fields 4 You license.
 * ("License"); You may not use this file except in compliance with the License
 * The Initial Developer of the Original Code is IT-Solutions4You s.r.o.
 * Portions created by IT-Solutions4You s.r.o. are Copyright(C) IT-Solutions4You s.r.o.
 * All Rights Reserved.
 ********************************************************************************/
/** @var ITS4YouDynamicFields_PFActions_Js */

Vtiger.Class("ITS4YouDynamicFields_PFActions_Js", {

    getInstance: function () {
    },

    getInstanceByModuleName: function (moduleName) {
    },
}, {
    firstLoad: true,
    viewType: false,
    forModule: false,
    forView: false,
    forRecord: false,
    modulefields: false,
    nummodulefields: 0,
    formElement: false,
    control_man_file: [],
    debug: true,
    cf: false,
    dfContainer: false,
    isreadonlyfield: [],

    run: function (recordId, actiondata, container) {
        let thisInstance = this;
        thisInstance.viewType = app.view();

        if (actiondata.data) {

            if (typeof actiondata.data.action !== "undefined") {
                if (actiondata.data.action === 'setDynamicFields') {
                    thisInstance.forModule = actiondata.data.for_module;
                    thisInstance.forView = actiondata.data.for_view;
                    thisInstance.forRecord = actiondata.data.for_record;

                    let load_modulefields = [];
                    thisInstance.setContainer(container);
                    thisInstance.HideOrShowFields(thisInstance, actiondata.data.fields, 0, load_modulefields);
                    thisInstance.firstLoad = false;
                }
            }
        }
    },

    HideOrShowFields: function (thisInstance, response, nummodulefields, modulefields) {
        let result = response['success'],
            module = thisInstance.forModule,
            is_modified = false,
            fieldtype;

        if (result) {
            jQuery('.fieldBlockContainer').each(function () {
                thisInstance.modifyBlockContent(this, 'start');
            });

            jQuery('.block').each(function () {
                let blockid = jQuery(this).data('blockid');

                if (typeof blockid != 'undefined') {
                    thisInstance.modifyBlockContent(this, 'start');
                }
            });
            let new_fields = [];
            thisInstance.modulefields = response['fields'];
            thisInstance.nummodulefields = response['numfields'];
            let numhidefields = response['numhidefields'];
            //thisInstance.setDebugText("HideOrShowFields Start view:" + thisInstance.forView);

            if (numhidefields > 0) {
                let hidefields = response['hidefields'];

                for (let i = 0; i < numhidefields; i++) {
                    let fieldName = hidefields[i];

                    if ('Detail' === thisInstance.forView) {
                        let link_key = this.getLinkKey();

                        if ('LBL_RECORD_DETAILS' === link_key || 'undefined' == typeof link_key) {
                            jQuery("#" + module + "_detailView_fieldLabel_" + fieldName).hide();
                            jQuery("#" + module + "_detailView_fieldValue_" + fieldName).hide();
                        } else if ('LBL_RECORD_SUMMARY' === link_key) {
                            let fieldElement = jQuery("#" + module + "_detailSummary_fieldName_" + fieldName);

                            if (fieldElement.length > 0) {
                                this.modifyTRLine(fieldElement, "hide");
                            } else if ('Assets' === module) {
                                jQuery("#" + module + "_detailView_fieldLabel_" + fieldName).hide();
                                jQuery("#" + module + "_detailView_fieldValue_" + fieldName).hide();
                            }
                        }

                        if ('imagename' === fieldName) {
                            jQuery("#imageContainer").closest('tr').find('td').hide();
                        }
                    } else {
                        //thisInstance.setDebugText('hide fieldname ' + fieldname + ' start ');
                        let fieldElement = thisInstance.getFieldElementByName(fieldName);

                        if (fieldElement.length > 0) {
                            //thisInstance.setDebugText('hide fieldname ' + fieldname + ' continue');
                            this.disableField(fieldElement, true);
                            this.modifyTRLine(fieldElement, "hide");
                        }
                    }
                }
            }
            let numshowreadonlyfields = response['numshowreadonlyfields'];
            let numhideinblock = response['numhideinblock'];
            let numshowfields = response['numshowfields'];

            if (numshowfields > 0) {
                let showfields = response['showfields'];

                for (let i = 0; i < numshowfields; i++) {
                    let fieldElement = this.getFieldElementByName(showfields[i]);
                    this.disableField(fieldElement, false);
                    is_modified = this.modifyTRLine(fieldElement, 'show');

                    if (is_modified) {
                        fieldtype = fieldElement.attr('type');

                        if (typeof fieldtype == 'undefined') {
                            fieldtype = "";
                        }

                        if (fieldtype != "file") {

                            if (numshowreadonlyfields > 0 || numhideinblock > 0) {

                                if (jQuery.inArray(showfields[i], response['showreadonlyfields']) == -1) {
                                    new_fields.push(showfields[i]);
                                }
                            } else {
                                new_fields.push(showfields[i]);
                            }
                        }
                    }

                    if (-1 === jQuery.inArray(showfields[i], response['showmanfields'])) {
                        let fieldElement = thisInstance.getFieldElementByName(showfields[i]);
                        let controlMan = fieldElement.closest('tr').find('.redColor');

                        if (controlMan) {

                            if (controlMan.length > 0) {
                                is_modified = thisInstance.modifyValidationToElement(showfields[i], 'hide');
                            }
                        }
                    }
                }
            }

            if (numshowreadonlyfields > 0) {
                let showreadonlyfields = response['showreadonlyfields'];

                for (let i = 0; i < numshowreadonlyfields; i++) {
                    let fieldElement = this.getFieldElementByName(showreadonlyfields[i]);
                    this.disableField(fieldElement, false);
                    this.readonlyField(showreadonlyfields[i], fieldElement, true);
                }
            }
            let numhidereadonlyfields = response['numhidereadonlyfields'];

            if (numhidereadonlyfields > 0) {
                let hidereadonlyfields = response['hidereadonlyfields'];

                for (let i = 0; i < numhidereadonlyfields; i++) {
                    let fieldElement = this.getFieldElementByName(hidereadonlyfields[i]);
                    this.readonlyField(hidereadonlyfields[i], fieldElement, false);
                }
            }

            if ('Edit' === thisInstance.forView) {
                let numshowmanfields = response['numshowmanfields'];

                if (numshowmanfields > 0) {
                    let showmanfields = response['showmanfields'];

                    for (let i = 0; i < numshowmanfields; i++) {
                        is_modified = thisInstance.modifyValidationToElement(showmanfields[i], 'show');

                        if (is_modified) {
                            let fieldElement = this.getFieldElementByName(showmanfields[i]);
                            this.disableField(fieldElement, false); //aaaaaaaaaaaaaaa
                            let is_td_mofified = this.modifyTRLine(fieldElement, "show");

                            if (numhideinblock > 0) {

                                if (-1 === jQuery.inArray(showmanfields[i], response['hideinblock'])) {
                                    new_fields.push(showmanfields[i]);
                                }
                            } else {
                                new_fields.push(showmanfields[i]);
                            }
                        }
                    }
                }
                let numhidemanfields = response['numhidemanfields'];

                if (numhidemanfields > 0) {
                    let hidemanfields = response['hidemanfields'];

                    for (let i = 0; i < numhidemanfields; i++) {
                        is_modified = thisInstance.modifyValidationToElement(hidemanfields[i], 'hide');
                    }
                }
            }
            let numshowinpopup = response['numshowinpopup'];
            let popup_fields = [];

            if ('Edit' !== thisInstance.forView) {
                popup_fields = new_fields;
            }

            if (numshowinpopup > 0) {
                let showinpopup = response['showinpopup'];

                for (let i = 0; i < numshowinpopup; i++) {

                    if (jQuery.inArray(showinpopup[i], popup_fields) === -1 && jQuery.inArray(showinpopup[i], response['showreadonlyfields']) == -1) {
                        popup_fields.push(showinpopup[i]);
                    }
                }
            }

            if (response['hideinvblock'] !== '') {
                let totalProductCount = jQuery('input[name="total"]');

                if (totalProductCount.length > 0) {
                    let invElement = totalProductCount.next('div[name="editContent"]');
                } else {
                    let invElement = jQuery(".details.block");
                }

                if (response['hideinvblock'] === '1') {
                    invElement.addClass('hide');
                } else if (response['hideinvblock'] === '0') {
                    invElement.removeClass('hide');
                }
            }

            if (popup_fields.length > 0 && !thisInstance.firstLoad) {
                thisInstance.createPopup(popup_fields, response);
            }
            //thisInstance.setDebugText("HideOrShowFields End");
        }

        jQuery('.fieldBlockContainer').each(function () {
            thisInstance.modifyBlockContent(this, 'end');
        });

        jQuery('.block').each(function () {
            let blockid = jQuery(this).data('blockid');

            if (typeof blockid != 'undefined') {
                thisInstance.modifyBlockContent(this, 'end');
            }
        });
    },
    modifyValidationToElement: function (fieldName, type) {
        let self = this,
            fieldElement = self.getFieldElementByName(fieldName),
            is_modified = false;

        if (fieldElement.length > 0) {
            let tdFieldValue = fieldElement.parents('td'),
                tdFieldLabel = tdFieldValue.prev('td');

            if ('hide' === type) {
                tdFieldLabel.find('.redColor').hide();
                self.addValidationToElement(fieldName, fieldElement, false);

            } else if ('show' === type) {
                let RedSpan = tdFieldLabel.find('.redColor');

                if (RedSpan.length > 0) {

                    if (RedSpan.is(':hidden')) {
                        is_modified = true;
                        RedSpan.show();
                    }
                } else {
                    tdFieldLabel.append(' <span class="redColor">*</span>');
                    is_modified = true;
                }

                self.addValidationToElement(fieldName, fieldElement, true);
                self.readonlyField(fieldName, fieldElement, false);
            }
        }

        return is_modified;
    },
    modifyBlockContent: function (self, type) {
        let thisInstance = this;
        let elementTable = jQuery(self);

        if (type == "start") {
            elementTable.show();
            elementTable.next("br").show();
        } else {
            let is_hidden = false;
            let allTD = jQuery(self).find('tbody > tr > td').length;
            let hiddenTD = jQuery(self).find('tbody > tr').find("td:hidden").length;
            let is_two = allTD - hiddenTD;

            if (is_two == "2") {
                let is_blank = true;
                jQuery(self).find('tbody > tr').find("td:visible").each(function () {
                    let contentTD = jQuery(this).html();
                    if (contentTD != "") {
                        is_blank = false;
                    }
                });

                if (is_blank == true) {
                    allTD = hiddenTD;
                }
            }

            if (thisInstance.forView == "Detail" && allTD == hiddenTD) {
                jQuery(self).find(".blockToggle:visible").each(function () {
                    let hidden_type = jQuery(self).data("mode");
                    if (hidden_type == "hide") is_hidden = true;
                })
            }

            if (allTD == hiddenTD) {

                if (jQuery(self).is(":visible") == false) {
                    is_hidden = true;
                }

                if (!is_hidden) {
                    elementTable.hide();
                    elementTable.next("br").hide();
                }
            } else {
                elementTable.show();
                elementTable.next("br").show();
            }
        }
    },
    disableField: function (fieldElement, disabled_value) {

        if (fieldElement.hasClass("nodisablefield") && disabled_value == true) {
            return;
        }
        fieldElement.prop("disabled", disabled_value);
    },
    readonlyField: function (fieldName, fieldElement, disabled_value) {
        let thisInstance = this;

        if (fieldElement.hasClass("noreadonlyfield") && disabled_value == true) {
            return;
        }
        let fieldtype = "";

        if (fieldElement.hasClass("dateField")) {
            fieldtype = "date";
            let contextDivFieldElement = fieldElement.closest('div');

            if (disabled_value) {
                fieldElement.addClass("dateFieldDisabled");
                fieldElement.unbind();
            } else {
                fieldElement.removeClass("dateFieldDisabled");
                fieldElement.bind();
            }
        } else if (fieldElement.is("select")) {

            if (fieldElement.hasClass("select2")) {
                this.disableField(fieldElement, disabled_value);
                app.showSelect2ElementView(fieldElement);
                fieldElement.attr('disabled', false);
            } else {
                fieldElement.attr('disabled', disabled_value).trigger("liszt:updated");
                fieldElement.attr('disabled', false);
            }
        } else {
            let fieldtype = fieldElement.data('fieldtype');

            if (typeof fieldtype == "undefined") {
                fieldtype = fieldElement.attr('type');
            }

            if (fieldtype == "hidden") {

                if (fieldElement.hasClass('sourceField')) {
                    let controlElement = fieldElement.closest('td').find("[name='" + fieldName + "_display']");

                    if (controlElement.length > 0) {
                        fieldElement = controlElement;
                        fieldtype = "reference";
                    }
                }
            }

            if (fieldtype == "file") {
                let fileDeleteElements = fieldElement.closest('td').find('.fileDelete');

                if (disabled_value) {
                    fieldElement.hide();
                    fileDeleteElements.hide();
                } else {
                    fieldElement.show();
                    fileDeleteElements.show();
                }
            } else {
                let select2Element = jQuery("[name='" + fieldElement.attr("name") + "[]']");

                if (typeof select2Element != "undefined") {
                    if (select2Element.hasClass("select2")) {
                        this.disableField(select2Element, disabled_value);
                        app.showSelect2ElementView(select2Element);
                        select2Element.attr('disabled', false);
                    }
                }
            }
        }

        if (disabled_value) {
            let copyElement,
                newFieldElement = jQuery('.fieldname_' + fieldName + '_readonly');

            if (fieldElement.length > 1) {
                copyElement = jQuery('#' + thisInstance.forModule + '_editView_fieldName_' + fieldName);
            } else if (fieldtype == "reference") {
                copyElement = fieldElement.closest('td').find("[name='" + fieldName + "_display']");
            } else {
                copyElement = fieldElement;
            }

            if (newFieldElement.length === 0 && copyElement.length != 0) {
                newFieldElement = copyElement.clone();
                newFieldElement.insertAfter(copyElement);
                newFieldElement.attr('id', '');
                newFieldElement.attr('name', '');
                newFieldElement.addClass('fieldname_' + fieldName + '_readonly');
                newFieldElement.prop('disabled', true);
                fieldElement.hide();
            }

            if (fieldtype == "reference") {
                fieldElement.closest('td').find('.cursorPointer').hide();
                fieldElement.closest('td').find('.clearReferenceSelection').addClass('hide');
            }
            fieldElement.closest('td').find('.action').hide();
            thisInstance.isreadonlyfield.push(fieldName);
        } else {
            jQuery('.fieldname_' + fieldName + '_readonly').remove();
            fieldElement.show();

            if (fieldtype == "reference") {
                fieldElement.closest('td').find('.cursorPointer').show();

                if (fieldElement.val() != "") {
                    fieldElement.closest('td').find('.clearReferenceSelection').removeClass('hide');
                }
            }
            let k = jQuery.inArray(fieldName, thisInstance.isreadonlyfield);

            if (k > -1) {
                thisInstance.isreadonlyfield.splice(k, 1);
            }

            fieldElement.closest('td').find('.action').show();
        }

        fieldElement.prop("readonly", disabled_value);
    },
    getFieldElementByName: function (fieldName) {
        let thisInstance = this,
            container = thisInstance.getContainer(),
            fieldElement;

        if (container) {
            fieldElement = container.find("[name='" + fieldName + "[]']");

            if (!fieldElement.length) {
                fieldElement = container.find("[name='" + fieldName + "']");
            }
        } else {
            fieldElement = jQuery("[name='" + fieldName + "[]']");

            if (!fieldElement.length) {
                fieldElement = jQuery("[name='" + fieldName + "']");
            }
        }

        if (!fieldElement.length) {
            fieldElement = jQuery("#" + thisInstance.forModule + "_detailView_fieldValue_" + fieldName).find('span');
        }

        return fieldElement;
    },
    modifyTRLine: function (fieldElement, type) {
        let is_modified = false,
            ClosestTDContent;

        if (fieldElement.length > 0) {
            let ClosestTABLE = fieldElement.closest('table');
            let ClosestTR = fieldElement.closest('tr');
            let ClosestTD = fieldElement.closest('td');

            if (ClosestTD.is(':hidden')) {

                if ('show' === type) {
                    is_modified = true;
                }
            } else {

                if ('hide' === type) {
                    is_modified = true;
                }
            }

            if ('show' === type) {

                if (ClosestTABLE.is(':hidden')) {
                    ClosestTABLE.show();
                    ClosestTABLE.next("br").show();
                }
                ClosestTD.attr('display', '');
                ClosestTD.show();
            } else {
                ClosestTD.hide();
            }
            ClosestTDContent = ClosestTD.html();

            for (let c = 0; c < 2; c++) {
                let k = c * 2;
                let TDContent = ClosestTR.find('td').eq((k + 1)).html();

                if (ClosestTDContent == TDContent) {
                    let TDElement = ClosestTR.find('td').eq(k);

                    if ('show' === type) {
                        TDElement.attr('display', '');
                        TDElement.show();
                    } else {
                        TDElement.hide();
                    }
                }
            }
        }

        return is_modified;
    },
    addValidationToElement: function (elementName, fieldElement, is_mandatory) {
        let thisInstance = this,
            is_select2 = false,
            actualize_selectbox = false,
            fieldName = fieldElement.data('fieldname'),
            fieldtype = fieldElement.data('fieldtype');

        if (!fieldName) {
            fieldName = fieldElement.attr('name');
        }

        if (!fieldtype) {
            fieldtype = fieldElement.attr('type');
        }

        let fieldMandatory = fieldElement.data('rule-required');

        if ('hidden' === fieldtype) {

            if (fieldElement.hasClass('sourceField')) {
                let controlElement = fieldElement.closest('td').find("[name='" + fieldName + "_display']");

                if (controlElement.length > 0) {
                    fieldElement = controlElement;
                    fieldtype = 'reference';
                }
            }
        }

        if ('file' === fieldtype) {
            let ClosestTD = fieldElement.closest('td');
            let uploadedFileNameElement = ClosestTD.find(".uploadedFileName");

            if (uploadedFileNameElement.not(":empty") && is_mandatory) {
                let totalInputElements = uploadedFileNameElement.find("input");

                if (totalInputElements.length > 0) {
                    let inputElements = uploadedFileNameElement.find("input[value='1']");
                    if (inputElements.length > 0) {
                        is_mandatory = false;
                    }
                } else {
                    is_mandatory = false;
                }
            }

            if ((fieldMandatory || thisInstance.control_man_file[fieldName]) && !is_mandatory) {
                thisInstance.control_man_file[fieldName] = true;
            } else {
                thisInstance.control_man_file[fieldName] = false;
            }
        } else if ('multipicklist' === fieldtype || 'picklist' === fieldtype) {
            actualize_selectbox = true;
        }
        //thisInstance.setDebugText("addValidationToElement " + fieldName);

        if (fieldMandatory != is_mandatory) {
            //thisInstance.setDebugText("modifi mandatory " + fieldName);
            fieldElement.data('rule-required', is_mandatory);
            fieldElement.attr('aria-required', is_mandatory);

            if (fieldtype == "reference") {
                fieldElement.data('rule-reference_required', is_mandatory);
            }

            if (fieldElement.hasClass("select2")) {
                is_select2 = true;
                actualize_selectbox = true;
            }

            if (actualize_selectbox) {

                if (is_select2 == true) {
                    app.showSelect2ElementView(fieldElement);
                } else {
                    save_form = thisInstance.getForm();
                    app.destroyChosenElement(fieldElement);
                    app.changeSelectElementView(save_form);
                }
            }
        } else {
            //thisInstance.setDebugText("no modifi mandatory " + fieldName);
        }
    },

    getContainer: function () {
        return this.dfContainer;
    },

    setContainer: function (element) {
        this.dfContainer = element;

        return this;
    },

    setDebugText: function (text) {
        //if (window.console && this.debug) console.log('[ITS4YouDynamicFields] ', text);
    },

    updateFields: function (load_form, save_form, type) {
        let thisInstance = this;
        let params = load_form.serializeFormData();

        if ('Edit' === thisInstance.forView) {

            for (let fieldName in params) {
                let is_select2 = false;
                let loadFieldElement = load_form.find("[name='" + fieldName + "']");
                let fieldElement = save_form.find("[name='" + fieldName + "']");

                if (fieldElement.length > 0) {

                    if (fieldElement.is('select')) {
                        let choicesSaveList = fieldElement.find('option');

                        if (fieldElement.hasClass("select2")) {
                            is_select2 = true;
                        }
                        choicesSaveList.each(function (choiceSaveListIndex, saveElement) {
                            let SaveOptionElement = jQuery(saveElement);

                            if (loadFieldElement.find('option[value="' + SaveOptionElement.val() + '"]').is(':selected')) {
                                SaveOptionElement.attr("selected", "selected");
                            } else {
                                SaveOptionElement.removeAttr("selected");
                            }
                        });
                        fieldElement.trigger("liszt:updated");

                        if (is_select2 == true) {
                            app.showSelect2ElementView(fieldElement);
                        } else {
                            app.destroyChosenElement(fieldElement);
                            app.changeSelectElementView(save_form);
                        }
                    } else {

                        if (fieldElement.length > 1) {
                            fieldElement.each(function (i, obj) {
                                let newFieldElement = jQuery(obj);
                                thisInstance.setFieldVal(fieldName, newFieldElement, loadFieldElement, params[fieldName]);
                            });
                        } else {
                            thisInstance.setFieldVal(fieldName, fieldElement, loadFieldElement, params[fieldName]);
                        }
                    }
                }
            }
        } else {

            if ('save' === type) {
                let postData = {
                    "module": thisInstance.forModule,
                    "record": thisInstance.forRecord,
                    "action": "SaveAjax"
                };
                postData = jQuery.extend(params, postData);
                app.request.post({data: postData}).then(function (err, data) {

                    if (err === null) {

                        if (!data.error) {
                            jQuery('.vt-notification').remove();
                            app.event.trigger("post.its4you.DF.QuickEditForm.save", data, params);
                            app.helper.hideModal();
                            app.helper.showSuccessNotification({"message": app.vtranslate('JS_RECORD_UPDATED')});
                            window.location.reload();
                        } else {
                            app.helper.showErrorNotification({"message": data.error});
                        }
                    } else {
                        app.event.trigger("post.its4you.DF.QuickEditForm.save", data, params);
                        app.helper.showErrorNotification({"message": err});
                    }
                });
            }
        }
    },

    setFieldVal: function (fieldName, fieldElement, loadFieldElement, newval) {
        let fieldtype = fieldElement.data('fieldtype');

        if (typeof fieldtype == "undefined") {
            fieldtype = fieldElement.attr('type');
        }

        if (fieldtype == "boolean" || fieldtype == "checkbox") {

            if (loadFieldElement.is(':checked')) {
                fieldElement.attr('checked', 'checked');
            } else {
                fieldElement.removeAttr('checked');
            }
        } else {
            fieldElement.val(newval);
        }
    },
    updateSelectFields: function (load_form, save_form) {
        let params = load_form.serializeFormData();

        for (let fieldName in params) {
            let loadFieldElement = load_form.find("[name='" + fieldName + "']");
            let fieldElement = save_form.find("[name='" + fieldName + "']");

            if (fieldElement.length > 0) {

                if (fieldElement.is('select')) {
                    let load_options = loadFieldElement.html();
                    fieldElement.html(load_options);
                } else {
                    fieldElement.val(params[fieldName]);
                }
            }
        }

        return save_form;
    },
    createPopup: function (new_fields, response, callBackFunction) {
        let thisInstance = this;
        let module = app.getModuleName();

        if (typeof callBackFunction == 'function') {
            thisInstance.cf = callBackFunction;
        } else {
            thisInstance.cf = false;
        }

        let postData = {
            "module": "ITS4YouDynamicFields",
            "its4you_for_module": thisInstance.forModule,
            "its4you_for_view": thisInstance.forView,
            "its4you_for_record": thisInstance.forRecord,
            "view": "showFieldsAjax",
            "show_fields": JSON.stringify(new_fields),
            "showmanfields": JSON.stringify(response['showmanfields']),
            "hidemanfields": JSON.stringify(response['hidemanfields']),
        };
        //this.setDebugText("createPopup");

        let str = jQuery.param(postData);
        //thisInstance.setDebugText('createPopup');
        //thisInstance.setDebugText(str);

        app.request.post({data: postData}).then(
            function (error, result) {

                if (!error) {
                    let callBackFunction = function (data, save_form) {
                        let form = data.find('.recordEditView');

                        form.submit(function (e) {
                            e.preventDefault();
                        });

                        let params = {
                            submitHandler: function (form) {
                                let load_form = jQuery(form);

                                thisInstance.updateFields(load_form, save_form, 'save');
                                app.hideModalWindow();
                            }
                        };
                        form.vtValidate(params);

                        if (jQuery('.QuickEditScroll').height() > 400) {
                            app.showScrollBar(jQuery('.QuickEditScroll'), {
                                height: '400px',
                                railVisible: true,
                                alwaysVisible: true
                            });
                        }
                    };
                    let load_form = thisInstance.getForm();
                    let edit_data = thisInstance.updateSelectFields(load_form, jQuery(result));

                    app.helper.showModal(edit_data, {
                        'cb': function (modalContainer) {
                            modalContainer.find("a[name='copyAddress']").closest('div').hide();
                            thisInstance.updateFields(load_form, modalContainer, 'load');

                            modalContainer.on('click', '.relatedPopup', function (e) {
                                let editViewObj = new Vtiger_Edit_Js();
                                editViewObj.openPopUp(e);
                                return false;
                            });

                            if (typeof callBackFunction == 'function') {
                                callBackFunction(modalContainer, load_form);
                            }
                        }
                    });
                }
            },
            function (error) {
            })

    },

    getForm: function () {

        if (this.formElement === false) {
            this.setForm(jQuery('#EditView'));
        }

        return this.formElement;
    },

    setForm: function (element) {
        this.formElement = element;

        return this;
    },

    getLinkKey: function () {
        return jQuery('div.related-tabs').find('li.active').data('link-key');
    },
});
