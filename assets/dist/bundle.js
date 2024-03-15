/******/ var __webpack_modules__ = ({

/***/ "./src/sampleData.ts":
/*!***************************!*\
  !*** ./src/sampleData.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stripeList: () => (/* binding */ stripeList)
/* harmony export */ });
const stripeList = {
    "object": "list",
    "data": [
        {
            "id": "pi_2On6sU7HNYdnrRlv08gdQmRW",
            "object": "payment_intent",
            "amount": 210023,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6sU7ENs46345345",
                        "object": "charge",
                        "amount": 210023,
                        "amount_captured": 210023,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "nothing@yahoo.com",
                            "name": "Super One force",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725963,
                        "currency": "usd",
                        "customer": "cus_",
                        "description": "stock package pack198",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {},
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6sU234234234",
                        "payment_method": "pm_1OjSol23423423442",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "JPMORGAN CHASE BANK, NA",
                                "fingerprint": "asdfsfsfsd",
                                "last4": "3072",
                                "routing_number": "sfsdfsdfs"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "nothing@yahoo.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6sU7ENYdn23423423423423/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6sU7HNYdnrRlv08gdQmRW"
            },
            "client_secret": "pi_2On6sU7HNYdnrRlv08gdQmRW_secret_mi91s3ThhlbiFNYtJZkw7aeuj",
            "confirmation_method": "automatic",
            "created": 1708725958,
            "currency": "usd",
            "customer": "cus_",
            "description": "stock package pack198",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6sU7ENYdn23423423423423",
            "livemode": true,
            "metadata": {},
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0OjSol7ENYdnrElvxSEFqCs3",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "nothing@yahoo.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        },
        {
            "id": "pi_2On6rP7ENY234234234223",
            "object": "pa345345345",
            "amount": 459142,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6rP7ENYdnrElv34534534534",
                        "object": "charge",
                        "amount": 459142,
                        "amount_captured": 459142,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "nothing@nothing.com",
                            "name": "high times life",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725908,
                        "currency": "usd",
                        "customer": "cus_OfpNBU2342342342",
                        "description": "stock package CST422199",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {},
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6rP7ENY234234234223",
                        "payment_method": "pm_0NsTld7E345345345",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "LEFT RIGHT CREDIT UNION INC",
                                "fingerprint": "sdfsdfsdfsd",
                                "last4": "7164",
                                "routing_number": "24427435345634"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "nothing@nothing.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6rP7ENYdnrElv34534534534/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6rP7ENY23423345345345",
                "client_secret": "pi_2On6rP7ENY234234234223_secret_coB4G9HHl1eq5B17Q2C8CSvIr"
            },
            "confirmation_method": 345345345,
            "created": 1708725891,
            "currency": "usd",
            "customer": "cus_OfpNBU2342342342",
            "description": "stock package CST422199",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6rP7ENYdnrElv34534534534",
            "livemode": true,
            "metadata": {},
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0NsTld7ENYdnrElvZnMTXy4p",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "nothing@nothing.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        },
        {
            "id": "pi_2On6qz7ENYdnrElv0iAjkQXG",
            "object": "payment_intent",
            "amount": 353001,
            "amount_capturable": 0,
            "amount_details": {
                "tip": {}
            },
            "amount_received": 0,
            "application": null,
            "application_fee_amount": null,
            "automatic_payment_methods": null,
            "canceled_at": null,
            "cancellation_reason": null,
            "capture_method": "automatic",
            "charges": {
                "object": "list",
                "data": [
                    {
                        "id": "py_2On6qz7ENYdnrElv03EQXijt",
                        "object": "charge",
                        "amount": 353001,
                        "amount_captured": 353001,
                        "amount_refunded": 0,
                        "application": null,
                        "application_fee": null,
                        "application_fee_amount": null,
                        "balance_transaction": null,
                        "billing_details": {
                            "address": {
                                "city": null,
                                "country": null,
                                "line1": null,
                                "line2": null,
                                "postal_code": null,
                                "state": null
                            },
                            "email": "goonta1621@gmail.com",
                            "name": "Imodern LLC",
                            "phone": null
                        },
                        "calculated_statement_descriptor": null,
                        "captured": true,
                        "created": 1708725871,
                        "currency": "usd",
                        "customer": "cus_OPju332LNrDqWj",
                        "description": "stock package CST422875",
                        "destination": null,
                        "dispute": null,
                        "disputed": false,
                        "failure_balance_transaction": null,
                        "failure_code": null,
                        "failure_message": null,
                        "fraud_details": {},
                        "invoice": null,
                        "livemode": true,
                        "metadata": {
                            "fullOrderId": "CST422875",
                            "orderId": "422875"
                        },
                        "on_behalf_of": null,
                        "order": null,
                        "outcome": null,
                        "paid": false,
                        "payment_intent": "pi_2On6qz7ENYdnrElv0iAjkQXG",
                        "payment_method": "pm_0Ojnzp7ENYdnrElvehXEBmJk",
                        "payment_method_details": {
                            "type": "us_bank_account",
                            "us_bank_account": {
                                "account_holder_type": "individual",
                                "account_type": "checking",
                                "bank_name": "BANK OF AMERICA, N.A.",
                                "fingerprint": "NLhg8mD0tp0uM97N",
                                "last4": "2606",
                                "routing_number": "011200365"
                            }
                        },
                        "radar_options": {},
                        "receipt_email": "goonta1621@gmail.com",
                        "receipt_number": null,
                        "receipt_url": null,
                        "refunded": false,
                        "refunds": {
                            "object": "list",
                            "data": [],
                            "has_more": false,
                            "total_count": 0,
                            "url": "/v1/charges/py_2On6qz7ENYdnrElv03EQXijt/refunds"
                        },
                        "review": null,
                        "shipping": null,
                        "source": null,
                        "source_transfer": null,
                        "statement_descriptor": null,
                        "statement_descriptor_suffix": null,
                        "status": "pending",
                        "transfer_data": null,
                        "transfer_group": null
                    }
                ],
                "has_more": false,
                "total_count": 1,
                "url": "/v1/charges?payment_intent=pi_2On6qz7ENYdnrElv0iAjkQXG"
            },
            "client_secret": "pi_2On6qz7ENYdnrElv0iAjkQXG_secret_HJlGWDupUqDO2L0BrjfHuRLC2",
            "confirmation_method": "automatic",
            "created": 1708725865,
            "currency": "usd",
            "customer": "cus_OPju332LNrDqWj",
            "description": "stock package CST422875",
            "invoice": null,
            "last_payment_error": null,
            "latest_charge": "py_2On6qz7ENYdnrElv03EQXijt",
            "livemode": true,
            "metadata": {
                "fullOrderId": "CST422875",
                "orderId": "422875"
            },
            "next_action": null,
            "on_behalf_of": null,
            "payment_method": "pm_0Ojnzp7ENYdnrElvehXEBmJk",
            "payment_method_configuration_details": null,
            "payment_method_options": {
                "us_bank_account": {
                    "mandate_options": {},
                    "verification_method": "automatic"
                }
            },
            "payment_method_types": [
                "us_bank_account"
            ],
            "processing": null,
            "receipt_email": "goonta1621@gmail.com",
            "review": null,
            "setup_future_usage": null,
            "shipping": null,
            "source": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "processing",
            "transfer_data": null,
            "transfer_group": null
        }
    ],
    "has_more": true,
    "url": "/v1/payment_intents"
};


/***/ }),

/***/ "../../taggedjs/main/ts/ElementTargetEvent.interface.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/ElementTargetEvent.interface.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../taggedjs/main/ts/Subject.ts":
/*!*****************************************!*\
  !*** ../../taggedjs/main/ts/Subject.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
class Subject {
    value;
    isSubject = true;
    subscribers = [];
    // unsubcount = 0 // 🔬 testing
    constructor(value) {
        this.value = value;
    }
    subscribe(callback) {
        this.subscribers.push(callback);
        SubjectClass.globalSubs.push(callback); // 🔬 testing
        const countSubject = SubjectClass.globalSubCount$;
        SubjectClass.globalSubCount$.set(countSubject.value + 1);
        const unsubscribe = () => {
            unsubscribe.unsubscribe();
        };
        // Return a function to unsubscribe from the BehaviorSubject
        unsubscribe.unsubscribe = () => {
            removeSubFromArray(this.subscribers, callback);
            removeSubFromArray(SubjectClass.globalSubs, callback); // 🔬 testing
            SubjectClass.globalSubCount$.set(countSubject.value - 1);
            // any double unsubscribes will be ignored
            unsubscribe.unsubscribe = () => undefined;
        };
        return unsubscribe;
    }
    set(value) {
        this.value = value;
        // Notify all subscribers with the new value
        this.subscribers.forEach((callback) => {
            callback.value = value;
            callback(value);
        });
    }
    next = this.set;
}
function removeSubFromArray(subscribers, callback) {
    const index = subscribers.indexOf(callback);
    if (index !== -1) {
        subscribers.splice(index, 1);
    }
}
const SubjectClass = Subject;
SubjectClass.globalSubs = []; // 🔬 for testing
SubjectClass.globalSubCount$ = new Subject(); // for ease of debugging
SubjectClass.globalSubCount$.set(0);


/***/ }),

/***/ "../../taggedjs/main/ts/Tag.class.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/Tag.class.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayValueNeverSet: () => (/* binding */ ArrayValueNeverSet),
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   escapeSearch: () => (/* binding */ escapeSearch),
/* harmony export */   escapeVariable: () => (/* binding */ escapeVariable),
/* harmony export */   variablePrefix: () => (/* binding */ variablePrefix)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "../../taggedjs/main/ts/render.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolateElement */ "../../taggedjs/main/ts/interpolateElement.ts");
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolateTemplate.ts");
/* harmony import */ var _elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementDestroyCheck.function */ "../../taggedjs/main/ts/elementDestroyCheck.function.ts");
/* harmony import */ var _updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateExistingValue.function */ "../../taggedjs/main/ts/updateExistingValue.function.ts");
/* harmony import */ var _processNewValue_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processNewValue.function */ "../../taggedjs/main/ts/processNewValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");








