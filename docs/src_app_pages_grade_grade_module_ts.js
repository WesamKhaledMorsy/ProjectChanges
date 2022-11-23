"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_grade_grade_module_ts"],{

/***/ 76684:
/*!********************************************************************!*\
  !*** ./src/app/pages/grade/grade-create/grade-create.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeCreateComponent": () => (/* binding */ GradeCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GradeCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradeCreateComponent.ɵfac = function GradeCreateComponent_Factory(t) { return new (t || GradeCreateComponent)(); };
GradeCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeCreateComponent, selectors: [["app-grade-create"]], decls: 2, vars: 0, template: function GradeCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grade-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 70483:
/*!****************************************************************!*\
  !*** ./src/app/pages/grade/grade-list/grade-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeListComponent": () => (/* binding */ GradeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class GradeListComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradeListComponent.ɵfac = function GradeListComponent_Factory(t) { return new (t || GradeListComponent)(); };
GradeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeListComponent, selectors: [["app-grade-list"]], decls: 2, vars: 0, template: function GradeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grade-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 74039:
/*!*****************************************************!*\
  !*** ./src/app/pages/grade/grade-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeRoutingModule": () => (/* binding */ GradeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _grade_create_grade_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grade-create/grade-create.component */ 76684);
/* harmony import */ var _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grade-list/grade-list.component */ 70483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'createGrade', component: _grade_create_grade_create_component__WEBPACK_IMPORTED_MODULE_0__.GradeCreateComponent },
    { path: 'listGrade', component: _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_1__.GradeListComponent },
    { path: 'edit/:id', component: _grade_create_grade_create_component__WEBPACK_IMPORTED_MODULE_0__.GradeCreateComponent },
];
class GradeRoutingModule {
}
GradeRoutingModule.ɵfac = function GradeRoutingModule_Factory(t) { return new (t || GradeRoutingModule)(); };
GradeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GradeRoutingModule });
GradeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GradeRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 81566:
/*!*********************************************!*\
  !*** ./src/app/pages/grade/grade.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeModule": () => (/* binding */ GradeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _grade_create_grade_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grade-create/grade-create.component */ 76684);
/* harmony import */ var _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grade-list/grade-list.component */ 70483);
/* harmony import */ var _grade_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grade-routing.module */ 74039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class GradeModule {
}
GradeModule.ɵfac = function GradeModule_Factory(t) { return new (t || GradeModule)(); };
GradeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GradeModule });
GradeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _grade_routing_module__WEBPACK_IMPORTED_MODULE_3__.GradeRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GradeModule, { declarations: [_grade_create_grade_create_component__WEBPACK_IMPORTED_MODULE_1__.GradeCreateComponent,
        _grade_list_grade_list_component__WEBPACK_IMPORTED_MODULE_2__.GradeListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _grade_routing_module__WEBPACK_IMPORTED_MODULE_3__.GradeRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_grade_grade_module_ts.js.map