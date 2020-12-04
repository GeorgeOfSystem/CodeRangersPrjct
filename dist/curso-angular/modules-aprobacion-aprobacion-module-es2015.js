(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-aprobacion-aprobacion-module"],{

/***/ "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js ***!
  \*************************************************************************/
/*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CKButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CKGroupDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */


const _c0 = ["host"];
class CKButtonDirective {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    initialize(editor) {
        editor.instance.addCommand(this.command, {
            exec: (evt) => {
                this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    }
    ngOnInit() {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    }
}
CKButtonDirective.ɵfac = function CKButtonDirective_Factory(t) { return new (t || CKButtonDirective)(); };
CKButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CKButtonDirective, selectors: [["ckbutton"]], inputs: { label: "label", command: "command", toolbar: "toolbar", name: "name", icon: "icon" }, outputs: { click: "click" } });
CKButtonDirective.propDecorators = {
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    command: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ckbutton'
            }]
    }], function () { return []; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], command: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
class CKGroupDirective {
    ngAfterContentInit() {
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach((button) => (button.toolbar = this.name));
    }
    initialize(editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach((button) => {
            button.initialize(editor);
        });
    }
}
CKGroupDirective.ɵfac = function CKGroupDirective_Factory(t) { return new (t || CKGroupDirective)(); };
CKGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CKGroupDirective, selectors: [["ckgroup"]], contentQueries: function CKGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
    } }, inputs: { name: "name", previous: "previous", subgroupOf: "subgroupOf" } });
CKGroupDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previous: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    subgroupOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    toolbarButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CKButtonDirective,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ckgroup'
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previous: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subgroupOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toolbarButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKButtonDirective]
        }] }); })();

// Imports
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
class CKEditorComponent {
    /**
     * Constructor
     */
    constructor(zone) {
        this.zone = zone;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = '';
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    ngOnChanges(changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    }
    /**
     * On component destroy
     */
    ngOnDestroy() {
        if (this.instance) {
            this.instance.removeAllListeners();
            CKEDITOR.instances[this.instance.name].destroy();
            this.instance.destroy();
            this.instance = null;
        }
    }
    /**
     * On component view init
     */
    ngAfterViewInit() {
        this.ckeditorInit(this.config || {});
    }
    /**
     * On component view checked
     */
    ngAfterViewChecked() {
        this.ckeditorInit(this.config || {});
    }
    /**
     * Value update process
     */
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }
    /**
     * CKEditor init
     */
    ckeditorInit(config) {
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', (evt) => {
                // if value has changed while instance loading
                // update instance with current component value
                if (this.instance.getData() !== this.value) {
                    this.instance.setData(this.value);
                }
                // send the evt to the EventEmitter
                this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', (evt) => {
                this.onTouched();
                let value = this.instance.getData();
                if (this.value !== value) {
                    // Debounce update
                    if (this.debounce) {
                        if (this.debounceTimeout)
                            clearTimeout(this.debounceTimeout);
                        this.debounceTimeout = setTimeout(() => {
                            this.updateValue(value);
                            this.debounceTimeout = null;
                        }, parseInt(this.debounce));
                        // Live update
                    }
                    else {
                        this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', (evt) => {
                this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', (evt) => {
                this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', (evt) => {
                this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', (evt) => {
                this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', (evt) => {
                this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', (evt) => {
                this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', (evt) => {
                this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach((group) => {
                group.initialize(this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach((button) => {
                button.initialize(this);
            });
        }
    }
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    }
    onChange(_) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    documentContains(node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    }
}
CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) { return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CKEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CKEditorComponent, selectors: [["ckeditor"]], contentQueries: function CKEditorComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKGroupDirective, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarGroups = _t);
    } }, viewQuery: function CKEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
    } }, inputs: { value: "value", config: "config", readonly: "readonly", debounce: "debounce" }, outputs: { change: "change", editorChange: "editorChange", ready: "ready", blur: "blur", focus: "focus", contentDom: "contentDom", fileUploadRequest: "fileUploadRequest", fileUploadResponse: "fileUploadResponse", paste: "paste", drop: "drop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CKEditorComponent),
                multi: true
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["host", ""]], template: function CKEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", null, 0);
    } }, encapsulation: 2 });
CKEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CKEditorComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    editorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentDom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    fileUploadRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    fileUploadResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    paste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    drop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    host: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['host', { static: false },] }],
    toolbarButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CKButtonDirective,] }],
    toolbarGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CKGroupDirective,] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ckeditor',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CKEditorComponent),
                        multi: true
                    },
                ],
                template: `<textarea #host></textarea>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contentDom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fileUploadRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fileUploadResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['host', { static: false }]
        }], toolbarButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKButtonDirective]
        }], toolbarGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKGroupDirective]
        }] }); })();

/**
 * CKEditorModule
 */
class CKEditorModule {
}
CKEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CKEditorModule });
CKEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CKEditorModule_Factory(t) { return new (t || CKEditorModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CKEditorModule, { declarations: function () { return [CKEditorComponent, CKButtonDirective, CKGroupDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CKEditorComponent, CKButtonDirective, CKGroupDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
                exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ "./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AprobacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobacionRoutingModule", function() { return AprobacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aprobacion.component */ "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts");





const routes = [{ path: "", component: _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"] }];
class AprobacionRoutingModule {
}
AprobacionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AprobacionRoutingModule });
AprobacionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AprobacionRoutingModule_Factory(t) { return new (t || AprobacionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AprobacionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/home/modules/aprobacion/aprobacion.component.ts ***!
  \*************************************************************************/
/*! exports provided: AprobacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobacionComponent", function() { return AprobacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/business-layer.service */ "./src/app/shared/services/business-layer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class AprobacionComponent {
    constructor(formBuilder, authService, b_Layer, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.b_Layer = b_Layer;
        this.router = router;
    }
    ngOnInit() {
        this.formularioForm = this.formBuilder.group({
            nombre: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            negocio: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            direccion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            requisitos: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            propuesta: "",
            ownerId: "",
            estado: ""
        });
        this.historialForm = this.formBuilder.group({
            sucursal: "",
            negocio: "",
            estado: "",
            ownerId: ""
        });
    }
    onCreate() {
        console.log("Form group: ", this.formularioForm.value);
        this.b_LayerSubs = this.b_Layer
            .addProduct(Object.assign(Object.assign({}, this.formularioForm.value), { ownerId: this.authService.getUserId(), estado: "En Espera", propuesta: this.ckeditorContent }))
            .subscribe(res => {
            console.log("Resp: ", res);
            this.historialSubs = this.b_Layer
                .addProductBase({
                sucursal: this.formularioForm.value.direccion,
                negocio: this.formularioForm.value.negocio,
                estado: "En Espera",
                ownerId: this.authService.getUserId()
            }, "historial")
                .subscribe(res => {
                console.log("Resp: ", res);
            }, err => {
                console.log("Error de servidor");
            });
            this.router.navigate(["historial"]);
        }, err => {
            console.log("Error de servidor");
        });
    }
    ngOnDestroy() {
        this.b_Layer ? this.b_LayerSubs.unsubscribe() : "";
    }
}
AprobacionComponent.ɵfac = function AprobacionComponent_Factory(t) { return new (t || AprobacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_3__["BusinessLayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AprobacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AprobacionComponent, selectors: [["app-aprobacion"]], decls: 42, vars: 2, consts: [[1, "example-card"], ["justify-content:center", "", "align-items:center", ""], [3, "formGroup"], [1, "row"], [1, "col"], ["for", "exampleFormControlInput1"], ["type", "text", "formControlName", "nombre", "placeholder", "Empresa", 1, "form-control"], ["formControlName", "negocio", 1, "form-control"], [1, "form-group"], ["type", "email", "formControlName", "direccion", "id", "exampleFormControlInput1", "placeholder", "San miguel Calacoto Local 230", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["formControlName", "requisitos", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [3, "ngModel", "ngModelChange"], [2, "text-align", "center"], ["mat-button", "", 3, "click"]], template: function AprobacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tipo de Negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Restaurante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gimnasio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Caf\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Religi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Requisitos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Propuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ckeditor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AprobacionComponent_Template_ckeditor_ngModelChange_38_listener($event) { return ctx.ckeditorContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AprobacionComponent_Template_button_click_40_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ckeditorContent);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9tb2R1bGVzL2Fwcm9iYWNpb24vYXByb2JhY2lvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-aprobacion",
                templateUrl: "./aprobacion.component.html",
                styleUrls: ["./aprobacion.component.css"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_3__["BusinessLayerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/modules/aprobacion/aprobacion.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/modules/aprobacion/aprobacion.module.ts ***!
  \**********************************************************************/
/*! exports provided: AprobacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprobacionModule", function() { return AprobacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aprobacion.component */ "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts");
/* harmony import */ var _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aprobacion-routing.module */ "./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");
/* harmony import */ var src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/business-layer.service */ "./src/app/shared/services/business-layer.service.ts");












class AprobacionModule {
}
AprobacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AprobacionModule });
AprobacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AprobacionModule_Factory(t) { return new (t || AprobacionModule)(); }, providers: [src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_10__["BusinessLayerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AprobacionModule, { declarations: [_aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
                ],
                declarations: [_aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"]],
                providers: [src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_10__["BusinessLayerService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-aprobacion-aprobacion-module-es2015.js.map