(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[1507],{

/***/ 284:
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-864101a3.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU_BACK_BUTTON_PRIORITY: () => (/* binding */ MENU_BACK_BUTTON_PRIORITY),
/* harmony export */   OVERLAY_BACK_BUTTON_PRIORITY: () => (/* binding */ OVERLAY_BACK_BUTTON_PRIORITY),
/* harmony export */   blockHardwareBackButton: () => (/* binding */ blockHardwareBackButton),
/* harmony export */   shouldUseCloseWatcher: () => (/* binding */ shouldUseCloseWatcher),
/* harmony export */   startHardwareBackButton: () => (/* binding */ startHardwareBackButton)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




/**
 * CloseWatcher is a newer API that lets
 * use detect the hardware back button event
 * in a web browser: https://caniuse.com/?search=closewatcher
 * However, not every browser supports it yet.
 *
 * This needs to be a function so that we can
 * check the config once it has been set.
 * Otherwise, this code would be evaluated the
 * moment this file is evaluated which could be
 * before the config is set.
 */
const shouldUseCloseWatcher = () => _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_2__.c.get('experimentalCloseWatcher', false) && _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w !== undefined && "CloseWatcher" in _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w;
/**
 * When hardwareBackButton: false in config,
 * we need to make sure we also block the default
 * webview behavior. If we don't then it will be
 * possible for users to navigate backward while
 * an overlay is still open. Additionally, it will
 * give the appearance that the hardwareBackButton
 * config is not working as the page transition
 * will still happen.
 */
const blockHardwareBackButton = () => {
  document.addEventListener('backbutton', () => {}); // eslint-disable-line
};
const startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  const backButtonCallback = () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent('ionBackButton', {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({
            priority,
            handler,
            id: index++
          });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = /*#__PURE__*/function () {
      var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handlerRegister) {
        try {
          if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
            const result = handlerRegister.handler(processHandlers);
            if (result != null) {
              yield result;
            }
          }
        } catch (e) {
          console.error(e);
        }
      });
      return function executeAction(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => undefined,
          id: -1
        };
        handlers.forEach(handler => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter(handler => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  };
  /**
   * If the CloseWatcher is defined then
   * we don't want to also listen for the native
   * backbutton event otherwise we may get duplicate
   * events firing.
   */
  if (shouldUseCloseWatcher()) {
    let watcher;
    const configureWatcher = () => {
      watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
      watcher = new _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.w.CloseWatcher();
      /**
       * Once a close request happens
       * the watcher gets destroyed.
       * As a result, we need to re-configure
       * the watcher so we can respond to other
       * close requests.
       */
      watcher.onclose = () => {
        backButtonCallback();
        configureWatcher();
      };
    };
    configureWatcher();
  } else {
    doc.addEventListener('backbutton', backButtonCallback);
  }
};
const OVERLAY_BACK_BUTTON_PRIORITY = 100;
const MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays



/***/ }),

/***/ 1367:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ionic-global-ca86cf32.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ isPlatform),
/* harmony export */   b: () => (/* binding */ getIonMode),
/* harmony export */   c: () => (/* binding */ config),
/* harmony export */   g: () => (/* binding */ getPlatforms),
/* harmony export */   i: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


// TODO(FW-2832): types
class Config {
  constructor() {
    this.m = new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === undefined) {
      return fallback;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== undefined ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
}
const config = /*@__PURE__*/new Config();
const configFromSession = win => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};
const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};
const configFromURL = win => {
  const configObj = {};
  win.location.search.slice(1).split('&').map(entry => entry.split('=')).map(([key, value]) => {
    try {
      return [decodeURIComponent(key), decodeURIComponent(value)];
    } catch (e) {
      return ['', ''];
    }
  }).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
const startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';
const getPlatforms = win => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
const setupPlatforms = (win = window) => {
  if (typeof win === 'undefined') {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
const detectPlatforms = win => {
  const customPlatformMethods = config.get('platform');
  return Object.keys(PLATFORMS_MAP).filter(p => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === 'function' ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
const isMobileWeb = win => isMobile(win) && !isHybrid(win);
const isIpad = win => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  // iOS 13+
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
const isIphone = win => testUserAgent(win, /iPhone/i);
const isIOS = win => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = win => testUserAgent(win, /android|sink/i);
const isAndroidTablet = win => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
const isTablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
const isMobile = win => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = win => !isMobile(win);
const isHybrid = win => isCordova(win) || isCapacitorNative(win);
const isCordova = win => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = win => {
  const capacitor = win['Capacitor'];
  // TODO(ROU-11693): Remove when we no longer support Capacitor 2, which does not have isNativePlatform
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
};
const isElectron = win => testUserAgent(win, /electron/i);
const isPWA = win => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, '(display-mode: standalone)').matches) || win.navigator.standalone);
};
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};
const PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};

// TODO(FW-2832): types
let defaultMode;
const getIonMode = ref => {
  return ref && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.g)(ref) || defaultMode;
};
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  // create the Ionic.config from raw config object (if it exists)
  // and convert Ionic.config into a ConfigApi that has a get() fn
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), {
    persistConfig: false
  }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean('persistConfig')) {
    saveConfig(win, configObj);
  }
  // Setup platforms
  setupPlatforms(win);
  // first see if the mode was set as an attribute on <html>
  // which could have been set by the user, or by pre-rendering
  // otherwise get the mode via config settings, and fallback to md
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get('mode', doc.documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md'));
  config.set('mode', defaultMode);
  doc.documentElement.setAttribute('mode', defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean('_testing')) {
    config.set('animated', false);
  }
  const isIonicElement = elm => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith('ION-');
  };
  const isAllowedIonicModeValue = elmMode => ['ios', 'md'].includes(elmMode);
  (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.a)(elm => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};


/***/ }),

/***/ 1507:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/angular/fesm2022/ionic-angular.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionSheetController: () => (/* binding */ ActionSheetController),
/* harmony export */   AlertController: () => (/* binding */ AlertController),
/* harmony export */   AngularDelegate: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.AngularDelegate),
/* harmony export */   AnimationController: () => (/* binding */ AnimationController),
/* harmony export */   BooleanValueAccessor: () => (/* binding */ BooleanValueAccessorDirective),
/* harmony export */   Config: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.Config),
/* harmony export */   DomController: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.DomController),
/* harmony export */   GestureController: () => (/* binding */ GestureController),
/* harmony export */   ION_MAX_VALIDATOR: () => (/* binding */ ION_MAX_VALIDATOR),
/* harmony export */   ION_MIN_VALIDATOR: () => (/* binding */ ION_MIN_VALIDATOR),
/* harmony export */   IonAccordion: () => (/* binding */ IonAccordion),
/* harmony export */   IonAccordionGroup: () => (/* binding */ IonAccordionGroup),
/* harmony export */   IonActionSheet: () => (/* binding */ IonActionSheet),
/* harmony export */   IonAlert: () => (/* binding */ IonAlert),
/* harmony export */   IonApp: () => (/* binding */ IonApp),
/* harmony export */   IonAvatar: () => (/* binding */ IonAvatar),
/* harmony export */   IonBackButton: () => (/* binding */ IonBackButton),
/* harmony export */   IonBackdrop: () => (/* binding */ IonBackdrop),
/* harmony export */   IonBadge: () => (/* binding */ IonBadge),
/* harmony export */   IonBreadcrumb: () => (/* binding */ IonBreadcrumb),
/* harmony export */   IonBreadcrumbs: () => (/* binding */ IonBreadcrumbs),
/* harmony export */   IonButton: () => (/* binding */ IonButton),
/* harmony export */   IonButtons: () => (/* binding */ IonButtons),
/* harmony export */   IonCard: () => (/* binding */ IonCard),
/* harmony export */   IonCardContent: () => (/* binding */ IonCardContent),
/* harmony export */   IonCardHeader: () => (/* binding */ IonCardHeader),
/* harmony export */   IonCardSubtitle: () => (/* binding */ IonCardSubtitle),
/* harmony export */   IonCardTitle: () => (/* binding */ IonCardTitle),
/* harmony export */   IonCheckbox: () => (/* binding */ IonCheckbox),
/* harmony export */   IonChip: () => (/* binding */ IonChip),
/* harmony export */   IonCol: () => (/* binding */ IonCol),
/* harmony export */   IonContent: () => (/* binding */ IonContent),
/* harmony export */   IonDatetime: () => (/* binding */ IonDatetime),
/* harmony export */   IonDatetimeButton: () => (/* binding */ IonDatetimeButton),
/* harmony export */   IonFab: () => (/* binding */ IonFab),
/* harmony export */   IonFabButton: () => (/* binding */ IonFabButton),
/* harmony export */   IonFabList: () => (/* binding */ IonFabList),
/* harmony export */   IonFooter: () => (/* binding */ IonFooter),
/* harmony export */   IonGrid: () => (/* binding */ IonGrid),
/* harmony export */   IonHeader: () => (/* binding */ IonHeader),
/* harmony export */   IonIcon: () => (/* binding */ IonIcon),
/* harmony export */   IonImg: () => (/* binding */ IonImg),
/* harmony export */   IonInfiniteScroll: () => (/* binding */ IonInfiniteScroll),
/* harmony export */   IonInfiniteScrollContent: () => (/* binding */ IonInfiniteScrollContent),
/* harmony export */   IonInput: () => (/* binding */ IonInput),
/* harmony export */   IonInputPasswordToggle: () => (/* binding */ IonInputPasswordToggle),
/* harmony export */   IonItem: () => (/* binding */ IonItem),
/* harmony export */   IonItemDivider: () => (/* binding */ IonItemDivider),
/* harmony export */   IonItemGroup: () => (/* binding */ IonItemGroup),
/* harmony export */   IonItemOption: () => (/* binding */ IonItemOption),
/* harmony export */   IonItemOptions: () => (/* binding */ IonItemOptions),
/* harmony export */   IonItemSliding: () => (/* binding */ IonItemSliding),
/* harmony export */   IonLabel: () => (/* binding */ IonLabel),
/* harmony export */   IonList: () => (/* binding */ IonList),
/* harmony export */   IonListHeader: () => (/* binding */ IonListHeader),
/* harmony export */   IonLoading: () => (/* binding */ IonLoading),
/* harmony export */   IonMaxValidator: () => (/* binding */ IonMaxValidator),
/* harmony export */   IonMenu: () => (/* binding */ IonMenu),
/* harmony export */   IonMenuButton: () => (/* binding */ IonMenuButton),
/* harmony export */   IonMenuToggle: () => (/* binding */ IonMenuToggle),
/* harmony export */   IonMinValidator: () => (/* binding */ IonMinValidator),
/* harmony export */   IonModal: () => (/* binding */ IonModal),
/* harmony export */   IonNav: () => (/* binding */ IonNav),
/* harmony export */   IonNavLink: () => (/* binding */ IonNavLink),
/* harmony export */   IonNote: () => (/* binding */ IonNote),
/* harmony export */   IonPicker: () => (/* binding */ IonPicker),
/* harmony export */   IonPickerColumn: () => (/* binding */ IonPickerColumn),
/* harmony export */   IonPickerColumnOption: () => (/* binding */ IonPickerColumnOption),
/* harmony export */   IonPickerLegacy: () => (/* binding */ IonPickerLegacy),
/* harmony export */   IonPopover: () => (/* binding */ IonPopover),
/* harmony export */   IonProgressBar: () => (/* binding */ IonProgressBar),
/* harmony export */   IonRadio: () => (/* binding */ IonRadio),
/* harmony export */   IonRadioGroup: () => (/* binding */ IonRadioGroup),
/* harmony export */   IonRange: () => (/* binding */ IonRange),
/* harmony export */   IonRefresher: () => (/* binding */ IonRefresher),
/* harmony export */   IonRefresherContent: () => (/* binding */ IonRefresherContent),
/* harmony export */   IonReorder: () => (/* binding */ IonReorder),
/* harmony export */   IonReorderGroup: () => (/* binding */ IonReorderGroup),
/* harmony export */   IonRippleEffect: () => (/* binding */ IonRippleEffect),
/* harmony export */   IonRouterOutlet: () => (/* binding */ IonRouterOutlet),
/* harmony export */   IonRow: () => (/* binding */ IonRow),
/* harmony export */   IonSearchbar: () => (/* binding */ IonSearchbar),
/* harmony export */   IonSegment: () => (/* binding */ IonSegment),
/* harmony export */   IonSegmentButton: () => (/* binding */ IonSegmentButton),
/* harmony export */   IonSegmentContent: () => (/* binding */ IonSegmentContent),
/* harmony export */   IonSegmentView: () => (/* binding */ IonSegmentView),
/* harmony export */   IonSelect: () => (/* binding */ IonSelect),
/* harmony export */   IonSelectModal: () => (/* binding */ IonSelectModal),
/* harmony export */   IonSelectOption: () => (/* binding */ IonSelectOption),
/* harmony export */   IonSkeletonText: () => (/* binding */ IonSkeletonText),
/* harmony export */   IonSpinner: () => (/* binding */ IonSpinner),
/* harmony export */   IonSplitPane: () => (/* binding */ IonSplitPane),
/* harmony export */   IonTab: () => (/* binding */ IonTab),
/* harmony export */   IonTabBar: () => (/* binding */ IonTabBar),
/* harmony export */   IonTabButton: () => (/* binding */ IonTabButton),
/* harmony export */   IonTabs: () => (/* binding */ IonTabs),
/* harmony export */   IonText: () => (/* binding */ IonText),
/* harmony export */   IonTextarea: () => (/* binding */ IonTextarea),
/* harmony export */   IonThumbnail: () => (/* binding */ IonThumbnail),
/* harmony export */   IonTitle: () => (/* binding */ IonTitle),
/* harmony export */   IonToast: () => (/* binding */ IonToast),
/* harmony export */   IonToggle: () => (/* binding */ IonToggle),
/* harmony export */   IonToolbar: () => (/* binding */ IonToolbar),
/* harmony export */   IonicModule: () => (/* binding */ IonicModule),
/* harmony export */   IonicRouteStrategy: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonicRouteStrategy),
/* harmony export */   IonicSafeString: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.IonicSafeString),
/* harmony export */   IonicSlides: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.IonicSlides),
/* harmony export */   LoadingController: () => (/* binding */ LoadingController),
/* harmony export */   MenuController: () => (/* binding */ MenuController),
/* harmony export */   ModalController: () => (/* binding */ ModalController),
/* harmony export */   NavController: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.NavController),
/* harmony export */   NavParams: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.NavParams),
/* harmony export */   NumericValueAccessor: () => (/* binding */ NumericValueAccessorDirective),
/* harmony export */   PickerController: () => (/* binding */ PickerController),
/* harmony export */   Platform: () => (/* reexport safe */ _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.Platform),
/* harmony export */   PopoverController: () => (/* binding */ PopoverController),
/* harmony export */   RouterLinkDelegate: () => (/* binding */ RouterLinkDelegateDirective),
/* harmony export */   RouterLinkWithHrefDelegate: () => (/* binding */ RouterLinkWithHrefDelegateDirective),
/* harmony export */   SelectValueAccessor: () => (/* binding */ SelectValueAccessorDirective),
/* harmony export */   TextValueAccessor: () => (/* binding */ TextValueAccessorDirective),
/* harmony export */   ToastController: () => (/* binding */ ToastController),
/* harmony export */   createAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.createAnimation),
/* harmony export */   createGesture: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.createGesture),
/* harmony export */   getIonPageElement: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.getIonPageElement),
/* harmony export */   getPlatforms: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.getPlatforms),
/* harmony export */   getTimeGivenProgression: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.getTimeGivenProgression),
/* harmony export */   iosTransitionAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.iosTransitionAnimation),
/* harmony export */   isPlatform: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.isPlatform),
/* harmony export */   mdTransitionAnimation: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.mdTransitionAnimation),
/* harmony export */   openURL: () => (/* reexport safe */ _ionic_core__WEBPACK_IMPORTED_MODULE_2__.openURL)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular/common */ 4059);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4395);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 8665);
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/core */ 3920);
/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/core/loader */ 5343);





const _c0 = ["*"];
const _c1 = ["outletContent"];
const _c2 = ["outlet"];
const _c3 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
const _c4 = ["[slot=top]", "*", "ion-tab"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-router-outlet", 5, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onStackDidChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "tabs.length > 0"]);
  }
}
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template);
  }
}









