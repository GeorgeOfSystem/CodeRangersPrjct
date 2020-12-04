(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-audit-home-audit-home-module"],{

/***/ "./src/app/modules/audit-home/audit-home-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/audit-home/audit-home-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuditHomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHomeRoutingModule", function() { return AuditHomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _audit_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-home.component */ "./src/app/modules/audit-home/audit-home.component.ts");





const routes = [
    {
        path: "",
        component: _audit_home_component__WEBPACK_IMPORTED_MODULE_2__["AuditHomeComponent"],
        children: [
            { path: "", redirectTo: "audit-history", pathMatch: "full" },
            {
                path: "audit-history",
                loadChildren: () => Promise.all(/*! import() | modules-audit-history-audit-history-module */[__webpack_require__.e("default~modules-aprobacion-aprobacion-module~modules-audit-approve-audit-approve-module~modules-audi~92018fd8"), __webpack_require__.e("default~modules-audit-history-audit-history-module~modules-historial-historial-module"), __webpack_require__.e("modules-audit-history-audit-history-module")]).then(__webpack_require__.bind(null, /*! ./modules/audit-history/audit-history.module */ "./src/app/modules/audit-home/modules/audit-history/audit-history.module.ts")).then(m => m.AuditHistoryModule)
            },
            {
                path: "audit-approve",
                loadChildren: () => Promise.all(/*! import() | modules-audit-approve-audit-approve-module */[__webpack_require__.e("default~modules-aprobacion-aprobacion-module~modules-audit-approve-audit-approve-module~modules-audi~92018fd8"), __webpack_require__.e("modules-audit-approve-audit-approve-module")]).then(__webpack_require__.bind(null, /*! ./modules/audit-approve/audit-approve.module */ "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts")).then(m => m.AuditApproveModule)
            }
        ]
    }
];
class AuditHomeRoutingModule {
}
AuditHomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuditHomeRoutingModule });
AuditHomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuditHomeRoutingModule_Factory(t) { return new (t || AuditHomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditHomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/audit-home/audit-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/audit-home/audit-home.component.ts ***!
  \************************************************************/
/*! exports provided: AuditHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHomeComponent", function() { return AuditHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuditHomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    onLogout() {
        this.authService.logout();
    }
}
AuditHomeComponent.ɵfac = function AuditHomeComponent_Factory(t) { return new (t || AuditHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuditHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuditHomeComponent, selectors: [["app-audit-home"]], decls: 18, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white"], ["routerLink", "inicio", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "audit-history", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "perfil", 1, "nav-link"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function AuditHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ministerio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Historial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuditHomeComponent_Template_button_click_15_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9hdWRpdC1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audit-home',
                templateUrl: './audit-home.component.html',
                styleUrls: ['./audit-home.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/audit-home/audit-home.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/audit-home/audit-home.module.ts ***!
  \*********************************************************/
/*! exports provided: AuditHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHomeModule", function() { return AuditHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-home-routing.module */ "./src/app/modules/audit-home/audit-home-routing.module.ts");
/* harmony import */ var _audit_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audit-home.component */ "./src/app/modules/audit-home/audit-home.component.ts");





class AuditHomeModule {
}
AuditHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuditHomeModule });
AuditHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuditHomeModule_Factory(t) { return new (t || AuditHomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHomeRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditHomeModule, { declarations: [_audit_home_component__WEBPACK_IMPORTED_MODULE_3__["AuditHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _audit_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHomeRoutingModule"]],
                declarations: [_audit_home_component__WEBPACK_IMPORTED_MODULE_3__["AuditHomeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-audit-home-audit-home-module-es2015.js.map