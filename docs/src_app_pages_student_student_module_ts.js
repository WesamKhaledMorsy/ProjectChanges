"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_student_student_module_ts"],{

/***/ 67265:
/*!**************************************************************************!*\
  !*** ./src/app/pages/student/student-create/student-create.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentCreateComponent": () => (/* binding */ StudentCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-archwizard */ 38531);


function StudentCreateComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function StudentCreateComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function StudentCreateComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
class StudentCreateComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
    }
}
StudentCreateComponent.ɵfac = function StudentCreateComponent_Factory(t) { return new (t || StudentCreateComponent)(); };
StudentCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCreateComponent, selectors: [["app-student-create"]], decls: 88, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4", "text-center", 2, "font-size", "25px", "color", "rgb(66, 66, 212)"], [3, "navBarLayout"], ["awWizardStepSymbol", ""], [1, "col-12"], [1, "row", "mb-3"], ["for", "name", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "name", "name", "name", "type", "text", "placeholder", "Student Name...", 1, "form-control"], ["id", "userName", "name", "userName", "type", "text", "placeholder", "User Name...", 1, "form-control"], [1, "col-md-3", "col-form-label"], ["name", "email", "type", "text", "placeholder", "Enter email", 1, "form-control"], ["for", "PhoneNumber", 1, "col-md-3", "col-form-label"], ["name", "phoneNumber", "type", "text", "placeholder", "Enter Phone Number", 1, "form-control"], ["for", "graduationYear", 1, "col-md-3", "col-form-label"], ["id", "graduationYear", "name", "graduationYear", "type", "text", "placeholder", "Enter Graduation Year", 1, "form-control"], ["for", "gender", 1, "col-md-3", "col-form-label"], ["id", "gender", "name", "gender", "type", "text", "placeholder", "Enter Gender", 1, "form-control"], [1, "list-inline", "wizard", "mb-0"], [1, "next", "list-inline-item", "float-end"], ["awNextStep", "", 1, "btn", "btn-primary"], ["name", "username", "type", "text", "placeholder", "Enter Username", 1, "form-control"], ["name", "password", "type", "password", "placeholder", "Enter Password", 1, "form-control"], [1, "previous", "list-inline-item"], ["awPreviousStep", "", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-lg-6"], [1, "text-center"], [1, "mb-4"], [1, "mdi", "mdi-check-circle-outline", "text-success", "display-4"], [1, "text-muted"], [1, "fas", "fa-user"], [1, "fas", "fa-user-circle"], [1, "fas", "fa-check-circle"]], template: function StudentCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aw-wizard", 6)(8, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentCreateComponent_ng_template_9_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9)(28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9)(33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Graduation Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9)(38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 22)(43, "li", 23)(44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, StudentCreateComponent_ng_template_47_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1)(49, "div", 8)(50, "div", 9)(51, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9)(56, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9)(61, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 22)(66, "li", 27)(67, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 23)(70, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "aw-wizard-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, StudentCreateComponent_ng_template_73_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29)(75, "div", 30)(76, "div", 31)(77, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div")(80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Confirm Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "If several languages coalesce, the grammar of the resulting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 22)(85, "li", 27)(86, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navBarLayout", "large-empty-symbols");
    } }, dependencies: [angular_archwizard__WEBPACK_IMPORTED_MODULE_1__.WizardComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_1__.WizardStepComponent, angular_archwizard__WEBPACK_IMPORTED_MODULE_1__.NextStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_1__.PreviousStepDirective, angular_archwizard__WEBPACK_IMPORTED_MODULE_1__.WizardStepSymbolDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 52222:
/*!**********************************************************************!*\
  !*** ./src/app/pages/student/student-list/student-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentListComponent": () => (/* binding */ StudentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StudentListComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentListComponent.ɵfac = function StudentListComponent_Factory(t) { return new (t || StudentListComponent)(); };
StudentListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentListComponent, selectors: [["app-student-list"]], decls: 2, vars: 0, template: function StudentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61131:
/*!****************************************************************************!*\
  !*** ./src/app/pages/student/student-profile/student-profile.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfileComponent": () => (/* binding */ StudentProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StudentProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentProfileComponent.ɵfac = function StudentProfileComponent_Factory(t) { return new (t || StudentProfileComponent)(); };
StudentProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentProfileComponent, selectors: [["app-student-profile"]], decls: 2, vars: 0, template: function StudentProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 26525:
/*!*********************************************************!*\
  !*** ./src/app/pages/student/student-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentRoutingModule": () => (/* binding */ StudentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-create/student-create.component */ 67265);
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list/student-list.component */ 52222);
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-profile/student-profile.component */ 61131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: 'createStudent', component: _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_0__.StudentCreateComponent },
    { path: 'listStudent', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__.StudentListComponent },
    { path: 'studentProfile/:id', component: _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_2__.StudentProfileComponent },
    { path: 'edit/:id', component: _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_0__.StudentCreateComponent },
    { path: '', redirectTo: 'studentList', pathMatch: 'full' }
];
class StudentRoutingModule {
}
StudentRoutingModule.ɵfac = function StudentRoutingModule_Factory(t) { return new (t || StudentRoutingModule)(); };
StudentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StudentRoutingModule });
StudentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StudentRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 28106:
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentModule": () => (/* binding */ StudentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-routing.module */ 26525);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _student_create_student_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-create/student-create.component */ 67265);
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-list/student-list.component */ 52222);
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-profile/student-profile.component */ 61131);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 24169);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-switch */ 83880);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color-picker */ 18251);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-flatpickr */ 81988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);



















class StudentModule {
}
StudentModule.ɵfac = function StudentModule_Factory(t) { return new (t || StudentModule)(); };
StudentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: StudentModule });
StudentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _student_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_11__.ArchwizardModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forRoot(),
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__.UiSwitchModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__.ColorPickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDatepickerModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_16__.FlatpickrModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](StudentModule, { declarations: [_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_1__.StudentCreateComponent,
        _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__.StudentListComponent,
        _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_3__.StudentProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _student_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule,
        angular_archwizard__WEBPACK_IMPORTED_MODULE_11__.ArchwizardModule, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__.UiSwitchModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__.ColorPickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDatepickerModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_16__.FlatpickrModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_student_student_module_ts.js.map