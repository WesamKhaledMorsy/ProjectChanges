"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_jobs_jobs_module_ts"],{

/***/ 2595:
/*!**************************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply-sortable.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdJobApplySortableHeader": () => (/* binding */ NgbdJobApplySortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdJobApplySortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdJobApplySortableHeader.ɵfac = function NgbdJobApplySortableHeader_Factory(t) { return new (t || NgbdJobApplySortableHeader)(); };
NgbdJobApplySortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdJobApplySortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdJobApplySortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdJobApplySortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 91692:
/*!*****************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyComponent": () => (/* binding */ ApplyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply.service */ 77909);
/* harmony import */ var _apply_sortable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply-sortable.directive */ 2595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);












const _c0 = function (a0, a1, a2, a3) {
  return {
    "badge-soft-success": a0,
    "badge-soft-danger": a1,
    "badge-soft-info": a2,
    "badge-soft-warning": a3
  };
};

const _c1 = function (a0, a1, a2) {
  return {
    "bg-success": a0,
    "bg-info": a1,
    "bg-danger": a2
  };
};

function ApplyComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "ul", 30)(17, "li", 31)(18, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li", 34)(21, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApplyComponent_tr_39_Template_a_click_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.delete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](8, _c0, data_r1.type === "Full Time", data_r1.type === "Part Time", data_r1.type === "Freelance", data_r1.type === "Internship"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](13, _c1, data_r1.status === "Active", data_r1.status === "New", data_r1.status === "Close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.status);
  }
}
/**
 * Apply Component
 */


class ApplyComponent {
  constructor(modalService, service, formBuilder) {
    this.modalService = modalService;
    this.service = service;
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.jobApplay = service.jobApply$;
    this.total = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Jobs'
    }, {
      label: 'Job Apply',
      active: true
    }];
    /**
    * fetches data
    */

    this.jobApplay.subscribe(x => {
      this.content = this.applies;
      this.applies = Object.assign([], x);
    });
  } // Delete Data


  delete(event) {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        event.target.closest('tr')?.remove();
      } else if (
      /* Read more about handling dismissals below */
      result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

}

ApplyComponent.ɵfac = function ApplyComponent_Factory(t) {
  return new (t || ApplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_apply_service__WEBPACK_IMPORTED_MODULE_1__.JobApplyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder));
};

ApplyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ApplyComponent,
  selectors: [["app-apply"]],
  viewQuery: function ApplyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_apply_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.NgbdJobApplySortableHeader, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_apply_service__WEBPACK_IMPORTED_MODULE_1__.JobApplyService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe])],
  decls: 60,
  vars: 10,
  consts: [[1, "container-fluid"], ["title", "Job Apply", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "border-bottom"], [1, "d-flex", "align-items-center"], [1, "mb-0", "card-title", "flex-grow-1"], [1, "flex-shrink-0"], ["aria-label", "Default select example", 1, "form-select"], ["value", "Today", "selected", ""], ["value", "1 Monthly"], ["value", "6 Month"], ["value", "1 Years"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "nowrap"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "card", "d-inline-block", "ms-auto", "mb-0"], [1, "card-body", "p-2"], ["aria-label", "Page navigation example", 1, "mb-0"], [1, "pagination", "mb-0"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["scope", "row"], [1, "badge", 3, "ngClass"], [1, "list-unstyled", "hstack", "gap-1", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View"], ["routerLink", "/jobs/details", 1, "btn", "btn-sm", "btn-soft-primary"], [1, "mdi", "mdi-eye-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-sm", "btn-soft-danger", 3, "click"], [1, "mdi", "mdi-delete-outline"]],
  template: function ApplyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Applied Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "select", 9)(11, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "1 Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "6 Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "1 Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "table", 16)(22, "thead")(23, "tr")(24, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Job Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Company Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Apply Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ApplyComponent_tr_39_Template, 23, 17, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 19)(41, "div", 20)(42, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 22)(54, "div", 23)(55, "div", 24)(56, "nav", 25)(57, "ul", 26)(58, "ngb-pagination", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ApplyComponent_Template_ngb_pagination_pageChange_58_listener($event) {
        return ctx.service.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.applies);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.startIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.endIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.totalRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 8, ctx.total))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPagination, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBseS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 77909:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/apply/apply.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobApplyService": () => (/* binding */ JobApplyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 96082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(jobApply, column, direction) {
    if (direction === '' || column === '') {
        return jobApply;
    }
    else {
        return [...jobApply].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return country.title.toLowerCase().includes(term.toLowerCase());
}
class JobApplyService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.jobLlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 0,
            endIndex: 9,
            totalRecords: 0,
            status: '',
            type: '',
            date: '',
        };
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this.jobLlist$.next(result.jobApply);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get jobApply$() { return this.jobLlist$.asObservable(); }
    get product() { return this.products; }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }
    get status() { return this._state.status; }
    get type() { return this._state.type; }
    get date() { return this._state.date; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    set startIndex(startIndex) { this._set({ startIndex }); }
    set endIndex(endIndex) { this._set({ endIndex }); }
    set totalRecords(totalRecords) { this._set({ totalRecords }); }
    set status(status) { this._set({ status }); }
    set type(type) { this._set({ type }); }
    set date(date) { this._set({ date }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, status, type, date } = this._state;
        // 1. sort
        let jobApply = sort(_data__WEBPACK_IMPORTED_MODULE_0__.JobApplydata, sortColumn, sortDirection);
        // 2. filter
        jobApply = jobApply.filter(country => matches(country, searchTerm, this.pipe));
        // 3. Status Filter
        if (status) {
            jobApply = jobApply.filter(country => country.status == status);
        }
        else {
            jobApply = jobApply;
        }
        // 4. Type Filter
        if (type) {
            jobApply = jobApply.filter(country => country.type == type);
        }
        else {
            jobApply = jobApply;
        }
        const total = jobApply.length;
        // 3. paginate
        this.totalRecords = jobApply.length;
        this._state.startIndex = (page - 1) * this.pageSize + 1;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        jobApply = jobApply.slice(this._state.startIndex - 1, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ jobApply, total });
    }
}
JobApplyService.ɵfac = function JobApplyService_Factory(t) { return new (t || JobApplyService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe)); };
JobApplyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JobApplyService, factory: JobApplyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96082:
/*!******************************************!*\
  !*** ./src/app/pages/jobs/apply/data.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobApplydata": () => (/* binding */ JobApplydata)
