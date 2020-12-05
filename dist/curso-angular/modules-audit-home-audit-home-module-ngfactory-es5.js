(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-audit-home-audit-home-module-ngfactory"], {
    /***/
    "./src/app/modules/audit-home/audit-home-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AuditHomeRoutingModule, ɵ0, ɵ1 */

    /***/
    function srcAppModulesAuditHomeAuditHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHomeRoutingModule", function () {
        return AuditHomeRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
        return ɵ1;
      });
      /* harmony import */


      var _audit_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-home.component */
      "./src/app/modules/audit-home/audit-home.component.ts");

      var ɵ0 = function ɵ0() {
        return Promise.all(
        /*! import() | modules-audit-history-audit-history-module-ngfactory */
        [__webpack_require__.e("default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-approve-audit-approve-module-ng~4f0b14b3"), __webpack_require__.e("default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-history-audit-history-module-ng~520ab3e3"), __webpack_require__.e("default~modules-audit-history-audit-history-module-ngfactory~modules-historial-historial-module-ngfactory"), __webpack_require__.e("modules-audit-history-audit-history-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./modules/audit-history/audit-history.module.ngfactory */
        "./src/app/modules/audit-home/modules/audit-history/audit-history.module.ngfactory.js")).then(function (m) {
          return m.AuditHistoryModuleNgFactory;
        });
      },
          ɵ1 = function ɵ1() {
        return Promise.all(
        /*! import() | modules-audit-approve-audit-approve-module-ngfactory */
        [__webpack_require__.e("default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-approve-audit-approve-module-ng~4f0b14b3"), __webpack_require__.e("default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-approve-audit-approve-module-ngfactory"), __webpack_require__.e("modules-audit-approve-audit-approve-module-ngfactory")]).then(__webpack_require__.bind(null,
        /*! ./modules/audit-approve/audit-approve.module.ngfactory */
        "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ngfactory.js")).then(function (m) {
          return m.AuditApproveModuleNgFactory;
        });
      };

      var routes = [{
        path: "",
        component: _audit_home_component__WEBPACK_IMPORTED_MODULE_0__["AuditHomeComponent"],
        children: [{
          path: "",
          redirectTo: "audit-history",
          pathMatch: "full"
        }, {
          path: "audit-history",
          loadChildren: ɵ0
        }, {
          path: "audit-approve",
          loadChildren: ɵ1
        }]
      }];

      var AuditHomeRoutingModule = function AuditHomeRoutingModule() {
        _classCallCheck(this, AuditHomeRoutingModule);
      };
      /***/

    },

    /***/
    "./src/app/modules/audit-home/audit-home.component.ngfactory.js":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_AuditHomeComponent, View_AuditHomeComponent_0, View_AuditHomeComponent_Host_0, AuditHomeComponentNgFactory */

    /***/
    function srcAppModulesAuditHomeAuditHomeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AuditHomeComponent", function () {
        return RenderType_AuditHomeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AuditHomeComponent_0", function () {
        return View_AuditHomeComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AuditHomeComponent_Host_0", function () {
        return View_AuditHomeComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHomeComponentNgFactory", function () {
        return AuditHomeComponentNgFactory;
      });
      /* harmony import */


      var _audit_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-home.component.scss.shim.ngstyle */
      "./src/app/modules/audit-home/audit-home.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _audit_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./audit-home.component */
      "./src/app/modules/audit-home/audit-home.component.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "./src/app/shared/services/auth.service.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AuditHomeComponent = [_audit_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AuditHomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AuditHomeComponent,
        data: {}
      });

      function View_AuditHomeComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "nav", [["class", "navbar navbar-expand-lg navbar-light bg-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "navbar-brand"], ["routerLink", "inicio"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ministerio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["aria-controls", "navbarNav"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarNav"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 11, "div", [["class", "collapse navbar-collapse"], ["id", "navbarNav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 10, "ul", [["class", "navbar-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "a", [["class", "nav-link"], ["routerLink", "audit-history"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Historial "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(current)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "a", [["class", "nav-link"], ["routerLink", "perfil"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Perfil"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "button", [["class", "btn btn-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onLogout() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
          var currVal_2 = "inicio";

          _ck(_v, 2, 0, currVal_2);

          var currVal_5 = "audit-history";

          _ck(_v, 10, 0, currVal_5);

          var currVal_8 = "perfil";

          _ck(_v, 16, 0, currVal_8);

          _ck(_v, 21, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;

          _ck(_v, 1, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href;

          _ck(_v, 9, 0, currVal_3, currVal_4);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href;

          _ck(_v, 15, 0, currVal_6, currVal_7);
        });
      }

      function View_AuditHomeComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-audit-home", [], null, null, null, View_AuditHomeComponent_0, RenderType_AuditHomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _audit_home_component__WEBPACK_IMPORTED_MODULE_4__["AuditHomeComponent"], [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AuditHomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-audit-home", _audit_home_component__WEBPACK_IMPORTED_MODULE_4__["AuditHomeComponent"], View_AuditHomeComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/modules/audit-home/audit-home.component.scss.shim.ngstyle.js":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home.component.scss.shim.ngstyle.js ***!
      \******************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppModulesAuditHomeAuditHomeComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9hdWRpdC1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"];
      /***/
    },

    /***/
    "./src/app/modules/audit-home/audit-home.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home.component.ts ***!
      \************************************************************/

    /*! exports provided: AuditHomeComponent */

    /***/
    function srcAppModulesAuditHomeAuditHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHomeComponent", function () {
        return AuditHomeComponent;
      });

      var AuditHomeComponent = /*#__PURE__*/function () {
        function AuditHomeComponent(authService) {
          _classCallCheck(this, AuditHomeComponent);

          this.authService = authService;
        }

        _createClass(AuditHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
          }
        }]);

        return AuditHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/modules/audit-home/audit-home.module.ngfactory.js":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home.module.ngfactory.js ***!
      \*******************************************************************/

    /*! exports provided: AuditHomeModuleNgFactory */

    /***/
    function srcAppModulesAuditHomeAuditHomeModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHomeModuleNgFactory", function () {
        return AuditHomeModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _audit_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit-home.module */
      "./src/app/modules/audit-home/audit-home.module.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _audit_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./audit-home.component.ngfactory */
      "./src/app/modules/audit-home/audit-home.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./audit-home-routing.module */
      "./src/app/modules/audit-home/audit-home-routing.module.ts");
      /* harmony import */


      var _audit_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./audit-home.component */
      "./src/app/modules/audit-home/audit-home.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AuditHomeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_audit_home_module__WEBPACK_IMPORTED_MODULE_1__["AuditHomeModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _audit_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AuditHomeComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuditHomeRoutingModule"], _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuditHomeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _audit_home_module__WEBPACK_IMPORTED_MODULE_1__["AuditHomeModule"], _audit_home_module__WEBPACK_IMPORTED_MODULE_1__["AuditHomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () {
          return [[{
            path: "",
            component: _audit_home_component__WEBPACK_IMPORTED_MODULE_7__["AuditHomeComponent"],
            children: [{
              path: "",
              redirectTo: "audit-history",
              pathMatch: "full"
            }, {
              path: "audit-history",
              loadChildren: _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ0"]
            }, {
              path: "audit-approve",
              loadChildren: _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["ɵ1"]
            }]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/modules/audit-home/audit-home.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/audit-home/audit-home.module.ts ***!
      \*********************************************************/

    /*! exports provided: AuditHomeModule */

    /***/
    function srcAppModulesAuditHomeAuditHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHomeModule", function () {
        return AuditHomeModule;
      });

      var AuditHomeModule = function AuditHomeModule() {
        _classCallCheck(this, AuditHomeModule);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-audit-home-audit-home-module-ngfactory-es5.js.map