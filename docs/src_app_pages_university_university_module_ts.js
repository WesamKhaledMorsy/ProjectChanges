"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_university_university_module_ts"],{

/***/ 54377:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/university/university-create/university-create.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityCreateComponent": () => (/* binding */ UniversityCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _university_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../university.model */ 48326);
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ 14788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);









const _c0 = ["dp"];
class UniversityCreateComponent {
    constructor(http, universityServices, route) {
        this.http = http;
        this.universityServices = universityServices;
        this.route = route;
        this.editMode = false; //? write editMode to check if we are in edit mode or Add mode
        this.LoggedIn = false;
        this.universityInput = new _university_model__WEBPACK_IMPORTED_MODULE_1__.University();
        this.universityUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.dateRangeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        const role = localStorage.getItem('roles');
        if (role == "Admin") {
            this.IsAdmin = true;
            this.IsInterviewer = false;
            this.IsUser = false;
            this.LoggedIn = true;
        }
        else if (role == "Interviewer") {
            this.IsInterviewer = true;
            this.IsAdmin = false;
            this.IsUser = false;
            this.LoggedIn = true;
        }
        else if (role == "Trainee") {
            this.IsUser = true;
            this.IsInterviewer = false;
            this.IsAdmin = false;
            this.LoggedIn = true;
        }
        ///////////////////////////////
        this.route.paramMap.subscribe((params) => {
            const id = +params.get("id");
            this.UniversityId = id;
            this.isAddMode = !id;
            if (id) {
                this.universityServices.getUniversityById(id).subscribe((result) => {
                    debugger;
                    this.universityInput.universityName = result.universityName;
                    console.log(result);
                });
            }
        });
        this._GetAllUniversityData();
    }
    formatDate(date) {
        var d = new Date(date), day = "" + d.getDate(), month = "" + (d.getMonth() + 1), year = d.getFullYear();
        if (month.length < 2)
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return [year, month, day].join("-");
    }
    onSubmit(form) {
        if (this.isAddMode) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            });
            let university = new _university_model__WEBPACK_IMPORTED_MODULE_1__.University();
            university.universityName = form.value.universityName;
            debugger;
            this.http.post('https://localhost:7115/api/University/CreateNewUniversity', university, { headers: headers }).subscribe(data => {
                console.log(data);
                //!==
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'University created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                //!==
            });
        }
        else {
            this.universityInput.id = this.UniversityId.toString();
            this.universityServices.UpdateUniversity(this.universityInput)
                .subscribe((UpUniversity) => {
                this.universityUpdated.emit(UpUniversity);
            });
            //!==
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'top-end',
                icon: 'success',
                title: 'University Updated Successfully',
                showConfirmButton: false,
                timer: 1500
            });
            //!==
        }
        form.reset(this.universityInput);
    }
    _GetAllUniversityData() {
        let url = "https://localhost:7115/api/University/GetUniversity";
        return this.http.get(url);
    }
}
UniversityCreateComponent.ɵfac = function UniversityCreateComponent_Factory(t) { return new (t || UniversityCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_university_service__WEBPACK_IMPORTED_MODULE_2__.UniversityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
UniversityCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UniversityCreateComponent, selectors: [["app-university-create"]], viewQuery: function UniversityCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.datePicker = _t.first);
    } }, inputs: { universityInput: "universityInput", fromDate: "fromDate", toDate: "toDate" }, outputs: { universityUpdated: "universityUpdated", dateRangeSelected: "dateRangeSelected" }, decls: 16, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", 3, "ngSubmit"], ["universityForm", "ngForm"], [1, "card-title", "mb-4"], [1, "row", "mb-4"], ["for", "universityName", 1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], ["id", "universityName", "name", "universityName", "type", "text", "placeholder", "Enter University Name...", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"]], template: function UniversityCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UniversityCreateComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Create New University");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UniversityCreateComponent_Template_input_ngModelChange_12_listener($event) { return ctx.universityInput.universityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.IsInterviewer)("ngModel", ctx.universityInput.universityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isAddMode ? "Create University" : "Edit University");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml2ZXJzaXR5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92599:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/university/university-list/university-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityListComponent": () => (/* binding */ UniversityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








const _c0 = function () { return ["/university/createUniversity"]; };
function UniversityListComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Create University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function UniversityListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/university/edit", a1]; };
function UniversityListComponent_tr_14_td_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const university_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, university_r3.id));
} }
function UniversityListComponent_tr_14_td_6_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UniversityListComponent_tr_14_td_6_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const university_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onDeleteUniversity(university_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UniversityListComponent_tr_14_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UniversityListComponent_tr_14_td_6_a_1_Template, 3, 3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UniversityListComponent_tr_14_td_6_a_2_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.IsUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.IsUser && !ctx_r5.IsInterviewer && ctx_r5.LoggedIn);
} }
function UniversityListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UniversityListComponent_tr_14_td_6_Template, 3, 2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const university_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", university_r3.universityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.IsUser && !ctx_r2.IsInterviewer && ctx_r2.LoggedIn);
} }
class UniversityListComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.LoggedIn = false;
        this.universityUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.universityId = 0;
        this.universityName = "";
        this.filteration = {};
    }
    ngOnInit() {
        const role = localStorage.getItem('roles');
        if (role == "Admin") {
            this.IsAdmin = true;
            this.IsInterviewer = false;
            this.IsUser = false;
            this.LoggedIn = true;
        }
        else if (role == "Interviewer") {
            this.IsInterviewer = true;
            this.IsAdmin = false;
            this.IsUser = false;
            this.LoggedIn = true;
        }
        else if (role == "Trainee") {
            this.IsUser = true;
            this.IsInterviewer = false;
            this.IsAdmin = false;
            this.LoggedIn = true;
        }
        this.getUniversities();
    }
    getUniversities() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        });
        return this.http.get('https://localhost:7115/api/University/GetUniversity', {
            headers: headers
        })
            .subscribe(data => {
            this.selectUniversities = data;
            console.log(this.selectUniversities);
        });
    }
    deleteUniversity(universityId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        });
        let url = "https://localhost:7115/api/University/DeleteUniversity";
        if (universityId != 0)
            url += `?id=${universityId}`;
        return this.http.delete(url, { headers: headers });
    }
    onDeleteUniversity(universityId) {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger ms-2'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
            title: 'Are you sure?',
            text: 'You wont be able to revert this!',
            icon: 'question',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            showCancelButton: true
        })
            .then(result => {
            if (result.value) {
                //!main code for delete
                this.deleteUniversity(universityId)
                    .subscribe((_university) => {
                    this.universityUpdated.emit(_university);
                    this.getUniversities();
                });
                //!===============
                swalWithBootstrapButtons.fire('Deleted!', 'University has been deleted.', 'success');
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
                swalWithBootstrapButtons.fire('Cancelled', 'University is safe :)', 'error');
            }
        });
    }
}
UniversityListComponent.ɵfac = function UniversityListComponent_Factory(t) { return new (t || UniversityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
UniversityListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UniversityListComponent, selectors: [["app-university-list"]], inputs: { university: "university" }, outputs: { universityUpdated: "universityUpdated" }, decls: 15, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, ""], ["class", "btn btn-outline-primary mb-3", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "table-responsive"], [1, "table", "project-list-table", "table-nowrap", "align-middle", "table-borderless"], ["scope", "col"], ["scope", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "btn", "btn-outline-primary", "mb-3", 3, "routerLink"], ["routerLinkActive", "active"], [4, "ngIf"], ["routerLinkActive", "active", "style", "margin-left:2% ;", 3, "routerLink", 4, "ngIf"], ["type", "button", "style", "cursor: pointer;", "style", "margin-right:2% ;", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 2, "margin-left", "2%", 3, "routerLink"], [1, "fa", "fa-marker", "text-success"], ["type", "button", 2, "margin-right", "2%", 3, "click"], [1, "fa", "fa-trash", "text-danger"]], template: function UniversityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UniversityListComponent_a_3_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "table", 5)(6, "thead")(7, "tr")(8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UniversityListComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UniversityListComponent_tr_14_Template, 7, 3, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.IsUser && !ctx.IsInterviewer && ctx.LoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.IsUser && !ctx.IsInterviewer && ctx.LoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectUniversities);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml2ZXJzaXR5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 31456:
/*!***************************************************************!*\
  !*** ./src/app/pages/university/university-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityRoutingModule": () => (/* binding */ UniversityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _university_create_university_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-create/university-create.component */ 54377);