/* harmony export */ });
const JobApplydata = [
    {
        id: 1,
        title: "Magento Developer",
        company: "Creative Agency",
        type: "Full Time",
        date: "02 June 2021",
        status: "Active",
    },
    {
        id: 2,
        title: "Apple School & College",
        company: "Themesbrand",
        type: "Part Time",
        date: "15 June 2021",
        status: "New",
    },
    {
        id: 3,
        title: "Marketing Director",
        company: "Web Technology pvt.Ltd",
        type: "Full Time",
        date: "02 June 2021",
        status: "Close",
    },
    {
        id: 4,
        title: "HTML Developer",
        company: "Skote Technology pvt.Ltd",
        type: "Full Time",
        date: "02 June 2021",
        status: "Active",
    },
    {
        id: 5,
        title: "Product Sales Specialist",
        company: "New Technology pvt.Ltd",
        type: "Part Time",
        date: "25 June 2021",
        status: "New",
    },
    {
        id: 6,
        title: "Magento Developer",
        company: "Themesbrand",
        type: "Freelance",
        date: "25 June 2021",
        status: "Close",
    },
    {
        id: 7,
        title: "Magento Developer",
        company: "Web Technology pvt.Ltd",
        type: "Part Time",
        date: "25 June 2021",
        status: "Active",
    },
    {
        id: 8,
        title: "Magento Developer",
        company: "Web Technology pvt.Ltd",
        type: "Full Time",
        date: "02 June 2021",
        status: "Close",
    },
    {
        id: 9,
        title: "Magento Developer",
        company: "Adobe Agency",
        type: "Freelance",
        date: "02 June 2021",
        status: "New",
    },
    {
        id: 10,
        title: "Magento Developer",
        company: "Web Technology pvt.Ltd",
        type: "Internship",
        date: "02 June 2021",
        status: "Active",
    },
];



/***/ }),

/***/ 50181:
/*!***********************************************************************!*\
  !*** ./src/app/pages/jobs/candidate-list/candidate-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateListComponent": () => (/* binding */ CandidateListComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 95974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







function CandidateListComponent_div_94_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r4);
} }
const _c0 = function (a0, a1, a2, a3) { return { "badge-soft-success": a0, "badge-soft-danger": a1, "badge-soft-info": a2, "badge-soft-warning": a3 }; };
const _c1 = function (a0) { return { "active": a0 }; };
function CandidateListComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 5)(3, "div", 57)(4, "div", 58)(5, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateListComponent_div_94_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const data_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.activeMenu(data_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 66)(16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CandidateListComponent_div_94_span_23_Template, 2, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 72)(25, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](12, _c0, data_r2.type === "Full Time", data_r2.type === "Part Time", data_r2.type === "Freelance", data_r2.type === "Internship"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("btn btn-light btn-sm like-btn active_", data_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c1, data_r2.active == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", data_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r2.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", data_r2.price, " / hrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", data_r2.tags);
} }
/**
 * Candidate List Component
 */
class CandidateListComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Jobs' }, { label: 'Candidate List', active: true }];
        this.CandidateList = _data__WEBPACK_IMPORTED_MODULE_0__.CandidateList;
    }
    /**
     * Active Toggle navbar
     */
    activeMenu(id) {
        document.querySelector('.active_' + id)?.classList.toggle('active');
    }
}
CandidateListComponent.ɵfac = function CandidateListComponent_Factory(t) { return new (t || CandidateListComponent)(); };
CandidateListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CandidateListComponent, selectors: [["app-candidate-list"]], decls: 95, vars: 4, consts: [[1, "container-fluid"], ["title", "Candidate List", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card", "job-filter"], [1, "card-body"], ["action", "javascript:void(0);"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-4"], [1, "position-relative"], ["type", "text", "id", "searchJob", "autocomplete", "off", "placeholder", "Search your candidate", 1, "form-control"], [1, "col-xxl-2", "col-lg-4"], ["type", "text", "id", "locationInput", "autocomplete", "off", "placeholder", "San Francisco, LA", 1, "form-control"], ["aria-label", "Default select example", 1, "form-select", "select2"], ["selected", ""], ["value", "Freelance"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Internship"], [1, "col-xxl-2", "col-lg-6"], ["id", "datepicker1"], ["type", "text", "placeholder", "Select date", "data-date-format", "dd M, yyyy", "data-date-autoclose", "true", "data-date-container", "#datepicker1", "data-provide", "datepicker", 1, "form-control"], [1, "position-relative", "h-100", "hstack", "gap-3"], ["type", "submit", 1, "btn", "btn-primary", "h-100", "w-100"], [1, "bx", "bx-search-alt", "align-middle"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-controls", "collapseExample", 1, "btn", "btn-secondary", "h-100", "w-100", 3, "click"], [1, "bx", "bx-filter-alt", "align-middle"], ["id", "collapseExample", 1, "collapse", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "col-xxl-4", "col-lg-6"], ["for", "experience", 1, "form-label", "fw-semibold"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox4", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox5", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox5", 1, "form-check-label"], ["for", "jobType", 1, "form-label", "fw-semibold"], ["type", "checkbox", "id", "inlineCheckbox6", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox6", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox7", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox7", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox8", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox8", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox9", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox9", 1, "form-check-label"], ["for", "qualificationInput", 1, "form-label", "fw-semibold"], ["type", "text", "id", "qualificationInput", "autocomplete", "off", "placeholder", "Qualification", 1, "form-control"], [1, "ri-government-line", "filter-icon"], ["class", "col-xl-3", 4, "ngFor", "ngForOf"], [1, "col-xl-3"], [1, "card"], [1, "d-flex", "align-start", "mb-3"], [1, "flex-grow-1"], [1, "badge", 3, "ngClass"], ["type", "button", "data-bs-toggle", "button", 3, "ngClass", "click"], [1, "bx", "bx-heart"], [1, "text-center", "mb-3"], ["alt", "", 1, "avatar-sm", "rounded-circle", 3, "src"], [1, "font-size-15", "mt-3", "mb-1"], [1, "mb-0", "text-muted"], [1, "d-flex", "mb-3", "justify-content-center", "gap-2", "text-muted"], [1, "bx", "bx-map", "align-middle", "text-primary"], [1, "mb-0", "text-center"], [1, "bx", "bx-money", "align-middle", "text-primary"], [1, "hstack", "gap-2", "justify-content-center"], ["class", "badge badge-soft-secondary", 4, "ngFor", "ngForOf"], [1, "mt-4", "pt-1"], ["routerLink", "/jobs/candidate-overview", 1, "btn", "btn-soft-primary", "d-block"], [1, "badge", "badge-soft-secondary"]], template: function CandidateListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "form", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "div", 9)(16, "select", 13)(17, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Select for");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Full Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Part Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Internship");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19)(28, "div", 9)(29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "div", 22)(33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Find Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidateListComponent_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Advance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngbCollapseChange", function CandidateListComponent_Template_div_ngbCollapseChange_39_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div")(42, "div", 7)(43, "div", 29)(44, "div")(45, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Fresher");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "1-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "2-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 29)(68, "div")(69, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Job Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Full Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Part Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Internship");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 8)(88, "div", 9)(89, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Qualification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 52)(92, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, CandidateListComponent_div_94_Template, 27, 19, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.CandidateList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapse, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 95974:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/candidate-list/data.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateList": () => (/* binding */ CandidateList)
/* harmony export */ });
const CandidateList = [
    {
        id: '1',
        type: 'Full Time',
        profile: 'assets/images/users/avatar-1.jpg',
        name: 'Steven Franklin',
        position: 'UI/UX Designer',
        location: 'Louisiana',
        price: 38,
        tags: ['Bootstrap', 'HTML', 'CSS'],
    },
    {
        id: '2',
        type: 'Freelance',
        profile: 'assets/images/users/avatar-2.jpg',
        name: 'Dolores Minter',
        position: 'Assistant / Shope Keeper',
        location: 'Hong-Kong',
        price: 25,
        tags: ['Shope', 'Assistant'],
    },
    {
        id: '3',
        type: 'Part Time',
        profile: 'assets/images/users/avatar-3.jpg',
        name: 'Charles Brown',
        position: 'Web Designer',
        location: 'Finlande',
        price: 24,
        tags: ['Bootstrap', 'HTML', 'SASS'],
    },
    {
        id: '4',
        type: 'Internship',
        profile: 'assets/images/users/avatar-4.jpg',
        name: 'Bonnie Harney',
        position: 'Web Developer',
        location: 'France',
        price: 47,
        tags: ['MYSQL', 'PHP', 'Laravel'],
    },
    {
        id: '5',
        type: 'Internship',
        profile: 'assets/images/users/avatar-5.jpg',
        name: 'Stephen Hadley',
        position: 'Graphic Designer',
        location: 'Danemark',
        price: 83,
        tags: ['Figma', 'Adobe XD', 'Sketch'],
    },
    {
        id: '6',
        type: 'Internship',
        profile: 'assets/images/users/avatar-6.jpg',
        name: 'Henry Wells',
        position: 'Executive, HR Operations',
        location: 'Danemark',
        price: 65,
        tags: ['HR', 'Executive', 'Professional'],
    },
    {
        id: '7',
        type: 'Full Time',
        profile: 'assets/images/users/avatar-7.jpg',
        name: 'Adam Miller',
        position: 'Education Training',
        location: 'Colombie',
        price: 40,
        tags: ['Teaching', 'React', 'Training'],
    },
    {
        id: '8',
        type: 'Freelance',
        profile: 'assets/images/users/avatar-8.jpg',
        name: 'Keith Gonzales',
        position: 'Product Manager',
        location: 'Brazil',
        price: 50,
        tags: ['Manager', 'Business', 'Product'],
    },
];



