"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[2840],{

/***/ 2840:
/*!***********************************************************!*\
  !*** ./src/app/pages/acesso-idoso/acesso-idoso.routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _acesso_idoso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acesso-idoso.page */ 4497);

const routes = [{
  path: '',
  component: _acesso_idoso_page__WEBPACK_IMPORTED_MODULE_0__.AcessoIdosoPage
}];

/***/ }),

/***/ 4497:
/*!*********************************************************!*\
  !*** ./src/app/pages/acesso-idoso/acesso-idoso.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcessoIdosoPage: () => (/* binding */ AcessoIdosoPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/elderly.service */ 149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 8665);









function AcessoIdosoPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function AcessoIdosoPage_ion_spinner_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 16);
  }
}
function AcessoIdosoPage_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Acessar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let AcessoIdosoPage = /*#__PURE__*/(() => {
  class AcessoIdosoPage {
    elderlyService;
    router;
    codigoAcesso = '';
    isLoading = false;
    errorMessage = '';
    showError = false;
    constructor(elderlyService, router) {
      this.elderlyService = elderlyService;
      this.router = router;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_3__.a)({
        'key-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.keyOutline,
        'arrow-back-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.arrowBackOutline,
        'alert-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.alertCircleOutline
      });
      // Limpar qualquer token anterior para forçar novo login
      this.elderlyService.elderlyLogout();
    }
    acessar() {
      if (!this.codigoAcesso || this.codigoAcesso.trim() === '') {
        this.showError = true;
        this.errorMessage = 'Por favor, digite o código de acesso';
        return;
      }
      this.isLoading = true;
      this.showError = false;
      this.elderlyService.validatePin(this.codigoAcesso).subscribe({
        next: response => {
          console.log('Login bem-sucedido:', response);
          this.isLoading = false;
          // Salvar o token do idoso (verificar diferentes formatos de resposta)
          if (response && (response.access_token || response.accessToken)) {
            const token = response.access_token || response.accessToken;
            this.elderlyService.saveElderlyToken(token);
            // Redirecionar para a página inicial do idoso
            this.router.navigate(['/home-idoso']);
          } else {
            console.error('Resposta do servidor:', response);
            this.showError = true;
            this.errorMessage = 'Resposta inválida do servidor';
          }
        },
        error: error => {
          console.error('Erro ao validar PIN:', error);
          this.isLoading = false;
          this.showError = true;
          this.errorMessage = error.error?.message || 'PIN inválido ou erro ao acessar';
        }
      });
    }
    static ɵfac = function AcessoIdosoPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AcessoIdosoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_1__.ElderlyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.t));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AcessoIdosoPage,
      selectors: [["app-acesso-idoso"]],
      decls: 25,
      vars: 5,
      consts: [["slot", "start"], ["defaultHref", "/entrada", "icon", "arrow-back-outline"], [1, "ion-padding"], [1, "acesso-container"], [1, "acesso-form", 3, "ngSubmit"], [1, "codigo-input"], ["name", "key-outline", "slot", "start"], ["position", "floating"], ["type", "text", "name", "codigoAcesso", "required", "", "pattern", "[0-9]*", "maxlength", "6", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "acesso-button", 3, "disabled"], ["name", "crescent", 4, "ngIf"], [4, "ngIf"], [1, "info-text"], [1, "error-message"], ["name", "alert-circle-outline"], ["name", "crescent"]],
      template: function AcessoIdosoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Acesso do Idoso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2)(7, "div", 3)(8, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Acesso Simplificado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Digite o c\u00F3digo de acesso fornecido pelo seu cuidador");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AcessoIdosoPage_Template_form_ngSubmit_12_listener() {
            return ctx.acessar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-item", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "C\u00F3digo de Acesso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AcessoIdosoPage_Template_ion_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.codigoAcesso, $event) || (ctx.codigoAcesso = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AcessoIdosoPage_div_18_Template, 4, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AcessoIdosoPage_ion_spinner_20_Template, 1, 0, "ion-spinner", 11)(21, AcessoIdosoPage_span_21_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "N\u00E3o tem um c\u00F3digo? Fale com seu cuidador para receber um c\u00F3digo de acesso.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.codigoAcesso);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showError);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.I],
      styles: ["@charset \"UTF-8\";\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 5%;\n  --background: linear-gradient(135deg, #000000, #1a1a1a);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 5%, transparent 15%), radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.acesso-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.acesso-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: var(--ion-color-primary);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n}\n.acesso-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  opacity: 0.9;\n}\n\n.acesso-form[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.7);\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 215, 0, 0.1), 0 0 0 4px rgba(255, 215, 0, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.acesso-form[_ngcontent-%COMP%]   .codigo-input[_ngcontent-%COMP%] {\n  --background: transparent;\n  --border-color: rgba(255, 215, 0, 0.2);\n  --border-width: 2px;\n  --border-style: solid;\n  --border-radius: 12px;\n  margin-bottom: 1.5rem;\n  padding: 0.5rem 0;\n}\n.acesso-form[_ngcontent-%COMP%]   .codigo-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.6rem;\n  margin-right: 0.5rem;\n}\n.acesso-form[_ngcontent-%COMP%]   .codigo-input[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n.acesso-form[_ngcontent-%COMP%]   .codigo-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --color: white;\n  font-size: 1.4rem;\n  font-weight: 600;\n  letter-spacing: 6px;\n  text-align: center;\n}\n.acesso-form[_ngcontent-%COMP%]   .codigo-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.acesso-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px 0;\n  color: #ff6b6b;\n  font-weight: 500;\n  background-color: rgba(255, 107, 107, 0.1);\n  border-radius: 8px;\n}\n.acesso-form[_ngcontent-%COMP%]   .acesso-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --background: var(--ion-color-primary);\n  --color: black;\n  font-weight: 600;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);\n  height: 56px;\n  font-size: 1.3rem;\n}\n.acesso-form[_ngcontent-%COMP%]   .acesso-button[_ngcontent-%COMP%]:hover {\n  --background: #ffd900;\n  --box-shadow: 0 6px 16px rgba(255, 215, 0, 0.4);\n  transform: translateY(-2px);\n  transition: all 0.2s ease;\n}\n.acesso-form[_ngcontent-%COMP%]   .acesso-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: #000000;\n  width: 24px;\n  height: 24px;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.2rem;\n  border-radius: 12px;\n  background: rgba(255, 215, 0, 0.1);\n}\n.info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.acesso-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n}\n\n\n\n@media (max-width: 576px) {\n  ion-content[_ngcontent-%COMP%] {\n    --padding-top: 10%;\n  }\n  .acesso-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .acesso-form[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWNlc3NvLWlkb3NvL2FjZXNzby1pZG9zby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsaUJBQUE7RUFDQSx1REFBQTtBQUVGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0xBQ0U7RUFFRixVQUFBO0FBQUo7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhHQUFBO0VBR0EsbUNBQUE7VUFBQSwyQkFBQTtBQUxGO0FBT0U7RUFDRSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBT0k7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFMTjtBQVFJO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTk47QUFTSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUE47QUFTTTtFQUNFLCtCQUFBO0FBUFI7QUFZRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQVZKO0FBYUU7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKO0FBYUk7RUFDRSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQVhOO0FBY0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWk47O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQWRGO0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQWRKOztBQWtCQSxjQUFBO0FBQ0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQWJuQjtFQWNBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBVmpCO0FBQ0Y7QUFZQTtFQUNFLHdDQUFBO0FBVkY7O0FBYUEsbUJBQUE7QUFDQTtFQUNFO0lBQ0Usa0JBQUE7RUFWRjtFQWFBO0lBQ0UsaUJBQUE7RUFYRjtFQWNBO0lBQ0UsZUFBQTtFQVpGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNSU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAwMDAwLCAjMWExYTFhKTtcclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI1JSAyNSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMSkgNSUsIHRyYW5zcGFyZW50IDE1JSksXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzUlIDc1JSwgcmdiYSgyNTUsIDIxNSwgMCwgMC4xKSA1JSwgdHJhbnNwYXJlbnQgMTUlKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYWNlc3NvLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbn1cclxuXHJcbi5hY2Vzc28tZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC40KSwgXHJcbiAgICAgICAgICAgICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuMSksXHJcbiAgICAgICAgICAgICAgMCAwIDAgNHB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuMDUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBcclxuICAuY29kaWdvLWlucHV0IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMC4yKTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgY29sb3I6ICNmZjZiNmI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuYWNlc3NvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNTUsIDIxNSwgMCwgMC4zKTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZkOTAwO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgyNTUsIDIxNSwgMCwgMC40KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mby10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHBhZGRpbmc6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTUsIDAsIDAuMSk7XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogQW5pbWHDg8Knw4PCtWVzICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLmFjZXNzby1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmlkYWRlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLmFjZXNzby1jb250YWluZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2Vzc28tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AcessoIdosoPage;
})();

/***/ })

}]);
//# sourceMappingURL=2840.js.map