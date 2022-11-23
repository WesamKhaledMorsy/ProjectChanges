"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_interview_interview_module_ts"],{

/***/ 700:
/*!*************************************************************!*\
  !*** ./src/app/pages/interview/interview-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewRoutingModule": () => (/* binding */ InterviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interview-list/interview-list.component */ 19642);
/* harmony import */ var _interview_create_interview_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-create/interview-create.component */ 12253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', redirectTo: 'listInterview', pathMatch: 'full' },
    { path: 'createInterview', component: _interview_create_interview_create_component__WEBPACK_IMPORTED_MODULE_1__.InterviewCreateComponent },
    { path: 'listInterview', component: _interview_list_interview_list_component__WEBPACK_IMPORTED_MODULE_0__.InterviewListComponent },
    { path: 'edit/:id', component: _interview_create_interview_create_component__WEBPACK_IMPORTED_MODULE_1__.InterviewCreateComponent },
];
class InterviewRoutingModule {
}
InterviewRoutingModule.ɵfac = function InterviewRoutingModule_Factory(t) { return new (t || InterviewRoutingModule)(); };
InterviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InterviewRoutingModule });
InterviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InterviewRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5447:
/*!*****************************************************!*\
  !*** ./src/app/pages/interview/interview.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterviewModule": () => (/* binding */ InterviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _interviewer_interviewer_create_interviewer_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interviewer/interviewer-create/interviewer-create.component */ 79410);
/* harmony import */ var _interviewer_interviewer_list_interviewer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interviewer/interviewer-list/interviewer-list.component */ 49770);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _interview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interview-routing.module */ 700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class InterviewModule {
}
InterviewModule.ɵfac = function InterviewModule_Factory(t) { return new (t || InterviewModule)(); };
InterviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InterviewModule });
InterviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _interview_routing_module__WEBPACK_IMPORTED_MODULE_3__.InterviewRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InterviewModule, { declarations: [_interviewer_interviewer_create_interviewer_create_component__WEBPACK_IMPORTED_MODULE_0__.InterviewerCreateComponent,
        _interviewer_interviewer_list_interviewer_list_component__WEBPACK_IMPORTED_MODULE_1__.InterviewerListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _interview_routing_module__WEBPACK_IMPORTED_MODULE_3__.InterviewRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_interview_interview_module_ts.js.map