let BooleanValueAccessorDirective = /*#__PURE__*/(() => {
  class BooleanValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ValueAccessor {
    constructor(injector, el) {
      super(injector, el);
    }
    writeValue(value) {
      this.elementRef.nativeElement.checked = this.lastValue = value;
      (0,_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.setIonicClasses)(this.elementRef);
    }
    _handleIonChange(el) {
      this.handleValueChange(el, el.checked);
    }
    /** @nocollapse */
    static ɵfac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BooleanValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BooleanValueAccessorDirective,
      selectors: [["ion-checkbox"], ["ion-toggle"]],
      hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
            return ctx._handleIonChange($event.target);
          });
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return BooleanValueAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NumericValueAccessorDirective = /*#__PURE__*/(() => {
  class NumericValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ValueAccessor {
    el;
    constructor(injector, el) {
      super(injector, el);
      this.el = el;
    }
    handleInputEvent(el) {
      this.handleValueChange(el, el.value);
    }
    registerOnChange(fn) {
      if (this.el.nativeElement.tagName === 'ION-INPUT') {
        super.registerOnChange(value => {
          fn(value === '' ? null : parseFloat(value));
        });
      } else {
        super.registerOnChange(fn);
      }
    }
    /** @nocollapse */
    static ɵfac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NumericValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumericValueAccessorDirective,
      selectors: [["ion-input", "type", "number"], ["ion-range"]],
      hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
            return ctx.handleInputEvent($event.target);
          });
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return NumericValueAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectValueAccessorDirective = /*#__PURE__*/(() => {
  class SelectValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ValueAccessor {
    constructor(injector, el) {
      super(injector, el);
    }
    _handleChangeEvent(el) {
      this.handleValueChange(el, el.value);
    }
    /** @nocollapse */
    static ɵfac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SelectValueAccessorDirective,
      selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
      hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
            return ctx._handleChangeEvent($event.target);
          });
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return SelectValueAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TextValueAccessorDirective = /*#__PURE__*/(() => {
  class TextValueAccessorDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ValueAccessor {
    constructor(injector, el) {
      super(injector, el);
    }
    _handleInputEvent(el) {
      this.handleValueChange(el, el.value);
    }
    /** @nocollapse */
    static ɵfac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TextValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TextValueAccessorDirective,
      selectors: [["ion-input", 3, "type", "number"], ["ion-textarea"], ["ion-searchbar"]],
      hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
            return ctx._handleInputEvent($event.target);
          });
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return TextValueAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
const proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
const proxyOutputs = (instance, el, events) => {
  events.forEach(eventName => instance[eventName] = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(el, eventName));
};
const defineCustomElement = (tagName, customElement) => {
  if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
  const decorator = function (cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
let IonAccordion = /*#__PURE__*/(() => {
  let IonAccordion = class IonAccordion {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonAccordion_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonAccordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonAccordion,
      selectors: [["ion-accordion"]],
      inputs: {
        disabled: "disabled",
        mode: "mode",
        readonly: "readonly",
        toggleIcon: "toggleIcon",
        toggleIconSlot: "toggleIconSlot",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonAccordion_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonAccordion = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
  })], IonAccordion);
  return IonAccordion;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonAccordionGroup = /*#__PURE__*/(() => {
  let IonAccordionGroup = class IonAccordionGroup {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange']);
    }
    /** @nocollapse */
    static ɵfac = function IonAccordionGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonAccordionGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonAccordionGroup,
      selectors: [["ion-accordion-group"]],
      inputs: {
        animated: "animated",
        disabled: "disabled",
        expand: "expand",
        mode: "mode",
        multiple: "multiple",
        readonly: "readonly",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonAccordionGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonAccordionGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
  })], IonAccordionGroup);
  return IonAccordionGroup;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonActionSheet = /*#__PURE__*/(() => {
  let IonActionSheet = class IonActionSheet {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionActionSheetDidPresent', 'ionActionSheetWillPresent', 'ionActionSheetWillDismiss', 'ionActionSheetDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
    }
    /** @nocollapse */
    static ɵfac = function IonActionSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonActionSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonActionSheet,
      selectors: [["ion-action-sheet"]],
      inputs: {
        animated: "animated",
        backdropDismiss: "backdropDismiss",
        buttons: "buttons",
        cssClass: "cssClass",
        enterAnimation: "enterAnimation",
        header: "header",
        htmlAttributes: "htmlAttributes",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        mode: "mode",
        subHeader: "subHeader",
        translucent: "translucent",
        trigger: "trigger"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonActionSheet_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonActionSheet = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent', 'trigger'],
    methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
  })], IonActionSheet);
  return IonActionSheet;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonAlert = /*#__PURE__*/(() => {
  let IonAlert = class IonAlert {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionAlertDidPresent', 'ionAlertWillPresent', 'ionAlertWillDismiss', 'ionAlertDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
    }
    /** @nocollapse */
    static ɵfac = function IonAlert_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonAlert)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonAlert,
      selectors: [["ion-alert"]],
      inputs: {
        animated: "animated",
        backdropDismiss: "backdropDismiss",
        buttons: "buttons",
        cssClass: "cssClass",
        enterAnimation: "enterAnimation",
        header: "header",
        htmlAttributes: "htmlAttributes",
        inputs: "inputs",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        message: "message",
        mode: "mode",
        subHeader: "subHeader",
        translucent: "translucent",
        trigger: "trigger"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonAlert_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonAlert = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'htmlAttributes', 'inputs', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent', 'trigger'],
    methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
  })], IonAlert);
  return IonAlert;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonApp = /*#__PURE__*/(() => {
  let IonApp = class IonApp {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonApp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonApp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonApp,
      selectors: [["ion-app"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonApp_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonApp = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    methods: ['setFocus']
  })], IonApp);
  return IonApp;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonAvatar = /*#__PURE__*/(() => {
  let IonAvatar = class IonAvatar {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonAvatar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonAvatar,
      selectors: [["ion-avatar"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonAvatar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonAvatar = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonAvatar);
  return IonAvatar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonBackdrop = /*#__PURE__*/(() => {
  let IonBackdrop = class IonBackdrop {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionBackdropTap']);
    }
    /** @nocollapse */
    static ɵfac = function IonBackdrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonBackdrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonBackdrop,
      selectors: [["ion-backdrop"]],
      inputs: {
        stopPropagation: "stopPropagation",
        tappable: "tappable",
        visible: "visible"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonBackdrop_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonBackdrop = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['stopPropagation', 'tappable', 'visible']
  })], IonBackdrop);
  return IonBackdrop;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonBadge = /*#__PURE__*/(() => {
  let IonBadge = class IonBadge {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonBadge,
      selectors: [["ion-badge"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonBadge_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonBadge = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonBadge);
  return IonBadge;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonBreadcrumb = /*#__PURE__*/(() => {
  let IonBreadcrumb = class IonBreadcrumb {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonBreadcrumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonBreadcrumb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonBreadcrumb,
      selectors: [["ion-breadcrumb"]],
      inputs: {
        active: "active",
        color: "color",
        disabled: "disabled",
        download: "download",
        href: "href",
        mode: "mode",
        rel: "rel",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection",
        separator: "separator",
        target: "target"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonBreadcrumb_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonBreadcrumb = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
  })], IonBreadcrumb);
  return IonBreadcrumb;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonBreadcrumbs = /*#__PURE__*/(() => {
  let IonBreadcrumbs = class IonBreadcrumbs {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionCollapsedClick']);
    }
    /** @nocollapse */
    static ɵfac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonBreadcrumbs)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonBreadcrumbs,
      selectors: [["ion-breadcrumbs"]],
      inputs: {
        color: "color",
        itemsAfterCollapse: "itemsAfterCollapse",
        itemsBeforeCollapse: "itemsBeforeCollapse",
        maxItems: "maxItems",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonBreadcrumbs_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonBreadcrumbs = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
  })], IonBreadcrumbs);
  return IonBreadcrumbs;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonButton = /*#__PURE__*/(() => {
  let IonButton = class IonButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonButton,
      selectors: [["ion-button"]],
      inputs: {
        buttonType: "buttonType",
        color: "color",
        disabled: "disabled",
        download: "download",
        expand: "expand",
        fill: "fill",
        form: "form",
        href: "href",
        mode: "mode",
        rel: "rel",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection",
        shape: "shape",
        size: "size",
        strong: "strong",
        target: "target",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'form', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
  })], IonButton);
  return IonButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonButtons = /*#__PURE__*/(() => {
  let IonButtons = class IonButtons {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonButtons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonButtons)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonButtons,
      selectors: [["ion-buttons"]],
      inputs: {
        collapse: "collapse"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonButtons_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonButtons = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['collapse']
  })], IonButtons);
  return IonButtons;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCard = /*#__PURE__*/(() => {
  let IonCard = class IonCard {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCard,
      selectors: [["ion-card"]],
      inputs: {
        button: "button",
        color: "color",
        disabled: "disabled",
        download: "download",
        href: "href",
        mode: "mode",
        rel: "rel",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection",
        target: "target",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCard = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
  })], IonCard);
  return IonCard;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCardContent = /*#__PURE__*/(() => {
  let IonCardContent = class IonCardContent {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCardContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCardContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCardContent,
      selectors: [["ion-card-content"]],
      inputs: {
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCardContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCardContent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['mode']
  })], IonCardContent);
  return IonCardContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCardHeader = /*#__PURE__*/(() => {
  let IonCardHeader = class IonCardHeader {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCardHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCardHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCardHeader,
      selectors: [["ion-card-header"]],
      inputs: {
        color: "color",
        mode: "mode",
        translucent: "translucent"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCardHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCardHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode', 'translucent']
  })], IonCardHeader);
  return IonCardHeader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCardSubtitle = /*#__PURE__*/(() => {
  let IonCardSubtitle = class IonCardSubtitle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCardSubtitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCardSubtitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCardSubtitle,
      selectors: [["ion-card-subtitle"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCardSubtitle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCardSubtitle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonCardSubtitle);
  return IonCardSubtitle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCardTitle = /*#__PURE__*/(() => {
  let IonCardTitle = class IonCardTitle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCardTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCardTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCardTitle,
      selectors: [["ion-card-title"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCardTitle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCardTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonCardTitle);
  return IonCardTitle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCheckbox = /*#__PURE__*/(() => {
  let IonCheckbox = class IonCheckbox {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCheckbox,
      selectors: [["ion-checkbox"]],
      inputs: {
        alignment: "alignment",
        checked: "checked",
        color: "color",
        disabled: "disabled",
        errorText: "errorText",
        helperText: "helperText",
        indeterminate: "indeterminate",
        justify: "justify",
        labelPlacement: "labelPlacement",
        mode: "mode",
        name: "name",
        required: "required",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCheckbox = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['alignment', 'checked', 'color', 'disabled', 'errorText', 'helperText', 'indeterminate', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
  })], IonCheckbox);
  return IonCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonChip = /*#__PURE__*/(() => {
  let IonChip = class IonChip {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonChip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonChip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonChip,
      selectors: [["ion-chip"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        mode: "mode",
        outline: "outline"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonChip_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonChip = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'disabled', 'mode', 'outline']
  })], IonChip);
  return IonChip;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonCol = /*#__PURE__*/(() => {
  let IonCol = class IonCol {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonCol_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonCol)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonCol,
      selectors: [["ion-col"]],
      inputs: {
        offset: "offset",
        offsetLg: "offsetLg",
        offsetMd: "offsetMd",
        offsetSm: "offsetSm",
        offsetXl: "offsetXl",
        offsetXs: "offsetXs",
        pull: "pull",
        pullLg: "pullLg",
        pullMd: "pullMd",
        pullSm: "pullSm",
        pullXl: "pullXl",
        pullXs: "pullXs",
        push: "push",
        pushLg: "pushLg",
        pushMd: "pushMd",
        pushSm: "pushSm",
        pushXl: "pushXl",
        pushXs: "pushXs",
        size: "size",
        sizeLg: "sizeLg",
        sizeMd: "sizeMd",
        sizeSm: "sizeSm",
        sizeXl: "sizeXl",
        sizeXs: "sizeXs"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonCol_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonCol = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
  })], IonCol);
  return IonCol;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonContent = /*#__PURE__*/(() => {
  let IonContent = class IonContent {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
    }
    /** @nocollapse */
    static ɵfac = function IonContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonContent,
      selectors: [["ion-content"]],
      inputs: {
        color: "color",
        fixedSlotPlacement: "fixedSlotPlacement",
        forceOverscroll: "forceOverscroll",
        fullscreen: "fullscreen",
        scrollEvents: "scrollEvents",
        scrollX: "scrollX",
        scrollY: "scrollY"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonContent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
    methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
  })], IonContent);
  return IonContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonDatetime = /*#__PURE__*/(() => {
  let IonDatetime = class IonDatetime {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonDatetime_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonDatetime)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonDatetime,
      selectors: [["ion-datetime"]],
      inputs: {
        cancelText: "cancelText",
        clearText: "clearText",
        color: "color",
        dayValues: "dayValues",
        disabled: "disabled",
        doneText: "doneText",
        firstDayOfWeek: "firstDayOfWeek",
        formatOptions: "formatOptions",
        highlightedDates: "highlightedDates",
        hourCycle: "hourCycle",
        hourValues: "hourValues",
        isDateEnabled: "isDateEnabled",
        locale: "locale",
        max: "max",
        min: "min",
        minuteValues: "minuteValues",
        mode: "mode",
        monthValues: "monthValues",
        multiple: "multiple",
        name: "name",
        preferWheel: "preferWheel",
        presentation: "presentation",
        readonly: "readonly",
        showClearButton: "showClearButton",
        showDefaultButtons: "showDefaultButtons",
        showDefaultTimeLabel: "showDefaultTimeLabel",
        showDefaultTitle: "showDefaultTitle",
        size: "size",
        titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
        value: "value",
        yearValues: "yearValues"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonDatetime_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonDatetime = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'formatOptions', 'highlightedDates', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'titleSelectedDatesFormatter', 'value', 'yearValues'],
    methods: ['confirm', 'reset', 'cancel']
  })], IonDatetime);
  return IonDatetime;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonDatetimeButton = /*#__PURE__*/(() => {
  let IonDatetimeButton = class IonDatetimeButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonDatetimeButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonDatetimeButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonDatetimeButton,
      selectors: [["ion-datetime-button"]],
      inputs: {
        color: "color",
        datetime: "datetime",
        disabled: "disabled",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonDatetimeButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonDatetimeButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'datetime', 'disabled', 'mode']
  })], IonDatetimeButton);
  return IonDatetimeButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonFab = /*#__PURE__*/(() => {
  let IonFab = class IonFab {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonFab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonFab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonFab,
      selectors: [["ion-fab"]],
      inputs: {
        activated: "activated",
        edge: "edge",
        horizontal: "horizontal",
        vertical: "vertical"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonFab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonFab = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['activated', 'edge', 'horizontal', 'vertical'],
    methods: ['close']
  })], IonFab);
  return IonFab;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonFabButton = /*#__PURE__*/(() => {
  let IonFabButton = class IonFabButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonFabButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonFabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonFabButton,
      selectors: [["ion-fab-button"]],
      inputs: {
        activated: "activated",
        closeIcon: "closeIcon",
        color: "color",
        disabled: "disabled",
        download: "download",
        href: "href",
        mode: "mode",
        rel: "rel",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection",
        show: "show",
        size: "size",
        target: "target",
        translucent: "translucent",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonFabButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonFabButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
  })], IonFabButton);
  return IonFabButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonFabList = /*#__PURE__*/(() => {
  let IonFabList = class IonFabList {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonFabList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonFabList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonFabList,
      selectors: [["ion-fab-list"]],
      inputs: {
        activated: "activated",
        side: "side"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonFabList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonFabList = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['activated', 'side']
  })], IonFabList);
  return IonFabList;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonFooter = /*#__PURE__*/(() => {
  let IonFooter = class IonFooter {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonFooter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonFooter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonFooter,
      selectors: [["ion-footer"]],
      inputs: {
        collapse: "collapse",
        mode: "mode",
        translucent: "translucent"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonFooter_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonFooter = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['collapse', 'mode', 'translucent']
  })], IonFooter);
  return IonFooter;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonGrid = /*#__PURE__*/(() => {
  let IonGrid = class IonGrid {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonGrid)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonGrid,
      selectors: [["ion-grid"]],
      inputs: {
        fixed: "fixed"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonGrid_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonGrid = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['fixed']
  })], IonGrid);
  return IonGrid;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonHeader = /*#__PURE__*/(() => {
  let IonHeader = class IonHeader {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonHeader,
      selectors: [["ion-header"]],
      inputs: {
        collapse: "collapse",
        mode: "mode",
        translucent: "translucent"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['collapse', 'mode', 'translucent']
  })], IonHeader);
  return IonHeader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonIcon = /*#__PURE__*/(() => {
  let IonIcon = class IonIcon {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonIcon,
      selectors: [["ion-icon"]],
      inputs: {
        color: "color",
        flipRtl: "flipRtl",
        icon: "icon",
        ios: "ios",
        lazy: "lazy",
        md: "md",
        mode: "mode",
        name: "name",
        sanitize: "sanitize",
        size: "size",
        src: "src"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
  })], IonIcon);
  return IonIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonImg = /*#__PURE__*/(() => {
  let IonImg = class IonImg {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
    }
    /** @nocollapse */
    static ɵfac = function IonImg_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonImg)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonImg,
      selectors: [["ion-img"]],
      inputs: {
        alt: "alt",
        src: "src"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonImg_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonImg = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['alt', 'src']
  })], IonImg);
  return IonImg;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonInfiniteScroll = /*#__PURE__*/(() => {
  let IonInfiniteScroll = class IonInfiniteScroll {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionInfinite']);
    }
    /** @nocollapse */
    static ɵfac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonInfiniteScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonInfiniteScroll,
      selectors: [["ion-infinite-scroll"]],
      inputs: {
        disabled: "disabled",
        position: "position",
        threshold: "threshold"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonInfiniteScroll_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonInfiniteScroll = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled', 'position', 'threshold'],
    methods: ['complete']
  })], IonInfiniteScroll);
  return IonInfiniteScroll;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonInfiniteScrollContent = /*#__PURE__*/(() => {
  let IonInfiniteScrollContent = class IonInfiniteScrollContent {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonInfiniteScrollContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonInfiniteScrollContent,
      selectors: [["ion-infinite-scroll-content"]],
      inputs: {
        loadingSpinner: "loadingSpinner",
        loadingText: "loadingText"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonInfiniteScrollContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonInfiniteScrollContent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['loadingSpinner', 'loadingText']
  })], IonInfiniteScrollContent);
  return IonInfiniteScrollContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonInput = /*#__PURE__*/(() => {
  let IonInput = class IonInput {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
    }
    /** @nocollapse */
    static ɵfac = function IonInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonInput,
      selectors: [["ion-input"]],
      inputs: {
        autocapitalize: "autocapitalize",
        autocomplete: "autocomplete",
        autocorrect: "autocorrect",
        autofocus: "autofocus",
        clearInput: "clearInput",
        clearInputIcon: "clearInputIcon",
        clearOnEdit: "clearOnEdit",
        color: "color",
        counter: "counter",
        counterFormatter: "counterFormatter",
        debounce: "debounce",
        disabled: "disabled",
        enterkeyhint: "enterkeyhint",
        errorText: "errorText",
        fill: "fill",
        helperText: "helperText",
        inputmode: "inputmode",
        label: "label",
        labelPlacement: "labelPlacement",
        max: "max",
        maxlength: "maxlength",
        min: "min",
        minlength: "minlength",
        mode: "mode",
        multiple: "multiple",
        name: "name",
        pattern: "pattern",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        shape: "shape",
        spellcheck: "spellcheck",
        step: "step",
        type: "type",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonInput_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonInput = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearInputIcon', 'clearOnEdit', 'color', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'shape', 'spellcheck', 'step', 'type', 'value'],
    methods: ['setFocus', 'getInputElement']
  })], IonInput);
  return IonInput;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonInputPasswordToggle = /*#__PURE__*/(() => {
  let IonInputPasswordToggle = class IonInputPasswordToggle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonInputPasswordToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonInputPasswordToggle,
      selectors: [["ion-input-password-toggle"]],
      inputs: {
        color: "color",
        hideIcon: "hideIcon",
        mode: "mode",
        showIcon: "showIcon"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonInputPasswordToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonInputPasswordToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'hideIcon', 'mode', 'showIcon']
  })], IonInputPasswordToggle);
  return IonInputPasswordToggle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItem = /*#__PURE__*/(() => {
  let IonItem = class IonItem {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItem,
      selectors: [["ion-item"]],
      inputs: {
        button: "button",
        color: "color",
        detail: "detail",
        detailIcon: "detailIcon",
        disabled: "disabled",
        download: "download",
        href: "href",
        lines: "lines",
        mode: "mode",
        rel: "rel",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection",
        target: "target",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItem = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'download', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
  })], IonItem);
  return IonItem;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItemDivider = /*#__PURE__*/(() => {
  let IonItemDivider = class IonItemDivider {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonItemDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItemDivider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItemDivider,
      selectors: [["ion-item-divider"]],
      inputs: {
        color: "color",
        mode: "mode",
        sticky: "sticky"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItemDivider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItemDivider = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode', 'sticky']
  })], IonItemDivider);
  return IonItemDivider;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItemGroup = /*#__PURE__*/(() => {
  let IonItemGroup = class IonItemGroup {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonItemGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItemGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItemGroup,
      selectors: [["ion-item-group"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItemGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItemGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonItemGroup);
  return IonItemGroup;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItemOption = /*#__PURE__*/(() => {
  let IonItemOption = class IonItemOption {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonItemOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItemOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItemOption,
      selectors: [["ion-item-option"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        download: "download",
        expandable: "expandable",
        href: "href",
        mode: "mode",
        rel: "rel",
        target: "target",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItemOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItemOption = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
  })], IonItemOption);
  return IonItemOption;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItemOptions = /*#__PURE__*/(() => {
  let IonItemOptions = class IonItemOptions {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionSwipe']);
    }
    /** @nocollapse */
    static ɵfac = function IonItemOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItemOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItemOptions,
      selectors: [["ion-item-options"]],
      inputs: {
        side: "side"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItemOptions_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItemOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['side']
  })], IonItemOptions);
  return IonItemOptions;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonItemSliding = /*#__PURE__*/(() => {
  let IonItemSliding = class IonItemSliding {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionDrag']);
    }
    /** @nocollapse */
    static ɵfac = function IonItemSliding_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonItemSliding)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonItemSliding,
      selectors: [["ion-item-sliding"]],
      inputs: {
        disabled: "disabled"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonItemSliding_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonItemSliding = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled'],
    methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
  })], IonItemSliding);
  return IonItemSliding;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonLabel = /*#__PURE__*/(() => {
  let IonLabel = class IonLabel {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonLabel,
      selectors: [["ion-label"]],
      inputs: {
        color: "color",
        mode: "mode",
        position: "position"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonLabel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonLabel = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode', 'position']
  })], IonLabel);
  return IonLabel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonList = /*#__PURE__*/(() => {
  let IonList = class IonList {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonList,
      selectors: [["ion-list"]],
      inputs: {
        inset: "inset",
        lines: "lines",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonList = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['inset', 'lines', 'mode'],
    methods: ['closeSlidingItems']
  })], IonList);
  return IonList;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonListHeader = /*#__PURE__*/(() => {
  let IonListHeader = class IonListHeader {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonListHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonListHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonListHeader,
      selectors: [["ion-list-header"]],
      inputs: {
        color: "color",
        lines: "lines",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonListHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonListHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'lines', 'mode']
  })], IonListHeader);
  return IonListHeader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonLoading = /*#__PURE__*/(() => {
  let IonLoading = class IonLoading {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionLoadingDidPresent', 'ionLoadingWillPresent', 'ionLoadingWillDismiss', 'ionLoadingDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
    }
    /** @nocollapse */
    static ɵfac = function IonLoading_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonLoading)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonLoading,
      selectors: [["ion-loading"]],
      inputs: {
        animated: "animated",
        backdropDismiss: "backdropDismiss",
        cssClass: "cssClass",
        duration: "duration",
        enterAnimation: "enterAnimation",
        htmlAttributes: "htmlAttributes",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        message: "message",
        mode: "mode",
        showBackdrop: "showBackdrop",
        spinner: "spinner",
        translucent: "translucent",
        trigger: "trigger"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonLoading_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonLoading = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent', 'trigger'],
    methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
  })], IonLoading);
  return IonLoading;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonMenu = /*#__PURE__*/(() => {
  let IonMenu = class IonMenu {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
    }
    /** @nocollapse */
    static ɵfac = function IonMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonMenu,
      selectors: [["ion-menu"]],
      inputs: {
        contentId: "contentId",
        disabled: "disabled",
        maxEdgeStart: "maxEdgeStart",
        menuId: "menuId",
        side: "side",
        swipeGesture: "swipeGesture",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonMenu = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
    methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
  })], IonMenu);
  return IonMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonMenuButton = /*#__PURE__*/(() => {
  let IonMenuButton = class IonMenuButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonMenuButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonMenuButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonMenuButton,
      selectors: [["ion-menu-button"]],
      inputs: {
        autoHide: "autoHide",
        color: "color",
        disabled: "disabled",
        menu: "menu",
        mode: "mode",
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonMenuButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonMenuButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
  })], IonMenuButton);
  return IonMenuButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonMenuToggle = /*#__PURE__*/(() => {
  let IonMenuToggle = class IonMenuToggle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonMenuToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonMenuToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonMenuToggle,
      selectors: [["ion-menu-toggle"]],
      inputs: {
        autoHide: "autoHide",
        menu: "menu"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonMenuToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonMenuToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['autoHide', 'menu']
  })], IonMenuToggle);
  return IonMenuToggle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonNavLink = /*#__PURE__*/(() => {
  let IonNavLink = class IonNavLink {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonNavLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonNavLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonNavLink,
      selectors: [["ion-nav-link"]],
      inputs: {
        component: "component",
        componentProps: "componentProps",
        routerAnimation: "routerAnimation",
        routerDirection: "routerDirection"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonNavLink_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonNavLink = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
  })], IonNavLink);
  return IonNavLink;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonNote = /*#__PURE__*/(() => {
  let IonNote = class IonNote {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonNote_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonNote)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonNote,
      selectors: [["ion-note"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonNote_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonNote = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonNote);
  return IonNote;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonPicker = /*#__PURE__*/(() => {
  let IonPicker = class IonPicker {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonPicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonPicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonPicker,
      selectors: [["ion-picker"]],
      inputs: {
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonPicker_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonPicker = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['mode']
  })], IonPicker);
  return IonPicker;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonPickerColumn = /*#__PURE__*/(() => {
  let IonPickerColumn = class IonPickerColumn {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange']);
    }
    /** @nocollapse */
    static ɵfac = function IonPickerColumn_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonPickerColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonPickerColumn,
      selectors: [["ion-picker-column"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        mode: "mode",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonPickerColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonPickerColumn = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'disabled', 'mode', 'value'],
    methods: ['setFocus']
  })], IonPickerColumn);
  return IonPickerColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonPickerColumnOption = /*#__PURE__*/(() => {
  let IonPickerColumnOption = class IonPickerColumnOption {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonPickerColumnOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonPickerColumnOption,
      selectors: [["ion-picker-column-option"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonPickerColumnOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonPickerColumnOption = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'disabled', 'value']
  })], IonPickerColumnOption);
  return IonPickerColumnOption;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonPickerLegacy = /*#__PURE__*/(() => {
  let IonPickerLegacy = class IonPickerLegacy {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionPickerDidPresent', 'ionPickerWillPresent', 'ionPickerWillDismiss', 'ionPickerDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
    }
    /** @nocollapse */
    static ɵfac = function IonPickerLegacy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonPickerLegacy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonPickerLegacy,
      selectors: [["ion-picker-legacy"]],
      inputs: {
        animated: "animated",
        backdropDismiss: "backdropDismiss",
        buttons: "buttons",
        columns: "columns",
        cssClass: "cssClass",
        duration: "duration",
        enterAnimation: "enterAnimation",
        htmlAttributes: "htmlAttributes",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        mode: "mode",
        showBackdrop: "showBackdrop",
        trigger: "trigger"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonPickerLegacy_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonPickerLegacy = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'htmlAttributes', 'isOpen', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop', 'trigger'],
    methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss', 'getColumn']
  })], IonPickerLegacy);
  return IonPickerLegacy;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonProgressBar = /*#__PURE__*/(() => {
  let IonProgressBar = class IonProgressBar {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonProgressBar,
      selectors: [["ion-progress-bar"]],
      inputs: {
        buffer: "buffer",
        color: "color",
        mode: "mode",
        reversed: "reversed",
        type: "type",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonProgressBar = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
  })], IonProgressBar);
  return IonProgressBar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRadio = /*#__PURE__*/(() => {
  let IonRadio = class IonRadio {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonRadio_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRadio)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRadio,
      selectors: [["ion-radio"]],
      inputs: {
        alignment: "alignment",
        color: "color",
        disabled: "disabled",
        justify: "justify",
        labelPlacement: "labelPlacement",
        mode: "mode",
        name: "name",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRadio_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRadio = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['alignment', 'color', 'disabled', 'justify', 'labelPlacement', 'mode', 'name', 'value']
  })], IonRadio);
  return IonRadio;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRadioGroup = /*#__PURE__*/(() => {
  let IonRadioGroup = class IonRadioGroup {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange']);
    }
    /** @nocollapse */
    static ɵfac = function IonRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRadioGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRadioGroup,
      selectors: [["ion-radio-group"]],
      inputs: {
        allowEmptySelection: "allowEmptySelection",
        compareWith: "compareWith",
        errorText: "errorText",
        helperText: "helperText",
        name: "name",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRadioGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRadioGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['allowEmptySelection', 'compareWith', 'errorText', 'helperText', 'name', 'value']
  })], IonRadioGroup);
  return IonRadioGroup;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRange = /*#__PURE__*/(() => {
  let IonRange = class IonRange {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionFocus', 'ionBlur', 'ionKnobMoveStart', 'ionKnobMoveEnd']);
    }
    /** @nocollapse */
    static ɵfac = function IonRange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRange)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRange,
      selectors: [["ion-range"]],
      inputs: {
        activeBarStart: "activeBarStart",
        color: "color",
        debounce: "debounce",
        disabled: "disabled",
        dualKnobs: "dualKnobs",
        label: "label",
        labelPlacement: "labelPlacement",
        max: "max",
        min: "min",
        mode: "mode",
        name: "name",
        pin: "pin",
        pinFormatter: "pinFormatter",
        snaps: "snaps",
        step: "step",
        ticks: "ticks",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRange_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRange = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'label', 'labelPlacement', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
  })], IonRange);
  return IonRange;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRefresher = /*#__PURE__*/(() => {
  let IonRefresher = class IonRefresher {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
    }
    /** @nocollapse */
    static ɵfac = function IonRefresher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRefresher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRefresher,
      selectors: [["ion-refresher"]],
      inputs: {
        closeDuration: "closeDuration",
        disabled: "disabled",
        mode: "mode",
        pullFactor: "pullFactor",
        pullMax: "pullMax",
        pullMin: "pullMin",
        snapbackDuration: "snapbackDuration"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRefresher_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRefresher = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
    methods: ['complete', 'cancel', 'getProgress']
  })], IonRefresher);
  return IonRefresher;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRefresherContent = /*#__PURE__*/(() => {
  let IonRefresherContent = class IonRefresherContent {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonRefresherContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRefresherContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRefresherContent,
      selectors: [["ion-refresher-content"]],
      inputs: {
        pullingIcon: "pullingIcon",
        pullingText: "pullingText",
        refreshingSpinner: "refreshingSpinner",
        refreshingText: "refreshingText"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRefresherContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRefresherContent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
  })], IonRefresherContent);
  return IonRefresherContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonReorder = /*#__PURE__*/(() => {
  let IonReorder = class IonReorder {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonReorder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonReorder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonReorder,
      selectors: [["ion-reorder"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonReorder_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonReorder = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonReorder);
  return IonReorder;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonReorderGroup = /*#__PURE__*/(() => {
  let IonReorderGroup = class IonReorderGroup {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionItemReorder']);
    }
    /** @nocollapse */
    static ɵfac = function IonReorderGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonReorderGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonReorderGroup,
      selectors: [["ion-reorder-group"]],
      inputs: {
        disabled: "disabled"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonReorderGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonReorderGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled'],
    methods: ['complete']
  })], IonReorderGroup);
  return IonReorderGroup;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRippleEffect = /*#__PURE__*/(() => {
  let IonRippleEffect = class IonRippleEffect {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonRippleEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRippleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRippleEffect,
      selectors: [["ion-ripple-effect"]],
      inputs: {
        type: "type"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRippleEffect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRippleEffect = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['type'],
    methods: ['addRipple']
  })], IonRippleEffect);
  return IonRippleEffect;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonRow = /*#__PURE__*/(() => {
  let IonRow = class IonRow {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRow,
      selectors: [["ion-row"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonRow = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonRow);
  return IonRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSearchbar = /*#__PURE__*/(() => {
  let IonSearchbar = class IonSearchbar {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
    }
    /** @nocollapse */
    static ɵfac = function IonSearchbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSearchbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSearchbar,
      selectors: [["ion-searchbar"]],
      inputs: {
        animated: "animated",
        autocapitalize: "autocapitalize",
        autocomplete: "autocomplete",
        autocorrect: "autocorrect",
        cancelButtonIcon: "cancelButtonIcon",
        cancelButtonText: "cancelButtonText",
        clearIcon: "clearIcon",
        color: "color",
        debounce: "debounce",
        disabled: "disabled",
        enterkeyhint: "enterkeyhint",
        inputmode: "inputmode",
        maxlength: "maxlength",
        minlength: "minlength",
        mode: "mode",
        name: "name",
        placeholder: "placeholder",
        searchIcon: "searchIcon",
        showCancelButton: "showCancelButton",
        showClearButton: "showClearButton",
        spellcheck: "spellcheck",
        type: "type",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSearchbar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSearchbar = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
    methods: ['setFocus', 'getInputElement']
  })], IonSearchbar);
  return IonSearchbar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSegment = /*#__PURE__*/(() => {
  let IonSegment = class IonSegment {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange']);
    }
    /** @nocollapse */
    static ɵfac = function IonSegment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSegment)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSegment,
      selectors: [["ion-segment"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        mode: "mode",
        scrollable: "scrollable",
        selectOnFocus: "selectOnFocus",
        swipeGesture: "swipeGesture",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSegment_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSegment = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
  })], IonSegment);
  return IonSegment;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSegmentButton = /*#__PURE__*/(() => {
  let IonSegmentButton = class IonSegmentButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSegmentButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSegmentButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSegmentButton,
      selectors: [["ion-segment-button"]],
      inputs: {
        contentId: "contentId",
        disabled: "disabled",
        layout: "layout",
        mode: "mode",
        type: "type",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSegmentButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSegmentButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['contentId', 'disabled', 'layout', 'mode', 'type', 'value']
  })], IonSegmentButton);
  return IonSegmentButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSegmentContent = /*#__PURE__*/(() => {
  let IonSegmentContent = class IonSegmentContent {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSegmentContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSegmentContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSegmentContent,
      selectors: [["ion-segment-content"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSegmentContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSegmentContent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonSegmentContent);
  return IonSegmentContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSegmentView = /*#__PURE__*/(() => {
  let IonSegmentView = class IonSegmentView {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionSegmentViewScroll']);
    }
    /** @nocollapse */
    static ɵfac = function IonSegmentView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSegmentView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSegmentView,
      selectors: [["ion-segment-view"]],
      inputs: {
        disabled: "disabled"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSegmentView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSegmentView = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled']
  })], IonSegmentView);
  return IonSegmentView;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSelect = /*#__PURE__*/(() => {
  let IonSelect = class IonSelect {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionDismiss', 'ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSelect,
      selectors: [["ion-select"]],
      inputs: {
        cancelText: "cancelText",
        color: "color",
        compareWith: "compareWith",
        disabled: "disabled",
        errorText: "errorText",
        expandedIcon: "expandedIcon",
        fill: "fill",
        helperText: "helperText",
        interface: "interface",
        interfaceOptions: "interfaceOptions",
        justify: "justify",
        label: "label",
        labelPlacement: "labelPlacement",
        mode: "mode",
        multiple: "multiple",
        name: "name",
        okText: "okText",
        placeholder: "placeholder",
        required: "required",
        selectedText: "selectedText",
        shape: "shape",
        toggleIcon: "toggleIcon",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSelect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSelect = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['cancelText', 'color', 'compareWith', 'disabled', 'errorText', 'expandedIcon', 'fill', 'helperText', 'interface', 'interfaceOptions', 'justify', 'label', 'labelPlacement', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'required', 'selectedText', 'shape', 'toggleIcon', 'value'],
    methods: ['open']
  })], IonSelect);
  return IonSelect;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSelectModal = /*#__PURE__*/(() => {
  let IonSelectModal = class IonSelectModal {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSelectModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSelectModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSelectModal,
      selectors: [["ion-select-modal"]],
      inputs: {
        header: "header",
        multiple: "multiple",
        options: "options"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSelectModal_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSelectModal = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['header', 'multiple', 'options']
  })], IonSelectModal);
  return IonSelectModal;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSelectOption = /*#__PURE__*/(() => {
  let IonSelectOption = class IonSelectOption {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSelectOption,
      selectors: [["ion-select-option"]],
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSelectOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSelectOption = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled', 'value']
  })], IonSelectOption);
  return IonSelectOption;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSkeletonText = /*#__PURE__*/(() => {
  let IonSkeletonText = class IonSkeletonText {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSkeletonText_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSkeletonText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSkeletonText,
      selectors: [["ion-skeleton-text"]],
      inputs: {
        animated: "animated"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSkeletonText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSkeletonText = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated']
  })], IonSkeletonText);
  return IonSkeletonText;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSpinner = /*#__PURE__*/(() => {
  let IonSpinner = class IonSpinner {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonSpinner_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSpinner,
      selectors: [["ion-spinner"]],
      inputs: {
        color: "color",
        duration: "duration",
        name: "name",
        paused: "paused"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSpinner_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSpinner = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'duration', 'name', 'paused']
  })], IonSpinner);
  return IonSpinner;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonSplitPane = /*#__PURE__*/(() => {
  let IonSplitPane = class IonSplitPane {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
    }
    /** @nocollapse */
    static ɵfac = function IonSplitPane_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonSplitPane)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonSplitPane,
      selectors: [["ion-split-pane"]],
      inputs: {
        contentId: "contentId",
        disabled: "disabled",
        when: "when"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonSplitPane_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonSplitPane = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['contentId', 'disabled', 'when']
  })], IonSplitPane);
  return IonSplitPane;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonTab = /*#__PURE__*/(() => {
  let IonTab = class IonTab {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTab,
      selectors: [["ion-tab"]],
      inputs: {
        component: "component",
        tab: "tab"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonTab = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['component', 'tab'],
    methods: ['setActive']
  })], IonTab);
  return IonTab;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonTabBar = /*#__PURE__*/(() => {
  let IonTabBar = class IonTabBar {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonTabBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonTabBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTabBar,
      selectors: [["ion-tab-bar"]],
      inputs: {
        color: "color",
        mode: "mode",
        selectedTab: "selectedTab",
        translucent: "translucent"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonTabBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonTabBar = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode', 'selectedTab', 'translucent']
  })], IonTabBar);
  return IonTabBar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonTabButton = /*#__PURE__*/(() => {
  let IonTabButton = class IonTabButton {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonTabButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonTabButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTabButton,
      selectors: [["ion-tab-button"]],
      inputs: {
        disabled: "disabled",
        download: "download",
        href: "href",
        layout: "layout",
        mode: "mode",
        rel: "rel",
        selected: "selected",
        tab: "tab",
        target: "target"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonTabButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonTabButton = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
  })], IonTabButton);
  return IonTabButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonText = /*#__PURE__*/(() => {
  let IonText = class IonText {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonText_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonText,
      selectors: [["ion-text"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonText = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonText);
  return IonText;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonTextarea = /*#__PURE__*/(() => {
  let IonTextarea = class IonTextarea {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
    }
    /** @nocollapse */
    static ɵfac = function IonTextarea_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTextarea,
      selectors: [["ion-textarea"]],
      inputs: {
        autoGrow: "autoGrow",
        autocapitalize: "autocapitalize",
        autofocus: "autofocus",
        clearOnEdit: "clearOnEdit",
        color: "color",
        cols: "cols",
        counter: "counter",
        counterFormatter: "counterFormatter",
        debounce: "debounce",
        disabled: "disabled",
        enterkeyhint: "enterkeyhint",
        errorText: "errorText",
        fill: "fill",
        helperText: "helperText",
        inputmode: "inputmode",
        label: "label",
        labelPlacement: "labelPlacement",
        maxlength: "maxlength",
        minlength: "minlength",
        mode: "mode",
        name: "name",
        placeholder: "placeholder",
        readonly: "readonly",
        required: "required",
        rows: "rows",
        shape: "shape",
        spellcheck: "spellcheck",
        value: "value",
        wrap: "wrap"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonTextarea_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonTextarea = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'counter', 'counterFormatter', 'debounce', 'disabled', 'enterkeyhint', 'errorText', 'fill', 'helperText', 'inputmode', 'label', 'labelPlacement', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'shape', 'spellcheck', 'value', 'wrap'],
    methods: ['setFocus', 'getInputElement']
  })], IonTextarea);
  return IonTextarea;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonThumbnail = /*#__PURE__*/(() => {
  let IonThumbnail = class IonThumbnail {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonThumbnail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonThumbnail)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonThumbnail,
      selectors: [["ion-thumbnail"]],
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonThumbnail_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonThumbnail = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({})], IonThumbnail);
  return IonThumbnail;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonTitle = /*#__PURE__*/(() => {
  let IonTitle = class IonTitle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTitle,
      selectors: [["ion-title"]],
      inputs: {
        color: "color",
        size: "size"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonTitle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'size']
  })], IonTitle);
  return IonTitle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonToast = /*#__PURE__*/(() => {
  let IonToast = class IonToast {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionToastDidPresent', 'ionToastWillPresent', 'ionToastWillDismiss', 'ionToastDidDismiss', 'didPresent', 'willPresent', 'willDismiss', 'didDismiss']);
    }
    /** @nocollapse */
    static ɵfac = function IonToast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonToast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonToast,
      selectors: [["ion-toast"]],
      inputs: {
        animated: "animated",
        buttons: "buttons",
        color: "color",
        cssClass: "cssClass",
        duration: "duration",
        enterAnimation: "enterAnimation",
        header: "header",
        htmlAttributes: "htmlAttributes",
        icon: "icon",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        layout: "layout",
        leaveAnimation: "leaveAnimation",
        message: "message",
        mode: "mode",
        position: "position",
        positionAnchor: "positionAnchor",
        swipeGesture: "swipeGesture",
        translucent: "translucent",
        trigger: "trigger"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonToast_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonToast = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'htmlAttributes', 'icon', 'isOpen', 'keyboardClose', 'layout', 'leaveAnimation', 'message', 'mode', 'position', 'positionAnchor', 'swipeGesture', 'translucent', 'trigger'],
    methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
  })], IonToast);
  return IonToast;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonToggle = /*#__PURE__*/(() => {
  let IonToggle = class IonToggle {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
      proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
    /** @nocollapse */
    static ɵfac = function IonToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonToggle,
      selectors: [["ion-toggle"]],
      inputs: {
        alignment: "alignment",
        checked: "checked",
        color: "color",
        disabled: "disabled",
        enableOnOffLabels: "enableOnOffLabels",
        errorText: "errorText",
        helperText: "helperText",
        justify: "justify",
        labelPlacement: "labelPlacement",
        mode: "mode",
        name: "name",
        required: "required",
        value: "value"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonToggle = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['alignment', 'checked', 'color', 'disabled', 'enableOnOffLabels', 'errorText', 'helperText', 'justify', 'labelPlacement', 'mode', 'name', 'required', 'value']
  })], IonToggle);
  return IonToggle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonToolbar = /*#__PURE__*/(() => {
  let IonToolbar = class IonToolbar {
    z;
    el;
    constructor(c, r, z) {
      this.z = z;
      c.detach();
      this.el = r.nativeElement;
    }
    /** @nocollapse */
    static ɵfac = function IonToolbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonToolbar,
      selectors: [["ion-toolbar"]],
      inputs: {
        color: "color",
        mode: "mode"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonToolbar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
  IonToolbar = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([ProxyCmp({
    inputs: ['color', 'mode']
  })], IonToolbar);
  return IonToolbar;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
let IonRouterOutlet = /*#__PURE__*/(() => {
  class IonRouterOutlet extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet {
    parentOutlet;
    /**
     * `static: true` must be set so the query results are resolved
     * before change detection runs. Otherwise, the view container
     * ref will be ion-router-outlet instead of ng-container, and
     * the first view will be added as a sibling of ion-router-outlet
     * instead of a child.
     */
    outletContent;
    /**
     * We need to pass in the correct instance of IonRouterOutlet
     * otherwise parentOutlet will be null in a nested outlet context.
     * This results in APIs such as NavController.pop not working
     * in nested outlets because the parent outlet cannot be found.
     */
    constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
      super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
      this.parentOutlet = parentOutlet;
    }
    /** @nocollapse */
    static ɵfac = function IonRouterOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonRouterOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('name'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabs'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.L), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.t), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.x), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IonRouterOutlet, 12));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonRouterOutlet,
      selectors: [["ion-router-outlet"]],
      viewQuery: function IonRouterOutlet_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outletContent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [["outletContent", ""]],
      template: function IonRouterOutlet_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      },
      encapsulation: 2
    });
  }
  return IonRouterOutlet;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// eslint-disable-next-line @angular-eslint/component-class-suffix
let IonTabs = /*#__PURE__*/(() => {
  class IonTabs extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonTabs {
    outlet;
    tabBar;
    tabBars;
    tabs;
    /** @nocollapse */
    static ɵfac = /* @__PURE__ */(() => {
      let ɵIonTabs_BaseFactory;
      return function IonTabs_Factory(__ngFactoryType__) {
        return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonTabs)))(__ngFactoryType__ || IonTabs);
      };
    })();
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonTabs,
      selectors: [["ion-tabs"]],
      contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, IonTabBar, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, IonTabBar, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, IonTab, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabBars = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        }
      },
      viewQuery: function IonTabs_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, IonRouterOutlet);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c4,
      decls: 6,
      vars: 2,
      consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
      template: function IonTabs_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.I, IonRouterOutlet],
      styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
    });
  }
  return IonTabs;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