/***/ }),

/***/ 60910:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/jobs/candidate-overview/candidate-overview.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidateOverviewComponent": () => (/* binding */ CandidateOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * Candidate Overview Component
 */
class CandidateOverviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
CandidateOverviewComponent.ɵfac = function CandidateOverviewComponent_Factory(t) { return new (t || CandidateOverviewComponent)(); };
CandidateOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CandidateOverviewComponent, selectors: [["app-candidate-overview"]], decls: 277, vars: 0, consts: [[1, "row"], [1, "col-lg-12"], [1, "card", "mx-n4", "mt-n4", "bg-info", "bg-soft"], [1, "card-body"], [1, "text-center", "mb-4"], ["src", "assets/images/users/avatar-6.jpg", "alt", "", 1, "avatar-md", "rounded-circle", "mx-auto", "d-block"], [1, "mt-3", "mb-1"], [1, "text-muted", "mb-3"], [1, "mx-auto", "d-flex", "gap-1", "justify-content-center"], [1, "badge", "text-bg-info"], [1, "badge", "text-bg-success"], [1, "badge", "text-bg-warning"], [1, "d-flex", "align-items-center"], [1, "list-unstyled", "hstack", "gap-3", "mb-0", "flex-grow-1"], [1, "bx", "bx-map", "align-middle"], [1, "bx", "bx-money", "align-middle"], [1, "bx", "bx-time", "align-middle"], [1, "hstack", "gap-2"], ["type", "button", 1, "btn", "btn-primary"], [1, "bx", "bx-download", "align-baseline", "ms-1"], ["type", "button", 1, "btn", "btn-light"], [1, "bx", "bx-bookmark", "align-baseline"], [1, "col-lg-3"], [1, "card"], [1, "list-unstyled", "vstack", "gap-3", "mb-0"], [1, "d-flex"], [1, "bx", "bx-calendar", "font-size-18", "text-primary"], [1, "ms-3"], [1, "mb-1", "fw-semibold"], [1, "text-muted"], [1, "bx", "bx-money", "font-size-18", "text-primary"], [1, "bx", "bx-user", "font-size-18", "text-primary"], [1, "mdi", "mdi-book-education", "font-size-18", "text-primary"], [1, "mdi", "mdi-google-translate", "font-size-18", "text-primary"], [1, "hstack", "gap-2", "mt-3"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-danger", "w-100"], [1, "col-lg-9"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle"], [1, "flex-grow-1"], [1, "font-size-14", "mb-1"], [1, "text-muted", "mb-0"], [1, "col-xl-4"], [1, "flex-shrink-0", "me-4"], [1, "avatar-md"], [1, "avatar-title", "rounded-circle", "bg-light", "text-danger", "font-size-16"], ["src", "assets/images/companies/img-1.png", "alt", "", "height", "30"], [1, "flex-grow-1", "overflow-hidden"], [1, "text-truncate", "font-size-15"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "avatar-group"], [1, "avatar-group-item"], ["href", "javascript: void(0);", 1, "d-inline-block"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-success", "text-white", "font-size-16"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "px-4", "py-3", "border-top"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-3"], [1, "badge", "bg-success"], [1, "bx", "bx-calendar", "me-1"], [1, "bx", "bx-comment-dots", "me-1"], ["src", "assets/images/companies/img-4.png", "alt", "", "height", "30"], [1, "avatar-title", "rounded-circle", "bg-pink", "text-white", "font-size-16"], ["src", "assets/images/companies/img-5.png", "alt", "", "height", "30"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-danger", "text-white", "font-size-16"], [1, "card-body", "border-bottom"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary"], [1, "bx", "bxl-facebook", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-info"], [1, "bx", "bxl-twitter", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-pink"], [1, "bx", "bxl-instagram", "align-middle", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-success"], [1, "bx", "bxl-whatsapp", "align-middle", "me-1"]], template: function CandidateOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Steven Franklin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Adobe XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "ul", 13)(23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " California ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " $87 / hrs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 5 days working ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17)(33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Download CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0)(39, "div", 22)(40, "div", 23)(41, "div", 3)(42, "ul", 24)(43, "li")(44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27)(47, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Experience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2+ Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27)(55, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Current Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$ 3451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27)(63, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Expected Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "$ 4000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27)(71, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li")(75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27)(78, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Qualification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Master Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li")(83, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27)(86, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "English, France");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 34)(91, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Hire Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37)(96, "div", 23)(97, "div", 3)(98, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul", 40)(107, "li", 41)(108, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 25)(111, "div", 44)(112, "div")(113, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "BCA - Bachelor of Computer Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "International University - (2004-2010)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 41)(120, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 25)(123, "div", 44)(124, "div")(125, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "MCA - Master of Computer Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "International University - (2010-2012)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 41)(132, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 25)(135, "div", 44)(136, "div")(137, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Design Communication Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "International University - (2012-2015)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 0)(144, "div", 1)(145, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 47)(148, "div", 23)(149, "div", 3)(150, "div", 25)(151, "div", 48)(152, "div", 49)(153, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 52)(156, "h5", 53)(157, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "New admin Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "It will be as simple as Occidental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 55)(162, "div", 56)(163, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 56)(166, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 56)(169, "a", 57)(170, "div", 60)(171, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 56)(174, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 63)(177, "ul", 64)(178, "li", 65)(179, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " 15 Oct, 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " 214 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 47)(188, "div", 23)(189, "div", 3)(190, "div", 25)(191, "div", 48)(192, "div", 49)(193, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 52)(196, "h5", 53)(197, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "App Landing UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "To achieve it would be necessary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 55)(202, "div", 56)(203, "a", 57)(204, "div", 60)(205, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " L ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 56)(208, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 63)(211, "ul", 64)(212, "li", 65)(213, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " 11 Oct, 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " 185 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 47)(222, "div", 23)(223, "div", 3)(224, "div", 25)(225, "div", 48)(226, "div", 49)(227, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 52)(230, "h5", 53)(231, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Skote Dashboard UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Separate existence is a myth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 55)(236, "div", 56)(237, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 56)(240, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 56)(243, "a", 57)(244, "div", 60)(245, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " 3+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 63)(248, "ul", 64)(249, "li", 65)(250, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " 13 Oct, 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " 194 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 0)(259, "div", 1)(260, "div", 23)(261, "div", 75)(262, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 17)(265, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5kaWRhdGUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 39792:
/*!***************************************************************!*\
  !*** ./src/app/pages/jobs/categories/categories.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);


/**
 * Categories Component
 */
class CategoriesComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Jobs' }, { label: 'Job Categories', active: true }];
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 150, vars: 1, consts: [[1, "container-fluid"], ["title", "Job Categories", 3, "breadcrumbItems"], [1, "row", "justify-content-center", "text-center"], [1, "col-xl-4"], [1, "mb-4"], [1, "text-muted"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "jobs-categories"], [1, "card-body"], ["href", "javascript:void(0);", 1, "px-3", "py-2", "rounded", "bg-light", "bg-opacity-50", "d-block", "mb-2"], [1, "badge", "text-bg-info", "float-end", "bg-opacity-100"], ["href", "javascript:void(0);", 1, "px-3", "py-2", "rounded", "bg-light", "bg-opacity-50", "d-block"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Browse Job By Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Post a job to tell us about your project. We'll quickly match you with the right freelancers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Accounting & Finance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "52");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Customer Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "64");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Human Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "142");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Health and Care ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "254");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Automotive Jobs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "79");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7)(46, "div", 8)(47, "div", 9)(48, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Accounting & Finance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "85");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Customer Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "48");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "34");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Human Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Health and Care ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "748");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Automotive Jobs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "94");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 7)(81, "div", 8)(82, "div", 9)(83, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Accounting & Finance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "64");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Customer Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "72");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Human Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "305");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Health and Care ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "64");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "112");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Automotive Jobs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 7)(116, "div", 8)(117, "div", 9)(118, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Accounting & Finance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "85");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Customer Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "48");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "34");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Human Resource ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Health and Care ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "748");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Automotive Jobs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "94");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, dependencies: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5714:
/*!*********************************************************!*\
  !*** ./src/app/pages/jobs/details/details.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);


/**
 * Details Component
 */
class DetailsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Jobs' }, { label: 'Job Details', active: true }];
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 207, vars: 1, consts: [[1, "container-fluid"], ["title", "Job Details", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-3"], [1, "card"], [1, "card-body"], [1, "fw-semibold"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "badge", "badge-soft-success"], [1, "badge", "badge-soft-info"], [1, "hstack", "gap-2"], [1, "btn", "btn-soft-primary", "w-100"], [1, "btn", "btn-soft-danger", "w-100"], [1, "text-center"], ["src", "assets/images/companies/adobe-photoshop.svg", "alt", "", "height", "50", 1, "mx-auto", "d-block"], [1, "mt-3", "mb-1"], [1, "text-muted", "mb-0"], [1, "list-unstyled", "mt-4"], [1, "d-flex"], [1, "bx", "bx-phone", "text-primary", "fs-4"], [1, "ms-3"], [1, "fs-14", "mb-2"], [1, "text-muted", "fs-14", "mb-0"], [1, "mt-3"], [1, "bx", "bx-mail-send", "text-primary", "fs-4"], [1, "bx", "bx-globe", "text-primary", "fs-4"], [1, "text-muted", "fs-14", "text-break", "mb-0"], [1, "bx", "bx-map", "text-primary", "fs-4"], [1, "mt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-soft-primary", "btn-hover", "w-100", "rounded"], [1, "mdi", "mdi-eye"], [1, "col-xl-9"], [1, "card-body", "border-bottom"], ["src", "assets/images/companies/wechat.svg", "alt", "", "height", "50"], [1, "flex-grow-1", "ms-3"], [1, "list-unstyled", "hstack", "gap-2", "mb-0"], [1, "bx", "bx-building-house"], [1, "text-muted"], [1, "bx", "bx-map"], [1, "fw-semibold", "mb-3"], [1, "vstack", "gap-3"], [1, "vstack", "gap-3", "mb-0"], [1, "mt-4", "d-flex", "gap-1"], [1, "badge", "badge-soft-warning"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mt-1"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "btn-hover"], [1, "uil", "uil-facebook-f"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-danger", "btn-hover"], [1, "uil", "uil-google"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-success", "btn-hover"], [1, "uil", "uil-linkedin-alt"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "table", 8)(10, "tbody")(11, "tr")(12, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Job Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Magento Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr")(17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Experience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "0-2 Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr")(22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Vacancy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr")(27, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Job Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td")(30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Full Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr")(33, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td")(36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr")(39, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Posted Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "25 June, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr")(44, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Close Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "13 April, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13)(49, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 4)(54, "div", 5)(55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Since July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul", 20)(62, "li")(63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 23)(66, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "+589 560 56555");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 26)(71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 23)(74, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "themesbrand@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li", 26)(79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 23)(82, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "www.themesbrand.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li", 26)(87, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 23)(90, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Oakridge Lane Richardson.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 31)(95, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 34)(99, "div", 4)(100, "div", 35)(101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 37)(104, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Magento Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ul", 38)(107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "California");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 5)(116, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each site, and maintaining security and feature updates after the installation is complete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Responsibilities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ul", 43)(123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Meeting with the design team to discuss the needs of the company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Building and configuring Magento 1x and 2x eCommerce websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Coding of the Magento templates. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Developing Magento modules in PHP using best practices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Designing themes and interfaces. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Setting performance tasks and goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Updating website features and security patches. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Requirements:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "ul", 43)(140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Bachelor\u2019s degree in computer science or related field. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " Advanced knowledge of Magento, JavaScript, HTML, PHP, CSS, and MySQL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " Experience with complete eCommerce lifecycle development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Understanding of modern UI/UX trends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " Knowledge of Google Tag Manager, SEO, Google Analytics, PPC, and A/B Testing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Good working knowledge of Adobe Photoshop and Adobe Illustrator. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " Strong attention to detail. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " Ability to project-manage and work to strict deadlines. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Ability to work in a team environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Qualification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "ul", 43)(161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " B.C.A / M.C.A under National University course complete. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " 3 or more years of professional design experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " Advanced degree or equivalent experience in graphic and web design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Skill & Experience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "ul", 44)(170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Understanding of key Design Principal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " Proficiency With HTML, CSS, Bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " WordPress: 1 year (Required) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Experience designing and developing responsive design websites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " web designing: 1 year (Preferred) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 45)(181, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Magento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 31)(192, "ul", 47)(193, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, " Share this job: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 48)(196, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "li", 48)(200, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Google+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "li", 48)(204, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, " linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, dependencies: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 17489:
/*!*****************************************!*\
  !*** ./src/app/pages/jobs/grid/data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobGriddata": () => (/* binding */ JobGriddata)
/* harmony export */ });
const JobGriddata = [
    {
        id: 1,
        image: "assets/images/companies/adobe.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 2,
        image: "assets/images/companies/adobe-photoshop.svg",
        title: "Product Designer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 3,
        image: "assets/images/companies/airbnb.svg",
        title: "Marketing Director",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 4,
        image: "assets/images/companies/amazon.svg",
        title: "Project Manager",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 5,
        image: "assets/images/companies/flutter.svg",
        title: "HTML Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 6,
        image: "assets/images/companies/mailchimp.svg",
        title: "Business Associate",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 7,
        image: "assets/images/companies/line.svg",
        title: "Product Sales Specialist",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 8,
        image: "assets/images/companies/spotify.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 9,
        image: "assets/images/companies/wordpress.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 10,
        image: "assets/images/companies/upwork.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 11,
        image: "assets/images/companies/sass.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
    {
        id: 12,
        image: "assets/images/companies/reddit.svg",
        title: "Magento Developer",
        year: "0-2",
        company: "Skote Technology Pvt.Ltd",
        location: "California",
        price: "$250 - $800"
    },
];



/***/ }),

