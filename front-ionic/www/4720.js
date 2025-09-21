"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[4720],{

/***/ 2339:
/*!*************************************************************!*\
  !*** ./src/app/pages/home-cuidador/home-cuidador.routes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _home_cuidador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-cuidador.page */ 3049);

const routes = [{
  path: '',
  component: _home_cuidador_page__WEBPACK_IMPORTED_MODULE_0__.HomeCuidadorPage
}];

/***/ }),

/***/ 3049:
/*!***********************************************************!*\
  !*** ./src/app/pages/home-cuidador/home-cuidador.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeCuidadorPage: () => (/* binding */ HomeCuidadorPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7282);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);








function HomeCuidadorPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Este \u00E9 o seu painel de controle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bem-vindo(a), ", ctx_r0.userData.name || "Cuidador", "");
  }
}
let HomeCuidadorPage = /*#__PURE__*/(() => {
  class HomeCuidadorPage {
    authService;
    userData = null;
    constructor(authService) {
      this.authService = authService;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.personOutline,
        'person-add-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.personAddOutline,
        'medicine-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.medkitOutline,
        'calendar-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.calendarOutline,
        'notifications-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.notificationsOutline,
        'exit-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.exitOutline,
        'people-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.peopleOutline
      });
    }
    ngOnInit() {
      this.userData = this.authService.getUser();
    }
    logout() {
      this.authService.logout();
    }
    static ɵfac = function HomeCuidadorPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeCuidadorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeCuidadorPage,
      selectors: [["app-home-cuidador"]],
      decls: 46,
      vars: 1,
      consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "exit-outline"], [1, "ion-padding"], ["class", "welcome-card", 4, "ngIf"], ["size", "6"], ["routerLink", "/cuidador/lista-idosos", 1, "menu-card"], [1, "ion-text-center"], ["name", "people-outline"], ["routerLink", "/cadastro-idoso", 1, "menu-card"], ["name", "person-add-outline"], ["routerLink", "/medicamentos", 1, "menu-card"], ["name", "medicine-outline"], ["routerLink", "/consultas", 1, "menu-card"], ["name", "calendar-outline"], ["routerLink", "/lembretes", 1, "menu-card"], ["name", "notifications-outline"], [1, "placeholder-message"], [1, "welcome-card"]],
      template: function HomeCuidadorPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Dashboard Cuidador");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeCuidadorPage_Template_ion_button_click_5_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeCuidadorPage_div_8_Template, 5, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-grid")(10, "ion-row")(11, "ion-col", 5)(12, "ion-card", 6)(13, "ion-card-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Meus Idosos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-col", 5)(18, "ion-card", 9)(19, "ion-card-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cadastrar Idoso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 5)(25, "ion-card", 11)(26, "ion-card-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Medicamentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-col", 5)(31, "ion-card", 13)(32, "ion-card-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Consultas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-row")(37, "ion-col", 5)(38, "ion-card", 15)(39, "ion-card-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "ion-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Lembretes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17)(44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Esta \u00E9 uma p\u00E1gina de placeholder para testar o redirecionamento ap\u00F3s o login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.D, _angular_common__WEBPACK_IMPORTED_MODULE_4__.I, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCol, _angular_router__WEBPACK_IMPORTED_MODULE_6__.R],
      styles: [".welcome-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid var(--ion-color-primary);\n}\n.welcome-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: var(--ion-color-primary);\n}\n.welcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: var(--ion-color-medium);\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0;\n}\n\n.placeholder-message[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: #fff3cd;\n  border-radius: 8px;\n  border: 1px solid #ffeeba;\n  color: #856404;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS1jdWlkYWRvci9ob21lLWN1aWRhZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBREY7QUFHRTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFITjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhY2Vob2xkZXItbWVzc2FnZSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmVlYmE7XHJcbiAgY29sb3I6ICM4NTY0MDQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return HomeCuidadorPage;
})();

/***/ })

}]);
//# sourceMappingURL=4720.js.map