let IonBackButton = /*#__PURE__*/(() => {
  class IonBackButton extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonBackButton {
    constructor(routerOutlet, navCtrl, config, r, z, c) {
      super(routerOutlet, navCtrl, config, r, z, c);
    }
    /** @nocollapse */
    static ɵfac = function IonBackButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonBackButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IonRouterOutlet, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonBackButton,
      selectors: [["ion-back-button"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonBackButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return IonBackButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// eslint-disable-next-line @angular-eslint/directive-class-suffix
let IonNav = /*#__PURE__*/(() => {
  class IonNav extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonNav {
    constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
      super(ref, environmentInjector, injector, angularDelegate, z, c);
    }
    /** @nocollapse */
    static ɵfac = function IonNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.AngularDelegate), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonNav,
      selectors: [["ion-nav"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IonNav_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return IonNav;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Adds support for Ionic routing directions and animations to the base Angular router link directive.
 *
 * When the router link is clicked, the directive will assign the direction and
 * animation so that the routing integration will transition correctly.
 */
let RouterLinkDelegateDirective = /*#__PURE__*/(() => {
  class RouterLinkDelegateDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegateDirective {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵRouterLinkDelegateDirective_BaseFactory;
      return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
        return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RouterLinkDelegateDirective)))(__ngFactoryType__ || RouterLinkDelegateDirective);
      };
    })();
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RouterLinkDelegateDirective,
      selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return RouterLinkDelegateDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RouterLinkWithHrefDelegateDirective = /*#__PURE__*/(() => {
  class RouterLinkWithHrefDelegateDirective extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHrefDelegateDirective {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
      return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
        return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || RouterLinkWithHrefDelegateDirective);
      };
    })();
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RouterLinkWithHrefDelegateDirective,
      selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return RouterLinkWithHrefDelegateDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonModal = /*#__PURE__*/(() => {
  class IonModal extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonModal {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵIonModal_BaseFactory;
      return function IonModal_Factory(__ngFactoryType__) {
        return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonModal)))(__ngFactoryType__ || IonModal);
      };
    })();
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonModal,
      selectors: [["ion-modal"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
      template: function IonModal_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IonModal_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.I, _angular_common__WEBPACK_IMPORTED_MODULE_9__.S],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return IonModal;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IonPopover = /*#__PURE__*/(() => {
  class IonPopover extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.IonPopover {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵIonPopover_BaseFactory;
      return function IonPopover_Factory(__ngFactoryType__) {
        return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonPopover)))(__ngFactoryType__ || IonPopover);
      };
    })();
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IonPopover,
      selectors: [["ion-popover"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function IonPopover_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.I, _angular_common__WEBPACK_IMPORTED_MODULE_9__.S],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return IonPopover;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @description
 * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const ION_MAX_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => IonMaxValidator),
  multi: true
};
// eslint-disable-next-line @angular-eslint/directive-class-suffix
let IonMaxValidator = /*#__PURE__*/(() => {
  class IonMaxValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵIonMaxValidator_BaseFactory;
      return function IonMaxValidator_Factory(__ngFactoryType__) {
        return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonMaxValidator)))(__ngFactoryType__ || IonMaxValidator);
      };
    })();
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IonMaxValidator,
      selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", ctx._enabled ? ctx.max : null);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ION_MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return IonMaxValidator;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @description
 * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const ION_MIN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => IonMinValidator),
  multi: true
};
// eslint-disable-next-line @angular-eslint/directive-class-suffix
let IonMinValidator = /*#__PURE__*/(() => {
  class IonMinValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator {
    /** @nocollapse */static ɵfac = /* @__PURE__ */(() => {
      let ɵIonMinValidator_BaseFactory;
      return function IonMinValidator_Factory(__ngFactoryType__) {
        return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IonMinValidator)))(__ngFactoryType__ || IonMinValidator);
      };
    })();
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IonMinValidator,
      selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("min", ctx._enabled ? ctx.min : null);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ION_MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return IonMinValidator;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AlertController = /*#__PURE__*/(() => {
  class AlertController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.alertController);
    }
    /** @nocollapse */
    static ɵfac = function AlertController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AlertController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertController,
      factory: AlertController.ɵfac,
      providedIn: 'root'
    });
  }
  return AlertController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AnimationController = /*#__PURE__*/(() => {
  class AnimationController {
    /**
     * Create a new animation
     */
    create(animationId) {
      return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_2__.createAnimation)(animationId);
    }
    /**
     * EXPERIMENTAL
     *
     * Given a progression and a cubic bezier function,
     * this utility returns the time value(s) at which the
     * cubic bezier reaches the given time progression.
     *
     * If the cubic bezier never reaches the progression
     * the result will be an empty array.
     *
     * This is most useful for switching between easing curves
     * when doing a gesture animation (i.e. going from linear easing
     * during a drag, to another easing when `progressEnd` is called)
     */
    easingTime(p0, p1, p2, p3, progression) {
      return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_2__.getTimeGivenProgression)(p0, p1, p2, p3, progression);
    }
    /** @nocollapse */
    static ɵfac = function AnimationController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnimationController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnimationController,
      factory: AnimationController.ɵfac,
      providedIn: 'root'
    });
  }
  return AnimationController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ActionSheetController = /*#__PURE__*/(() => {
  class ActionSheetController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.actionSheetController);
    }
    /** @nocollapse */
    static ɵfac = function ActionSheetController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ActionSheetController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActionSheetController,
      factory: ActionSheetController.ɵfac,
      providedIn: 'root'
    });
  }
  return ActionSheetController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GestureController = /*#__PURE__*/(() => {
  class GestureController {
    zone;
    constructor(zone) {
      this.zone = zone;
    }
    /**
     * Create a new gesture
     */
    create(opts, runInsideAngularZone = false) {
      if (runInsideAngularZone) {
        Object.getOwnPropertyNames(opts).forEach(key => {
          if (typeof opts[key] === 'function') {
            const fn = opts[key];
            opts[key] = (...props) => this.zone.run(() => fn(...props));
          }
        });
      }
      return (0,_ionic_core__WEBPACK_IMPORTED_MODULE_2__.createGesture)(opts);
    }
    /** @nocollapse */
    static ɵfac = function GestureController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GestureController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GestureController,
      factory: GestureController.ɵfac,
      providedIn: 'root'
    });
  }
  return GestureController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LoadingController = /*#__PURE__*/(() => {
  class LoadingController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.loadingController);
    }
    /** @nocollapse */
    static ɵfac = function LoadingController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoadingController,
      factory: LoadingController.ɵfac,
      providedIn: 'root'
    });
  }
  return LoadingController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenuController = /*#__PURE__*/(() => {
  class MenuController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.MenuController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.menuController);
    }
    /** @nocollapse */
    static ɵfac = function MenuController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenuController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuController,
      factory: MenuController.ɵfac,
      providedIn: 'root'
    });
  }
  return MenuController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ModalController = /*#__PURE__*/(() => {
  class ModalController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    angularDelegate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.AngularDelegate);
    injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.modalController);
    }
    create(opts) {
      return super.create({
        ...opts,
        delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'modal')
      });
    }
    /** @nocollapse */
    static ɵfac = function ModalController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalController,
      factory: ModalController.ɵfac
    });
  }
  return ModalController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated Use the inline ion-picker component instead.
 */
let PickerController = /*#__PURE__*/(() => {
  class PickerController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.pickerController);
    }
    /** @nocollapse */
    static ɵfac = function PickerController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PickerController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PickerController,
      factory: PickerController.ɵfac,
      providedIn: 'root'
    });
  }
  return PickerController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class PopoverController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
  angularDelegate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.AngularDelegate);
  injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
  environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EnvironmentInjector);
  constructor() {
    super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.popoverController);
  }
  create(opts) {
    return super.create({
      ...opts,
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, 'popover')
    });
  }
}
let ToastController = /*#__PURE__*/(() => {
  class ToastController extends _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.OverlayBaseController {
    constructor() {
      super(_ionic_core__WEBPACK_IMPORTED_MODULE_2__.toastController);
    }
    /** @nocollapse */
    static ɵfac = function ToastController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ToastController)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ToastController,
      factory: ToastController.ɵfac,
      providedIn: 'root'
    });
  }
  return ToastController;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(FW-2827): types
const appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== 'undefined') {
      (0,_ionic_core__WEBPACK_IMPORTED_MODULE_2__.setupConfig)({
        ...config,
        _zoneGate: h => zone.run(h)
      });
      const aelFn = '__zone_symbol__addEventListener' in doc.body ? '__zone_symbol__addEventListener' : 'addEventListener';
      return (0,_ionic_core_loader__WEBPACK_IMPORTED_MODULE_3__.applyPolyfills)().then(() => {
        return (0,_ionic_core_loader__WEBPACK_IMPORTED_MODULE_3__.defineCustomElements)(win, {
          exclude: ['ion-tabs'],
          syncQueue: true,
          raf: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.raf,
          jmp: h => zone.runOutsideAngular(h),
          ael(elm, eventName, cb, opts) {
            elm[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          }
        });
      });
    }
  };
};
const DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
const DECLARATIONS = [
// generated proxies
...DIRECTIVES,
// manual proxies
IonModal, IonPopover,
// ngModel accessors
BooleanValueAccessorDirective, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective,
// navigation
IonTabs, IonRouterOutlet, IonBackButton, IonNav, RouterLinkDelegateDirective, RouterLinkWithHrefDelegateDirective,
// validators
IonMinValidator, IonMaxValidator];
let IonicModule = /*#__PURE__*/(() => {
  class IonicModule {
    static forRoot(config = {}) {
      return {
        ngModule: IonicModule,
        providers: [{
          provide: _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ConfigToken,
          useValue: config
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.ConfigToken, _angular_common__WEBPACK_IMPORTED_MODULE_10__.D, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone]
        }, _ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.AngularDelegate, (0,_ionic_angular_common__WEBPACK_IMPORTED_MODULE_1__.provideComponentInputBinding)()]
      };
    }
    /** @nocollapse */
    static ɵfac = function IonicModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonicModule)();
    };
    /** @nocollapse */
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IonicModule
    });
    /** @nocollapse */
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [ModalController, PopoverController],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.D]
    });
  }
  return IonicModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// DIRECTIVES

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1701:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/config-49c88215.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ENABLE_HTML_CONTENT_DEFAULT),
/* harmony export */   I: () => (/* binding */ IonicSafeString),
/* harmony export */   a: () => (/* binding */ sanitizeDOMString),
/* harmony export */   g: () => (/* binding */ getMode),
/* harmony export */   s: () => (/* binding */ setupConfig)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = untrustedString => {
  try {
    if (untrustedString instanceof IonicSafeString) {
      return untrustedString.value;
    }
    if (!isSanitizerEnabled() || typeof untrustedString !== 'string' || untrustedString === '') {
      return untrustedString;
    }
    /**
     * onload is fired when appending to a document
     * fragment in Chrome. If a string
     * contains onload then we should not
     * attempt to add this to the fragment.
     */
    if (untrustedString.includes('onload=')) {
      return '';
    }
    /**
     * Create a document fragment
     * separate from the main DOM,
     * create a div to do our work in
     */
    const documentFragment = document.createDocumentFragment();
    const workingDiv = document.createElement('div');
    documentFragment.appendChild(workingDiv);
    workingDiv.innerHTML = untrustedString;
    /**
     * Remove any elements
     * that are blocked
     */
    blockedTags.forEach(blockedTag => {
      const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
      for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
        const element = getElementsToRemove[elementIndex];
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        } else {
          documentFragment.removeChild(element);
        }
        /**
         * We still need to sanitize
         * the children of this element
         * as they are left behind
         */
        const childElements = getElementChildren(element);
        /* eslint-disable-next-line */
        for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
          sanitizeElement(childElements[childIndex]);
        }
      }
    });
    /**
     * Go through remaining elements and remove
     * non-allowed attribs
     */
    // IE does not support .children on document fragments, only .childNodes
    const dfChildren = getElementChildren(documentFragment);
    /* eslint-disable-next-line */
    for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
      sanitizeElement(dfChildren[childIndex]);
    }
    // Append document fragment to div
    const fragmentDiv = document.createElement('div');
    fragmentDiv.appendChild(documentFragment);
    // First child is always the div we did our work in
    const getInnerDiv = fragmentDiv.querySelector('div');
    return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
  } catch (err) {
    console.error(err);
    return '';
  }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
// TODO(FW-2832): type (using Element triggers other type errors as well)
const sanitizeElement = element => {
  // IE uses childNodes, so ignore nodes that are not elements
  if (element.nodeType && element.nodeType !== 1) {
    return;
  }
  /**
   * If attributes is not a NamedNodeMap
   * then we should remove the element entirely.
   * This helps avoid DOM Clobbering attacks where
   * attributes is overridden.
   */
  if (typeof NamedNodeMap !== 'undefined' && !(element.attributes instanceof NamedNodeMap)) {
    element.remove();
    return;
  }
  for (let i = element.attributes.length - 1; i >= 0; i--) {
    const attribute = element.attributes.item(i);
    const attributeName = attribute.name;
    // remove non-allowed attribs
    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
      element.removeAttribute(attributeName);
      continue;
    }
    // clean up any allowed attribs
    // that attempt to do any JS funny-business
    const attributeValue = attribute.value;
    /**
     * We also need to check the property value
     * as javascript: can allow special characters
     * such as &Tab; and still be valid (i.e. java&Tab;script)
     */
    const propertyValue = element[attributeName];
    /* eslint-disable */
    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:') || propertyValue != null && propertyValue.toLowerCase().includes('javascript:')) {
      element.removeAttribute(attributeName);
    }
    /* eslint-enable */
  }
  /**
   * Sanitize any nested children
   */
  const childElements = getElementChildren(element);
  /* eslint-disable-next-line */
  for (let i = 0; i < childElements.length; i++) {
    sanitizeElement(childElements[i]);
  }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
// TODO(FW-2832): type
const getElementChildren = el => {
  return el.children != null ? el.children : el.childNodes;
};
const isSanitizerEnabled = () => {
  var _a;
  const win = window;
  const config = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
  if (config) {
    if (config.get) {
      return config.get('sanitizerEnabled', true);
    } else {
      return config.sanitizerEnabled === true || config.sanitizerEnabled === undefined;
    }
  }
  return true;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
class IonicSafeString {
  constructor(value) {
    this.value = value;
  }
}
const setupConfig = config => {
  const win = window;
  const Ionic = win.Ionic;
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  var _a;
  const win = window;
  const config = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    } else {
      return config.get('mode');
    }
  }
  return 'md';
};
const ENABLE_HTML_CONTENT_DEFAULT = false;


/***/ }),

/***/ 1839:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/app-globals-7b6cbf1a.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ globalScripts)
/* harmony export */ });
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const globalScripts = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_0__.i;


/***/ }),

/***/ 1865:
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/animation-eab5a4ca.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createAnimation)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

