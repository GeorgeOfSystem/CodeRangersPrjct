(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-perfil-perfil-module"],{

/***/ "./src/app/modules/home/modules/perfil/perfil-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/modules/perfil/perfil-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRoutingModule", function() { return PerfilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component */ "./src/app/modules/home/modules/perfil/perfil.component.ts");





const routes = [{ path: "", component: _perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"] }];
class PerfilRoutingModule {
}
PerfilRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerfilRoutingModule });
PerfilRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerfilRoutingModule_Factory(t) { return new (t || PerfilRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerfilRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/modules/perfil/perfil.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/modules/perfil/perfil.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PerfilComponent {
    constructor() { }
    ngOnInit() {
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(); };
PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], decls: 2, vars: 0, template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nperfil works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9tb2R1bGVzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil',
                templateUrl: './perfil.component.html',
                styleUrls: ['./perfil.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/modules/perfil/perfil.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/home/modules/perfil/perfil.module.ts ***!
  \**************************************************************/
/*! exports provided: PerfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component */ "./src/app/modules/home/modules/perfil/perfil.component.ts");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/modules/home/modules/perfil/perfil-routing.module.ts");





class PerfilModule {
}
PerfilModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerfilModule });
PerfilModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerfilModule_Factory(t) { return new (t || PerfilModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerfilModule, { declarations: [_perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"]],
                declarations: [_perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-perfil-perfil-module-es2015.js.map