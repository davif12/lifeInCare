"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[6600],{

/***/ 5553:
/*!***************************************************!*\
  !*** ./src/app/pages/ver-idoso/ver-idoso.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerIdosoPage: () => (/* binding */ VerIdosoPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8665);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/elderly.service */ 149);







function VerIdosoPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-loading", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VerIdosoPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 10)(5, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerIdosoPage_div_8_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.obterDadosIdoso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Tentar novamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerIdosoPage_div_8_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.voltar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Voltar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.mensagemErro);
  }
}
function VerIdosoPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Voc\u00EA est\u00E1 visualizando a interface do idoso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function VerIdosoPage_div_10_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lembrete_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lembrete_r4.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](lembrete_r4.horario);
  }
}
function VerIdosoPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons")(5, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerIdosoPage_div_10_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sair());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Seus lembretes de hoje");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VerIdosoPage_div_10_ion_item_11_Template, 9, 2, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Acesso r\u00E1pido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-grid")(15, "ion-row")(16, "ion-col", 21)(17, "ion-card", 22)(18, "ion-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Sa\u00FAde");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col", 21)(23, "ion-card", 22)(24, "ion-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Medicamentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-row")(29, "ion-col", 21)(30, "ion-card", 22)(31, "ion-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Consultas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-col", 21)(36, "ion-card", 22)(37, "ion-card-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Notifica\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ol\u00E1, ", ctx_r1.idoso.name, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.lembretes);
  }
}
let VerIdosoPage = /*#__PURE__*/(() => {
  class VerIdosoPage {
    route;
    router;
    elderlyService;
    idosoId = '';
    idoso = null;
    carregando = false;
    erro = false;
    mensagemErro = '';
    // Dados simulados para a visualização
    lembretes = [{
      titulo: 'Tomar medicação',
      horario: '08:00'
    }, {
      titulo: 'Consulta com Dr. Silva',
      horario: '14:30'
    }];
    constructor(route, router, elderlyService) {
      this.route = route;
      this.router = router;
      this.elderlyService = elderlyService;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
        'pulse-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.pulseOutline,
        'medicine-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.medkitOutline,
        'calendar-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.calendarOutline,
        'notifications-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.notificationsOutline,
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.personOutline,
        'exit-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.exitOutline,
        'time-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.timeOutline,
        'checkmark-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.checkmarkCircleOutline,
        'alert-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.alertCircleOutline,
        'eye-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.eyeOutline
      });
    }
    ngOnInit() {
      this.idosoId = this.route.snapshot.paramMap.get('id') || '';
      if (this.idosoId) {
        this.obterDadosIdoso();
      } else {
        this.erro = true;
        this.mensagemErro = 'ID do idoso não fornecido';
      }
    }
    obterDadosIdoso() {
      this.carregando = true;
      console.log('Iniciando carregamento'); // 👈
      this.elderlyService.getElderly(this.idosoId).subscribe({
        next: response => {
          console.log('Dados recebidos:', response); // 👈
          this.idoso = response;
          this.carregando = false;
        },
        error: error => {
          console.error('Erro ao obter dados do idoso:', error); // 👈
          this.erro = true;
          this.mensagemErro = error.error?.message || error.message || 'Erro desconhecido';
          this.carregando = false;
        }
      });
    }
    voltar() {
      this.router.navigate(['/cuidador/lista-idosos']);
    }
    sair() {
      // Apenas para simulação - não faz logout de verdade
      this.voltar();
    }
    static ɵfac = function VerIdosoPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VerIdosoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.x), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.t), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VerIdosoPage,
      selectors: [["app-ver-idoso"]],
      decls: 11,
      vars: 5,
      consts: [["slot", "start"], ["defaultHref", "/cuidador/lista-idosos"], ["class", "ion-text-center ion-padding", 4, "ngIf"], ["class", "erro-container ion-padding", 4, "ngIf"], ["class", "preview-banner", 4, "ngIf"], ["class", "idoso-interface", 4, "ngIf"], [1, "ion-text-center", "ion-padding"], ["isOpen", "true", "message", "Carregando..."], [1, "erro-container", "ion-padding"], ["name", "alert-circle-outline", "color", "danger"], [1, "ion-justify-content-center"], ["color", "primary", "size", "small", 3, "click"], ["color", "medium", "size", "small", 3, "click"], [1, "preview-banner"], ["name", "eye-outline"], [1, "idoso-interface"], [1, "idoso-header"], [3, "click"], ["slot", "icon-only", "name", "exit-outline"], [1, "dashboard"], ["lines", "full", "class", "lembrete-item", 4, "ngFor", "ngForOf"], ["size", "6"], [1, "menu-card"], [1, "ion-text-center"], ["name", "pulse-outline"], ["name", "medicine-outline"], ["name", "calendar-outline"], ["name", "notifications-outline"], ["lines", "full", 1, "lembrete-item"], ["name", "time-outline", "slot", "start"], ["fill", "clear", "slot", "end"], ["name", "checkmark-circle-outline", "slot", "icon-only"]],
      template: function VerIdosoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VerIdosoPage_div_7_Template, 2, 0, "div", 2)(8, VerIdosoPage_div_8_Template, 9, 1, "div", 3)(9, VerIdosoPage_div_9_Template, 4, 0, "div", 4)(10, VerIdosoPage_div_10_Template, 41, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Visualiza\u00E7\u00E3o do Idoso", ctx.idoso ? ": " + ctx.idoso.name : "", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.erro);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.idoso);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.idoso && !ctx.carregando && !ctx.erro);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonLoading, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.I, _angular_common__WEBPACK_IMPORTED_MODULE_6__.G],
      styles: [".preview-banner[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.preview-banner[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.idoso-interface[_ngcontent-%COMP%] {\n  --background: #ffe74d;\n  background-color: #ffe74d;\n  min-height: 100%;\n  padding: 16px;\n}\n\n.idoso-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.idoso-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: #333;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px 0 15px;\n  color: #333;\n}\n\n.lembrete-item[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n.lembrete-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  color: #333;\n}\n.lembrete-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.lembrete-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  border-radius: 12px;\n  background-color: #333;\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s ease;\n}\n.menu-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n  margin-bottom: 10px;\n}\n.menu-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n}\n\n.erro-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 32px 16px;\n}\n.erro-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.erro-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdmVyLWlkb3NvL3Zlci1pZG9zby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtBQUhKOztBQU9BO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7QUFKRjtBQU1FO0VBQ0Usc0JBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7QUFMSjtBQU9JO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU5OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBUko7QUFXRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWJhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5pZG9zby1pbnRlcmZhY2Uge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZTc0ZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNzRkO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmlkb3NvLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMTVweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmxlbWJyZXRlLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XHJcbiAgXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return VerIdosoPage;
})();

/***/ }),

/***/ 6600:
/*!*****************************************************!*\
  !*** ./src/app/pages/ver-idoso/ver-idoso.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _ver_idoso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-idoso.page */ 5553);

const routes = [{
  path: '',
  component: _ver_idoso_page__WEBPACK_IMPORTED_MODULE_0__.VerIdosoPage
}];

/***/ })

}]);
//# sourceMappingURL=6600.js.map