let animationPrefix;
const getAnimationPrefix = el => {
  if (animationPrefix === undefined) {
    const supportsUnprefixed = el.style.animationName !== undefined;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== undefined;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? '-webkit-' : '';
  }
  return animationPrefix;
};
const setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.setProperty(prefix + propertyName, value);
};
const addClassToArray = (classes = [], className) => {
  if (className !== undefined) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
const createAnimation = animationId => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === 'function' || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined && typeof _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.w.AnimationEffect === 'function';
  /**
   * This is a feature detection for Web Animations.
   *
   * Certain environments such as emulated browser environments for testing,
   * do not support Web Animations. As a result, we need to check for support
   * and provide a fallback to test certain functionality related to Web Animations.
   */
  const supportsWebAnimations = typeof Element === 'function' && typeof Element.prototype.animate === 'function' && supportsAnimationEffect;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = clearStyleSheets => {
    childAnimations.forEach(childAnimation => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  /**
   * Cancels any Web Animations, removes
   * any animation properties from the
   * animation's elements, and removes the
   * animation's stylesheets from the DOM.
   */
  const cleanUp = clearStyleSheets => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = undefined;
    forceDurationValue = undefined;
    forceDelayValue = undefined;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  /**
   * @internal
   * Remove a callback from a chosen callback array
   * @param callbackToRemove: A reference to the callback that should be removed
   * @param callbackObjects: An array of callbacks that callbackToRemove should be removed from.
   */
  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex(callbackObject => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  /**
   * @internal
   * Add a callback to be fired when an animation is stopped/cancelled.
   * @param callback: A reference to the callback that should be fired
   * @param opts: Any options associated with this particular callback
   */
  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  /**
   * Cancels any Web Animations and removes
   * any animation properties from the
   * the animation's elements.
   */
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        animation.cancel();
      });
      webAnimations.length = 0;
    }
  };
  /**
   * Removes the animation's stylesheets
   * from the DOM.
   */
  const cleanUpStyleSheets = () => {
    stylesheets.forEach(stylesheet => {
      /**
       * When sharing stylesheets, it's possible
       * for another animation to have already
       * cleaned up a particular stylesheet
       */
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = readFn => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = writeFn => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = readFn => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = writeFn => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = className => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = className => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  /**
   * Set CSS inline styles to the animation's
   * elements before the animation begins.
   */
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  /**
   * Clear CSS inline styles from the animation's
   * elements before the animation begins.
   */
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = '';
    }
    return ani;
  };
  const afterAddClass = className => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = className => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = '';
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== undefined) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return 'both';
  };
  const getDirection = () => {
    if (forceDirectionValue !== undefined) {
      return forceDirectionValue;
    }
    if (_direction !== undefined) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return 'normal';
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return 'linear';
    }
    if (_easing !== undefined) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return 'linear';
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== undefined) {
      return forceDurationValue;
    }
    if (_duration !== undefined) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== undefined) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== undefined) {
      return forceDelayValue;
    }
    if (_delay !== undefined) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = animationDirection => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = animationFill => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = animationDelay => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = animationEasing => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = animationDuration => {
    /**
     * CSS Animation Durations of 0ms work fine on Chrome
     * but do not run on Safari, so force it to 1ms to
     * get it to run on both platforms.
     */
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = animationIterations => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = animation => {
    parentAnimation = animation;
    return ani;
  };
  const addElement = el => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        console.error('Invalid addElement value');
      }
    }
    return ani;
  };
  const addAnimation = animationToAdd => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = keyframeValues => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = keyframeValues => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach(animation => {
        /**
         * animation.effect's type is AnimationEffect.
         * However, in this case we have a more specific
         * type of AnimationEffect called KeyframeEffect which
         * inherits from AnimationEffect. As a result,
         * we cast animation.effect to KeyframeEffect.
         */
        const keyframeEffect = animation.effect;
        /**
         * setKeyframes is not supported in all browser
         * versions that Ionic supports, so we need to
         * check for support before using it.
         */
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
        }
      });
    }
  };
  /**
   * Run all "before" animation hooks.
   */
  const beforeAnimation = () => {
    // Runs all before read callbacks
    _beforeAddReadFunctions.forEach(callback => callback());
    // Runs all before write callbacks
    _beforeAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation runs
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  /**
   * Run all "after" animation hooks.
   */
  const afterAnimation = () => {
    // Runs all after read callbacks
    _afterAddReadFunctions.forEach(callback => callback());
    // Runs all after write callbacks
    _afterAddWriteFunctions.forEach(callback => callback());
    // Updates styles and classes before animation ends
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));
      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    /**
     * Clean up any value coercion before
     * the user callbacks fire otherwise
     * they may get stale values. For example,
     * if someone calls progressStart(0) the
     * animation may still be reversed.
     */
    forceDurationValue = undefined;
    forceDirectionValue = undefined;
    forceDelayValue = undefined;
    onFinishCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeWebAnimation = () => {
    elements.forEach(element => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = () => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  };
  const setAnimationStep = step => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        // When creating the animation the delay is guaranteed to be set to a number.
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    }
  };
  const updateWebAnimation = step => {
    webAnimations.forEach(animation => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== undefined) {
      setAnimationStep(step);
    }
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach(animation => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach(animation => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = step => {
    childAnimations.forEach(animation => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach(animation => {
      animation.progressEnd(playTo, step, dur);
    });
    if (dur !== undefined) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === 'reverse' ? 'normal' : 'reverse';
      if (forceDirectionValue === 'reverse') {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== undefined && !parentAnimation) {
      play();
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach(animation => {
          animation.pause();
        });
      } else {
        elements.forEach(element => {
          setStyleProperty(element, 'animation-play-state', 'paused');
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach(animation => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach(animation => {
      animation.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  };
  const play = opts => {
    return new Promise(resolve => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, {
          oneTimeCallback: true
        });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      /**
       * When one of these callbacks fires we
       * need to clear the other's callback otherwise
       * you can potentially get these callbacks
       * firing multiple times if the play method
       * is subsequently called.
       * Example:
       * animation.play() (onStop and onFinish callbacks are registered)
       * animation.stop() (onStop callback is fired, onFinish is not)
       * animation.play() (onStop and onFinish callbacks are registered)
       * Total onStop callbacks: 1
       * Total onFinish callbacks: 2
       */
      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };
      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      /**
       * The play method resolves when an animation
       * run either finishes or is cancelled.
       */
      onFinish(onFinishCallback, {
        oneTimeCallback: true
      });
      onStop(onStopCallback, {
        oneTimeCallback: true
      });
      childAnimations.forEach(animation => {
        animation.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  /**
   * Stops an animation and resets it state to the
   * beginning. This does not fire any onFinish
   * callbacks because the animation did not finish.
   * However, since the animation was not destroyed
   * (i.e. the animation could run again) we do not
   * clear the onFinish callbacks.
   */
  const stop = () => {
    childAnimations.forEach(animation => {
      animation.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach(onStopCallback => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== undefined && (firstFrame.offset === undefined || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{
        offset: 0,
        [property]: value
      }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== undefined && (lastFrame.offset === undefined || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, {
        offset: 1,
        [property]: value
      }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};


/***/ }),

/***/ 1882:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-01f3f29c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   g: () => (/* binding */ getClassMap),
/* harmony export */   h: () => (/* binding */ hostContext),
/* harmony export */   o: () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ 2738:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-fe2083dc.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getTimeGivenProgression)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 */
/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(tValue => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};
const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
};


/***/ }),

/***/ 2976:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-39782642.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GESTURE_CONTROLLER: () => (/* reexport safe */ _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   createGesture: () => (/* binding */ createGesture)
/* harmony export */ });
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 6611);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const addEventListener = (el,
// TODO(FW-2832): type
eventName, callback, opts) => {
  // use event listener options when supported
  // otherwise it's just a boolean for the "capture" arg
  const listenerOpts = supportsPassive(el) ? {
    capture: !!opts.capture,
    passive: !!opts.passive
  } : !!opts.capture;
  let add;
  let remove;
  if (el['__zone_symbol__addEventListener']) {
    add = '__zone_symbol__addEventListener';
    remove = '__zone_symbol__removeEventListener';
  } else {
    add = 'addEventListener';
    remove = 'removeEventListener';
  }
  el[add](eventName, callback, listenerOpts);
  return () => {
    el[remove](eventName, callback, listenerOpts);
  };
};
const supportsPassive = node => {
  if (_sPassive === undefined) {
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          _sPassive = true;
        }
      });
      node.addEventListener('optsTest', () => {
        return;
      }, opts);
    } catch (e) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
let _sPassive;
const MOUSE_WAIT = 2000;
// TODO(FW-2832): types
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
  let rmTouchStart;
  let rmTouchMove;
  let rmTouchEnd;
  let rmTouchCancel;
  let rmMouseStart;
  let rmMouseMove;
  let rmMouseUp;
  let lastTouchEvent = 0;
  const handleTouchStart = ev => {
    lastTouchEvent = Date.now() + MOUSE_WAIT;
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmTouchMove && pointerMove) {
      rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
    }
    /**
     * Events are dispatched on the element that is tapped and bubble up to
     * the reference element in the gesture. In the event that the element this
     * event was first dispatched on is removed from the DOM, the event will no
     * longer bubble up to our reference element. This leaves the gesture in an
     * unusable state. To account for this, the touchend and touchcancel listeners
     * should be added to the event target so that they still fire even if the target
     * is removed from the DOM.
     */
    if (!rmTouchEnd) {
      rmTouchEnd = addEventListener(ev.target, 'touchend', handleTouchEnd, options);
    }
    if (!rmTouchCancel) {
      rmTouchCancel = addEventListener(ev.target, 'touchcancel', handleTouchEnd, options);
    }
  };
  const handleMouseDown = ev => {
    if (lastTouchEvent > Date.now()) {
      return;
    }
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmMouseMove && pointerMove) {
      rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
    }
    if (!rmMouseUp) {
      rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
    }
  };
  const handleTouchEnd = ev => {
    stopTouch();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const handleMouseUp = ev => {
    stopMouse();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const stopTouch = () => {
    if (rmTouchMove) {
      rmTouchMove();
    }
    if (rmTouchEnd) {
      rmTouchEnd();
    }
    if (rmTouchCancel) {
      rmTouchCancel();
    }
    rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
  };
  const stopMouse = () => {
    if (rmMouseMove) {
      rmMouseMove();
    }
    if (rmMouseUp) {
      rmMouseUp();
    }
    rmMouseMove = rmMouseUp = undefined;
  };
  const stop = () => {
    stopTouch();
    stopMouse();
  };
  const enable = (isEnabled = true) => {
    if (!isEnabled) {
      if (rmTouchStart) {
        rmTouchStart();
      }
      if (rmMouseStart) {
        rmMouseStart();
      }
      rmTouchStart = rmMouseStart = undefined;
      stop();
    } else {
      if (!rmTouchStart) {
        rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
      }
      if (!rmMouseStart) {
        rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
      }
    }
  };
  const destroy = () => {
    enable(false);
    pointerUp = pointerMove = pointerDown = undefined;
  };
  return {
    enable,
    stop,
    destroy
  };
};
const getDocument = node => {
  return node instanceof Document ? node : node.ownerDocument;
};
const createPanRecognizer = (direction, thresh, maxAngle) => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === 'x';
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;
  let startX = 0;
  let startY = 0;
  let dirty = false;
  let isPan = 0;
  return {
    start(x, y) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },
    detect(x, y) {
      if (!dirty) {
        return false;
      }
      const deltaX = x - startX;
      const deltaY = y - startY;
      const distance = deltaX * deltaX + deltaY * deltaY;
      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);
      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
      if (cosine > maxCosine) {
        isPan = 1;
      } else if (cosine < -maxCosine) {
        isPan = -1;
      } else {
        isPan = 0;
      }
      dirty = false;
      return true;
    },
    isGesture() {
      return isPan !== 0;
    },
    getDirection() {
      return isPan;
    }
  };
};

// TODO(FW-2832): types
const createGesture = config => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;
  const finalConfig = Object.assign({
    disableScroll: false,
    direction: 'x',
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10
  }, config);
  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  const blurOnStart = finalConfig.blurOnStart;
  const detail = {
    type: 'pan',
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: undefined,
    data: undefined
  };
  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_0__.G.createGesture({
    name: config.gestureName,
    priority: config.gesturePriority,
    disableScroll: config.disableScroll
  });
  const pointerDown = ev => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }
    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;
    // Check if gesture can start
    if (canStart && canStart(detail) === false) {
      return false;
    }
    // Release fallback
    gesture.release();
    // Start gesture
    if (!gesture.start()) {
      return false;
    }
    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };
  const pointerMove = ev => {
    // fast path, if gesture is currently captured
    // do minimum job to get user-land even dispatched
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }
    // gesture is currently being detected
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };
  const fireOnMove = () => {
    // Since fireOnMove is called inside a RAF, onEnd() might be called,
    // we must double check hasCapturedPan
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };
  const tryToCapturePan = () => {
    if (!gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;
    // reset start position since the real user-land event starts here
    // If the pan detector threshold is big, not resetting the start position
    // will cause a jump in the animation equal to the detector threshold.
    // the array of positions used to calculate the gesture velocity does not
    // need to be cleaned, more points in the positions array always results in a
    // more accurate value of the velocity.
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;
    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    } else {
      fireOnStart();
    }
    return true;
  };
  const blurActiveElement = () => {
    if (typeof document !== 'undefined') {
      const activeElement = document.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) {
        activeElement.blur();
      }
    }
  };
  const fireOnStart = () => {
    if (blurOnStart) {
      blurActiveElement();
    }
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };
  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;
    gesture.release();
  };
  // END *************************
  const pointerUp = ev => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();
    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);
    // Try to capture press
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }
    // Not captured any event
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
    capture: false,
    passive
  });
  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(undefined);
        }
        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    }
  };
};
const calcGestureData = (detail, ev) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  updateDetail(ev, detail);
  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};
const updateDetail = (ev, detail) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (ev.pageX !== undefined) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};
const now = ev => {
  return ev.timeStamp || Date.now();
};


/***/ }),

/***/ 3920:
/*!****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IonicSafeString: () => (/* reexport safe */ _config_49c88215_js__WEBPACK_IMPORTED_MODULE_8__.I),
/* harmony export */   IonicSlides: () => (/* binding */ IonicSlides),
/* harmony export */   LIFECYCLE_DID_ENTER: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   LIFECYCLE_DID_LEAVE: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   LIFECYCLE_WILL_ENTER: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   LIFECYCLE_WILL_LEAVE: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   LIFECYCLE_WILL_UNLOAD: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   actionSheetController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.b),
/* harmony export */   alertController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.a),
/* harmony export */   componentOnReady: () => (/* reexport safe */ _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_7__.c),
/* harmony export */   createAnimation: () => (/* reexport safe */ _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   createGesture: () => (/* reexport safe */ _index_39782642_js__WEBPACK_IMPORTED_MODULE_5__.createGesture),
/* harmony export */   getIonPageElement: () => (/* reexport safe */ _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   getMode: () => (/* reexport safe */ _config_49c88215_js__WEBPACK_IMPORTED_MODULE_8__.g),
/* harmony export */   getPlatforms: () => (/* reexport safe */ _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_6__.g),
/* harmony export */   getTimeGivenProgression: () => (/* reexport safe */ _cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_4__.g),
/* harmony export */   initialize: () => (/* reexport safe */ _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_6__.i),
/* harmony export */   iosTransitionAnimation: () => (/* reexport safe */ _ios_transition_7fe5dbea_js__WEBPACK_IMPORTED_MODULE_2__.iosTransitionAnimation),
/* harmony export */   isPlatform: () => (/* reexport safe */ _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_6__.a),
/* harmony export */   loadingController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.l),
/* harmony export */   mdTransitionAnimation: () => (/* reexport safe */ _md_transition_8dc58b46_js__WEBPACK_IMPORTED_MODULE_3__.mdTransitionAnimation),
/* harmony export */   menuController: () => (/* reexport safe */ _index_f9f5d018_js__WEBPACK_IMPORTED_MODULE_10__.m),
/* harmony export */   modalController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.m),
/* harmony export */   openURL: () => (/* reexport safe */ _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_9__.o),
/* harmony export */   pickerController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.p),
/* harmony export */   popoverController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.c),
/* harmony export */   setupConfig: () => (/* reexport safe */ _config_49c88215_js__WEBPACK_IMPORTED_MODULE_8__.s),
/* harmony export */   toastController: () => (/* reexport safe */ _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__.t)
/* harmony export */ });
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 1865);
/* harmony import */ var _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ecb55b8d.js */ 4223);
/* harmony import */ var _ios_transition_7fe5dbea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ios.transition-7fe5dbea.js */ 4354);
/* harmony import */ var _md_transition_8dc58b46_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md.transition-8dc58b46.js */ 9223);
/* harmony import */ var _cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cubic-bezier-fe2083dc.js */ 2738);
/* harmony import */ var _index_39782642_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-39782642.js */ 2976);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _config_49c88215_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-49c88215.js */ 1701);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 1882);
/* harmony import */ var _index_f9f5d018_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-f9f5d018.js */ 9772);
/* harmony import */ var _overlays_41a5d51b_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays-41a5d51b.js */ 7877);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 6611);
/* harmony import */ var _hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hardware-back-button-864101a3.js */ 284);
/* harmony import */ var _framework_delegate_2eea1763_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./framework-delegate-2eea1763.js */ 9199);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


















const IonicSlides = opts => {
  const {
    swiper,
    extendParams
  } = opts;
  const slidesParams = {
    effect: undefined,
    direction: 'horizontal',
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: 'container',
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide'
    }
  };
  if (swiper.pagination) {
    slidesParams.pagination = {
      type: 'bullets',
      clickable: false,
      hideOnClick: false
    };
  }
  if (swiper.scrollbar) {
    slidesParams.scrollbar = {
      hide: true
    };
  }
  extendParams(slidesParams);
};


/***/ }),

/***/ 4223:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-ecb55b8d.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ LIFECYCLE_WILL_ENTER),
/* harmony export */   a: () => (/* binding */ LIFECYCLE_DID_ENTER),
/* harmony export */   b: () => (/* binding */ LIFECYCLE_WILL_LEAVE),
/* harmony export */   c: () => (/* binding */ LIFECYCLE_DID_LEAVE),
/* harmony export */   d: () => (/* binding */ LIFECYCLE_WILL_UNLOAD),
/* harmony export */   e: () => (/* binding */ _deepReady),
/* harmony export */   g: () => (/* binding */ getIonPageElement),
/* harmony export */   l: () => (/* binding */ lifecycle),
/* harmony export */   s: () => (/* binding */ setPageHidden),
/* harmony export */   t: () => (/* binding */ transition),
/* harmony export */   w: () => (/* binding */ waitForMount)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

/**
 * Moves focus to a specified element. Note that we do not remove the tabindex
 * because that can result in an unintentional blur. Non-focusables can't be
 * focused, so the body will get focused again.
 */
const moveFocus = el => {
  el.tabIndex = -1;
  el.focus();
};
/**
 * Elements that are hidden using `display: none` should not be focused even if
 * they are present in the DOM.
 */
const isVisible = el => {
  return el.offsetParent !== null;
};
/**
 * The focus controller allows us to manage focus within a view so assistive
 * technologies can inform users of changes to the navigation state. Traditional
 * native apps have a way of informing assistive technology about a navigation
 * state change. Mobile browsers have this too, but only when doing a full page
 * load. In a single page app we do not do that, so we need to build this
 * integration ourselves.
 */
const createFocusController = () => {
  const saveViewFocus = referenceEl => {
    const focusManagerEnabled = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_1__.c.get('focusManagerPriority', false);
    /**
     * When going back to a previously visited page focus should typically be moved
     * back to the element that was last focused when the user was on this view.
     */
    if (focusManagerEnabled) {
      const activeEl = document.activeElement;
      if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) {
        activeEl.setAttribute(LAST_FOCUS, 'true');
      }
    }
  };
  const setViewFocus = referenceEl => {
    const focusManagerPriorities = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_1__.c.get('focusManagerPriority', false);
    /**
     * If the focused element is a descendant of the referenceEl then it's possible
     * that the app developer manually moved focus, so we do not want to override that.
     * This can happen with inputs the are focused when a view transitions in.
     */
    if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
      /**
       * When going back to a previously visited view focus should always be moved back
       * to the element that the user was last focused on when they were on this view.
       */
      const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
      if (lastFocus && isVisible(lastFocus)) {
        moveFocus(lastFocus);
        return;
      }
      for (const priority of focusManagerPriorities) {
        /**
         * For each recognized case (excluding the default case) make sure to return
         * so that the fallback focus behavior does not run.
         *
         * We intentionally query for specific roles/semantic elements so that the
         * transition manager can work with both Ionic and non-Ionic UI components.
         *
         * If new selectors are added, be sure to remove the outline ring by adding
         * new selectors to rule in core.scss.
         */
        switch (priority) {
          case 'content':
            const content = referenceEl.querySelector('main, [role="main"]');
            if (content && isVisible(content)) {
              moveFocus(content);
              return;
            }
            break;
          case 'heading':
            const headingOne = referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');
            if (headingOne && isVisible(headingOne)) {
              moveFocus(headingOne);
              return;
            }
            break;
          case 'banner':
            const header = referenceEl.querySelector('header, [role="banner"]');
            if (header && isVisible(header)) {
              moveFocus(header);
              return;
            }
            break;
          default:
            (0,_index_738d7504_js__WEBPACK_IMPORTED_MODULE_3__.p)(`Unrecognized focus manager priority value ${priority}`);
            break;
        }
      }
      /**
       * If there is nothing to focus then focus the page so focus at least moves to
       * the correct view. The browser will then determine where within the page to
       * move focus to.
       */
      moveFocus(referenceEl);
    }
  };
  return {
    saveViewFocus,
    setViewFocus
  };
};
const LAST_FOCUS = 'ion-last-focus';
const iosTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ios.transition-7fe5dbea.js */ 4354));
const mdTransitionAnimation = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./md.transition-8dc58b46.js */ 9223));
const focusController = createFocusController();
// TODO(FW-2832): types
const transition = opts => {
  return new Promise((resolve, reject) => {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_2__.w)(() => {
      beforeTransition(opts);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
const beforeTransition = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  focusController.saveViewFocus(leavingEl);
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  } else {
    enteringEl.classList.remove('can-go-back');
  }
  setPageHidden(enteringEl, false);
  /**
   * When transitioning, the page should not
   * respond to click events. This resolves small
   * issues like users double tapping the ion-back-button.
   * These pointer events are removed in `afterTransition`.
   */
  enteringEl.style.setProperty('pointer-events', 'none');
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty('pointer-events', 'none');
  }
};
const runTransition = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    const animationBuilder = yield getAnimationBuilder(opts);
    const ani = animationBuilder && _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_2__.B.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation
    return ani;
  });
  return function runTransition(_x) {
    return _ref.apply(this, arguments);
  };
}();
const afterTransition = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  enteringEl.style.removeProperty('pointer-events');
  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
    leavingEl.style.removeProperty('pointer-events');
  }
  focusController.setViewFocus(enteringEl);
};
const getAnimationBuilder = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
      return undefined;
    }
    if (opts.animationBuilder) {
      return opts.animationBuilder;
    }
    const getAnimation = opts.mode === 'ios' ? (yield iosTransitionAnimation()).iosTransitionAnimation : (yield mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
  });
  return function getAnimationBuilder(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const animation = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (animationBuilder, opts) {
    yield waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = yield playTransition(trans, opts);
    if (opts.progressCallback) {
      opts.progressCallback(undefined);
    }
    if (didComplete) {
      fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
      hasCompleted: didComplete,
      animation: trans
    };
  });
  return function animation(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
const noAnimation = /*#__PURE__*/function () {
  var _ref4 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const focusManagerEnabled = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_1__.c.get('focusManagerPriority', false);
    /**
     * If the focus manager is enabled then we need to wait for Ionic components to be
     * rendered otherwise the component to focus may not be focused because it is hidden.
     */
    yield waitForReady(opts, focusManagerEnabled);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
      hasCompleted: true
    };
  });
  return function noAnimation(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
const waitForReady = /*#__PURE__*/function () {
  var _ref5 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (opts, defaultDeep) {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    if (deep) {
      yield Promise.all([_deepReady(opts.enteringEl), _deepReady(opts.leavingEl)]);
    }
    yield notifyViewReady(opts.viewIsReady, opts.enteringEl);
  });
  return function waitForReady(_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
const notifyViewReady = /*#__PURE__*/function () {
  var _ref6 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (viewIsReady, enteringEl) {
    if (viewIsReady) {
      yield viewIsReady(enteringEl);
    }
  });
  return function notifyViewReady(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish(currentStep => resolve(currentStep === 1));
  });
  // cool, let's do this, start the transition
  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  }
  // create a callback for when the animation is done
  return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
/**
 * Wait two request animation frame loops.
 * This allows the framework implementations enough time to mount
 * the user-defined contents. This is often needed when using inline
 * modals and popovers that accept user components. For popover,
 * the contents must be mounted for the popover to be sized correctly.
 * For modals, the contents must be mounted for iOS to run the
 * transition correctly.
 *
 * On Angular and React, a single raf is enough time, but for Vue
 * we need to wait two rafs. As a result we are using two rafs for
 * all frameworks to ensure contents are mounted.
 */
const waitForMount = () => {
  return new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => resolve())));
};
const _deepReady = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    const element = el;
    if (element) {
      if (element.componentOnReady != null) {
        // eslint-disable-next-line custom-rules/no-component-on-ready-method
        const stencilEl = yield element.componentOnReady();
        if (stencilEl != null) {
          return;
        }
        /**
         * Custom elements in Stencil will have __registerHost.
         */
      } else if (element.__registerHost != null) {
        /**
         * Non-lazy loaded custom elements need to wait
         * one frame for component to be loaded.
         */
        const waitForCustomElement = new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__.r)(resolve));
        yield waitForCustomElement;
        return;
      }
      yield Promise.all(Array.from(element.children).map(_deepReady));
    }
  });
  return function deepReady(_x10) {
    return _ref7.apply(this, arguments);
  };
}();
const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  } else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
  }
  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};
const getIonPageElement = element => {
  if (element.classList.contains('ion-page')) {
    return element;
  }
  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
};


/***/ }),

