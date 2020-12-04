(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-aprobacion-aprobacion-module"], {
    /***/
    "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js ***!
      \*************************************************************************/

    /*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */

    /***/
    function node_modulesNg2Ckeditor__ivy_ngcc__Fesm2015Ng2CkeditorJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CKEditorModule", function () {
        return CKEditorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CKEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return CKButtonDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return CKGroupDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /**
       * CKGroup component
       * Usage :
       *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
       *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
       *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
       *      </ckbutton>
       *   </ckeditor>
       */


      var _c0 = ["host"];

      var CKButtonDirective = /*#__PURE__*/function () {
        function CKButtonDirective() {
          _classCallCheck(this, CKButtonDirective);

          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CKButtonDirective, [{
          key: "initialize",
          value: function initialize(editor) {
            var _this = this;

            editor.instance.addCommand(this.command, {
              exec: function exec(evt) {
                _this.click.emit(evt);
              }
            });
            editor.instance.ui.addButton(this.name, {
              label: this.label,
              command: this.command,
              toolbar: this.toolbar,
              icon: this.icon
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.name) throw new Error('Attribute "name" is required on <ckbutton>');
            if (!this.command) throw new Error('Attribute "command" is required on <ckbutton>');
          }
        }]);

        return CKButtonDirective;
      }();

      CKButtonDirective.ɵfac = function CKButtonDirective_Factory(t) {
        return new (t || CKButtonDirective)();
      };

      CKButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CKButtonDirective,
        selectors: [["ckbutton"]],
        inputs: {
          label: "label",
          command: "command",
          toolbar: "toolbar",
          name: "name",
          icon: "icon"
        },
        outputs: {
          click: "click"
        }
      });
      CKButtonDirective.propDecorators = {
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        command: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKButtonDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ckbutton'
          }]
        }], function () {
          return [];
        }, {
          click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          command: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
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


      var CKGroupDirective = /*#__PURE__*/function () {
        function CKGroupDirective() {
          _classCallCheck(this, CKGroupDirective);
        }

        _createClass(CKGroupDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
            this.toolbarButtons.forEach(function (button) {
              return button.toolbar = _this2.name;
            });
          }
        }, {
          key: "initialize",
          value: function initialize(editor) {
            editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf); // Initialize each button within ckgroup

            this.toolbarButtons.forEach(function (button) {
              button.initialize(editor);
            });
          }
        }]);

        return CKGroupDirective;
      }();

      CKGroupDirective.ɵfac = function CKGroupDirective_Factory(t) {
        return new (t || CKGroupDirective)();
      };

      CKGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CKGroupDirective,
        selectors: [["ckgroup"]],
        contentQueries: function CKGroupDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
          }
        },
        inputs: {
          name: "name",
          previous: "previous",
          subgroupOf: "subgroupOf"
        }
      });
      CKGroupDirective.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subgroupOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toolbarButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CKButtonDirective]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ckgroup'
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previous: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subgroupOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toolbarButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKButtonDirective]
          }]
        });
      })(); // Imports

      /**
       * CKEditor component
       * Usage :
       *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
       */


      var CKEditorComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function CKEditorComponent(zone) {
          _classCallCheck(this, CKEditorComponent);

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

        _createClass(CKEditorComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.readonly && this.instance) {
              this.instance.setReadOnly(changes.readonly.currentValue);
            }
          }
          /**
           * On component destroy
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.ckeditorInit(this.config || {});
          }
          /**
           * On component view checked
           */

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.ckeditorInit(this.config || {});
          }
          /**
           * Value update process
           */

        }, {
          key: "updateValue",
          value: function updateValue(value) {
            var _this3 = this;

            this.zone.run(function () {
              _this3.value = value;

              _this3.onChange(value);

              _this3.onTouched();

              _this3.change.emit(value);
            });
          }
          /**
           * CKEditor init
           */

        }, {
          key: "ckeditorInit",
          value: function ckeditorInit(config) {
            var _this4 = this;

            if (typeof CKEDITOR === 'undefined') {
              console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
            } else {
              // Check textarea exists
              if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
              }

              if (this.readonly) {
                config.readOnly = this.readonly;
              } // CKEditor replace textarea


              this.instance = CKEDITOR.replace(this.host.nativeElement, config); // Set initial value

              this.instance.setData(this.value); // listen for instanceReady event

              this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this4.instance.getData() !== _this4.value) {
                  _this4.instance.setData(_this4.value);
                } // send the evt to the EventEmitter


                _this4.ready.emit(evt);
              }); // CKEditor change event

              this.instance.on('change', function (evt) {
                _this4.onTouched();

                var value = _this4.instance.getData();

                if (_this4.value !== value) {
                  // Debounce update
                  if (_this4.debounce) {
                    if (_this4.debounceTimeout) clearTimeout(_this4.debounceTimeout);
                    _this4.debounceTimeout = setTimeout(function () {
                      _this4.updateValue(value);

                      _this4.debounceTimeout = null;
                    }, parseInt(_this4.debounce)); // Live update
                  } else {
                    _this4.updateValue(value);
                  }
                } // Original ckeditor event dispatch


                _this4.editorChange.emit(evt);
              }); // CKEditor blur event

              this.instance.on('blur', function (evt) {
                _this4.blur.emit(evt);
              }); // CKEditor focus event

              this.instance.on('focus', function (evt) {
                _this4.focus.emit(evt);
              }); // CKEditor contentDom event

              this.instance.on('contentDom', function (evt) {
                _this4.contentDom.emit(evt);
              }); // CKEditor fileUploadRequest event

              this.instance.on('fileUploadRequest', function (evt) {
                _this4.fileUploadRequest.emit(evt);
              }); // CKEditor fileUploadResponse event

              this.instance.on('fileUploadResponse', function (evt) {
                _this4.fileUploadResponse.emit(evt);
              }); // CKEditor paste event

              this.instance.on('paste', function (evt) {
                _this4.paste.emit(evt);
              }); // CKEditor drop event

              this.instance.on('drop', function (evt) {
                _this4.drop.emit(evt);
              }); // Add Toolbar Groups to Editor. This will also add Buttons within groups.

              this.toolbarGroups.forEach(function (group) {
                group.initialize(_this4);
              }); // Add Toolbar Buttons to Editor.

              this.toolbarButtons.forEach(function (button) {
                button.initialize(_this4);
              });
            }
          }
          /**
           * Implements ControlValueAccessor
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._value = value;
            if (this.instance) this.instance.setData(value);
          }
        }, {
          key: "onChange",
          value: function onChange(_) {}
        }, {
          key: "onTouched",
          value: function onTouched() {}
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "documentContains",
          value: function documentContains(node) {
            return document.contains ? document.contains(node) : document.body.contains(node);
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              this._value = v;
              this.onChange(v);
            }
          }
        }]);

        return CKEditorComponent;
      }();

      CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
        return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CKEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CKEditorComponent,
        selectors: [["ckeditor"]],
        contentQueries: function CKEditorComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKGroupDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarGroups = _t);
          }
        },
        viewQuery: function CKEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
          }
        },
        inputs: {
          value: "value",
          config: "config",
          readonly: "readonly",
          debounce: "debounce"
        },
        outputs: {
          change: "change",
          editorChange: "editorChange",
          ready: "ready",
          blur: "blur",
          focus: "focus",
          contentDom: "contentDom",
          fileUploadRequest: "fileUploadRequest",
          fileUploadResponse: "fileUploadResponse",
          paste: "paste",
          drop: "drop"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return CKEditorComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["host", ""]],
        template: function CKEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", null, 0);
          }
        },
        encapsulation: 2
      });

      CKEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CKEditorComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        blur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        focus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentDom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        fileUploadRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        fileUploadResponse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        paste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        host: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['host', {
            "static": false
          }]
        }],
        toolbarButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CKButtonDirective]
        }],
        toolbarGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [CKGroupDirective]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ckeditor',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return CKEditorComponent;
              }),
              multi: true
            }],
            template: "<textarea #host></textarea>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          editorChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          contentDom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileUploadRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileUploadResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          paste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['host', {
              "static": false
            }]
          }],
          toolbarButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKButtonDirective]
          }],
          toolbarGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CKGroupDirective]
          }]
        });
      })();
      /**
       * CKEditorModule
       */


      var CKEditorModule = function CKEditorModule() {
        _classCallCheck(this, CKEditorModule);
      };

      CKEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CKEditorModule
      });
      CKEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CKEditorModule_Factory(t) {
          return new (t || CKEditorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CKEditorModule, {
          declarations: function declarations() {
            return [CKEditorComponent, CKButtonDirective, CKGroupDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CKEditorComponent, CKButtonDirective, CKGroupDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
            exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-ckeditor.js.map

      /***/

    },

    /***/
    "./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: AprobacionRoutingModule */

    /***/
    function srcAppModulesHomeModulesAprobacionAprobacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AprobacionRoutingModule", function () {
        return AprobacionRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aprobacion.component */
      "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts");

      var routes = [{
        path: "",
        component: _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"]
      }];

      var AprobacionRoutingModule = function AprobacionRoutingModule() {
        _classCallCheck(this, AprobacionRoutingModule);
      };

      AprobacionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AprobacionRoutingModule
      });
      AprobacionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AprobacionRoutingModule_Factory(t) {
          return new (t || AprobacionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AprobacionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/home/modules/aprobacion/aprobacion.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AprobacionComponent */

    /***/
    function srcAppModulesHomeModulesAprobacionAprobacionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AprobacionComponent", function () {
        return AprobacionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/services/auth.service */
      "./src/app/shared/services/auth.service.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-ckeditor */
      "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /*import { FormulariosService } from "../../../../shared/services/formularios.service";
      import { HistorialService } from "../../../../shared/services/historial.service";*/


      var AprobacionComponent = /*#__PURE__*/function () {
        function AprobacionComponent(formBuilder, authService) {
          _classCallCheck(this, AprobacionComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
        }

        _createClass(AprobacionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "onCreate",
          value: function onCreate() {
            /*console.log("Form group: ", this.formularioForm.value);
            this.formularioSubs = this.formularioService
              .addProduct({
                ...this.formularioForm.value,
                ownerId: this.authService.getUserId(),
                estado: "En Espera",
                propuesta: this.ckeditorContent
              })
              .subscribe(
                res => {
                  console.log("Resp: ", res);
                  this.historialSubs = this.historialService
                    .addProduct({
                      sucursal: this.formularioForm.value.direccion,
                      negocio: this.formularioForm.value.negocio,
                      estado: "En Espera",
                      ownerId: this.authService.getUserId()
                    })
                    .subscribe(
                      res => {
                        console.log("Resp: ", res);
                      },
                      err => {
                        console.log("Error de servidor");
                      }
                    );
                },
                err => {
                  console.log("Error de servidor");
                }
              );*/
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            /*this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
            this.historialSubs ? this.historialSubs.unsubscribe() : "";*/
          }
        }]);

        return AprobacionComponent;
      }();

      AprobacionComponent.ɵfac = function AprobacionComponent_Factory(t) {
        return new (t || AprobacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AprobacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AprobacionComponent,
        selectors: [["app-aprobacion"]],
        decls: 42,
        vars: 2,
        consts: [[1, "example-card"], ["justify-content:center", "", "align-items:center", ""], [3, "formGroup"], [1, "row"], [1, "col"], ["for", "exampleFormControlInput1"], ["type", "text", "formControlName", "nombre", "placeholder", "Empresa", 1, "form-control"], ["formControlName", "negocio", 1, "form-control"], [1, "form-group"], ["type", "email", "formControlName", "direccion", "id", "exampleFormControlInput1", "placeholder", "San miguel Calacoto Local 230", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["formControlName", "requisitos", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [3, "ngModel", "ngModelChange"], [2, "text-align", "center"], ["mat-button", "", 3, "click"]],
        template: function AprobacionComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Caf\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Educaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Religi\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direcci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Requisitos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Propuesta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ckeditor", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AprobacionComponent_Template_ckeditor_ngModelChange_38_listener($event) {
              return ctx.ckeditorContent = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-actions", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AprobacionComponent_Template_button_click_40_listener() {
              return ctx.onCreate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ckeditorContent);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9tb2R1bGVzL2Fwcm9iYWNpb24vYXByb2JhY2lvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-aprobacion",
            templateUrl: "./aprobacion.component.html",
            styleUrls: ["./aprobacion.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/home/modules/aprobacion/aprobacion.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/home/modules/aprobacion/aprobacion.module.ts ***!
      \**********************************************************************/

    /*! exports provided: AprobacionModule */

    /***/
    function srcAppModulesHomeModulesAprobacionAprobacionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AprobacionModule", function () {
        return AprobacionModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _aprobacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aprobacion.component */
      "./src/app/modules/home/modules/aprobacion/aprobacion.component.ts");
      /* harmony import */


      var _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./aprobacion-routing.module */
      "./src/app/modules/home/modules/aprobacion/aprobacion-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-ckeditor */
      "./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js");
      /*import { FormulariosService } from "../../../../shared/services/formularios.service";
      import { HistorialService } from "../../../../shared/services/historial.service";*/


      var AprobacionModule = function AprobacionModule() {
        _classCallCheck(this, AprobacionModule);
      };

      AprobacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AprobacionModule
      });
      AprobacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AprobacionModule_Factory(t) {
          return new (t || AprobacionModule)();
        },
        providers: [
          /*FormulariosService, HistorialService*/
        ],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AprobacionModule, {
          declarations: [_aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AprobacionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _aprobacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AprobacionRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]],
            declarations: [_aprobacion_component__WEBPACK_IMPORTED_MODULE_2__["AprobacionComponent"]],
            providers: [
              /*FormulariosService, HistorialService*/
            ]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-aprobacion-aprobacion-module-es5.js.map