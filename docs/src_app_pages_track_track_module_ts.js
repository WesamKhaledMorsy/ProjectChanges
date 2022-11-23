"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_track_track_module_ts"],{

/***/ 48039:
/*!********************************************************************!*\
  !*** ./src/app/pages/track/track-create/track-create.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackCreateComponent": () => (/* binding */ TrackCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TrackCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrackCreateComponent.ɵfac = function TrackCreateComponent_Factory(t) { return new (t || TrackCreateComponent)(); };
TrackCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackCreateComponent, selectors: [["app-track-create"]], decls: 2, vars: 0, template: function TrackCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "track-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFjay1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38175:
/*!****************************************************************!*\
  !*** ./src/app/pages/track/track-list/track-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackListComponent": () => (/* binding */ TrackListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TrackListComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrackListComponent.ɵfac = function TrackListComponent_Factory(t) { return new (t || TrackListComponent)(); };
TrackListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackListComponent, selectors: [["app-track-list"]], decls: 2, vars: 0, template: function TrackListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "track-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFjay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64034:
/*!*****************************************************!*\
  !*** ./src/app/pages/track/track-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackRoutingModule": () => (/* binding */ TrackRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _track_create_track_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-create/track-create.component */ 48039);
/* harmony import */ var _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-list/track-list.component */ 38175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'createTrack', component: _track_create_track_create_component__WEBPACK_IMPORTED_MODULE_0__.TrackCreateComponent },
    { path: 'listTrack', component: _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_1__.TrackListComponent },
    { path: 'edit/:id', component: _track_create_track_create_component__WEBPACK_IMPORTED_MODULE_0__.TrackCreateComponent },
];
class TrackRoutingModule {
}
TrackRoutingModule.ɵfac = function TrackRoutingModule_Factory(t) { return new (t || TrackRoutingModule)(); };
TrackRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrackRoutingModule });
TrackRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrackRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 76276:
/*!*********************************************!*\
  !*** ./src/app/pages/track/track.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackModule": () => (/* binding */ TrackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 8204);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 19694);
/* harmony import */ var _track_create_track_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-create/track-create.component */ 48039);
/* harmony import */ var _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track-list/track-list.component */ 38175);
/* harmony import */ var _track_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-routing.module */ 64034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class TrackModule {
}
TrackModule.ɵfac = function TrackModule_Factory(t) { return new (t || TrackModule)(); };
TrackModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TrackModule });
TrackModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _track_routing_module__WEBPACK_IMPORTED_MODULE_3__.TrackRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TrackModule, { declarations: [_track_create_track_create_component__WEBPACK_IMPORTED_MODULE_1__.TrackCreateComponent,
        _track_list_track_list_component__WEBPACK_IMPORTED_MODULE_2__.TrackListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _track_routing_module__WEBPACK_IMPORTED_MODULE_3__.TrackRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_track_track_module_ts.js.map