/***/ 4354:
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ios.transition-7fe5dbea.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iosTransitionAnimation: () => (/* binding */ iosTransitionAnimation),
/* harmony export */   shadow: () => (/* binding */ shadow)
/* harmony export */ });
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 1865);
/* harmony import */ var _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ecb55b8d.js */ 4223);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const DURATION = 540;
// TODO(FW-2832): types
const getClonedElement = tagName => {
  return document.querySelector(`${tagName}.ion-cloned-element`);
};
const shadow = el => {
  return el.shadowRoot || el;
};
const getLargeTitle = refEl => {
  const tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
  const query = 'ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large';
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    return activeTab != null ? activeTab.querySelector(query) : null;
  }
  return refEl.querySelector(query);
};
const getBackButton = (refEl, backDirection) => {
  const tabs = refEl.tagName === 'ION-TABS' ? refEl : refEl.querySelector('ion-tabs');
  let buttonsList = [];
  if (tabs != null) {
    const activeTab = tabs.querySelector('ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)');
    if (activeTab != null) {
      buttonsList = activeTab.querySelectorAll('ion-buttons');
    }
  } else {
    buttonsList = refEl.querySelectorAll('ion-buttons');
  }
  for (const buttons of buttonsList) {
    const parentHeader = buttons.closest('ion-header');
    const activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
    const backButton = buttons.querySelector('ion-back-button');
    const buttonsCollapse = buttons.classList.contains('buttons-collapse');
    const startSlot = buttons.slot === 'start' || buttons.slot === '';
    if (backButton !== null && startSlot && (buttonsCollapse && activeHeader && backDirection || !buttonsCollapse)) {
      return backButton;
    }
  }
  return null;
};
const createLargeTitleTransition = (rootAnimation, rtl, backDirection, enteringEl, leavingEl) => {
  const enteringBackButton = getBackButton(enteringEl, backDirection);
  const leavingLargeTitle = getLargeTitle(leavingEl);
  const enteringLargeTitle = getLargeTitle(enteringEl);
  const leavingBackButton = getBackButton(leavingEl, backDirection);
  const shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
  const shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
  if (shouldAnimationForward) {
    const leavingLargeTitleBox = leavingLargeTitle.getBoundingClientRect();
    const enteringBackButtonBox = enteringBackButton.getBoundingClientRect();
    const enteringBackButtonTextEl = shadow(enteringBackButton).querySelector('.button-text');
    // Text element not rendered if developers pass text="" to the back button
    const enteringBackButtonTextBox = enteringBackButtonTextEl === null || enteringBackButtonTextEl === void 0 ? void 0 : enteringBackButtonTextEl.getBoundingClientRect();
    const leavingLargeTitleTextEl = shadow(leavingLargeTitle).querySelector('.toolbar-title');
    const leavingLargeTitleTextBox = leavingLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle, leavingLargeTitleBox, leavingLargeTitleTextBox, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton, enteringBackButtonBox, enteringBackButtonTextEl, enteringBackButtonTextBox, leavingLargeTitle, leavingLargeTitleTextBox);
  } else if (shouldAnimationBackward) {
    const enteringLargeTitleBox = enteringLargeTitle.getBoundingClientRect();
    const leavingBackButtonBox = leavingBackButton.getBoundingClientRect();
    const leavingBackButtonTextEl = shadow(leavingBackButton).querySelector('.button-text');
    // Text element not rendered if developers pass text="" to the back button
    const leavingBackButtonTextBox = leavingBackButtonTextEl === null || leavingBackButtonTextEl === void 0 ? void 0 : leavingBackButtonTextEl.getBoundingClientRect();
    const enteringLargeTitleTextEl = shadow(enteringLargeTitle).querySelector('.toolbar-title');
    const enteringLargeTitleTextBox = enteringLargeTitleTextEl.getBoundingClientRect();
    animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle, enteringLargeTitleBox, enteringLargeTitleTextBox, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox);
    animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton, leavingBackButtonBox, leavingBackButtonTextEl, leavingBackButtonTextBox, enteringLargeTitle, enteringLargeTitleTextBox);
  }
  return {
    forward: shouldAnimationForward,
    backward: shouldAnimationBackward
  };
};
const animateBackButton = (rootAnimation, rtl, backDirection, backButtonEl, backButtonBox, backButtonTextEl, backButtonTextBox, largeTitleEl, largeTitleTextBox) => {
  var _a, _b;
  const BACK_BUTTON_START_OFFSET = rtl ? `calc(100% - ${backButtonBox.right + 4}px)` : `${backButtonBox.left - 4}px`;
  const TEXT_ORIGIN_X = rtl ? 'right' : 'left';
  const ICON_ORIGIN_X = rtl ? 'left' : 'right';
  const CONTAINER_ORIGIN_X = rtl ? 'right' : 'left';
  let WIDTH_SCALE = 1;
  let HEIGHT_SCALE = 1;
  let TEXT_START_SCALE = `scale(${HEIGHT_SCALE})`;
  const TEXT_END_SCALE = 'scale(1)';
  if (backButtonTextEl && backButtonTextBox) {
    /**
     * When the title and back button texts match then they should overlap during the
     * page transition. If the texts do not match up then the back button text scale
     * adjusts to not perfectly match the large title text otherwise the proportions
     * will be incorrect. When the texts match we scale both the width and height to
     * account for font weight differences between the title and back button.
     */
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    WIDTH_SCALE = largeTitleTextBox.width / backButtonTextBox.width;
    /**
     * Subtract an offset to account for slight sizing/padding differences between the
     * title and the back button.
     */
    HEIGHT_SCALE = (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET) / backButtonTextBox.height;
    /**
     * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
     * to re-compute this here since the HEIGHT_SCALE may have changed.
     */
    TEXT_START_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  const backButtonIconEl = shadow(backButtonEl).querySelector('ion-icon');
  const backButtonIconBox = backButtonIconEl.getBoundingClientRect();
  /**
   * We need to offset the container by the icon dimensions
   * so that the back button text aligns with the large title
   * text. Otherwise, the back button icon will align with the
   * large title text but the back button text will not.
   */
  const CONTAINER_START_TRANSLATE_X = rtl ? `${backButtonIconBox.width / 2 - (backButtonIconBox.right - backButtonBox.right)}px` : `${backButtonBox.left - backButtonIconBox.width / 2}px`;
  const CONTAINER_END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right}px` : `${backButtonBox.left}px`;
  /**
   * Back button container should be
   * aligned to the top of the title container
   * so the texts overlap as the back button
   * text begins to fade in.
   */
  const CONTAINER_START_TRANSLATE_Y = `${largeTitleTextBox.top}px`;
  /**
   * The cloned back button should align exactly with the
   * real back button on the entering page otherwise there will
   * be a layout shift.
   */
  const CONTAINER_END_TRANSLATE_Y = `${backButtonBox.top}px`;
  /**
   * In the forward direction, the cloned back button
   * container should translate from over the large title
   * to over the back button. In the backward direction,
   * it should translate from over the back button to over
   * the large title.
   */
  const FORWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }];
  const BACKWARD_CONTAINER_KEYFRAMES = [{
    offset: 0,
    transform: `translate3d(${CONTAINER_END_TRANSLATE_X}, ${CONTAINER_END_TRANSLATE_Y}, 0)`
  }, {
    offset: 1,
    transform: `translate3d(${CONTAINER_START_TRANSLATE_X}, ${CONTAINER_START_TRANSLATE_Y}, 0)`
  }];
  const CONTAINER_KEYFRAMES = backDirection ? BACKWARD_CONTAINER_KEYFRAMES : FORWARD_CONTAINER_KEYFRAMES;
  /**
   * In the forward direction, the text in the cloned back button
   * should start to be (roughly) the size of the large title
   * and then scale down to be the size of the actual back button.
   * The text should also translate, but that translate is handled
   * by the container keyframes.
   */
  const FORWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: TEXT_START_SCALE
  }, {
    offset: 1,
    opacity: 1,
    transform: TEXT_END_SCALE
  }];
  const BACKWARD_TEXT_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: TEXT_END_SCALE
  }, {
    offset: 1,
    opacity: 0,
    transform: TEXT_START_SCALE
  }];
  const TEXT_KEYFRAMES = backDirection ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
  /**
   * The icon should scale in/out in the second
   * half of the animation. The icon should also
   * translate, but that translate is handled by the
   * container keyframes.
   */
  const FORWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 0.6,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }];
  const BACKWARD_ICON_KEYFRAMES = [{
    offset: 0,
    opacity: 1,
    transform: 'scale(1)'
  }, {
    offset: 0.2,
    opacity: 0,
    transform: 'scale(0.6)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.6)'
  }];
  const ICON_KEYFRAMES = backDirection ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
  const enteringBackButtonTextAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const enteringBackButtonIconAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const enteringBackButtonAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  const clonedBackButtonEl = getClonedElement('ion-back-button');
  const clonedBackButtonTextEl = shadow(clonedBackButtonEl).querySelector('.button-text');
  const clonedBackButtonIconEl = shadow(clonedBackButtonEl).querySelector('ion-icon');
  clonedBackButtonEl.text = backButtonEl.text;
  clonedBackButtonEl.mode = backButtonEl.mode;
  clonedBackButtonEl.icon = backButtonEl.icon;
  clonedBackButtonEl.color = backButtonEl.color;
  clonedBackButtonEl.disabled = backButtonEl.disabled;
  clonedBackButtonEl.style.setProperty('display', 'block');
  clonedBackButtonEl.style.setProperty('position', 'fixed');
  enteringBackButtonIconAnimation.addElement(clonedBackButtonIconEl);
  enteringBackButtonTextAnimation.addElement(clonedBackButtonTextEl);
  enteringBackButtonAnimation.addElement(clonedBackButtonEl);
  enteringBackButtonAnimation.beforeStyles({
    position: 'absolute',
    top: '0px',
    [CONTAINER_ORIGIN_X]: '0px'
  })
  /**
   * The write hooks must be set on this animation as it is guaranteed to run. Other
   * animations such as the back button text animation will not run if the back button
   * has no visible text.
   */.beforeAddWrite(() => {
    backButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
  }).afterAddWrite(() => {
    backButtonEl.style.setProperty('display', '');
    clonedBackButtonEl.style.setProperty('display', 'none');
    clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
  }).keyframes(CONTAINER_KEYFRAMES);
  enteringBackButtonTextAnimation.beforeStyles({
    'transform-origin': `${TEXT_ORIGIN_X} top`
  }).keyframes(TEXT_KEYFRAMES);
  enteringBackButtonIconAnimation.beforeStyles({
    'transform-origin': `${ICON_ORIGIN_X} center`
  }).keyframes(ICON_KEYFRAMES);
  rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation, enteringBackButtonAnimation]);
};
const animateLargeTitle = (rootAnimation, rtl, backDirection, largeTitleEl, largeTitleBox, largeTitleTextBox, backButtonBox, backButtonTextEl, backButtonTextBox) => {
  var _a, _b;
  /**
   * The horizontal transform origin for the large title
   */
  const ORIGIN_X = rtl ? 'right' : 'left';
  const TITLE_START_OFFSET = rtl ? `calc(100% - ${largeTitleBox.right}px)` : `${largeTitleBox.left}px`;
  /**
   * The cloned large should align exactly with the
   * real large title on the leaving page otherwise there will
   * be a layout shift.
   */
  const START_TRANSLATE_X = '0px';
  const START_TRANSLATE_Y = `${largeTitleBox.top}px`;
  /**
   * How much to offset the large title translation by.
   * This accounts for differences in sizing between the large
   * title and the back button due to padding and font weight.
   */
  const LARGE_TITLE_TRANSLATION_OFFSET = 8;
  let END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonBox.x + LARGE_TITLE_TRANSLATION_OFFSET}px`;
  /**
   * How much to scale the large title up/down by.
   */
  let HEIGHT_SCALE = 0.5;
  /**
   * The large title always starts full size.
   */
  const START_SCALE = 'scale(1)';
  /**
   * By default, we don't worry about having the large title scaled to perfectly
   * match the back button because we don't know if the back button's text matches
   * the large title's text.
   */
  let END_SCALE = `scale(${HEIGHT_SCALE})`;
  // Text element not rendered if developers pass text="" to the back button
  if (backButtonTextEl && backButtonTextBox) {
    /**
     * The scaled title should (roughly) overlap the back button. This ensures that
     * the back button and title overlap during the animation. Note that since both
     * elements either fade in or fade out over the course of the animation, neither
     * element will be fully visible on top of the other. As a result, the overlap
     * does not need to be perfect, so approximate values are acceptable here.
     */
    END_TRANSLATE_X = rtl ? `-${window.innerWidth - backButtonTextBox.right - LARGE_TITLE_TRANSLATION_OFFSET}px` : `${backButtonTextBox.x - LARGE_TITLE_TRANSLATION_OFFSET}px`;
    /**
     * In the forward direction, the large title should start at its normal size and
     * then scale down to be (roughly) the size of the back button on the other view.
     * In the backward direction, the large title should start at (roughly) the size
     * of the back button and then scale up to its original size.
     * Note that since both elements either fade in or fade out over the course of the
     * animation, neither element will be fully visible on top of the other. As a result,
     * the overlap  does not need to be perfect, so approximate values are acceptable here.
     */
    /**
     * When the title and back button texts match then they should overlap during the
     * page transition. If the texts do not match up then the large title text scale
     * adjusts to not perfectly match the back button text otherwise the proportions
     * will be incorrect. When the texts match we scale both the width and height to
     * account for font weight differences between the title and back button.
     */
    const doTitleAndButtonTextsMatch = ((_a = backButtonTextEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = largeTitleEl.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    const WIDTH_SCALE = backButtonTextBox.width / largeTitleTextBox.width;
    HEIGHT_SCALE = backButtonTextBox.height / (largeTitleTextBox.height - LARGE_TITLE_SIZE_OFFSET);
    /**
     * Even though we set TEXT_START_SCALE to HEIGHT_SCALE above, we potentially need
     * to re-compute this here since the HEIGHT_SCALE may have changed.
     */
    END_SCALE = doTitleAndButtonTextsMatch ? `scale(${WIDTH_SCALE}, ${HEIGHT_SCALE})` : `scale(${HEIGHT_SCALE})`;
  }
  /**
   * The midpoints of the back button and the title should align such that the back
   * button and title appear to be centered with each other.
   */
  const backButtonMidPoint = backButtonBox.top + backButtonBox.height / 2;
  const titleMidPoint = largeTitleBox.height * HEIGHT_SCALE / 2;
  const END_TRANSLATE_Y = `${backButtonMidPoint - titleMidPoint}px`;
  const BACKWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }, {
    offset: 0.1,
    opacity: 0
  }, {
    offset: 1,
    opacity: 1,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }];
  const FORWARDS_KEYFRAMES = [{
    offset: 0,
    opacity: 0.99,
    transform: `translate3d(${START_TRANSLATE_X}, ${START_TRANSLATE_Y}, 0) ${START_SCALE}`
  }, {
    offset: 0.6,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0,
    transform: `translate3d(${END_TRANSLATE_X}, ${END_TRANSLATE_Y}, 0) ${END_SCALE}`
  }];
  const KEYFRAMES = backDirection ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
  const clonedTitleEl = getClonedElement('ion-title');
  const clonedLargeTitleAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  clonedTitleEl.innerText = largeTitleEl.innerText;
  clonedTitleEl.size = largeTitleEl.size;
  clonedTitleEl.color = largeTitleEl.color;
  clonedLargeTitleAnimation.addElement(clonedTitleEl);
  clonedLargeTitleAnimation.beforeStyles({
    'transform-origin': `${ORIGIN_X} top`,
    /**
     * Since font size changes will cause
     * the dimension of the large title to change
     * we need to set the cloned title height
     * equal to that of the original large title height.
     */
    height: `${largeTitleBox.height}px`,
    display: '',
    position: 'relative',
    [ORIGIN_X]: TITLE_START_OFFSET
  }).beforeAddWrite(() => {
    largeTitleEl.style.setProperty('opacity', '0');
  }).afterAddWrite(() => {
    largeTitleEl.style.setProperty('opacity', '');
    clonedTitleEl.style.setProperty('display', 'none');
  }).keyframes(KEYFRAMES);
  rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
const iosTransitionAnimation = (navEl, opts) => {
  var _a;
  try {
    const EASING = 'cubic-bezier(0.32,0.72,0,1)';
    const OPACITY = 'opacity';
    const TRANSFORM = 'transform';
    const CENTER = '0%';
    const OFF_OPACITY = 0.8;
    const isRTL = navEl.ownerDocument.dir === 'rtl';
    const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    const OFF_LEFT = isRTL ? '33%' : '-33%';
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const backDirection = opts.direction === 'back';
    const contentEl = enteringEl.querySelector(':scope > ion-content');
    const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
    const enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
    const rootAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    const enteringContentAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    rootAnimation.addElement(enteringEl).duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (leavingEl && navEl !== null && navEl !== undefined) {
      const navDecorAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      navDecorAnimation.addElement(navEl);
      rootAnimation.addAnimation(navDecorAnimation);
    }
    if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
      enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
    } else {
      enteringContentAnimation.addElement(contentEl); // REVIEW
      enteringContentAnimation.addElement(headerEls);
    }
    rootAnimation.addAnimation(enteringContentAnimation);
    if (backDirection) {
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, OFF_OPACITY, 1);
    } else {
      // entering content, forward direction
      enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
    }
    if (contentEl) {
      const enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
      if (enteringTransitionEffectEl) {
        const enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
        const enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
        const enteringTransitionEffect = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const enteringTransitionCover = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const enteringTransitionShadow = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
          opacity: '1',
          display: 'block'
        }).afterStyles({
          opacity: '',
          display: ''
        });
        enteringTransitionCover.addElement(enteringTransitionCoverEl) // REVIEW
        .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
        enteringTransitionShadow.addElement(enteringTransitionShadowEl) // REVIEW
        .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.7);
        enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
        enteringContentAnimation.addAnimation([enteringTransitionEffect]);
      }
    }
    const enteringContentHasLargeTitle = enteringEl.querySelector('ion-header.header-collapse-condense');
    const {
      forward,
      backward
    } = createLargeTitleTransition(rootAnimation, isRTL, backDirection, enteringEl, leavingEl);
    enteringToolBarEls.forEach(enteringToolBarEl => {
      const enteringToolBar = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBar.addElement(enteringToolBarEl);
      rootAnimation.addAnimation(enteringToolBar);
      const enteringTitle = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
      const enteringToolBarButtons = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
      const parentHeader = enteringToolBarEl.closest('ion-header');
      const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
      let buttonsToAnimate;
      if (backDirection) {
        buttonsToAnimate = buttons.filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
      } else {
        buttonsToAnimate = buttons.filter(button => !button.classList.contains('buttons-collapse'));
      }
      enteringToolBarButtons.addElement(buttonsToAnimate);
      const enteringToolBarItems = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
      const enteringToolBarBg = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
      const enteringBackButton = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
      if (backButtonEl) {
        enteringBackButton.addElement(backButtonEl);
      }
      enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
      enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
      enteringToolBarItems.fromTo(OPACITY, 0.01, 1);
      if (backDirection) {
        if (!inactiveHeader) {
          enteringTitle.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_LEFT})`, `translateX(${CENTER})`);
        // back direction, entering page has a back button
        enteringBackButton.fromTo(OPACITY, 0.01, 1);
      } else {
        // entering toolbar, forward direction
        if (!enteringContentHasLargeTitle) {
          enteringTitle.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`).fromTo(OPACITY, 0.01, 1);
        }
        enteringToolBarItems.fromTo('transform', `translateX(${OFF_RIGHT})`, `translateX(${CENTER})`);
        enteringToolBarBg.beforeClearStyles([OPACITY, 'transform']);
        const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
        if (!translucentHeader) {
          enteringToolBarBg.fromTo(OPACITY, 0.01, 'var(--opacity)');
        } else {
          enteringToolBarBg.fromTo('transform', isRTL ? 'translateX(-100%)' : 'translateX(100%)', 'translateX(0px)');
        }
        // forward direction, entering page has a back button
        if (!forward) {
          enteringBackButton.fromTo(OPACITY, 0.01, 1);
        }
        if (backButtonEl && !forward) {
          const enteringBackBtnText = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
          .fromTo(`transform`, isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
          enteringToolBar.addAnimation(enteringBackBtnText);
        }
      }
    });
    // setup leaving view
    if (leavingEl) {
      const leavingContent = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
      const leavingContentEl = leavingEl.querySelector(':scope > ion-content');
      const leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
      const leavingHeaderEls = leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
      if (!leavingContentEl && leavingToolBarEls.length === 0 && leavingHeaderEls.length === 0) {
        leavingContent.addElement(leavingEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
      } else {
        leavingContent.addElement(leavingContentEl); // REVIEW
        leavingContent.addElement(leavingHeaderEls);
      }
      rootAnimation.addAnimation(leavingContent);
      if (backDirection) {
        // leaving content, back direction
        leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)');
        const leavingPage = (0,_index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl);
        rootAnimation.afterAddWrite(() => {
          if (rootAnimation.getDirection() === 'normal') {
            leavingPage.style.setProperty('display', 'none');
          }
        });
      } else {
        // leaving content, forward direction
        leavingContent.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 1, OFF_OPACITY);
      }
      if (leavingContentEl) {
        const leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
        if (leavingTransitionEffectEl) {
          const leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
          const leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
          const leavingTransitionEffect = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          const leavingTransitionCover = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          const leavingTransitionShadow = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
          leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
            opacity: '1',
            display: 'block'
          }).afterStyles({
            opacity: '',
            display: ''
          });
          leavingTransitionCover.addElement(leavingTransitionCoverEl) // REVIEW
          .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
          leavingTransitionShadow.addElement(leavingTransitionShadowEl) // REVIEW
          .beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.7, 0.03);
          leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
          leavingContent.addAnimation([leavingTransitionEffect]);
        }
      }
      leavingToolBarEls.forEach(leavingToolBarEl => {
        const leavingToolBar = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingToolBar.addElement(leavingToolBarEl);
        const leavingTitle = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
        const leavingToolBarButtons = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
        const parentHeader = leavingToolBarEl.closest('ion-header');
        const inactiveHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.classList.contains('header-collapse-condense-inactive');
        const buttonsToAnimate = Array.from(buttons).filter(button => {
          const isCollapseButton = button.classList.contains('buttons-collapse');
          return isCollapseButton && !inactiveHeader || !isCollapseButton;
        });
        leavingToolBarButtons.addElement(buttonsToAnimate);
        const leavingToolBarItems = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
        if (leavingToolBarItemEls.length > 0) {
          leavingToolBarItems.addElement(leavingToolBarItemEls);
        }
        const leavingToolBarBg = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
        const leavingBackButton = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
        const backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
        if (backButtonEl) {
          leavingBackButton.addElement(backButtonEl);
        }
        leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
        rootAnimation.addAnimation(leavingToolBar);
        // fade out leaving toolbar items
        leavingBackButton.fromTo(OPACITY, 0.99, 0);
        leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
        leavingToolBarItems.fromTo(OPACITY, 0.99, 0);
        if (backDirection) {
          if (!inactiveHeader) {
            // leaving toolbar, back direction
            leavingTitle.fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)').fromTo(OPACITY, 0.99, 0);
          }
          leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          leavingToolBarBg.beforeClearStyles([OPACITY, 'transform']);
          // leaving toolbar, back direction, and there's no entering toolbar
          // should just slide out, no fading out
          const translucentHeader = parentHeader === null || parentHeader === void 0 ? void 0 : parentHeader.translucent;
          if (!translucentHeader) {
            leavingToolBarBg.fromTo(OPACITY, 'var(--opacity)', 0);
          } else {
            leavingToolBarBg.fromTo('transform', 'translateX(0px)', isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          }
          if (backButtonEl && !backward) {
            const leavingBackBtnText = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
            leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
            .fromTo('transform', `translateX(${CENTER})`, `translateX(${(isRTL ? -124 : 124) + 'px'})`);
            leavingToolBar.addAnimation(leavingBackBtnText);
          }
        } else {
          // leaving toolbar, forward direction
          if (!inactiveHeader) {
            leavingTitle.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).fromTo(OPACITY, 0.99, 0).afterClearStyles([TRANSFORM, OPACITY]);
          }
          leavingToolBarItems.fromTo('transform', `translateX(${CENTER})`, `translateX(${OFF_LEFT})`).afterClearStyles([TRANSFORM, OPACITY]);
          leavingBackButton.afterClearStyles([OPACITY]);
          leavingTitle.afterClearStyles([OPACITY]);
          leavingToolBarButtons.afterClearStyles([OPACITY]);
        }
      });
    }
    return rootAnimation;
  } catch (err) {
    throw err;
  }
};
/**
 * The scale of the back button during the animation
 * is computed based on the scale of the large title
 * and vice versa. However, we need to account for slight
 * variations in the size of the large title due to
 * padding and font weight. This value should be used to subtract
 * a small amount from the large title height when computing scales
 * to get more accurate scale results.
 */
const LARGE_TITLE_SIZE_OFFSET = 10;


/***/ }),

/***/ 4514:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-527b9e34.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Build),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   a: () => (/* binding */ setMode),
/* harmony export */   b: () => (/* binding */ bootstrapLazy),
/* harmony export */   c: () => (/* binding */ createEvent),
/* harmony export */   d: () => (/* binding */ readTask),
/* harmony export */   e: () => (/* binding */ Host),
/* harmony export */   f: () => (/* binding */ getElement),
/* harmony export */   g: () => (/* binding */ getMode),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   i: () => (/* binding */ forceUpdate),
/* harmony export */   j: () => (/* binding */ getAssetPath),
/* harmony export */   p: () => (/* binding */ promiseResolve),
/* harmony export */   r: () => (/* binding */ registerInstance),
/* harmony export */   s: () => (/* binding */ setNonce),
/* harmony export */   w: () => (/* binding */ writeTask)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const NAMESPACE = 'ionic';
const BUILD = /* ionic */{
  allRenderFn: false,
  appendChildSlotFix: true,
  asyncLoading: true,
  asyncQueue: false,
  attachStyles: true,
  cloneNodeFix: true,
  cmpDidLoad: true,
  cmpDidRender: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpShouldUpdate: false,
  cmpWillLoad: true,
  cmpWillRender: true,
  cmpWillUpdate: false,
  connectedCallback: true,
  constructableCSS: true,
  cssAnnotations: true,
  devTools: false,
  disconnectedCallback: true,
  element: false,
  event: true,
  experimentalScopedSlotChanges: true,
  experimentalSlotFixes: true,
  formAssociated: false,
  hasRenderFn: true,
  hostListener: true,
  hostListenerTarget: true,
  hostListenerTargetBody: true,
  hostListenerTargetDocument: true,
  hostListenerTargetParent: false,
  hostListenerTargetWindow: true,
  hotModuleReplacement: false,
  hydrateClientSide: true,
  hydrateServerSide: false,
  hydratedAttribute: false,
  hydratedClass: true,
  hydratedSelectorName: "hydrated",
  initializeNextTick: false,
  invisiblePrehydration: true,
  isDebug: false,
  isDev: false,
  isTesting: false,
  lazyLoad: true,
  lifecycle: true,
  lifecycleDOMEvents: false,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  profile: false,
  prop: true,
  propBoolean: true,
  propMutable: true,
  propNumber: true,
  propString: true,
  reflect: true,
  scoped: true,
  scopedSlotTextContentFix: true,
  scriptDataOpts: false,
  shadowDelegatesFocus: true,
  shadowDom: true,
  slot: true,
  slotChildNodesFix: true,
  slotRelocation: true,
  state: true,
  style: true,
  svg: true,
  taskQueue: true,
  transformTagName: false,
  updatable: true,
  vdomAttribute: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomPropOrAttr: true,
  vdomRef: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  vdomXlink: true,
  watchCallback: true
};

/*
 Stencil Client Platform v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var Build = {
  isDev: false,
  isBrowser: true,
  isServer: false,
  isTesting: false
};
var hostRefs = /* @__PURE__ */new WeakMap();
var getHostRef = ref => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return __webpack_require__(8996)(`./${bundleId}.entry.js`).then(importedModule => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};

// src/client/client-style.ts
var styles = /* @__PURE__ */new Map();
var modeResolutionChain = [];

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || {
  head: {}
};
var H = win.HTMLElement || class {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: h2 => h2(),
  raf: h2 => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */(() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {}
  return supportsListenerOptions2;
})();
var promiseResolve = v => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */(() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {}
  return false;
})();
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => cb => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = queue => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = cb => promiseResolve().then(cb);
var readTask = /* @__PURE__ */queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = path => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