/***/ 95182:
/*!************************************************************!*\
  !*** ./src/app/pages/jobs/grid/grid-sortable.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdJobGridSortableHeader": () => (/* binding */ NgbdJobGridSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdJobGridSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdJobGridSortableHeader.ɵfac = function NgbdJobGridSortableHeader_Factory(t) { return new (t || NgbdJobGridSortableHeader)(); };
NgbdJobGridSortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdJobGridSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdJobGridSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdJobGridSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 79626:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/grid/grid.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.service */ 30568);
/* harmony import */ var _grid_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-sortable.directive */ 95182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);











function GridComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 5)(3, "div", 62)(4, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 66)(8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 69)(13, "li", 70)(14, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 70)(17, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 70)(21, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 75)(25, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Full Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Urgent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 79)(32, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GridComponent_div_83_Template_a_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](105);

      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.openModal(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Apply Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", data_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", data_r4.year, " Yrs Exp.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.price, " / month");
  }
}

function GridComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82)(1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Apply For This Job");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GridComponent_ng_template_104_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 85)(5, "form")(6, "div", 2)(7, "div", 3)(8, "div", 86)(9, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 89)(13, "div", 86)(14, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 89)(18, "div", 86)(19, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 3)(23, "div", 86)(24, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Upload Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 3)(28, "div", 96)(29, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "textarea", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 3)(33, "div", 99)(34, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Send Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
}
/**
 * Grid Component
 */


