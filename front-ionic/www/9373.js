"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[9373],{

/***/ 9373:
/*!*******************************************************************!*\
  !*** ./src/app/pages/meus-medicamentos/meus-medicamentos.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeusMedicamentosPage: () => (/* binding */ MeusMedicamentosPage)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/elderly-medication.service */ 3751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 8665);










function MeusMedicamentosPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Carregando medicamentos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MeusMedicamentosPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nenhum medicamento encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Seu cuidador ainda n\u00E3o cadastrou medicamentos para voc\u00EA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MeusMedicamentosPage_ion_list_12_ion_card_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fim:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const medication_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatDate(medication_r1.endDate));
  }
}
function MeusMedicamentosPage_ion_list_12_ion_card_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Instru\u00E7\u00F5es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const medication_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](medication_r1.instructions);
  }
}
function MeusMedicamentosPage_ion_list_12_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 13)(1, "ion-card-header")(2, "div", 14)(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-chip", 15)(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-card-content")(11, "div", 16)(12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Frequ\u00EAncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Hor\u00E1rios:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "In\u00EDcio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, MeusMedicamentosPage_ion_list_12_ion_card_1_div_33_Template, 7, 1, "div", 21)(34, MeusMedicamentosPage_ion_list_12_ion_card_1_div_34_Template, 7, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const medication_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](medication_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.getStatusColor(medication_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getStatusText(medication_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](medication_r1.dosage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](medication_r1.frequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatSchedules(medication_r1.schedules));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatDate(medication_r1.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", medication_r1.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", medication_r1.instructions);
  }
}
function MeusMedicamentosPage_ion_list_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MeusMedicamentosPage_ion_list_12_ion_card_1_Template, 35, 9, "ion-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.medications);
  }
}
let MeusMedicamentosPage = /*#__PURE__*/(() => {
  class MeusMedicamentosPage {
    elderlyMedicationService;
    toastController;
    router;
    medications = [];
    loading = false;
    constructor(elderlyMedicationService, toastController, router) {
      this.elderlyMedicationService = elderlyMedicationService;
      this.toastController = toastController;
      this.router = router;
    }
    ngOnInit() {
      this.debugAuth();
      this.loadMyMedications();
    }
    debugAuth() {
      console.log('=== DEBUG AUTENTICAÇÃO IDOSO ===');
      const elderlyToken = localStorage.getItem('elderly_token');
      const authToken = localStorage.getItem('auth_token');
      const user = localStorage.getItem('auth_user');
      console.log('Elderly Token existe:', !!elderlyToken);
      console.log('Elderly Token:', elderlyToken ? elderlyToken.substring(0, 50) + '...' : 'null');
      console.log('Auth Token existe:', !!authToken);
      console.log('User existe:', !!user);
      console.log('User:', user ? JSON.parse(user) : 'null');
    }
    loadMyMedications() {
      var _this = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        try {
          console.log('=== PÁGINA: CARREGANDO MEDICAMENTOS DO IDOSO ===');
          console.log('Token do idoso no localStorage:', localStorage.getItem('elderly_token') ? 'Existe' : 'Não existe');
          _this.medications = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.elderlyMedicationService.getMyMedications());
          console.log('Medicamentos carregados com sucesso:', _this.medications.length);
          if (_this.medications.length === 0) {
            console.log('Nenhum medicamento encontrado para este idoso');
          } else {
            console.log('Lista de medicamentos:', _this.medications);
          }
        } catch (error) {
          console.error('=== ERRO DETALHADO ===');
          console.error('Erro completo:', error);
          console.error('Status:', error.status);
          console.error('URL:', error.url);
          console.error('Mensagem:', error.message);
          console.error('Response body:', error.error);
          console.error('Response text:', error.error?.text || 'Não disponível');
          let errorMessage = 'Erro ao carregar medicamentos';
          if (error.status === 401) {
            errorMessage = 'Sessão expirada. Faça login novamente.';
            console.log('Redirecionando para login devido a erro 401');
            _this.router.navigate(['/acesso-idoso']);
          } else if (error.status === 404) {
            errorMessage = 'Endpoint não encontrado. Verifique a configuração da API.';
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          _this.showToast(errorMessage, 'danger');
        } finally {
          _this.loading = false;
        }
      })();
    }
    doRefresh(event) {
      var _this2 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.loadMyMedications();
        event.target.complete();
      })();
    }
    formatSchedules(schedules) {
      if (!schedules || schedules.length === 0) {
        return 'Nenhum horário definido';
      }
      return schedules.join(', ');
    }
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR');
    }
    getStatusColor(isActive) {
      return isActive === true ? 'success' : 'medium';
    }
    getStatusText(isActive) {
      return isActive === true ? 'Ativo' : 'Inativo';
    }
    showToast(message, color) {
      var _this3 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const toast = yield _this3.toastController.create({
          message,
          duration: 3000,
          color,
          position: 'top'
        });
        toast.present();
      })();
    }
    static ɵfac = function MeusMedicamentosPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MeusMedicamentosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyMedicationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.t));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MeusMedicamentosPage,
      selectors: [["app-meus-medicamentos"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyMedicationService])],
      decls: 13,
      vars: 5,
      consts: [[3, "translucent"], ["slot", "end"], [3, "click"], ["name", "refresh"], [3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], [1, "empty-state"], ["name", "medical", "size", "large"], ["class", "medication-card", 4, "ngFor", "ngForOf"], [1, "medication-card"], [1, "medication-header"], [3, "color"], [1, "medication-info"], [1, "info-item"], ["name", "time", "color", "primary"], ["name", "alarm", "color", "primary"], ["name", "calendar", "color", "primary"], ["class", "info-item", 4, "ngIf"], ["name", "calendar-outline", "color", "primary"], ["name", "document-text", "color", "primary"]],
      template: function MeusMedicamentosPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Meus Medicamentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 1)(5, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MeusMedicamentosPage_Template_ion_button_click_5_listener($event) {
            return ctx.doRefresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 4)(8, "ion-refresher", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function MeusMedicamentosPage_Template_ion_refresher_ionRefresh_8_listener($event) {
            return ctx.doRefresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MeusMedicamentosPage_div_10_Template, 4, 0, "div", 6)(11, MeusMedicamentosPage_div_11_Template, 6, 0, "div", 7)(12, MeusMedicamentosPage_ion_list_12_Template, 2, 1, "ion-list", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.medications.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.medications.length > 0);
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.D, _angular_common__WEBPACK_IMPORTED_MODULE_6__.G, _angular_common__WEBPACK_IMPORTED_MODULE_6__.I],
      styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: var(--ion-color-medium);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  max-width: 300px;\n}\n\n.medication-card[_ngcontent-%COMP%] {\n  margin: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.medication-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.medication-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 12px;\n}\n\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  margin-top: 2px;\n  min-width: 20px;\n}\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--ion-color-dark);\n}\n.medication-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ion-color-medium);\n  line-height: 1.4;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWV1cy1tZWRpY2FtZW50b3MvbWV1cy1tZWRpY2FtZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUhGO0FBS0U7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNFLGdCQUFBO0FBTE47QUFRSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFOTjtBQVNJO0VBQ0UsT0FBQTtBQVBOO0FBU007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQVBSO0FBVU07RUFDRSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVJSIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIFxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuLm1lZGljYXRpb24tY2FyZCB7XG4gIG1hcmdpbjogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1lZGljYXRpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxufVxuXG4ubWVkaWNhdGlvbi1pbmZvIHtcbiAgLmluZm8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIGRpdiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgXG4gICAgICBzdHJvbmcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return MeusMedicamentosPage;
})();

/***/ })

}]);
//# sourceMappingURL=9373.js.map