// src/utils/constants.ts
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/helpers.ts
var isDef = v => v != null;
var isComplexType = o => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = value => ({
  isOk: true,
  isErr: false,
  value
});
var err = value => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then(newVal => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = result => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = result => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = c => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter(k => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = node => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = node => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = node => {
  if (typeof node.vtag === "function") {
    const vnodeData = {
      ...node.vattrs
    };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...(node.vchildren || []));
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map(c => {
    const orgLocationId = c.$hostId$ + "." + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$;
    if (orgLocationNode && supportsShadow && orgLocationNode["s-en"] === "") {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }
    if (!shadowRoot) {
      node["s-hn"] = tagName;
      if (orgLocationNode) {
        node["s-ol"] = orgLocationNode;
        node["s-ol"]["s-nr"] = node;
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  });
  if (shadowRoot) {
    shadowRootNodes.map(shadowRootNode => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        parentVNode.$children$[childVNode.$index$] = childVNode;
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i2], hostId);
      }
    }
    for (i2 = node.childNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i2], hostId);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          childVNode.$tag$ = "slot";
          if (childIdSplt[5]) {
            node["s-sn"] = childVNode.$name$ = childIdSplt[5];
          } else {
            node["s-sn"] = "";
          }
          node["s-sr"] = true;
          if (shadowRootNodes) {
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);
            if (childVNode.$name$) {
              childVNode.$elm$.setAttribute("name", childVNode.$name$);
            }
            node.parentNode.insertBefore(childVNode.$elm$, node);
            node.remove();
            if (childVNode.$depth$ === "0") {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }
          slotNodes.push(childVNode);
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          } else {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    for (i2 = 0; i2 < node.childNodes.length; i2++) {
      initializeDocumentHydrate(node.childNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};

// src/runtime/mode.ts
var computeMode = elm => modeResolutionChain.map(h2 => h2(elm)).find(m => !!m);
var setMode = handler => modeResolutionChain.push(handler);
var getMode = ref => getHostRef(ref).$modeName$;
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2 /* Number */) {
      return parseFloat(propValue);
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = ref => getHostRef(ref).$hostElement$;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: detail => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          const injectStyle =
          /**
           * we render a scoped component
           */
          !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) ||
          /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ && styleContainerNode.nodeName !== "HEAD";
          if (injectStyle) {
            styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = hostRef => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if (flags & 10 /* needsScopedEncapsulation */ && flags & 2 /* scopedCssEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (flags & 2 /* scopedCssEncapsulation */) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key") ;else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {}
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = value => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ?
  // we need to sort these to ensure that `'ref'` is the last attr
  [...attrNames.filter(attr => attr !== "ref"), "ref"] :
  // no need to sort, return the original array
  attrNames;
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ?
      // slot element has fallback content
      // still create an element that "mocks" the slot element
      2 /* isSlotFallback */ :
      // slot element does not have fallback content
      // create an html comment we'll use to always reference
      // where actual slot content should sit next to
      1 /* isSlotReference */;
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    const rootNode = elm.getRootNode();
    const isElementWithinShadowRoot = !rootNode.querySelector("body");
    if (!isElementWithinShadowRoot && BUILD.scoped && isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    {
      updateElementScopeIds(elm, parentElm);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          relocateToHostRoot(oldParentVNode.$elm$);
        }
      }
    }
  }
  return elm;
};
var relocateToHostRoot = parentElm => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.childNodes).find(ref => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(parentReferenceNode(childNode), childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before));
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(parentReferenceNode(oldStartVnode.$elm$), node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      if (
      // The component gets hydrated and no VDOM has been initialized.
      // Here the comparison can't happen as $name$ property is not set for `leftNode`.
      "$nodeId$" in leftVNode && isInitialRender &&
      // `leftNode` is not from type HTMLComment which would cause many
      // hydration comments to be removed
      leftVNode.$elm$.nodeType !== 8) {
        return false;
      }
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = node => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = node => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      } else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !isInitialRender && BUILD.updatable && oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = elm => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1 /* ElementNode */) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 /* ElementNode */ && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"]) || siblingNode.nodeType === 3 /* TextNode */ && slotName === siblingNode["s-sn"]) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 /* ElementNode */ || siblingNode.nodeType === 3 /* TextNode */ && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = elm => {
  let node;
  let hostContentNodes;
  let j;
  for (const childNode of elm.childNodes) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map(relocateNode => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var nullifyVNodeRefs = vNode => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  const inserted = parent == null ? void 0 : parent.insertBefore(newNode, reference);
  {
    updateElementScopeIds(newNode, parent);
  }
  return inserted;
};
var findScopeIds = element => {
  const scopeIds = [];
  if (element) {
    scopeIds.push(...(element["s-scs"] || []), element["s-si"], element["s-sc"], ...findScopeIds(element.parentElement));
  }
  return scopeIds;
};
var updateElementScopeIds = (element, parent, iterateChildNodes = false) => {
  var _a;
  if (element && parent && element.nodeType === 1 /* ElementNode */) {
    const scopeIds = new Set(findScopeIds(parent).filter(Boolean));
    if (scopeIds.size) {
      (_a = element.classList) == null ? void 0 : _a.add(...(element["s-scs"] = [...scopeIds]));
      if (element["s-ol"] || iterateChildNodes) {
        for (const childNode of Array.from(element.childNodes)) {
          updateElementScopeIds(childNode, element, true);
        }
      }
    }
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
    for (const childNode of rootVnode.$elm$.childNodes) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        childNode.hidden = true;
      }
    }
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise(r => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  if (!instance) {
    throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  }
  {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch(err2 => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = maybePromise => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (hostRef, instance, isInitialLoad) {
    var _a;
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
    const rc = elm["s-rc"];
    if (isInitialLoad) {
      attachStyles(hostRef);
    }
    const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
    {
      callRender(hostRef, instance, elm, isInitialLoad);
    }
    if (rc) {
      rc.map(cb => cb());
      elm["s-rc"] = void 0;
    }
    endRender();
    endUpdate();
    {
      const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
      const postUpdate = () => postUpdateComponent(hostRef);
      if (childrenPromises.length === 0) {
        postUpdate();
      } else {
        Promise.all(childrenPromises).then(postUpdate);
        hostRef.$flags$ |= 4 /* isWaitingForChildren */;
        childrenPromises.length = 0;
      }
    }
  });
  return function updateComponent(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render && instance.render();
    {
      hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = hostRef => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};
var forceUpdate = ref => {
  {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = who => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", {
    detail: {
      namespace: NAMESPACE
    }
  }));
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var addHydratedFlag = elm => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated");
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
  }
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map(watchMethodName => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || cmpMeta.$watchers$ || Cstr.watchers) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 /* Prop */ || flags & 2 /* proxyState */ && memberFlags & 32 /* State */) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (flags & 1 /* isElementConstructor */) {
      const attrNameToPropName = /* @__PURE__ */new Map();
      prototype.attributeChangedCallback = function (attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" &&
          // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach(callbackName => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(/* @__PURE__ */new Set([...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}), ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
        var _a2;
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512 /* ReflectAttr */) {
          (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
        }
        return attrName;
      })]));
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elm, hostRef, cmpMeta, hmrVersionId) {
    let Cstr;
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
      hostRef.$flags$ |= 32 /* hasInitializedComponent */;
      const bundleId = cmpMeta.$lazyBundleId$;
      if (bundleId) {
        const CstrImport = loadModule(cmpMeta);
        if (CstrImport && "then" in CstrImport) {
          const endLoad = uniqueTime();
          Cstr = yield CstrImport;
          endLoad();
        } else {
          Cstr = CstrImport;
        }
        if (!Cstr) {
          throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
        }
        if (!Cstr.isProxied) {
          {
            cmpMeta.$watchers$ = Cstr.watchers;
          }
          proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
          Cstr.isProxied = true;
        }
        const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
        {
          hostRef.$flags$ |= 8 /* isConstructingInstance */;
        }
        try {
          new Cstr(hostRef);
        } catch (e) {
          consoleError(e);
        }
        {
          hostRef.$flags$ &= ~8 /* isConstructingInstance */;
        }
        {
          hostRef.$flags$ |= 128 /* isWatchReady */;
        }
        endNewInstance();
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else {
        Cstr = elm.constructor;
        const cmpTag = elm.localName;
        customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
      }
      if (Cstr && Cstr.style) {
        let style;
        if (typeof Cstr.style === "string") {
          style = Cstr.style;
        } else if (typeof Cstr.style !== "string") {
          hostRef.$modeName$ = computeMode(elm);
          if (hostRef.$modeName$) {
            style = Cstr.style[hostRef.$modeName$];
          }
        }
        const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
        if (!styles.has(scopeId2)) {
          const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
          registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
          endRegisterStyles();
        }
      }
    }
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent["s-rc"]) {
      ancestorComponent["s-rc"].push(schedule);
    } else {
      schedule();
    }
  });
  return function initializeComponent(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var fireConnectedCallback = instance => {
  {
    safeCall(instance, "connectedCallback");
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = elm => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode"));
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (!hostId) {
        if (
        // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var setContentReference = elm => {
  const contentRefElm = elm["s-cr"] = doc.createComment("");
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = instance => {
  {
    safeCall(instance, "disconnectedCallback");
  }
};
var disconnectedCallback = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
      const hostRef = getHostRef(elm);
      {
        if (hostRef.$rmListeners$) {
          hostRef.$rmListeners$.map(rmListener => rmListener());
          hostRef.$rmListeners$ = void 0;
        }
      }
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        disconnectInstance(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
      }
    }
  });
  return function disconnectedCallback(_x8) {
    return _ref3.apply(this, arguments);
  };
}();
var patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype, descriptorPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};
var patchCloneNode = HostElementPrototype => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function (deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"];
      for (; i2 < srcNode.childNodes.length; i2++) {
        slotted = srcNode.childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every(privateField => !srcNode.childNodes[i2][privateField]);
        if (slotted) {
          if (clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = HostElementPrototype => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function (newChild) {
    const slotName = newChild["s-sn"] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = ElementPrototype => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function (toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const slotNode = getHostSlotNode(this.childNodes, toRemove["s-sn"], this.tagName);
      if (slotNode) {
        const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove["s-sn"]);
        const existingNode = slotChildNodes.find(n => n === toRemove);
        if (existingNode) {
          existingNode.remove();
          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = HostElementPrototype => {
  const originalPrepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = newChild["s-sn"] = getSlotName(newChild);
      const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
      if (slotNode) {
        const slotPlaceholder = document.createTextNode("");
        slotPlaceholder["s-nr"] = newChild;
        slotNode["s-cr"].parentNode.__appendChild(slotPlaceholder);
        newChild["s-ol"] = slotPlaceholder;
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return originalPrepend.call(this, newChild);
    });
  };
};
var patchSlotAppend = HostElementPrototype => {
  HostElementPrototype.append = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = HostElementPrototype => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function (position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = HostElementPrototype => {
  HostElementPrototype.insertAdjacentText = function (position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchSlotInsertAdjacentElement = HostElementPrototype => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function (position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = hostElementPrototype => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
  {
    Object.defineProperty(hostElementPrototype, "textContent", {
      // To mimic shadow root behavior, we need to return the text content of all
      // nodes in a slot reference node
      get() {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        const textContent = slotRefNodes.map(node => {
          var _a, _b;
          const text = [];
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            if (slotContent.nodeType === 3 /* TEXT_NODE */ || slotContent.nodeType === 1 /* ELEMENT_NODE */) {
              text.push((_b = (_a = slotContent.textContent) == null ? void 0 : _a.trim()) != null ? _b : "");
            }
            slotContent = slotContent.nextSibling;
          }
          return text.filter(ref => ref !== "").join(" ");
        }).filter(text => text !== "").join(" ");
        return " " + textContent + " ";
      },
      // To mimic shadow root behavior, we need to overwrite all nodes in a slot
      // reference node. If a default slot reference node exists, the text content will be
      // placed there. Otherwise, the new text node will be hidden
      set(value) {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        slotRefNodes.forEach(node => {
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            const tmp = slotContent;
            slotContent = slotContent.nextSibling;
            tmp.remove();
          }
          if (node["s-sn"] === "") {
            const textNode = this.ownerDocument.createTextNode(value);
            textNode["s-sn"] = "";
            insertBefore(node.parentElement, textNode, node.nextSibling);
          } else {
            node.remove();
          }
        });
      }
    });
  }
};
var patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
    const childNodesFn = elm.__lookupGetter__("childNodes");
    Object.defineProperty(elm, "children", {
      get() {
        return this.childNodes.map(n => n.nodeType === 1);
      }
    });
    Object.defineProperty(elm, "childElementCount", {
      get() {
        return elm.children.length;
      }
    });
    Object.defineProperty(elm, "childNodes", {
      get() {
        const childNodes = childNodesFn.call(this);
        if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0 && getHostRef(this).$flags$ & 2 /* hasRendered */) {
          const result = new FakeNodeList();
          for (let i2 = 0; i2 < childNodes.length; i2++) {
            const slot = childNodes[i2]["s-nr"];
            if (slot) {
              result.push(slot);
            }
          }
          return result;
        }
        return FakeNodeList.from(childNodes);
      }
    });
  }
};
var getAllChildSlotNodes = childNodes => {
  const slotRefNodes = [];
  for (const childNode of Array.from(childNodes)) {
    if (childNode["s-sr"]) {
      slotRefNodes.push(childNode);
    }
    slotRefNodes.push(...getAllChildSlotNodes(childNode.childNodes));
  }
  return slotRefNodes;
};
var getSlotName = node => node["s-sn"] || node.nodeType === 1 && node.getAttribute("slot") || "";
var getHostSlotNode = (childNodes, slotName, hostName) => {
  let i2 = 0;
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && childNode["s-sn"] === slotName && childNode["s-hn"] === hostName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName, hostName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};
var getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];
  while ((n = n.nextSibling) && n["s-sn"] === slotName) {
    childNodes.push(n);
  }
  return childNodes;
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  {
    plt.$flags$ |= 2 /* appLoaded */;
  }
  let hasSlotRelocation = false;
  lazyBundles.map(lazyBundle => {
    lazyBundle[1].map(compactMeta => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                {
                  self.attachShadow({
                    mode: "open",
                    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */)
                  });
                }
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(`Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`);
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      {
        if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
          patchPseudoShadowDom(HostElement.prototype, cmpMeta);
        }
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map(host => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => ev => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (flags & 4 /* TargetDocument */) return doc;
  if (flags & 8 /* TargetWindow */) return win;
  if (flags & 16 /* TargetBody */) return doc.body;
  return elm;
};
var hostListenerOpts = flags => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = nonce => plt.$nonce$ = nonce;


/***/ }),

/***/ 5343:
/*!*********************************************************!*\
  !*** ./node_modules/@ionic/core/loader/index.es2017.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyPolyfills: () => (/* reexport safe */ _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__.applyPolyfills),
/* harmony export */   defineCustomElements: () => (/* reexport safe */ _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__.defineCustomElements),
/* harmony export */   setNonce: () => (/* reexport safe */ _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__.setNonce)
/* harmony export */ });
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ 9627);
/* harmony import */ var _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/loader.js */ 6629);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/***/ }),

/***/ 6611:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/gesture-controller-314a54f6.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BACKDROP_NO_SCROLL),
/* harmony export */   G: () => (/* binding */ GESTURE_CONTROLLER)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class GestureController {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = new Map();
    this.disabledGestures = new Map();
    this.disabledScroll = new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config) {
    var _a;
    return new GestureDelegate(this, this.newID(), config.name, (_a = config.priority) !== null && _a !== void 0 ? _a : 0, !!config.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -10000;
    requestedStart.forEach(value => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent('ionGestureCaptured', {
        detail: {
          gestureName
        }
      });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = undefined;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === undefined) {
      set = new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== undefined) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== undefined) {
      // a gesture already captured
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== undefined;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
}
class GestureDelegate {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1000000 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = undefined;
  }
}
class BlockerDelegate {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = undefined;
  }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();


/***/ }),

/***/ 6629:
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/loader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineCustomElements: () => (/* binding */ defineCustomElements),
/* harmony export */   setNonce: () => (/* reexport safe */ _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.s)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _app_globals_7b6cbf1a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-globals-7b6cbf1a.js */ 1839);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const defineCustomElements = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (win, options) {
    if (typeof window === 'undefined') return undefined;
    yield (0,_app_globals_7b6cbf1a_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.b)(JSON.parse("[[\"ion-menu_3\",[[33,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[33,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]],{\"type\":[\"typeChanged\"],\"disabled\":[\"disabledChanged\"],\"side\":[\"sideChanged\"],\"swipeGesture\":[\"swipeGestureChanged\"]}],[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-input-password-toggle\",[[33,\"ion-input-password-toggle\",{\"color\":[513],\"showIcon\":[1,\"show-icon\"],\"hideIcon\":[1,\"hide-icon\"],\"type\":[1025]},null,{\"type\":[\"onTypeChange\"]}]]],[\"ion-fab_3\",[[33,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]}],[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64],\"toggle\":[64]},null,{\"activated\":[\"activatedChanged\"]}],[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]},null,{\"activated\":[\"activatedChanged\"]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"layout\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"positionAnchor\":[1,\"position-anchor\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"icon\":[1],\"htmlAttributes\":[16],\"swipeGesture\":[1,\"swipe-gesture\"],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"revealContentToScreenReader\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"swipeGesture\":[\"swipeGestureChanged\"],\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-card_5\",[[33,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[33,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}],[33,\"ion-card-subtitle\",{\"color\":[513]}],[33,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-item-option_3\",[[33,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-accordion_2\",[[49,\"ion-accordion\",{\"value\":[1],\"disabled\":[4],\"readonly\":[4],\"toggleIcon\":[1,\"toggle-icon\"],\"toggleIconSlot\":[1,\"toggle-icon-slot\"],\"state\":[32],\"isNext\":[32],\"isPrevious\":[32]},null,{\"value\":[\"valueChanged\"]}],[33,\"ion-accordion-group\",{\"animated\":[4],\"multiple\":[4],\"value\":[1025],\"disabled\":[4],\"readonly\":[4],\"expand\":[1],\"requestAccordionToggle\":[64],\"getAccordions\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"value\":[\"valueChanged\"],\"disabled\":[\"disabledChanged\"],\"readonly\":[\"readonlyChanged\"]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]},null,{\"threshold\":[\"thresholdChanged\"],\"disabled\":[\"disabledChanged\"]}]]],[\"ion-reorder_2\",[[33,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-segment_2\",[[33,\"ion-segment-button\",{\"contentId\":[513,\"content-id\"],\"disabled\":[1028],\"layout\":[1],\"type\":[1],\"value\":[8],\"checked\":[32],\"setFocus\":[64]},null,{\"value\":[\"valueChanged\"]}],[33,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1032],\"selectOnFocus\":[4,\"select-on-focus\"],\"activated\":[32]},[[16,\"ionSegmentViewScroll\",\"handleSegmentViewScroll\"],[0,\"keydown\",\"onKeyDown\"]],{\"color\":[\"colorChanged\"],\"swipeGesture\":[\"swipeGestureChanged\"],\"value\":[\"valueChanged\"],\"disabled\":[\"disabledChanged\"]}]]],[\"ion-chip\",[[33,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-input\",[[38,\"ion-input\",{\"color\":[513],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearInputIcon\":[1,\"clear-input-icon\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"counter\":[4],\"counterFormatter\":[16],\"debounce\":[2],\"disabled\":[516],\"enterkeyhint\":[1],\"errorText\":[1,\"error-text\"],\"fill\":[1],\"inputmode\":[1],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"max\":[8],\"maxlength\":[2],\"min\":[8],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"shape\":[1],\"spellcheck\":[4],\"step\":[1],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"debounce\":[\"debounceChanged\"],\"type\":[\"onTypeChange\"],\"value\":[\"valueChanged\"],\"dir\":[\"onDirChanged\"]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"lang\":[\"onLangChanged\"],\"dir\":[\"onDirChanged\"],\"debounce\":[\"debounceChanged\"],\"value\":[\"valueChanged\"],\"showCancelButton\":[\"showCancelButtonChanged\"]}]]],[\"ion-toggle\",[[33,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[1],\"enableOnOffLabels\":[4,\"enable-on-off-labels\"],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"activated\":[32]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-nav_2\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64],\"getLength\":[64]},null,{\"swipeGesture\":[\"swipeGestureChanged\"],\"root\":[\"rootChanged\"]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-tab_2\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]},null,{\"active\":[\"changeActive\"]}],[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-textarea\",[[38,\"ion-textarea\",{\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"fill\":[1],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[514],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[516,\"auto-grow\"],\"value\":[1025],\"counter\":[4],\"counterFormatter\":[16],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"shape\":[1],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"debounce\":[\"debounceChanged\"],\"value\":[\"valueChanged\"],\"dir\":[\"onDirChanged\"]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-breadcrumb_2\",[[33,\"ion-breadcrumb\",{\"collapsed\":[4],\"last\":[4],\"showCollapsedIndicator\":[4,\"show-collapsed-indicator\"],\"color\":[1],\"active\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"separator\":[4],\"target\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}],[33,\"ion-breadcrumbs\",{\"color\":[513],\"maxItems\":[2,\"max-items\"],\"itemsBeforeCollapse\":[2,\"items-before-collapse\"],\"itemsAfterCollapse\":[2,\"items-after-collapse\"],\"collapsed\":[32],\"activeChanged\":[32]},[[0,\"collapsedClick\",\"onCollapsedClick\"]],{\"maxItems\":[\"maxItemsChanged\"],\"itemsBeforeCollapse\":[\"maxItemsChanged\"],\"itemsAfterCollapse\":[\"maxItemsChanged\"]}]]],[\"ion-tab-bar_2\",[[33,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[33,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},null,{\"selectedTab\":[\"selectedTabChanged\"]}]]],[\"ion-datetime-button\",[[33,\"ion-datetime-button\",{\"color\":[513],\"disabled\":[516],\"datetime\":[1],\"datetimePresentation\":[32],\"dateText\":[32],\"timeText\":[32],\"datetimeActive\":[32],\"selectedButton\":[32]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]},null,{\"url\":[\"onUpdate\"],\"component\":[\"onUpdate\"],\"componentProps\":[\"onComponentProps\"]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]},null,{\"from\":[\"propDidChange\"],\"to\":[\"propDidChange\"]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[1,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[33,\"ion-avatar\"],[33,\"ion-badge\",{\"color\":[513]}],[1,\"ion-thumbnail\"]]],[\"ion-col_3\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ion-grid\",{\"fixed\":[4]}],[1,\"ion-row\"]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]},null,{\"src\":[\"srcChanged\"]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[33,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"label\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"pinFormatter\":[16],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"activeBarStart\":[1026,\"active-bar-start\"],\"disabled\":[4],\"value\":[1026],\"labelPlacement\":[1,\"label-placement\"],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]},null,{\"debounce\":[\"debounceChanged\"],\"min\":[\"minChanged\"],\"max\":[\"maxChanged\"],\"step\":[\"stepChanged\"],\"activeBarStart\":[\"activeBarStartChanged\"],\"disabled\":[\"disabledChanged\"],\"value\":[\"valueChanged\"]}]]],[\"ion-segment-content\",[[1,\"ion-segment-content\"]]],[\"ion-segment-view\",[[33,\"ion-segment-view\",{\"disabled\":[4],\"isManualScroll\":[32],\"setContent\":[64]},[[1,\"scroll\",\"handleScroll\"],[1,\"touchstart\",\"handleScrollStart\"],[1,\"touchend\",\"handleTouchEnd\"]]]]],[\"ion-split-pane\",[[33,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32],\"isVisible\":[64]},null,{\"visible\":[\"visibleChanged\"],\"disabled\":[\"updateState\"],\"when\":[\"updateState\"]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[513]}]]],[\"ion-select-modal\",[[34,\"ion-select-modal\",{\"header\":[1],\"multiple\":[4],\"options\":[16]}]]],[\"ion-datetime_3\",[[33,\"ion-datetime\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"formatOptions\":[16],\"readonly\":[4],\"isDateEnabled\":[16],\"min\":[1025],\"max\":[1025],\"presentation\":[1],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"clearText\":[1,\"clear-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"locale\":[1],\"firstDayOfWeek\":[2,\"first-day-of-week\"],\"titleSelectedDatesFormatter\":[16],\"multiple\":[4],\"highlightedDates\":[16],\"value\":[1025],\"showDefaultTitle\":[4,\"show-default-title\"],\"showDefaultButtons\":[4,\"show-default-buttons\"],\"showClearButton\":[4,\"show-clear-button\"],\"showDefaultTimeLabel\":[4,\"show-default-time-label\"],\"hourCycle\":[1,\"hour-cycle\"],\"size\":[1],\"preferWheel\":[4,\"prefer-wheel\"],\"showMonthAndYear\":[32],\"activeParts\":[32],\"workingParts\":[32],\"isTimePopoverOpen\":[32],\"forceRenderDate\":[32],\"confirm\":[64],\"reset\":[64],\"cancel\":[64]},null,{\"formatOptions\":[\"formatOptionsChanged\"],\"disabled\":[\"disabledChanged\"],\"min\":[\"minChanged\"],\"max\":[\"maxChanged\"],\"presentation\":[\"presentationChanged\"],\"yearValues\":[\"yearValuesChanged\"],\"monthValues\":[\"monthValuesChanged\"],\"dayValues\":[\"dayValuesChanged\"],\"hourValues\":[\"hourValuesChanged\"],\"minuteValues\":[\"minuteValuesChanged\"],\"value\":[\"valueChanged\"]}],[34,\"ion-picker-legacy\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}],[32,\"ion-picker-legacy-column\",{\"col\":[16]},null,{\"col\":[\"colChanged\"]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"],\"buttons\":[\"buttonsChanged\"],\"inputs\":[\"inputsChanged\"]}]]],[\"ion-modal\",[[33,\"ion-modal\",{\"hasController\":[4,\"has-controller\"],\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"breakpoints\":[16],\"expandToScroll\":[4,\"expand-to-scroll\"],\"initialBreakpoint\":[2,\"initial-breakpoint\"],\"backdropBreakpoint\":[2,\"backdrop-breakpoint\"],\"handle\":[4],\"handleBehavior\":[1,\"handle-behavior\"],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"presentingElement\":[16],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"focusTrap\":[4,\"focus-trap\"],\"canDismiss\":[4,\"can-dismiss\"],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"setCurrentBreakpoint\":[64],\"getCurrentBreakpoint\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-picker\",[[33,\"ion-picker\",{\"exitInputMode\":[64]},[[1,\"touchstart\",\"preventTouchStartPropagation\"]]]]],[\"ion-picker-column\",[[1,\"ion-picker-column\",{\"disabled\":[4],\"value\":[1032],\"color\":[513],\"numericInput\":[4,\"numeric-input\"],\"ariaLabel\":[32],\"isActive\":[32],\"scrollActiveItemIntoView\":[64],\"setValue\":[64],\"setFocus\":[64]},null,{\"aria-label\":[\"ariaLabelChanged\"],\"value\":[\"valueChange\"]}]]],[\"ion-picker-column-option\",[[33,\"ion-picker-column-option\",{\"disabled\":[4],\"value\":[8],\"color\":[513],\"ariaLabel\":[32]},null,{\"aria-label\":[\"onAriaLabelChange\"]}]]],[\"ion-popover\",[[33,\"ion-popover\",{\"hasController\":[4,\"has-controller\"],\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"triggerAction\":[1,\"trigger-action\"],\"trigger\":[1],\"size\":[1],\"dismissOnSelect\":[4,\"dismiss-on-select\"],\"reference\":[1],\"side\":[1],\"alignment\":[1025],\"arrow\":[4],\"isOpen\":[4,\"is-open\"],\"keyboardEvents\":[4,\"keyboard-events\"],\"focusTrap\":[4,\"focus-trap\"],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"presented\":[32],\"presentFromTrigger\":[64],\"present\":[64],\"dismiss\":[64],\"getParentPopover\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"trigger\":[\"onTriggerChange\"],\"triggerAction\":[\"onTriggerChange\"],\"isOpen\":[\"onIsOpenChange\"]}]]],[\"ion-checkbox\",[[33,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"setFocus\":[64]}]]],[\"ion-item_8\",[[33,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}],[32,\"ion-item-group\"],[33,\"ion-note\",{\"color\":[513]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[38,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]},null,{\"color\":[\"colorChanged\"],\"position\":[\"positionChanged\"]}],[33,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}],[33,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[516],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]],{\"button\":[\"buttonChanged\"]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-app_8\",[[0,\"ion-app\",{\"setFocus\":[64]}],[36,\"ion-footer\",{\"collapse\":[1],\"translucent\":[4],\"keyboardVisible\":[32]}],[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]},null,{\"swipeHandler\":[\"swipeHandlerChanged\"]}],[1,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"fixedSlotPlacement\":[1,\"fixed-slot-placement\"],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"getBackgroundElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[9,\"resize\",\"onResize\"]]],[36,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[33,\"ion-title\",{\"color\":[513],\"size\":[1]},null,{\"size\":[\"sizeChanged\"]}],[33,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]],[38,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-select_3\",[[33,\"ion-select\",{\"cancelText\":[1,\"cancel-text\"],\"color\":[513],\"compareWith\":[1,\"compare-with\"],\"disabled\":[4],\"fill\":[1],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"justify\":[1],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"multiple\":[4],\"name\":[1],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"selectedText\":[1,\"selected-text\"],\"toggleIcon\":[1,\"toggle-icon\"],\"expandedIcon\":[1,\"expanded-icon\"],\"shape\":[1],\"value\":[1032],\"required\":[4],\"isExpanded\":[32],\"open\":[64]},null,{\"disabled\":[\"styleChanged\"],\"isExpanded\":[\"styleChanged\"],\"placeholder\":[\"styleChanged\"],\"value\":[\"styleChanged\"]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}],[34,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"multiple\":[4],\"options\":[16]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-radio_2\",[[33,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]},null,{\"value\":[\"valueChanged\"]}],[36,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"compareWith\":[1,\"compare-with\"],\"name\":[1],\"value\":[1032],\"helperText\":[1,\"helper-text\"],\"errorText\":[1,\"error-text\"],\"setFocus\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"value\":[\"valueChanged\"]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-button_2\",[[33,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1],\"form\":[1],\"isCircle\":[32]},null,{\"disabled\":[\"disabledChanged\"]}],[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]},null,{\"name\":[\"loadIcon\"],\"src\":[\"loadIcon\"],\"icon\":[\"loadIcon\"],\"ios\":[\"loadIcon\"],\"md\":[\"loadIcon\"]}]]]]"), options);
  });
  return function defineCustomElements(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ 6639:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-a5d50daf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ doc),
