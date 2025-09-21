"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[2560],{

/***/ 2560:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cadastro-cuidador/cadastro-cuidador.routes.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _cadastro_cuidador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-cuidador.page */ 7529);

const routes = [{
  path: '',
  component: _cadastro_cuidador_page__WEBPACK_IMPORTED_MODULE_0__.CadastroCuidadorPage
}];

/***/ }),

/***/ 7427:
/*!**********************************************!*\
  !*** ./src/app/services/cuidador.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuidadorService: () => (/* binding */ CuidadorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8326);


let CuidadorService = /*#__PURE__*/(() => {
  class CuidadorService {
    http;
    apiUrl = 'http://localhost:3000'; // URL do backend NestJS
    constructor(http) {
      this.http = http;
    }
    // Cadastrar um novo cuidador
    registrar(cuidador) {
      return this.http.post(`${this.apiUrl}/auth/register`, cuidador);
    }
    // Obter perfil do cuidador (para uso futuro)
    getPerfil(id) {
      return this.http.get(`${this.apiUrl}/caregivers/${id}`);
    }
    static ɵfac = function CuidadorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CuidadorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.a));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CuidadorService,
      factory: CuidadorService.ɵfac,
      providedIn: 'root'
    });
  }
  return CuidadorService;
})();

/***/ }),

/***/ 7529:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cadastro-cuidador/cadastro-cuidador.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroCuidadorPage: () => (/* binding */ CadastroCuidadorPage)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7282);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cuidador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cuidador.service */ 7427);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 8665);














