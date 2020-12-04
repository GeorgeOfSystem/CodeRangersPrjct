(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-detalle-detalle-module"], {
    /***/
    "./src/app/modules/home/modules/historial/modules/detalle/detalle-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/home/modules/historial/modules/detalle/detalle-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: DetalleRoutingModule */

    /***/
    function srcAppModulesHomeModulesHistorialModulesDetalleDetalleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleRoutingModule", function () {
        return DetalleRoutingModule;
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


      var _detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle.component */
      "./src/app/modules/home/modules/historial/modules/detalle/detalle.component.ts");

      var routes = [{
        path: "",
        component: _detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"]
      }];

      var DetalleRoutingModule = function DetalleRoutingModule() {
        _classCallCheck(this, DetalleRoutingModule);
      };

      DetalleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DetalleRoutingModule
      });
      DetalleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DetalleRoutingModule_Factory(t) {
          return new (t || DetalleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetalleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleRoutingModule, [{
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
    "./src/app/modules/home/modules/historial/modules/detalle/detalle.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/home/modules/historial/modules/detalle/detalle.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: DetalleComponent */

    /***/
    function srcAppModulesHomeModulesHistorialModulesDetalleDetalleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleComponent", function () {
        return DetalleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetalleComponent = /*#__PURE__*/function () {
        function DetalleComponent() {
          _classCallCheck(this, DetalleComponent);
        }

        _createClass(DetalleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetalleComponent;
      }();

      DetalleComponent.ɵfac = function DetalleComponent_Factory(t) {
        return new (t || DetalleComponent)();
      };

      DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetalleComponent,
        selectors: [["app-detalle"]],
        decls: 2,
        vars: 0,
        template: function DetalleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\ndetalle works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9tb2R1bGVzL2hpc3RvcmlhbC9tb2R1bGVzL2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-detalle',
            templateUrl: './detalle.component.html',
            styleUrls: ['./detalle.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/home/modules/historial/modules/detalle/detalle.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/home/modules/historial/modules/detalle/detalle.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: DetalleModule */

    /***/
    function srcAppModulesHomeModulesHistorialModulesDetalleDetalleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleModule", function () {
        return DetalleModule;
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


      var _detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle.component */
      "./src/app/modules/home/modules/historial/modules/detalle/detalle.component.ts");
      /* harmony import */


      var _detalle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detalle-routing.module */
      "./src/app/modules/home/modules/historial/modules/detalle/detalle-routing.module.ts");

      var DetalleModule = function DetalleModule() {
        _classCallCheck(this, DetalleModule);
      };

      DetalleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DetalleModule
      });
      DetalleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DetalleModule_Factory(t) {
          return new (t || DetalleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _detalle_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetalleRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetalleModule, {
          declarations: [_detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _detalle_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetalleRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _detalle_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetalleRoutingModule"]],
            declarations: [_detalle_component__WEBPACK_IMPORTED_MODULE_2__["DetalleComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-detalle-detalle-module-es5.js.map