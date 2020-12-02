(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-audit-approve-audit-approve-module"], {
    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: AuditApproveRoutingModule */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveRoutingModule", function () {
        return AuditApproveRoutingModule;
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


      var _audit_approve_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./audit-approve.component */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts");

      var routes = [{
        path: "",
        component: _audit_approve_component__WEBPACK_IMPORTED_MODULE_2__["AuditApproveComponent"]
      }];

      var AuditApproveRoutingModule = function AuditApproveRoutingModule() {
        _classCallCheck(this, AuditApproveRoutingModule);
      };

      AuditApproveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuditApproveRoutingModule
      });
      AuditApproveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuditApproveRoutingModule_Factory(t) {
          return new (t || AuditApproveRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditApproveRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditApproveRoutingModule, [{
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
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AuditApproveComponent */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveComponent", function () {
        return AuditApproveComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuditApproveComponent = /*#__PURE__*/function () {
        function AuditApproveComponent() {
          _classCallCheck(this, AuditApproveComponent);
        }

        _createClass(AuditApproveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuditApproveComponent;
      }();

      AuditApproveComponent.ɵfac = function AuditApproveComponent_Factory(t) {
        return new (t || AuditApproveComponent)();
      };

      AuditApproveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuditApproveComponent,
        selectors: [["app-audit-approve"]],
        decls: 2,
        vars: 0,
        template: function AuditApproveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "audit-approve works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9tb2R1bGVzL2F1ZGl0LWFwcHJvdmUvYXVkaXQtYXBwcm92ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditApproveComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-audit-approve',
            templateUrl: './audit-approve.component.html',
            styleUrls: ['./audit-approve.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: AuditApproveModule */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveModule", function () {
        return AuditApproveModule;
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


      var _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./audit-approve-routing.module */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts");
      /* harmony import */


      var _audit_approve_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./audit-approve.component */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts");

      var AuditApproveModule = function AuditApproveModule() {
        _classCallCheck(this, AuditApproveModule);
      };

      AuditApproveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuditApproveModule
      });
      AuditApproveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuditApproveModule_Factory(t) {
          return new (t || AuditApproveModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditApproveRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditApproveModule, {
          declarations: [_audit_approve_component__WEBPACK_IMPORTED_MODULE_3__["AuditApproveComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditApproveRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditApproveModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_audit_approve_component__WEBPACK_IMPORTED_MODULE_3__["AuditApproveComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditApproveRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-audit-approve-audit-approve-module-es5.js.map