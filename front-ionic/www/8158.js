"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[8158],{

/***/ 4607:
/*!*************************************************************!*\
  !*** ./src/app/pages/cadastro-idoso/cadastro-idoso.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroIdosoPage: () => (/* binding */ CadastroIdosoPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/elderly.service */ 149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8665);









function CadastroIdosoPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "ion-note", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function CadastroIdosoPage_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cadastro Realizado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 19)(5, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CadastroIdosoPage_ng_template_34_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.showSuccessToast = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 22)(8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Idoso cadastrado com sucesso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Forne\u00E7a o PIN abaixo para que o idoso possa acessar o aplicativo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 23)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 13)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Importante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Anote esse PIN, pois ele ser\u00E1 necess\u00E1rio para acessar a conta do idoso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CadastroIdosoPage_ng_template_34_Template_ion_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.showSuccessToast = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " OK, Entendi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CadastroIdosoPage_ng_template_34_Template_ion_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.navigateToElderlyList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Ver Lista de Idosos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.registeredPin);
  }
}
let CadastroIdosoPage = /*#__PURE__*/(() => {
  class CadastroIdosoPage {
    elderlyService;
    router;
    elderly = {
      name: '',
      birthDate: '',
      medicalInfo: '',
      contactInfo: ''
    };
    showSuccessToast = false;
    registeredPin = '';
    isSubmitting = false;
    errorMessage = '';
    maxDate = new Date().toISOString();
    constructor(elderlyService, router) {
      this.elderlyService = elderlyService;
      this.router = router;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.personOutline,
        'calendar-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.calendarOutline,
        'arrow-back-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.arrowBackOutline,
        'medical-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.medicalOutline,
        'call-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.callOutline,
        'close-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.closeOutline
      });
    }
    onSubmit() {
      if (!this.validate()) {
        return;
      }
      this.isSubmitting = true;
      this.errorMessage = '';
      // Formatar a data para o formato esperado pelo backend (ISO string)
      const formattedData = {
        ...this.elderly,
        birthDate: new Date(this.elderly.birthDate).toISOString().split('T')[0]
      };
      this.elderlyService.registerElderly(formattedData).subscribe({
        next: response => {
          this.isSubmitting = false;
          this.registeredPin = response.pin;
          this.showSuccessToast = true;
          // Limpar o formulário após o cadastro bem-sucedido
          this.resetForm();
        },
        error: error => {
          this.isSubmitting = false;
          console.error('Erro completo ao cadastrar idoso:', error);
          console.error('Status do erro:', error.status);
          console.error('Mensagem do erro:', error.error);
          this.errorMessage = error.error?.message || `Erro ${error.status}: ${error.message}` || 'Ocorreu um erro ao cadastrar o idoso. Tente novamente.';
        }
      });
    }
    validate() {
      if (!this.elderly.name.trim()) {
        this.errorMessage = 'O nome é obrigatório.';
        return false;
      }
      if (!this.elderly.birthDate) {
        this.errorMessage = 'A data de nascimento é obrigatória.';
        return false;
      }
      return true;
    }
    resetForm() {
      this.elderly = {
        name: '',
        birthDate: '',
        medicalInfo: '',
        contactInfo: ''
      };
    }
    navigateToElderlyList() {
      this.router.navigate(['/lista-idosos']);
    }
    static ɵfac = function CadastroIdosoPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CadastroIdosoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.t));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CadastroIdosoPage,
      selectors: [["app-cadastro-idoso"]],
      decls: 35,
      vars: 8,
      consts: [["slot", "start"], ["defaultHref", "/home-cuidador", "icon", "arrow-back-outline"], [1, "ion-padding"], [3, "ngSubmit"], ["position", "stacked"], ["name", "person-outline"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "calendar-outline"], ["type", "date", "name", "birthDate", "required", "", 3, "ngModelChange", "ngModel", "max"], ["name", "medical-outline"], ["name", "medicalInfo", "placeholder", "Doen\u00E7as, alergias, medica\u00E7\u00F5es, etc.", "rows", "3", 3, "ngModelChange", "ngModel"], ["name", "call-outline"], ["name", "contactInfo", "placeholder", "Telefones para emerg\u00EAncia, endere\u00E7o, etc.", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "ion-padding-top"], ["expand", "block", "type", "submit", 3, "disabled"], ["class", "error-message ion-padding-top", 4, "ngIf"], [3, "isOpen"], [1, "error-message", "ion-padding-top"], ["color", "danger"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "ion-padding", "ion-text-center"], [1, "pin-display"], ["expand", "block", 3, "click"], ["expand", "block", "fill", "outline", 1, "ion-margin-top", 3, "click"]],
      template: function CadastroIdosoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cadastrar Idoso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2)(7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CadastroIdosoPage_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-list")(9, "ion-item")(10, "ion-label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Nome completo * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CadastroIdosoPage_Template_ion_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.elderly.name, $event) || (ctx.elderly.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-item")(15, "ion-label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Data de Nascimento * ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CadastroIdosoPage_Template_ion_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.elderly.birthDate, $event) || (ctx.elderly.birthDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item")(20, "ion-label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Informa\u00E7\u00F5es m\u00E9dicas relevantes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CadastroIdosoPage_Template_ion_textarea_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.elderly.medicalInfo, $event) || (ctx.elderly.medicalInfo = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-item")(25, "ion-label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Informa\u00E7\u00F5es de contato ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-textarea", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CadastroIdosoPage_Template_ion_textarea_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.elderly.contactInfo, $event) || (ctx.elderly.contactInfo = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13)(30, "ion-button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Cadastrar Idoso ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CadastroIdosoPage_div_32_Template, 3, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-modal", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CadastroIdosoPage_ng_template_34_Template, 24, 1, "ng-template");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.elderly.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.elderly.birthDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx.maxDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.elderly.medicalInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.elderly.contactInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isOpen", ctx.showSuccessToast);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonModal, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonNote, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.I],
      styles: ["@charset \"UTF-8\";\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 8px;\n  --padding-bottom: 16px;\n  --background: linear-gradient(135deg, #000000, #1a1a1a);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 5%, transparent 15%), radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.08) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 16px;\n  max-width: 600px;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 1.2rem;\n  color: var(--ion-color-primary);\n  text-align: center;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.7);\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 215, 0, 0.1), 0 0 0 4px rgba(255, 215, 0, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  margin-bottom: 1.5rem;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  --background: rgba(20, 20, 20, 0.6);\n  --border-radius: 10px;\n  --border-color: rgba(255, 215, 0, 0.2);\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --highlight-color-focused: var(--ion-color-primary);\n}\n\nion-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9) !important;\n  font-weight: 500;\n  font-size: 1.1rem;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--ion-color-primary);\n  font-size: 1.4rem;\n}\n\nion-input[_ngcontent-%COMP%], ion-datetime[_ngcontent-%COMP%], ion-select[_ngcontent-%COMP%] {\n  --color: white;\n  font-size: 1.1rem;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ff6b6b;\n  font-weight: 500;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  background-color: rgba(255, 107, 107, 0.1);\n  border-radius: 8px;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  --background: var(--ion-color-primary);\n  --color: black;\n  font-weight: 600;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);\n  height: 52px;\n  font-size: 1.2rem;\n}\n.submit-button[_ngcontent-%COMP%]:hover {\n  --background: #ffd900;\n  --box-shadow: 0 6px 16px rgba(255, 215, 0, 0.4);\n  transform: translateY(-2px);\n  transition: all 0.2s ease;\n}\n\n\n\n.success-modal[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(135deg, #000000, #1a1a1a);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.success-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.success-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  text-align: center;\n  max-width: 80%;\n  line-height: 1.5;\n}\n\n.pin-display[_ngcontent-%COMP%] {\n  margin: 24px auto;\n  padding: 20px;\n  background-color: rgba(30, 30, 30, 0.8);\n  border-radius: 12px;\n  max-width: 220px;\n  border: 2px dashed var(--ion-color-primary);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n.pin-display[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  margin: 0;\n  text-align: center;\n  letter-spacing: 4px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --background: var(--ion-color-primary);\n  --color: black;\n  font-weight: 600;\n  --border-radius: 12px;\n  height: 50px;\n  font-size: 1.1rem;\n}\n\nion-datetime[_ngcontent-%COMP%] {\n  --background: rgba(30, 30, 30, 0.8);\n  --color: #ffffff;\n  border-radius: 12px;\n}\n\n\n\nion-label[_ngcontent-%COMP%]::after {\n  content: \" *\";\n  color: #ff6b6b;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);\n  }\n}\n\n\n@media (max-width: 576px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  ion-label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8taWRvc28vY2FkYXN0cm8taWRvc28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQUVGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0xBQ0U7RUFFRixVQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4R0FBQTtFQUdBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQkFBQTtBQUhGO0FBS0U7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7QUFKRjs7QUFPQTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBUUEsbUNBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBTEY7QUFPRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUEsc0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUEsY0FBQTtBQUNBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFMbkI7RUFNQTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQUZqQjtBQUNGO0FBSUE7RUFDRTtJQUFLLDBDQUFBO0VBREw7RUFFQTtJQUFNLDJDQUFBO0VBQ047RUFBQTtJQUFPLHdDQUFBO0VBR1A7QUFDRjtBQURBLG1CQUFBO0FBQ0E7RUFDRTtJQUNFLGFBQUE7RUFHRjtFQUFBO0lBQ0UsaUJBQUE7RUFFRjtFQUNBO0lBQ0UsZUFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAwMDAwLCAjMWExYTFhKTtcclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI1JSAyNSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpLFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDc1JSA3NSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmZvcm0tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjQpLCBcclxuICAgICAgICAgICAgICAwIDAgMCAxcHggcmdiYSgyNTUsIDIxNSwgMCwgMC4xKSxcclxuICAgICAgICAgICAgICAwIDAgMCA0cHggcmdiYSgyNTUsIDIxNSwgMCwgMC4wNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBcclxuICBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjAsIDIwLCAyMCwgMC42KTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyMTUsIDAsIDAuMik7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDhweDtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tZGF0ZXRpbWUsIGlvbi1zZWxlY3Qge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmY2YjZiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjMpO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZDkwMDtcclxuICAgIC0tYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEVzdGlsbyBwYXJhIG8gbW9kYWwgZGUgc3VjZXNzbyAqL1xyXG4uc3VjY2Vzcy1tb2RhbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDAwMDAsICMxYTFhMWEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4ucGluLWRpc3BsYXkge1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMzAsIDMwLCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWF4LXdpZHRoOiAyMjBweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5waW4tZGlzcGxheSBoMSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC44KTtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi8qIEZvcm1hdGHDg8Knw4PCo28gZGUgY2FtcG9zIG9icmlnYXTDg8KzcmlvcyAqL1xyXG5pb24tbGFiZWw6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiAqXCI7XHJcbiAgY29sb3I6ICNmZjZiNmI7XHJcbn1cclxuXHJcbi8qIEFuaW1hw4PCp8ODwrVlcyAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI1NSwgMjE1LCAwLCAwLjQpOyB9XHJcbiAgNzAlIHsgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDI1NSwgMjE1LCAwLCAwKTsgfVxyXG4gIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjU1LCAyMTUsIDAsIDApOyB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmlkYWRlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5mb3JtLWNhcmQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CadastroIdosoPage;
})();

/***/ }),

/***/ 8158:
/*!***************************************************************!*\
  !*** ./src/app/pages/cadastro-idoso/cadastro-idoso.routes.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _cadastro_idoso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-idoso.page */ 4607);

const routes = [{
  path: '',
  component: _cadastro_idoso_page__WEBPACK_IMPORTED_MODULE_0__.CadastroIdosoPage
}];

/***/ })

}]);
//# sourceMappingURL=8158.js.map