(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-audit-history-audit-history-module"],{

/***/ "./src/app/modules/audit-home/modules/audit-history/audit-history-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/audit-home/modules/audit-history/audit-history-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AuditHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHistoryRoutingModule", function() { return AuditHistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _audit_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-history.component */ "./src/app/modules/audit-home/modules/audit-history/audit-history.component.ts");





const routes = [{ path: "", component: _audit_history_component__WEBPACK_IMPORTED_MODULE_2__["AuditHistoryComponent"] }];
class AuditHistoryRoutingModule {
}
AuditHistoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuditHistoryRoutingModule });
AuditHistoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuditHistoryRoutingModule_Factory(t) { return new (t || AuditHistoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditHistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHistoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/audit-home/modules/audit-history/audit-history.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/audit-home/modules/audit-history/audit-history.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AuditHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHistoryComponent", function() { return AuditHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _components_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/waiting/waiting.component */ "./src/app/modules/audit-home/modules/audit-history/components/waiting/waiting.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuditHistoryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AuditHistoryComponent.ɵfac = function AuditHistoryComponent_Factory(t) { return new (t || AuditHistoryComponent)(); };
AuditHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuditHistoryComponent, selectors: [["app-audit-history"]], decls: 8, vars: 0, consts: [["mat-align-tabs", "center"], ["label", "En espera"], ["state", "En Espera"], ["label", "Aprobado"], ["state", "Aprobado"], ["label", "Rechazado"], ["state", "Rechazado"]], template: function AuditHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "waiting", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "waiting", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "waiting", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _components_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_2__["WaitingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9tb2R1bGVzL2F1ZGl0LWhpc3RvcnkvYXVkaXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audit-history',
                templateUrl: './audit-history.component.html',
                styleUrls: ['./audit-history.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/audit-home/modules/audit-history/audit-history.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/audit-home/modules/audit-history/audit-history.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AuditHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditHistoryModule", function() { return AuditHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _audit_history_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-history-routing.module */ "./src/app/modules/audit-home/modules/audit-history/audit-history-routing.module.ts");
/* harmony import */ var _audit_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audit-history.component */ "./src/app/modules/audit-home/modules/audit-history/audit-history.component.ts");
/* harmony import */ var _components_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/waiting/waiting.component */ "./src/app/modules/audit-home/modules/audit-history/components/waiting/waiting.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

// Modules


// Components













































class AuditHistoryModule {
}
AuditHistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuditHistoryModule });
AuditHistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuditHistoryModule_Factory(t) { return new (t || AuditHistoryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _audit_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHistoryRoutingModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuditHistoryModule, { declarations: [_audit_history_component__WEBPACK_IMPORTED_MODULE_3__["AuditHistoryComponent"],
        _components_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_4__["WaitingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _audit_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHistoryRoutingModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHistoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _audit_history_component__WEBPACK_IMPORTED_MODULE_3__["AuditHistoryComponent"],
                    _components_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_4__["WaitingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _audit_history_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuditHistoryRoutingModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/audit-home/modules/audit-history/components/waiting/waiting.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/audit-home/modules/audit-history/components/waiting/waiting.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WaitingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingComponent", function() { return WaitingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/business-layer.service */ "./src/app/shared/services/business-layer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");





function WaitingComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.ownerId, " ");
} }
function WaitingComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sucursal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.nombre, " ");
} }
function WaitingComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Negocio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.negocio, " ");
} }
function WaitingComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.estado, " ");
} }
function WaitingComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingComponent_td_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.sendElement(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ver Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WaitingComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function WaitingComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
class WaitingComponent {
    constructor(b_Layer, router) {
        this.b_Layer = b_Layer;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
        this.products = [];
        this.productGetSubs = this.b_Layer.getProducts().subscribe(res => {
            Object.entries(res).map((p) => this.products.push(Object.assign({ id: p[0] }, p[1])));
            this.displayedColumns = ["ownerId", "nombre", "negocio", "estado", "document"];
            this.dataSource = this.products.filter(s => s.estado == this.state);
        });
    }
    sendElement(e) {
        this.b_Layer.setCurrentElement(e);
        this.router.navigate(['/auditHome/audit-approve']);
    }
}
WaitingComponent.ɵfac = function WaitingComponent_Factory(t) { return new (t || WaitingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_1__["BusinessLayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WaitingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingComponent, selectors: [["waiting"]], inputs: { state: "state" }, decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "ownerId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "negocio"], ["matColumnDef", "estado"], ["matColumnDef", "document"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mdbBtn", "", "color", "white", "outline", "true", "data-wow-delay", "0.4s", "mdbWavesEffect", "", 1, "wow", "fadeInDown", "waves-light", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function WaitingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WaitingComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WaitingComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WaitingComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WaitingComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WaitingComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WaitingComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WaitingComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WaitingComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WaitingComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WaitingComponent_td_15_Template, 3, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WaitingComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WaitingComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdWRpdC1ob21lL21vZHVsZXMvYXVkaXQtaGlzdG9yeS9jb21wb25lbnRzL3dhaXRpbmcvd2FpdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9tb2R1bGVzL2F1ZGl0LWhpc3RvcnkvY29tcG9uZW50cy93YWl0aW5nL3dhaXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9ICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'waiting',
                templateUrl: './waiting.component.html',
                styleUrls: ['./waiting.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_1__["BusinessLayerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-audit-history-audit-history-module-es2015.js.map