class GridComponent {
  constructor(service, formBuilder, modalService) {
    this.service = service;
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.isCollapsed = true;
    this.submitted = false;
    this.jobGrid = service.jobGrid$;
    this.total = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Jobs'
    }, {
      label: 'Jobs Grid',
      active: true
    }];
    /**
    * fetches data
    */

    this.jobGrid.subscribe(x => {
      this.content = this.grids;
      this.grids = Object.assign([], x);
    });
  }
  /**
   * Open modal
   * @param content modal content
   */


  openModal(content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
  }

}

GridComponent.ɵfac = function GridComponent_Factory(t) {
  return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_grid_service__WEBPACK_IMPORTED_MODULE_0__.JobGridService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};

GridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GridComponent,
  selectors: [["app-grid"]],
  viewQuery: function GridComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_grid_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdJobGridSortableHeader, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_grid_service__WEBPACK_IMPORTED_MODULE_0__.JobGridService, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe])],
  decls: 106,
  vars: 13,
  consts: [[1, "container-fluid"], ["title", "Jobs Grid", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card", "job-filter"], [1, "card-body"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-4"], [1, "position-relative"], ["type", "text", "id", "searchJob", "autocomplete", "off", "placeholder", "Search your job", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-xxl-2", "col-lg-4"], ["type", "text", "id", "locationInput", "autocomplete", "off", "placeholder", "San Francisco, LA", 1, "form-control"], ["type", "text", "id", "jobCategories", "autocomplete", "off", "placeholder", "Job Categories", 1, "form-control"], [1, "col-xxl-2", "col-lg-6"], ["id", "datepicker1"], ["type", "text", "placeholder", "Select date", "data-date-format", "dd M, yyyy", "data-date-container", "#datepicker1", "data-provide", "datepicker", "data-date-autoclose", "true", 1, "form-control"], [1, "position-relative", "h-100", "hstack", "gap-3"], ["type", "submit", 1, "btn", "btn-primary", "h-100", "w-100"], [1, "bx", "bx-search-alt", "align-middle"], ["href", "javascript:void(0);", "aria-controls", "collapseExample", 1, "btn", "btn-secondary", "h-100", "w-100", 3, "click"], [1, "bx", "bx-filter-alt", "align-middle"], ["id", "collapseExample", 1, "collapse", 3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "col-xxl-4", "col-lg-6"], ["for", "experience", 1, "form-label", "fw-semibold"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox4", "value", "option2", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox5", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox5", 1, "form-check-label"], ["for", "jobType", 1, "form-label", "fw-semibold"], ["type", "checkbox", "id", "inlineCheckbox6", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox6", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox7", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox7", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox8", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox8", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox9", "value", "option3", 1, "form-check-input"], ["for", "inlineCheckbox9", 1, "form-check-label"], ["for", "qualificationInput", 1, "form-label", "fw-semibold"], ["type", "text", "id", "qualificationInput", "autocomplete", "off", "placeholder", "Qualification", 1, "form-control"], [1, "ri-government-line", "filter-icon"], ["class", "col-xl-3 col-md-6", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "align-items-center", "mb-3"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "card", "d-inline-block", "ms-auto", "mb-0"], [1, "card-body", "p-2"], ["aria-label", "Page navigation example", 1, "mb-0"], [1, "pagination", "mb-0"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["role", "document"], ["content", ""], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "favorite-icon"], ["href", "javascript:void(0)"], [1, "uil", "uil-heart-alt", "fs-18"], ["alt", "", "height", "50", 1, "mb-3", 3, "src"], [1, "fs-17", "mb-2"], ["routerLink", "/jobs/details", 1, "text-dark"], [1, "text-muted", "fw-normal"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "text-muted", "fs-14", "mb-1"], [1, "text-muted", "fs-14", "mb-0"], [1, "mdi", "mdi-map-marker"], [1, "uil", "uil-wallet"], [1, "mt-3", "hstack", "gap-2"], [1, "badge", "rounded-1", "badge-soft-success"], [1, "badge", "rounded-1", "badge-soft-warning"], [1, "badge", "rounded-1", "badge-soft-info"], [1, "mt-4", "hstack", "gap-2"], ["routerLink", "/jobs/details", 1, "btn", "btn-soft-success", "w-100"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-soft-primary", "w-100", 3, "click"], [1, "modal-header"], ["id", "applyJobsLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "close-modal", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "fullnameInput", 1, "form-label"], ["type", "text", "id", "fullnameInput", "placeholder", "Enter your name", 1, "form-control"], [1, "col-lg-6"], ["for", "emailInput", 1, "form-label"], ["type", "email", "id", "emailInput", "placeholder", "Enter your email", 1, "form-control"], ["for", "phoneNumberInput", 1, "form-label"], ["type", "email", "id", "phoneNumberInput", "placeholder", "Enter your number", 1, "form-control"], ["for", "uploadResume", 1, "form-label"], ["type", "file", "id", "uploadResume", "placeholder", "Upload resume", 1, "form-control"], [1, "mb-4"], ["for", "messageInput", 1, "form-label"], ["id", "messageInput", "rows", "3", "placeholder", "Enter your message", 1, "form-control"], [1, "text-end"], [1, "btn", "btn-success", "me-1"], [1, "bx", "bx-send", "align-middle"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary"]],
  template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function GridComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.service.searchTerm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "div", 8)(18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "div", 16)(22, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Find Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GridComponent_Template_a_click_25_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Advance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngbCollapseChange", function GridComponent_Template_div_ngbCollapseChange_28_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div")(31, "div", 6)(32, "div", 23)(33, "div")(34, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Fresher");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "1-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "2-3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "4+");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 23)(57, "div")(58, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Job Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Full Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Part Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Freelance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Internship");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 7)(77, "div", 8)(78, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Qualification");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "input", 46)(81, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, GridComponent_div_83_Template, 36, 6, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 49)(85, "div", 50)(86, "p", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 52)(98, "div", 53)(99, "div", 54)(100, "nav", 55)(101, "ul", 56)(102, "ngb-pagination", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function GridComponent_Template_ngb_pagination_pageChange_102_listener($event) {
        return ctx.service.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](103, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, GridComponent_ng_template_104_Template, 39, 0, "ng-template", 58, 59, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.grids);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.service.startIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.service.endIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.service.totalRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](103, 11, ctx.total))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapse, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 30568:
