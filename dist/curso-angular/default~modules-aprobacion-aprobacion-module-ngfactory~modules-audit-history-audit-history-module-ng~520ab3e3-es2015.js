(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-history-audit-history-module-ng~520ab3e3"],{

/***/ "./node_modules/@angular/material/button/index.ngfactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/button/index.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: MatButtonModuleNgFactory, RenderType_MatButton, View_MatButton_0, View_MatButton_Host_0, MatButtonNgFactory, RenderType_MatAnchor, View_MatAnchor_0, View_MatAnchor_Host_0, MatAnchorNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModuleNgFactory", function() { return MatButtonModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatButton", function() { return RenderType_MatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatButton_0", function() { return View_MatButton_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatButton_Host_0", function() { return View_MatButton_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonNgFactory", function() { return MatButtonNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatAnchor", function() { return RenderType_MatAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatAnchor_0", function() { return View_MatAnchor_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MatAnchor_Host_0", function() { return View_MatAnchor_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchorNgFactory", function() { return MatAnchorNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */








var MatButtonModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SANITY_CHECKS"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], [])]); });

var styles_MatButton = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"];
var RenderType_MatButton = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MatButton, data: {} });

function View_MatButton_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { ripple: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "span", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_MatButton_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], null, null, View_MatButton_0, RenderType_MatButton)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var MatButtonNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]", _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], View_MatButton_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, {}, ["*"]);

var styles_MatAnchor = [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"];
var RenderType_MatAnchor = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_MatAnchor, data: {} });

function View_MatAnchor_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { ripple: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "span", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_MatAnchor_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a", [["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_MatAnchor_0, RenderType_MatAnchor)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled ? (-1) : (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabIndex || 0)); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString(); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
var MatAnchorNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], View_MatAnchor_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, {}, ["*"]);



/***/ })

}]);
//# sourceMappingURL=default~modules-aprobacion-aprobacion-module-ngfactory~modules-audit-history-audit-history-module-ng~520ab3e3-es2015.js.map