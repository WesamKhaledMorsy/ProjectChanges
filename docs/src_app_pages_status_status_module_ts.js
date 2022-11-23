"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_status_status_module_ts"],{

/***/ 68037:
/*!***********************************************************************!*\
  !*** ./src/app/pages/status/status-create/status-create.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusCreateComponent": () => (/* binding */ StatusCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StatusCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusCreateComponent.ɵfac = function StatusCreateComponent_Factory(t) { return new (t || StatusCreateComponent)(); };
StatusCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusCreateComponent, selectors: [["app-status-create"]], decls: 2, vars: 0, template: function StatusCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93813:
/*!*******************************************************************!*\
  !*** ./src/app/pages/status/status-list/status-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusListComponent": () => (/* binding */ StatusListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StatusListComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusListComponent.ɵfac = function StatusListComponent_Factory(t) { return new (t || StatusListComponent)(); };
StatusListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusListComponent, selectors: [["app-status-list"]], decls: 2, vars: 0, template: function StatusListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99601:
/*!*******************************************************!*\
  !*** ./src/app/pages/status/status-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusRoutingModule": () => (/* binding */ StatusRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _status_create_status_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status-create/status-create.component */ 68037);
/* harmony import */ var _status_list_status_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-list/status-list.component */ 93813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'createStatus', component: _status_create_status_create_component__WEBPACK_IMPORTED_MODULE_0__.StatusCreateComponent },
    { path: 'listStatus', component: _status_list_status_list_component__WEBPACK_IMPORTED_MODULE_1__.StatusListComponent },
    { path: 'edit/:id', component: _status_create_status_create_component__WEBPACK_IMPORTED_MODULE_0__.StatusCreateComponent },
];
class StatusRoutingModule {
}
StatusRoutingModule.ɵfac = function StatusRoutingModule_Factory(t) { return new (t || StatusRoutingModule)(); };
StatusRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StatusRoutingModule });
StatusRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StatusRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 49710:
/*!***********************************************!*\
  !*** ./src/app/pages/status/status.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusModule": () => (/* binding */ StatusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _status_create_status_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status-create/status-create.component */ 68037);
/* harmony import */ var _status_list_status_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-list/status-list.component */ 93813);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-routing.module */ 99601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class StatusModule {
}
StatusModule.ɵfac = function StatusModule_Factory(t) { return new (t || StatusModule)(); };
StatusModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StatusModule });
StatusModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _status_routing_module__WEBPACK_IMPORTED_MODULE_3__.StatusRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StatusModule, { declarations: [_status_create_status_create_component__WEBPACK_IMPORTED_MODULE_0__.StatusCreateComponent,
        _status_list_status_list_component__WEBPACK_IMPORTED_MODULE_1__.StatusListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _status_routing_module__WEBPACK_IMPORTED_MODULE_3__.StatusRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_status_status_module_ts.js.map