const variablePrefix = '__tagvar';
const escapeVariable = '--' + variablePrefix + '--';
const prefixSearch = new RegExp(variablePrefix, 'g');
const escapeSearch = new RegExp(escapeVariable, 'g');
class ArrayValueNeverSet {
    isArrayValueNeverSet = true;
}
class Tag {
    strings;
    values;
    isTag = true;
    clones = []; // elements on document. Needed at destroy process to know what to destroy
    cloneSubs = []; // subscriptions created by clones
    children = []; // tags on me
    tagSupport;
    // only present when a child of a tag
    ownerTag;
    // insertBefore?: Element
    appElement; // only seen on this.getAppElement().appElement
    // present only when an array. Populated by this.key()
    arrayValue = new ArrayValueNeverSet();
    constructor(strings, values) {
        this.strings = strings;
        this.values = values;
    }
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue) {
        this.arrayValue = arrayValue;
        return this;
    }
    async destroy(options = {
        stagger: 0,
        byParent: false, // Only destroy clones of direct children
    }) {
        // the isComponent check maybe able to be removed
        const isComponent = this.tagSupport ? true : false;
        if (isComponent) {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeDestroy)(this.tagSupport, this);
        }
        this.destroySubscriptions();
        if (this.ownerTag) {
            this.ownerTag.children = this.ownerTag.children.filter(child => child !== this);
        }
        if (!options.byParent) {
            const { stagger, promise } = this.destroyClones(options);
            options.stagger = stagger;
            if (promise) {
                await promise;
            }
        }
        else {
            this.destroyClones();
        }
        const promises = this.children.map(kid => kid.destroy({ stagger: 0, byParent: true }));
        this.children.length = 0;
        await Promise.all(promises);
        return options.stagger;
    }
    destroySubscriptions() {
        this.cloneSubs.forEach(cloneSub => cloneSub.unsubscribe());
        this.cloneSubs.length = 0;
    }
    destroyClones({ stagger } = {
        stagger: 0,
    }) {
        //const promises = this.clones.reverse().map(
        const promises = this.clones.map(clone => this.checkCloneRemoval(clone, stagger)).filter(x => x); // only return promises
        this.clones.length = 0; // tag maybe used for something else
        if (promises.length) {
            return { promise: Promise.all(promises), stagger };
        }
        return { stagger };
    }
    checkCloneRemoval(clone, stagger) {
        let promise;
        const customElm = clone;
        if (customElm.ondestroy) {
            promise = (0,_elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__.elementDestroyCheck)(customElm, stagger);
        }
        const next = () => {
            clone.parentNode?.removeChild(clone);
            const ownerTag = this.ownerTag;
            if (ownerTag) {
                // Sometimes my clones were first registered to my owner, remove them from owner
                ownerTag.clones = ownerTag.clones.filter(compareClone => compareClone !== clone);
            }
        };
        if (promise instanceof Promise) {
            return promise.then(next);
        }
        else {
            next();
        }
        return promise;
    }
    updateByTag(tag) {
        this.updateConfig(tag.strings, tag.values);
        this.tagSupport.templater = tag.tagSupport.templater;
        this.tagSupport.propsConfig = { ...tag.tagSupport.propsConfig };
        this.tagSupport.newest = tag;
        this.tagSupport.templater.newest = tag;
    }
    lastTemplateString = undefined; // used to compare templates for updates
    updateConfig(strings, values) {
        this.strings = strings;
        this.updateValues(values);
    }
    getTemplate() {
        const string = this.strings.map((string, index) => {
            const safeString = string.replace(prefixSearch, escapeVariable);
            const endString = safeString + (this.values.length > index ? `{${variablePrefix}${index}}` : '');
            // const trimString = index === 0 || index === this.strings.length-1 ? endString.trim() : endString
            const trimString = endString.replace(/>\s*/g, '>').replace(/\s*</g, '<');
            return trimString;
        }).join('');
        const interpolation = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateString)(string);
        this.lastTemplateString = interpolation.string;
        return {
            interpolation,
            // string,
            string: interpolation.string,
            strings: this.strings,
            values: this.values,
            context: this.tagSupport?.memory.context || {},
        };
    }
    isLikeTag(tag) {
        const { string } = tag.getTemplate();
        // TODO: most likely remove?
        if (!this.lastTemplateString) {
            throw new Error('no template here');
        }
        const stringMatched = string === this.lastTemplateString;
        if (!stringMatched || tag.values.length !== this.values.length) {
            return false;
        }
        const allVarsMatch = tag.values.every((value, index) => {
            const compareTo = this.values[index];
            const isFunctions = value instanceof Function && compareTo instanceof Function;
            if (isFunctions) {
                const stringMatch = value.toString() === compareTo.toString();
                if (stringMatch) {
                    return true;
                }
                return false;
            }
            return true;
        });
        if (allVarsMatch) {
            return true;
        }
        return false;
    }
    update() {
        return this.updateContext(this.tagSupport.memory.context);
    }
    updateValues(values) {
        this.values = values;
        return this.updateContext(this.tagSupport.memory.context);
    }
    updateContext(context) {
        const seenContext = [];
        this.strings.map((_string, index) => {
            const variableName = variablePrefix + index;
            const hasValue = this.values.length > index;
            const value = this.values[index];
            // is something already there?
            const existing = variableName in context;
            seenContext.push(variableName);
            if (existing) {
                const existing = context[variableName];
                return (0,_updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingValue)(existing, value, this);
            }
            // 🆕 First time values below
            (0,_processNewValue_function__WEBPACK_IMPORTED_MODULE_6__.processNewValue)(hasValue, value, context, variableName, this);
        });
        // Support reduction in context
        Object.entries(context).forEach(([key, subject]) => {
            if (seenContext.includes(key)) {
                return;
            }
            throw new Error('we here');
            const destroyed = (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__.checkDestroyPrevious)(subject, undefined);
        });
        return context;
    }
    getAppElement() {
        let tag = this;
        while (tag.ownerTag) {
            tag = tag.ownerTag;
        }
        return tag;
    }
    /** Used during HMR only where static content itself could have been edited */
    rebuild() {
        // const insertBefore = this.insertBefore
        const insertBefore = this.tagSupport.templater.insertBefore;
        if (!insertBefore) {
            const err = new Error('Cannot rebuild. Previous insertBefore element is not defined on tag');
            err.tag = this;
            throw err;
        }
        this.buildBeforeElement(insertBefore, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
    }
    buildBeforeElement(insertBefore, options = {
        forceElement: false,
        counts: { added: 0, removed: 0 },
    }) {
        // this.insertBefore = insertBefore
        this.tagSupport.templater.insertBefore = insertBefore;
        const context = this.update();
        const template = this.getTemplate();
        const elementContainer = document.createElement('div');
        elementContainer.id = 'tag-temp-holder';
        // render content with a first child that we can know is our first element
        elementContainer.innerHTML = `<template id="temp-template-tag-wrap">${template.string}</template>`;
        // Search/replace innerHTML variables but don't interpolate tag components just yet
        const { clones, tagComponents } = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateElement)(elementContainer, context, template, this, // ownerTag,
        {
            forceElement: options.forceElement,
            counts: options.counts
        });
        // remove old clones
        if (this.clones.length) {
            this.clones.forEach(clone => this.checkCloneRemoval(clone, 0));
        }
        afterInterpolateElement(elementContainer, insertBefore, this, // ownerTag
        [], context, options);
        // this.clones.push(...clones)
        // Any tag components that were found should be processed AFTER the owner processes its elements. Avoid double processing of elements attributes like (oninit)=${}
        let isForceElement = options.forceElement;
        tagComponents.forEach(tagComponent => {
            const preClones = this.clones.map(clone => clone);
            (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.subscribeToTemplate)(tagComponent.insertBefore, // temporary,
            tagComponent.subject, tagComponent.ownerTag, options.counts, { isForceElement });
            afterInterpolateElement(elementContainer, insertBefore, this, preClones, context, options);
            // remove component clones from ownerTag as they will belong to the components they live on
            /*
            if( preClones.length ) {
              this.clones = this.clones.filter(cloneFilter => !preClones.find(clone => clone === cloneFilter))
            }
            */
        });
    }
}
function afterInterpolateElement(container, insertBefore, ownerTag, preClones, context, options) {
    const clones = (0,_render__WEBPACK_IMPORTED_MODULE_1__.buildClones)(container, insertBefore);
    ownerTag.clones.push(...clones);
    clones.forEach(clone => (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.afterElmBuild)(clone, options, context, ownerTag));
    return clones;
}


/***/ }),

/***/ "../../taggedjs/main/ts/Tag.utils.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/Tag.utils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSubjectFunction: () => (/* binding */ getSubjectFunction),
/* harmony export */   setValueRedraw: () => (/* binding */ setValueRedraw)
/* harmony export */ });
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");


function getSubjectFunction(value, tag) {
    return new _ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject((0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__.bindSubjectCallback)(value, tag));
}
function setValueRedraw(templater, // latest tag function to call for rendering
existing, ownerTag) {
    // redraw does not communicate to parent
    templater.redraw = () => {
        const existingTag = templater.oldest || existing.tag;
        const tagSupport = existingTag?.tagSupport || templater.tagSupport;
        const { retag } = templater.renderWithSupport(tagSupport, existingTag, ownerTag);
        existing.set(templater);
        return retag;
    };
}


/***/ }),

/***/ "../../taggedjs/main/ts/TagSupport.class.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/TagSupport.class.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagSupport: () => (/* binding */ TagSupport)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _templater_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templater.utils */ "../../taggedjs/main/ts/templater.utils.ts");




class TagSupport {
    templater;
    children;
    propsConfig;
    memory = {
        context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
        state: {
            newest: [],
        },
        providers: [],
        /** Indicator of re-rending. Saves from double rending something already rendered */
        renderCount: 0,
    };
    updateState() {
        this.memory.state.newest.forEach(newest => {
            newest.lastValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_2__.getStateValue)(newest);
        });
    }
    constructor(templater, children, // children tags passed in as arguments
    props) {
        this.templater = templater;
        this.children = children;
        const latestCloned = (0,_templater_utils__WEBPACK_IMPORTED_MODULE_3__.alterProps)(props, templater);
        this.propsConfig = {
            latest: props,
            latestCloned, // assume its HTML children and then detect
            clonedProps: latestCloned, // maybe duplicate
            lastClonedKidValues: children.value.map(kid => {
                const cloneValues = cloneValueArray(kid.values);
                return cloneValues;
            })
        };
        // if the latest props are not HTML children, then clone the props for later render cycles to compare
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(props)) {
            this.propsConfig.latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(latestCloned);
            this.propsConfig.clonedProps = this.propsConfig.latestCloned;
        }
    }
    // TODO: these below may not be in use
    oldest;
    newest;
    mutatingRender() {
        const message = 'Tag function "render()" was called in sync but can only be called async';
        console.error(message, { tagSupport: this });
        throw new Error(message);
    } // loaded later and only callable async
    render() {
        ++this.memory.renderCount;
        return this.mutatingRender();
    } // ensure this function still works even during deconstructing
}
function cloneValueArray(values) {
    return values.map((value) => {
        const tag = value;
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(tag)) {
            return cloneValueArray(tag.values);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(tag)) {
            const tagComponent = tag;
            return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(tagComponent.tagSupport.propsConfig.latestCloned);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(tag)) {
            return cloneValueArray(tag);
        }
        return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(value);
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/ValueSubject.ts":
/*!**********************************************!*\
  !*** ../../taggedjs/main/ts/ValueSubject.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueSubject: () => (/* binding */ ValueSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "../../taggedjs/main/ts/Subject.ts");

class ValueSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    value;
    constructor(value) {
        super(value);
        this.value = value;
    }
    subscribe(callback) {
        const unsubscribe = super.subscribe(callback);
        // Call the callback immediately with the current value
        callback(this.value);
        return unsubscribe;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/bindSubjectCallback.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/bindSubjectCallback.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindSubjectCallback: () => (/* binding */ bindSubjectCallback),
/* harmony export */   runTagCallback: () => (/* binding */ runTagCallback)
/* harmony export */ });
/** File largely responsible for reacting to element events, such as onclick */
function bindSubjectCallback(value, tag) {
    // Is this children? No override needed
    if (value.isChildOverride) {
        return value;
    }
    const subjectFunction = (element, args) => runTagCallback(value, tag, element, args);
    // link back to original. Mostly used for <div oninit ondestroy> animations
    subjectFunction.tagFunction = value;
    return subjectFunction;
}
function runTagCallback(value, tag, bindTo, args) {
    const tagSupport = tag.tagSupport;
    const renderCount = tagSupport ? tagSupport.memory.renderCount : 0;
    const method = value.bind(bindTo);
    const callbackResult = method(...args);
    const sameRenderCount = renderCount === tagSupport.memory.renderCount;
    if (tagSupport && !sameRenderCount) {
        return; // already rendered
    }
    tagSupport.render();
    if (callbackResult instanceof Promise) {
        return callbackResult.then(() => {
            tagSupport.render();
            return 'promise-no-data-ever';
        });
    }
    // Caller always expects a Promise
    return 'no-data-ever';
}


/***/ }),

/***/ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/checkDestroyPrevious.function.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDestroyPrevious: () => (/* binding */ checkDestroyPrevious),
/* harmony export */   destroyArrayTag: () => (/* binding */ destroyArrayTag),
/* harmony export */   destroyTagMemory: () => (/* binding */ destroyTagMemory)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLikeTags.function */ "../../taggedjs/main/ts/isLikeTags.function.ts");


function checkDestroyPrevious(existing, // existing.value is the old value
newValue) {
    const existingSubArray = existing;
    const wasArray = existingSubArray.lastArray;
    // no longer an array
    if (wasArray && !(0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(newValue)) {
        wasArray.forEach(({ tag }) => destroyArrayTag(tag, { added: 0, removed: 0 }));
        delete existing.lastArray;
        return 1;
    }
    const tagSubject = existing;
    const existingTag = tagSubject.tag;
    // no longer tag or component?
    if (existingTag) {
        const isValueTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(newValue);
        const isSubjectTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(existing.value);
        if (isSubjectTag && isValueTag) {
            const newTag = newValue;
            if (!(0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__.isLikeTags)(newTag, existingTag)) {
                destroyTagMemory(existingTag, tagSubject);
                return 2;
            }
            return false;
        }
        const isValueTagComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(newValue);
        if (isValueTagComponent) {
            return false; // its still a tag component
        }
        // destroy old component, value is not a component
        destroyTagMemory(existingTag, tagSubject);
        return 3;
    }
    const displaySubject = existing;
    const hasLastValue = 'lastValue' in displaySubject;
    const lastValue = displaySubject.lastValue; // TODO: we maybe able to use displaySubject.value and remove concept of lastValue
    // was simple value but now something bigger
    if (hasLastValue && lastValue !== newValue) {
        destroySimpleValue(displaySubject.template, displaySubject);
        return 4;
    }
    return false;
}
function destroyTagMemory(existingTag, existingSubject) {
    delete existingSubject.tag;
    delete existingSubject.tagSupport;
    existingTag.destroy();
}
function destroyArrayTag(tag, counts) {
    /*
    tag.children.forEach(child => child.destroy({
      stagger: counts.removed++,
      // byParent: false
      // byParent: true,
    }))
    */
    // tag.destroyClones({stagger:counts.removed++})
    tag.destroy({
        stagger: counts.removed++,
        // byParent: false
        // byParent: true,
    });
}
function destroySimpleValue(template, subject) {
    const clone = subject.clone;
    const parent = clone.parentNode;
    // put the template back down
    parent.insertBefore(template, clone);
    parent.removeChild(clone);
    delete subject.clone;
    delete subject.lastValue;
    // subject.template = template
}


/***/ }),

/***/ "../../taggedjs/main/ts/deepFunctions.ts":
/*!***********************************************!*\
  !*** ../../taggedjs/main/ts/deepFunctions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
function deepClone(obj) {
    return makeDeepClone(obj, new WeakMap());
}
function makeDeepClone(obj, visited) {
    // If obj is a primitive type or null, return it directly
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    // Handle special cases like Date and RegExp
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Create an empty object or array with the same prototype
    const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    // Register the cloned object to avoid cyclic references
    visited.set(obj, clone);
    // Clone each property or element of the object or array
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            clone[i] = makeDeepClone(obj[i], visited);
        }
    }
    else {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = makeDeepClone(obj[key], visited);
            }
        }
    }
    return clone;
}
function deepEqual(obj1, obj2) {
    return isDeepEqual(obj1, obj2, new WeakMap());
}
function isDeepEqual(obj1, obj2, visited) {
    if (obj1 === obj2 || isSameFunctions(obj1, obj2)) {
        return true;
    }
    if (typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 === null ||
        obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj1)) {
        return true;
    }
    // Register the cloned object to avoid cyclic references
    visited.set(obj1, 0);
    for (const key of keys1) {
        const keyFound = keys2.includes(key);
        if (!keyFound || !isDeepEqual(obj1[key], obj2[key], visited)) {
            /*
            if(isSameFunctions(obj1[key], obj2[key])) {
              continue
            }
            */
            return false;
        }
    }
    // Check if obj1 and obj2 are both arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i], visited)) {
                return false;
            }
        }
    }
    else if (Array.isArray(obj1) || Array.isArray(obj2)) {
        // One is an array, and the other is not
        return false;
    }
    return true;
}
function isSameFunctions(fn0, fn1) {
    const bothFunction = fn0 instanceof Function && fn1 instanceof Function;
    return bothFunction && fn0.toString() === fn1.toString();
}


/***/ }),

/***/ "../../taggedjs/main/ts/elementDestroyCheck.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/elementDestroyCheck.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementDestroyCheck: () => (/* binding */ elementDestroyCheck)
/* harmony export */ });
function elementDestroyCheck(nextSibling, stagger) {
    const onDestroyDoubleWrap = nextSibling.ondestroy;
    if (!onDestroyDoubleWrap) {
        return;
    }
    const onDestroyWrap = onDestroyDoubleWrap.tagFunction;
    if (!onDestroyWrap) {
        return;
    }
    const onDestroy = onDestroyWrap.tagFunction;
    if (!onDestroy) {
        return;
    }
    const event = { target: nextSibling, stagger };
    return onDestroy(event);
}


