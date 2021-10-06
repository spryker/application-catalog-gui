function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-catalog-page-catalog-module"], {
  /***/
  "../frontend/app-store-catalog/src/page-catalog/components/app-card/application-card.component.ts": function frontendAppStoreCatalogSrcPageCatalogComponentsAppCardApplicationCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationCardComponent", function () {
      return ApplicationCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../swagger */
    "../frontend/app-store-catalog/swagger/index.ts");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../utils/utils */
    "../frontend/app-store-catalog/utils/utils.ts");
    /* harmony import */


    var _assets_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../assets/icons */
    "../frontend/app-store-catalog/src/assets/icons/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");
    /* harmony import */


    var _common_application_rating_application_rating_application_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../common/application-rating/application-rating/application-rating.component */
    "../frontend/app-store-catalog/src/common/application-rating/application-rating/application-rating.component.ts");
    /* harmony import */


    var _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../common/connected-badge/connected-badge/connected-badge.component */
    "../frontend/app-store-catalog/src/common/connected-badge/connected-badge/connected-badge.component.ts");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ApplicationCardComponent_spy_card_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.getPartnerTypeIcon());
      }
    }

    function ApplicationCardComponent_spy_card_0_app_application_rating_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-application-rating", 15);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx_r4.app.rate);
      }
    }

    function ApplicationCardComponent_spy_card_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.trialIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "HOME.FILTERS.TRIAL"), " ");
      }
    }

    function ApplicationCardComponent_spy_card_0_app_status_badge_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-status-badge", 18);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r6.app.status);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ApplicationCardComponent_spy_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationCardComponent_spy_card_0_Template_spy_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.navigateToDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationCardComponent_spy_card_0_div_4_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationCardComponent_spy_card_0_app_application_rating_9_Template, 1, 1, "app-application-rating", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApplicationCardComponent_spy_card_0_div_11_Template, 4, 4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationCardComponent_spy_card_0_app_status_badge_12_Template, 1, 1, "app-status-badge", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, _r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.app.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.app.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.app.partnerType !== "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.app.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.app.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.app.rate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.app.isTrial);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIsConnectionBadgeShown());
      }
    }

    function ApplicationCardComponent_ng_template_1_spy_chips_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-chips", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r10, " ");
      }
    }

    function ApplicationCardComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationCardComponent_ng_template_1_spy_chips_0_Template, 2, 1, "spy-chips", 19);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.app.tags);
      }
    }

    var ApplicationCardComponent = /*#__PURE__*/function () {
      function ApplicationCardComponent(router) {
        _classCallCheck(this, ApplicationCardComponent);

        this.router = router;
        this.trialIcon = _assets_icons__WEBPACK_IMPORTED_MODULE_4__["IconTrialModule"].icon;
      }

      _createClass(ApplicationCardComponent, [{
        key: "navigateToDetails",
        value: function navigateToDetails() {
          this.router.navigate(['catalog', this.app.id]);
        }
      }, {
        key: "getIsConnectionBadgeShown",
        value: function getIsConnectionBadgeShown() {
          return this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].Disconnected && this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_2__["ConnectionStatus"].NotConnected;
        }
      }, {
        key: "getPartnerTypeIcon",
        value: function getPartnerTypeIcon() {
          var _a;

          return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getPartnerTypeIcon"])((_a = this.app) === null || _a === void 0 ? void 0 : _a.partnerType);
        }
      }]);

      return ApplicationCardComponent;
    }();

    ApplicationCardComponent.ɵfac = function ApplicationCardComponent_Factory(t) {
      return new (t || ApplicationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ApplicationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationCardComponent,
      selectors: [["app-application-card"]],
      hostAttrs: [1, "application-card"],
      inputs: {
        app: "app"
      },
      decls: 3,
      vars: 1,
      consts: [["hoverable", "", 3, "actions", "click", 4, "ngIf"], ["categories", ""], ["hoverable", "", 3, "actions", "click"], [1, "spy-row"], [1, "spy-col"], [1, "application-card__logo", 3, "src", "alt"], ["class", "spy-col-2 application-card__partner-type", 4, "ngIf"], [1, "application-card__title"], [1, "application-card__description"], ["class", "application-card__rate", 3, "rating", 4, "ngIf"], [1, "application-card__statuses"], ["class", "application-card__trial-badge", 4, "ngIf"], ["class", "application-card__connected-badge", 3, "status", 4, "ngIf"], [1, "spy-col-2", "application-card__partner-type"], [1, "application-card__partner-type-icon", 3, "name"], [1, "application-card__rate", 3, "rating"], [1, "application-card__trial-badge"], [1, "application-card__trial-badge-icon", 3, "name"], [1, "application-card__connected-badge", 3, "status"], ["color", "gray", "maxWidth", "none", 4, "ngFor", "ngForOf"], ["color", "gray", "maxWidth", "none"]],
      template: function ApplicationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationCardComponent_spy_card_0_Template, 13, 11, "spy-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.app);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spryker_card__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _spryker_icon__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _common_application_rating_application_rating_application_rating_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationRatingComponent"], _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_9__["ConnectedBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_10__["ChipsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n.application-card {\n  display: block;\n  width: 370px;\n}\n.application-card .ant-card-body {\n  min-height: 300px;\n  padding: 20px 30px;\n}\n.application-card .ant-card-actions {\n  padding: 0 30px;\n}\n.application-card .ant-card-actions li {\n  text-align: left;\n}\n.application-card__logo {\n  display: block;\n  height: 70px;\n  max-width: 140px;\n}\n.application-card__partner-type {\n  font-size: 40px;\n  text-align: right;\n}\n.application-card__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #121212;\n  margin: 15px 0 10px 0;\n}\n.application-card__description {\n  font-weight: 500;\n  line-height: 1.716;\n}\n.application-card__statuses {\n  display: flex;\n  margin: 16px 0 0;\n}\n.application-card__trial-badge {\n  margin: 0 20px 0 0;\n  color: #121212;\n}\n.application-card__trial-badge-icon {\n  vertical-align: middle;\n  margin: 0 5px 0 0;\n  line-height: 16px;\n}\n.application-card__rate {\n  display: block;\n  margin: 14px 0 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9hcHAtY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2ZvbnRzLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL2Zyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9hcHAtY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQ0NNO0FEQU4sb0JBQW9CO0FBQ3BCOztFQUVFO0FFREY7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRkdKO0FFTEE7RUFLUSxpQkFBQTtFQUNBLGtCQUFBO0FGR1I7QUVUQTtFQVVRLGVBQUE7QUZFUjtBRVpBO0VBYVksZ0JBQUE7QUZFWjtBRUVJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRkFSO0FFR0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUZEUjtBRUlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FGRlI7QUVLSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUZIUjtBRU1JO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FGSlI7QUVPSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBRkxSO0FFTVE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZKWjtBRVFJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FGTlIiLCJmaWxlIjoiZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL2FwcC1jYXJkL2FwcGxpY2F0aW9uLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbi8qKlxuICogUmV0dXJucyBhIG1hcCB3aXRoIHRoZSBsaXN0IG9mIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgZ2VuZXJhdGUgZ3JpZCBzZWxlY3RvcnMgd2l0aCBicmVha3BvaW50cy5cbiAqL1xuLmFwcGxpY2F0aW9uLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM3MHB4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmQgLmFudC1jYXJkLWJvZHkge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmQgLmFudC1jYXJkLWFjdGlvbnMge1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG4uYXBwbGljYXRpb24tY2FyZCAuYW50LWNhcmQtYWN0aW9ucyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcGFydG5lci10eXBlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIG1hcmdpbjogMTVweCAwIDEwcHggMDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxNjtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19zdGF0dXNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTZweCAwIDA7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fdHJpYWwtYmFkZ2Uge1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG4gIGNvbG9yOiAjMTIxMjEyO1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX3RyaWFsLWJhZGdlLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcmF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE0cHggMCAwO1xufVxuIiwiQGltcG9ydCAoY3NzKVxuICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuXG5AZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcblxuQHRleHQtY29sb3I6IEBncmF5LWRhcms7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnk6IEBpbms7XG5AaGVhZGluZy1jb2xvcjogQGluaztcblxuQGZvbnQtc2l6ZS1sZzogMTZweDtcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtc206IDEycHg7XG5cbkBoZWFkaW5nLTEtZm9udC1zaXplOiAzMHB4O1xuQGhlYWRpbmctMi1mb250LXNpemU6IDI2cHg7XG5AaGVhZGluZy0zLWZvbnQtc2l6ZTogMjBweDtcbkBoZWFkaW5nLTQtZm9udC1zaXplOiAxOHB4O1xuQGhlYWRpbmctNS1mb250LXNpemU6IDE2cHg7XG5cbkBsaW5lLWhlaWdodC1iYXNlOiAxLjM7XG5cbkBsZXR0ZXItc3BhY2luZy1iYXNlOiAwLjA4cHg7XG5cbkBmb250LXdlaWdodC1kZWZhdWx0OiA0MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG5AZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XG5cbkBmb250LWRlZmF1bHQ6IEBmb250LXdlaWdodC1tZWRpdW0gQGZvbnQtc2l6ZS1iYXNlIC8gQGxpbmUtaGVpZ2h0LWJhc2VcbiAgQGZvbnQtZmFtaWx5O1xuXG5AaGVhZGluZy0xLXNpemU6IEBoZWFkaW5nLTEtZm9udC1zaXplO1xuQGhlYWRpbmctMi1zaXplOiBAaGVhZGluZy0yLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTMtc2l6ZTogQGhlYWRpbmctMy1mb250LXNpemU7XG5AaGVhZGluZy00LXNpemU6IEBoZWFkaW5nLTQtZm9udC1zaXplO1xuIiwiQGltcG9ydCAnfkBzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy9pbmRleC5sZXNzJztcbkBpbXBvcnQgJy4vYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQudGhlbWUubGVzcyc7XG5cbi5hcHBsaWNhdGlvbi1jYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogQGFwcC1jYXJkLXdpZHRoO1xuXG4gICAgLkB7Y2FyZC1wcmVmaXgtY2xzfS1ib2R5IHtcbiAgICAgICAgbWluLWhlaWdodDogQGFwcC1jYXJkLW1pbi1oZWlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IEBhcHAtY2FyZC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5Ae2NhcmQtcHJlZml4LWNsc30tYWN0aW9ucyB7XG4gICAgICAgIHBhZGRpbmc6IDAgQGNhcmQtcGFkZGluZy1iYXNlO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19sb2dvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogQGFwcC1jYXJkLWxvZ28taGVpZ2h0O1xuICAgICAgICBtYXgtd2lkdGg6IEBhcHAtY2FyZC1sb2dvLW1heC13aWR0aDtcbiAgICB9XG5cbiAgICAmX19wYXJ0bmVyLXR5cGUge1xuICAgICAgICBmb250LXNpemU6IEBhcHAtY2FyZC1wYXJ0bmVyLXR5cGUtZm9udC1zaXplO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1sZztcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1zZW1pLWJvbGQ7XG4gICAgICAgIGNvbG9yOiBAaW5rO1xuICAgICAgICBtYXJnaW46IEBhcHAtY2FyZC10aXRsZS1tYXJnaW47XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LW1lZGl1bTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IEBhcHAtY2FyZC1kZXNjcmlwdGlvbi1saW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAmX19zdGF0dXNlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogQGFwcC1jYXJkLXN0YXR1c2VzLW1hcmdpbjtcbiAgICB9XG5cbiAgICAmX190cmlhbC1iYWRnZSB7XG4gICAgICAgIG1hcmdpbjogQGFwcC1jYXJkLXRyaWFsLWJhZGdlLW1hcmdpbjtcbiAgICAgICAgY29sb3I6IEBpbms7XG4gICAgICAgICYtaWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtdHJpYWwtYmFkZ2UtaWNvbi1tYXJnaW47XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQGFwcC1jYXJkLXRyaWFsLWJhZGdlLWljb24tbGluZS1oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19yYXRlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogQGFwcC1jYXJkLXJhdGUtbWFyZ2luO1xuICAgIH1cbn1cbiJdfQ== */"],
      encapsulation: 2,
      changeDetection: 0
    });

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-card',
          templateUrl: './application-card.component.html',
          styleUrls: ['./application-card.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            "class": 'application-card'
          }
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        app: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../frontend/app-store-catalog/src/page-catalog/components/filters/filters.component.ts": function frontendAppStoreCatalogSrcPageCatalogComponentsFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
      return FiltersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");

    function FiltersComponent_spy_chips_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-chips", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_spy_chips_0_Template_spy_chips_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var filtersItem_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.clickFilterItem(filtersItem_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filtersItem_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-filters__item--active", ctx_r0.activeValue === filtersItem_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", filtersItem_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filtersItem_r1.text, "\n");
      }
    }

    var FiltersComponent = /*#__PURE__*/function () {
      function FiltersComponent() {
        _classCallCheck(this, FiltersComponent);

        this.selectFiltersItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FiltersComponent, [{
        key: "clickFilterItem",
        value: function clickFilterItem(filterItem) {
          this.selectFiltersItem.emit(filterItem.value);
        }
      }]);

      return FiltersComponent;
    }();

    FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
      return new (t || FiltersComponent)();
    };

    FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FiltersComponent,
      selectors: [["app-filters"]],
      hostAttrs: [1, "app-filters"],
      inputs: {
        filterItems: "filterItems",
        activeValue: "activeValue"
      },
      outputs: {
        selectFiltersItem: "selectFiltersItem"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "app-filters__item", "maxWidth", "none", 3, "app-filters__item--active", "click", 4, "ngFor", "ngForOf"], ["maxWidth", "none", 1, "app-filters__item", 3, "click"], [1, "app-filters__item-icon", 3, "name"]],
      template: function FiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FiltersComponent_spy_chips_0_Template, 3, 4, "spy-chips", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_2__["ChipsComponent"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n.app-filters__item {\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.app-filters__item.spy-chips {\n  padding: 13px 16px 11px 16px;\n  background-color: #fff;\n  color: #121212;\n  line-height: 22px;\n  margin: 0 19px 0 0;\n}\n.app-filters__item--active {\n  border-color: #1bbea0;\n}\n.app-filters__item--active.spy-chips {\n  background-color: #f1f8f7;\n}\n.app-filters__item-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  font-size: 22px;\n  line-height: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC92YXJpYWJsZXMvZm9udHMubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2UvZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2Uvbm9kZV9tb2R1bGVzL0BzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy91c2VyLW1lbnUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkNDTTtBREFOLG9CQUFvQjtBQUNwQjs7RUFFRTtBRUFFO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FGRVI7QUdSQztFRFNXLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRkVaO0FFQ1E7RUFDSSxxQkFBQTtBRkNaO0FHbEJDO0VEbUJlLHlCQUFBO0FGRWhCO0FFRVE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FGQVoiLCJmaWxlIjoiZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgbWFwIHdpdGggdGhlIGxpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBnZW5lcmF0ZSBncmlkIHNlbGVjdG9ycyB3aXRoIGJyZWFrcG9pbnRzLlxuICovXG4uYXBwLWZpbHRlcnNfX2l0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmFwcC1maWx0ZXJzX19pdGVtLnNweS1jaGlwcyB7XG4gIHBhZGRpbmc6IDEzcHggMTZweCAxMXB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDE5cHggMCAwO1xufVxuLmFwcC1maWx0ZXJzX19pdGVtLS1hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMxYmJlYTA7XG59XG4uYXBwLWZpbHRlcnNfX2l0ZW0tLWFjdGl2ZS5zcHktY2hpcHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOGY3O1xufVxuLmFwcC1maWx0ZXJzX19pdGVtLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4iLCJAaW1wb3J0IChjc3MpXG4gIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG5cbkBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLFxuICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuXG5AdGV4dC1jb2xvcjogQGdyYXktZGFyaztcbkB0ZXh0LWNvbG9yLXNlY29uZGFyeTogQGluaztcbkBoZWFkaW5nLWNvbG9yOiBAaW5rO1xuXG5AZm9udC1zaXplLWxnOiAxNnB4O1xuQGZvbnQtc2l6ZS1iYXNlOiAxNHB4O1xuQGZvbnQtc2l6ZS1zbTogMTJweDtcblxuQGhlYWRpbmctMS1mb250LXNpemU6IDMwcHg7XG5AaGVhZGluZy0yLWZvbnQtc2l6ZTogMjZweDtcbkBoZWFkaW5nLTMtZm9udC1zaXplOiAyMHB4O1xuQGhlYWRpbmctNC1mb250LXNpemU6IDE4cHg7XG5AaGVhZGluZy01LWZvbnQtc2l6ZTogMTZweDtcblxuQGxpbmUtaGVpZ2h0LWJhc2U6IDEuMztcblxuQGxldHRlci1zcGFjaW5nLWJhc2U6IDAuMDhweDtcblxuQGZvbnQtd2VpZ2h0LWRlZmF1bHQ6IDQwMDtcbkBmb250LXdlaWdodC1tZWRpdW06IDUwMDtcbkBmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcblxuQGZvbnQtZGVmYXVsdDogQGZvbnQtd2VpZ2h0LW1lZGl1bSBAZm9udC1zaXplLWJhc2UgLyBAbGluZS1oZWlnaHQtYmFzZVxuICBAZm9udC1mYW1pbHk7XG5cbkBoZWFkaW5nLTEtc2l6ZTogQGhlYWRpbmctMS1mb250LXNpemU7XG5AaGVhZGluZy0yLXNpemU6IEBoZWFkaW5nLTItZm9udC1zaXplO1xuQGhlYWRpbmctMy1zaXplOiBAaGVhZGluZy0zLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTQtc2l6ZTogQGhlYWRpbmctNC1mb250LXNpemU7XG4iLCJAaW1wb3J0ICd+QHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2luZGV4Lmxlc3MnO1xuQGltcG9ydCAnLi9maWx0ZXJzLmNvbXBvbmVudC50aGVtZS5sZXNzJztcblxuLmFwcC1maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IEBmaWx0ZXJzLWl0ZW0tYm9yZGVyO1xuXG4gICAgICAgICYuQHtjaGlwcy1wcmVmaXgtY2xzfSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBAZmlsdGVycy1pdGVtLXBhZGRpbmc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogQGluaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAZmlsdGVycy1pdGVtLWxpbmUtaGVpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luOiBAZmlsdGVycy1pdGVtLW1hcmdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEBncmVlbjtcbiAgICAgICAgICAgICYuQHtjaGlwcy1wcmVmaXgtY2xzfSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGdyZWVuLWxpZ2h0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbjogQGZpbHRlcnMtaXRlbS1pY29uLW1hcmdpbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogQGZpbHRlcnMtaXRlbS1pY29uLWZvbnQtc2l6ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBAZmlsdGVycy1pdGVtLWljb24tbGluZS1oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAdXNlci1tZW51LXByZWZpeC1jbHM6IH4nQHtzcHJ5a2VyLXByZWZpeH0tdXNlci1tZW51JztcblxuQHVzZXItbWVudS1hY3Rpb24tc2l6ZTogNTBweDtcbkB1c2VyLW1lbnUtYWN0aW9uLWJvcmRlci1yYWRpdXM6IDUwJTtcbkB1c2VyLW1lbnUtYWN0aW9uLWJvcmRlcjogMXB4IHNvbGlkIEB0cmFuc3BhcmVudDtcbkB1c2VyLW1lbnUtaWNvbi1zaXplOiAyNHB4O1xuQHVzZXItbWVudS1jb250ZW50LXdpZHRoOiAzMDBweDtcbkB1c2VyLW1lbnUtY29udGVudC1wYWRkaW5nOiAzcHggMDtcbkB1c2VyLW1lbnUtY29udGVudC1ib3JkZXItcmFkaXVzOiA0cHg7XG5AdXNlci1tZW51LWl0ZW0tcGFkZGluZzogMTVweDtcbkB1c2VyLW1lbnUtaXRlbS1ib3JkZXI6IDFweCBzb2xpZCBAZ3JheTtcbkB1c2VyLW1lbnUtbGluay1wYWRkaW5nOiAxNXB4O1xuQHVzZXItbWVudS1saW5rLWJvcmRlcjogMXB4IHNvbGlkIEBncmF5LWxpZ2h0O1xuQHVzZXItbWVudS1saW5rLWJvcmRlci1yYWRpdXM6IDRweDtcbkB1c2VyLW1lbnUtbGluay1ib3JkZXItaG9yaXpvbnRhbC1pbmRlbnQ6IDVweDtcbiJdfQ== */"],
      encapsulation: 2,
      changeDetection: 0
    });

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filters',
          templateUrl: './filters.component.html',
          styleUrls: ['./filters.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            "class": 'app-filters'
          }
        }]
      }], null, {
        filterItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectFiltersItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../frontend/app-store-catalog/src/page-catalog/components/page-catalog/page-catalog.component.ts": function frontendAppStoreCatalogSrcPageCatalogComponentsPageCatalogPageCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageCatalogComponent", function () {
      return PageCatalogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../swagger */
    "../frontend/app-store-catalog/swagger/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "../frontend/app-store-catalog/src/environments/environment.ts");
    /* harmony import */


    var _services_catalog_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/catalog-page.service */
    "../frontend/app-store-catalog/src/page-catalog/services/catalog-page.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _filters_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../filters/filters.component */
    "../frontend/app-store-catalog/src/page-catalog/components/filters/filters.component.ts");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var _spryker_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @spryker/navigation */
    "../node_modules/@spryker/navigation/__ivy_ngcc__/fesm2015/spryker-navigation.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @spryker/select */
    "../node_modules/@spryker/select/__ivy_ngcc__/fesm2015/spryker-select.js");
    /* harmony import */


    var _spryker_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @spryker/spinner */
    "../node_modules/@spryker/spinner/__ivy_ngcc__/fesm2015/spryker-spinner.js");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");
    /* harmony import */


    var _app_card_application_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../app-card/application-card.component */
    "../frontend/app-store-catalog/src/page-catalog/components/app-card/application-card.component.ts");

    function PageCatalogComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "spy-chips", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.applicationsCountText$), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "HOME.APPLICATIONS_COUNT_TEXT"), " ");
      }
    }

    function PageCatalogComponent_ng_container_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-application-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("app", app_r2);
      }
    }

    function PageCatalogComponent_ng_container_20_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PageCatalogComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCatalogComponent_ng_container_20_div_1_Template, 2, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageCatalogComponent_ng_container_20_ng_template_2_Template, 3, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var app_r2 = ctx.$implicit;

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", app_r2.id !== "Mapp")("ngIfElse", _r4);
      }
    }

    var PageCatalogComponent = /*#__PURE__*/function () {
      function PageCatalogComponent(apiService, translateService, catalogPageService, activatedRoute, router) {
        var _this = this;

        _classCallCheck(this, PageCatalogComponent);

        this.apiService = apiService;
        this.translateService = translateService;
        this.catalogPageService = catalogPageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isAppsLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.apps$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.allAppsCount = 9;
        this.applicationsCountText$ = this.apps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (apps) {
          return 7 === _this.allAppsCount ? apps.length : "".concat(apps.length, " out of ").concat(_this.allAppsCount);
        }));
        this.categories = ['All Categories', 'Payments', 'User-Generated Content', 'Search', 'Customer', 'Content Management', 'Product Information Management', 'Digital Experience Platform'];
        this.categoryOptions = this.categories.map(function (category) {
          return {
            title: category,
            value: category
          };
        });
        this.activeCategory = this.categories[0];
        this.activeFilterItem = null;
        this.navigationItems = this.getNavigationItems();
        this.filterItems$ = this.catalogPageService.getTopFilterItems();
        this.destoyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(PageCatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedRoute.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            var label = params.has('label') ? params.get('label') : null;
            var category = params.has('category') ? params.get('category') : null;
            _this2.activeCategory = category !== null && category !== void 0 ? category : _this2.categories[0];
            _this2.activeFilterItem = label;

            _this2.isAppsLoading$.next(true);

            return _this2.apiService.appsGet(_this2.translateService.currentLang, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].tenantId, label, category);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return _this2.prepareCardData(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destoyed$)).subscribe(function (apps) {
            _this2.isAppsLoading$.next(false);

            _this2.navigationItems = _this2.getNavigationItems();

            _this2.apps$.next(apps);
          });
        }
      }, {
        key: "selectFilterItem",
        value: function selectFilterItem(label) {
          this.router.navigate([], {
            queryParams: {
              label: label
            },
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute
          });
        }
      }, {
        key: "categoryChange",
        value: function categoryChange(selected) {
          this.router.navigate([], {
            queryParams: {
              category: selected === this.categories[0] ? null : selected
            },
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute
          });
        }
      }, {
        key: "prepareCardData",
        value: function prepareCardData(cardData) {
          var _this3 = this;

          return cardData.data.map(function (cardDataItem) {
            var _a;

            return {
              id: cardDataItem.attributes.id,
              logoUrl: cardDataItem.attributes.iconUrl,
              title: cardDataItem.attributes.name,
              description: cardDataItem.attributes.descriptionShort,
              status: _this3.prepareAppStatus(cardDataItem),
              tags: cardDataItem.attributes.categories,
              partnerType: (_a = cardDataItem.attributes.labels[0]) !== null && _a !== void 0 ? _a : null,
              rate: cardDataItem.attributes.rating,
              isTrial: cardDataItem.attributes.labels[1] === 'Free Trial'
            };
          });
        }
      }, {
        key: "prepareAppStatus",
        value: function prepareAppStatus(app) {
          var localStorageItem = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].payoneStorageStatusKey);

          if (app.attributes.id === _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].payoneId && localStorageItem) {
            return localStorageItem;
          }

          return app.attributes.status;
        }
      }, {
        key: "getNavigationItems",
        value: function getNavigationItems() {
          var _this4 = this;

          return this.categories.map(function (category) {
            return {
              title: category,
              url: "#".concat(_this4.router.createUrlTree([], {
                queryParams: {
                  category: category === _this4.categories[0] ? null : category
                },
                queryParamsHandling: 'merge',
                relativeTo: _this4.activatedRoute
              }).toString()),
              isActive: category === _this4.activeCategory
            };
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destoyed$.next();
        }
      }]);

      return PageCatalogComponent;
    }();

    PageCatalogComponent.ɵfac = function PageCatalogComponent_Factory(t) {
      return new (t || PageCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_swagger__WEBPACK_IMPORTED_MODULE_1__["DefaultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalog_page_service__WEBPACK_IMPORTED_MODULE_5__["CatalogPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    PageCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageCatalogComponent,
      selectors: [["app-page-catalog"]],
      hostAttrs: [1, "page-catalog"],
      decls: 22,
      vars: 23,
      consts: [[1, "page-catalog__title"], [1, "page-catalog__filters", 3, "filterItems", "activeValue", "selectFiltersItem"], [1, "spy-row"], [1, "spy-col-pull", "spy-col-lg-hidden", "spy-col-md-hidden", "spy-col-sm-hidden"], [1, "page-catalog__navigation"], [3, "items"], [1, "spy-col"], [1, "spy-row", "spy-row-align-col-flex-end"], ["class", "spy-col", 4, "ngIf"], [1, "spy-col-3", "spy-col-xl-hidden"], [3, "options", "value", "valueChange"], [3, "isSpinning"], [1, "page-catalog__list"], [1, "spy-row", "spy-row-gutter-lg", "spy-row-align-content-flex-end"], [4, "ngFor", "ngForOf"], ["color", "gray", "maxWidth", "none", 1, "page-catalog__applications-count"], ["class", "spy-col-4 spy-col-md-6 spy-col-sm-6 spy-col-gutter-lg", 4, "ngIf", "ngIfElse"], ["addBlockTmplRef", ""], [1, "spy-col-4", "spy-col-md-6", "spy-col-sm-6", "spy-col-gutter-lg"], [3, "app"], [1, "page-catalog__advertisement"], ["src", "/assets/img/ad1.png", "alt", "mapp", 1, "page-catalog__advertisement-image"]],
      template: function PageCatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-filters", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectFiltersItem", function PageCatalogComponent_Template_app_filters_selectFiltersItem_3_listener($event) {
            return ctx.selectFilterItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "spy-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "spy-navigation", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PageCatalogComponent_div_11_Template, 5, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "spy-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PageCatalogComponent_Template_spy_select_valueChange_15_listener($event) {
            return ctx.categoryChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "spy-spinner", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PageCatalogComponent_ng_container_20_Template, 4, 2, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, "HOME.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, ctx.filterItems$))("activeValue", ctx.activeFilterItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navigationItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spy-col-push-left-9", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 17, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categoryOptions)("value", ctx.activeCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSpinning", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 19, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, ctx.apps$));
        }
      },
      directives: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["FiltersComponent"], _spryker_card__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComposerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _spryker_select__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_14__["ChipsComponent"], _app_card_application_card_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationCardComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n/**\n * Provides ie styles only.\n */\n/**\n * Provides transition property configured by the passed parameters.\n * @param {String} @props [opacity visibility]\n * @param {Number} @duration [@common-transition-time]\n * @param {String} @function [@common-transition-function]\n */\n/**\n * Provides custom loop for selectors.\n * @param {Number} @i\n * @param @rules Extends mixin with properties.\n */\n/**\n * Creates @breakpoint variable with 0 or the first value from the $edges list.\n * @param {List} @edges. List length must be less than or equal to 2.\n */\n/**\n * Sets screen media query with min-width set to @min parameter.\n * @param @min {Number} [0]\n * @param @rules Extends mixin with properties for media query.\n */\n/**\n * Sets screen media query with breakpoints range passed as parameters.\n * @param {Number} $min [0]\n * @param {Number} $max [null]\n * @param @rules Extends mixin with properties for media query.\n */\n.page-catalog__title {\n  font-size: 30px;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  font-weight: 600;\n  color: #121212;\n  margin: 40px 0;\n}\n.page-catalog__filters {\n  display: block;\n  margin: 0 0 12px 0;\n}\n@media only screen and (min-width: 1810px) {\n  .page-catalog__filters {\n    margin: 0 0 30px 0;\n  }\n}\n.page-catalog__list {\n  margin: 20px 0 0;\n}\n.page-catalog__advertisement {\n  overflow: hidden;\n  cursor: pointer;\n  width: 370px;\n  height: 355px;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.15);\n  transition: 0.3s;\n}\n.page-catalog__advertisement:hover {\n  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);\n}\n.page-catalog__advertisement-image {\n  width: 110%;\n}\n.page-catalog__navigation {\n  display: block;\n  width: 370px;\n  margin: 50px 30px 0 0;\n}\n@media only screen and (min-width: 1810px) and (max-width: 1919px) {\n  .page-catalog__navigation {\n    width: 280px;\n  }\n}\n.page-catalog__navigation .ant-card-body {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9wYWdlLWNhdGFsb2cvcGFnZS1jYXRhbG9nLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2ZvbnRzLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL2Zyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9wYWdlLWNhdGFsb2cvcGFnZS1jYXRhbG9nLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvbWl4aW5zL2JyZWFrcG9pbnQtbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZDQ007QURBTixvQkFBb0I7QUFDcEI7O0VBRUU7QUFDRjs7RUFFRTtBQUNGOzs7OztFQUtFO0FBQ0Y7Ozs7RUFJRTtBQUNGOzs7RUFHRTtBQUNGOzs7O0VBSUU7QUFDRjs7Ozs7RUFLRTtBRTNCRTtFQUNJLGVBQUE7RUFDQSxnTkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUY2QlI7QUUxQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUY0QlI7QUczQkU7RUFBQTtJRENVLGtCQUFBO0VGOEJWO0FBQ0Y7QUUzQkk7RUFDSSxnQkFBQTtBRjZCUjtBRTFCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FGNEJSO0FFMUJRO0VBQ0ksbUhBQUE7QUY0Qlo7QUV6QlE7RUFDSSxXQUFBO0FGMkJaO0FFdkJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRnlCUjtBRzFDSTtFQUFBO0lEbUJRLFlBQUE7RUYyQlY7QUFDRjtBRWpDSTtFQVFRLFVBQUE7QUY0QloiLCJmaWxlIjoiZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL3BhZ2UtY2F0YWxvZy9wYWdlLWNhdGFsb2cuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbi8qKlxuICogUmV0dXJucyBhIG1hcCB3aXRoIHRoZSBsaXN0IG9mIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgZ2VuZXJhdGUgZ3JpZCBzZWxlY3RvcnMgd2l0aCBicmVha3BvaW50cy5cbiAqL1xuLyoqXG4gKiBQcm92aWRlcyBpZSBzdHlsZXMgb25seS5cbiAqL1xuLyoqXG4gKiBQcm92aWRlcyB0cmFuc2l0aW9uIHByb3BlcnR5IGNvbmZpZ3VyZWQgYnkgdGhlIHBhc3NlZCBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtTdHJpbmd9IEBwcm9wcyBbb3BhY2l0eSB2aXNpYmlsaXR5XVxuICogQHBhcmFtIHtOdW1iZXJ9IEBkdXJhdGlvbiBbQGNvbW1vbi10cmFuc2l0aW9uLXRpbWVdXG4gKiBAcGFyYW0ge1N0cmluZ30gQGZ1bmN0aW9uIFtAY29tbW9uLXRyYW5zaXRpb24tZnVuY3Rpb25dXG4gKi9cbi8qKlxuICogUHJvdmlkZXMgY3VzdG9tIGxvb3AgZm9yIHNlbGVjdG9ycy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBAaVxuICogQHBhcmFtIEBydWxlcyBFeHRlbmRzIG1peGluIHdpdGggcHJvcGVydGllcy5cbiAqL1xuLyoqXG4gKiBDcmVhdGVzIEBicmVha3BvaW50IHZhcmlhYmxlIHdpdGggMCBvciB0aGUgZmlyc3QgdmFsdWUgZnJvbSB0aGUgJGVkZ2VzIGxpc3QuXG4gKiBAcGFyYW0ge0xpc3R9IEBlZGdlcy4gTGlzdCBsZW5ndGggbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMi5cbiAqL1xuLyoqXG4gKiBTZXRzIHNjcmVlbiBtZWRpYSBxdWVyeSB3aXRoIG1pbi13aWR0aCBzZXQgdG8gQG1pbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0gQG1pbiB7TnVtYmVyfSBbMF1cbiAqIEBwYXJhbSBAcnVsZXMgRXh0ZW5kcyBtaXhpbiB3aXRoIHByb3BlcnRpZXMgZm9yIG1lZGlhIHF1ZXJ5LlxuICovXG4vKipcbiAqIFNldHMgc2NyZWVuIG1lZGlhIHF1ZXJ5IHdpdGggYnJlYWtwb2ludHMgcmFuZ2UgcGFzc2VkIGFzIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge051bWJlcn0gJG1pbiBbMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSAkbWF4IFtudWxsXVxuICogQHBhcmFtIEBydWxlcyBFeHRlbmRzIG1peGluIHdpdGggcHJvcGVydGllcyBmb3IgbWVkaWEgcXVlcnkuXG4gKi9cbi5wYWdlLWNhdGFsb2dfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzEyMTIxMjtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG4ucGFnZS1jYXRhbG9nX19maWx0ZXJzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDEycHggMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTgxMHB4KSB7XG4gIC5wYWdlLWNhdGFsb2dfX2ZpbHRlcnMge1xuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgfVxufVxuLnBhZ2UtY2F0YWxvZ19fbGlzdCB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG4ucGFnZS1jYXRhbG9nX19hZHZlcnRpc2VtZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMzU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE4LCAxOCwgMTgsIDAuMTUpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnBhZ2UtY2F0YWxvZ19fYWR2ZXJ0aXNlbWVudDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDEycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG59XG4ucGFnZS1jYXRhbG9nX19hZHZlcnRpc2VtZW50LWltYWdlIHtcbiAgd2lkdGg6IDExMCU7XG59XG4ucGFnZS1jYXRhbG9nX19uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNzBweDtcbiAgbWFyZ2luOiA1MHB4IDMwcHggMCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODEwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgLnBhZ2UtY2F0YWxvZ19fbmF2aWdhdGlvbiB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICB9XG59XG4ucGFnZS1jYXRhbG9nX19uYXZpZ2F0aW9uIC5hbnQtY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbiIsIkBpbXBvcnQgKGNzcylcbiAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcblxuQGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG5cbkB0ZXh0LWNvbG9yOiBAZ3JheS1kYXJrO1xuQHRleHQtY29sb3Itc2Vjb25kYXJ5OiBAaW5rO1xuQGhlYWRpbmctY29sb3I6IEBpbms7XG5cbkBmb250LXNpemUtbGc6IDE2cHg7XG5AZm9udC1zaXplLWJhc2U6IDE0cHg7XG5AZm9udC1zaXplLXNtOiAxMnB4O1xuXG5AaGVhZGluZy0xLWZvbnQtc2l6ZTogMzBweDtcbkBoZWFkaW5nLTItZm9udC1zaXplOiAyNnB4O1xuQGhlYWRpbmctMy1mb250LXNpemU6IDIwcHg7XG5AaGVhZGluZy00LWZvbnQtc2l6ZTogMThweDtcbkBoZWFkaW5nLTUtZm9udC1zaXplOiAxNnB4O1xuXG5AbGluZS1oZWlnaHQtYmFzZTogMS4zO1xuXG5AbGV0dGVyLXNwYWNpbmctYmFzZTogMC4wOHB4O1xuXG5AZm9udC13ZWlnaHQtZGVmYXVsdDogNDAwO1xuQGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xuQGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xuXG5AZm9udC1kZWZhdWx0OiBAZm9udC13ZWlnaHQtbWVkaXVtIEBmb250LXNpemUtYmFzZSAvIEBsaW5lLWhlaWdodC1iYXNlXG4gIEBmb250LWZhbWlseTtcblxuQGhlYWRpbmctMS1zaXplOiBAaGVhZGluZy0xLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTItc2l6ZTogQGhlYWRpbmctMi1mb250LXNpemU7XG5AaGVhZGluZy0zLXNpemU6IEBoZWFkaW5nLTMtZm9udC1zaXplO1xuQGhlYWRpbmctNC1zaXplOiBAaGVhZGluZy00LWZvbnQtc2l6ZTtcbiIsIkBpbXBvcnQgJ35Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC92YXJpYWJsZXMvaW5kZXgubGVzcyc7XG5AaW1wb3J0ICd+QHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvbWl4aW5zL2luZGV4Lmxlc3MnO1xuQGltcG9ydCAnLi9wYWdlLWNhdGFsb2cuY29tcG9uZW50LnRoZW1lLmxlc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2JyZWFrcG9pbnRzLmxlc3MnO1xuXG4ucGFnZS1jYXRhbG9nIHtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogQGhlYWRpbmctMS1mb250LXNpemU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtc2VtaS1ib2xkO1xuICAgICAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gICAgICAgIG1hcmdpbjogQHBhZ2UtY2F0YWxvZy10aXRsZS1tYXJnaW47XG4gICAgfVxuXG4gICAgJl9fZmlsdGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IEBwYWdlLWNhdGFsb2ctZmlsdGVycy1tYXJnaW47XG4gICAgICAgIC5icmVha3BvaW50LW1lZGlhLWJldHdlZW4tbWl4aW4oQGNvbnRhaW5lci1icmVha3BvaW50c1t4bC1taW5dLCBudWxsLCB7XG4gICAgICAgICAgICBtYXJnaW46IEBwYWdlLWNhdGFsb2ctZmlsdGVycy1tYXJnaW4teGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICZfX2xpc3Qge1xuICAgICAgICBtYXJnaW46IEBwYWdlLWNhdGFsb2ctbGlzdC1tYXJnaW47XG4gICAgfVxuXG4gICAgJl9fYWR2ZXJ0aXNlbWVudCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IEBwYWdlLWNhdGFsb2ctYWR2ZXJ0aXNlbWVudC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiBAcGFnZS1jYXRhbG9nLWFkdmVydGlzZW1lbnQtaGVpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAcGFnZS1jYXRhbG9nLWFkdmVydGlzZW1lbnQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm94LXNoYWRvdzogQHBhZ2UtY2F0YWxvZy1hZHZlcnRpc2VtZW50LXNoYWRvdztcbiAgICAgICAgdHJhbnNpdGlvbjogQHBhZ2UtY2F0YWxvZy1hZHZlcnRpc2VtZW50LXRyYW5zaXRpb247XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBAcGFnZS1jYXRhbG9nLWFkdmVydGlzZW1lbnQtc2hhZG93LWhvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogQHBhZ2UtY2F0YWxvZy1hZHZlcnRpc2VtZW50LWltYWdlLXdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbmF2aWdhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogQHBhZ2UtY2F0YWxvZy1tYWluLW5hdmlnYXRpb24td2lkdGgteHhsO1xuICAgICAgICBtYXJnaW46IEBwYWdlLWNhdGFsb2ctbWFpbi1uYXZpZ2F0aW9uLW1hcmdpbjtcbiAgICAgICAgLmJyZWFrcG9pbnQtbWVkaWEtYmV0d2Vlbi1taXhpbihAY29udGFpbmVyLWJyZWFrcG9pbnRzW3hsLW1pbl0sIEBjb250YWluZXItYnJlYWtwb2ludHNbeGwtbWF4XSwge1xuICAgICAgICAgICAgd2lkdGg6IEBwYWdlLWNhdGFsb2ctbWFpbi1uYXZpZ2F0aW9uLXdpZHRoLXhsO1xuICAgICAgICB9KTtcbiAgICAgICAgLkB7Y2FyZC1wcmVmaXgtY2xzfS1ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IEBwYWdlLWNhdGFsb2ctbWFpbi1uYXZpZ2F0aW9uLXBhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZXMgQGJyZWFrcG9pbnQgdmFyaWFibGUgd2l0aCAwIG9yIHRoZSBmaXJzdCB2YWx1ZSBmcm9tIHRoZSAkZWRnZXMgbGlzdC5cbiAqIEBwYXJhbSB7TGlzdH0gQGVkZ2VzLiBMaXN0IGxlbmd0aCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAyLlxuICovXG4uYnJlYWtwb2ludC1lZGdlLW1pbi1taXhpbihAZWRnZXMpIHtcbiAgQGJyZWFrcG9pbnQtZWRnZXM6IHtcbiAgICBtaW46IGlmKGxlbmd0aChAZWRnZXMpID4gMCwgZXh0cmFjdChAZWRnZXMsIDEpLCAwKTtcbiAgICBtYXg6IGlmKGxlbmd0aChAZWRnZXMpID4gMSwgZXh0cmFjdChAZWRnZXMsIDIpLCBudWxsKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXRzIHNjcmVlbiBtZWRpYSBxdWVyeSB3aXRoIG1pbi13aWR0aCBzZXQgdG8gQG1pbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0gQG1pbiB7TnVtYmVyfSBbMF1cbiAqIEBwYXJhbSBAcnVsZXMgRXh0ZW5kcyBtaXhpbiB3aXRoIHByb3BlcnRpZXMgZm9yIG1lZGlhIHF1ZXJ5LlxuICovXG4uYnJlYWtwb2ludC1tZWRpYS1taW4tbWl4aW4oQG1pbjogMCwgQHJ1bGVzKSB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogQG1pbikge1xuICAgIEBydWxlcygpO1xuICB9XG59XG5cbi8qKlxuICogU2V0cyBzY3JlZW4gbWVkaWEgcXVlcnkgd2l0aCBicmVha3BvaW50cyByYW5nZSBwYXNzZWQgYXMgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7TnVtYmVyfSAkbWluIFswXVxuICogQHBhcmFtIHtOdW1iZXJ9ICRtYXggW251bGxdXG4gKiBAcGFyYW0gQHJ1bGVzIEV4dGVuZHMgbWl4aW4gd2l0aCBwcm9wZXJ0aWVzIGZvciBtZWRpYSBxdWVyeS5cbiAqL1xuLmJyZWFrcG9pbnQtbWVkaWEtYmV0d2Vlbi1taXhpbihAbWluOiAwLCBAbWF4OiBudWxsLCBAcnVsZXMpIHtcbiAgJiB3aGVuIG5vdCAoQG1heCA9IG51bGwpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IEBtaW4pIGFuZCAobWF4LXdpZHRoOiBAbWF4KSB7XG4gICAgICBAcnVsZXMoKTtcbiAgICB9XG4gIH1cbiAgJiB3aGVuIChAbWF4ID0gbnVsbCkge1xuICAgIC5icmVha3BvaW50LW1lZGlhLW1pbi1taXhpbihAbWluLCBAcnVsZXMpO1xuICB9XG59XG4iXX0= */"],
      encapsulation: 2,
      changeDetection: 0
    });

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-catalog',
          templateUrl: './page-catalog.component.html',
          styleUrls: ['./page-catalog.component.less'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            "class": 'page-catalog'
          }
        }]
      }], function () {
        return [{
          type: _swagger__WEBPACK_IMPORTED_MODULE_1__["DefaultService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _services_catalog_page_service__WEBPACK_IMPORTED_MODULE_5__["CatalogPageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../frontend/app-store-catalog/src/page-catalog/page-catalog.module.ts": function frontendAppStoreCatalogSrcPageCatalogPageCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageCatalogModule", function () {
      return PageCatalogModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/page-catalog/page-catalog.component */
    "../frontend/app-store-catalog/src/page-catalog/components/page-catalog/page-catalog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");
    /* harmony import */


    var _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @spryker/icon/icons */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon-icons.js");
    /* harmony import */


    var _components_app_card_application_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/app-card/application-card.component */
    "../frontend/app-store-catalog/src/page-catalog/components/app-card/application-card.component.ts");
    /* harmony import */


    var _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @spryker/spinner */
    "../node_modules/@spryker/spinner/__ivy_ngcc__/fesm2015/spryker-spinner.js");
    /* harmony import */


    var _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../common/connected-badge/connected-badge.module */
    "../frontend/app-store-catalog/src/common/connected-badge/connected-badge.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @spryker/navigation */
    "../node_modules/@spryker/navigation/__ivy_ngcc__/fesm2015/spryker-navigation.js");
    /* harmony import */


    var _spryker_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @spryker/select */
    "../node_modules/@spryker/select/__ivy_ngcc__/fesm2015/spryker-select.js");
    /* harmony import */


    var _assets_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../assets/icons */
    "../frontend/app-store-catalog/src/assets/icons/index.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/filters/filters.component */
    "../frontend/app-store-catalog/src/page-catalog/components/filters/filters.component.ts");
    /* harmony import */


    var _common_application_rating_application_rating_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../common/application-rating/application-rating.module */
    "../frontend/app-store-catalog/src/common/application-rating/application-rating.module.ts");

    var routes = [{
      path: '',
      component: _components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__["PageCatalogComponent"]
    }];

    var PageCatalogModule = function PageCatalogModule() {
      _classCallCheck(this, PageCatalogModule);
    };

    PageCatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageCatalogModule
    });
    PageCatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageCatalogModule_Factory(t) {
        return new (t || PageCatalogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(), _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconTrialModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _common_application_rating_application_rating_module__WEBPACK_IMPORTED_MODULE_18__["ApplicationRatingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageCatalogModule, {
        declarations: [_components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__["PageCatalogComponent"], _components_app_card_application_card_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationCardComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_17__["FiltersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconTrialModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _common_application_rating_application_rating_module__WEBPACK_IMPORTED_MODULE_18__["ApplicationRatingModule"]]
      });
    })();

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__["PageCatalogComponent"], _components_app_card_application_card_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationCardComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_17__["FiltersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(), _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconTrialModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _common_application_rating_application_rating_module__WEBPACK_IMPORTED_MODULE_18__["ApplicationRatingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../frontend/app-store-catalog/src/page-catalog/services/catalog-page.service.ts": function frontendAppStoreCatalogSrcPageCatalogServicesCatalogPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogPageService", function () {
      return CatalogPageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/icons */
    "../frontend/app-store-catalog/src/assets/icons/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../swagger */
    "../frontend/app-store-catalog/swagger/index.ts");

    var CatalogPageService = /*#__PURE__*/function () {
      function CatalogPageService(translateService) {
        _classCallCheck(this, CatalogPageService);

        this.translateService = translateService;
      }

      _createClass(CatalogPageService, [{
        key: "getTopFilterItems",
        value: function getTopFilterItems() {
          var filterIcons = [_assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconNewModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconPopularModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconGoldPartnerModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconSilverPartnerModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconTrialModule"].icon];
          var filterTranslationsPrefix = 'HOME.FILTERS';
          var partnerTypes = [_swagger__WEBPACK_IMPORTED_MODULE_4__["PartnerType"].New, _swagger__WEBPACK_IMPORTED_MODULE_4__["PartnerType"].Popular, _swagger__WEBPACK_IMPORTED_MODULE_4__["PartnerType"].GoldPartner, _swagger__WEBPACK_IMPORTED_MODULE_4__["PartnerType"].SilverPartner, 'Free trial'];
          var filterTranslationConstants = ['NEW', 'POPULAR', 'GOLD_PARTNER', 'SILVER_PARTNER', 'TRIAL'].map(function (translationConstant) {
            return "".concat(filterTranslationsPrefix, ".").concat(translationConstant);
          });
          return this.translateService.get(filterTranslationConstants).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (translatedTexts) {
            return filterTranslationConstants.map(function (translationConstant, index) {
              return {
                icon: filterIcons[index],
                text: translatedTexts[translationConstant],
                value: partnerTypes[index]
              };
            });
          }));
        }
      }]);

      return CatalogPageService;
    }();

    CatalogPageService.ɵfac = function CatalogPageService_Factory(t) {
      return new (t || CatalogPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    CatalogPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CatalogPageService,
      factory: CatalogPageService.ɵfac,
      providedIn: 'root'
    });

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../node_modules/@spryker/navigation/__ivy_ngcc__/fesm2015/spryker-navigation.js": function node_modulesSprykerNavigation__ivy_ngcc__Fesm2015SprykerNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComposerDirective", function () {
      return NavigationComposerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationRedirectInterceptionEvent", function () {
      return NavigationRedirectInterceptionEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");
    /* harmony import */


    var _spryker_interception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @spryker/interception */
    "../node_modules/@spryker/interception/__ivy_ngcc__/fesm2015/spryker-interception.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var _spryker_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @spryker/utils */
    "../node_modules/@spryker/utils/__ivy_ngcc__/fesm2015/spryker-utils.js");

    function NavigationComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_ng_template_2_ng_container_0_li_1_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r11.clickHandler($event, item_r5.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPaddingLeft", 0)("nzSelected", item_r5.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", item_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function NavigationComponent_ng_template_2_ng_container_0_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_ng_container_0_li_2_ng_container_2_Template, 1, 0, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzOpen", item_r5.isActive)("nzTitle", _r8)("nzPaddingLeft", 0)("nzDisabled", item_r5.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, item_r5.subItems));
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_ng_template_3_spy_icon_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spy-icon", 13);
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", item_r5.icon);
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationComponent_ng_template_2_ng_container_0_ng_template_3_spy_icon_0_Template, 1, 1, "spy-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.title);
      }
    }

    function NavigationComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_ng_template_2_ng_container_0_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_ng_container_0_li_2_Template, 3, 8, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationComponent_ng_template_2_ng_container_0_ng_template_3_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(item_r5.subItems == null ? null : item_r5.subItems.length));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.subItems == null ? null : item_r5.subItems.length);
      }
    }

    function NavigationComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationComponent_ng_template_2_ng_container_0_Template, 5, 2, "ng-container", 3);
      }

      if (rf & 2) {
        var items_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", items_r3);
      }
    }

    var NavigationRedirectInterceptionEvent = /*#__PURE__*/function (_spryker_interception) {
      _inherits(NavigationRedirectInterceptionEvent, _spryker_interception);

      var _super = _createSuper(NavigationRedirectInterceptionEvent);

      function NavigationRedirectInterceptionEvent() {
        _classCallCheck(this, NavigationRedirectInterceptionEvent);

        return _super.apply(this, arguments);
      }

      return NavigationRedirectInterceptionEvent;
    }(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionEvent"]);

    var NavigationComposerDirective = /*#__PURE__*/function (_spryker_interception2) {
      _inherits(NavigationComposerDirective, _spryker_interception2);

      var _super2 = _createSuper(NavigationComposerDirective);

      function NavigationComposerDirective() {
        _classCallCheck(this, NavigationComposerDirective);

        return _super2.apply(this, arguments);
      }

      return NavigationComposerDirective;
    }(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionComposerDirective"]);

    NavigationComposerDirective.ɵfac = function NavigationComposerDirective_Factory(t) {
      return ɵNavigationComposerDirective_BaseFactory(t || NavigationComposerDirective);
    };

    NavigationComposerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NavigationComposerDirective,
      selectors: [["spy-navigation"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"](_toConsumableArray(Object(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["provideInterceptionComposerToken"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
        return NavigationComponent;
      })))), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(windowToken, interceptorDispatcherService) {
        _classCallCheck(this, NavigationComponent);

        this.windowToken = windowToken;
        this.interceptorDispatcherService = interceptorDispatcherService;
        this.collapsed = false;
        this.items = [];
      }

      _createClass(NavigationComponent, [{
        key: "clickHandler",
        value: function clickHandler(event, url) {
          var _this5 = this;

          event.stopPropagation();
          event.preventDefault();
          this.interceptorDispatcherService.dispatchToAll(NavigationRedirectInterceptionEvent).subscribe(function () {
            _this5.windowToken.location.href = url;
          });
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.collapsed = true;
        }
      }, {
        key: "expand",
        value: function expand() {
          this.collapsed = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.collapsed) {
            this.expand();
          } else {
            this.collapse();
          }

          return this.isCollapsed();
        }
      }, {
        key: "isCollapsed",
        value: function isCollapsed() {
          return this.collapsed;
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["WindowToken"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptorDispatcherService"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["spy-navigation"]],
      inputs: {
        collapsed: "collapsed",
        items: "items"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"](_toConsumableArray(Object(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["provideInterceptionService"])()))],
      decls: 4,
      vars: 5,
      consts: [["nz-menu", "", "nzMode", "inline", 3, "nzInlineCollapsed"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTpl", ""], [4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzSelected", 4, "ngIf"], ["nz-submenu", "", 3, "nzOpen", "nzTitle", "nzPaddingLeft", "nzDisabled", 4, "ngIf"], ["titleTpl", ""], ["nz-menu-item", "", 3, "nzPaddingLeft", "nzSelected"], [3, "href", "click"], [4, "ngTemplateOutlet"], ["nz-submenu", "", 3, "nzOpen", "nzTitle", "nzPaddingLeft", "nzDisabled"], ["class", "menu-title-icon", 3, "name", 4, "ngIf"], [1, "menu-title-text"], [1, "menu-title-icon", 3, "name"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationComponent_ng_container_1_Template, 1, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzInlineCollapsed", ctx.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.items));
        }
      },
      directives: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuItemDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzSubMenuComponent"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap);.ant-menu{box-sizing:border-box;margin:0;padding:0;font-feature-settings:'tnum';color:#9ea1a6;list-style:none;outline:0;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:background .3s,width .2s}.ant-menu::before{display:table;content:''}.ant-menu::after{display:table;clear:both;content:''}.ant-menu ol,.ant-menu ul{margin:0;padding:0;list-style:none}.ant-menu-hidden{display:none}.ant-menu-item-group-title{height:1.3;padding:8px 16px;color:#121212;font-size:14px;line-height:1.3;transition:.3s}.ant-menu-submenu,.ant-menu-submenu-inline{transition:border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-selected{color:#121212}.ant-menu-item:active,.ant-menu-submenu-title:active{background:#f8f8f8}.ant-menu-submenu .ant-menu-sub{cursor:initial;transition:background .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item>a{color:#9ea1a6}.ant-menu-item>a:only-child{display:block}.ant-menu-item>a::before{position:absolute;top:0;right:0;bottom:0;left:0;background-color:transparent;content:''}.ant-menu-item>.ant-badge>a{color:#9ea1a6}.ant-menu-item>.ant-badge>a:hover{color:#121212}.ant-menu-item-divider{height:1px;overflow:hidden;line-height:0;background-color:#efeeee}.ant-menu-horizontal .ant-menu-item,.ant-menu-horizontal .ant-menu-submenu{margin-top:-1px}.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu .ant-menu-submenu-title:hover{background-color:transparent}.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#f8f8f8}.ant-menu-inline,.ant-menu-vertical,.ant-menu-vertical-left{border-right:2px solid #efeeee}.ant-menu-vertical-right{border-left:2px solid #efeeee}.ant-menu-vertical-left.ant-menu-sub,.ant-menu-vertical-right.ant-menu-sub,.ant-menu-vertical.ant-menu-sub{min-width:160px;max-height:calc(100vh - 100px);padding:0;overflow:hidden;border-right:0;transform-origin:0 0}.ant-menu-vertical-left.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical-right.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active){overflow-x:hidden;overflow-y:auto}.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item,.ant-menu-vertical.ant-menu-sub .ant-menu-item{left:0;margin-left:0;border-right:0}.ant-menu-vertical-left.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical.ant-menu-sub .ant-menu-item::after{border-right:0}.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu{transform-origin:0 0}.ant-menu-horizontal.ant-menu-sub{min-width:114px}.ant-menu-item,.ant-menu-submenu-title{position:relative;display:block;margin:0;padding:0 20px;white-space:nowrap;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-item .anticon,.ant-menu-submenu-title .anticon{min-width:14px;margin-right:10px;font-size:14px;transition:font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item .anticon+span,.ant-menu-submenu-title .anticon+span{opacity:1;transition:opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-submenu-title.ant-menu-item-only-child>.anticon{margin-right:0}.ant-menu>.ant-menu-item-divider{height:1px;margin:1px 0;padding:0;overflow:hidden;line-height:0;background-color:#efeeee}.ant-menu-submenu-popup{position:absolute;z-index:1050;border-radius:10px}.ant-menu-submenu-popup .submenu-title-wrapper{padding-right:20px}.ant-menu-submenu-popup::before{position:absolute;top:-7px;right:0;bottom:0;left:0;opacity:.0001;content:' '}.ant-menu-submenu>.ant-menu{background-color:#fff;border-radius:10px}.ant-menu-submenu>.ant-menu-submenu-title::after{transition:transform .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-popup>.ant-menu{background-color:#fff}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow{position:absolute;top:50%;right:16px;width:10px;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{position:absolute;width:6px;height:1.5px;background-image:linear-gradient(to right,#9ea1a6,#9ea1a6);border-radius:2px;transition:background .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1);content:''}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateY(-2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateY(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before{background:linear-gradient(to right,#121212,#121212)}.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateY(-2px)}.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateY(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(-45deg) translateX(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(45deg) translateX(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow{transform:translateY(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateX(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateX(2px)}.ant-menu-vertical .ant-menu-submenu-selected,.ant-menu-vertical .ant-menu-submenu-selected>a,.ant-menu-vertical-left .ant-menu-submenu-selected,.ant-menu-vertical-left .ant-menu-submenu-selected>a,.ant-menu-vertical-right .ant-menu-submenu-selected,.ant-menu-vertical-right .ant-menu-submenu-selected>a{color:#121212}.ant-menu-horizontal{line-height:46px;white-space:nowrap;border:0;border-bottom:2px solid #efeeee;box-shadow:none}.ant-menu-horizontal>.ant-menu-item,.ant-menu-horizontal>.ant-menu-submenu{position:relative;top:1px;display:inline-block;vertical-align:bottom;border-bottom:2px solid transparent}.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item-open,.ant-menu-horizontal>.ant-menu-item-selected,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu-active,.ant-menu-horizontal>.ant-menu-submenu-open,.ant-menu-horizontal>.ant-menu-submenu-selected,.ant-menu-horizontal>.ant-menu-submenu:hover{color:#121212;border-bottom:2px solid #121212}.ant-menu-horizontal>.ant-menu-item>a{color:#9ea1a6}.ant-menu-horizontal>.ant-menu-item>a:only-child{display:block}.ant-menu-horizontal>.ant-menu-item>a:hover{color:#121212}.ant-menu-horizontal>.ant-menu-item>a::before{bottom:-2px}.ant-menu-horizontal>.ant-menu-item-selected>a{color:#121212}.ant-menu-horizontal::after{display:block;clear:both;height:0;content:'\\20'}.ant-menu-inline .ant-menu-item,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-right .ant-menu-item{position:relative}.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after,.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-vertical-right .ant-menu-item::after{position:absolute;top:0;right:0;bottom:0;border-right:0 solid #121212;transform:scaleY(.0001);opacity:0;transition:transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);content:''}.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-vertical-right .ant-menu-item,.ant-menu-vertical-right .ant-menu-submenu-title{height:56px;margin-top:0;margin-bottom:0;padding:0 16px;overflow:hidden;font-size:14px;line-height:56px;text-overflow:ellipsis}.ant-menu-inline .ant-menu-submenu,.ant-menu-vertical .ant-menu-submenu,.ant-menu-vertical-left .ant-menu-submenu,.ant-menu-vertical-right .ant-menu-submenu{padding-bottom:.02px}.ant-menu-inline .ant-menu-item:not(:last-child),.ant-menu-vertical .ant-menu-item:not(:last-child),.ant-menu-vertical-left .ant-menu-item:not(:last-child),.ant-menu-vertical-right .ant-menu-item:not(:last-child){margin-bottom:0}.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-left>.ant-menu-item,.ant-menu-vertical-left>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-right>.ant-menu-item,.ant-menu-vertical-right>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical>.ant-menu-item,.ant-menu-vertical>.ant-menu-submenu>.ant-menu-submenu-title{height:auto;line-height:auto}.ant-menu-inline .ant-menu-item-selected::after,.ant-menu-inline .ant-menu-selected::after{transform:scaleY(1);opacity:1;transition:transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-inline-collapsed>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title{left:0;padding:0 23px;text-overflow:clip}.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow{display:none}.ant-menu-inline-collapsed>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon{margin:0;font-size:16px;line-height:56px}.ant-menu-inline-collapsed>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span{display:inline-block;max-width:0;opacity:0}.ant-menu-inline-collapsed .anticon{display:inline-block}.ant-menu-inline-collapsed-tooltip{pointer-events:none}.ant-menu-inline-collapsed-tooltip .anticon{display:none}.ant-menu-inline-collapsed-tooltip a{color:rgba(255,255,255,.85)}.ant-menu-inline-collapsed .ant-menu-item-group-title{padding-right:4px;padding-left:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-menu-item-group-list{margin:0;padding:0}.ant-menu-item-group-list .ant-menu-item,.ant-menu-item-group-list .ant-menu-submenu-title{padding:0 16px 0 28px}.ant-menu-root.ant-menu-inline,.ant-menu-root.ant-menu-vertical,.ant-menu-root.ant-menu-vertical-left,.ant-menu-root.ant-menu-vertical-right{box-shadow:none}.ant-menu-sub.ant-menu-inline{padding:0;border:0;border-radius:0;box-shadow:none}.ant-menu-sub.ant-menu-inline>.ant-menu-item,.ant-menu-sub.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title{height:56px;line-height:56px;list-style-position:inside;list-style-type:disc}.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title{padding-left:32px}.ant-menu-item-disabled,.ant-menu-submenu-disabled{color:#9ea1a6!important;background:0 0;border-color:transparent!important;cursor:not-allowed}.ant-menu-item-disabled>a,.ant-menu-submenu-disabled>a{color:#9ea1a6!important;pointer-events:none}.ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-submenu-disabled>.ant-menu-submenu-title{color:#9ea1a6!important;cursor:not-allowed}.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:#9ea1a6!important}.ant-layout-header .ant-menu{line-height:inherit}.ant-menu-dark .ant-menu-sub,.ant-menu.ant-menu-dark{color:rgba(255,255,255,.65);background:#fff}.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow{opacity:.45;transition:.3s}.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before{background:#fff}.ant-menu-dark.ant-menu-submenu-popup{background:0 0}.ant-menu-dark .ant-menu-inline.ant-menu-sub{background:#000c17}.ant-menu-dark.ant-menu-horizontal{border-bottom:0}.ant-menu-dark.ant-menu-horizontal>.ant-menu-item,.ant-menu-dark.ant-menu-horizontal>.ant-menu-submenu{top:0;margin-top:0;border-color:#fff;border-bottom:0}.ant-menu-dark.ant-menu-horizontal>.ant-menu-item>a::before{bottom:0}.ant-menu-dark .ant-menu-item,.ant-menu-dark .ant-menu-item-group-title,.ant-menu-dark .ant-menu-item>a{color:rgba(255,255,255,.65)}.ant-menu-dark.ant-menu-inline,.ant-menu-dark.ant-menu-vertical,.ant-menu-dark.ant-menu-vertical-left,.ant-menu-dark.ant-menu-vertical-right{border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-vertical .ant-menu-item,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item{left:0;margin-left:0;border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after{border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title{width:100%}.ant-menu-dark .ant-menu-item-active,.ant-menu-dark .ant-menu-item:hover,.ant-menu-dark .ant-menu-submenu-active,.ant-menu-dark .ant-menu-submenu-open,.ant-menu-dark .ant-menu-submenu-selected,.ant-menu-dark .ant-menu-submenu-title:hover{color:#fff;background-color:transparent}.ant-menu-dark .ant-menu-item-active>a,.ant-menu-dark .ant-menu-item:hover>a,.ant-menu-dark .ant-menu-submenu-active>a,.ant-menu-dark .ant-menu-submenu-open>a,.ant-menu-dark .ant-menu-submenu-selected>a,.ant-menu-dark .ant-menu-submenu-title:hover>a{color:#fff}.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow{opacity:1}.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:#fff}.ant-menu-dark .ant-menu-item:hover{background-color:transparent}.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#17b497}.ant-menu-dark .ant-menu-item-selected{color:#fff;border-right:0}.ant-menu-dark .ant-menu-item-selected::after{border-right:0}.ant-menu-dark .ant-menu-item-selected .anticon,.ant-menu-dark .ant-menu-item-selected .anticon+span,.ant-menu-dark .ant-menu-item-selected>a,.ant-menu-dark .ant-menu-item-selected>a:hover{color:#fff}.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,.ant-menu.ant-menu-dark .ant-menu-item-selected{background-color:#17b497}.ant-menu-dark .ant-menu-item-disabled,.ant-menu-dark .ant-menu-item-disabled>a,.ant-menu-dark .ant-menu-submenu-disabled,.ant-menu-dark .ant-menu-submenu-disabled>a{color:rgba(255,255,255,.35)!important;opacity:.8}.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title{color:rgba(255,255,255,.35)!important}.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:rgba(255,255,255,.35)!important}.ant-menu-rtl{direction:rtl}.ant-menu-rtl .ant-menu-item-group-title{text-align:right}.ant-menu-rtl.ant-menu-inline,.ant-menu-rtl.ant-menu-vertical{border-right:none;border-left:2px solid #efeeee}.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu{transform-origin:top right}.ant-menu-rtl .ant-menu-item .anticon,.ant-menu-rtl .ant-menu-submenu-title .anticon{margin-right:auto;margin-left:10px}.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child>.anticon{margin-left:0}.ant-menu-submenu-rtl.ant-menu-submenu-popup .submenu-title-wrapper{padding-right:0;padding-left:20px}.ant-menu-rtl .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow{right:auto;left:16px}.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(-45deg) translateY(-2px)}.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(45deg) translateY(2px)}.ant-menu-rtl.ant-menu-inline .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item::after{right:auto;left:0}.ant-menu-rtl.ant-menu-inline .ant-menu-item,.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical .ant-menu-item,.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-submenu-title{text-align:right}.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title{padding-right:0;padding-left:34px}.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title{padding-right:16px;padding-left:34px}.ant-menu-rtl .ant-menu-item-group-list .ant-menu-item,.ant-menu-rtl .ant-menu-item-group-list .ant-menu-submenu-title{padding:0 28px 0 16px}.ant-menu-rtl.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title{padding-right:32px;padding-left:0}.ctx-spy-bg-white{background:#fff}.ctx-spy-bg-gray{background:#f8f8f8}*{box-sizing:border-box}.ant-menu{font:500 14px/1.3 Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background:0 0}.ant-menu .menu-title-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.ant-menu-item{padding-left:0!important}.ant-menu-item>a{display:flex;align-items:center;color:inherit;text-decoration:none}.ant-menu-item>a:hover{color:#121212}.ant-menu .menu-title-icon,.ant-menu-item>a{transition-property:color;transition-duration:.3s;transition-timing-function:cubic-bezier(.645,.045,.355,1)}.ant-menu .menu-title-icon{color:#9ea1a6;margin-right:15px;font-size:24px;width:24px;height:24px;line-height:0;flex-shrink:0}.ant-menu-item-active,.ant-menu-item:hover,.ant-menu-submenu-active,.ant-menu-submenu-title:hover,.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open{color:#121212}.ant-menu-item-active .menu-title-icon,.ant-menu-item:hover .menu-title-icon,.ant-menu-submenu-active .menu-title-icon,.ant-menu-submenu-title:hover .menu-title-icon,.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open .menu-title-icon{color:#71747b}.ant-menu-item-selected,.ant-menu-submenu-open{color:#121212}.ant-menu-item-selected .menu-title-icon,.ant-menu-submenu-open .menu-title-icon{color:#17b497}.ant-menu-item-selected:hover,.ant-menu-item-selected>a,.ant-menu-item-selected>a:hover,.ant-menu-submenu-open:hover,.ant-menu-submenu-open>a,.ant-menu-submenu-open>a:hover{color:#121212}.ant-menu-item-selected:hover .menu-title-icon,.ant-menu-item-selected>a .menu-title-icon,.ant-menu-item-selected>a:hover .menu-title-icon,.ant-menu-submenu-open:hover .menu-title-icon,.ant-menu-submenu-open>a .menu-title-icon,.ant-menu-submenu-open>a:hover .menu-title-icon{color:#17b497}.ant-menu-item-selected{background:#f8f8f8}.ant-menu-item-selected::before{content:'';position:absolute;top:50%;transform:translateY(-50%);left:0;height:36px;width:4px;background:#17b497;border-radius:10px}.ant-menu-inline,.ant-menu-vertical{border-right:none}.ant-menu-inline .ant-menu-item>a,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item>a,.ant-menu-vertical .ant-menu-submenu-title{display:flex;align-items:center;min-height:56px;padding:16px 19px}.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-submenu-title{padding:16px 19px!important}.ant-menu-inline{width:100%}.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title{width:100%;padding:0}.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title{height:auto;line-height:1.3}.ant-menu-inline .ant-menu-submenu-open{background:#f8f8f8}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow{right:6px}.ant-menu-sub.ant-menu-inline{background:0 0}.ant-menu-sub.ant-menu-inline>.ant-menu-item{height:auto;line-height:1.3}.ant-menu-inline-collapsed{width:62px}.ant-menu-inline-collapsed>.ant-menu-item{padding:0!important}.ant-menu-inline-collapsed .ant-menu-item>a,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title{padding:16px 19px!important;line-height:0}.ant-menu-inline-collapsed .ant-menu-item>a .anticon,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon{min-width:0;margin:0;font-size:inherit;line-height:1}.ant-menu-inline-collapsed .ant-menu-item>a .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow{display:none}.ant-menu .anticon{min-width:0;margin:0;font-size:inherit;line-height:1}"],
      encapsulation: 2,
      changeDetection: 0
    });

    NavigationComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["WindowToken"]]
        }]
      }, {
        type: _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptorDispatcherService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["ToBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NavigationComponent.prototype, "collapsed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["ToJson"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], NavigationComponent.prototype, "items", void 0);
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["WindowToken"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptorDispatcherService"]])], NavigationComponent);

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NavigationModule
    });
    NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NavigationModule_Factory(t) {
        return new (t || NavigationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]], _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]]
    });

    var ɵNavigationComposerDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NavigationComposerDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NavigationComposerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'spy-navigation',
          providers: _toConsumableArray(Object(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["provideInterceptionComposerToken"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
            return NavigationComponent;
          })))
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'spy-navigation',
          template: "<ul nz-menu nzMode=\"inline\" [nzInlineCollapsed]=\"collapsed\">\n  <ng-container\n    *ngTemplateOutlet=\"menuTpl; context: { $implicit: items }\"\n  ></ng-container>\n\n  <ng-template #menuTpl let-items>\n    <ng-container *ngFor=\"let item of items\">\n      <li\n        *ngIf=\"!item.subItems?.length\"\n        nz-menu-item\n        [nzPaddingLeft]=\"0\"\n        [nzSelected]=\"item.isActive\"\n      >\n        <a [href]=\"item.url\" (click)=\"clickHandler($event, item.url)\">\n          <ng-container *ngTemplateOutlet=\"titleTpl\"></ng-container>\n        </a>\n      </li>\n\n      <li\n        *ngIf=\"item.subItems?.length\"\n        nz-submenu\n        [nzOpen]=\"item.isActive\"\n        [nzTitle]=\"titleTpl\"\n        [nzPaddingLeft]=\"0\"\n        [nzDisabled]=\"item.disabled\"\n      >\n        <ul>\n          <ng-container\n            *ngTemplateOutlet=\"menuTpl; context: { $implicit: item.subItems }\"\n          ></ng-container>\n        </ul>\n      </li>\n\n      <ng-template #titleTpl>\n        <spy-icon\n          class=\"menu-title-icon\"\n          *ngIf=\"item.icon\"\n          [name]=\"item.icon\"\n        ></spy-icon>\n        <span class=\"menu-title-text\">{{ item.title }}</span>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ul>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          providers: _toConsumableArray(Object(_spryker_interception__WEBPACK_IMPORTED_MODULE_4__["provideInterceptionService"])()),
          styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap);.ant-menu{box-sizing:border-box;margin:0;padding:0;font-feature-settings:'tnum';color:#9ea1a6;list-style:none;outline:0;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:background .3s,width .2s}.ant-menu::before{display:table;content:''}.ant-menu::after{display:table;clear:both;content:''}.ant-menu ol,.ant-menu ul{margin:0;padding:0;list-style:none}.ant-menu-hidden{display:none}.ant-menu-item-group-title{height:1.3;padding:8px 16px;color:#121212;font-size:14px;line-height:1.3;transition:.3s}.ant-menu-submenu,.ant-menu-submenu-inline{transition:border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-selected{color:#121212}.ant-menu-item:active,.ant-menu-submenu-title:active{background:#f8f8f8}.ant-menu-submenu .ant-menu-sub{cursor:initial;transition:background .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item>a{color:#9ea1a6}.ant-menu-item>a:only-child{display:block}.ant-menu-item>a::before{position:absolute;top:0;right:0;bottom:0;left:0;background-color:transparent;content:''}.ant-menu-item>.ant-badge>a{color:#9ea1a6}.ant-menu-item>.ant-badge>a:hover{color:#121212}.ant-menu-item-divider{height:1px;overflow:hidden;line-height:0;background-color:#efeeee}.ant-menu-horizontal .ant-menu-item,.ant-menu-horizontal .ant-menu-submenu{margin-top:-1px}.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu .ant-menu-submenu-title:hover{background-color:transparent}.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#f8f8f8}.ant-menu-inline,.ant-menu-vertical,.ant-menu-vertical-left{border-right:2px solid #efeeee}.ant-menu-vertical-right{border-left:2px solid #efeeee}.ant-menu-vertical-left.ant-menu-sub,.ant-menu-vertical-right.ant-menu-sub,.ant-menu-vertical.ant-menu-sub{min-width:160px;max-height:calc(100vh - 100px);padding:0;overflow:hidden;border-right:0;transform-origin:0 0}.ant-menu-vertical-left.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical-right.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),.ant-menu-vertical.ant-menu-sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active){overflow-x:hidden;overflow-y:auto}.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item,.ant-menu-vertical.ant-menu-sub .ant-menu-item{left:0;margin-left:0;border-right:0}.ant-menu-vertical-left.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical.ant-menu-sub .ant-menu-item::after{border-right:0}.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu{transform-origin:0 0}.ant-menu-horizontal.ant-menu-sub{min-width:114px}.ant-menu-item,.ant-menu-submenu-title{position:relative;display:block;margin:0;padding:0 20px;white-space:nowrap;cursor:pointer;transition:color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-item .anticon,.ant-menu-submenu-title .anticon{min-width:14px;margin-right:10px;font-size:14px;transition:font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item .anticon+span,.ant-menu-submenu-title .anticon+span{opacity:1;transition:opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-submenu-title.ant-menu-item-only-child>.anticon{margin-right:0}.ant-menu>.ant-menu-item-divider{height:1px;margin:1px 0;padding:0;overflow:hidden;line-height:0;background-color:#efeeee}.ant-menu-submenu-popup{position:absolute;z-index:1050;border-radius:10px}.ant-menu-submenu-popup .submenu-title-wrapper{padding-right:20px}.ant-menu-submenu-popup::before{position:absolute;top:-7px;right:0;bottom:0;left:0;opacity:.0001;content:' '}.ant-menu-submenu>.ant-menu{background-color:#fff;border-radius:10px}.ant-menu-submenu>.ant-menu-submenu-title::after{transition:transform .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-popup>.ant-menu{background-color:#fff}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow{position:absolute;top:50%;right:16px;width:10px;transition:transform .3s cubic-bezier(.645,.045,.355,1)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{position:absolute;width:6px;height:1.5px;background-image:linear-gradient(to right,#9ea1a6,#9ea1a6);border-radius:2px;transition:background .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1);content:''}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateY(-2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateY(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-left>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before{background:linear-gradient(to right,#121212,#121212)}.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateY(-2px)}.ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateY(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(-45deg) translateX(2px)}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(45deg) translateX(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow{transform:translateY(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(-45deg) translateX(-2px)}.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(45deg) translateX(2px)}.ant-menu-vertical .ant-menu-submenu-selected,.ant-menu-vertical .ant-menu-submenu-selected>a,.ant-menu-vertical-left .ant-menu-submenu-selected,.ant-menu-vertical-left .ant-menu-submenu-selected>a,.ant-menu-vertical-right .ant-menu-submenu-selected,.ant-menu-vertical-right .ant-menu-submenu-selected>a{color:#121212}.ant-menu-horizontal{line-height:46px;white-space:nowrap;border:0;border-bottom:2px solid #efeeee;box-shadow:none}.ant-menu-horizontal>.ant-menu-item,.ant-menu-horizontal>.ant-menu-submenu{position:relative;top:1px;display:inline-block;vertical-align:bottom;border-bottom:2px solid transparent}.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item-open,.ant-menu-horizontal>.ant-menu-item-selected,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu-active,.ant-menu-horizontal>.ant-menu-submenu-open,.ant-menu-horizontal>.ant-menu-submenu-selected,.ant-menu-horizontal>.ant-menu-submenu:hover{color:#121212;border-bottom:2px solid #121212}.ant-menu-horizontal>.ant-menu-item>a{color:#9ea1a6}.ant-menu-horizontal>.ant-menu-item>a:only-child{display:block}.ant-menu-horizontal>.ant-menu-item>a:hover{color:#121212}.ant-menu-horizontal>.ant-menu-item>a::before{bottom:-2px}.ant-menu-horizontal>.ant-menu-item-selected>a{color:#121212}.ant-menu-horizontal::after{display:block;clear:both;height:0;content:'\\20'}.ant-menu-inline .ant-menu-item,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-right .ant-menu-item{position:relative}.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after,.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-vertical-right .ant-menu-item::after{position:absolute;top:0;right:0;bottom:0;border-right:0 solid #121212;transform:scaleY(.0001);opacity:0;transition:transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);content:''}.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-vertical-right .ant-menu-item,.ant-menu-vertical-right .ant-menu-submenu-title{height:56px;margin-top:0;margin-bottom:0;padding:0 16px;overflow:hidden;font-size:14px;line-height:56px;text-overflow:ellipsis}.ant-menu-inline .ant-menu-submenu,.ant-menu-vertical .ant-menu-submenu,.ant-menu-vertical-left .ant-menu-submenu,.ant-menu-vertical-right .ant-menu-submenu{padding-bottom:.02px}.ant-menu-inline .ant-menu-item:not(:last-child),.ant-menu-vertical .ant-menu-item:not(:last-child),.ant-menu-vertical-left .ant-menu-item:not(:last-child),.ant-menu-vertical-right .ant-menu-item:not(:last-child){margin-bottom:0}.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-left>.ant-menu-item,.ant-menu-vertical-left>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-right>.ant-menu-item,.ant-menu-vertical-right>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical>.ant-menu-item,.ant-menu-vertical>.ant-menu-submenu>.ant-menu-submenu-title{height:auto;line-height:auto}.ant-menu-inline .ant-menu-item-selected::after,.ant-menu-inline .ant-menu-selected::after{transform:scaleY(1);opacity:1;transition:transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)}.ant-menu-inline-collapsed>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title{left:0;padding:0 23px;text-overflow:clip}.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow{display:none}.ant-menu-inline-collapsed>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon{margin:0;font-size:16px;line-height:56px}.ant-menu-inline-collapsed>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon+span,.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span{display:inline-block;max-width:0;opacity:0}.ant-menu-inline-collapsed .anticon{display:inline-block}.ant-menu-inline-collapsed-tooltip{pointer-events:none}.ant-menu-inline-collapsed-tooltip .anticon{display:none}.ant-menu-inline-collapsed-tooltip a{color:rgba(255,255,255,.85)}.ant-menu-inline-collapsed .ant-menu-item-group-title{padding-right:4px;padding-left:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-menu-item-group-list{margin:0;padding:0}.ant-menu-item-group-list .ant-menu-item,.ant-menu-item-group-list .ant-menu-submenu-title{padding:0 16px 0 28px}.ant-menu-root.ant-menu-inline,.ant-menu-root.ant-menu-vertical,.ant-menu-root.ant-menu-vertical-left,.ant-menu-root.ant-menu-vertical-right{box-shadow:none}.ant-menu-sub.ant-menu-inline{padding:0;border:0;border-radius:0;box-shadow:none}.ant-menu-sub.ant-menu-inline>.ant-menu-item,.ant-menu-sub.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title{height:56px;line-height:56px;list-style-position:inside;list-style-type:disc}.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title{padding-left:32px}.ant-menu-item-disabled,.ant-menu-submenu-disabled{color:#9ea1a6!important;background:0 0;border-color:transparent!important;cursor:not-allowed}.ant-menu-item-disabled>a,.ant-menu-submenu-disabled>a{color:#9ea1a6!important;pointer-events:none}.ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-submenu-disabled>.ant-menu-submenu-title{color:#9ea1a6!important;cursor:not-allowed}.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:#9ea1a6!important}.ant-layout-header .ant-menu{line-height:inherit}.ant-menu-dark .ant-menu-sub,.ant-menu.ant-menu-dark{color:rgba(255,255,255,.65);background:#fff}.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow{opacity:.45;transition:.3s}.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before{background:#fff}.ant-menu-dark.ant-menu-submenu-popup{background:0 0}.ant-menu-dark .ant-menu-inline.ant-menu-sub{background:#000c17}.ant-menu-dark.ant-menu-horizontal{border-bottom:0}.ant-menu-dark.ant-menu-horizontal>.ant-menu-item,.ant-menu-dark.ant-menu-horizontal>.ant-menu-submenu{top:0;margin-top:0;border-color:#fff;border-bottom:0}.ant-menu-dark.ant-menu-horizontal>.ant-menu-item>a::before{bottom:0}.ant-menu-dark .ant-menu-item,.ant-menu-dark .ant-menu-item-group-title,.ant-menu-dark .ant-menu-item>a{color:rgba(255,255,255,.65)}.ant-menu-dark.ant-menu-inline,.ant-menu-dark.ant-menu-vertical,.ant-menu-dark.ant-menu-vertical-left,.ant-menu-dark.ant-menu-vertical-right{border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-vertical .ant-menu-item,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item{left:0;margin-left:0;border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after{border-right:0}.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title{width:100%}.ant-menu-dark .ant-menu-item-active,.ant-menu-dark .ant-menu-item:hover,.ant-menu-dark .ant-menu-submenu-active,.ant-menu-dark .ant-menu-submenu-open,.ant-menu-dark .ant-menu-submenu-selected,.ant-menu-dark .ant-menu-submenu-title:hover{color:#fff;background-color:transparent}.ant-menu-dark .ant-menu-item-active>a,.ant-menu-dark .ant-menu-item:hover>a,.ant-menu-dark .ant-menu-submenu-active>a,.ant-menu-dark .ant-menu-submenu-open>a,.ant-menu-dark .ant-menu-submenu-selected>a,.ant-menu-dark .ant-menu-submenu-title:hover>a{color:#fff}.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow{opacity:1}.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title:hover>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:#fff}.ant-menu-dark .ant-menu-item:hover{background-color:transparent}.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#17b497}.ant-menu-dark .ant-menu-item-selected{color:#fff;border-right:0}.ant-menu-dark .ant-menu-item-selected::after{border-right:0}.ant-menu-dark .ant-menu-item-selected .anticon,.ant-menu-dark .ant-menu-item-selected .anticon+span,.ant-menu-dark .ant-menu-item-selected>a,.ant-menu-dark .ant-menu-item-selected>a:hover{color:#fff}.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,.ant-menu.ant-menu-dark .ant-menu-item-selected{background-color:#17b497}.ant-menu-dark .ant-menu-item-disabled,.ant-menu-dark .ant-menu-item-disabled>a,.ant-menu-dark .ant-menu-submenu-disabled,.ant-menu-dark .ant-menu-submenu-disabled>a{color:rgba(255,255,255,.35)!important;opacity:.8}.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title{color:rgba(255,255,255,.35)!important}.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before{background:rgba(255,255,255,.35)!important}.ant-menu-rtl{direction:rtl}.ant-menu-rtl .ant-menu-item-group-title{text-align:right}.ant-menu-rtl.ant-menu-inline,.ant-menu-rtl.ant-menu-vertical{border-right:none;border-left:2px solid #efeeee}.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu{transform-origin:top right}.ant-menu-rtl .ant-menu-item .anticon,.ant-menu-rtl .ant-menu-submenu-title .anticon{margin-right:auto;margin-left:10px}.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child>.anticon{margin-left:0}.ant-menu-submenu-rtl.ant-menu-submenu-popup .submenu-title-wrapper{padding-right:0;padding-left:20px}.ant-menu-rtl .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow{right:auto;left:16px}.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before{transform:rotate(-45deg) translateY(-2px)}.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after{transform:rotate(45deg) translateY(2px)}.ant-menu-rtl.ant-menu-inline .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item::after{right:auto;left:0}.ant-menu-rtl.ant-menu-inline .ant-menu-item,.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical .ant-menu-item,.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-submenu-title{text-align:right}.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title{padding-right:0;padding-left:34px}.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title{padding-right:16px;padding-left:34px}.ant-menu-rtl .ant-menu-item-group-list .ant-menu-item,.ant-menu-rtl .ant-menu-item-group-list .ant-menu-submenu-title{padding:0 28px 0 16px}.ant-menu-rtl.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title{padding-right:32px;padding-left:0}.ctx-spy-bg-white{background:#fff}.ctx-spy-bg-gray{background:#f8f8f8}*{box-sizing:border-box}.ant-menu{font:500 14px/1.3 Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background:0 0}.ant-menu .menu-title-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.ant-menu-item{padding-left:0!important}.ant-menu-item>a{display:flex;align-items:center;color:inherit;text-decoration:none}.ant-menu-item>a:hover{color:#121212}.ant-menu .menu-title-icon,.ant-menu-item>a{transition-property:color;transition-duration:.3s;transition-timing-function:cubic-bezier(.645,.045,.355,1)}.ant-menu .menu-title-icon{color:#9ea1a6;margin-right:15px;font-size:24px;width:24px;height:24px;line-height:0;flex-shrink:0}.ant-menu-item-active,.ant-menu-item:hover,.ant-menu-submenu-active,.ant-menu-submenu-title:hover,.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open{color:#121212}.ant-menu-item-active .menu-title-icon,.ant-menu-item:hover .menu-title-icon,.ant-menu-submenu-active .menu-title-icon,.ant-menu-submenu-title:hover .menu-title-icon,.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open .menu-title-icon{color:#71747b}.ant-menu-item-selected,.ant-menu-submenu-open{color:#121212}.ant-menu-item-selected .menu-title-icon,.ant-menu-submenu-open .menu-title-icon{color:#17b497}.ant-menu-item-selected:hover,.ant-menu-item-selected>a,.ant-menu-item-selected>a:hover,.ant-menu-submenu-open:hover,.ant-menu-submenu-open>a,.ant-menu-submenu-open>a:hover{color:#121212}.ant-menu-item-selected:hover .menu-title-icon,.ant-menu-item-selected>a .menu-title-icon,.ant-menu-item-selected>a:hover .menu-title-icon,.ant-menu-submenu-open:hover .menu-title-icon,.ant-menu-submenu-open>a .menu-title-icon,.ant-menu-submenu-open>a:hover .menu-title-icon{color:#17b497}.ant-menu-item-selected{background:#f8f8f8}.ant-menu-item-selected::before{content:'';position:absolute;top:50%;transform:translateY(-50%);left:0;height:36px;width:4px;background:#17b497;border-radius:10px}.ant-menu-inline,.ant-menu-vertical{border-right:none}.ant-menu-inline .ant-menu-item>a,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item>a,.ant-menu-vertical .ant-menu-submenu-title{display:flex;align-items:center;min-height:56px;padding:16px 19px}.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-submenu-title{padding:16px 19px!important}.ant-menu-inline{width:100%}.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title{width:100%;padding:0}.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title{height:auto;line-height:1.3}.ant-menu-inline .ant-menu-submenu-open{background:#f8f8f8}.ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow{right:6px}.ant-menu-sub.ant-menu-inline{background:0 0}.ant-menu-sub.ant-menu-inline>.ant-menu-item{height:auto;line-height:1.3}.ant-menu-inline-collapsed{width:62px}.ant-menu-inline-collapsed>.ant-menu-item{padding:0!important}.ant-menu-inline-collapsed .ant-menu-item>a,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title{padding:16px 19px!important;line-height:0}.ant-menu-inline-collapsed .ant-menu-item>a .anticon,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon{min-width:0;margin:0;font-size:inherit;line-height:1}.ant-menu-inline-collapsed .ant-menu-item>a .ant-menu-submenu-arrow,.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow{display:none}.ant-menu .anticon{min-width:0;margin:0;font-size:inherit;line-height:1}"]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_spryker_utils__WEBPACK_IMPORTED_MODULE_6__["WindowToken"]]
          }]
        }, {
          type: _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptorDispatcherService"]
        }];
      }, {
        collapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavigationModule, {
        declarations: function declarations() {
          return [NavigationComponent, NavigationComposerDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]];
        },
        exports: function exports() {
          return [NavigationComponent, NavigationComposerDirective, _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconModule"], _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]],
          declarations: [NavigationComponent, NavigationComposerDirective],
          exports: [NavigationComponent, NavigationComposerDirective, _spryker_interception__WEBPACK_IMPORTED_MODULE_4__["InterceptionModule"]]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=spryker-navigation.js.map

    /***/

  }
}]);
//# sourceMappingURL=page-catalog-page-catalog-module-es5.js.map