"use strict";
(self["webpackChunkfront_ionic"] = self["webpackChunkfront_ionic"] || []).push([[2339],{

/***/ 2953:
/*!***********************************************!*\
  !*** ./src/app/pages/entrada/entrada.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntradaPage: () => (/* binding */ EntradaPage)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7282);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionicons */ 5846);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons/icons */ 7958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





let EntradaPage = /*#__PURE__*/(() => {
  class EntradaPage {
    constructor() {
      (0,ionicons__WEBPACK_IMPORTED_MODULE_1__.a)({
        'person-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.personOutline,
        'medkit-outline': ionicons_icons__WEBPACK_IMPORTED_MODULE_0__.medkitOutline
      });
    }
    static ɵfac = function EntradaPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntradaPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EntradaPage,
      selectors: [["app-entrada"]],
      decls: 21,
      vars: 0,
      consts: [[1, "ion-padding", "ion-text-center"], [1, "welcome-container"], [1, "buttons-container"], ["expand", "block", "routerLink", "/login-cuidador", 1, "profile-button"], [1, "button-content"], ["name", "medkit-outline"], ["expand", "block", "routerLink", "/acesso-idoso", 1, "profile-button"], ["name", "person-outline"]],
      template: function EntradaPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LifeCare");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 0)(5, "div", 1)(6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bem-vindo ao LifeCare");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Selecione seu perfil para continuar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "ion-button", 3)(12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cuidador");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 6)(17, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Idoso");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.R],
      styles: ["@charset \"UTF-8\";\n.welcome-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  color: var(--ion-color-primary);\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 40px;\n  color: #666;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, #000000, #1a1a1a);\n}\nion-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: radial-gradient(circle at 15% 15%, rgba(255, 215, 0, 0.08) 5%, transparent 15%), radial-gradient(circle at 85% 85%, rgba(255, 215, 0, 0.08) 5%, transparent 15%);\n  z-index: 0;\n}\n\n.welcome-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: var(--ion-color-primary);\n  text-align: center;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 3rem;\n  color: #ffffff;\n  text-align: center;\n  opacity: 0.9;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 350px;\n  margin: 0 auto;\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  height: 90px;\n  --background: rgba(30, 30, 30, 0.7);\n  --background-hover: rgba(40, 40, 40, 0.8);\n  --background-activated: rgba(40, 40, 40, 0.8);\n  --border-radius: 16px;\n  --border-color: var(--ion-color-primary);\n  --border-style: solid;\n  --border-width: 2px;\n  --box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.profile-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  --box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);\n}\n.profile-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.15), transparent);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.profile-button[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n\n.button-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.button-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.2rem;\n  margin-top: 0.5rem;\n  color: var(--ion-color-primary);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 5px;\n  color: var(--ion-color-primary);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  height: 80px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.button-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZW50cmFkYS9lbnRyYWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBREM7RUFDQyx1REFBQTtBQUlGO0FBRkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0xBQ0U7RUFFRixVQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsMkJBQUE7RUFDQSw0Q0FBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUZBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdFO0VBQ0UsVUFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUhGOztBQU1BLGNBQUE7QUFDQTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBRG5CO0VBRUE7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUFFakI7QUFDRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDAwMDAwLCAjMWExYTFhKTtcclxuICBcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE1JSAxNSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpLFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDg1JSA4NSUsIHJnYmEoMjU1LCAyMTUsIDAsIDAuMDgpIDUlLCB0cmFuc3BhcmVudCAxNSUpO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbn1cclxuXHJcbi53ZWxjb21lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZS1idXR0b24ge1xyXG4gIGhlaWdodDogOTBweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoNDAsIDQwLCA0MCwgMC44KTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDQwLCA0MCwgNDAsIDAuOCk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgLS1ib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG4gIFxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDI1NSwgMjE1LCAwLCAwLjE1KSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLyogQW5pbWHDg8Knw4PCtWVzICovXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5wcm9maWxlLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return EntradaPage;
})();

/***/ }),

/***/ 4720:
/*!*************************************************!*\
  !*** ./src/app/pages/entrada/entrada.routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _entrada_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrada.page */ 2953);

const routes = [{
  path: '',
  component: _entrada_page__WEBPACK_IMPORTED_MODULE_0__.EntradaPage
}];

/***/ })

}]);
//# sourceMappingURL=2339.js.map