/***/ }),

/***/ "../../taggedjs/main/ts/elementInitCheck.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/elementInitCheck.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementInitCheck: () => (/* binding */ elementInitCheck)
/* harmony export */ });
function elementInitCheck(nextSibling, counts) {
    const onInitDoubleWrap = nextSibling.oninit;
    if (!onInitDoubleWrap) {
        return counts.added;
    }
    const onInitWrap = onInitDoubleWrap.tagFunction;
    if (!onInitWrap) {
        return counts.added;
    }
    const onInit = onInitWrap.tagFunction;
    if (!onInit) {
        return counts.added;
    }
    const event = { target: nextSibling, stagger: counts.added };
    onInit(event);
    return ++counts.added;
}


/***/ }),

/***/ "../../taggedjs/main/ts/errors.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/errors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* binding */ ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* binding */ StateMismatchError),
/* harmony export */   TagError: () => (/* binding */ TagError)
/* harmony export */ });
class TagError extends Error {
    details;
    constructor(message, errorCode, details = {}) {
        super(message);
        this.name = TagError.name;
        this.details = { ...details, errorCode };
    }
}
class ArrayNoKeyError extends TagError {
    constructor(message, details) {
        super(message, 'array-no-key-error', details);
        this.name = ArrayNoKeyError.name;
    }
}
class StateMismatchError extends TagError {
    constructor(message, details) {
        super(message, 'state-mismatch-error', details);
        this.name = StateMismatchError.name;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/getCallback.ts":
/*!*********************************************!*\
  !*** ../../taggedjs/main/ts/getCallback.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCallback: () => (/* binding */ getCallback)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");


let getCallback = () => (callback) => () => {
    throw new Error('The real callback function was called and that should never occur');
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: (tagSupport) => initMemory(tagSupport),
    beforeRedraw: (tagSupport) => initMemory(tagSupport),
    // afterRender: (tagSupport: TagSupport) => {},
});
function updateState(stateFrom, stateTo) {
    stateFrom.forEach((state, index) => {
        const fromValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(state);
        const callback = stateTo[index].callback;
        if (callback) {
            callback(fromValue); // set the value
        }
        stateTo[index].lastValue = fromValue; // record the value
    });
}
function initMemory(tagSupport) {
    getCallback = () => {
        const oldState = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.stateConfig.array;
        const callbackMaker = (callback) => {
            const trigger = (...args) => triggerStateUpdate(tagSupport, callback, oldState, ...args);
            return trigger;
        };
        return callbackMaker;
    };
}
function triggerStateUpdate(tagSupport, callback, oldState, ...args) {
    const state = tagSupport.memory.state;
    const newest = state.newest;
    // ensure that the oldest has the latest values first
    updateState(newest, oldState);
    // run the callback
    const promise = callback(...args);
    // send the oldest state changes into the newest
    updateState(oldState, newest);
    tagSupport.render();
    // TODO: turn back on below
    if (promise instanceof Promise) {
        promise.finally(() => {
            // send the oldest state changes into the newest
            updateState(oldState, newest);
            tagSupport.render();
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/hasTagSupportChanged.function.ts":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/ts/hasTagSupportChanged.function.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasKidsChanged: () => (/* binding */ hasKidsChanged),
/* harmony export */   hasPropChanges: () => (/* binding */ hasPropChanges),
/* harmony export */   hasTagSupportChanged: () => (/* binding */ hasTagSupportChanged)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");

function hasTagSupportChanged(oldTagSupport, newTagSupport) {
    if (oldTagSupport === newTagSupport) {
        throw new Error('something here');
    }
    const oldProps = oldTagSupport.propsConfig.latest;
    const latestProps = newTagSupport.propsConfig.latest;
    const oldClonedProps = oldTagSupport.propsConfig.latestCloned;
    const propsChanged = hasPropChanges(latestProps, oldClonedProps, oldProps);
    // if no changes detected, no need to continue to rendering further tags
    if (propsChanged) {
        return true;
    }
    const kidsChanged = hasKidsChanged(oldTagSupport, newTagSupport);
    // we already know props didn't change and if kids didn't either, than don't render
    return kidsChanged;
}
function hasPropChanges(props, // natural props
pastCloneProps, // previously cloned props
compareToProps) {
    const isCommonEqual = props === undefined && props === compareToProps;
    if (isCommonEqual) {
        return false;
    }
    let castedProps = props;
    let castedPastProps = pastCloneProps;
    // check all prop functions match
    if (typeof (props) === 'object') {
        if (!pastCloneProps) {
            return true;
        }
        castedProps = { ...props };
        castedPastProps = { ...(pastCloneProps || {}) };
        const allFunctionsMatch = Object.entries(castedProps).every(([key, value]) => {
            /*if(!(key in (castedPastProps as any))) {
              return false
            }*/
            let compare = castedPastProps[key];
            if (!(value instanceof Function)) {
                return true; // this will be checked in deepEqual
            }
            if (!(compare instanceof Function)) {
                return false; // its a function now but was not before
            }
            // ensure we are comparing apples to apples as function get wrapped
            if (compare.original) {
                compare = compare.original;
            }
            const original = value.original;
            if (original) {
                value = value.original;
            }
            if (value.toString() !== compare.toString()) {
                return false; // both are function but not the same
            }
            delete castedProps[key]; // its a function and not needed to be compared
            delete castedPastProps[key]; // its a function and not needed to be compared
            return true;
        });
        if (!allFunctionsMatch) {
            return true; // a change has been detected by function comparisons
        }
    }
    const isEqual = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(pastCloneProps, props);
    return !isEqual; // if equal then no changes
}
function hasKidsChanged(oldTagSupport, newTagSupport) {
    const oldCloneKidValues = oldTagSupport.propsConfig.lastClonedKidValues;
    const newClonedKidValues = newTagSupport.propsConfig.lastClonedKidValues;
    const everySame = oldCloneKidValues.every((set, index) => {
        const x = newClonedKidValues[index];
        return set.every((item, index) => item === x[index]);
    });
    return !everySame;
}


/***/ }),

/***/ "../../taggedjs/main/ts/html.ts":
/*!**************************************!*\
  !*** ../../taggedjs/main/ts/html.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");

function html(strings, ...values) {
    return new _Tag_class__WEBPACK_IMPORTED_MODULE_0__.Tag(strings, values);
}


/***/ }),

/***/ "../../taggedjs/main/ts/index.ts":
/*!***************************************!*\
  !*** ../../taggedjs/main/ts/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.StateMismatchError),
/* harmony export */   Subject: () => (/* reexport safe */ _Subject__WEBPACK_IMPORTED_MODULE_6__.Subject),
/* harmony export */   Tag: () => (/* reexport safe */ _Tag_class__WEBPACK_IMPORTED_MODULE_12__.Tag),
/* harmony export */   TagError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.TagError),
/* harmony export */   TagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_10__.TagSupport),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _ValueSubject__WEBPACK_IMPORTED_MODULE_8__.ValueSubject),
/* harmony export */   getCallback: () => (/* reexport safe */ _getCallback__WEBPACK_IMPORTED_MODULE_21__.getCallback),
/* harmony export */   hmr: () => (/* binding */ hmr),
/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_4__.html),
/* harmony export */   interpolateElement: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateElement),
/* harmony export */   interpolateString: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateString),
/* harmony export */   isSubjectInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isSubjectInstance),
/* harmony export */   isTagArray: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagArray),
/* harmony export */   isTagComponent: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagComponent),
/* harmony export */   isTagInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagInstance),
/* harmony export */   onDestroy: () => (/* reexport safe */ _onDestroy__WEBPACK_IMPORTED_MODULE_20__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _onInit__WEBPACK_IMPORTED_MODULE_19__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_15__.providers),
/* harmony export */   redrawTag: () => (/* reexport safe */ _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__.redrawTag),
/* harmony export */   runBeforeRender: () => (/* reexport safe */ _tagRunner__WEBPACK_IMPORTED_MODULE_13__.runBeforeRender),
/* harmony export */   set: () => (/* reexport safe */ _set_function__WEBPACK_IMPORTED_MODULE_16__.set),
/* harmony export */   setLet: () => (/* reexport safe */ _setLet_function__WEBPACK_IMPORTED_MODULE_17__.setLet),
/* harmony export */   setProp: () => (/* reexport safe */ _setProp_function__WEBPACK_IMPORTED_MODULE_18__.setProp),
/* harmony export */   setUse: () => (/* reexport safe */ _setUse_function__WEBPACK_IMPORTED_MODULE_14__.setUse),
/* harmony export */   tag: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_3__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tagElement__WEBPACK_IMPORTED_MODULE_1__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_3__.tags),
/* harmony export */   watch: () => (/* reexport safe */ _watch_function__WEBPACK_IMPORTED_MODULE_9__.watch)
/* harmony export */ });
/* harmony import */ var _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redrawTag.function */ "../../taggedjs/main/ts/redrawTag.function.ts");
/* harmony import */ var _tagElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagElement */ "../../taggedjs/main/ts/tagElement.ts");
/* harmony import */ var _ElementTargetEvent_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementTargetEvent.interface */ "../../taggedjs/main/ts/ElementTargetEvent.interface.ts");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag */ "../../taggedjs/main/ts/tag.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html */ "../../taggedjs/main/ts/html.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subject */ "../../taggedjs/main/ts/Subject.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _watch_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./watch.function */ "../../taggedjs/main/ts/watch.function.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interpolateElement */ "../../taggedjs/main/ts/interpolateElement.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers */ "../../taggedjs/main/ts/providers.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setLet.function */ "../../taggedjs/main/ts/setLet.function.ts");
/* harmony import */ var _setProp_function__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./setProp.function */ "../../taggedjs/main/ts/setProp.function.ts");
/* harmony import */ var _onInit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./onInit */ "../../taggedjs/main/ts/onInit.ts");
/* harmony import */ var _onDestroy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./onDestroy */ "../../taggedjs/main/ts/onDestroy.ts");
/* harmony import */ var _getCallback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./getCallback */ "../../taggedjs/main/ts/getCallback.ts");













// TODO: export *




/* hooks */
// TODO: export *







/* end: hooks */
const hmr = {
    tagElement: _tagElement__WEBPACK_IMPORTED_MODULE_1__.tagElement, redrawTag: _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__.redrawTag
};


/***/ }),

/***/ "../../taggedjs/main/ts/inputAttribute.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/inputAttribute.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputAttribute: () => (/* binding */ inputAttribute)
/* harmony export */ });
function inputAttribute(name, value, element) {
    const names = name.split('.');
    // style.position = "absolute"
    if (names[0] === 'style') {
        element.style[names[1]] = value;
    }
    // Example: class.width-full = "true"
    if (names[0] === 'class') {
        names.shift();
        if (value) {
            names.forEach(name => element.classList.add(name));
        }
        else {
            names.forEach(name => element.classList.remove(name));
        }
        return;
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateAttributes.ts":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateAttributes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateAttributes: () => (/* binding */ interpolateAttributes)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/processAttribute.function.ts");

function howToSetAttribute(element, name, value) {
    /*
    if(name === 'class'){
      value.split(' ').forEach(className => child.classList.add(className))
      return
    }
    */
    element.setAttribute(name, value);
}
function howToSetInputValue(element, name, value) {
    element[name] = value;
}
function interpolateAttributes(child, scope, ownerTag) {
    const attrNames = child.getAttributeNames();
    let howToSet = howToSetAttribute;
    attrNames.forEach(attrName => {
        if (child.nodeName === 'INPUT' && attrName === 'value') {
            howToSet = howToSetInputValue;
        }
        const value = child.getAttribute(attrName);
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)(attrName, value, child, scope, ownerTag, howToSet);
        howToSet = howToSetAttribute; // put back
    });
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateContentTemplates.ts":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateContentTemplates.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateContentTemplates: () => (/* binding */ interpolateContentTemplates)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolateTemplate.ts");

function interpolateContentTemplates(element, context, tag, options, children) {
    if (!children || element.tagName === 'TEMPLATE') {
        return { clones: [], tagComponents: [] }; // done
    }
    // counting for animation stagger computing
    const counts = options.counts;
    const clones = [];
    const tagComponents = [];
    const childArray = new Array(...children);
    childArray.forEach(child => {
        const { clones: nextClones, tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(child, context, tag, counts, options);
        clones.push(...nextClones);
        if (tagComponent) {
            tagComponents.push(tagComponent);
            return;
        }
        if (child.children) {
            const nextKids = new Array(...child.children);
            nextKids.forEach((subChild, index) => {
                // IF <template end /> its a variable to be processed
                if (isRenderEndTemplate(subChild)) {
                    const { tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(subChild, context, tag, counts, options);
                    if (tagComponent) {
                        tagComponents.push(tagComponent);
                    }
                }
                const { clones: nextClones, tagComponents: nextTagComponent } = interpolateContentTemplates(subChild, context, tag, options, subChild.children);
                clones.push(...nextClones);
                tagComponents.push(...nextTagComponent);
            });
        }
    });
    return { clones, tagComponents };
}
function isRenderEndTemplate(child) {
    const isTemplate = child.tagName === 'TEMPLATE';
    return isTemplate &&
        child.getAttribute('interpolate') !== undefined &&
        child.getAttribute('end') !== undefined;
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateElement.ts":
/*!****************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateElement.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateElement: () => (/* binding */ interpolateElement),
/* harmony export */   interpolateString: () => (/* binding */ interpolateString)
/* harmony export */ });
/* harmony import */ var _interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateAttributes */ "../../taggedjs/main/ts/interpolateAttributes.ts");
/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolations */ "../../taggedjs/main/ts/interpolations.ts");
/* harmony import */ var _interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolateContentTemplates */ "../../taggedjs/main/ts/interpolateContentTemplates.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");