/* harmony export */   w: () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const win = typeof window !== 'undefined' ? window : undefined;
const doc = typeof document !== 'undefined' ? document : undefined;


/***/ }),

/***/ 7243:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-738d7504.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ printIonError),
/* harmony export */   b: () => (/* binding */ printRequiredElementError),
/* harmony export */   p: () => (/* binding */ printIonWarning)
/* harmony export */ });
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  const logLevel = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_0__.c.get('logLevel', "WARN" /* LogLevel.WARN */);
  if (["WARN" /* LogLevel.WARN */].includes(logLevel)) {
    return console.warn(`[Ionic Warning]: ${message}`, ...params);
  }
};
/**
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */
const printIonError = (message, ...params) => {
  const logLevel = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_0__.c.get('logLevel', "ERROR" /* LogLevel.ERROR */);
  if (["ERROR" /* LogLevel.ERROR */, "WARN" /* LogLevel.WARN */].includes(logLevel)) {
    return console.error(`[Ionic Error]: ${message}`, ...params);
  }
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */
const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};


/***/ }),

/***/ 7877:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/overlays-41a5d51b.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BACKDROP),
/* harmony export */   F: () => (/* binding */ FOCUS_TRAP_DISABLE_CLASS),
/* harmony export */   G: () => (/* binding */ GESTURE),
/* harmony export */   O: () => (/* binding */ OVERLAY_GESTURE_PRIORITY),
/* harmony export */   a: () => (/* binding */ alertController),
/* harmony export */   b: () => (/* binding */ actionSheetController),
/* harmony export */   c: () => (/* binding */ popoverController),
/* harmony export */   d: () => (/* binding */ createDelegateController),
/* harmony export */   e: () => (/* binding */ createTriggerController),
/* harmony export */   f: () => (/* binding */ present),
/* harmony export */   g: () => (/* binding */ dismiss),
/* harmony export */   h: () => (/* binding */ eventMethod),
/* harmony export */   i: () => (/* binding */ isCancel),
/* harmony export */   j: () => (/* binding */ prepareOverlay),
/* harmony export */   k: () => (/* binding */ setOverlayId),
/* harmony export */   l: () => (/* binding */ loadingController),
/* harmony export */   m: () => (/* binding */ modalController),
/* harmony export */   n: () => (/* binding */ focusFirstDescendant),
/* harmony export */   o: () => (/* binding */ getPresentedOverlay),
/* harmony export */   p: () => (/* binding */ pickerController),
/* harmony export */   q: () => (/* binding */ focusLastDescendant),
/* harmony export */   s: () => (/* binding */ safeCall),
/* harmony export */   t: () => (/* binding */ toastController)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-back-button-864101a3.js */ 284);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _framework_delegate_2eea1763_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework-delegate-2eea1763.js */ 9199);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 6611);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */








/**
 * This query string selects elements that
 * are eligible to receive focus. We select
 * interactive elements that meet the following
 * criteria:
 * 1. Element does not have a negative tabindex
 * 2. Element does not have `hidden`
 * 3. Element does not have `disabled` for non-Ionic components.
 * 4. Element does not have `disabled` or `disabled="true"` for Ionic components.
 * Note: We need this distinction because `disabled="false"` is
 * valid usage for the disabled property on ion-button.
 */
const focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
/**
 * Focuses the first descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
const focusFirstDescendant = (ref, fallbackElement) => {
  const firstInput = ref.querySelector(focusableQueryString);
  focusElementInContext(firstInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
/**
 * Focuses the last descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
const focusLastDescendant = (ref, fallbackElement) => {
  const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  focusElementInContext(lastInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
/**
 * Focuses a particular element in a context. If the element
 * doesn't have anything focusable associated with it then
 * a fallback element will be focused.
 *
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 * This should be used instead of the focus() method
 * on most elements because the focusable element
 * may not be the host element.
 *
 * For example, if an ion-button should be focused
 * then we should actually focus the native <button>
 * element inside of ion-button's shadow root, not
 * the host element itself.
 */
const focusElementInContext = (hostToFocus, fallbackElement) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    const radioGroup = elementToFocus.closest('ion-radio-group');
    if (radioGroup) {
      radioGroup.setFocus();
    } else {
      (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(elementToFocus);
    }
  } else {
    // Focus fallback element instead of letting focus escape
    fallbackElement.focus();
  }
};
let lastOverlayIndex = 0;
let lastId = 0;
const activeAnimations = new WeakMap();
const createController = tagName => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    getTop() {
      return (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return getPresentedOverlay(document, tagName);
      })();
    }
  };
};
const alertController = /*@__PURE__*/createController('ion-alert');
const actionSheetController = /*@__PURE__*/createController('ion-action-sheet');
const loadingController = /*@__PURE__*/createController('ion-loading');
const modalController = /*@__PURE__*/createController('ion-modal');
/**
 * @deprecated Use the inline ion-picker component instead.
 */
const pickerController = /*@__PURE__*/createController('ion-picker-legacy');
const popoverController = /*@__PURE__*/createController('ion-popover');
const toastController = /*@__PURE__*/createController('ion-toast');
/**
 * Prepares the overlay element to be presented.
 */
const prepareOverlay = el => {
  if (typeof document !== 'undefined') {
    /**
     * Adds a single instance of event listeners for application behaviors:
     *
     * - Escape Key behavior to dismiss an overlay
     * - Trapping focus within an overlay
     * - Back button behavior to dismiss an overlay
     *
     * This only occurs when the first overlay is created.
     */
    connectListeners(document);
  }
  const overlayIndex = lastOverlayIndex++;
  /**
   * overlayIndex is used in the overlay components to set a zIndex.
   * This ensures that the most recently presented overlay will be
   * on top.
   */
  el.overlayIndex = overlayIndex;
};
/**
 * Assigns an incrementing id to an overlay element, that does not
 * already have an id assigned to it.
 *
 * Used to track unique instances of an overlay element.
 */
const setOverlayId = el => {
  if (!el.hasAttribute('id')) {
    el.id = `ion-overlay-${++lastId}`;
  }
  return el.id;
};
const createOverlay = (tagName, opts) => {
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (typeof window !== 'undefined' && typeof window.customElements !== 'undefined') {
    return window.customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add('overlay-hidden');
      /**
       * Convert the passed in overlay options into props
       * that get passed down into the new overlay.
       */
      Object.assign(element, Object.assign(Object.assign({}, opts), {
        hasController: true
      }));
      // append the overlay element to the document body
      getAppRoot(document).appendChild(element);
      return new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(element, resolve));
    });
  }
  return Promise.resolve();
};
const isOverlayHidden = overlay => overlay.classList.contains('overlay-hidden');
/**
 * Focuses a particular element in an overlay. If the element
 * doesn't have anything focusable associated with it then
 * the overlay itself will be focused.
 * This should be used instead of the focus() method
 * on most elements because the focusable element
 * may not be the host element.
 *
 * For example, if an ion-button should be focused
 * then we should actually focus the native <button>
 * element inside of ion-button's shadow root, not
 * the host element itself.
 */
const focusElementInOverlay = (hostToFocus, overlay) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    // If there are no inner focusable elements, just focus the host element.
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(elementToFocus);
  } else {
    // Focus overlay instead of letting focus escape
    overlay.focus();
  }
};
/**
 * Traps keyboard focus inside of overlay components.
 * Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
 * This includes the following components: Action Sheet, Alert, Loading, Modal,
 * Picker, and Popover.
 * Should NOT include: Toast
 */
const trapKeyboardFocus = (ev, doc) => {
  const lastOverlay = getPresentedOverlay(doc, 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover');
  const target = ev.target;
  /**
   * If no active overlay, ignore this event.
   *
   * If this component uses the shadow dom,
   * this global listener is pointless
   * since it will not catch the focus
   * traps as they are inside the shadow root.
   * We need to add a listener to the shadow root
   * itself to ensure the focus trap works.
   */
  if (!lastOverlay || !target) {
    return;
  }
  /**
   * If the ion-disable-focus-trap class
   * is present on an overlay, then this component
   * instance has opted out of focus trapping.
   * An example of this is when the sheet modal
   * has a backdrop that is disabled. The content
   * behind the sheet should be focusable until
   * the backdrop is enabled.
   */
  if (lastOverlay.classList.contains(FOCUS_TRAP_DISABLE_CLASS)) {
    return;
  }
  const trapScopedFocus = () => {
    /**
     * If we are focusing the overlay, clear
     * the last focused element so that hitting
     * tab activates the first focusable element
     * in the overlay wrapper.
     */
    if (lastOverlay === target) {
      lastOverlay.lastFocus = undefined;
      /**
       * Toasts can be presented from an overlay.
       * However, focus should still be returned to
       * the overlay when clicking a toast. Normally,
       * focus would be returned to the last focusable
       * descendant in the overlay which may not always be
       * the button that the toast was presented from. In this case,
       * the focus may be returned to an unexpected element.
       * To account for this, we make sure to return focus to the
       * last focused element in the overlay if focus is
       * moved to the toast.
       */
    } else if (target.tagName === 'ION-TOAST') {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
      /**
       * Otherwise, we must be focusing an element
       * inside of the overlay. The two possible options
       * here are an input/button/etc or the ion-focus-trap
       * element. The focus trap element is used to prevent
       * the keyboard focus from leaving the overlay when
       * using Tab or screen assistants.
       */
    } else {
      /**
       * We do not want to focus the traps, so get the overlay
       * wrapper element as the traps live outside of the wrapper.
       */
      const overlayRoot = (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(lastOverlay);
      if (!overlayRoot.contains(target)) {
        return;
      }
      const overlayWrapper = overlayRoot.querySelector('.ion-overlay-wrapper');
      if (!overlayWrapper) {
        return;
      }
      /**
       * If the target is inside the wrapper, let the browser
       * focus as normal and keep a log of the last focused element.
       * Additionally, if the backdrop was tapped we should not
       * move focus back inside the wrapper as that could cause
       * an interactive elements focus state to activate.
       */
      if (overlayWrapper.contains(target) || target === overlayRoot.querySelector('ion-backdrop')) {
        lastOverlay.lastFocus = target;
      } else {
        /**
         * Otherwise, we must have focused one of the focus traps.
         * We need to wrap the focus to either the first element
         * or the last element.
         */
        /**
         * Once we call `focusFirstDescendant` and focus the first
         * descendant, another focus event will fire which will
         * cause `lastOverlay.lastFocus` to be updated before
         * we can run the code after that. We will cache the value
         * here to avoid that.
         */
        const lastFocus = lastOverlay.lastFocus;
        // Focus the first element in the overlay wrapper
        focusFirstDescendant(overlayWrapper, lastOverlay);
        /**
         * If the cached last focused element is the
         * same as the active element, then we need
         * to wrap focus to the last descendant. This happens
         * when the first descendant is focused, and the user
         * presses Shift + Tab. The previous line will focus
         * the same descendant again (the first one), causing
         * last focus to equal the active element.
         */
        if (lastFocus === doc.activeElement) {
          focusLastDescendant(overlayWrapper, lastOverlay);
        }
        lastOverlay.lastFocus = doc.activeElement;
      }
    }
  };
  const trapShadowFocus = () => {
    /**
     * If the target is inside the wrapper, let the browser
     * focus as normal and keep a log of the last focused element.
     */
    if (lastOverlay.contains(target)) {
      lastOverlay.lastFocus = target;
      /**
       * Toasts can be presented from an overlay.
       * However, focus should still be returned to
       * the overlay when clicking a toast. Normally,
       * focus would be returned to the last focusable
       * descendant in the overlay which may not always be
       * the button that the toast was presented from. In this case,
       * the focus may be returned to an unexpected element.
       * To account for this, we make sure to return focus to the
       * last focused element in the overlay if focus is
       * moved to the toast.
       */
    } else if (target.tagName === 'ION-TOAST') {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      /**
       * Otherwise, we are about to have focus
       * go out of the overlay. We need to wrap
       * the focus to either the first element
       * or the last element.
       */
      /**
       * Once we call `focusFirstDescendant` and focus the first
       * descendant, another focus event will fire which will
       * cause `lastOverlay.lastFocus` to be updated before
       * we can run the code after that. We will cache the value
       * here to avoid that.
       */
      const lastFocus = lastOverlay.lastFocus;
      // Focus the first element in the overlay wrapper
      focusFirstDescendant(lastOverlay);
      /**
       * If the cached last focused element is the
       * same as the active element, then we need
       * to wrap focus to the last descendant. This happens
       * when the first descendant is focused, and the user
       * presses Shift + Tab. The previous line will focus
       * the same descendant again (the first one), causing
       * last focus to equal the active element.
       */
      if (lastFocus === doc.activeElement) {
        focusLastDescendant(lastOverlay);
      }
      lastOverlay.lastFocus = doc.activeElement;
    }
  };
  if (lastOverlay.shadowRoot) {
    trapShadowFocus();
  } else {
    trapScopedFocus();
  }
};
const connectListeners = doc => {
  if (lastOverlayIndex === 0) {
    lastOverlayIndex = 1;
    doc.addEventListener('focus', ev => {
      trapKeyboardFocus(ev, doc);
    }, true);
    // handle back-button click
    doc.addEventListener('ionBackButton', ev => {
      const lastOverlay = getPresentedOverlay(doc);
      if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
        ev.detail.register(_hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_3__.OVERLAY_BACK_BUTTON_PRIORITY, () => {
          /**
           * Do not return this promise otherwise
           * the hardware back button utility will
           * be blocked until the overlay dismisses.
           * This is important for a modal with canDismiss.
           * If the application presents a confirmation alert
           * in the "canDismiss" callback, then it will be impossible
           * to use the hardware back button to dismiss the alert
           * dialog because the hardware back button utility
           * is blocked on waiting for the modal to dismiss.
           */
          lastOverlay.dismiss(undefined, BACKDROP);
        });
      }
    });
    /**
     * Handle ESC to close overlay.
     * CloseWatcher also handles pressing the Esc
     * key, so if a browser supports CloseWatcher then
     * this behavior will be handled via the ionBackButton
     * event.
     */
    if (!(0,_hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_3__.shouldUseCloseWatcher)()) {
      doc.addEventListener('keydown', ev => {
        if (ev.key === 'Escape') {
          const lastOverlay = getPresentedOverlay(doc);
          if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
            lastOverlay.dismiss(undefined, BACKDROP);
          }
        }
      });
    }
  }
};
const dismissOverlay = (doc, data, role, overlayTag, id) => {
  const overlay = getPresentedOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject('overlay does not exist');
  }
  return overlay.dismiss(data, role);
};
/**
 * Returns a list of all overlays in the DOM even if they are not presented.
 */
const getOverlays = (doc, selector) => {
  if (selector === undefined) {
    selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast';
  }
  return Array.from(doc.querySelectorAll(selector)).filter(c => c.overlayIndex > 0);
};
/**
 * Returns a list of all presented overlays.
 * Inline overlays can exist in the DOM but not be presented,
 * so there are times when we want to exclude those.
 * @param doc The document to find the element within.
 * @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
 */
const getPresentedOverlays = (doc, overlayTag) => {
  return getOverlays(doc, overlayTag).filter(o => !isOverlayHidden(o));
};
/**
 * Returns a presented overlay element.
 * @param doc The document to find the element within.
 * @param overlayTag The selector for the overlay, defaults to Ionic overlay components.
 * @param id The unique identifier for the overlay instance.
 * @returns The overlay element or `undefined` if no overlay element is found.
 */
const getPresentedOverlay = (doc, overlayTag, id) => {
  const overlays = getPresentedOverlays(doc, overlayTag);
  return id === undefined ? overlays[overlays.length - 1] : overlays.find(o => o.id === id);
};
/**
 * When an overlay is presented, the main
 * focus is the overlay not the page content.
 * We need to remove the page content from the
 * accessibility tree otherwise when
 * users use "read screen from top" gestures with
 * TalkBack and VoiceOver, the screen reader will begin
 * to read the content underneath the overlay.
 *
 * We need a container where all page components
 * exist that is separate from where the overlays
 * are added in the DOM. For most apps, this element
 * is the top most ion-router-outlet. In the event
 * that devs are not using a router,
 * they will need to add the "ion-view-container-root"
 * id to the element that contains all of their views.
 *
 * TODO: If Framework supports having multiple top
 * level router outlets we would need to update this.
 * Example: One outlet for side menu and one outlet
 * for main content.
 */
const setRootAriaHidden = (hidden = false) => {
  const root = getAppRoot(document);
  const viewContainer = root.querySelector('ion-router-outlet, ion-nav, #ion-view-container-root');
  if (!viewContainer) {
    return;
  }
  if (hidden) {
    viewContainer.setAttribute('aria-hidden', 'true');
  } else {
    viewContainer.removeAttribute('aria-hidden');
  }
};
const present = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
    var _a, _b;
    if (overlay.presented) {
      return;
    }
    /**
     * Due to accessibility guidelines, toasts do not have
     * focus traps.
     *
     * All other overlays should have focus traps to prevent
     * the keyboard focus from leaving the overlay.
     */
    if (overlay.el.tagName !== 'ION-TOAST') {
      setRootAriaHidden(true);
      document.body.classList.add(_gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_6__.B);
    }
    hideUnderlyingOverlaysFromScreenReaders(overlay.el);
    hideAnimatingOverlayFromScreenReaders(overlay.el);
    overlay.presented = true;
    overlay.willPresent.emit();
    (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
    const mode = (0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.b)(overlay);
    // get the user's animation fn if one was provided
    const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.c.get(name, mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
    const completed = yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    if (completed) {
      overlay.didPresent.emit();
      (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
    }
    /**
     * When an overlay that steals focus
     * is dismissed, focus should be returned
     * to the element that was focused
     * prior to the overlay opening. Toast
     * does not steal focus and is excluded
     * from returning focus as a result.
     */
    if (overlay.el.tagName !== 'ION-TOAST') {
      restoreElementFocus(overlay.el);
    }
    /**
     * If the focused element is already
     * inside the overlay component then
     * focus should not be moved from that
     * to the overlay container.
     */
    if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
      overlay.el.focus();
    }
    /**
     * If this overlay was previously dismissed without being
     * the topmost one (such as by manually calling dismiss()),
     * it would still have aria-hidden on being presented again.
     * Removing it here ensures the overlay is visible to screen
     * readers.
     *
     * If this overlay was being presented, then it was hidden
     * from screen readers during the animation. Now that the
     * animation is complete, we can reveal the overlay to
     * screen readers.
     */
    overlay.el.removeAttribute('aria-hidden');
  });
  return function present(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * When an overlay component is dismissed,
 * focus should be returned to the element
 * that presented the overlay. Otherwise
 * focus will be set on the body which
 * means that people using screen readers
 * or tabbing will need to re-navigate
 * to where they were before they
 * opened the overlay.
 */
const restoreElementFocus = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlayEl) {
    let previousElement = document.activeElement;
    if (!previousElement) {
      return;
    }
    const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
    if (shadowRoot) {
      // If there are no inner focusable elements, just focus the host element.
      previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
    }
    yield overlayEl.onDidDismiss();
    /**
     * After onDidDismiss, the overlay loses focus
     * because it is removed from the document
     *
     * > An element will also lose focus [...]
     * > if the element is removed from the document)
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
     *
     * Additionally, `document.activeElement` returns:
     *
     * > The Element which currently has focus,
     * > `<body>` or null if there is
     * > no focused element.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement#value
     *
     * However, if the user has already focused
     * an element sometime between onWillDismiss
     * and onDidDismiss (for example, focusing a
     * text box after tapping a button in an
     * action sheet) then don't restore focus to
     * previous element
     */
    if (document.activeElement === null || document.activeElement === document.body) {
      previousElement.focus();
    }
  });
  return function restoreElementFocus(_x6) {
    return _ref2.apply(this, arguments);
  };
}();
const dismiss = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
    var _a, _b;
    if (!overlay.presented) {
      return false;
    }
    const presentedOverlays = _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d !== undefined ? getPresentedOverlays(_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d) : [];
    /**
     * For accessibility, toasts lack focus traps and don’t receive
     * `aria-hidden` on the root element when presented.
     *
     * All other overlays use focus traps to keep keyboard focus
     * within the overlay, setting `aria-hidden` on the root element
     * to enhance accessibility.
     *
     * Therefore, we must remove `aria-hidden` from the root element
     * when the last non-toast overlay is dismissed.
     */
    const overlaysNotToast = presentedOverlays.filter(o => o.tagName !== 'ION-TOAST');
    const lastOverlayNotToast = overlaysNotToast.length === 1 && overlaysNotToast[0].id === overlay.el.id;
    /**
     * If this is the last visible overlay that is not a toast
     * then we want to re-add the root to the accessibility tree.
     */
    if (lastOverlayNotToast) {
      setRootAriaHidden(false);
      document.body.classList.remove(_gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_6__.B);
    }
    overlay.presented = false;
    try {
      /**
       * There is no need to show the overlay to screen readers during
       * the dismiss animation. This is because the overlay will be removed
       * from the DOM after the animation is complete.
       */
      hideAnimatingOverlayFromScreenReaders(overlay.el);
      // Overlay contents should not be clickable during dismiss
      overlay.el.style.setProperty('pointer-events', 'none');
      overlay.willDismiss.emit({
        data,
        role
      });
      (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({
        data,
        role
      });
      const mode = (0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.b)(overlay);
      const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.c.get(name, mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
      // If dismissed via gesture, no need to play leaving animation again
      if (role !== GESTURE) {
        yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
      }
      overlay.didDismiss.emit({
        data,
        role
      });
      (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({
        data,
        role
      });
      // Get a reference to all animations currently assigned to this overlay
      // Then tear them down to return the overlay to its initial visual state
      const animations = activeAnimations.get(overlay) || [];
      animations.forEach(ani => ani.destroy());
      activeAnimations.delete(overlay);
      /**
       * Make overlay hidden again in case it is being reused.
       * We can safely remove pointer-events: none as
       * overlay-hidden will set display: none.
       */
      overlay.el.classList.add('overlay-hidden');
      overlay.el.style.removeProperty('pointer-events');
      /**
       * Clear any focus trapping references
       * when the overlay is dismissed.
       */
      if (overlay.el.lastFocus !== undefined) {
        overlay.el.lastFocus = undefined;
      }
    } catch (err) {
      console.error(err);
    }
    overlay.el.remove();
    revealOverlaysToScreenReaders();
    return true;
  });
  return function dismiss(_x7, _x8, _x9, _x10, _x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
}();
const getAppRoot = doc => {
  return doc.querySelector('ion-app') || doc.body;
};
const overlayAnimation = /*#__PURE__*/function () {
  var _ref4 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (overlay, animationBuilder, baseEl, opts) {
    // Make overlay visible in case it's hidden
    baseEl.classList.remove('overlay-hidden');
    const aniRoot = overlay.el;
    const animation = animationBuilder(aniRoot, opts);
    if (!overlay.animated || !_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.c.getBoolean('animated', true)) {
      animation.duration(0);
    }
    if (overlay.keyboardClose) {
      animation.beforeAddWrite(() => {
        const activeElement = baseEl.ownerDocument.activeElement;
        if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches('input,ion-input, ion-textarea')) {
          activeElement.blur();
        }
      });
    }
    const activeAni = activeAnimations.get(overlay) || [];
    activeAnimations.set(overlay, [...activeAni, animation]);
    yield animation.play();
    return true;
  });
  return function overlayAnimation(_x14, _x15, _x16, _x17) {
    return _ref4.apply(this, arguments);
  };
}();
const eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise(r => resolve = r);
  onceEvent(element, eventName, event => {
    resolve(event.detail);
  });
  return promise;
};
const onceEvent = (element, eventName, callback) => {
  const handler = ev => {
    (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(element, eventName, handler);
    callback(ev);
  };
  (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(element, eventName, handler);
};
const isCancel = role => {
  return role === 'cancel' || role === BACKDROP;
};
const defaultGate = h => h();
/**
 * Calls a developer provided method while avoiding
 * Angular Zones. Since the handler is provided by
 * the developer, we should throw any errors
 * received so that developer-provided bug
 * tracking software can log it.
 */
const safeCall = (handler, arg) => {
  if (typeof handler === 'function') {
    const jmp = _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.c.get('_zoneGate', defaultGate);
    return jmp(() => {
      try {
        return handler(arg);
      } catch (e) {
        throw e;
      }
    });
  }
  return undefined;
};
const BACKDROP = 'backdrop';
const GESTURE = 'gesture';
const OVERLAY_GESTURE_PRIORITY = 39;
/**
 * Creates a delegate controller.
 *
 * Requires that the component has the following properties:
 * - `el: HTMLElement`
 * - `hasController: boolean`
 * - `delegate?: FrameworkDelegate`
 *
 * @param ref The component class instance.
 */
const createDelegateController = ref => {
  let inline = false;
  let workingDelegate;
  const coreDelegate = (0,_framework_delegate_2eea1763_js__WEBPACK_IMPORTED_MODULE_5__.C)();
  /**
   * Determines whether or not an overlay is being used
   * inline or via a controller/JS and returns the correct delegate.
   * By default, subsequent calls to getDelegate will use
   * a cached version of the delegate.
   * This is useful for calling dismiss after present,
   * so that the correct delegate is given.
   * @param force `true` to force the non-cached version of the delegate.
   * @returns The delegate to use and whether or not the overlay is inline.
   */
  const getDelegate = (force = false) => {
    if (workingDelegate && !force) {
      return {
        delegate: workingDelegate,
        inline
      };
    }
    const {
      el,
      hasController,
      delegate
    } = ref;
    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a developer has presented this component
     * via a controller, then we can assume
     * the component is already in the
     * correct place.
     */
    const parentEl = el.parentNode;
    inline = parentEl !== null && !hasController;
    workingDelegate = inline ? delegate || coreDelegate : delegate;
    return {
      inline,
      delegate: workingDelegate
    };
  };
  /**
   * Attaches a component in the DOM. Teleports the component
   * to the root of the app.
   * @param component The component to optionally construct and append to the element.
   */
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (component) {
      const {
        delegate
      } = getDelegate(true);
      if (delegate) {
        return yield delegate.attachViewToDom(ref.el, component);
      }
      const {
        hasController
      } = ref;
      if (hasController && component !== undefined) {
        throw new Error('framework delegate is missing');
      }
      return null;
    });
    return function attachViewToDom(_x18) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Moves a component back to its original location in the DOM.
   */
  const removeViewFromDom = () => {
    const {
      delegate
    } = getDelegate();
    if (delegate && ref.el !== undefined) {
      delegate.removeViewFromDom(ref.el.parentElement, ref.el);
    }
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};
/**
 * Constructs a trigger interaction for an overlay.
 * Presents an overlay when the trigger is clicked.
 *
 * Usage:
 * ```ts
 * triggerController = createTriggerController();
 * triggerController.addClickListener(el, trigger);
 * ```
 */
const createTriggerController = () => {
  let destroyTriggerInteraction;
  /**
   * Removes the click listener from the trigger element.
   */
  const removeClickListener = () => {
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
      destroyTriggerInteraction = undefined;
    }
  };
  /**
   * Adds a click listener to the trigger element.
   * Presents the overlay when the trigger is clicked.
   * @param el The overlay element.
   * @param trigger The ID of the element to add a click listener to.
   */
  const addClickListener = (el, trigger) => {
    removeClickListener();
    const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      (0,_index_738d7504_js__WEBPACK_IMPORTED_MODULE_7__.p)(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
      return;
    }
    const configureTriggerInteraction = (targetEl, overlayEl) => {
      const openOverlay = () => {
        overlayEl.present();
      };
      targetEl.addEventListener('click', openOverlay);
      return () => {
        targetEl.removeEventListener('click', openOverlay);
      };
    };
    destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };
  return {
    addClickListener,
    removeClickListener
  };
};
/**
 * The overlay that is being animated also needs to hide from screen
 * readers during its animation. This ensures that assistive technologies
 * like TalkBack do not announce or interact with the content until the
 * animation is complete, avoiding confusion for users.
 *
 * When the overlay is presented on an Android device, TalkBack's focus rings
 * may appear in the wrong position due to the transition (specifically
 * `transform` styles). This occurs because the focus rings are initially
 * displayed at the starting position of the elements before the transition
 * begins. This workaround ensures the focus rings do not appear in the
 * incorrect location.
 *
 * If this solution is applied to iOS devices, then it leads to a bug where
 * the overlays cannot be accessed by screen readers. This is due to
 * VoiceOver not being able to update the accessibility tree when the
 * `aria-hidden` is removed.
 *
 * @param overlay - The overlay that is being animated.
 */
const hideAnimatingOverlayFromScreenReaders = overlay => {
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined) return;
  if ((0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_4__.a)('android')) {
    /**
     * Once the animation is complete, this attribute will be removed.
     * This is done at the end of the `present` method.
     */
    overlay.setAttribute('aria-hidden', 'true');
  }
};
/**
 * Ensure that underlying overlays have aria-hidden if necessary so that screen readers
 * cannot move focus to these elements. Note that we cannot rely on focus/focusin/focusout
 * events here because those events do not fire when the screen readers moves to a non-focusable
 * element such as text.
 * Without this logic screen readers would be able to move focus outside of the top focus-trapped overlay.
 *
 * @param newTopMostOverlay - The overlay that is being presented. Since the overlay has not been
 * fully presented yet at the time this function is called it will not be included in the getPresentedOverlays result.
 */