/* harmony import */ var _university_list_university_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-list/university-list.component */ 92599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'createUniversity', component: _university_create_university_create_component__WEBPACK_IMPORTED_MODULE_0__.UniversityCreateComponent },
    { path: 'listUniversity', component: _university_list_university_list_component__WEBPACK_IMPORTED_MODULE_1__.UniversityListComponent },
    { path: 'edit/:id', component: _university_create_university_create_component__WEBPACK_IMPORTED_MODULE_0__.UniversityCreateComponent }
];
class UniversityRoutingModule {
}
UniversityRoutingModule.ɵfac = function UniversityRoutingModule_Factory(t) { return new (t || UniversityRoutingModule)(); };
UniversityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UniversityRoutingModule });
UniversityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UniversityRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 48326:
/*!******************************************************!*\
  !*** ./src/app/pages/university/university.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "University": () => (/* binding */ University)
/* harmony export */ });
class University {
    constructor() {
        this.id = "978E222B-0B74-4056-8B75-C5F5AD986C4A";
        this.adminId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    }
}


/***/ }),

/***/ 72085:
/*!*******************************************************!*\
  !*** ./src/app/pages/university/university.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityModule": () => (/* binding */ UniversityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _university_create_university_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-create/university-create.component */ 54377);
/* harmony import */ var _university_list_university_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-list/university-list.component */ 92599);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _university_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./university-routing.module */ 31456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class UniversityModule {
}
UniversityModule.ɵfac = function UniversityModule_Factory(t) { return new (t || UniversityModule)(); };
UniversityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UniversityModule });
UniversityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _university_routing_module__WEBPACK_IMPORTED_MODULE_3__.UniversityRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UniversityModule, { declarations: [_university_create_university_create_component__WEBPACK_IMPORTED_MODULE_0__.UniversityCreateComponent,
        _university_list_university_list_component__WEBPACK_IMPORTED_MODULE_1__.UniversityListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _university_routing_module__WEBPACK_IMPORTED_MODULE_3__.UniversityRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ }),

/***/ 14788:
/*!********************************************************!*\
  !*** ./src/app/pages/university/university.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityService": () => (/* binding */ UniversityService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class UniversityService {
    constructor(http) {
        this.http = http;
        this.University = [];
    }
    createUniversity(university) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        });
        university.id;
        return this.http.post('https://localhost:7115/api/University/CreateNewUniversity', university, { headers: headers });
    }
    getUniversityById(id) {
        let url = "https://localhost:7115/api/University/GetUniversityById";
        if (id != 0)
            url += `?id=${id}`;
        return this.http.get(url);
    }
    UpdateUniversity(university) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        });
        return this.http.put("https://localhost:7115/api/University/EditUniversity", university, { headers: headers });
    }
}
UniversityService.ɵfac = function UniversityService_Factory(t) { return new (t || UniversityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
UniversityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UniversityService, factory: UniversityService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_university_university_module_ts.js.map