/** Review elements within an element */
function interpolateElement(container, context, // variables used to evaluate
interpolatedTemplates, tagOwner, options) {
    const clones = [];
    const tagComponents = [];
    const result = interpolatedTemplates.interpolation;
    const template = container.children[0];
    const children = template.content.children;
    if (result.keys.length) {
        const { clones: nextClones, tagComponents: nextTagComponents } = (0,_interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__.interpolateContentTemplates)(container, context, tagOwner, options, children);
        clones.push(...nextClones);
        tagComponents.push(...nextTagComponents);
    }
    (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(container, context, tagOwner);
    processChildrenAttributes(children, context, tagOwner);
    return { clones, tagComponents };
}
function processChildrenAttributes(children, context, ownerTag) {
    new Array(...children).forEach(child => {
        (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(child, context, ownerTag);
        if (child.children) {
            processChildrenAttributes(child.children, context, ownerTag);
        }
    });
}
function interpolateString(string) {
    const result = (0,_interpolations__WEBPACK_IMPORTED_MODULE_1__.interpolateToTemplates)(string);
    result.string = result.string.replace(_Tag_class__WEBPACK_IMPORTED_MODULE_3__.escapeSearch, _Tag_class__WEBPACK_IMPORTED_MODULE_3__.variablePrefix);
    return result;
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolateTemplate.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/interpolateTemplate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterElmBuild: () => (/* binding */ afterElmBuild),
/* harmony export */   interpolateTemplate: () => (/* binding */ interpolateTemplate),
/* harmony export */   subscribeToTemplate: () => (/* binding */ subscribeToTemplate),
/* harmony export */   updateBetweenTemplates: () => (/* binding */ updateBetweenTemplates)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.class */ "../../taggedjs/main/ts/Tag.class.ts");
/* harmony import */ var _elementInitCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementInitCheck */ "../../taggedjs/main/ts/elementInitCheck.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processSubjectValue.function */ "../../taggedjs/main/ts/processSubjectValue.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanTextAreaValue.function */ "../../taggedjs/main/ts/scanTextAreaValue.function.ts");





function interpolateTemplate(insertBefore, // <template end interpolate /> (will be removed)
context, // variable scope of {`__tagvar${index}`:'x'}
ownerTag, // Tag class
counts, // used for animation stagger computing
options) {
    // TODO: THe clones array is useless here
    const clones = [];
    if (!insertBefore.hasAttribute('end')) {
        return { clones }; // only care about <template end>
    }
    const variableName = insertBefore.getAttribute('id');
    if (variableName?.substring(0, _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.length) !== _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix) {
        return { clones }; // ignore, not a tagVar
    }
    const existingSubject = context[variableName];
    // process dynamics later
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagComponent)(existingSubject.value) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagArray)(existingSubject.value)) {
        return { clones, tagComponent: { ownerTag, subject: existingSubject, insertBefore } };
    }
    let isForceElement = options.forceElement;
    subscribeToTemplate(insertBefore, existingSubject, ownerTag, counts, { isForceElement });
    return { clones };
}
function subscribeToTemplate(insertBefore, subject, ownerTag, counts, // used for animation stagger computing
{ isForceElement }) {
    const callback = (value) => {
        const clone = subject.clone;
        if (clone) {
            insertBefore = clone;
        }
        (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processSubjectValue)(value, subject, insertBefore, ownerTag, {
            counts: { ...counts },
            forceElement: isForceElement,
        });
        if (isForceElement) {
            isForceElement = false; // only can happen once
        }
        // ownerTag.clones.push(...nextClones)
        // clones.push(...nextClones)
    };
    const sub = subject.subscribe(callback);
    ownerTag.cloneSubs.push(sub);
}
// Function to update the value of x
function updateBetweenTemplates(value, lastFirstChild) {
    const parent = lastFirstChild.parentNode;
    // mimic React skipping to display EXCEPT for true does display on page
    if (value === undefined || value === false || value === null) { // || value === true
        value = '';
    }
    // Insert the new value (never use innerHTML here)
    const textNode = document.createTextNode(value); // never innerHTML
    parent.insertBefore(textNode, lastFirstChild);
    /* remove existing nodes */
    parent.removeChild(lastFirstChild);
    return textNode;
}
function afterElmBuild(elm, options, context, ownerTag) {
    if (!elm.getAttribute) {
        return;
    }
    const tagName = elm.nodeName; // elm.tagName
    if (tagName === 'TEXTAREA') {
        (0,_scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__.scanTextAreaValue)(elm, context, ownerTag);
    }
    let diff = options.counts.added;
    if (!options.forceElement) {
        diff = (0,_elementInitCheck__WEBPACK_IMPORTED_MODULE_1__.elementInitCheck)(elm, options.counts) - diff;
    }
    if (elm.children) {
        const subCounts = {
            added: options.counts.added, // - diff,
            removed: options.counts.removed,
        };
        new Array(...elm.children).forEach((child, index) => {
            const subOptions = {
                ...options,
                counts: options.counts,
            };
            return afterElmBuild(child, subOptions, context, ownerTag);
        });
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/interpolations.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/interpolations.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolateReplace: () => (/* binding */ interpolateReplace),
/* harmony export */   interpolateToTemplates: () => (/* binding */ interpolateToTemplates)
/* harmony export */ });
// support arrow functions in attributes
const interpolateReplace = /(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;
/** replaces ${x} with <template id="x-start"></template><template id="x-end"></template> */
function interpolateToTemplates(template) {
    const keys = [];
    const string = template.replace(interpolateReplace, (match, expression) => {
        if (match.startsWith('<')) {
            // If the match is an HTML tag, don't replace
            return match;
        }
        const noBraces = expression.substring(1, expression.length - 1);
        const id = noBraces;
        keys.push(id);
        return `<template interpolate end id="${id}"></template>`;
    });
    return { string, keys };
}


/***/ }),

/***/ "../../taggedjs/main/ts/isInstance.ts":
/*!********************************************!*\
  !*** ../../taggedjs/main/ts/isInstance.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSubjectInstance: () => (/* binding */ isSubjectInstance),
/* harmony export */   isTagArray: () => (/* binding */ isTagArray),
/* harmony export */   isTagComponent: () => (/* binding */ isTagComponent),
/* harmony export */   isTagInstance: () => (/* binding */ isTagInstance)
/* harmony export */ });
function isTagComponent(value) {
    return value?.isTemplater === true;
}
function isTagInstance(tag) {
    return tag?.isTag === true;
}
function isSubjectInstance(subject) {
    return (subject?.isSubject === true || subject?.subscribe) ? true : false; // subject?.isSubject === true || 
}
function isTagArray(value) {
    return value instanceof Array && value.every(x => isTagInstance(x));
}


/***/ }),

/***/ "../../taggedjs/main/ts/isLikeTags.function.ts":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/ts/isLikeTags.function.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLikeTags: () => (/* binding */ isLikeTags)
/* harmony export */ });
function isLikeTags(tag0, tag1) {
    if (tag0.strings.length !== tag1.strings.length) {
        return false;
    }
    const everyStringMatched = tag0.strings.every((string, index) => tag1.strings[index] === string);
    if (!everyStringMatched) {
        return false;
    }
    const valuesLengthsMatch = tag0.values.length === tag1.values.length;
    if (!valuesLengthsMatch) {
        return false;
    }
    /*
    const valuesMatch = deepEqual(tag0.values, tag1.values)
    if(!valuesMatch) {
      return false
    }
    */
    return true;
}


/***/ }),

/***/ "../../taggedjs/main/ts/onDestroy.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/onDestroy.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDestroy: () => (/* binding */ onDestroy)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");

/** When undefined, it means a tag is being built for the first time so do run destroy(s) */
let destroyCurrentTagSupport;
function onDestroy(callback) {
    destroyCurrentTagSupport.memory.destroyCallback = callback;
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeRedraw: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeDestroy: (tagSupport, tag) => {
        const callback = tagSupport.memory.destroyCallback;
        if (callback) {
            callback();
        }
    }
});


/***/ }),

/***/ "../../taggedjs/main/ts/onInit.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/onInit.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onInit: () => (/* binding */ onInit)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");

function setCurrentTagSupport(support) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport = support;
}
function onInit(callback) {
    if (!_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport.memory.init) {
        _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport.memory.init = callback;
        callback(); // fire init
    }
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
    beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
});


/***/ }),

/***/ "../../taggedjs/main/ts/processAttribute.function.ts":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/ts/processAttribute.function.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processAttribute: () => (/* binding */ processAttribute)
/* harmony export */ });
/* harmony import */ var _inputAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputAttribute */ "../../taggedjs/main/ts/inputAttribute.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");


const startRegX = /^\s*{__tagvar/;
const endRegX = /}\s*$/;
function isTagVar(value) {
    return value && value.search(startRegX) >= 0 && value.search(endRegX) >= 0;
}
function processAttribute(attrName, value, child, scope, ownerTag, howToSet) {
    if (isTagVar(value)) {
        return processScopedNameValueAttr(attrName, value, child, scope, ownerTag, howToSet);
    }
    if (isTagVar(attrName)) {
        const contextValueSubject = getContextValueByVarString(scope, attrName);
        let lastValue;
        // the above callback gets called immediately since its a ValueSubject()
        const sub = contextValueSubject.subscribe((value) => {
            processNameOnlyAttr(value, lastValue, child, ownerTag, howToSet);
            lastValue = value;
        });
        ownerTag.cloneSubs.push(sub); // this is where unsubscribe is picked up
        child.removeAttribute(attrName);
        return;
    }
    // Non dynamic
    const isSpecial = isSpecialAttr(attrName);
    if (isSpecial) {
        return (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, value, child);
    }
}
function processScopedNameValueAttr(attrName, value, // {__tagVarN}
child, scope, ownerTag, howToSet) {
    // get the code inside the brackets like "variable0" or "{variable0}"
    const result = getContextValueByVarString(scope, value);
    return processNameValueAttr(attrName, result, child, ownerTag, howToSet);
}
function getContextValueByVarString(scope, value) {
    const code = value.replace('{', '').split('').reverse().join('').replace('}', '').split('').reverse().join('');
    return scope[code];
}
function processNameOnlyAttr(attrValue, lastValue, child, ownerTag, howToSet) {
    if (lastValue && lastValue != attrValue) {
        if (typeof (lastValue) === 'string') {
            child.removeAttribute(lastValue);
        }
        else if (lastValue instanceof Object) {
            Object.entries(lastValue).forEach(([name]) => child.removeAttribute(name));
        }
    }
    if (typeof (attrValue) === 'string') {
        if (!attrValue.length) {
            return;
        }
        processNameValueAttr(attrValue, '', child, ownerTag, howToSet);
        return;
    }
    if (attrValue instanceof Object) {
        Object.entries(attrValue).forEach(([name, value]) => processNameValueAttr(name, value, child, ownerTag, howToSet));
        return;
    }
}
function processNameValueAttr(attrName, result, child, ownerTag, howToSet) {
    const isSpecial = isSpecialAttr(attrName);
    // attach as callback?
    if (result instanceof Function) {
        const action = function (...args) {
            return result(child, args);
        };
        child[attrName].action = action;
        // child.addEventListener(attrName, action)
    }
    // Most every variable comes in here since everything is made a ValueSubject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(result)) {
        child.removeAttribute(attrName);
        const callback = (newAttrValue) => {
            return processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet);
        };
        // 🗞️ Subscribe. Above callback called immediately since its a ValueSubject()
        const sub = result.subscribe(callback);
        // Record subscription for later unsubscribe when element destroyed
        ownerTag.cloneSubs.push(sub);
        return;
    }
    howToSet(child, attrName, result);
    // child.setAttribute(attrName, result.value)
    return;
}
function processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet) {
    if (newAttrValue instanceof Function) {
        ;
        child[attrName] = function (...args) {
            const result = newAttrValue(child, args);
            return result;
        };
        child[attrName].tagFunction = newAttrValue;
        return;
    }
    if (isSpecial) {
        (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, newAttrValue, child);
        return;
    }
    if (newAttrValue) {
        howToSet(child, attrName, newAttrValue);
        return;
    }
    const isDeadValue = newAttrValue === undefined || newAttrValue === false || newAttrValue === null;
    if (isDeadValue) {
        child.removeAttribute(attrName);
        return;
    }
    // value is 0
    howToSet(child, attrName, newAttrValue);
}
/** Looking for (class | style) followed by a period */
function isSpecialAttr(attrName) {
    return attrName.search(/^(class|style)(\.)/) >= 0;
}


/***/ }),

/***/ "../../taggedjs/main/ts/processNewValue.function.ts":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/ts/processNewValue.function.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processNewValue: () => (/* binding */ processNewValue)
/* harmony export */ });
/* harmony import */ var _Tag_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.utils */ "../../taggedjs/main/ts/Tag.utils.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");



function processNewValue(hasValue, value, context, variableName, ownerTag) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(value)) {
        const existing = context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
        (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.setValueRedraw)(value, existing, ownerTag);
        return;
    }
    if (value instanceof Function) {
        context[variableName] = (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.getSubjectFunction)(value, ownerTag);
        return;
    }
    if (!hasValue) {
        return; // more strings than values, stop here
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(value)) {
        value.ownerTag = ownerTag;
        ownerTag.children.push(value);
        context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
        return;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isSubjectInstance)(value)) {
        context[variableName] = value; // its already a value subject
        return;
    }
    context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
}


/***/ }),

/***/ "../../taggedjs/main/ts/processRegularValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/processRegularValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processRegularValue: () => (/* binding */ processRegularValue)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolateTemplate */ "../../taggedjs/main/ts/interpolateTemplate.ts");

function processRegularValue(value, result, // could be tag via result.tag
template) {
    result.template = template;
    const before = result.clone || template; // Either the template is on the doc OR its the first element we last put on doc
    result.lastValue = value;
    // Processing of regular values
    const clone = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.updateBetweenTemplates)(value, before);
    result.clone = clone; // remember single element put down, for future updates
    return [];
}


/***/ }),

