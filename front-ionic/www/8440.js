"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[8440],{

/***/ 1962:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 2083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 2354:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isDate */ 5602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/createErrorClass */ 2384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/executeSchedule */ 310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

/***/ }),

/***/ 2400:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 5152:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 5602:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 7793:
/*!*********************************************************!*\
  !*** ./src/app/pages/lista-idosos/lista-idosos.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaIdososPage: () => (/* binding */ ListaIdososPage)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_elderly_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/elderly.service */ 149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 8665);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 4796);












function ListaIdososPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Carregando idosos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ListaIdososPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaIdososPage_div_10_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.obterIdosos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Tentar novamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.mensagemErro);
  }
}
function ListaIdososPage_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nenhum idoso encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Voc\u00EA ainda n\u00E3o tem idosos cadastrados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaIdososPage_div_11_div_1_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cadastrarNovoIdoso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Cadastrar Idoso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ListaIdososPage_div_11_div_2_ion_card_4_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Idade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idoso_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", idoso_r6.age, " anos ");
  }
}
function ListaIdososPage_div_11_div_2_ion_card_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nascimento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idoso_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 1, idoso_r6.birthDate, "dd/MM/yyyy"), " ");
  }
}
function ListaIdososPage_div_11_div_2_ion_card_4_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Informa\u00E7\u00F5es m\u00E9dicas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idoso_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", idoso_r6.medicalInfo, " ");
  }
}
function ListaIdososPage_div_11_div_2_ion_card_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Contato de emerg\u00EAncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idoso_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", idoso_r6.contactInfo, " ");
  }
}
function ListaIdososPage_div_11_div_2_ion_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 22)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ListaIdososPage_div_11_div_2_ion_card_4_p_6_Template, 4, 1, "p", 24)(7, ListaIdososPage_div_11_div_2_ion_card_4_p_7_Template, 5, 4, "p", 24)(8, ListaIdososPage_div_11_div_2_ion_card_4_p_8_Template, 4, 1, "p", 24)(9, ListaIdososPage_div_11_div_2_ion_card_4_p_9_Template, 4, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaIdososPage_div_11_div_2_ion_card_4_Template_ion_button_click_10_listener() {
      const idoso_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.visualizarIdoso(idoso_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Ver como Idoso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const idoso_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", idoso_r6.name || (idoso_r6.user == null ? null : idoso_r6.user.name) || "Nome n\u00E3o informado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idoso_r6.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idoso_r6.birthDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idoso_r6.medicalInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", idoso_r6.contactInfo);
  }
}
function ListaIdososPage_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Lista de idosos sob seus cuidados");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ListaIdososPage_div_11_div_2_ion_card_4_Template, 13, 5, "ion-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 20)(6, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListaIdososPage_div_11_div_2_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cadastrarNovoIdoso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Cadastrar Novo Idoso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.idosos);
  }
}
function ListaIdososPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListaIdososPage_div_11_div_1_Template, 9, 0, "div", 13)(2, ListaIdososPage_div_11_div_2_Template, 9, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.idosos.length === 0 && !ctx_r1.erro);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.idosos.length > 0);
  }
}
let ListaIdososPage = /*#__PURE__*/(() => {
  class ListaIdososPage {
    elderlyService;
    router;
    authService;
    idosos = [];
    carregando = false;
    erro = false;
    mensagemErro = '';
    constructor(elderlyService, router, authService) {
      this.elderlyService = elderlyService;
      this.router = router;
      this.authService = authService;
      (0,ionicons__WEBPACK_IMPORTED_MODULE_5__.a)({
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.personOutline,
        'eye-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.eyeOutline,
        'add-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.addOutline,
        'refresh-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.refreshOutline,
        'alert-circle-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.alertCircleOutline
      });
    }
    ngOnInit() {
      console.log('ListaIdososPage - ngOnInit chamado');
      // Forçar parada do loading após 3 segundos para permitir debug
      setTimeout(() => {
        if (this.carregando) {
          console.log('Forçando parada do loading após timeout');
          this.carregando = false;
          this.erro = true;
          this.mensagemErro = 'Timeout na requisição. Use o botão TESTAR API para diagnosticar.';
        }
      }, 3000);
      this.obterIdosos();
    }
    obterIdosos() {
      this.carregando = true;
      this.erro = false;
      this.idosos = [];
      console.log('Iniciando obtenção de idosos');
      console.log('Token do cuidador:', this.authService.getToken());
      this.elderlyService.getElderlies().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(15000),
      // 15 segundos de timeout
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.error('Erro na requisição de idosos:', error);
        this.carregando = false;
        this.erro = true;
        this.mensagemErro = `Erro: ${error.error?.message || error.message || 'Falha na comunicação com o servidor'}`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      })).subscribe({
        next: response => {
          console.log('Resposta recebida (lista idosos):', response);
          this.carregando = false;
          this.idosos = Array.isArray(response) ? response : [];
          // Debug: verificar estrutura dos dados
          if (this.idosos.length > 0) {
            console.log('Primeiro idoso:', this.idosos[0]);
            console.log('Nome do primeiro idoso:', this.idosos[0].name);
            console.log('Todos os campos do primeiro idoso:', Object.keys(this.idosos[0]));
            console.log('Estrutura completa:', JSON.stringify(this.idosos[0], null, 2));
          }
          if (this.idosos.length === 0) {
            console.log('Nenhum idoso encontrado na resposta');
          } else {
            console.log(`${this.idosos.length} idosos encontrados`);
            this.erro = false;
          }
        },
        error: error => {
          console.error('Erro final ao obter idosos:', error);
          this.carregando = false;
          this.erro = true;
          this.mensagemErro = error.error?.message || 'Não foi possível carregar a lista de idosos';
          this.idosos = [];
        }
      });
    }
    atualizarLista(event) {
      this.obterIdosos();
      setTimeout(() => {
        // Garante que o refresher seja fechado mesmo que ocorra um erro
        event.target.complete();
      }, 2000); // 2 segundos de timeout
    }
    visualizarIdoso(id) {
      var _this = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // Buscar dados do idoso
        const idoso = _this.idosos.find(i => i.id === id);
        if (!idoso) {
          console.error('Idoso não encontrado');
          return;
        }
        // Criar modal para solicitar PIN
        const {
          AlertController
        } = yield __webpack_require__.e(/*! import() */ 1507).then(__webpack_require__.bind(__webpack_require__, /*! @ionic/angular */ 1507));
        const alertController = new AlertController();
        const alert = yield alertController.create({
          header: `Acessar como ${idoso.name}`,
          message: 'Digite o PIN do idoso para visualizar como ele:',
          inputs: [{
            name: 'pin',
            type: 'text',
            placeholder: 'PIN de 6 dígitos',
            attributes: {
              maxlength: 6,
              pattern: '[0-9]*'
            }
          }],
          buttons: [{
            text: 'Cancelar',
            role: 'cancel'
          }, {
            text: 'Acessar',
            handler: data => {
              if (data.pin && data.pin.length === 6) {
                _this.loginAsElderly(data.pin);
                return true;
              } else {
                _this.showPinError();
                return false;
              }
            }
          }]
        });
        yield alert.present();
      })();
    }
    loginAsElderly(pin) {
      var _this2 = this;
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const response = yield _this2.elderlyService.validatePin(pin).toPromise();
          if (response && (response.access_token || response.accessToken)) {
            const token = response.access_token || response.accessToken;
            _this2.elderlyService.saveElderlyToken(token);
            _this2.router.navigate(['/meus-medicamentos']);
          } else {
            _this2.showPinError('Resposta inválida do servidor');
          }
        } catch (error) {
          console.error('Erro ao validar PIN:', error);
          _this2.showPinError(error.error?.message || 'PIN inválido');
        }
      })();
    }
    showPinError(message = 'PIN inválido. Verifique o código e tente novamente.') {
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          ToastController
        } = yield __webpack_require__.e(/*! import() */ 1507).then(__webpack_require__.bind(__webpack_require__, /*! @ionic/angular */ 1507));
        const toastController = new ToastController();
        const toast = yield toastController.create({
          message,
          duration: 3000,
          color: 'danger',
          position: 'top'
        });
        yield toast.present();
      })();
    }
    cadastrarNovoIdoso() {
      this.router.navigate(['/cadastro-idoso']);
    }
    static ɵfac = function ListaIdososPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListaIdososPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_elderly_service__WEBPACK_IMPORTED_MODULE_2__.ElderlyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.t), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ListaIdososPage,
      selectors: [["app-lista-idosos"]],
      decls: 12,
      vars: 3,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/cuidador/home"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "refresh-outline", "refreshingSpinner", "circles"], ["class", "ion-text-center ion-padding", 4, "ngIf"], ["class", "erro-container", 4, "ngIf"], [4, "ngIf"], [1, "ion-text-center", "ion-padding"], ["name", "crescent"], [1, "erro-container"], ["name", "alert-circle-outline", "color", "danger"], ["size", "small", "fill", "clear", 3, "click"], ["class", "vazio-container ion-padding", 4, "ngIf"], [1, "vazio-container", "ion-padding"], ["name", "person-outline", "color", "medium", "size", "large"], ["expand", "block", 3, "click"], ["slot", "start", "name", "add-outline"], [1, "lista-titulo", "ion-padding-horizontal"], ["class", "idoso-card", 4, "ngFor", "ngForOf"], [1, "ion-padding"], ["expand", "block", "fill", "outline", 3, "click"], [1, "idoso-card"], ["name", "person-outline"], ["class", "info-item", 4, "ngIf"], ["expand", "block", 1, "view-button", 3, "click"], ["slot", "start", "name", "eye-outline"], [1, "info-item"]],
      template: function ListaIdososPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Meus Idosos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content")(7, "ion-refresher", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function ListaIdososPage_Template_ion_refresher_ionRefresh_7_listener($event) {
            return ctx.atualizarLista($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-refresher-content", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ListaIdososPage_div_9_Template, 4, 0, "div", 5)(10, ListaIdososPage_div_10_Template, 6, 1, "div", 6)(11, ListaIdososPage_div_11_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.erro && !ctx.carregando);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.carregando);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.D, _angular_common__WEBPACK_IMPORTED_MODULE_10__.G, _angular_common__WEBPACK_IMPORTED_MODULE_10__.I, _angular_common__WEBPACK_IMPORTED_MODULE_10__.X, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCard, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonCardTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonBackButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonSpinner, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonRefresher, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_11__.IonRefresherContent],
      styles: [".lista-titulo[_ngcontent-%COMP%] {\n  margin: 16px 8px;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.idoso-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.idoso-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n.idoso-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n.idoso-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.idoso-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #666;\n}\n.idoso-card[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.idoso-card[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.vazio-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 32px 16px;\n}\n.vazio-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.vazio-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.vazio-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 24px;\n}\n\n.erro-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 32px 16px;\n}\n.erro-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.erro-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbGlzdGEtaWRvc29zL2xpc3RhLWlkb3Nvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUFOO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7QUFGTjtBQU1FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFPRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBVEoiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGEtdGl0dWxvIHtcclxuICBtYXJnaW46IDE2cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5pZG9zby1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIFxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmluZm8taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIFxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC52aWV3LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnZhemlvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5lcnJvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ListaIdososPage;
})();

/***/ }),

/***/ 8113:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 8440:
/*!***********************************************************!*\
  !*** ./src/app/pages/lista-idosos/lista-idosos.routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _lista_idosos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-idosos.page */ 7793);

const routes = [{
  path: '',
  component: _lista_idosos_page__WEBPACK_IMPORTED_MODULE_0__.ListaIdososPage
}];

/***/ }),

/***/ 8473:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 9103:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ })

}]);
//# sourceMappingURL=8440.js.map