/*!*************************************************!*\
  !*** ./src/app/pages/jobs/grid/grid.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobGridService": () => (/* binding */ JobGridService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 17489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(jobGrid, column, direction) {
    if (direction === '' || column === '') {
        return jobGrid;
    }
    else {
        return [...jobGrid].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return country.title.toLowerCase().includes(term.toLowerCase());
}
class JobGridService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.jobLlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 0,
            endIndex: 9,
            totalRecords: 0,
            status: '',
            type: '',
            date: '',
        };
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this.jobLlist$.next(result.jobGrid);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get jobGrid$() { return this.jobLlist$.asObservable(); }
    get product() { return this.products; }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }
    get status() { return this._state.status; }
    get type() { return this._state.type; }
    get date() { return this._state.date; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    set startIndex(startIndex) { this._set({ startIndex }); }
    set endIndex(endIndex) { this._set({ endIndex }); }
    set totalRecords(totalRecords) { this._set({ totalRecords }); }
    set status(status) { this._set({ status }); }
    set type(type) { this._set({ type }); }
    set date(date) { this._set({ date }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, status, type, date } = this._state;
        // 1. sort
        let jobGrid = sort(_data__WEBPACK_IMPORTED_MODULE_0__.JobGriddata, sortColumn, sortDirection);
        // 2. filter
        jobGrid = jobGrid.filter(country => matches(country, searchTerm, this.pipe));
        const total = jobGrid.length;
        // 3. paginate
        this.totalRecords = jobGrid.length;
        this._state.startIndex = (page - 1) * this.pageSize + 1;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        jobGrid = jobGrid.slice(this._state.startIndex - 1, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ jobGrid, total });
    }
}
JobGridService.ɵfac = function JobGridService_Factory(t) { return new (t || JobGridService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe)); };
JobGridService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JobGridService, factory: JobGridService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43136:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsRoutingModule": () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ 15669);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ 79626);
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply/apply.component */ 91692);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ 5714);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ 39792);
/* harmony import */ var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidate-list/candidate-list.component */ 50181);
/* harmony import */ var _candidate_overview_candidate_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate-overview/candidate-overview.component */ 60910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: "list",
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent
    },
    {
        path: "grid",
        component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__.GridComponent
    },
    {
        path: "apply",
        component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_2__.ApplyComponent
    },
    {
        path: "details",
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__.DetailsComponent
    },
    {
        path: "categories",
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesComponent
    },
    {
        path: "candidate-list",
        component: _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__.CandidateListComponent
    },
    {
        path: "candidate-overview",
        component: _candidate_overview_candidate_overview_component__WEBPACK_IMPORTED_MODULE_6__.CandidateOverviewComponent
    }
];
class JobsRoutingModule {
}
JobsRoutingModule.ɵfac = function JobsRoutingModule_Factory(t) { return new (t || JobsRoutingModule)(); };
JobsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: JobsRoutingModule });
JobsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](JobsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 98766:
/*!*******************************************!*\
  !*** ./src/app/pages/jobs/jobs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsModule": () => (/* binding */ JobsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 19668);
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-routing.module */ 43136);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 15669);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid/grid.component */ 79626);
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apply/apply.component */ 91692);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ 5714);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ 39792);
/* harmony import */ var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./candidate-list/candidate-list.component */ 50181);
/* harmony import */ var _candidate_overview_candidate_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./candidate-overview/candidate-overview.component */ 60910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);













class JobsModule {
}
JobsModule.ɵfac = function JobsModule_Factory(t) { return new (t || JobsModule)(); };
JobsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: JobsModule });
JobsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](JobsModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent,
        _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__.GridComponent,
        _apply_apply_component__WEBPACK_IMPORTED_MODULE_4__.ApplyComponent,
        _details_details_component__WEBPACK_IMPORTED_MODULE_5__.DetailsComponent,
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesComponent,
        _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_7__.CandidateListComponent,
        _candidate_overview_candidate_overview_component__WEBPACK_IMPORTED_MODULE_8__.CandidateOverviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _jobs_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobsRoutingModule] }); })();


/***/ }),

/***/ 72212:
/*!*****************************************!*\
  !*** ./src/app/pages/jobs/list/data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobListdata": () => (/* binding */ JobListdata)
/* harmony export */ });
const JobListdata = [
    {
        id: 1,
        title: "Magento Developer",
        name: "Themesbrand",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Active",
        status_color: "success"
    },
    {
        id: 2,
        title: "Product Designer",
        name: "Web Technology pvt.ltd",
        location: "California",
        experience: "1-2 Years",
        position: 3,
        type: "Part Time",
        type_color: "danger",
        posted_date: "15 June 2021",
        last_date: "28 June 2021",
        status: "New",
        status_color: "info"
    },
    {
        id: 3,
        title: "Marketing Director",
        name: "Creative Agency",
        location: "Phoenix",
        experience: "-",
        position: 5,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Close",
        status_color: "danger"
    },
    {
        id: 4,
        title: "HTML Developer",
        name: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-4 Years",
        position: 8,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Active",
        status_color: "success"
    },
    {
        id: 5,
        title: "Product Sales Specialist",
        name: "Skote Technology pvt.Ltd",
        location: "Louisiana",
        experience: "5+ Years",
        position: 1,
        type: "Part Time",
        type_color: "danger",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "New",
        status_color: "info"
    },
    {
        id: 6,
        title: "Magento Developer",
        name: "New Technology pvt.ltd",
        location: "Oakridge Lane Richardson",
        experience: "0-2 Years",
        position: 2,
        type: "Freelance",
        type_color: "info",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "New",
        status_color: "info"
    },
    {
        id: 7,
        title: "Business Associate",
        name: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Active",
        status_color: "success"
    },
    {
        id: 8,
        title: "Magento Developer",
        name: "Adobe Agency",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Close",
        status_color: "danger"
    },
    {
        id: 9,
        title: "HTML Developer",
        name: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Part Time",
        type_color: "danger",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "New",
        status_color: "info"
    },
    {
        id: 10,
        title: "Marketing Director",
        name: "Web Technology pvt.ltd",
        location: "California",
        experience: "0-2 Years",
        position: 2,
        type: "Internship",
        type_color: "warning",
        posted_date: "02 June 2021",
        last_date: "25 June 2021",
        status: "Active",
        status_color: "success"
    },
];