/***/ "../../taggedjs/main/ts/processSubjectComponent.function.ts":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/ts/processSubjectComponent.function.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processSubjectComponent: () => (/* binding */ processSubjectComponent)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processTagResult.function */ "../../taggedjs/main/ts/processTagResult.function.ts");



function processSubjectComponent(value, subject, template, ownerTag, options) {
    // Check if function component is wrapped in a tag() call
    // TODO: This below check not needed in production mode
    if (value.tagged !== true) {
        let name = value.wrapper.original.name || value.wrapper.original.constructor?.name;
        if (name === 'Function') {
            name = undefined;
        }
        const label = name || value.wrapper.original.toString().substring(0, 120);
        const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`);
        throw error;
    }
    const templater = value;
    templater.insertBefore = template;
    const tagSupport = value.tagSupport;
    let retag = templater.newest;
    const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    providers.ownerTag = ownerTag;
    const isFirstTime = !retag || options.forceElement;
    if (isFirstTime) {
        if (retag) {
            // runBeforeRedraw(tagSupport, retag)
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(tagSupport, templater.oldest);
        }
        else {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(tagSupport, ownerTag);
        }
        const preClones = ownerTag.clones.map(clone => clone);
        const result = templater.renderWithSupport(tagSupport, subject.tag, ownerTag);
        retag = result.retag;
        templater.newest = retag;
        if (ownerTag.clones.length > preClones.length) {
            const myClones = ownerTag.clones.filter(fClone => !preClones.find(clone => clone === fClone));
            retag.clones.push(...myClones);
        }
    }
    ownerTag.children.push(retag);
    // TODO: this line below might be duplicative of work done in renderWithSupport
    tagSupport.templater = retag.tagSupport.templater;
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_2__.processTagResult)(retag, subject, // The element set here will be removed from document. Also result.tag will be added in here
    template, // <template end interpolate /> (will be removed)
    options);
}


/***/ }),

/***/ "../../taggedjs/main/ts/processSubjectValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/processSubjectValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processSubjectValue: () => (/* binding */ processSubjectValue),
/* harmony export */   processTag: () => (/* binding */ processTag)
/* harmony export */ });
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processSubjectComponent.function */ "../../taggedjs/main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processTagResult.function */ "../../taggedjs/main/ts/processTagResult.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processTagArray */ "../../taggedjs/main/ts/processTagArray.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processRegularValue.function */ "../../taggedjs/main/ts/processRegularValue.function.ts");







var ValueTypes;
(function (ValueTypes) {
    ValueTypes["tag"] = "tag";
    ValueTypes["tagArray"] = "tag-array";
    ValueTypes["tagComponent"] = "tag-component";
    ValueTypes["value"] = "value";
})(ValueTypes || (ValueTypes = {}));
function getValueType(value) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(value)) {
        return ValueTypes.tagComponent;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(value)) {
        return ValueTypes.tag;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagArray)(value)) {
        return ValueTypes.tagArray;
    }
    return ValueTypes.value;
}
function processSubjectValue(value, result, // could be tag via result.tag
template, // <template end interpolate /> (will be removed)
ownerTag, // owner
options) {
    const valueType = getValueType(value);
    switch (valueType) {
        case ValueTypes.tag:
            processTag(value, result, template, ownerTag, options);
            return [];
        case ValueTypes.tagArray:
            return (0,_processTagArray__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(result, value, template, ownerTag, options);
        case ValueTypes.tagComponent:
            (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__.processSubjectComponent)(value, result, template, ownerTag, options);
            return [];
    }
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__.processRegularValue)(value, result, template);
}
/** Could be a regular tag or a component. Both are Tag.class */
function processTag(value, result, // could be tag via result.tag
template, // <template end interpolate /> (will be removed)
ownerTag, // owner
options) {
    // first time seeing this tag?
    if (!value.tagSupport) {
        value.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__.TagSupport({}, // the template is provided via html`` call
        new _ValueSubject__WEBPACK_IMPORTED_MODULE_5__.ValueSubject([]));
        // asking me to render will cause my parent to render
        value.tagSupport.mutatingRender = () => {
            ownerTag.tagSupport.render();
        };
        value.tagSupport.oldest = value.tagSupport.oldest || value;
        ownerTag.children.push(value);
    }
    value.ownerTag = ownerTag;
    result.template = template;
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_1__.processTagResult)(value, result, // Function will attach result.tag
    template, options);
}


/***/ }),

/***/ "../../taggedjs/main/ts/processTagArray.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/processTagArray.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagArray: () => (/* binding */ processTagArray)
/* harmony export */ });
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");




function processTagArray(result, value, // arry of Tag classes
template, // <template end interpolate />
ownerTag, options) {
    // const clones: Clones = []
    const clones = ownerTag.clones; // []
    if (!result.lastArray) {
        result.lastArray = []; // {tag, index}[] populated in processTagResult
    }
    result.template = template;
    let removed = 0;
    /** 🗑️ remove previous items first */
    result.lastArray = result.lastArray.filter((item, index) => {
        const newLength = value.length - 1;
        const at = index - removed;
        const lessLength = newLength < at;
        const subTag = value[index - removed];
        const subArrayValue = subTag?.arrayValue;
        const destroyItem = lessLength || !areLikeValues(subArrayValue, item.tag.arrayValue);
        if (destroyItem) {
            const last = result.lastArray[index];
            const tag = last.tag;
            (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_3__.destroyArrayTag)(tag, options.counts);
            ++removed;
            ++options.counts.removed;
            return false;
        }
        return true;
    });
    // const masterBefore = template || (template as any).clone
    const before = template || template.clone;
    value.forEach((subTag, index) => {
        const previous = result.lastArray[index];
        const previousSupport = subTag.tagSupport || previous?.tag.tagSupport;
        subTag.tagSupport = previousSupport || new _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__.TagSupport({}, new _ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject([]));
        if (previousSupport) {
            previousSupport.newest = subTag;
        }
        else {
            subTag.tagSupport.mutatingRender = () => {
                ownerTag.tagSupport.render(); // call owner for needed updates
                return subTag;
            };
            ownerTag.children.push(subTag);
        }
        subTag.ownerTag = ownerTag;
        // check for html``.key()
        const keyNotSet = subTag.arrayValue;
        if (keyNotSet?.isArrayValueNeverSet) {
            const details = {
                template: subTag.getTemplate().string,
                array: value,
                ownerTagContent: ownerTag.lastTemplateString,
            };
            const message = 'Use html`...`.key(item) instead of html`...` to template an Array';
            console.error(message, details);
            const err = new _errors__WEBPACK_IMPORTED_MODULE_2__.ArrayNoKeyError(message, details);
            throw err;
        }
        const couldBeSame = result.lastArray.length > index;
        if (couldBeSame) {
            const isSame = areLikeValues(previous.tag.arrayValue, subTag.arrayValue);
            if (isSame) {
                subTag.tagSupport = subTag.tagSupport || previous.tag.tagSupport;
                previous.tag.updateByTag(subTag);
                return [];
            }
            return [];
        }
        processAddTagArrayItem(before, subTag, result, index, options);
    });
    return clones;
}
function processAddTagArrayItem(before, subTag, result, index, options) {
    const lastValue = {
        tag: subTag, index
    };
    // Added to previous array
    result.lastArray.push(lastValue);
    const counts = {
        added: options.counts.added + index,
        removed: options.counts.removed,
    };
    const lastFirstChild = before; // tag.clones[0] // insertBefore.lastFirstChild    
    subTag.buildBeforeElement(lastFirstChild, { counts, forceElement: options.forceElement });
}
/** compare two values. If both values are arrays then the items will be compared */
function areLikeValues(valueA, valueB) {
    if (valueA === valueB) {
        return true;
    }
    const bothArrays = valueA instanceof Array && valueB instanceof Array;
    const matchLengths = bothArrays && valueA.length == valueB.length;
    if (matchLengths) {
        return valueA.every((item, index) => item == valueB[index]);
    }
    return false;
}


/***/ }),

/***/ "../../taggedjs/main/ts/processTagResult.function.ts":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/ts/processTagResult.function.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagResult: () => (/* binding */ processTagResult)
/* harmony export */ });
function processTagResult(tag, result, // used for recording past and current value
insertBefore, // <template end interpolate />
{ counts, forceElement, }) {
    // *if appears we already have seen
    const subjectTag = result;
    const rTag = subjectTag.tag;
    if (rTag && !forceElement) {
        // are we just updating an if we already had?
        if (rTag.isLikeTag(tag)) {
            // components
            if (result instanceof Function) {
                const newTag = result(rTag.tagSupport);
                rTag.updateByTag(newTag);
                return;
            }
            rTag.updateByTag(tag);
            return;
        }
    }
    tag.buildBeforeElement(insertBefore, {
        counts,
        forceElement,
    });
    subjectTag.tag = subjectTag.tag || tag; // let reprocessing know we saw this previously as an if
}


/***/ }),

/***/ "../../taggedjs/main/ts/provider.utils.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/provider.utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providersChangeCheck: () => (/* binding */ providersChangeCheck)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");

function providersChangeCheck(tag) {
    const providersWithChanges = tag.tagSupport.memory.providers.filter(provider => !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(provider.instance, provider.clone));
    // reset clones
    providersWithChanges.forEach(provider => {
        const appElement = tag.getAppElement();
        handleProviderChanges(appElement, provider);
        provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
    });
}
function handleProviderChanges(appElement, provider) {
    const tagsWithProvider = getTagsWithProvider(appElement, provider);
    tagsWithProvider.forEach(({ tag, renderCount, provider }) => {
        const notRendered = renderCount === tag.tagSupport.memory.renderCount;
        if (notRendered) {
            provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
            tag.tagSupport.render();
        }
    });
}
function getTagsWithProvider(tag, provider, memory = []) {
    const compare = tag.tagSupport.memory.providers;
    const hasProvider = compare.find(xProvider => xProvider.constructMethod === provider.constructMethod);
    if (hasProvider) {
        memory.push({
            tag,
            renderCount: tag.tagSupport.memory.renderCount,
            provider: hasProvider
        });
    }
    tag.children.forEach(child => getTagsWithProvider(child, provider, memory));
    return memory;
}


/***/ }),

/***/ "../../taggedjs/main/ts/providers.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/providers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig = {
    providers: [],
    //currentTagSupport: undefined as TagSupport | undefined,
    ownerTag: undefined,
};
function get(constructMethod) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    const providers = config.providers;
    return providers.find(provider => provider.constructMethod === constructMethod);
}
const providers = {
    create: (constructMethod) => {
        const existing = get(constructMethod);
        if (existing) {
            existing.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(existing.instance);
            return existing.instance;
        }
        // Providers with provider requirements just need to use providers.create() and providers.inject()
        const instance = constructMethod.constructor ? new constructMethod() : constructMethod();
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        config.providers.push({
            constructMethod,
            instance,
            clone: (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(instance)
        });
        return instance;
    },
    /**
     * @template T
     * @param {(new (...args: any[]) => T) | () => T} constructor
     * @returns {T}
     */
    inject: (constructor) => {
        const oldValue = get(constructor);
        if (oldValue) {
            return oldValue.instance;
        }
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        let owner = {
            ownerTag: config.ownerTag
        };
        while (owner.ownerTag) {
            const ownerProviders = owner.ownerTag.tagSupport.memory.providers;
            const provider = ownerProviders.find(provider => {
                if (provider.constructMethod === constructor) {
                    return true;
                }
            });
            if (provider) {
                provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance); // keep a copy of the latest before any change occur
                config.providers.push(provider);
                return provider.instance;
            }
            owner = owner.ownerTag; // cause reloop
        }
        const msg = `Could not inject provider: ${constructor.name} ${constructor}`;
        console.warn(`${msg}. Available providers`, config.providers);
        throw new Error(msg);
    }
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport, ownerTag) => {
        run(tagSupport, ownerTag);
    },
    beforeRedraw: (tagSupport, tag) => {
        run(tagSupport, tag.ownerTag);
    },
    afterRender: (tagSupport) => {
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        tagSupport.memory.providers = [...config.providers];
        config.providers.length = 0;
    }
});
function run(tagSupport, ownerTag) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    // config.currentTagSupport = tagSupport
    config.ownerTag = ownerTag;
    if (tagSupport.memory.providers.length) {
        config.providers.length = 0;
        config.providers.push(...tagSupport.memory.providers);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/redrawTag.function.ts":
/*!****************************************************!*\
  !*** ../../taggedjs/main/ts/redrawTag.function.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redrawTag: () => (/* binding */ redrawTag)
/* harmony export */ });
function redrawTag(tagSupport, templater, // latest tag function to call for rendering
existingTag, ownerTag) {
    const result = templater.renderWithSupport(tagSupport, existingTag, ownerTag);
    return result;
}


/***/ }),

/***/ "../../taggedjs/main/ts/render.ts":
/*!****************************************!*\
  !*** ../../taggedjs/main/ts/render.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildClones: () => (/* binding */ buildClones)
/* harmony export */ });
function buildClones(temporary, insertBefore) {
    const clones = [];
    const template = temporary.children[0];
    let nextSibling = template.content.firstChild;
    while (nextSibling) {
        const nextNextSibling = nextSibling.nextSibling;
        buildSibling(nextSibling, insertBefore);
        clones.push(nextSibling);
        nextSibling = nextNextSibling;
    }
    return clones;
}
function buildSibling(nextSibling, insertBefore) {
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(nextSibling, insertBefore);
}


/***/ }),

/***/ "../../taggedjs/main/ts/renderExistingTag.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/renderExistingTag.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderExistingTag: () => (/* binding */ renderExistingTag)
/* harmony export */ });
/* harmony import */ var _hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasTagSupportChanged.function */ "../../taggedjs/main/ts/hasTagSupportChanged.function.ts");
/* harmony import */ var _provider_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider.utils */ "../../taggedjs/main/ts/provider.utils.ts");


/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
function renderExistingTag(tag, newTemplater, tagSupport) {
    const preRenderCount = tagSupport.memory.renderCount;
    (0,_provider_utils__WEBPACK_IMPORTED_MODULE_1__.providersChangeCheck)(tag);
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    if (preRenderCount !== tagSupport.memory.renderCount) {
        return true;
    }
    const oldTagSupport = tag.tagSupport;
    const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__.hasTagSupportChanged)(oldTagSupport, newTemplater.tagSupport);
    const oldTemplater = tagSupport.templater;
    tagSupport.newest = oldTemplater.redraw(); // No change detected, just redraw me only
    newTemplater.newest = tagSupport.newest;
    if (!hasChanged) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "../../taggedjs/main/ts/scanTextAreaValue.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/scanTextAreaValue.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanTextAreaValue: () => (/* binding */ scanTextAreaValue)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function */ "../../taggedjs/main/ts/processAttribute.function.ts");

const search = new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');
function scanTextAreaValue(textarea, context, ownerTag) {
    const value = textarea.value;
    if (value.search(search) >= 0) {
        const match = value.match(/__tagvar(\d{1,4})/);
        const token = match ? match[0] : '';
        const dynamic = '{' + token + '}';
        textarea.value = '';
        textarea.setAttribute('text-var-value', dynamic);
        const howToSet = (_elm, _name, value) => textarea.value = value;
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)('text-var-value', dynamic, // realValue, // context[token].value,
        textarea, context, ownerTag, howToSet);
    }
}


/***/ }),

/***/ "../../taggedjs/main/ts/set.function.ts":
/*!**********************************************!*\
  !*** ../../taggedjs/main/ts/set.function.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateEchoBack: () => (/* binding */ StateEchoBack),
/* harmony export */   getStateValue: () => (/* binding */ getStateValue),
/* harmony export */   makeStateResult: () => (/* binding */ makeStateResult),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "../../taggedjs/main/ts/errors.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig = {
    array: [], // state memory on the first render
    rearray: [], // state memory to be used before the next render
};
function makeStateResult(initValue, push) {
    // return initValue
    const result = (y) => {
        push.callback = y || (x => [initValue, initValue = x]);
        return initValue;
    };
    return result;
}
/*
const waitingStates: (() => unknown)[] = []
export function onNextStateOnly(callback: () => unknown) {
  const config: Config = setUse.memory.stateConfig
  
  if(!config.rearray.length) {
    callback()
    return
  }

  waitingStates.push(callback)
}
*/
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport) => initState(tagSupport),
    beforeRedraw: (tagSupport) => initState(tagSupport),
    afterRender: (tagSupport) => {
        const state = tagSupport.memory.state;
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
        if (config.rearray.length) {
            if (config.rearray.length !== config.array.length) {
                const message = `States lengths has changed ${config.rearray.length} !== ${config.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`;
                const details = {
                    oldStates: config.array,
                    newStates: config.rearray,
                    component: tagSupport.templater?.wrapper.original,
                };
                const error = new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, details);
                console.warn(message, details);
                throw error;
            }
        }
        config.rearray = []; // clean up any previous runs
        state.newest = [...config.array];
        // config.array.length = 0
        config.array = [];
        // waitingStates.forEach(callback => callback())
        // waitingStates.length = 0
    }
});
function getStateValue(
// state: StateConfig,
state) {
    const callback = state.callback;
    if (!callback) {
        return state.defaultValue;
    }
    const oldState = callback(StateEchoBack); // get value and set to undefined
    const [oldValue] = oldState;
    const [checkValue] = callback(oldValue); // set back to original value
    if (checkValue !== StateEchoBack) {
        const message = 'State property not used correctly. Second item in array is not setting value as expected.\n\n' +
            'For "let" state use `let name = state(default)(x => [name, name = x])`\n\n' +
            'For "const" state use `const name = state(default)()`\n\n' +
            'Problem state:\n' + (callback ? callback.toString() : JSON.stringify(state)) + '\n';
        console.error(message, { state, callback, oldState, oldValue, checkValue });
        throw new Error(message);
    }
    return oldValue;
}
class StateEchoBack {
}
function initState(tagSupport) {
    const state = tagSupport.memory.state;
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    // TODO: This guard may no longer be needed
    if (config.rearray.length) {
        const message = 'last array not cleared';
        console.error(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
        throw new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
    }
    // TODO: this maybe redundant and not needed
    config.rearray = []; // .length = 0
    if (state?.newest.length) {
        config.rearray.push(...state.newest);
    }
}
/** Used for variables that need to remain the same variable during render passes */
function set(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    let getSetMethod;
    const restate = config.rearray[config.array.length];
    if (restate) {
        let oldValue = getStateValue(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return oldValue;
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return initValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setLet.function.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/setLet.function.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLet: () => (/* binding */ setLet)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setLet(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    let getSetMethod;
    const restate = config.rearray[config.array.length];
    if (restate) {
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.makeStateResult)(oldValue, push);
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.makeStateResult)(initValue, push);
}


/***/ }),

/***/ "../../taggedjs/main/ts/setProp.function.ts":
/*!**************************************************!*\
  !*** ../../taggedjs/main/ts/setProp.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProp: () => (/* binding */ setProp)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.function */ "../../taggedjs/main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setProp(getSet) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const [propValue] = getSet(undefined);
    getSet(propValue); // restore original value instead of undefined
    const restate = config.rearray[config.array.length];
    if (restate) {
        let watchValue = restate.watch;
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        const push = {
            callback: getSet,
            lastValue: oldValue,
            watch: restate.watch,
        };
        // has the prop value changed?
        if (propValue != watchValue) {
            push.watch = propValue;
            oldValue = push.lastValue = propValue;
        }
        config.array.push(push);
        getSet(oldValue);
        return oldValue;
    }
    const push = {
        callback: getSet,
        lastValue: propValue,
        watch: propValue,
    };
    config.array.push(push);
    return propValue;
}


/***/ }),

/***/ "../../taggedjs/main/ts/setUse.function.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/setUse.function.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setUse: () => (/* binding */ setUse)
/* harmony export */ });
const tagUse = [];
function setUse(use) {
    // must provide defaults
    const useMe = {
        beforeRender: use.beforeRender || (() => undefined),
        beforeRedraw: use.beforeRedraw || (() => undefined),
        afterRender: use.afterRender || (() => undefined),
        beforeDestroy: use.beforeDestroy || (() => undefined),
    };
    setUse.tagUse.push(useMe);
}
setUse.tagUse = tagUse;
setUse.memory = {};


/***/ }),

/***/ "../../taggedjs/main/ts/tag.ts":
/*!*************************************!*\
  !*** ../../taggedjs/main/ts/tag.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
/* harmony import */ var _templater_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templater.utils */ "../../taggedjs/main/ts/templater.utils.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValueSubject */ "../../taggedjs/main/ts/ValueSubject.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderExistingTag.function */ "../../taggedjs/main/ts/renderExistingTag.function.ts");








const tags = [];
let tagCount = 0;
/** Wraps a tag component in a state manager and always push children to last argument as any array */
// export function tag<T>(a: T): T;
function tag(tagComponent) {
    const result = (function tagWrapper(props, children) {
        const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(props) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(props);
        if (isPropTag) {
            children = props;
            props = undefined;
        }
        const { childSubject, madeSubject } = kidsToTagArraySubject(children);
        childSubject.isChildSubject = true;
        const templater = new _templater_utils__WEBPACK_IMPORTED_MODULE_2__.TemplaterResult(props, childSubject);
        const innerTagWrap = getTagWrap(templater, childSubject, madeSubject);
        innerTagWrap.original = tagComponent;
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }); // we override the function provided and pretend original is what's returned
    updateResult(result, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(tagComponent);
    return result;
}
function kidsToTagArraySubject(children) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(children)) {
        return { childSubject: children, madeSubject: false };
    }
    const kidArray = children;
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(kidArray)) {
        return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject(children), madeSubject: true };
    }
    const kid = children;
    if (kid) {
        kid.arrayValue = 0;
        return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject([kid]), madeSubject: true };
    }
    return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject([]), madeSubject: true };
}
function updateResult(result, tagComponent) {
    result.isTag = true;
    result.original = tagComponent;
}
function updateComponent(tagComponent) {
    tagComponent.tags = tags;
    tagComponent.setUse = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse;
    tagComponent.tagIndex = tagCount++; // needed for things like HMR
}
function getTagWrap(templater, childSubject, madeSubject) {
    const innerTagWrap = function (oldTagSetup) {
        const originalFunction = innerTagWrap.original;
        // const oldTagSetup = templater.tagSupport
        const oldest = templater.oldest;
        let props = oldTagSetup.propsConfig.latest;
        let castedProps = (0,_templater_utils__WEBPACK_IMPORTED_MODULE_2__.alterProps)(props, templater);
        // CALL ORIGINAL COMPONENT FUNCTION
        const tag = originalFunction(castedProps, childSubject);
        if (oldTagSetup.mutatingRender === _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.TagSupport.prototype.mutatingRender) {
            oldTagSetup.oldest = tag;
            templater.oldest = tag;
            // tag.tagSupport = oldTagSetup
            oldTagSetup.mutatingRender = () => {
                const exit = (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_7__.renderExistingTag)(templater.oldest, templater, oldTagSetup);
                if (exit) {
                    return tag;
                }
                // Have owner re-render
                if (tag.ownerTag) {
                    const newest = tag.ownerTag.tagSupport.render();
                    // TODO: Next line most likely not needed
                    tag.ownerTag.tagSupport.newest = newest;
                    return tag;
                }
                return tag;
            };
        }
        tag.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.TagSupport(templater, oldTagSetup.children);
        const clonedProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_5__.deepClone)(castedProps); // castedProps
        tag.tagSupport.propsConfig = {
            latest: props, // castedProps
            latestCloned: clonedProps,
            clonedProps: clonedProps,
            lastClonedKidValues: tag.tagSupport.propsConfig.lastClonedKidValues,
        };
        tag.tagSupport.memory = oldTagSetup.memory;
        // ???
        // tag.tagSupport.memory = {...oldTagSetup.memory}
        // tag.tagSupport.memory.context = {...oldTagSetup.memory.context}
        tag.tagSupport.mutatingRender = oldTagSetup.mutatingRender;
        oldTagSetup.newest = tag;
        oldTagSetup.propsConfig = { ...tag.tagSupport.propsConfig };
        if (oldest) {
            oldest.tagSupport.propsConfig = { ...tag.tagSupport.propsConfig };
        }
        if (madeSubject) {
            childSubject.value.forEach(kid => {
                kid.values.forEach((value, index) => {
                    if (!(value instanceof Function)) {
                        return;
                    }
                    if (kid.values[index].isChildOverride) {
                        return; // already overwritten
                    }
                    // all functions need to report to me
                    kid.values[index] = function (...args) {
                        (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_4__.runTagCallback)(value, tag.ownerTag, this, args);
                        // runTagCallback(value, tag, this, args)
                    };
                    kid.values[index].isChildOverride = true;
                });
            });
        }
        return tag;
    };
    return innerTagWrap;
}


/***/ }),

/***/ "../../taggedjs/main/ts/tagElement.ts":
/*!********************************************!*\
  !*** ../../taggedjs/main/ts/tagElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAppTagRender: () => (/* binding */ addAppTagRender),
/* harmony export */   applyTagUpdater: () => (/* binding */ applyTagUpdater),
/* harmony export */   tagElement: () => (/* binding */ tagElement)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderExistingTag.function */ "../../taggedjs/main/ts/renderExistingTag.function.ts");


const appElements = [];
function tagElement(app, // (...args: unknown[]) => TemplaterResult,
element, props) {
    const appElmIndex = appElements.findIndex(appElm => appElm.element === element);
    if (appElmIndex >= 0) {
        appElements[appElmIndex].tag.destroy();
        appElements.splice(appElmIndex, 1);
        // an element already had an app on it
        console.warn('Found and destroyed app element already rendered to element', { element });
    }
    // Create the app which returns [props, runOneTimeFunction]
    const wrapper = app(props);
    // have a function setup and call the tagWrapper with (props, {update, async, on})
    const result = applyTagUpdater(wrapper);
    const { tag } = result;
    tag.appElement = element;
    tag.tagSupport.oldest = tag;
    addAppTagRender(tag.tagSupport, tag);
    const templateElm = document.createElement('template');
    templateElm.setAttribute('id', 'app-tag-' + appElements.length);
    templateElm.setAttribute('app-tag-detail', appElements.length.toString());
    element.appendChild(templateElm);
    tag.buildBeforeElement(templateElm);
    element.setUse = app.original.setUse;
    appElements.push({ element, tag });
    return { tag, tags: app.original.tags };
}
function applyTagUpdater(wrapper) {
    const tagSupport = wrapper.tagSupport;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(tagSupport, undefined);
    // Call the apps function for our tag templater
    const tag = wrapper.wrapper(tagSupport);
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(tagSupport, tag);
    return { tag, tagSupport };
}
/** Overwrites arguments.tagSupport.mutatingRender */
function addAppTagRender(tagSupport, tag) {
    tagSupport.templater.redraw = () => {
        const existingTag = tag;
        const { retag } = tagSupport.templater.renderWithSupport(tagSupport, existingTag, // newest
        {});
        tag.updateByTag(retag);
        return retag;
    };
    tagSupport.mutatingRender = () => {
        (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__.renderExistingTag)(tag, tagSupport.templater, tagSupport);
        return tag;
    };
}


/***/ }),

/***/ "../../taggedjs/main/ts/tagRunner.ts":
/*!*******************************************!*\
  !*** ../../taggedjs/main/ts/tagRunner.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runAfterRender: () => (/* binding */ runAfterRender),
/* harmony export */   runBeforeDestroy: () => (/* binding */ runBeforeDestroy),
/* harmony export */   runBeforeRedraw: () => (/* binding */ runBeforeRedraw),
/* harmony export */   runBeforeRender: () => (/* binding */ runBeforeRender)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");
// TODO: This should be more like `new TaggedJs().use({})`

// Life cycle 1
function runBeforeRender(tagSupport, tagOwner) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRender(tagSupport, tagOwner));
}
// Life cycle 2
function runAfterRender(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.afterRender(tagSupport, tag));
}
// Life cycle 3
function runBeforeRedraw(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRedraw(tagSupport, tag));
}
// Life cycle 4 - end of life
function runBeforeDestroy(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeDestroy(tagSupport, tag));
}


/***/ }),

/***/ "../../taggedjs/main/ts/templater.utils.ts":
/*!*************************************************!*\
  !*** ../../taggedjs/main/ts/templater.utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplaterResult: () => (/* binding */ TemplaterResult),
/* harmony export */   alterProps: () => (/* binding */ alterProps)
/* harmony export */ });
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagSupport.class */ "../../taggedjs/main/ts/TagSupport.class.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setUse.function */ "../../taggedjs/main/ts/setUse.function.ts");




class TemplaterResult {
    tagged;
    wrapper;
    insertBefore;
    newest;
    oldest;
    tagSupport;
    constructor(props, children) {
        this.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(this, children, props);
    }
    redraw;
    isTemplater = true;
    renderWithSupport(tagSupport, existingTag, ownerTag) {
        /* BEFORE RENDER */
        // signify to other operations that a rendering has occurred so they do not need to render again
        ++tagSupport.memory.renderCount;
        const runtimeOwnerTag = existingTag?.ownerTag || ownerTag;
        // const insertBefore = tagSupport.templater.insertBefore
        if (existingTag) {
            tagSupport.propsConfig = { ...existingTag.tagSupport.propsConfig };
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runBeforeRedraw)(tagSupport, existingTag);
        }
        else {
            // first time render
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runBeforeRender)(tagSupport, runtimeOwnerTag);
            // TODO: Logic below most likely could live within providers.ts inside the runBeforeRender function
            const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_3__.setUse.memory.providerConfig;
            providers.ownerTag = runtimeOwnerTag;
        }
        /* END: BEFORE RENDER */
        const templater = this;
        const retag = templater.wrapper(tagSupport);
        /* AFTER */
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runAfterRender)(tagSupport, retag);
        templater.newest = retag;
        retag.ownerTag = runtimeOwnerTag;
        tagSupport.newest = retag;
        return { remit: true, retag };
    }
}
/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
function alterProps(props, templater) {
    function callback(toCall, callWith) {
        const callbackResult = toCall(...callWith);
        // const tag = templater.oldest as Tag
        const tag = templater.newest;
        // const tagSupport = tag.tagSupport
        // const tagSupport = templater.tagSupport
        const tagSupport = tag?.ownerTag?.tagSupport;
        tagSupport.render();
        return callbackResult;
    }
    const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(props);
    const watchProps = isPropTag ? 0 : props;
    const newProps = resetFunctionProps(watchProps, callback);
    return newProps;
}
function resetFunctionProps(props, callback) {
    if (typeof (props) !== 'object') {
        return props;
    }
    const newProps = props;
    // BELOW: Do not clone because if first argument is object, the memory ref back is lost
    // const newProps = {...props} 
    Object.entries(newProps).forEach(([name, value]) => {
        if (value instanceof Function) {
            const original = newProps[name].original;
            if (original) {
                return; // already previously converted
            }
            newProps[name] = (...args) => {
                return callback(value, args);
            };
            newProps[name].original = value;
            return;
        }
    });
    return newProps;
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateExistingTag.function.ts":
/*!************************************************************!*\
  !*** ../../taggedjs/main/ts/updateExistingTag.function.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingTag: () => (/* binding */ updateExistingTag)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagRunner */ "../../taggedjs/main/ts/tagRunner.ts");

function updateExistingTag(templater, ogTag, existingSubject) {
    const tagSupport = ogTag.tagSupport;
    const oldest = tagSupport.oldest;
    const newest = tagSupport.newest;
    // runBeforeRedraw(oldest.tagSupport, newest || oldest)
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(oldest.tagSupport, oldest);
    const retag = templater.wrapper(tagSupport);
    templater.newest = retag;
    tagSupport.newest = retag;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(oldest.tagSupport, oldest);
    ogTag.updateByTag(retag);
    // oldest.updateByTag(retag)
    existingSubject.set(templater);
    return [];
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateExistingTagComponent.function.ts":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/ts/updateExistingTagComponent.function.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingTagComponent: () => (/* binding */ updateExistingTagComponent)
/* harmony export */ });
/* harmony import */ var _Tag_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag.utils */ "../../taggedjs/main/ts/Tag.utils.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepFunctions */ "../../taggedjs/main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hasTagSupportChanged.function */ "../../taggedjs/main/ts/hasTagSupportChanged.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");





function updateExistingTagComponent(ownerTag, tempResult, existingSubject) {
    let existingTag = existingSubject.tag;
    //const template = existingSubject.template
    const insertBefore = existingTag.tagSupport.templater.insertBefore;
    // tag existingTag
    const oldWrapper = existingTag.tagSupport.templater.wrapper;
    const newWrapper = tempResult.wrapper;
    let isSameTag = false;
    if (oldWrapper && newWrapper) {
        const oldFunction = oldWrapper.original;
        const newFunction = newWrapper.original;
        isSameTag = oldFunction === newFunction;
    }
    const latestProps = tempResult.tagSupport.propsConfig.latest;
    const oldTagSetup = existingTag.tagSupport;
    oldTagSetup.propsConfig.latest = latestProps;
    if (!isSameTag) {
        (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__.destroyTagMemory)(existingTag, existingSubject);
    }
    else {
        const subjectTagSupport = existingTag.tagSupport;
        // old props may have changed, reclone first
        let oldCloneProps = subjectTagSupport.propsConfig.clonedProps;
        const newProps = subjectTagSupport.propsConfig.latest;
        // if the new props are NOT HTML children, then clone the props for later render cycle comparing
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(newProps)) {
            oldCloneProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_1__.deepClone)(newProps);
        }
        const newTagSupport = tempResult.tagSupport;
        const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_3__.hasTagSupportChanged)(oldTagSetup, newTagSupport);
        if (!hasChanged) {
            return; // its the same tag component
        }
    }
    (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.setValueRedraw)(tempResult, existingSubject, ownerTag);
    oldTagSetup.templater = tempResult;
    const newTag = tempResult.redraw();
    // detect if both the function is the same and the return is the same
    const isLikeTag = isSameTag && existingTag.isLikeTag(newTag);
    if (isLikeTag) {
        existingTag.updateByTag(newTag);
    }
    else {
        existingSubject.tagSupport = newTag.tagSupport;
        existingSubject.tag = newTag;
        oldTagSetup.oldest = newTag;
        // Although function looked the same it returned a different html result
        if (isSameTag) {
            existingTag.destroy();
        }
    }
    oldTagSetup.newest = newTag;
    oldTagSetup.propsConfig = { ...tempResult.tagSupport.propsConfig };
    return;
}


/***/ }),

/***/ "../../taggedjs/main/ts/updateExistingValue.function.ts":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/ts/updateExistingValue.function.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingValue: () => (/* binding */ updateExistingValue)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance */ "../../taggedjs/main/ts/isInstance.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindSubjectCallback.function */ "../../taggedjs/main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processSubjectValue.function */ "../../taggedjs/main/ts/processSubjectValue.function.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processTagArray */ "../../taggedjs/main/ts/processTagArray.ts");
/* harmony import */ var _updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateExistingTagComponent.function */ "../../taggedjs/main/ts/updateExistingTagComponent.function.ts");
/* harmony import */ var _updateExistingTag_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateExistingTag.function */ "../../taggedjs/main/ts/updateExistingTag.function.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./processRegularValue.function */ "../../taggedjs/main/ts/processRegularValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkDestroyPrevious.function */ "../../taggedjs/main/ts/checkDestroyPrevious.function.ts");








function updateExistingValue(subject, value, ownerTag) {
    const subjectSubArray = subject;
    const subjectSubTag = subject;
    const isChildSubject = subjectSubArray.isChildSubject;
    const isComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(value);
    // If we are working with tag component 2nd argument children, the value has to be digged
    if (isChildSubject) {
        value = value.value; // A subject contains the value
    }
    const oldInsertBefore = subject.template || subjectSubTag.tag?.tagSupport.templater.insertBefore || subjectSubTag.clone;
    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__.checkDestroyPrevious)(subject, value);
    // handle already seen tag components
    if (isComponent) {
        if (!subjectSubTag.tag) {
            const templater = value;
            const { retag } = templater.renderWithSupport(value.tagSupport, undefined, ownerTag);
            templater.newest = retag;
            templater.oldest = retag;
            subjectSubTag.tag = retag;
            subjectSubTag.tagSupport = retag.tagSupport;
            retag.buildBeforeElement(oldInsertBefore, {
                forceElement: true,
                counts: { added: 0, removed: 0 },
            });
            return;
        }
        return (0,_updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__.updateExistingTagComponent)(ownerTag, value, // latest value
        subjectSubTag);
    }
    // was component but no longer
    const subjectTag = subjectSubTag.tag;
    if (subjectTag) {
        handleStillTag(subjectTag, subject, value, ownerTag);
        return;
    }
    // its another tag array
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(value)) {
        const insertBefore = subjectSubArray.template || subjectSubTag.tag?.tagSupport.templater.insertBefore;
        (0,_processTagArray__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(subject, value, insertBefore, ownerTag, { counts: {
                added: 0,
                removed: 0,
            } });
        return;
    }
    // now its a function
    if (value instanceof Function) {
        subjectSubTag.set((0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__.bindSubjectCallback)(value, ownerTag));
        return;
    }
    // we have been given a subject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(value)) {
        subjectSubTag.set(value.value); // let ValueSubject now of newest value
        return;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(value)) {
        subjectSubTag.template = oldInsertBefore;
    }
    // This will cause all other values to render
    subjectSubTag.set(value); // let ValueSubject now of newest value
    return;
}
function handleStillTag(existingTag, existing, value, ownerTag) {
    const oldWrapper = existingTag.tagSupport.templater.wrapper;
    const newWrapper = value?.wrapper;
    const wrapMatch = oldWrapper && newWrapper && oldWrapper?.original === newWrapper?.original;
    // TODO: We shouldn't need both of these
    const isSameTag = value && existingTag.lastTemplateString === value.lastTemplateString;
    const isSameTag2 = value && value.getTemplate && existingTag.isLikeTag(value);
    if (isSameTag || isSameTag2) {
        return (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processTag)(value, existing, existing.template, ownerTag, // existingTag, // tag,
        {
            counts: {
                added: 0,
                removed: 0,
            }
        });
    }
    if (wrapMatch) {
        return (0,_updateExistingTag_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingTag)(value, existingTag, existing);
    }
    const subject = existing;
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__.processRegularValue)(value, subject, subject.template);
}


/***/ }),

/***/ "../../taggedjs/main/ts/watch.function.ts":
/*!************************************************!*\
  !*** ../../taggedjs/main/ts/watch.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLet.function */ "../../taggedjs/main/ts/setLet.function.ts");

/** When an item in watch array changes, callback function will be triggered */
function watch(currentValues, callback) {
    let previousValues = (0,_setLet_function__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [previousValues, previousValues = x]);
    if (previousValues === undefined) {
        callback(currentValues, previousValues);
        const result = { currentValues, previousValues };
        previousValues = currentValues;
        return currentValues;
    }
    const allExact = currentValues.every((item, index) => item === previousValues[index]);
    if (allExact) {
        return currentValues;
    }
    callback(currentValues, previousValues);
    previousValues = currentValues;
    return currentValues;
}


/***/ }),

/***/ "./node_modules/taggedjs-dump/js/copyText.function.js":
/*!************************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/copyText.function.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyText: () => (/* binding */ copyText)
/* harmony export */ });
function copyText(text) {
    var copyText = document.createElement('textarea');
    copyText.value = text;
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyText);
}
//# sourceMappingURL=copyText.function.js.map

/***/ }),

/***/ "./node_modules/taggedjs-dump/js/index.js":
/*!************************************************!*\
  !*** ./node_modules/taggedjs-dump/js/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dump: () => (/* binding */ dump)
/* harmony export */ });
/* harmony import */ var _copyText_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copyText.function.js */ "./node_modules/taggedjs-dump/js/copyText.function.js");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");


const dump = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ key, value, 
// show,
// showChange,
showKids = false, showLevels = -1, showAll, format = 'small', formatChange = () => undefined, isRootDump = true, onHeaderClick = () => undefined }) => {
    const isObject = () => value && value instanceof Object;
    const typing = value === null ? 'null' : typeof (value);
    let show = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [show, show = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setProp)(x => [format, format = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setProp)(x => [showAll, showAll = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(undefined)(x => [arrayView, arrayView = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.onInit)(() => {
        const levelsDefined = (showLevels >= 0 && showLevels);
        // detect auto levels (default) and if object lets only show 2 levels deep
        const autoShowObjectLevels = showLevels === -1 && !key && isObject();
        showLevels = levelsDefined || (autoShowObjectLevels ? 2 : 0);
        if (showLevels > 0) {
            show = true;
        }
    });
    /* IF 2: simple value ELSE goto objectTemplate */
    function simpleTemplate() {
        if (['boolean', 'number', 'string'].includes(typing)) {
            return dumpSimple({ key: key, value: value, onHeaderClick });
        }
        return objectTemplate();
    }
    /* IF 3: object value */
    function objectTemplate() {
        if (value === null) {
            if (!showKids) {
                return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) ``;
            }
            return dumpSimple({
                key: key,
                value: 'null',
                onHeaderClick
            });
        }
        const isArray = (!format || format === 'small') && (value.push && value.pop);
        return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
      ${isRootDump && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
        <div style="width: 100%;line-height: 90%;">
          <div style="position:relative;">
            <div style="display:flex;font-size:50%;position:absolute;top:-18px;right:-6px">
              ${!format || format === 'small' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
                <a
                  style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
            (showAll ? 'background-color:#33cd5f;' : 'background-color:#444444')}
                  class="hover-bg-balanced"
                  onclick=${() => showAll = !showAll}
                  title="hide/show all sub objects"
                >👁</a>
              `}
              <a
                style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
            (!format || format === 'small' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
                class="hover-bg-balanced"
                onclick=${() => formatChange(format = 'small')}
              >small</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
            (format === 'json' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
                class="hover-bg-balanced"
                onclick=${() => formatChange(format = 'json')}
              >json</a>
              <a style=${"margin:1px;border-radius:5px;color:white;align-items:center;display:flex;padding-left:0.2em;padding-right:0.2em;" +
            (format === 'json' ? 'background-color:#33cd5f;' : 'background-color:#444444')}
                class="hover-bg-balanced active-bg-energized"
                onclick=${() => copyAsJsonText(value)}
              >copy</a>
            </div>
          </div>
        </div>
      `}
      ${(format === 'json' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
        <textarea *ngIf="" disabled wrap="off" style="width:100%;height:25vh;min-height:400px;color:white;"
        >${JSON.stringify(value, null, 2)}</textarea>
      `) || ((isArray && dumpArray({
            key,
            value,
            show,
            // arrayView,
            showAll,
            showKids,
            showLevels,
            formatChange,
            // showChangeValue,
        })) ||
            dumpObject({
                key,
                show,
                // showChange: x => showChangeValue(show = x),
                showKids,
                showLevels,
                value,
                showAll,
                formatChange,
                onHeaderClick,
            }))}
    `;
    }
    /* IF 1: undefined ELSE goto simpleTemplate */
    return [null, undefined].includes(value) ? dumpSimple({
        key: key,
        value: typing,
        onHeaderClick
    }) : simpleTemplate();
});
const dumpArray = ({ key, value, show, showAll, showKids, 
// arrayView,
showLevels, formatChange,
// showChangeValue,
 }) => {
    let showValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [showValue, showValue = x]);
    let arrayView = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(undefined)(x => [arrayView, arrayView = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.watch)([show], ([show]) => showValue = show);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!-- array -->
  <div
    style="color:#111111;background-color:#f2dede;border:1px solid black;border-radius:5px;flex-direction: column;display:flex"
  >
    <div
      style=${"padding:0.2em;display:flex;justify-content:space-between;flex-grow:1;font-size:65%;border-color:white;color:white;background-color:#ef473a;" +
        (showValue ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
    >
      <a style="flex-grow:1" onclick=${() => {
        showValue = !showValue;
    }}>
        <strong>${key}</strong>
      </a>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
        <a style="text-decoration:underline;" style.font-weight=${arrayView === 'table' ? 'bold' : ''}
          onclick=${() => arrayView = arrayView === 'table' ? undefined : 'table'}>${arrayView === 'table' ? 'flex' : 'table'}</a>
      </sup>
      <sup style="opacity:80%;font-size:75%;padding-left:0.4em">[${value.length}]</sup>
    </div>
    
    ${(showAll || showValue || showKids || (showValue == undefined && showLevels > 0)) && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
      <!-- array displays wrap -->
      <div style="text-align:left;display:flex;flex-wrap:wrap;margin:0.2em;gap:0.2em">
        ${arraysDisplay({
        showLevels, showAll, showKids,
        formatChange,
        array: value,
        arrayView: arrayView
    })}
      </div>
    `}
  </div>
  `;
};
function copyAsJsonText(value) {
    const text = JSON.stringify(value, null, 2);
    (0,_copyText_function_js__WEBPACK_IMPORTED_MODULE_0__.copyText)(text);
}
const arrayTable = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ array, 
// showLevels,
showAll, showKids, toggleColumnDialog, columnNames, formatChange, }) => {
    console.log('🍴 array table executed');
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!-- array table -->
    <!-- overflow-y: scroll; -->
    <div style="max-height: 800px;max-width:100vw;overflow: scroll;">
      <table cellPadding="2" cellSpacing="2" border="0">
        ${array.length && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <thead style="position: sticky;top: 0;font-size: 0.8em;">
            <tr>
              ${columnNames.map(key => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
                <th onclick=${toggleColumnDialog}>${key}</th>
              `.key(key))}
            </tr>
          </thead>
        `}
        <tbody>
          ${array.map(row => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
            <tr>
              ${columnNames.map(name => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
                <td>
                  ${dump({
        value: row[name],
        showLevels: 0,
        showAll,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
    })}
                </td>
              `.key(row[name]))}
            </tr>
          `.key(row))}
        </tbody>
      </table>
    </div>
  `;
});
const arraysDisplay = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ showLevels, showAll, showKids, array, arrayView, formatChange, }) => {
    const allColumnNames = array.length ? Object.keys(array[0]) : [];
    let columnNames = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(allColumnNames)(x => [columnNames, columnNames = x]);
    let showColumnDialog = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [showColumnDialog, showColumnDialog = x]);
    let uniqueId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.set)('columnDialog' + performance.now());
    const toggleColumnDialog = () => {
        showColumnDialog = !showColumnDialog;
        const element = document.getElementById(uniqueId);
        if (showColumnDialog) {
            element.showModal();
        }
        else {
            element.close();
        }
    };
    const arrayTag = arrayView === 'table' ? arrayTable({
        showAll, showKids,
        array, toggleColumnDialog, columnNames,
        formatChange,
    }) : arrayDisplay({
        array, showLevels, showAll, showKids,
        formatChange,
        columnNames, toggleColumnDialog
    });
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    ${arrayTag}

    <dialog id=${uniqueId} class="dump-dialog" style="padding:0"
      onmousedown="var r = this.getBoundingClientRect();(r.top<=event.clientY&&event.clientY<=r.top+r.height&&r.left<=event.clientX&&event.clientX<=r.left+r.width) || this.close()"
      ondragstart="const {e,dt,t} = {t:this,e:event,dt:event.dataTransfer};const d=t.drag=t.drag||{x:0,y:0};d.initX=d.x;d.startX=event.clientX-t.offsetLeft;d.startY=event.clientY-t.offsetTop;t.ondragover=e.target.ondragover=(e)=>e.preventDefault();dt.effectAllowed='move';dt.dropEffect='move'"
      ondrag="const {t,e,dt,d}={e:event,dt:event.dataTransfer,d:this.drag}; if(e.clientX===0) return;d.x = d.x + e.offsetX - d.startX; d.y = d.y + e.offsetY - d.startY; this.style.left = d.x + 'px'; this.style.top = d.y+'px';"
      ondragend="const {t,e,d}={t:this,e:event,d:this.drag};if (d.initX === d.x) {d.x=d.x+e.offsetX-(d.startX-d.x);d.y=d.y+e.offsetY-(d.startY-d.y);this.style.transform=translate3d(d.x+'px', d.y+'px', 0)};this.draggable=false"
      onclose=${() => {
        showColumnDialog = false;
    }}
    >
      <div
        style="padding:.25em;background-color:#666;color:white;"
        onmousedown="this.parentNode.draggable=true"
      >Column Modifier</div>
      <div style="padding:.25em">
        ${allColumnNames.map(name => {
        const included = columnNames.includes(name);
        return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
            <li
              style="display:flex;justify-content: space-between"
              class="hover-bg-warning"
            >
              <a onclick=${() => included ? columnNames = columnNames.filter(n => n !== name) : columnNames.push(name)}
                style="cursor:pointer;"
              >
                <input type="checkbox" ${included && 'checked'} />&nbsp;${name}
              </a>

              ${included && columnNames.length !== allColumnNames.length ? (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
                <a style="color:blue;" onclick=${() => columnNames = [...allColumnNames]}><small>all</small></a>
              ` : (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
                <a style="color:blue;" onclick=${() => columnNames = [name]}><small>only</small></a>
              `}
            </li>
          `.key(name);
    })}
        <button type="button" onclick=${toggleColumnDialog}>🅧 close</button>
      </div>
    </dialog>

    <style>
      dialog.dump-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.7); /* Set a semi-transparent black background */
      }

      .child-margin-xxs {margin:0.2em;}
      
      .hover-bg-warning:hover {background-color:#fcf8e3}
      .hover-bg-balanced:hover {background-color:#33cd5f}
      .active-bg-energized:active {background-color:#ffc900}
    </style>
  `;
});
/** recurser */
const arrayDisplay = ({ array, showLevels, showAll, showKids, columnNames, formatChange, toggleColumnDialog, }) => {
    console.log('🟥 array display executed');
    return array.map((item, index) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `${dump({
        value: filterObjectByKeys(item, columnNames),
        showLevels,
        showAll,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
        onHeaderClick: toggleColumnDialog
    })}`.key({ item: item, index }));
};
function filterObjectByKeys(inputObject, keysArray) {
    const filteredObject = {};
    keysArray.forEach(key => {
        if (inputObject.hasOwnProperty(key)) {
            filteredObject[key] = inputObject[key];
        }
    });
    return filteredObject;
}
const dumpObject = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ key, showKids, show, 
// showChange,
showLevels, value, showAll, onHeaderClick, formatChange, }) => {
    let showLower = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(false)(x => [showLower, showLower = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.watch)([show], ([show]) => showLower = show);
    const continueDump = !key || showKids || showLower || (showLower == undefined && showLevels > 0);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div style="flex: 1 1 10em;text-align:left;">
      <div
        style="font-size:90%;color:#111111;background-color:#d9edf7;border:1px solid black;border-radius:5px;flex-direction: column;display:flex;"
      >
        ${key && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <a
            style=${"padding:0.2em;display:flex;justify-content:space-between;font-size:65%;color:white;border-color:white;flex-grow:1;background-color:#387ef5;" +
        (showLower ? 'border-bottom-width:1px;border-bottom-style:solid;border-color:black;' : '')}
            onclick=${() => {
        showLower = !showLower;
    }}
          >
            <strong>${key}</strong>
            <sup style="opacity:80%;font-size:75%;padding-left:0.4em">
              {${Object.keys(value).length}}
            </sup>
          </a>
        `}
        
        ${continueDump && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <div style="display:flex;flex-wrap:wrap">
            ${Object.entries(value).map(([key, value]) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
              <!-- recurse -->
              <div class="child-margin-xxs"
                style=${'padding:0.2em;overflow:auto;display:flex;flex-wrap:wrap;' +
        (!value || typeof (value) !== 'object' ? 'flex: 1 1 10em;' : 'flex-grow:1;')}
              >
                ${dump({
        value,
        key,
        show: showLower,
        /*
        showChange: x => {
          showLower = x
          // showChange(showLower = x)
        },
        */
        showAll,
        showLevels: showLevels - 1,
        showKids: showAll || showKids,
        isRootDump: false,
        formatChange,
        onHeaderClick,
    })}
            `.key([key, value]))}
          </div>
        `}
      </div>
    </div>
  `;
});
function dumpSimple({ key, value, onHeaderClick }) {
    function simpleValue() {
        return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
      <div onclick=${() => (0,_copyText_function_js__WEBPACK_IMPORTED_MODULE_0__.copyText)(value)}
        style=${"cursor:pointer;" +
            (value === true ? 'color:#28a54c' : '') +
            (value === false ? 'color:#e42112' : '')}
        class="hover-bg-warning active-bg-energized"
        title = ${value.constructor?.name === 'Number' && value > 1000000000 ? value > 946702800000 ? 'Milliseconds > Unix epoch:\n' + (new Date(value).toLocaleString()) : 'Seconds > Unix epoch:\n' + (new Date(value * 1000).toLocaleString()) : ''}
      >${value === null && 'null' || value === false && 'false' || value === undefined && 'undefined' || value}</div>
    `;
    }
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div style="font-size:75%;flex:1 1 10em;color:#111111">
      ${key && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
        <div style="border-bottom-width:1px;border-bottom-style:solid;border-color:black;font-size:65%;border-color:white;line-height: 95%;font-weight:bold;"
          onclick=${() => onHeaderClick()}
        >${key}</div>
      `}

      ${value.search && (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://') ? (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
        <a onclick=${() => (0,_copyText_function_js__WEBPACK_IMPORTED_MODULE_0__.copyText)(value)} href=${value}
          target="_blank"
          class="hover-bg-warning active-bg-energized"
          title="tap to copy"
        >${value}</a>
      ` : simpleValue()}
    </div>
  `;
}
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dump: () => (/* binding */ Dump),
/* harmony export */   tagElement: () => (/* reexport safe */ taggedjs__WEBPACK_IMPORTED_MODULE_0__.tagElement)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/ts/index.ts");
/* harmony import */ var taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs-dump */ "./node_modules/taggedjs-dump/js/index.js");
/* harmony import */ var _sampleData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleData */ "./src/sampleData.ts");