const hideUnderlyingOverlaysFromScreenReaders = newTopMostOverlay => {
  var _a;
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined) return;
  const overlays = getPresentedOverlays(_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const presentedOverlay = overlays[i];
    const nextPresentedOverlay = (_a = overlays[i + 1]) !== null && _a !== void 0 ? _a : newTopMostOverlay;
    /**
     * If next overlay has aria-hidden then all remaining overlays will have it too.
     * Or, if the next overlay is a Toast that does not have aria-hidden then current overlay
     * should not have aria-hidden either so focus can remain in the current overlay.
     */
    if (nextPresentedOverlay.hasAttribute('aria-hidden') || nextPresentedOverlay.tagName !== 'ION-TOAST') {
      presentedOverlay.setAttribute('aria-hidden', 'true');
    }
  }
};
/**
 * When dismissing an overlay we need to reveal the new top-most overlay to screen readers.
 * If the top-most overlay is a Toast we potentially need to reveal more overlays since
 * focus is never automatically moved to the Toast.
 */
const revealOverlaysToScreenReaders = () => {
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined) return;
  const overlays = getPresentedOverlays(_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const currentOverlay = overlays[i];
    /**
     * If the current we are looking at is a Toast then we can remove aria-hidden.
     * However, we potentially need to keep looking at the overlay stack because there
     * could be more Toasts underneath. Additionally, we need to unhide the closest non-Toast
     * overlay too so focus can move there since focus is never automatically moved to the Toast.
     */
    currentOverlay.removeAttribute('aria-hidden');
    /**
     * If we found a non-Toast element then we can just remove aria-hidden and stop searching entirely
     * since this overlay should always receive focus. As a result, all underlying overlays should still
     * be hidden from screen readers.
     */
    if (currentOverlay.tagName !== 'ION-TOAST') {
      break;
    }
  }
};
const FOCUS_TRAP_DISABLE_CLASS = 'ion-disable-focus-trap';


/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		2076,
		7518
	],
	"./ion-action-sheet.entry.js": [
		1981,
		2076,
		1981
	],
	"./ion-alert.entry.js": [
		1603,
		2076,
		1603
	],
	"./ion-app_8.entry.js": [
		2273,
		2076,
		2273
	],
	"./ion-avatar_3.entry.js": [
		9642,
		9642
	],
	"./ion-back-button.entry.js": [
		2095,
		2076,
		2095
	],
	"./ion-backdrop.entry.js": [
		2335,
		2335
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		2076,
		8221
	],
	"./ion-button_2.entry.js": [
		7184,
		7184
	],
	"./ion-card_5.entry.js": [
		8759,
		8759
	],
	"./ion-checkbox.entry.js": [
		4248,
		4248
	],
	"./ion-chip.entry.js": [
		2244,
		9863
	],
	"./ion-col_3.entry.js": [
		1769,
		1769
	],
	"./ion-datetime-button.entry.js": [
		2569,
		2326,
		2569
	],
	"./ion-datetime_3.entry.js": [
		6534,
		2326,
		2076,
		6534
	],
	"./ion-fab_3.entry.js": [
		5458,
		2076,
		5458
	],
	"./ion-img.entry.js": [
		654,
		654
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		2076,
		6034
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		2076,
		5196
	],
	"./ion-input.entry.js": [
		761,
		8923,
		2076,
		761
	],
	"./ion-item-option_3.entry.js": [
		6492,
		2076,
		6492
	],
	"./ion-item_8.entry.js": [
		9557,
		2076,
		9557
	],
	"./ion-loading.entry.js": [
		8353,
		2076,
		8353
	],
	"./ion-menu_3.entry.js": [
		1024,
		2076,
		1024
	],
	"./ion-modal.entry.js": [
		9160,
		2076,
		9160
	],
	"./ion-nav_2.entry.js": [
		393,
		393
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		8442
	],
	"./ion-picker-column.entry.js": [
		3110,
		2076,
		3110
	],
	"./ion-picker.entry.js": [
		5575,
		5575
	],
	"./ion-popover.entry.js": [
		6772,
		2076,
		6772
	],
	"./ion-progress-bar.entry.js": [
		4810,
		4810
	],
	"./ion-radio_2.entry.js": [
		4639,
		2076,
		4639
	],
	"./ion-range.entry.js": [
		8247,
		2076,
		628
	],
	"./ion-refresher_2.entry.js": [
		852,
		2076,
		852
	],
	"./ion-reorder_2.entry.js": [
		1479,
		2076,
		1479
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		4065
	],
	"./ion-route_4.entry.js": [
		7971,
		7971
	],
	"./ion-searchbar.entry.js": [
		3184,
		2076,
		3184
	],
	"./ion-segment-content.entry.js": [
		4312,
		4312
	],
	"./ion-segment-view.entry.js": [
		4540,
		4540
	],
	"./ion-segment_2.entry.js": [
		469,
		2076,
		469
	],
	"./ion-select-modal.entry.js": [
		7101,
		7101
	],
	"./ion-select_3.entry.js": [
		8471,
		2076,
		8471
	],
	"./ion-spinner.entry.js": [
		388,
		2076,
		388
	],
	"./ion-split-pane.entry.js": [
		2392,
		2392
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		2076,
		6059
	],
	"./ion-tab_2.entry.js": [
		5427,
		5427
	],
	"./ion-text.entry.js": [
		198,
		198
	],
	"./ion-textarea.entry.js": [
		1735,
		8923,
		1735
	],
	"./ion-toast.entry.js": [
		7510,
		2076,
		7510
	],
	"./ion-toggle.entry.js": [
		5297,
		2076,
		5297
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9199:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-2eea1763.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CoreDelegate),
/* harmony export */   a: () => (/* binding */ attachComponent),
/* harmony export */   d: () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


// TODO(FW-2832): types
const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    var _a;
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }
    const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
      Object.assign(el, componentProps);
    }
    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });
  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      var _a, _b;
      BaseComponent = parentElement;
      let ChildComponent;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */
      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */
        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */
        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */
        BaseComponent.appendChild(el);
        ChildComponent = el;
        yield new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === 'ION-MODAL' || BaseComponent.tagName === 'ION-POPOVER')) {
        /**
         * The delegate host wrapper el is only needed for modals and popovers
         * because they allow the dev to provide custom content to the overlay.
         */
        const root = ChildComponent = BaseComponent.children[0];
        if (!root.classList.contains('ion-delegate-host')) {
          /**
           * If the root element is not a delegate host, it means
           * that the overlay has not been presented yet and we need
           * to create the containing element with the specified classes.
           */
          const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div');
          // Add a class to track if the root element was created by the delegate.
          el.classList.add('ion-delegate-host');
          cssClasses.forEach(c => el.classList.add(c));
          // Move each child from the original template to the new parent element.
          el.append(...BaseComponent.children);
          // Append the new parent element to the original parent element.
          BaseComponent.appendChild(el);
          /**
           * Update the ChildComponent to be the
           * newly created div in the event that one
           * does not already exist.
           */
          ChildComponent = el;
        }
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */
      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */
      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      /**
       * We return the child component rather than the overlay
       * reference itself since modal and popover will
       * use this to wait for any Ionic components in the child view
       * to be ready (i.e. componentOnReady) when using the
       * lazy loaded component bundle.
       *
       * However, we fall back to returning BaseComponent
       * in the event that a modal or popover is presented
       * with no child content.
       */
      return ChildComponent !== null && ChildComponent !== void 0 ? ChildComponent : BaseComponent;
    });
    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};


/***/ }),

/***/ 9223:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/md.transition-8dc58b46.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mdTransitionAnimation: () => (/* binding */ mdTransitionAnimation)
/* harmony export */ });
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 1865);
/* harmony import */ var _index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ecb55b8d.js */ 4223);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-527b9e34.js */ 4514);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const mdTransitionAnimation = (_, opts) => {
  var _a, _b, _c;
  const OFF_BOTTOM = '40px';
  const CENTER = '0px';
  const backDirection = opts.direction === 'back';
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = (0,_index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.g)(enteringEl);
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  const rootTransition = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
  rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible');
  // animate the component itself
  if (backDirection) {
    rootTransition.duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
  } else {
    rootTransition.duration(((_b = opts.duration) !== null && _b !== void 0 ? _b : 0) || 280).easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`).fromTo('opacity', 0.01, 1);
  }
  // Animate toolbar if it's there
  if (enteringToolbarEle) {
    const enteringToolBar = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.addAnimation(enteringToolBar);
  }
  // setup leaving view
  if (leavingEl && backDirection) {
    // leaving content
    rootTransition.duration(((_c = opts.duration) !== null && _c !== void 0 ? _c : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_0__.c)();
    leavingPage.addElement((0,_index_ecb55b8d_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl)).onFinish(currentStep => {
      if (currentStep === 1 && leavingPage.elements.length > 0) {
        leavingPage.elements[0].style.setProperty('display', 'none');
      }
    }).fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`).fromTo('opacity', 1, 0);
    rootTransition.addAnimation(leavingPage);
  }
  return rootTransition;
};


/***/ }),

/***/ 9522:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/helpers-78efeec3.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ addEventListener),
/* harmony export */   b: () => (/* binding */ removeEventListener),
/* harmony export */   c: () => (/* binding */ componentOnReady),
/* harmony export */   d: () => (/* binding */ renderHiddenInput),
/* harmony export */   e: () => (/* binding */ debounceEvent),
/* harmony export */   f: () => (/* binding */ focusVisibleElement),
/* harmony export */   g: () => (/* binding */ getElementRoot),
/* harmony export */   h: () => (/* binding */ inheritAttributes),
/* harmony export */   i: () => (/* binding */ inheritAriaAttributes),
/* harmony export */   j: () => (/* binding */ clamp),
/* harmony export */   k: () => (/* binding */ hasLazyBuild),
/* harmony export */   l: () => (/* binding */ isSafeNumber),
/* harmony export */   m: () => (/* binding */ hasShadowDom),
/* harmony export */   n: () => (/* binding */ assert),
/* harmony export */   o: () => (/* binding */ isEndSide),
/* harmony export */   p: () => (/* binding */ debounce),
/* harmony export */   q: () => (/* binding */ pointerCoord),
/* harmony export */   r: () => (/* binding */ raf),
/* harmony export */   s: () => (/* binding */ shallowEqualStringMap),
/* harmony export */   t: () => (/* binding */ transitionEndAsync)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const transitionEndAsync = (el, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};
/**
 * Allows developer to wait for a transition
 * to finish and fallback to a timer if the
 * transition is cancelled or otherwise
 * never finishes. Also see transitionEndAsync
 * which is an await-able version of this.
 */
const transitionEnd = (el, expectedDuration = 0, callback) => {
  let unRegTrans;
  let animationTimeout;
  const opts = {
    passive: true
  };
  const ANIMATION_FALLBACK_TIMEOUT = 500;
  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };
  const onTransitionEnd = ev => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev);
    }
  };
  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
    unRegTrans = () => {
      if (animationTimeout !== undefined) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }
      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }
  return unregister;
};
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    // eslint-disable-next-line custom-rules/no-component-on-ready-method
    el.componentOnReady().then(resolvedEl => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};
/**
 * This functions checks if a Stencil component is using
 * the lazy loaded build of Stencil. Returns `true` if
 * the component is lazy loaded. Returns `false` otherwise.
 */
const hasLazyBuild = stencilEl => {
  return stencilEl.componentOnReady !== undefined;
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
const ariaAttributes = ['role', 'aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-braillelabel', 'aria-brailleroledescription', 'aria-busy', 'aria-checked', 'aria-colcount', 'aria-colindex', 'aria-colindextext', 'aria-colspan', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-description', 'aria-details', 'aria-disabled', 'aria-errormessage', 'aria-expanded', 'aria-flowto', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live', 'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-placeholder', 'aria-posinset', 'aria-pressed', 'aria-readonly', 'aria-relevant', 'aria-required', 'aria-roledescription', 'aria-rowcount', 'aria-rowindex', 'aria-rowindextext', 'aria-rowspan', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext'];
/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */
const inheritAriaAttributes = (el, ignoreList) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter(attr => !ignoreList.includes(attr));
  }
  return inheritAttributes(el, attributesToInherit);
};
const addEventListener = (el, eventName, callback, opts) => {
  return el.addEventListener(eventName, callback, opts);
};
const removeEventListener = (el, eventName, callback, opts) => {
  return el.removeEventListener(eventName, callback, opts);
};
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = h => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
const hasShadowDom = el => {
  return !!el.shadowRoot && !!el.attachShadow;
};
const focusVisibleElement = el => {
  el.focus();
  /**
   * When programmatically focusing an element,
   * the focus-visible utility will not run because
   * it is expecting a keyboard event to have triggered this;
   * however, there are times when we need to manually control
   * this behavior so we call the `setFocus` method on ion-app
   * which will let us explicitly set the elements to focus.
   */
  if (el.classList.contains('ion-focusable')) {
    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');
    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};
const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // eslint-disable-line
    throw new Error(message);
  }
};
const pointerCoord = ev => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return {
        x: touch.clientX,
        y: touch.clientY
      };
    }
    if (ev.pageX !== undefined) {
      return {
        x: ev.pageX,
        y: ev.pageY
      };
    }
  }
  return {
    x: 0,
    y: 0
  };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
const isEndSide = side => {
  const isRTL = document.dir === 'rtl';
  switch (side) {
    case 'start':
      return isRTL;
    case 'end':
      return !isRTL;
    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};
const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
/**
 * Check whether the two string maps are shallow equal.
 *
 * undefined is treated as an empty map.
 *
 * @returns whether the keys are the same and the values are shallow equal.
 */
const shallowEqualStringMap = (map1, map2) => {
  map1 !== null && map1 !== void 0 ? map1 : map1 = {};
  map2 !== null && map2 !== void 0 ? map2 : map2 = {};
  if (map1 === map2) {
    return true;
  }
  const keys1 = Object.keys(map1);
  if (keys1.length !== Object.keys(map2).length) {
    return false;
  }
  for (const k1 of keys1) {
    if (!(k1 in map2)) {
      return false;
    }
    if (map1[k1] !== map2[k1]) {
      return false;
    }
  }
  return true;
};
/**
 * Checks input for usable number. Not NaN and not Infinite.
 */
const isSafeNumber = input => {
  return typeof input === 'number' && !isNaN(input) && isFinite(input);
};


/***/ }),

/***/ 9627:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/polyfills/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyPolyfills: () => (/* binding */ applyPolyfills)
/* harmony export */ });
function applyPolyfills() {
  var promises = [];
  if (typeof window !== 'undefined') {
    var win = window;
    if (!win.customElements || win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode)) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-dom */ 7278).then(__webpack_require__.t.bind(__webpack_require__, /*! ./dom.js */ 3003, 23)));
    }
    var checkIfURLIsSupported = function () {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return u.href === 'http://a/c%20d' && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ('function' !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win.NodeList && !win.NodeList.prototype.forEach || !win.fetch || !checkIfURLIsSupported() || typeof WeakMap == 'undefined') {
      promises.push(__webpack_require__.e(/*! import() | polyfills-core-js */ 9329).then(__webpack_require__.t.bind(__webpack_require__, /*! ./core-js.js */ 2766, 23)));
    }
  }
  return Promise.all(promises);
}

/***/ }),

/***/ 9772:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-f9f5d018.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a5d50daf.js */ 6639);
/* harmony import */ var _hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-back-button-864101a3.js */ 284);
/* harmony import */ var _index_738d7504_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-738d7504.js */ 7243);
/* harmony import */ var _helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-78efeec3.js */ 9522);
/* harmony import */ var _ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-ca86cf32.js */ 1367);
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 1865);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







/**
 * baseAnimation
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 */
const baseAnimation = isIos => {
  // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
  // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
  /**
   * "Apply the sharp curve to items temporarily leaving the screen that may return
   * from the same exit point. When they return, use the deceleration curve. On mobile,
   * this transition typically occurs over 300ms" -- MD Motion Guide
   */
  return (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)().duration(isIos ? 400 : 300);
};

/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
const menuOverlayAnimation = menu => {
  let closedX;
  let openedX;
  const width = menu.width + 8;
  const menuAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  if (menu.isEndSide) {
    // right side
    closedX = width + 'px';
    openedX = '0px';
  } else {
    // left side
    closedX = -width + 'px';
    openedX = '0px';
  }
  menuAnimation.addElement(menu.menuInnerEl).fromTo('transform', `translateX(${closedX})`, `translateX(${openedX})`);
  const mode = (0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const isIos = mode === 'ios';
  const opacity = isIos ? 0.2 : 0.25;
  backdropAnimation.addElement(menu.backdropEl).fromTo('opacity', 0.01, opacity);
  return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
};

/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
const menuPushAnimation = menu => {
  let contentOpenedX;
  let menuClosedX;
  const mode = (0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const width = menu.width;
  if (menu.isEndSide) {
    contentOpenedX = -width + 'px';
    menuClosedX = width + 'px';
  } else {
    contentOpenedX = width + 'px';
    menuClosedX = -width + 'px';
  }
  const menuAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.menuInnerEl).fromTo('transform', `translateX(${menuClosedX})`, 'translateX(0px)');
  const contentAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.contentEl).fromTo('transform', 'translateX(0px)', `translateX(${contentOpenedX})`);
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
  return baseAnimation(mode === 'ios').addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
};

/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
const menuRevealAnimation = menu => {
  const mode = (0,_ionic_global_ca86cf32_js__WEBPACK_IMPORTED_MODULE_5__.b)(menu);
  const openedX = menu.width * (menu.isEndSide ? -1 : 1) + 'px';
  const contentOpen = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_6__.c)().addElement(menu.contentEl) // REVIEW
  .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
  return baseAnimation(mode === 'ios').addAnimation(contentOpen);
};
const createMenuController = () => {
  const menuAnimations = new Map();
  const menus = [];
  const open = /*#__PURE__*/function () {
    var _ref = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu, true);
      if (menuEl) {
        return menuEl.open();
      }
      return false;
    });
    return function open(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  const close = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield menu !== undefined ? get(menu, true) : getOpen();
      if (menuEl !== undefined) {
        return menuEl.close();
      }
      return false;
    });
    return function close(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  const toggle = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu, true);
      if (menuEl) {
        return menuEl.toggle();
      }
      return false;
    });
    return function toggle(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  const enable = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldEnable, menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        menuEl.disabled = !shouldEnable;
      }
      return menuEl;
    });
    return function enable(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  const swipeGesture = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldEnable, menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        menuEl.swipeGesture = shouldEnable;
      }
      return menuEl;
    });
    return function swipeGesture(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  const isOpen = /*#__PURE__*/function () {
    var _ref6 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      if (menu != null) {
        const menuEl = yield get(menu);
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        return menuEl !== undefined && menuEl.isOpen();
      } else {
        const menuEl = yield getOpen();
        return menuEl !== undefined;
      }
    });
    return function isOpen(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  const isEnabled = /*#__PURE__*/function () {
    var _ref7 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
      const menuEl = yield get(menu);
      if (menuEl) {
        return !menuEl.disabled;
      }
      return false;
    });
    return function isEnabled(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Finds and returns the menu specified by "menu" if registered.
   * @param menu - The side or ID of the desired menu
   * @param logOnMultipleSideMenus - If true, this function will log a warning
   * if "menu" is a side but multiple menus on the same side were found. Since this function
   * is used in multiple places, we default this log to false so that the calling
   * functions can choose whether or not it is appropriate to log this warning.
   */
  const get = /*#__PURE__*/function () {
    var _ref8 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu, logOnMultipleSideMenus = false) {
      yield waitUntilReady();
      if (menu === 'start' || menu === 'end') {
        // there could be more than one menu on the same side
        // so first try to get the enabled one
        const menuRefs = menus.filter(m => m.side === menu && !m.disabled);
        if (menuRefs.length >= 1) {
          if (menuRefs.length > 1 && logOnMultipleSideMenus) {
            (0,_index_738d7504_js__WEBPACK_IMPORTED_MODULE_3__.p)(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map(m => m.el));
          }
          return menuRefs[0].el;
        }
        // didn't find a menu side that is enabled
        // so try to get the first menu side found
        const sideMenuRefs = menus.filter(m => m.side === menu);
        if (sideMenuRefs.length >= 1) {
          if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) {
            (0,_index_738d7504_js__WEBPACK_IMPORTED_MODULE_3__.p)(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map(m => m.el));
          }
          return sideMenuRefs[0].el;
        }
      } else if (menu != null) {
        // the menuId was not left or right
        // so try to get the menu by its "id"
        return find(m => m.menuId === menu);
      }
      // return the first enabled menu
      const menuEl = find(m => !m.disabled);
      if (menuEl) {
        return menuEl;
      }
      // get the first menu in the array, if one exists
      return menus.length > 0 ? menus[0].el : undefined;
    });
    return function get(_x10) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Get the instance of the opened menu. Returns `null` if a menu is not found.
   */
  const getOpen = /*#__PURE__*/function () {
    var _ref9 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return _getOpenSync();
    });
    return function getOpen() {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Get all menu instances.
   */
  const getMenus = /*#__PURE__*/function () {
    var _ref10 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return getMenusSync();
    });
    return function getMenus() {
      return _ref10.apply(this, arguments);
    };
  }();
  /**
   * Get whether or not a menu is animating. Returns `true` if any
   * menu is currently animating.
   */
  const isAnimating = /*#__PURE__*/function () {
    var _ref11 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield waitUntilReady();
      return isAnimatingSync();
    });
    return function isAnimating() {
      return _ref11.apply(this, arguments);
    };
  }();
  const registerAnimation = (name, animation) => {
    menuAnimations.set(name, animation);
  };
  const _register = menu => {
    if (menus.indexOf(menu) < 0) {
      menus.push(menu);
    }
  };
  const _unregister = menu => {
    const index = menus.indexOf(menu);
    if (index > -1) {
      menus.splice(index, 1);
    }
  };
  const _setOpen = /*#__PURE__*/function () {
    var _ref12 = (0,C_Users_davif_completoCare_front_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu, shouldOpen, animated, role) {
      if (isAnimatingSync()) {
        return false;
      }
      if (shouldOpen) {
        const openedMenu = yield getOpen();
        if (openedMenu && menu.el !== openedMenu) {
          yield openedMenu.setOpen(false, false);
        }
      }
      return menu._setOpen(shouldOpen, animated, role);
    });
    return function _setOpen(_x11, _x12, _x13, _x14) {
      return _ref12.apply(this, arguments);
    };
  }();
  const _createAnimation = (type, menuCmp) => {
    const animationBuilder = menuAnimations.get(type); // TODO(FW-2832): type
    if (!animationBuilder) {
      throw new Error('animation not registered');
    }
    const animation = animationBuilder(menuCmp);
    return animation;
  };
  const _getOpenSync = () => {
    return find(m => m._isOpen);
  };
  const getMenusSync = () => {
    return menus.map(menu => menu.el);
  };
  const isAnimatingSync = () => {
    return menus.some(menu => menu.isAnimating);
  };
  const find = predicate => {
    const instance = menus.find(predicate);
    if (instance !== undefined) {
      return instance.el;
    }
    return undefined;
  };
  const waitUntilReady = () => {
    return Promise.all(Array.from(document.querySelectorAll('ion-menu')).map(menu => new Promise(resolve => (0,_helpers_78efeec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(menu, resolve))));
  };
  registerAnimation('reveal', menuRevealAnimation);
  registerAnimation('push', menuPushAnimation);
  registerAnimation('overlay', menuOverlayAnimation);
  _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === null || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d === void 0 ? void 0 : _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_1__.d.addEventListener('ionBackButton', ev => {
    const openMenu = _getOpenSync();
    if (openMenu) {
      ev.detail.register(_hardware_back_button_864101a3_js__WEBPACK_IMPORTED_MODULE_2__.MENU_BACK_BUTTON_PRIORITY, () => {
        return openMenu.close();
      });
    }
  });
  return {
    registerAnimation,
    get,
    getMenus,
    getOpen,
    isEnabled,
    swipeGesture,
    isAnimating,
    isOpen,
    enable,
    toggle,
    close,
    open,
    _getOpenSync,
    _createAnimation,
    _register,
    _unregister,
    _setOpen
  };
};
const menuController = /*@__PURE__*/createMenuController();


/***/ })

}]);
//# sourceMappingURL=1507.js.map