/***/ }),

/***/ 62766:
/*!************************************************************!*\
  !*** ./src/app/pages/jobs/list/list-sortable.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdJobListSortableHeader": () => (/* binding */ NgbdJobListSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdJobListSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdJobListSortableHeader.ɵfac = function NgbdJobListSortableHeader_Factory(t) { return new (t || NgbdJobListSortableHeader)(); };
NgbdJobListSortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdJobListSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdJobListSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdJobListSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 15669:
/*!***************************************************!*\
  !*** ./src/app/pages/jobs/list/list.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.service */ 32961);
/* harmony import */ var _list_sortable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sortable.directive */ 62766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);













const _c0 = function (a0, a1, a2, a3) {
  return {
    "badge-soft-success": a0,
    "badge-soft-danger": a1,
    "badge-soft-info": a2,
    "badge-soft-warning": a3
  };
};

const _c1 = function (a0, a1, a2) {
  return {
    "bg-success": a0,
    "bg-info": a1,
    "bg-danger": a2
  };
};

function ListComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td")(21, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "ul", 55)(25, "li", 56)(26, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li", 59)(29, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_tr_88_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const data_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](112);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.editDataGet(data_r5.id, _r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 62)(32, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_tr_88_Template_a_click_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.delete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.experience);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-soft-", data_r5.type_color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](15, _c0, data_r5.type === "Full Time", data_r5.type === "Part Time", data_r5.type === "Freelance", data_r5.type === "Internship"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.posted_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.last_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](20, _c1, data_r5.status === "Active", data_r5.status === "New", data_r5.status === "Close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.status);
  }
}

function ListComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_ng_template_109_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const modal_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r9.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 68)(5, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Product id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "#SK2540");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Billing Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Neal Matthews");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 36)(14, "table", 72)(15, "thead")(16, "tr")(17, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody")(24, "tr")(25, "th", 52)(26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td")(29, "div")(30, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Wireless Headphone (Black)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "$ 225 x 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "$ 255");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tr")(37, "th", 52)(38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "td")(41, "div")(42, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Phone patterned cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "$ 145 x 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "$ 145");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr")(49, "td", 76)(50, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Sub Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "$ 400");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr")(55, "td", 76)(56, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Shipping:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "tr")(61, "td", 76)(62, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "$ 400");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 78)(67, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_ng_template_109_Template_button_click_67_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const modal_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r9.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function ListComponent_ng_template_111_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Jobs Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_11_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.form["title"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Company Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_16_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.form["name"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_21_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.form["location"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Experience is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_26_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.form["experience"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Position is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_31_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.form["position"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_42_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.form["type"].errors["required"]);
  }
}

function ListComponent_ng_template_111_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ListComponent_ng_template_111_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListComponent_ng_template_111_div_55_div_1_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r20.form["status"].errors["required"]);
  }
}

const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};

function ListComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_ng_template_111_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r13.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ListComponent_ng_template_111_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.saveUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 84)(8, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Jobs Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ListComponent_ng_template_111_div_11_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 84)(13, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ListComponent_ng_template_111_div_16_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 84)(18, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ListComponent_ng_template_111_div_21_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 84)(23, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ListComponent_ng_template_111_div_26_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 84)(28, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ListComponent_ng_template_111_div_31_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 84)(33, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "select", 93)(36, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Full Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Part Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ListComponent_ng_template_111_div_42_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 84)(44, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "select", 94)(47, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ListComponent_ng_template_111_div_55_Template, 2, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 78)(57, "div", 95)(58, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_ng_template_111_Template_button_click_58_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const modal_r13 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r13.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Add Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.jobListForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c2, ctx_r4.submitted && ctx_r4.form["title"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["title"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c2, ctx_r4.submitted && ctx_r4.form["name"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c2, ctx_r4.submitted && ctx_r4.form["location"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["location"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c2, ctx_r4.submitted && ctx_r4.form["experience"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["experience"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c2, ctx_r4.submitted && ctx_r4.form["position"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["position"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c2, ctx_r4.submitted && ctx_r4.form["type"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["type"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c2, ctx_r4.submitted && ctx_r4.form["status"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form["status"].errors);
  }
}
/**
 * List Component
 */


class ListComponent {
  constructor(modalService, service, formBuilder) {
    this.modalService = modalService;
    this.service = service;
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.jobList = service.jobList$;
    this.total = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Jobs'
    }, {
      label: 'Jobs List',
      active: true
    }];
    /**
     * Form Validation
     */

    this.jobListForm = this.formBuilder.group({
      id: "11",
      ids: [''],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      position: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    /**
    * fetches data
    */

    this.jobList.subscribe(x => {
      this.content = this.lists;
      this.lists = Object.assign([], x);
    });
  }
  /**
  * Open modal
  * @param content modal content
  */


  openViewModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  } // The master checkbox will check/ uncheck all items


  checkUncheckAll(ev) {
    this.lists.forEach(x => x.state = ev.target.checked);
  } // Delete Data


  delete(event) {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        event.target.closest('tr')?.remove();
      } else if (
      /* Read more about handling dismissals below */
      result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  /**
   * Open modal
   * @param content modal content
   */


  openModal(content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
  }
  /**
   * Form data get
   */


  get form() {
    return this.jobListForm.controls;
  }
  /**
  * Save user
  */


  saveUser() {
    if (this.jobListForm.valid) {
      if (this.jobListForm.get('ids')?.value) {
        this.lists = this.lists.map(data => data.id === this.jobListForm.get('ids')?.value ? { ...data,
          ...this.jobListForm.value
        } : data);
      } else {
        const id = '11';
        const title = this.jobListForm.get('title')?.value;
        const name = this.jobListForm.get('name')?.value;
        const location = this.jobListForm.get('location')?.value;
        const experience = this.jobListForm.get('experience')?.value;
        const position = this.jobListForm.get('position')?.value;
        const type = this.jobListForm.get('type')?.value;
        const posted_date = "02 June 2021";
        const last_date = "25 June 2021";
        const status = this.jobListForm.get('status')?.value;
        this.lists.push({
          id,
          title,
          name,
          location,
          experience,
          position,
          type,
          posted_date,
          last_date,
          status
        });
        this.modalService.dismissAll();
      }
    }

    this.modalService.dismissAll();
    setTimeout(() => {
      this.jobListForm.reset();
    }, 2000);
    this.submitted = true;
  }
  /**
   * Open Edit modal
   * @param content modal content
   */


  editDataGet(id, content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
    var modelTitle = document.querySelector('.modal-title');
    modelTitle.innerHTML = 'Edit Order';
    var updateBtn = document.getElementById('add-btn');
    updateBtn.innerHTML = "Update";
    var listData = this.lists.filter(data => data.id === id);
    this.jobListForm.controls['title'].setValue(listData[0].title);
    this.jobListForm.controls['name'].setValue(listData[0].name);
    this.jobListForm.controls['location'].setValue(listData[0].location);
    this.jobListForm.controls['experience'].setValue(listData[0].experience);
    this.jobListForm.controls['position'].setValue(listData[0].position);
    this.jobListForm.controls['type'].setValue(listData[0].type);
    this.jobListForm.controls['status'].setValue(listData[0].status);
    this.jobListForm.controls['ids'].setValue(listData[0].id);
  }

}

ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_1__.JobListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder));
};

ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_list_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.NgbdJobListSortableHeader, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_list_service__WEBPACK_IMPORTED_MODULE_1__.JobListService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe])],
  decls: 113,
  vars: 13,
  consts: [[1, "container-fluid"], ["title", "Jobs List", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body", "border-bottom"], [1, "d-flex", "align-items-center"], [1, "mb-0", "card-title", "flex-grow-1"], [1, "flex-shrink-0", "d-flex", "gap-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], [1, "mdi", "mdi-refresh"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "menu", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-dots-vertical"], ["aria-labelledby", "dropdownMenuButton1", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row", "g-3"], [1, "col-xxl-4", "col-lg-6"], ["type", "search", "id", "searchInput", "placeholder", "Search for ...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-xxl-2", "col-lg-6"], [1, "form-control", "select2", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Active"], ["value", "New"], ["value", "Close"], [1, "col-xxl-2", "col-lg-4"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Internship"], ["value", "Freelance"], ["id", "datepicker1"], ["type", "text", "placeholder", "Select date", "data-date-format", "dd M, yyyy", "data-date-autoclose", "true", "data-date-container", "#datepicker1", "data-provide", "datepicker", 1, "form-control"], ["type", "button", 1, "btn", "btn-soft-secondary", "w-100"], [1, "mdi", "mdi-filter-outline", "align-middle"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "nowrap"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "card", "d-inline-block", "ms-auto", "mb-0"], [1, "card-body", "p-2"], ["aria-label", "Page navigation example", 1, "mb-0"], [1, "pagination", "mb-0"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["role", "document"], ["ViewContent", ""], ["content", ""], ["scope", "row"], [3, "ngClass"], [1, "badge", 3, "ngClass"], [1, "list-unstyled", "hstack", "gap-1", "mb-0"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View"], ["routerLink", "/jobs/details", 1, "btn", "btn-sm", "btn-soft-primary"], [1, "mdi", "mdi-eye-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-info", 3, "click"], [1, "mdi", "mdi-pencil-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-sm", "btn-soft-danger", 3, "click"], [1, "mdi", "mdi-delete-outline"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-2"], [1, "text-primary"], [1, "mb-4"], [1, "table", "table-centered", "table-nowrap"], ["src", "assets/images/product/img-7.png", "alt", "", 1, "avatar-sm"], [1, "text-truncate", "font-size-14"], ["src", "assets/images/product/img-4.png", "alt", "", 1, "avatar-sm"], ["colspan", "2"], [1, "m-0", "text-end"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", "id", "close-modal", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], ["type", "hidden", "name", "id", "value", "", "formControlName", "ids"], [1, "mb-3"], ["for", "customername-field", 1, "form-label"], ["type", "text", "id", "customername-field", "placeholder", "Enter Name", "required", "", "formControlName", "title", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", "align", "left", 4, "ngIf"], ["type", "text", "id", "customername-field", "placeholder", "Enter Name", "required", "", "formControlName", "name", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Location", "required", "", "formControlName", "location", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Experience", "required", "", "formControlName", "experience", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "customername-field", "placeholder", "Enter Position", "required", "", "formControlName", "position", 1, "form-control", 3, "ngClass"], ["for", "payment-field", 1, "form-label"], ["data-trigger", "", "name", "payment-method", "id", "payment-field", "formControlName", "type", 1, "form-control", 3, "ngClass"], ["data-trigger", "", "name", "payment-method", "id", "payment-field", "formControlName", "status", 1, "form-control", 3, "ngClass"], [1, "hstack", "gap-2", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", 3, "click"], ["type", "submit", "id", "add-btn", 1, "btn", "btn-success"], ["align", "left", 1, "invalid-feedback"], [4, "ngIf"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Jobs Lists");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_Template_a_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](112);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openModal(_r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Add New Job");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 15)(18, "li")(19, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li")(22, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li")(25, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5)(28, "div", 17)(29, "div", 18)(30, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.service.searchTerm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_select_ngModelChange_32_listener($event) {
        return ctx.service.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Select Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 26)(42, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.service.type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Select Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Full Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Part Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Internship");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Freelance");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 26)(54, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 26)(57, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 35)(61, "div", 36)(62, "table", 37)(63, "thead")(64, "tr")(65, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Job Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Company Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Position");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Posted Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Last Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "th", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, ListComponent_tr_88_Template, 34, 24, "tr", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 40)(90, "div", 41)(91, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 43)(103, "div", 44)(104, "div", 45)(105, "nav", 46)(106, "ul", 47)(107, "ngb-pagination", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ListComponent_Template_ngb_pagination_pageChange_107_listener($event) {
        return ctx.service.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](108, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, ListComponent_ng_template_109_Template, 69, 0, "ng-template", 49, 50, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, ListComponent_ng_template_111_Template, 62, 29, "ng-template", 49, 51, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lists);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.startIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.endIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.totalRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](108, 11, ctx.total))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 32961:
/*!*************************************************!*\
  !*** ./src/app/pages/jobs/list/list.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobListService": () => (/* binding */ JobListService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 72212);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(jobList, column, direction) {
    if (direction === '' || column === '') {
        return jobList;
    }
    else {
        return [...jobList].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return country.title.toLowerCase().includes(term.toLowerCase());
}
class JobListService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.jobLlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 0,
            endIndex: 9,
            totalRecords: 0,
            status: '',
            type: '',
            date: '',
        };
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this.jobLlist$.next(result.jobList);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get jobList$() { return this.jobLlist$.asObservable(); }
    get product() { return this.products; }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }
    get status() { return this._state.status; }
    get type() { return this._state.type; }
    get date() { return this._state.date; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    set startIndex(startIndex) { this._set({ startIndex }); }
    set endIndex(endIndex) { this._set({ endIndex }); }
    set totalRecords(totalRecords) { this._set({ totalRecords }); }
    set status(status) { this._set({ status }); }
    set type(type) { this._set({ type }); }
    set date(date) { this._set({ date }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, status, type, date } = this._state;
        // 1. sort
        let jobList = sort(_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata, sortColumn, sortDirection);
        // 2. filter
        jobList = jobList.filter(country => matches(country, searchTerm, this.pipe));
        // 3. Status Filter
        if (status) {
            jobList = jobList.filter(country => country.status == status);
        }
        else {
            jobList = jobList;
        }
        // 4. Type Filter
        if (type) {
            jobList = jobList.filter(country => country.type == type);
        }
        else {
            jobList = jobList;
        }
        const total = jobList.length;
        // 3. paginate
        this.totalRecords = jobList.length;
        this._state.startIndex = (page - 1) * this.pageSize + 1;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        jobList = jobList.slice(this._state.startIndex - 1, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ jobList, total });
    }
}
JobListService.ɵfac = function JobListService_Factory(t) { return new (t || JobListService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe)); };
JobListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JobListService, factory: JobListService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_jobs_jobs_module_ts.js.map