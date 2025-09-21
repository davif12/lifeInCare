"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[5158],{

/***/ 5158:
/*!*******************************************************!*\
  !*** ./src/app/pages/home-idoso/home-idoso.routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _home_idoso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-idoso.page */ 7303);

const routes = [{
  path: '',
  component: _home_idoso_page__WEBPACK_IMPORTED_MODULE_0__.HomeIdosoPage
}];

/***/ }),

/***/ 7303:
/*!*****************************************************!*\
  !*** ./src/app/pages/home-idoso/home-idoso.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeIdosoPage: () => (/* binding */ HomeIdosoPage)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7282);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/elderly.service */ 149);









function HomeIdosoPage_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lembrete_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lembrete_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lembrete_r1.horario);
  }
}
let HomeIdosoPage = /*#__PURE__*/(() => {
  class HomeIdosoPage {
    elderlyService;
    nome = '';
    userData = null;
    lembretes = [{
      titulo: 'Tomar remédio',
      horario: '08:00',
      concluido: false
    }, {
      titulo: 'Consulta médica',
      horario: '14:30',
      concluido: false
    }, {
      titulo: 'Ligação familiar',
      horario: '18:00',
      concluido: false
    }];
    constructor(elderlyService) {
      this.elderlyService = elderlyService;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
        'medicine-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.medkitOutline,
        'calendar-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.calendarOutline,
        'alert-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.alertOutline,
        'pulse-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.pulseOutline,
        'notifications-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.notificationsOutline,
        'time-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.timeOutline,
        'exit-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.exitOutline,
        'checkmark-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.checkmarkCircleOutline
      });
    }
    ngOnInit() {
      this.loadElderlyData();
    }
    loadElderlyData() {
      // Obter dados do usuário idoso do localStorage ou do token
      const elderlyToken = this.elderlyService.getElderlyToken();
      if (elderlyToken) {
        // Decodificar o token para obter os dados do usuário
        try {
          const tokenPayload = JSON.parse(atob(elderlyToken.split('.')[1]));
          console.log('Token payload:', tokenPayload);
          this.nome = tokenPayload.username || 'Idoso';
          this.userData = {
            id: tokenPayload.sub,
            name: tokenPayload.username,
            role: tokenPayload.role
          };
        } catch (error) {
          console.error('Erro ao decodificar token:', error);
          this.nome = 'Idoso';
        }
      } else {
        console.log('Token não encontrado');
        this.nome = 'Idoso';
      }
    }
    sair() {
      console.log('Saindo...');
      this.elderlyService.elderlyLogout();
      // Redirecionar para página de entrada ou login
      window.location.href = '/entrada';
    }
    static ɵfac = function HomeIdosoPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeIdosoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeIdosoPage,
      selectors: [["app-home-idoso"]],
      decls: 42,
      vars: 2,
      consts: [["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "exit-outline"], [1, "ion-padding"], [1, "dashboard"], ["lines", "full", "class", "lembrete-item", 4, "ngFor", "ngForOf"], ["size", "6"], ["routerLink", "/saude", 1, "menu-card"], [1, "ion-text-center"], ["name", "pulse-outline"], [1, "menu-card"], ["name", "calendar-outline"], ["name", "notifications-outline"], ["lines", "full", 1, "lembrete-item"], ["name", "time-outline", "slot", "start", "color", "primary"], ["fill", "clear", "slot", "end"], ["name", "checkmark-circle-outline", "slot", "icon-only"]],
      template: function HomeIdosoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeIdosoPage_Template_ion_button_click_5_listener() {
            return ctx.sair();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 3)(8, "div", 4)(9, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Seus lembretes de hoje");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HomeIdosoPage_ion_item_12_Template, 9, 2, "ion-item", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Acesso r\u00E1pido");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-grid")(16, "ion-row")(17, "ion-col", 6)(18, "ion-card", 7)(19, "ion-card-content", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sa\u00FAde");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col", 6)(24, "ion-card", 10)(25, "ion-card-content", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Consultas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-row")(30, "ion-col", 6)(31, "ion-card", 10)(32, "ion-card-content", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Consultas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-col", 6)(37, "ion-card", 10)(38, "ion-card-content", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "ion-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Notifica\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ol\u00E1, ", ctx.nome, "!");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.lembretes);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.D, _angular_common__WEBPACK_IMPORTED_MODULE_4__.G, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _angular_router__WEBPACK_IMPORTED_MODULE_7__.R],
      styles: ["@charset \"UTF-8\";\nion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #000000, #121212);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 5%, transparent 15%), radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.08) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  position: relative;\n  z-index: 1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 24px 0 18px;\n  color: var(--ion-color-primary);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.welcome-message[_ngcontent-%COMP%] {\n  background-color: rgba(30, 30, 30, 0.7);\n  padding: 20px;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  border-left: 4px solid var(--ion-color-primary);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.welcome-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 12px;\n}\n.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  opacity: 0.9;\n  font-size: 1.1rem;\n  margin-bottom: 0;\n}\n\n.lembrete-item[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin-bottom: 12px;\n  --background: rgba(30, 30, 30, 0.7);\n  border-left: 3px solid var(--ion-color-primary);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.lembrete-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.3rem;\n  color: var(--ion-color-primary);\n}\n.lembrete-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.1rem;\n  margin-bottom: 4px;\n  opacity: 0.9;\n}\n.lembrete-item[_ngcontent-%COMP%]   .lembrete-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.lembrete-item[_ngcontent-%COMP%]   .lembrete-time[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  margin-right: 6px;\n}\n.lembrete-item[_ngcontent-%COMP%]   .lembrete-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  border-radius: 16px;\n  background: rgba(30, 30, 30, 0.7);\n  border: 1px solid rgba(255, 215, 0, 0.1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  overflow: hidden;\n  position: relative;\n}\n.menu-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1), transparent);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.menu-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n.menu-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--ion-color-primary);\n  margin-bottom: 14px;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #ffffff;\n  text-align: center;\n}\n\n\n\n.health-module[_ngcontent-%COMP%] {\n  border-top: 4px solid var(--ion-color-primary);\n}\n.health-module.reminders[_ngcontent-%COMP%]   .module-icon[_ngcontent-%COMP%] {\n  color: #FFD700; \n\n}\n.health-module.medications[_ngcontent-%COMP%]   .module-icon[_ngcontent-%COMP%] {\n  color: #FF9500; \n\n}\n.health-module.appointments[_ngcontent-%COMP%]   .module-icon[_ngcontent-%COMP%] {\n  color: #64D2FF; \n\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dashboard[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out forwards;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out forwards;\n}\n.menu-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.menu-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.menu-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.3s;\n}\n\n\n\n@media (max-width: 576px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS1pZG9zby9ob21lLWlkb3NvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSx1REFBQTtBQUVGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0xBQ0U7RUFFRixVQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSx5Q0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFERjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0NBQUE7RUFDQSx5Q0FBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQVFJO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVdBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJGO0FBVUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0ZBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFSSjtBQVdFO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQVRKO0FBWUU7RUFDRSxVQUFBO0FBVko7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVhKO0FBYUk7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQVhOO0FBY0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVpOOztBQWlCQSxpREFBQTtBQUNBO0VBQ0UsOENBQUE7QUFkRjtBQWlCSTtFQUNFLGNBQUEsRUFBQSxZQUFBO0FBZk47QUFvQkk7RUFDRSxjQUFBLEVBQUEsWUFBQTtBQWxCTjtBQXVCSTtFQUNFLGNBQUEsRUFBQSxlQUFBO0FBckJOOztBQTBCQSxzREFBQTtBQUNBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFyQm5CO0VBc0JBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBbEJqQjtBQUNGO0FBb0JBO0VBQ0Usd0NBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usd0NBQUE7QUFsQkY7QUFvQkU7RUFDRSxxQkFBQTtBQWxCSjtBQXFCRTtFQUNFLHFCQUFBO0FBbkJKO0FBc0JFO0VBQ0UscUJBQUE7QUFwQko7O0FBd0JBLHNDQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VBckJGO0VBd0JBO0lBQ0Usa0JBQUE7RUF0QkY7RUF3QkU7SUFDRSxlQUFBO0VBdEJKO0VBeUJFO0lBQ0UsaUJBQUE7RUF2Qko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDAwMDAsICMxMjEyMTIpO1xyXG4gIFxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjUlIDI1JSwgcmdiYSgyNTUsIDIxNSwgMCwgMC4wOCkgNSUsIHRyYW5zcGFyZW50IDE1JSksXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzUlIDc1JSwgcmdiYSgyNTUsIDIxNSwgMCwgMC4wOCkgNSUsIHRyYW5zcGFyZW50IDE1JSk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMjRweCAwIDE4cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLndlbGNvbWUtbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBcclxuICBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVtYnJldGUtaXRlbSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICBcclxuICAubGVtYnJldGUtdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjE1LCAwLCAwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFc3RpbG9zIGVzcGVjw4PCrWZpY29zIHBhcmEgb3MgbcODwrNkdWxvcyBkZSBzYcODwrpkZSAqL1xyXG4uaGVhbHRoLW1vZHVsZSB7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBcclxuICAmLnJlbWluZGVycyB7XHJcbiAgICAubW9kdWxlLWljb24ge1xyXG4gICAgICBjb2xvcjogI0ZGRDcwMDsgLyogQW1hcmVsbyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLm1lZGljYXRpb25zIHtcclxuICAgIC5tb2R1bGUtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjRkY5NTAwOyAvKiBMYXJhbmphICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYXBwb2ludG1lbnRzIHtcclxuICAgIC5tb2R1bGUtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjNjREMkZGOyAvKiBBenVsIGNsYXJvICovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYcODwqfDg8K1ZXMgcGFyYSB0b3JuYXIgYSBpbnRlcmZhY2UgbWFpcyByZXNwb25zaXZhICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLmRhc2hib2FyZCA+ICoge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgXHJcbiAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICBcclxuICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gICY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmlkYWRlIHBhcmEgdGVsYXMgbWVub3JlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTJweDtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return HomeIdosoPage;
})();

/***/ })

}]);
//# sourceMappingURL=5158.js.map