function CadastroCuidadorPage_ion_icon_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 21);
  }
}
let CadastroCuidadorPage = /*#__PURE__*/(() => {
  class CadastroCuidadorPage {
    cuidadorService;
    router;
    toastController;
    loadingController;
    nome = '';
    email = '';
    telefone = '';
    password = '';
    confirmPassword = '';
    isLoading = false;
    constructor(cuidadorService, router, toastController, loadingController) {
      this.cuidadorService = cuidadorService;
      this.router = router;
      this.toastController = toastController;
      this.loadingController = loadingController;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
        'lock-closed-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.lockClosedOutline,
        'mail-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.mailOutline,
        'arrow-back-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.arrowBackOutline,
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.personOutline,
        'call-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.callOutline,
        'person-add-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.personAddOutline
      });
    }
    registrar() {
      var _this = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Validações básicas
        if (!_this.nome || !_this.email || !_this.telefone || !_this.password) {
          yield _this.presentToast('Por favor, preencha todos os campos!', 'danger');
          return;
        }
        if (_this.password !== _this.confirmPassword) {
          yield _this.presentToast('As senhas não coincidem!', 'danger');
          return;
        }
        // Mostrar loading
        _this.isLoading = true;
        const loading = yield _this.loadingController.create({
          message: 'Cadastrando...',
          spinner: 'circles'
        });
        yield loading.present();
        try {
          // Preparar dados para o backend (usando a mesma estrutura do DTO no backend)
          const cuidadorData = {
            name: _this.nome,
            email: _this.email,
            password: _this.password
          };
          console.log('Enviando cadastro cuidador:', cuidadorData);
          // Chamar o serviço de cadastro
          const resp = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.cuidadorService.registrar(cuidadorData));
          console.log('Resposta cadastro cuidador:', resp);
          // Tratar respostas com success=false mesmo com status 200
          if (resp && resp.success === false) {
            const msg = resp.message || 'Erro ao realizar cadastro.';
            yield loading.dismiss();
            _this.isLoading = false;
            yield _this.presentToast(msg, 'danger');
            return;
          }
          // Fechar loading
          yield loading.dismiss();
          _this.isLoading = false;
          // Mostrar mensagem de sucesso
          yield _this.presentToast('Cadastro realizado com sucesso!', 'success');
          // Redirecionar para a página de login
          _this.router.navigate(['/login-cuidador']);
        } catch (error) {
          // Fechar loading
          yield loading.dismiss();
          _this.isLoading = false;
          // Log detalhado no console para diagnóstico
          console.error('Cadastro cuidador erro:', {
            status: error?.status,
            statusText: error?.statusText,
            url: error?.url,
            error: error?.error
          });
          // Mostrar mensagem de erro
          let message = 'Erro ao realizar cadastro.';
          const errMsg = error?.error?.message;
          if (Array.isArray(errMsg)) {
            message = errMsg[0];
          } else if (typeof errMsg === 'string') {
            message = errMsg;
          } else if (typeof error?.message === 'string') {
            message = error.message;
          }
          yield _this.presentToast(message, 'danger');
        }
      })();
    }
    presentToast(message, color = 'danger') {
      var _this2 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const toast = yield _this2.toastController.create({
          message: message,
          duration: 3000,
          position: 'bottom',
          color: color
        });
        yield toast.present();
      })();
    }
    static ɵfac = function CadastroCuidadorPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CadastroCuidadorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cuidador_service__WEBPACK_IMPORTED_MODULE_2__.CuidadorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.t), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.LoadingController));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CadastroCuidadorPage,
      selectors: [["app-cadastro-cuidador"]],
      decls: 45,
      vars: 8,
      consts: [["slot", "start"], ["defaultHref", "/login-cuidador", "icon", "arrow-back-outline"], [1, "ion-padding"], [1, "cadastro-container"], [1, "subtitle"], [1, "cadastro-form", 3, "ngSubmit"], [1, "form-item"], ["name", "person-outline", "slot", "start"], ["position", "floating"], ["name", "nome", "type", "text", "required", "", "autocomplete", "name", 3, "ngModelChange", "ngModel"], ["name", "mail-outline", "slot", "start"], ["name", "email", "type", "email", "required", "", "autocomplete", "email", 3, "ngModelChange", "ngModel"], ["name", "call-outline", "slot", "start"], ["name", "telefone", "type", "tel", "required", "", "autocomplete", "tel", 3, "ngModelChange", "ngModel"], ["name", "lock-closed-outline", "slot", "start"], ["name", "password", "type", "password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["name", "confirmPassword", "type", "password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "ngModel"], ["expand", "block", "type", "submit", 1, "cadastro-button", 3, "disabled"], ["name", "person-add-outline", "slot", "start", 4, "ngIf"], [1, "login-link"], ["routerLink", "/login-cuidador"], ["name", "person-add-outline", "slot", "start"]],
      template: function CadastroCuidadorPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cadastro de Cuidador");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content", 2)(7, "div", 3)(8, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "LifeCare");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Preencha os dados abaixo para se cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CadastroCuidadorPage_Template_form_ngSubmit_12_listener() {
            return ctx.registrar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Nome Completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CadastroCuidadorPage_Template_ion_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.nome, $event) || (ctx.nome = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CadastroCuidadorPage_Template_ion_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ion-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Telefone");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CadastroCuidadorPage_Template_ion_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.telefone, $event) || (ctx.telefone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Senha");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CadastroCuidadorPage_Template_ion_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-item", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Confirmar Senha");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CadastroCuidadorPage_Template_ion_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, CadastroCuidadorPage_ion_icon_39_Template, 1, 0, "ion-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " J\u00E1 tem uma conta? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Fa\u00E7a login");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.nome);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.telefone);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Cadastrando..." : "Cadastrar", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.D, _angular_common__WEBPACK_IMPORTED_MODULE_8__.I, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _angular_router__WEBPACK_IMPORTED_MODULE_10__.R],
      styles: ["@charset \"UTF-8\";\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 10%;\n  --background: linear-gradient(135deg, #000000, #1a1a1a);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 85% 15%, rgba(255, 215, 0, 0.08) 5%, transparent 15%), radial-gradient(circle at 15% 85%, rgba(255, 215, 0, 0.08) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.cadastro-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.cadastro-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: var(--ion-color-primary);\n  text-align: center;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n}\n.cadastro-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n\n.cadastro-form[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.7);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 215, 0, 0.1), 0 0 0 4px rgba(255, 215, 0, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.cadastro-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --border-color: rgba(255, 255, 255, 0.1);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-radius: 8px;\n  margin-bottom: 1rem;\n  padding: 0.25rem 0;\n}\n.cadastro-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  margin-right: 0.5rem;\n}\n.cadastro-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n}\n.cadastro-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  color: white;\n}\n.cadastro-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.cadastro-form[_ngcontent-%COMP%]   .cadastro-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --background: var(--ion-color-primary);\n  --color: black;\n  font-weight: 600;\n  --border-radius: 8px;\n  --box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);\n  height: 48px;\n  font-size: 1.1rem;\n}\n.cadastro-form[_ngcontent-%COMP%]   .cadastro-button[_ngcontent-%COMP%]:hover {\n  --background: #ffd900;\n  --box-shadow: 0 6px 16px rgba(255, 215, 0, 0.4);\n  transform: translateY(-2px);\n  transition: all 0.2s ease;\n}\n.cadastro-form[_ngcontent-%COMP%]   .cadastro-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cadastro-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n}\n\n\n\n@media (max-width: 576px) {\n  ion-content[_ngcontent-%COMP%] {\n    --padding-top: 8%;\n  }\n  .cadastro-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2FkYXN0cm8tY3VpZGFkb3IvY2FkYXN0cm8tY3VpZGFkb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0EsdURBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtMQUNFO0VBRUYsVUFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4R0FBQTtFQUdBLG1DQUFBO1VBQUEsMkJBQUE7QUFMRjtBQU9FO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU9JO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBTE47QUFRSTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVNJO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBUE47QUFTTTtFQUNFLCtCQUFBO0FBUFI7QUFZRTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVko7QUFZSTtFQUNFLHFCQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBVk47QUFhSTtFQUNFLGlCQUFBO0FBWE47O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBYkY7QUFlRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLDBCQUFBO0FBYk47O0FBa0JBLGNBQUE7QUFDQTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBYm5CO0VBY0E7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUFWakI7QUFDRjtBQVlBO0VBQ0Usd0NBQUE7QUFWRjs7QUFhQSxtQkFBQTtBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQVZGO0VBYUE7SUFDRSxlQUFBO0VBWEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAwMDAwLCAjMWExYTFhKTtcclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDg1JSAxNSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpLFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSA4NSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5jYWRhc3Ryby1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbn1cclxuXHJcbi5jYWRhc3Ryby1mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNCksIFxyXG4gICAgICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjEpLFxyXG4gICAgICAgICAgICAgIDAgMCAwIDRweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjA1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgXHJcbiAgLmZvcm0taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhZGFzdHJvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjMpO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmQ5MDA7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBbmltYcODwqfDg8K1ZXMgKi9cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4uY2FkYXN0cm8tY29udGFpbmVyIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZpZGFkZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4JTtcclxuICB9XHJcbiAgXHJcbiAgLmNhZGFzdHJvLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CadastroCuidadorPage;
})();

/***/ })

}]);
//# sourceMappingURL=2560.js.map