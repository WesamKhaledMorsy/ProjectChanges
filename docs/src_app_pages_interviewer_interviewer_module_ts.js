"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_interviewer_interviewer_module_ts"],{

/***/ 35965:
/*!*****************************************************************!*\
  !*** ./src/app/pages/interviewer/interviewer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewerRoutingModule": () => (/* binding */ InterviewerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _interviewer_create_interviewer_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interviewer-create/interviewer-create.component */ 79410);
/* harmony import */ var _interviewer_list_interviewer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interviewer-list/interviewer-list.component */ 49770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', redirectTo: 'listInterviewer', pathMatch: 'full' },
    { path: 'createInterviewer', component: _interviewer_create_interviewer_create_component__WEBPACK_IMPORTED_MODULE_0__.InterviewerCreateComponent },
    { path: 'listInterviewer', component: _interviewer_list_interviewer_list_component__WEBPACK_IMPORTED_MODULE_1__.InterviewerListComponent },
    { path: 'edit/:id', component: _interviewer_create_interviewer_create_component__WEBPACK_IMPORTED_MODULE_0__.InterviewerCreateComponent },
];
class InterviewerRoutingModule {
}
InterviewerRoutingModule.ɵfac = function InterviewerRoutingModule_Factory(t) { return new (t || InterviewerRoutingModule)(); };
InterviewerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InterviewerRoutingModule });
InterviewerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InterviewerRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 83571:
/*!*********************************************************!*\
  !*** ./src/app/pages/interviewer/interviewer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewerModule": () => (/* binding */ InterviewerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _interview_interview_create_interview_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interview/interview-create/interview-create.component */ 12253);
/* harmony import */ var _interview_interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interview/interview-list/interview-list.component */ 19642);
/* harmony import */ var _interviewer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interviewer-routing.module */ 35965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class InterviewerModule {
}
InterviewerModule.ɵfac = function InterviewerModule_Factory(t) { return new (t || InterviewerModule)(); };
InterviewerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InterviewerModule });
InterviewerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _interviewer_routing_module__WEBPACK_IMPORTED_MODULE_3__.InterviewerRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InterviewerModule, { declarations: [_interview_interview_create_interview_create_component__WEBPACK_IMPORTED_MODULE_1__.InterviewCreateComponent,
        _interview_interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_2__.InterviewListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _interviewer_routing_module__WEBPACK_IMPORTED_MODULE_3__.InterviewerRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_interviewer_interviewer_module_ts.js.map