const Dump = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let userJsonString = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)('null')(x => [userJsonString, userJsonString = x]);
    // const userJson = JSON.parse(userJsonString)
    const userJson = sandboxEval(userJsonString, {});
    userJsonString = JSON.stringify(userJson, null, 2);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <h3>🔭 TaggedJs Dump</h3>
    <div style="display:flex;flex-wrap:wrap;align-item:center;justify-content: center;gap:1em;">
      <div>
        <textarea wrap="off" placeholder="past json here" onchange=${(event) => userJsonString = event.target.value}
        >${userJsonString}</textarea>
      </div>
      
      <div style="min-width:110px;width:100%;max-width:900px;background-color:rgba(255,255,255,.5);">
        ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: userJson
    })}
      </div>
      
      <div style="max-width:900px">
        ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: {
            test: {
                anotherOne: 22
            },
            arrayTest: [{
                    name: 'something',
                    location: { street: '4361' },
                }, {
                    name: 'in this',
                    location: { street: '2235' },
                }, {
                    name: 'world',
                    location: { street: '4785' },
                }]
        }
    })}
        <hr />
        ${(0,taggedjs_dump__WEBPACK_IMPORTED_MODULE_1__.dump)({
        value: _sampleData__WEBPACK_IMPORTED_MODULE_2__.stripeList
    })}
      </div>
    </div>
  `;
});
// execute script in private context
function sandboxEval(src, ctx) {
    ctx = new Proxy(ctx, { has: () => true });
    let func = (new Function("with(this) { return (" + src + ")}"));
    return func.call(ctx);
}

})();

var __webpack_exports__Dump = __webpack_exports__.Dump;
var __webpack_exports__tagElement = __webpack_exports__.tagElement;
export { __webpack_exports__Dump as Dump, __webpack_exports__tagElement as tagElement };

//# sourceMappingURL=bundle.js.map