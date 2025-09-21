"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[6300],{

/***/ 3653:
/*!*******************************************!*\
  !*** ./src/app/pages/saude/saude.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaudePage: () => (/* binding */ SaudePage)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/elderly-medication.service */ 3751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);













function SaudePage_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Carregando medicamentos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SaudePage_div_21_div_4_ion_card_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Hor\u00E1rios:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medicamento_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatSchedules(medicamento_r1.schedules), "");
  }
}
function SaudePage_div_21_div_4_ion_card_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Instru\u00E7\u00F5es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medicamento_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medicamento_r1.instructions, "");
  }
}
function SaudePage_div_21_div_4_ion_card_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Observa\u00E7\u00F5es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const medicamento_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medicamento_r1.notes, "");
  }
}
function SaudePage_div_21_div_4_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 15)(1, "ion-card-header")(2, "div", 16)(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-card-content")(8, "div", 18)(9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Dosagem:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Frequ\u00EAncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SaudePage_div_21_div_4_ion_card_1_div_21_Template, 6, 1, "div", 22)(22, SaudePage_div_21_div_4_ion_card_1_div_22_Template, 6, 1, "div", 22)(23, SaudePage_div_21_div_4_ion_card_1_div_23_Template, 6, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const medicamento_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](medicamento_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r1.getStatusColor(medicamento_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusText(medicamento_r1.isActive), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medicamento_r1.dosage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", medicamento_r1.frequency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medicamento_r1.schedules && medicamento_r1.schedules.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medicamento_r1.instructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", medicamento_r1.notes);
  }
}
function SaudePage_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SaudePage_div_21_div_4_ion_card_1_Template, 24, 8, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.medicamentos);
  }
}
function SaudePage_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nenhum medicamento encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Pe\u00E7a ao seu cuidador para cadastrar seus medicamentos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SaudePage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Seus Medicamentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SaudePage_div_21_div_3_Template, 4, 0, "div", 11)(4, SaudePage_div_21_div_4_Template, 2, 1, "div", 10)(5, SaudePage_div_21_div_5_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.medicamentos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.medicamentos.length === 0);
  }
}
function SaudePage_div_22_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const consulta_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](consulta_r3.especialidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Data: ", consulta_r3.data, " \u00E0s ", consulta_r3.horario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Local: ", consulta_r3.local, "");
  }
}
function SaudePage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Suas Consultas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SaudePage_div_22_ion_item_4_Template, 9, 4, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.consultas);
  }
}
function SaudePage_div_23_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lembrete_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lembrete_r4.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Hor\u00E1rio: ", lembrete_r4.horario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Recorr\u00EAncia: ", lembrete_r4.recorrencia, "");
  }
}
function SaudePage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Seus Lembretes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SaudePage_div_23_ion_item_4_Template, 9, 3, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.lembretes);
  }
}
let SaudePage = /*#__PURE__*/(() => {
  class SaudePage {
    elderlyMedicationService;
    toastController;
    segmento = 'remedios';
    loading = false;
    // Dados reais do backend
    medicamentos = [];
    // Dados mock para consultas e lembretes (podem ser implementados depois)
    remedios = [{
      nome: 'Losartana',
      horario: '08:00',
      dosagem: '50mg',
      observacao: 'Tomar com água'
    }, {
      nome: 'AAS',
      horario: '12:00',
      dosagem: '100mg',
      observacao: 'Tomar após o almoço'
    }, {
      nome: 'Metformina',
      horario: '20:00',
      dosagem: '850mg',
      observacao: 'Tomar após o jantar'
    }];
    consultas = [{
      especialidade: 'Cardiologia',
      data: '15/05/2025',
      horario: '09:30',
      local: 'Hospital Central'
    }, {
      especialidade: 'Endocrinologia',
      data: '22/05/2025',
      horario: '14:00',
      local: 'Clínica São Lucas'
    }];
    lembretes = [{
      titulo: 'Medir pressão',
      horario: '10:00',
      recorrencia: 'Diário'
    }, {
      titulo: 'Fazer exercícios leves',
      horario: '16:00',
      recorrencia: 'Segunda, Quarta e Sexta'
    }, {
      titulo: 'Beber água',
      horario: 'A cada 2h',
      recorrencia: 'Diário'
    }];
    constructor(elderlyMedicationService, toastController) {
      this.elderlyMedicationService = elderlyMedicationService;
      this.toastController = toastController;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_4__.a)({
        'medicine-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.medkitOutline,
        'calendar-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.calendarOutline,
        'notifications-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.notificationsOutline,
        'time-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.timeOutline,
        'arrow-back-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.arrowBackOutline,
        'pill-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.medicalOutline,
        'heart-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.heartOutline,
        'checkmark-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.checkmarkCircleOutline,
        'medical-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.medicalOutline,
        'alarm-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.alarmOutline,
        'information-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.informationCircleOutline,
        'document-text-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.documentTextOutline
      });
    }
    ngOnInit() {
      this.loadHealthData();
    }
    loadHealthData() {
      var _this = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        try {
          console.log('=== CARREGANDO DADOS DE SAÚDE DO IDOSO ===');
          // Carregar medicamentos reais do backend
          _this.medicamentos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.elderlyMedicationService.getMyMedications());
          console.log('Medicamentos carregados:', _this.medicamentos.length);
          if (_this.medicamentos.length === 0) {
            _this.showToast('Nenhum medicamento encontrado. Peça ao seu cuidador para cadastrar seus medicamentos.', 'warning');
          }
        } catch (error) {
          console.error('Erro ao carregar dados de saúde:', error);
          _this.showToast('Erro ao carregar dados de saúde', 'danger');
        } finally {
          _this.loading = false;
        }
      })();
    }
    mudarSegmento(event) {
      this.segmento = event.detail.value;
    }
    showToast(message, color) {
      var _this2 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const toast = yield _this2.toastController.create({
          message,
          duration: 3000,
          color,
          position: 'top'
        });
        toast.present();
      })();
    }
    formatSchedules(schedules) {
      return schedules ? schedules.join(', ') : 'Não definido';
    }
    getStatusColor(isActive) {
      return isActive === true ? 'success' : 'medium';
    }
    getStatusText(isActive) {
      return isActive === true ? 'Ativo' : 'Inativo';
    }
    static ɵfac = function SaudePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SaudePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_2__.ElderlyMedicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SaudePage,
      selectors: [["app-saude"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_services_elderly_medication_service__WEBPACK_IMPORTED_MODULE_2__.ElderlyMedicationService])],
      decls: 24,
      vars: 4,
      consts: [["slot", "start"], ["defaultHref", "/home-idoso", "icon", "arrow-back-outline"], ["value", "remedios", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "remedios"], ["name", "pill-outline"], ["value", "consultas"], ["name", "calendar-outline"], ["value", "lembretes"], ["name", "notifications-outline"], [1, "ion-padding"], [4, "ngIf"], ["class", "ion-text-center ion-padding", 4, "ngIf"], [1, "ion-text-center", "ion-padding"], ["name", "crescent"], ["class", "medication-card", 4, "ngFor", "ngForOf"], [1, "medication-card"], [1, "card-header-content"], [3, "color"], [1, "medication-info"], [1, "info-row"], ["name", "medical-outline"], ["name", "time-outline"], ["class", "info-row", 4, "ngIf"], ["name", "alarm-outline"], ["name", "information-circle-outline"], ["name", "document-text-outline"], ["name", "medical-outline", "size", "large", "color", "medium"], ["class", "item-card", 4, "ngFor", "ngForOf"], [1, "item-card"], ["name", "heart-outline", "slot", "start", "color", "primary"], ["name", "time-outline", "slot", "start", "color", "primary"]],
      template: function SaudePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sa\u00FAde");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "ion-segment", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SaudePage_Template_ion_segment_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.segmento, $event) || (ctx.segmento = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function SaudePage_Template_ion_segment_ionChange_7_listener($event) {
            return ctx.mudarSegmento($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-segment-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Rem\u00E9dios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-segment-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Consultas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-segment-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Lembretes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SaudePage_div_21_Template, 6, 3, "div", 10)(22, SaudePage_div_22_Template, 5, 1, "div", 10)(23, SaudePage_div_23_Template, 5, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.segmento);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.segmento === "remedios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.segmento === "consultas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.segmento === "lembretes");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.D, _angular_common__WEBPACK_IMPORTED_MODULE_7__.G, _angular_common__WEBPACK_IMPORTED_MODULE_7__.I, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonSegment, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonSegmentButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonCardHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonCardTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonChip, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_9__.IonSpinner],
      styles: ["@charset \"UTF-8\";\nion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #000000, #121212);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.05) 5%, transparent 15%), radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.05) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.saude-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  z-index: 1;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  --background: rgba(30, 30, 30, 0.7);\n  padding: 8px;\n  border-radius: 16px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: rgba(255, 255, 255, 0.7);\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --indicator-height: 4px;\n  --border-radius: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  --background-checked: rgba(255, 215, 0, 0.1);\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button.reminders-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #FFD700; \n\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button.medications-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #FF9500; \n\n}\nion-segment[_ngcontent-%COMP%]   ion-segment-button.appointments-tab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #64D2FF; \n\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 24px 0 16px;\n  color: var(--ion-color-primary);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.module-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-right: 12px;\n}\n.module-header[_ngcontent-%COMP%]   ion-icon.reminder-icon[_ngcontent-%COMP%] {\n  color: #FFD700;\n}\n.module-header[_ngcontent-%COMP%]   ion-icon.medication-icon[_ngcontent-%COMP%] {\n  color: #FF9500;\n}\n.module-header[_ngcontent-%COMP%]   ion-icon.appointment-icon[_ngcontent-%COMP%] {\n  color: #64D2FF;\n}\n\n.item-card[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n  margin-bottom: 16px;\n  --background: rgba(30, 30, 30, 0.7);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  border-left: 3px solid var(--ion-color-primary);\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out forwards;\n}\n.item-card[_ngcontent-%COMP%]:nth-child(even) {\n  animation-delay: 0.1s;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n}\n.item-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.95rem;\n  margin: 4px 0;\n  opacity: 0.9;\n}\n.item-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.item-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.item-card[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 12px;\n}\n.item-card[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 0.8rem;\n}\n.item-card[_ngcontent-%COMP%]   .action-button.primary[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n.item-card[_ngcontent-%COMP%]   .action-button.danger[_ngcontent-%COMP%] {\n  --color: #ff6b6b;\n}\n\n\n\n.reminder-item[_ngcontent-%COMP%] {\n  border-left-color: #FFD700;\n}\n.reminder-item[_ngcontent-%COMP%]   .time-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background-color: rgba(255, 215, 0, 0.15);\n  border-radius: 12px;\n  color: #FFD700;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n.reminder-item[_ngcontent-%COMP%]   .recurrence[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-style: italic;\n}\n\n.medication-item[_ngcontent-%COMP%] {\n  border-left-color: #FF9500;\n}\n.medication-item[_ngcontent-%COMP%]   .dosage-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background-color: rgba(255, 149, 0, 0.15);\n  border-radius: 12px;\n  color: #FF9500;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n.medication-item[_ngcontent-%COMP%]   .schedule-list[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.medication-item[_ngcontent-%COMP%]   .schedule-list[_ngcontent-%COMP%]   .schedule-time[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background-color: rgba(255, 149, 0, 0.1);\n  border-radius: 8px;\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.medication-item[_ngcontent-%COMP%]   .schedule-list[_ngcontent-%COMP%]   .schedule-time[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.appointment-item[_ngcontent-%COMP%] {\n  border-left-color: #64D2FF;\n}\n.appointment-item[_ngcontent-%COMP%]   .specialty-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  background-color: rgba(100, 210, 255, 0.15);\n  border-radius: 12px;\n  color: #64D2FF;\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n.appointment-item[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n}\n.appointment-item[_ngcontent-%COMP%]   .datetime[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: #64D2FF;\n  font-size: 1.1rem;\n}\n.appointment-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n}\n.appointment-item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: #64D2FF;\n  font-size: 1.1rem;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n  text-align: center;\n  background-color: rgba(30, 30, 30, 0.7);\n  border-radius: 16px;\n  margin: 20px 0;\n}\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: rgba(255, 215, 0, 0.5);\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  opacity: 0.8;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --color: black;\n  font-weight: 600;\n}\n\n.fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --color: black;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n\n\n\n.medication-card[_ngcontent-%COMP%] {\n  --background: rgba(30, 30, 30, 0.8);\n  margin-bottom: 16px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  border-left: 4px solid #FF9500;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out forwards;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n.medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.medication-card[_ngcontent-%COMP%]   .medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.medication-card[_ngcontent-%COMP%]   .medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-right: 8px;\n  color: #FF9500;\n  min-width: 20px;\n}\n.medication-card[_ngcontent-%COMP%]   .medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.95rem;\n}\n.medication-card[_ngcontent-%COMP%]   .medication-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n@media (max-width: 576px) {\n  ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .medication-card[_ngcontent-%COMP%]   .card-header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2F1ZGUvc2F1ZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHVEQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrTEFDRTtFQUVGLFVBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQURGO0FBR0U7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBREo7QUFHSTtFQUNFLDRDQUFBO0FBRE47QUFJSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtJO0VBQ0UsY0FBQSxFQUFBLDJCQUFBO0FBSE47QUFNSTtFQUNFLGNBQUEsRUFBQSw4QkFBQTtBQUpOO0FBT0k7RUFDRSxjQUFBLEVBQUEsOEJBQUE7QUFMTjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVBKO0FBU0k7RUFDRSxjQUFBO0FBUE47QUFVSTtFQUNFLGNBQUE7QUFSTjtBQVdJO0VBQ0UsY0FBQTtBQVROOztBQWNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFYRjtBQWFFO0VBQ0UscUJBQUE7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O0FBQ0Y7QUEwQ0EsbUJBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7RUF4Q0Y7RUEwQ0U7SUFDRSxpQkFBQTtFQXhDSjtFQTRDQTtJQUNFLGlCQUFBO0VBMUNGO0VBNkNBO0lBQ0UsaUJBQUE7RUEzQ0Y7RUErQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtFQTdDSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwMDAwMCwgIzEyMTIxMik7XHJcbiAgXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMjAlLCByZ2JhKDI1NSwgMjE1LCAwLCAwLjA1KSA1JSwgdHJhbnNwYXJlbnQgMTUlKSxcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgODAlLCByZ2JhKDI1NSwgMjE1LCAwLCAwLjA1KSA1JSwgdHJhbnNwYXJlbnQgMTUlKTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2F1ZGUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBcclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiA0cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgXHJcbiAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgyNTUsIDIxNSwgMCwgMC4xKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnJlbWluZGVycy10YWIgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogI0ZGRDcwMDsgLyogQW1hcmVsbyBwYXJhIGxlbWJyZXRlcyAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLm1lZGljYXRpb25zLXRhYiBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjRkY5NTAwOyAvKiBMYXJhbmphIHBhcmEgbWVkaWNhbWVudG9zICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuYXBwb2ludG1lbnRzLXRhYiBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjNjREMkZGOyAvKiBBenVsIGNsYXJvIHBhcmEgY29uc3VsdGFzICovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDI0cHggMCAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5tb2R1bGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBcclxuICAgICYucmVtaW5kZXItaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjRkZENzAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLm1lZGljYXRpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjRkY5NTAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmFwcG9pbnRtZW50LWljb24ge1xyXG4gICAgICBjb2xvcjogIzY0RDJGRjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWNhcmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIFxuICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAuaXRlbS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgXG4gICAgJi5wcmltYXJ5IHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgXG4gICAgJi5kYW5nZXIge1xuICAgICAgLS1jb2xvcjogI2ZmNmI2YjtcbiAgICB9XG4gIH1cbn1cblxuLyogRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIGNhZGEgdGlwbyBkZSBtw4PCs2R1bG8gKi9cbi5yZW1pbmRlci1pdGVtIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRkQ3MDA7XG4gIFxuICAudGltZS1iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTUsIDAsIDAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5yZWN1cnJlbmNlIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG59XG5cbi5tZWRpY2F0aW9uLWl0ZW0ge1xuICBib3JkZXItbGVmdC1jb2xvcjogI0ZGOTUwMDtcbiAgXG4gIC5kb3NhZ2UtYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ5LCAwLCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiAjRkY5NTAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAuc2NoZWR1bGUtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIFxuICAgIC5zY2hlZHVsZS10aW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTQ5LCAwLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hcHBvaW50bWVudC1pdGVtIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM2NEQyRkY7XG4gIFxuICAuc3BlY2lhbHR5LWJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDIxMCwgMjU1LCAwLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiAjNjREMkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAuZGF0ZXRpbWUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICBjb2xvcjogIzY0RDJGRjtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmxvY2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgY29sb3I6ICM2NEQyRkY7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIFxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjE1LCAwLCAwLjUpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGNhcmRzIGRlIG1lZGljYW1lbnRvcyAqL1xuLm1lZGljYXRpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjgpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjRkY5NTAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xuICBcbiAgLmNhcmQtaGVhZGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWNoaXAge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLm1lZGljYXRpb24taW5mbyB7XG4gICAgLmluZm8tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgY29sb3I6ICNGRjk1MDA7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgIFxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogQW5pbWHDg8Knw4PCtWVzICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLyogUmVzcG9uc2l2aWRhZGUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIFxuICAuaXRlbS1jYXJkIGgzIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLm1lZGljYXRpb24tY2FyZCB7XG4gICAgLmNhcmQtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SaudePage;
})();

/***/ }),

/***/ 6300:
/*!*********************************************!*\
  !*** ./src/app/pages/saude/saude.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _saude_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saude.page */ 3653);

const routes = [{
  path: '',
  component: _saude_page__WEBPACK_IMPORTED_MODULE_0__.SaudePage
}];

/***/ })

}]);
//# sourceMappingURL=6300.js.map