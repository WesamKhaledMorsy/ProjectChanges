"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_gender_gender_module_ts"],{

/***/ 37473:
/*!***********************************************************************!*\
  !*** ./src/app/pages/gender/gender-create/gender-create.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderCreateComponent": () => (/* binding */ GenderCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GenderCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenderCreateComponent.ɵfac = function GenderCreateComponent_Factory(t) { return new (t || GenderCreateComponent)(); };
GenderCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenderCreateComponent, selectors: [["app-gender-create"]], decls: 2, vars: 0, template: function GenderCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gender-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5kZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 79832:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gender/gender-list/gender-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderListComponent": () => (/* binding */ GenderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GenderListComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenderListComponent.ɵfac = function GenderListComponent_Factory(t) { return new (t || GenderListComponent)(); };
GenderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenderListComponent, selectors: [["app-gender-list"]], decls: 2, vars: 0, template: function GenderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gender-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5kZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 31115:
/*!*******************************************************!*\
  !*** ./src/app/pages/gender/gender-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderRoutingModule": () => (/* binding */ GenderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gender_create_gender_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender-create/gender-create.component */ 37473);
/* harmony import */ var _gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender-list/gender-list.component */ 79832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'createGender', component: _gender_create_gender_create_component__WEBPACK_IMPORTED_MODULE_0__.GenderCreateComponent },
    { path: 'listGender', component: _gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_1__.GenderListComponent },
    { path: 'edit/:id', component: _gender_create_gender_create_component__WEBPACK_IMPORTED_MODULE_0__.GenderCreateComponent },
];
class GenderRoutingModule {
}
GenderRoutingModule.ɵfac = function GenderRoutingModule_Factory(t) { return new (t || GenderRoutingModule)(); };
GenderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GenderRoutingModule });
GenderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GenderRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 37933:
/*!***********************************************!*\
  !*** ./src/app/pages/gender/gender.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderModule": () => (/* binding */ GenderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _gender_create_gender_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender-create/gender-create.component */ 37473);
/* harmony import */ var _gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender-list/gender-list.component */ 79832);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _gender_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gender-routing.module */ 31115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class GenderModule {
}
GenderModule.ɵfac = function GenderModule_Factory(t) { return new (t || GenderModule)(); };
GenderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GenderModule });
GenderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _gender_routing_module__WEBPACK_IMPORTED_MODULE_3__.GenderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GenderModule, { declarations: [_gender_create_gender_create_component__WEBPACK_IMPORTED_MODULE_0__.GenderCreateComponent,
        _gender_list_gender_list_component__WEBPACK_IMPORTED_MODULE_1__.GenderListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _gender_routing_module__WEBPACK_IMPORTED_MODULE_3__.GenderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_gender_gender_module_ts.js.map