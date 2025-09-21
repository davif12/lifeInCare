"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[5793],{

/***/ 4084:
/*!**********************************************************!*\
  !*** ./src/app/services/caregiver-medication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaregiverMedicationService: () => (/* binding */ CaregiverMedicationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);





let CaregiverMedicationService = /*#__PURE__*/(() => {
  class CaregiverMedicationService {
    http;
    authService;
    apiUrl = 'http://localhost:3000';
    constructor(http, authService) {
      this.http = http;
      this.authService = authService;
    }
    getHeaders() {
      const token = this.authService.getToken();
      if (!token) {
        throw new Error('Token de cuidador não encontrado. Faça login novamente.');
      }
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.b({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    }
    /**
     * Cadastrar novo medicamento para um idoso
     */
    createMedication(medicationData) {
      console.log('=== FRONTEND: Cadastrando medicamento para idoso ===');
      console.log('Dados do medicamento:', medicationData);
      return this.http.post(`${this.apiUrl}/caregiver/medications`, medicationData, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamento cadastrado com sucesso:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao cadastrar medicamento:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Buscar todos os medicamentos cadastrados pelo cuidador
     */
    getAllMedications() {
      console.log('=== FRONTEND: Buscando medicamentos do cuidador ===');
      return this.http.get(`${this.apiUrl}/caregiver/medications`, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamentos do cuidador recebidos:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao buscar medicamentos do cuidador:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Buscar medicamentos de um idoso específico (pelo cuidador)
     */
    getMedicationsByElderly(elderlyUserId) {
      console.log('=== FRONTEND: Buscando medicamentos de idoso específico ===');
      console.log('Idoso UserId:', elderlyUserId);
      return this.http.get(`${this.apiUrl}/caregiver/medications/elderly/${elderlyUserId}`, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamentos do idoso específico recebidos:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao buscar medicamentos do idoso específico:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Buscar um medicamento específico
     */
    getMedication(id) {
      console.log('=== FRONTEND: Buscando medicamento específico ===');
      console.log('Medicamento ID:', id);
      return this.http.get(`${this.apiUrl}/caregiver/medications/${id}`, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamento específico recebido:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao buscar medicamento específico:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Atualizar medicamento
     */
    updateMedication(id, medicationData) {
      console.log('=== FRONTEND: Atualizando medicamento ===');
      console.log('Medicamento ID:', id);
      console.log('Dados de atualização:', medicationData);
      return this.http.patch(`${this.apiUrl}/caregiver/medications/${id}`, medicationData, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamento atualizado com sucesso:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao atualizar medicamento:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Desativar medicamento (soft delete)
     */
    deactivateMedication(id) {
      console.log('=== FRONTEND: Desativando medicamento ===');
      console.log('Medicamento ID:', id);
      return this.http.patch(`${this.apiUrl}/caregiver/medications/${id}/deactivate`, {}, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Medicamento desativado com sucesso:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao desativar medicamento:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Remover medicamento permanentemente
     */
    deleteMedication(id) {
      console.log('=== FRONTEND: Removendo medicamento ===');
      console.log('Medicamento ID:', id);
      return this.http.delete(`${this.apiUrl}/caregiver/medications/${id}`, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
        console.log('Medicamento removido com sucesso');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao remover medicamento:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    /**
     * Buscar estatísticas de medicamentos do cuidador
     */
    getStats() {
      console.log('=== FRONTEND: Buscando estatísticas do cuidador ===');
      return this.http.get(`${this.apiUrl}/caregiver/medications/stats`, {
        headers: this.getHeaders()
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
        console.log('Estatísticas do cuidador recebidas:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Erro ao buscar estatísticas do cuidador:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }));
    }
    static ɵfac = function CaregiverMedicationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaregiverMedicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.a), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: CaregiverMedicationService,
      factory: CaregiverMedicationService.ɵfac,
      providedIn: 'root'
    });
  }
  return CaregiverMedicationService;
})();

/***/ }),

/***/ 5793:
/*!*********************************************************!*\
  !*** ./src/app/pages/medicamentos/medicamentos.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MedicamentosPage: () => (/* binding */ MedicamentosPage)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _services_caregiver_medication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/caregiver-medication.service */ 4084);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/elderly.service */ 149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 8665);













function MedicamentosPage_ion_card_11_ion_note_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-note", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Clique em \"Adicionar\" para incluir este hor\u00E1rio na lista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MedicamentosPage_ion_card_11_div_36_ion_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 38)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_11_div_36_ion_chip_1_Template_ion_icon_click_3_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.removeSchedule(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const schedule_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](schedule_r5);
  }
}
function MedicamentosPage_ion_card_11_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MedicamentosPage_ion_card_11_div_36_ion_chip_1_Template, 4, 1, "ion-chip", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.newMedication.schedules);
  }
}
function MedicamentosPage_ion_card_11_ion_select_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const elderly_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", elderly_r6.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (elderly_r6.user == null ? null : elderly_r6.user.name) || elderly_r6.name, " ");
  }
}
function MedicamentosPage_ion_card_11_ion_spinner_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-spinner", 41);
  }
}
function MedicamentosPage_ion_card_11_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Adicionar Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MedicamentosPage_ion_card_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Novo Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-card-content")(5, "ion-item")(6, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Nome do Medicamento *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.name, $event) || (ctx_r1.newMedication.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-item")(10, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Dosagem *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.dosage, $event) || (ctx_r1.newMedication.dosage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-item")(14, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Frequ\u00EAncia *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_select_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.frequency, $event) || (ctx_r1.newMedication.frequency = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "8 em 8 horas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "12 em 12 horas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "1 vez ao dia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "A cada 2 dias");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Semanal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-item")(28, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Hor\u00E1rios *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.scheduleTime, $event) || (ctx_r1.scheduleTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_11_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.addSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Adicionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MedicamentosPage_ion_card_11_ion_note_35_Template, 2, 0, "ion-note", 25)(36, MedicamentosPage_ion_card_11_div_36_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-item")(38, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Data de In\u00EDcio *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.startDate, $event) || (ctx_r1.newMedication.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-item")(42, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Data de Fim");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.endDate, $event) || (ctx_r1.newMedication.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-item")(46, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Idoso *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ion-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_select_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.elderlyUserId, $event) || (ctx_r1.newMedication.elderlyUserId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, MedicamentosPage_ion_card_11_ion_select_option_49_Template, 2, 2, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ion-item")(51, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Instru\u00E7\u00F5es Especiais");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "ion-textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_textarea_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.instructions, $event) || (ctx_r1.newMedication.instructions = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ion-item")(55, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Observa\u00E7\u00F5es do Cuidador");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function MedicamentosPage_ion_card_11_Template_ion_textarea_ngModelChange_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.newMedication.notes, $event) || (ctx_r1.newMedication.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_11_Template_ion_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.addMedication());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, MedicamentosPage_ion_card_11_ion_spinner_59_Template, 1, 0, "ion-spinner", 33)(60, MedicamentosPage_ion_card_11_span_60_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ion-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_11_Template_ion_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.dosage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.frequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.scheduleTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.scheduleTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.scheduleTime && ctx_r1.newMedication.schedules.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.newMedication.schedules.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.elderlyUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.elderlies);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMedication.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function MedicamentosPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Carregando medicamentos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MedicamentosPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nenhum medicamento cadastrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Adicione o primeiro medicamento clicando no bot\u00E3o flutuante");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_div_13_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Cadastrar Primeiro Medicamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MedicamentosPage_ion_card_14_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Hor\u00E1rios:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medication_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.schedules.join(", "), "");
  }
}
function MedicamentosPage_ion_card_14_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Fim:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medication_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 1, medication_r9.endDate, "dd/MM/yyyy"), "");
  }
}
function MedicamentosPage_ion_card_14_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Instru\u00E7\u00F5es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medication_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.instructions, "");
  }
}
function MedicamentosPage_ion_card_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 47)(1, "ion-card-header")(2, "div", 48)(3, "div")(4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-chip", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-card-content")(11, "div", 50)(12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Dosagem:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Frequ\u00EAncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MedicamentosPage_ion_card_14_div_24_Template, 6, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span")(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "In\u00EDcio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, MedicamentosPage_ion_card_14_div_32_Template, 7, 4, "div", 54)(33, MedicamentosPage_ion_card_14_div_33_Template, 6, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 56)(35, "ion-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_14_Template_ion_button_click_35_listener() {
      const medication_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleMedicationStatus(medication_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_card_14_Template_ion_button_click_38_listener() {
      const medication_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.deleteMedication(medication_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Excluir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const medication_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](medication_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getElderlyName(medication_r9.elderlyUserId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", medication_r9.isActive ? "success" : "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.isActive ? "Ativo" : "Inativo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.dosage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.frequency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medication_r9.schedules && medication_r9.schedules.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 12, medication_r9.startDate, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medication_r9.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medication_r9.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", medication_r9.isActive ? "pause" : "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medication_r9.isActive ? "Desativar" : "Ativar", " ");
  }
}
function MedicamentosPage_ion_fab_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-fab", 64)(1, "ion-fab-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_ion_fab_15_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleAddForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
let MedicamentosPage = /*#__PURE__*/(() => {
  class MedicamentosPage {
    caregiverMedicationService;
    elderlyService;
    alertController;
    toastController;
    router;
    medications = [];
    elderlies = [];
    loading = false;
    showAddForm = false;
    scheduleTime = '';
    newMedication = {
      elderlyUserId: '',
      name: '',
      dosage: '',
      frequency: '',
      schedules: [],
      startDate: '',
      endDate: '',
      instructions: '',
      notes: ''
    };
    constructor(caregiverMedicationService, elderlyService, alertController, toastController, router) {
      this.caregiverMedicationService = caregiverMedicationService;
      this.elderlyService = elderlyService;
      this.alertController = alertController;
      this.toastController = toastController;
      this.router = router;
    }
    ngOnInit() {
      this.debugAuth();
      this.loadData();
    }
    debugAuth() {
      console.log('=== DEBUG AUTENTICAÇÃO ===');
      const token = localStorage.getItem('auth_token');
      const user = localStorage.getItem('auth_user');
      console.log('Token existe:', !!token);
      console.log('Token:', token ? token.substring(0, 50) + '...' : 'null');
      console.log('User existe:', !!user);
      console.log('User:', user ? JSON.parse(user) : 'null');
      console.log('AuthService.isLoggedIn():', this.caregiverMedicationService['authService']?.isLoggedIn?.() || 'N/A');
    }
    loadData() {
      var _this = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        try {
          console.log('=== CARREGANDO DADOS ===');
          // Carregar idosos primeiro
          console.log('Carregando idosos...');
          _this.elderlies = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.elderlyService.getElderlies());
          console.log('Idosos carregados:', _this.elderlies.length);
          console.log('Lista de idosos:', _this.elderlies);
          // Carregar medicamentos
          console.log('Carregando medicamentos...');
          _this.medications = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.caregiverMedicationService.getAllMedications());
          console.log('Medicamentos carregados:', _this.medications.length);
          console.log('Dados carregados:', {
            medications: _this.medications.length,
            elderlies: _this.elderlies.length
          });
        } catch (error) {
          console.error('Erro detalhado ao carregar dados:', error);
          // Tentar carregar pelo menos os idosos se medicamentos falharem
          try {
            console.log('Tentando carregar apenas idosos...');
            _this.elderlies = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.elderlyService.getElderlies());
            console.log('Idosos carregados no fallback:', _this.elderlies.length);
            _this.showToast('Medicamentos não puderam ser carregados, mas você pode cadastrar novos', 'warning');
          } catch (elderlyError) {
            console.error('Erro ao carregar idosos:', elderlyError);
            _this.showToast('Erro ao conectar com o servidor. Verifique sua conexão.', 'danger');
          }
        } finally {
          _this.loading = false;
        }
      })();
    }
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
      if (!this.showAddForm) {
        this.resetForm();
      }
    }
    resetForm() {
      this.newMedication = {
        elderlyUserId: '',
        name: '',
        dosage: '',
        frequency: '',
        schedules: [],
        startDate: '',
        endDate: '',
        instructions: '',
        notes: ''
      };
      this.scheduleTime = '';
    }
    addMedication() {
      var _this2 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('=== INICIANDO ADIÇÃO DE MEDICAMENTO ===');
        console.log('Dados atuais do formulário:', {
          name: _this2.newMedication.name,
          dosage: _this2.newMedication.dosage,
          frequency: _this2.newMedication.frequency,
          schedules: _this2.newMedication.schedules,
          startDate: _this2.newMedication.startDate,
          endDate: _this2.newMedication.endDate,
          elderlyUserId: _this2.newMedication.elderlyUserId,
          instructions: _this2.newMedication.instructions,
          notes: _this2.newMedication.notes
        });
        if (!_this2.validateForm()) {
          console.log('Validação do formulário falhou');
          return;
        }
        console.log('Validação passou, enviando para API...');
        _this2.loading = true;
        try {
          console.log('Chamando caregiverMedicationService.createMedication...');
          const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.caregiverMedicationService.createMedication(_this2.newMedication));
          console.log('Resultado da criação:', result);
          _this2.showToast('Medicamento adicionado com sucesso!', 'success');
          _this2.resetForm();
          _this2.showAddForm = false;
          yield _this2.loadData();
        } catch (error) {
          console.error('=== ERRO DETALHADO ===');
          console.error('Error object:', error);
          console.error('Error status:', error.status);
          console.error('Error statusText:', error.statusText);
          console.error('Error error:', error.error);
          console.error('Error message:', error.message);
          let errorMessage = 'Erro ao adicionar medicamento';
          if (error.status === 401) {
            errorMessage = 'Sessão expirada. Faça login novamente.';
          } else if (error.status === 403) {
            errorMessage = 'Você não tem permissão para esta ação.';
          } else if (error.status === 400) {
            errorMessage = error.error?.message || 'Dados inválidos.';
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          console.log('Mensagem de erro final:', errorMessage);
          _this2.showToast(errorMessage, 'danger');
        } finally {
          _this2.loading = false;
          console.log('=== FIM DA TENTATIVA DE ADIÇÃO ===');
        }
      })();
    }
    validateForm() {
      console.log('Validando formulário:', this.newMedication);
      if (!this.newMedication.name?.trim()) {
        this.showToast('Nome do medicamento é obrigatório', 'warning');
        return false;
      }
      if (!this.newMedication.dosage?.trim()) {
        this.showToast('Dosagem é obrigatória', 'warning');
        return false;
      }
      if (!this.newMedication.frequency?.trim()) {
        this.showToast('Frequência é obrigatória', 'warning');
        return false;
      }
      if (!this.newMedication.startDate?.trim()) {
        this.showToast('Data de início é obrigatória', 'warning');
        return false;
      }
      if (!this.newMedication.elderlyUserId?.trim()) {
        this.showToast('Selecione um idoso', 'warning');
        return false;
      }
      if (!this.newMedication.schedules || this.newMedication.schedules.length === 0) {
        this.showToast('Adicione pelo menos um horário', 'warning');
        return false;
      }
      return true;
    }
    deleteMedication(medication) {
      var _this3 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const alert = yield _this3.alertController.create({
          header: 'Confirmar exclusão',
          message: `Deseja realmente excluir o medicamento "${medication.name}"?`,
          buttons: [{
            text: 'Cancelar',
            role: 'cancel'
          }, {
            text: 'Excluir',
            handler: function () {
              var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                try {
                  yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.caregiverMedicationService.deleteMedication(medication.id));
                  _this3.showToast('Medicamento excluído com sucesso!', 'success');
                  _this3.loadData();
                } catch (error) {
                  console.error('Erro ao excluir medicamento:', error);
                  _this3.showToast('Erro ao excluir medicamento', 'danger');
                }
              });
              return function handler() {
                return _ref.apply(this, arguments);
              };
            }()
          }]
        });
        yield alert.present();
      })();
    }
    toggleMedicationStatus(medication) {
      var _this4 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (medication.isActive) {
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.caregiverMedicationService.deactivateMedication(medication.id));
            _this4.showToast('Medicamento desativado com sucesso!', 'success');
          } else {
            // Para reativar, precisamos atualizar o medicamento
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.caregiverMedicationService.updateMedication(medication.id, {
              isActive: true
            }));
            _this4.showToast('Medicamento ativado com sucesso!', 'success');
          }
          _this4.loadData();
        } catch (error) {
          console.error('Erro ao alterar status:', error);
          _this4.showToast('Erro ao alterar status', 'danger');
        }
      })();
    }
    getElderlyName(elderlyUserId) {
      const elderly = this.elderlies.find(e => e.userId === elderlyUserId);
      return elderly ? elderly.user?.name || elderly.name : 'Idoso não encontrado';
    }
    addSchedule() {
      if (this.scheduleTime && this.scheduleTime.trim()) {
        const timeValue = this.scheduleTime.trim();
        // Verificar se o horário já foi adicionado
        if (!this.newMedication.schedules.includes(timeValue)) {
          this.newMedication.schedules.push(timeValue);
          this.scheduleTime = '';
          console.log('Horário adicionado:', timeValue, 'Lista atual:', this.newMedication.schedules);
          this.showToast('Horário adicionado com sucesso!', 'success');
        } else {
          this.showToast('Este horário já foi adicionado', 'warning');
        }
      } else {
        this.showToast('Selecione um horário válido', 'warning');
      }
    }
    removeSchedule(index) {
      this.newMedication.schedules.splice(index, 1);
    }
    showToast(message, color) {
      var _this5 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const toast = yield _this5.toastController.create({
          message,
          duration: 3000,
          color,
          position: 'top'
        });
        toast.present();
      })();
    }
    goBack() {
      this.router.navigate(['/home-cuidador']);
    }
    static ɵfac = function MedicamentosPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MedicamentosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_caregiver_medication_service__WEBPACK_IMPORTED_MODULE_1__.CaregiverMedicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_2__.ElderlyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.t));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MedicamentosPage,
      selectors: [["app-medicamentos"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_caregiver_medication_service__WEBPACK_IMPORTED_MODULE_1__.CaregiverMedicationService])],
      decls: 16,
      vars: 7,
      consts: [[3, "translucent"], ["slot", "start"], [3, "click"], ["name", "arrow-back"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "refresh"], [3, "fullscreen"], [4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "medication-card", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["position", "stacked"], ["placeholder", "Ex: Paracetamol", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: 500mg", 3, "ngModelChange", "ngModel"], ["placeholder", "Selecione", 3, "ngModelChange", "ngModel"], ["value", "8/8h"], ["value", "12/12h"], ["value", "24h"], ["value", "48h"], ["value", "semanal"], ["type", "time", "placeholder", "Selecione um hor\u00E1rio", 3, "ngModelChange", "ngModel"], ["slot", "end", "fill", "solid", "color", "primary", 3, "click", "disabled"], ["name", "add"], ["color", "medium", 4, "ngIf"], ["class", "schedules-list", 4, "ngIf"], ["type", "date", 3, "ngModelChange", "ngModel"], ["placeholder", "Selecione o idoso", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Ex: Tomar com alimentos", 3, "ngModelChange", "ngModel"], ["placeholder", "Observa\u00E7\u00F5es adicionais", 3, "ngModelChange", "ngModel"], ["expand", "block", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf"], ["expand", "block", "fill", "outline", 3, "click"], ["color", "medium"], [1, "schedules-list"], ["color", "primary", 4, "ngFor", "ngForOf"], ["color", "primary"], ["name", "close-circle", 3, "click"], [3, "value"], ["name", "crescent"], [1, "loading-container"], [1, "empty-state"], ["name", "medical", "size", "large"], ["expand", "block", 1, "empty-state-button", 3, "click"], ["name", "add", "slot", "start"], [1, "medication-card"], [1, "card-header-content"], [3, "color"], [1, "medication-info"], [1, "info-row"], ["name", "medical"], ["name", "time"], ["class", "info-row", 4, "ngIf"], ["name", "calendar"], [1, "action-buttons"], ["fill", "outline", "size", "small", 3, "click"], ["slot", "start", 3, "name"], ["fill", "outline", "size", "small", "color", "danger", 3, "click"], ["name", "trash", "slot", "start"], ["name", "alarm"], ["name", "calendar-outline"], ["name", "information-circle"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", 3, "click"]],
      template: function MedicamentosPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_Template_ion_button_click_3_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Medicamentos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 4)(8, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicamentosPage_Template_ion_button_click_8_listener() {
            return ctx.loadData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MedicamentosPage_ion_card_11_Template, 63, 16, "ion-card", 8)(12, MedicamentosPage_div_12_Template, 4, 0, "div", 9)(13, MedicamentosPage_div_13_Template, 9, 0, "div", 10)(14, MedicamentosPage_ion_card_14_Template, 41, 15, "ion-card", 11)(15, MedicamentosPage_ion_fab_15_Template, 3, 0, "ion-fab", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.medications.length === 0 && !ctx.showAddForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.medications);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showAddForm);
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.D, _angular_common__WEBPACK_IMPORTED_MODULE_7__.G, _angular_common__WEBPACK_IMPORTED_MODULE_7__.I, _angular_common__WEBPACK_IMPORTED_MODULE_7__.X, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
      styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem 0;\n  color: var(--ion-color-medium);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin: 0 0 2rem 0;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  max-width: 300px;\n}\n\n.medication-card[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin-top: 0.25rem;\n}\n\n.medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  color: var(--ion-color-primary);\n  min-width: 20px;\n}\n.medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.schedules-list[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.schedules-list[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.schedules-list[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 0.25rem;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n@media (max-width: 768px) {\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card-header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVkaWNhbWVudG9zL21lZGljYW1lbnRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUlFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBSko7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQU9JO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUxOOztBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFSSjtBQVVJO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFSTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQVROOztBQWNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVhGO0FBYUU7RUFDRSxPQUFBO0FBWEo7O0FBZUE7RUFDRSxpQkFBQTtBQVpGO0FBY0U7RUFDRSxlQUFBO0FBWko7QUFjSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQVpOOztBQWlCQTtFQUNFLG1CQUFBO0FBZEY7O0FBaUJBO0VBQ0UsYUFBQTtBQWRGOztBQWlCQTtFQUNFO0lBQ0Usc0JBQUE7RUFkRjtFQWdCRTtJQUNFLFdBQUE7RUFkSjtFQWtCQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VBaEJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgXG4gIGlvbi1zcGlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgaDIge1xuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcbiAgfVxuICBcbiAgLmVtcHR5LXN0YXRlLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5tZWRpY2F0aW9uLWNhcmQge1xuICBtYXJnaW46IDFyZW07XG4gIFxuICAuY2FyZC1oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4ubWVkaWNhdGlvbi1pbmZvIHtcbiAgLmluZm8tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5cbi5zY2hlZHVsZXMtbGlzdCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBcbiAgaW9uLWNoaXAge1xuICAgIG1hcmdpbjogMC4yNXJlbTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLmNhcmQtaGVhZGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return MedicamentosPage;
})();

/***/ })

}]);
//# sourceMappingURL=5793.js.map