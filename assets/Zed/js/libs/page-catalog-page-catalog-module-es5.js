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


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../types */
    "../frontend/app-store-catalog/src/page-catalog/types.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/icons */
    "../frontend/app-store-catalog/src/assets/icons/index.ts");
    /* harmony import */


    var _swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../swagger */
    "../frontend/app-store-catalog/swagger/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");
    /* harmony import */


    var _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../common/connected-badge/connected-badge/connected-badge.component */
    "../frontend/app-store-catalog/src/common/connected-badge/connected-badge/connected-badge.component.ts");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");

    function ApplicationCardComponent_spy_card_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.getPartnerTypeIcon());
      }
    }

    function ApplicationCardComponent_spy_card_0_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spy-icon", 16);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.starIcon);
      }
    }

    function ApplicationCardComponent_spy_card_0_app_status_badge_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-status-badge", 17);
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-rate", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ApplicationCardComponent_spy_card_0_ng_template_13_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ApplicationCardComponent_spy_card_0_app_status_badge_15_Template, 1, 1, "app-status-badge", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.app.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.app.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.app.partnerType !== "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.app.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.app.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.rate.value)("nzCharacter", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.rate.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getIsConnectionBadgeShown());
      }
    }

    function ApplicationCardComponent_ng_template_1_spy_chips_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-chips", 19);

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationCardComponent_ng_template_1_spy_chips_0_Template, 2, 1, "spy-chips", 18);
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
        this.rate = Object(_types__WEBPACK_IMPORTED_MODULE_1__["getRandomRate"])();
        this.starIcon = _assets_icons__WEBPACK_IMPORTED_MODULE_3__["IconStarModule"].icon;
      }

      _createClass(ApplicationCardComponent, [{
        key: "navigateToDetails",
        value: function navigateToDetails() {
          this.router.navigate(['catalog', this.app.id]);
        }
      }, {
        key: "getPartnerTypeIcon",
        value: function getPartnerTypeIcon() {
          var _a;

          return ((_a = this.app) === null || _a === void 0 ? void 0 : _a.partnerType) === _types__WEBPACK_IMPORTED_MODULE_1__["PartnerType"].Silver ? _assets_icons__WEBPACK_IMPORTED_MODULE_3__["IconSilverPartnerCircleModule"].icon : _assets_icons__WEBPACK_IMPORTED_MODULE_3__["IconGoldPartnerCircleModule"].icon;
        }
      }, {
        key: "getIsConnectionBadgeShown",
        value: function getIsConnectionBadgeShown() {
          return this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].Disconnected && this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_4__["ConnectionStatus"].NotConnected;
        }
      }]);

      return ApplicationCardComponent;
    }();

    ApplicationCardComponent.ɵfac = function ApplicationCardComponent_Factory(t) {
      return new (t || ApplicationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
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
      consts: [["hoverable", "", 3, "actions", "click", 4, "ngIf"], ["categories", ""], ["hoverable", "", 3, "actions", "click"], [1, "spy-row"], [1, "spy-col"], [1, "application-card__logo", 3, "src", "alt"], ["class", "spy-col-2 application-card__partner-type", 4, "ngIf"], [1, "application-card__title"], [1, "application-card__description"], [1, "application-card__rate"], ["nzDisabled", "", 1, "application-card__rate-value", 3, "ngModel", "nzCharacter"], [1, "application-card__rate-count"], ["characterRate", ""], ["class", "application-card__connected-badge", 3, "status", 4, "ngIf"], [1, "spy-col-2", "application-card__partner-type"], [1, "application-card__partner-type-icon", 3, "name"], [3, "name"], [1, "application-card__connected-badge", 3, "status"], ["color", "gray", "maxWidth", "none", 4, "ngFor", "ngForOf"], ["color", "gray", "maxWidth", "none"]],
      template: function ApplicationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationCardComponent_spy_card_0_Template, 16, 12, "spy-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.app);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _spryker_card__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzRateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _spryker_icon__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_11__["ChipsComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-rate {\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #fadb14;\n  font-size: 20px;\n  line-height: unset;\n  list-style: none;\n  outline: none;\n}\n.ant-rate-disabled .ant-rate-star {\n  cursor: default;\n}\n.ant-rate-disabled .ant-rate-star:hover {\n  transform: scale(1);\n}\n.ant-rate-star {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-rate-star:not(:last-child) {\n  margin-right: 8px;\n}\n.ant-rate-star > div:focus {\n  outline: 0;\n}\n.ant-rate-star > div:hover,\n.ant-rate-star > div:focus {\n  transform: scale(1.1);\n}\n.ant-rate-star-first,\n.ant-rate-star-second {\n  color: #f0f0f0;\n  transition: all 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.ant-rate-star-first .anticon,\n.ant-rate-star-second .anticon {\n  vertical-align: middle;\n}\n.ant-rate-star-first {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-half .ant-rate-star-second {\n  opacity: 1;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-full .ant-rate-star-second {\n  color: inherit;\n}\n.ant-rate-text {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 14px;\n}\n.ant-rate-rtl {\n  direction: rtl;\n}\n.ant-rate-rtl .ant-rate-star:not(:last-child) {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.ant-rate-rtl .ant-rate-star-first {\n  right: 0;\n  left: auto;\n}\n.ant-rate-rtl .ant-rate-text {\n  margin-right: 8px;\n  margin-left: 0;\n}\n.application-card {\n  display: block;\n  width: 370px;\n  margin-bottom: 20px;\n}\n.application-card .ant-card-body {\n  min-height: 290px;\n  padding: 20px 30px;\n}\n.application-card .ant-card-actions {\n  padding: 0 24px;\n}\n.application-card .ant-card-actions li {\n  text-align: left;\n}\n.application-card__logo {\n  display: block;\n  height: 26px;\n  margin: 5px 0 30px 0;\n}\n.application-card__partner-type {\n  font-size: 40px;\n  text-align: right;\n}\n.application-card__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #121212;\n  margin: 10px 0;\n}\n.application-card__description {\n  font-weight: 500;\n  line-height: 2.07438;\n}\n.application-card__connected-badge {\n  margin: 16px 0 0;\n}\n.application-card__rate {\n  margin-top: 8px 0 0;\n}\n.application-card__rate-value .ant-rate {\n  color: #fdaf1c;\n}\n.application-card__rate-value .ant-rate-star:not(:last-child) {\n  margin: 0;\n}\n.application-card__rate-count {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 21px;\n  margin-left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9hcHAtY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2ZvbnRzLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3N0eWxlL2NvbG9yL3RpbnlDb2xvci5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9zdHlsZS9taXhpbnMvcmVzZXQubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2Uvbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvcmF0ZS9zdHlsZS9pbmRleC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9yYXRlL3N0eWxlL3J0bC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9mcm9udGVuZC9hcHAtc3RvcmUtY2F0YWxvZy9zcmMvcGFnZS1jYXRhbG9nL2NvbXBvbmVudHMvYXBwLWNhcmQvYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkNDTTtBREFOLG9CQUFvQjtBQUNwQjs7RUFFRTtBQUNGLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBRVI1RjtFQ0dDLHNCQUFBO0VBR0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0VDSEEscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUpTRjtBSVBFO0VBQ0UsZUFBQTtBSlNKO0FJUkk7RUFDRSxtQkFBQTtBSlVOO0FJTkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FKUUo7QUlOSTtFQUNFLGlCQUFBO0FKUU47QUlKTTtFQUNFLFVBQUE7QUpNUjtBSUhNOztFQUVFLHFCQUFBO0FKS1I7QUlESTs7RUFFRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUpHTjtBSVBJOztFQU1JLHNCQUFBO0FKS1I7QUlESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSkdOO0FJQUk7O0VBRUUsVUFBQTtBSkVOO0FJQ0k7O0VBRUUsY0FBQTtBSkNOO0FJR0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBSkRKO0FLM0VFO0VBQ0UsY0FBQTtBTDZFSjtBRXBGQztFR2FPLGVBQUE7RUFDQSxnQkFBQTtBTDBFUjtBRXhGQztFR29CTyxRQUFBO0VBQ0EsVUFBQTtBTHVFUjtBRTVGQztFRzRCSyxpQkFBQTtFQUNBLGNBQUE7QUxtRU47QU01RkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FOOEZKO0FNakdBO0VBTVEsaUJBQUE7RUFDQSxrQkFBQTtBTjhGUjtBTXJHQTtFQVdRLGVBQUE7QU42RlI7QU14R0E7RUFjWSxnQkFBQTtBTjZGWjtBTXpGSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QU4yRlI7QU14Rkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QU4wRlI7QU12Rkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBTnlGUjtBTXRGSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QU53RlI7QU1yRkk7RUFDSSxnQkFBQTtBTnVGUjtBTXBGSTtFQUNJLG1CQUFBO0FOc0ZSO0FNcEZRO0VBRVEsY0FBQTtBTnFGaEI7QU1sRm9CO0VBQ0ksU0FBQTtBTm9GeEI7QU05RVE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBTmdGWiIsImZpbGUiOiJmcm9udGVuZC9hcHAtc3RvcmUtY2F0YWxvZy9zcmMvcGFnZS1jYXRhbG9nL2NvbXBvbmVudHMvYXBwLWNhcmQvYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgbWFwIHdpdGggdGhlIGxpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBnZW5lcmF0ZSBncmlkIHNlbGVjdG9ycyB3aXRoIGJyZWFrcG9pbnRzLlxuICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG4uYW50LXJhdGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgbGluZS1oZWlnaHQ6IDEuNTcxNTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZhZGIxNDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYW50LXJhdGUtZGlzYWJsZWQgLmFudC1yYXRlLXN0YXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYW50LXJhdGUtZGlzYWJsZWQgLmFudC1yYXRlLXN0YXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLmFudC1yYXRlLXN0YXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5hbnQtcmF0ZS1zdGFyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5hbnQtcmF0ZS1zdGFyID4gZGl2OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5hbnQtcmF0ZS1zdGFyID4gZGl2OmhvdmVyLFxuLmFudC1yYXRlLXN0YXIgPiBkaXY6Zm9jdXMge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uYW50LXJhdGUtc3Rhci1maXJzdCxcbi5hbnQtcmF0ZS1zdGFyLXNlY29uZCB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uYW50LXJhdGUtc3Rhci1maXJzdCAuYW50aWNvbixcbi5hbnQtcmF0ZS1zdGFyLXNlY29uZCAuYW50aWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYW50LXJhdGUtc3Rhci1maXJzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4uYW50LXJhdGUtc3Rhci1oYWxmIC5hbnQtcmF0ZS1zdGFyLWZpcnN0LFxuLmFudC1yYXRlLXN0YXItaGFsZiAuYW50LXJhdGUtc3Rhci1zZWNvbmQge1xuICBvcGFjaXR5OiAxO1xufVxuLmFudC1yYXRlLXN0YXItaGFsZiAuYW50LXJhdGUtc3Rhci1maXJzdCxcbi5hbnQtcmF0ZS1zdGFyLWZ1bGwgLmFudC1yYXRlLXN0YXItc2Vjb25kIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYW50LXJhdGUtdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFudC1yYXRlLXJ0bCB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLmFudC1yYXRlLXJ0bCAuYW50LXJhdGUtc3Rhcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmFudC1yYXRlLXJ0bCAuYW50LXJhdGUtc3Rhci1maXJzdCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuLmFudC1yYXRlLXJ0bCAuYW50LXJhdGUtdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkIC5hbnQtY2FyZC1ib2R5IHtcbiAgbWluLWhlaWdodDogMjkwcHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkIC5hbnQtY2FyZC1hY3Rpb25zIHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmQgLmFudC1jYXJkLWFjdGlvbnMgbGkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX2xvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDVweCAwIDMwcHggMDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19wYXJ0bmVyLXR5cGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzEyMTIxMjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMi4wNzQzODtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19jb25uZWN0ZWQtYmFkZ2Uge1xuICBtYXJnaW46IDE2cHggMCAwO1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX3JhdGUge1xuICBtYXJnaW4tdG9wOiA4cHggMCAwO1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX3JhdGUtdmFsdWUgLmFudC1yYXRlIHtcbiAgY29sb3I6ICNmZGFmMWM7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcmF0ZS12YWx1ZSAuYW50LXJhdGUtc3Rhcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX3JhdGUtY291bnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuIiwiQGltcG9ydCAoY3NzKVxuICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuXG5AZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcblxuQHRleHQtY29sb3I6IEBncmF5LWRhcms7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnk6IEBpbms7XG5AaGVhZGluZy1jb2xvcjogQGluaztcblxuQGZvbnQtc2l6ZS1sZzogMTZweDtcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtc206IDEycHg7XG5cbkBoZWFkaW5nLTEtZm9udC1zaXplOiAzMHB4O1xuQGhlYWRpbmctMi1mb250LXNpemU6IDI2cHg7XG5AaGVhZGluZy0zLWZvbnQtc2l6ZTogMjBweDtcbkBoZWFkaW5nLTQtZm9udC1zaXplOiAxOHB4O1xuQGhlYWRpbmctNS1mb250LXNpemU6IDE2cHg7XG5cbkBsaW5lLWhlaWdodC1iYXNlOiAxLjM7XG5cbkBsZXR0ZXItc3BhY2luZy1iYXNlOiAwLjA4cHg7XG5cbkBmb250LXdlaWdodC1kZWZhdWx0OiA0MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG5AZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XG5cbkBmb250LWRlZmF1bHQ6IEBmb250LXdlaWdodC1tZWRpdW0gQGZvbnQtc2l6ZS1iYXNlIC8gQGxpbmUtaGVpZ2h0LWJhc2VcbiAgQGZvbnQtZmFtaWx5O1xuXG5AaGVhZGluZy0xLXNpemU6IEBoZWFkaW5nLTEtZm9udC1zaXplO1xuQGhlYWRpbmctMi1zaXplOiBAaGVhZGluZy0yLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTMtc2l6ZTogQGhlYWRpbmctMy1mb250LXNpemU7XG5AaGVhZGluZy00LXNpemU6IEBoZWFkaW5nLTQtZm9udC1zaXplO1xuIiwiLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuLnRpbnlDb2xvck1peGluKCkge1xuQGZ1bmN0aW9uczogfmAoZnVuY3Rpb24oKSB7XG4vLyBUaW55Q29sb3IgdjEuNC4xXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmdyaW5zL1RpbnlDb2xvclxuLy8gMjAxNi0wNy0wNywgQnJpYW4gR3JpbnN0ZWFkLCBNSVQgTGljZW5zZVxudmFyIHRyaW1MZWZ0ID0gL15cXHMrLyxcbiAgICB0cmltUmlnaHQgPSAvXFxzKyQvLFxuICAgIHRpbnlDb3VudGVyID0gMCxcbiAgICBtYXRoUm91bmQgPSBNYXRoLnJvdW5kLFxuICAgIG1hdGhNaW4gPSBNYXRoLm1pbixcbiAgICBtYXRoTWF4ID0gTWF0aC5tYXgsXG4gICAgbWF0aFJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG5mdW5jdGlvbiB0aW55Y29sb3IgKGNvbG9yLCBvcHRzKSB7XG5cbiAgICBjb2xvciA9IChjb2xvcikgPyBjb2xvciA6ICcnO1xuICAgIG9wdHMgPSBvcHRzIHx8IHsgfTtcblxuICAgIC8vIElmIGlucHV0IGlzIGFscmVhZHkgYSB0aW55Y29sb3IsIHJldHVybiBpdHNlbGZcbiAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiB0aW55Y29sb3IpIHtcbiAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgY2FsbCB1c2luZyBuZXcgaW5zdGVhZFxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiB0aW55Y29sb3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGlueWNvbG9yKGNvbG9yLCBvcHRzKTtcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gaW5wdXRUb1JHQihjb2xvcik7XG4gICAgdGhpcy5fb3JpZ2luYWxJbnB1dCA9IGNvbG9yLFxuICAgIHRoaXMuX3IgPSByZ2IucixcbiAgICB0aGlzLl9nID0gcmdiLmcsXG4gICAgdGhpcy5fYiA9IHJnYi5iLFxuICAgIHRoaXMuX2EgPSByZ2IuYSxcbiAgICB0aGlzLl9yb3VuZEEgPSBtYXRoUm91bmQoMTAwKnRoaXMuX2EpIC8gMTAwLFxuICAgIHRoaXMuX2Zvcm1hdCA9IG9wdHMuZm9ybWF0IHx8IHJnYi5mb3JtYXQ7XG4gICAgdGhpcy5fZ3JhZGllbnRUeXBlID0gb3B0cy5ncmFkaWVudFR5cGU7XG5cbiAgICAvLyBEb24ndCBsZXQgdGhlIHJhbmdlIG9mIFswLDI1NV0gY29tZSBiYWNrIGluIFswLDFdLlxuICAgIC8vIFBvdGVudGlhbGx5IGxvc2UgYSBsaXR0bGUgYml0IG9mIHByZWNpc2lvbiBoZXJlLCBidXQgd2lsbCBmaXggaXNzdWVzIHdoZXJlXG4gICAgLy8gLjUgZ2V0cyBpbnRlcnByZXRlZCBhcyBoYWxmIG9mIHRoZSB0b3RhbCwgaW5zdGVhZCBvZiBoYWxmIG9mIDFcbiAgICAvLyBJZiBpdCB3YXMgc3VwcG9zZWQgdG8gYmUgMTI4LCB0aGlzIHdhcyBhbHJlYWR5IHRha2VuIGNhcmUgb2YgYnkgaW5wdXRUb1JnYlxuICAgIGlmICh0aGlzLl9yIDwgMSkgeyB0aGlzLl9yID0gbWF0aFJvdW5kKHRoaXMuX3IpOyB9XG4gICAgaWYgKHRoaXMuX2cgPCAxKSB7IHRoaXMuX2cgPSBtYXRoUm91bmQodGhpcy5fZyk7IH1cbiAgICBpZiAodGhpcy5fYiA8IDEpIHsgdGhpcy5fYiA9IG1hdGhSb3VuZCh0aGlzLl9iKTsgfVxuXG4gICAgdGhpcy5fb2sgPSByZ2Iub2s7XG4gICAgdGhpcy5fdGNfaWQgPSB0aW55Q291bnRlcisrO1xufVxuXG50aW55Y29sb3IucHJvdG90eXBlID0ge1xuICAgIGlzRGFyazogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKSA8IDEyODtcbiAgICB9LFxuICAgIGlzTGlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG4gICAgfSxcbiAgICBpc1ZhbGlkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29rO1xuICAgIH0sXG4gICAgZ2V0T3JpZ2luYWxJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3JpZ2luYWxJbnB1dDtcbiAgICB9LFxuICAgIGdldEZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gICAgfSxcbiAgICBnZXRBbHBoYTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hO1xuICAgIH0sXG4gICAgZ2V0QnJpZ2h0bmVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICByZXR1cm4gKHJnYi5yICogMjk5ICsgcmdiLmcgKiA1ODcgKyByZ2IuYiAqIDExNCkgLyAxMDAwO1xuICAgIH0sXG4gICAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHZhciBSc1JHQiwgR3NSR0IsIEJzUkdCLCBSLCBHLCBCO1xuICAgICAgICBSc1JHQiA9IHJnYi5yLzI1NTtcbiAgICAgICAgR3NSR0IgPSByZ2IuZy8yNTU7XG4gICAgICAgIEJzUkdCID0gcmdiLmIvMjU1O1xuXG4gICAgICAgIGlmIChSc1JHQiA8PSAwLjAzOTI4KSB7UiA9IFJzUkdCIC8gMTIuOTI7fSBlbHNlIHtSID0gTWF0aC5wb3coKChSc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIGlmIChHc1JHQiA8PSAwLjAzOTI4KSB7RyA9IEdzUkdCIC8gMTIuOTI7fSBlbHNlIHtHID0gTWF0aC5wb3coKChHc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIGlmIChCc1JHQiA8PSAwLjAzOTI4KSB7QiA9IEJzUkdCIC8gMTIuOTI7fSBlbHNlIHtCID0gTWF0aC5wb3coKChCc1JHQiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTt9XG4gICAgICAgIHJldHVybiAoMC4yMTI2ICogUikgKyAoMC43MTUyICogRykgKyAoMC4wNzIyICogQik7XG4gICAgfSxcbiAgICBzZXRBbHBoYTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYSA9IGJvdW5kQWxwaGEodmFsdWUpO1xuICAgICAgICB0aGlzLl9yb3VuZEEgPSBtYXRoUm91bmQoMTAwKnRoaXMuX2EpIC8gMTAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHRvSHN2OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICByZXR1cm4geyBoOiBoc3YuaCAqIDM2MCwgczogaHN2LnMsIHY6IGhzdi52LCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b0hzdlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgdmFyIGggPSBtYXRoUm91bmQoaHN2LmggKiAzNjApLCBzID0gbWF0aFJvdW5kKGhzdi5zICogMTAwKSwgdiA9IG1hdGhSb3VuZChoc3YudiAqIDEwMCk7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJoc3YoXCIgICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgdiArIFwiJSlcIiA6XG4gICAgICAgICAgXCJoc3ZhKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgdiArIFwiJSwgXCIrIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9Ic2w6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzbC5oICogMzYwLCBzOiBoc2wucywgbDogaHNsLmwsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvSHNsU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICB2YXIgaCA9IG1hdGhSb3VuZChoc2wuaCAqIDM2MCksIHMgPSBtYXRoUm91bmQoaHNsLnMgKiAxMDApLCBsID0gbWF0aFJvdW5kKGhzbC5sICogMTAwKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcImhzbChcIiAgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyBsICsgXCIlKVwiIDpcbiAgICAgICAgICBcImhzbGEoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyBsICsgXCIlLCBcIisgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b0hleDogZnVuY3Rpb24oYWxsb3czQ2hhcikge1xuICAgICAgICByZXR1cm4gcmdiVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgYWxsb3czQ2hhcik7XG4gICAgfSxcbiAgICB0b0hleFN0cmluZzogZnVuY3Rpb24oYWxsb3czQ2hhcikge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy50b0hleChhbGxvdzNDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4ODogZnVuY3Rpb24oYWxsb3c0Q2hhcikge1xuICAgICAgICByZXR1cm4gcmdiYVRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2EsIGFsbG93NENoYXIpO1xuICAgIH0sXG4gICAgdG9IZXg4U3RyaW5nOiBmdW5jdGlvbihhbGxvdzRDaGFyKSB7XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4OChhbGxvdzRDaGFyKTtcbiAgICB9LFxuICAgIHRvUmdiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0aFJvdW5kKHRoaXMuX3IpLCBnOiBtYXRoUm91bmQodGhpcy5fZyksIGI6IG1hdGhSb3VuZCh0aGlzLl9iKSwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9SZ2JTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwicmdiKFwiICArIG1hdGhSb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9nKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9iKSArIFwiKVwiIDpcbiAgICAgICAgICBcInJnYmEoXCIgKyBtYXRoUm91bmQodGhpcy5fcikgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fZykgKyBcIiwgXCIgKyBtYXRoUm91bmQodGhpcy5fYikgKyBcIiwgXCIgKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvUGVyY2VudGFnZVJnYjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlXCIsIGc6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlXCIsIGI6IG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlXCIsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvUGVyY2VudGFnZVJnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJyZ2IoXCIgICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUpXCIgOlxuICAgICAgICAgIFwicmdiYShcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX3IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2csIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIG1hdGhSb3VuZChib3VuZDAxKHRoaXMuX2IsIDI1NSkgKiAxMDApICsgXCIlLCBcIiArIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9OYW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2EgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZXhOYW1lc1tyZ2JUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCB0cnVlKV0gfHwgZmFsc2U7XG4gICAgfSxcbiAgICB0b0ZpbHRlcjogZnVuY3Rpb24oc2Vjb25kQ29sb3IpIHtcbiAgICAgICAgdmFyIGhleDhTdHJpbmcgPSAnIycgKyByZ2JhVG9BcmdiSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRoaXMuX2EpO1xuICAgICAgICB2YXIgc2Vjb25kSGV4OFN0cmluZyA9IGhleDhTdHJpbmc7XG4gICAgICAgIHZhciBncmFkaWVudFR5cGUgPSB0aGlzLl9ncmFkaWVudFR5cGUgPyBcIkdyYWRpZW50VHlwZSA9IDEsIFwiIDogXCJcIjtcblxuICAgICAgICBpZiAoc2Vjb25kQ29sb3IpIHtcbiAgICAgICAgICAgIHZhciBzID0gdGlueWNvbG9yKHNlY29uZENvbG9yKTtcbiAgICAgICAgICAgIHNlY29uZEhleDhTdHJpbmcgPSAnIycgKyByZ2JhVG9BcmdiSGV4KHMuX3IsIHMuX2csIHMuX2IsIHMuX2EpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFwiK2dyYWRpZW50VHlwZStcInN0YXJ0Q29sb3JzdHI9XCIraGV4OFN0cmluZytcIixlbmRDb2xvcnN0cj1cIitzZWNvbmRIZXg4U3RyaW5nK1wiKVwiO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICB2YXIgZm9ybWF0U2V0ID0gISFmb3JtYXQ7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLl9mb3JtYXQ7XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFzQWxwaGEgPSB0aGlzLl9hIDwgMSAmJiB0aGlzLl9hID49IDA7XG4gICAgICAgIHZhciBuZWVkc0FscGhhRm9ybWF0ID0gIWZvcm1hdFNldCAmJiBoYXNBbHBoYSAmJiAoZm9ybWF0ID09PSBcImhleFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg2XCIgfHwgZm9ybWF0ID09PSBcImhleDNcIiB8fCBmb3JtYXQgPT09IFwiaGV4NFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg4XCIgfHwgZm9ybWF0ID09PSBcIm5hbWVcIik7XG5cbiAgICAgICAgaWYgKG5lZWRzQWxwaGFGb3JtYXQpIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgXCJ0cmFuc3BhcmVudFwiLCBhbGwgb3RoZXIgbm9uLWFscGhhIGZvcm1hdHNcbiAgICAgICAgICAgIC8vIHdpbGwgcmV0dXJuIHJnYmEgd2hlbiB0aGVyZSBpcyB0cmFuc3BhcmVuY3kuXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBcIm5hbWVcIiAmJiB0aGlzLl9hID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9OYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicmdiXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcInByZ2JcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleFwiIHx8IGZvcm1hdCA9PT0gXCJoZXg2XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDNcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDRcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoZXg4XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9OYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoc2xcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzbFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaHN2XCIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic3ZTdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmcgfHwgdGhpcy50b0hleFN0cmluZygpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGlueWNvbG9yKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgfSxcblxuICAgIF9hcHBseU1vZGlmaWNhdGlvbjogZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gZm4uYXBwbHkobnVsbCwgW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MpKSk7XG4gICAgICAgIHRoaXMuX3IgPSBjb2xvci5fcjtcbiAgICAgICAgdGhpcy5fZyA9IGNvbG9yLl9nO1xuICAgICAgICB0aGlzLl9iID0gY29sb3IuX2I7XG4gICAgICAgIHRoaXMuc2V0QWxwaGEoY29sb3IuX2EpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGxpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obGlnaHRlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGJyaWdodGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGJyaWdodGVuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZGFya2VuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGRhcmtlbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGRlc2F0dXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZGVzYXR1cmF0ZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNhdHVyYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHNhdHVyYXRlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZ3JleXNjYWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGdyZXlzY2FsZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oc3BpbiwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5Q29tYmluYXRpb246IGZ1bmN0aW9uKGZuLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICB9LFxuICAgIGFuYWxvZ291czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGFuYWxvZ291cywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGNvbXBsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihjb21wbGVtZW50LCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbW9ub2Nocm9tYXRpYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKG1vbm9jaHJvbWF0aWMsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzcGxpdGNvbXBsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihzcGxpdGNvbXBsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICB0cmlhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHRyaWFkLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgdGV0cmFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odGV0cmFkLCBhcmd1bWVudHMpO1xuICAgIH1cbn07XG5cbi8vIElmIGlucHV0IGlzIGFuIG9iamVjdCwgZm9yY2UgMSBpbnRvIFwiMS4wXCIgdG8gaGFuZGxlIHJhdGlvcyBwcm9wZXJseVxuLy8gU3RyaW5nIGlucHV0IHJlcXVpcmVzIFwiMS4wXCIgYXMgaW5wdXQsIHNvIDEgd2lsbCBiZSB0cmVhdGVkIGFzIDFcbnRpbnljb2xvci5mcm9tUmF0aW8gPSBmdW5jdGlvbihjb2xvciwgb3B0cykge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT0gXCJvYmplY3RcIikge1xuICAgICAgICB2YXIgbmV3Q29sb3IgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBjb2xvcikge1xuICAgICAgICAgICAgaWYgKGNvbG9yLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29sb3JbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xvcltpXSA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3JbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xufTtcblxuLy8gR2l2ZW4gYSBzdHJpbmcgb3Igb2JqZWN0LCBjb252ZXJ0IHRoYXQgaW5wdXQgdG8gUkdCXG4vLyBQb3NzaWJsZSBzdHJpbmcgaW5wdXRzOlxuLy9cbi8vICAgICBcInJlZFwiXG4vLyAgICAgXCIjZjAwXCIgb3IgXCJmMDBcIlxuLy8gICAgIFwiI2ZmMDAwMFwiIG9yIFwiZmYwMDAwXCJcbi8vICAgICBcIiNmZjAwMDAwMFwiIG9yIFwiZmYwMDAwMDBcIlxuLy8gICAgIFwicmdiIDI1NSAwIDBcIiBvciBcInJnYiAoMjU1LCAwLCAwKVwiXG4vLyAgICAgXCJyZ2IgMS4wIDAgMFwiIG9yIFwicmdiICgxLCAwLCAwKVwiXG4vLyAgICAgXCJyZ2JhICgyNTUsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDI1NSwgMCwgMCwgMVwiXG4vLyAgICAgXCJyZ2JhICgxLjAsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDEuMCwgMCwgMCwgMVwiXG4vLyAgICAgXCJoc2woMCwgMTAwJSwgNTAlKVwiIG9yIFwiaHNsIDAgMTAwJSA1MCVcIlxuLy8gICAgIFwiaHNsYSgwLCAxMDAlLCA1MCUsIDEpXCIgb3IgXCJoc2xhIDAgMTAwJSA1MCUsIDFcIlxuLy8gICAgIFwiaHN2KDAsIDEwMCUsIDEwMCUpXCIgb3IgXCJoc3YgMCAxMDAlIDEwMCVcIlxuLy9cbmZ1bmN0aW9uIGlucHV0VG9SR0IoY29sb3IpIHtcblxuICAgIHZhciByZ2IgPSB7IHI6IDAsIGc6IDAsIGI6IDAgfTtcbiAgICB2YXIgYSA9IDE7XG4gICAgdmFyIHMgPSBudWxsO1xuICAgIHZhciB2ID0gbnVsbDtcbiAgICB2YXIgbCA9IG51bGw7XG4gICAgdmFyIG9rID0gZmFsc2U7XG4gICAgdmFyIGZvcm1hdCA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbG9yID0gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5yKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5nKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5iKSkge1xuICAgICAgICAgICAgcmdiID0gcmdiVG9SZ2IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICBmb3JtYXQgPSBTdHJpbmcoY29sb3Iucikuc3Vic3RyKC0xKSA9PT0gXCIlXCIgPyBcInByZ2JcIiA6IFwicmdiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IudikpIHtcbiAgICAgICAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgICAgICAgdiA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iudik7XG4gICAgICAgICAgICByZ2IgPSBoc3ZUb1JnYihjb2xvci5oLCBzLCB2KTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFwiaHN2XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IubCkpIHtcbiAgICAgICAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgICAgICAgbCA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3IubCk7XG4gICAgICAgICAgICByZ2IgPSBoc2xUb1JnYihjb2xvci5oLCBzLCBsKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFwiaHNsXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sb3IuaGFzT3duUHJvcGVydHkoXCJhXCIpKSB7XG4gICAgICAgICAgICBhID0gY29sb3IuYTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGEgPSBib3VuZEFscGhhKGEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2s6IG9rLFxuICAgICAgICBmb3JtYXQ6IGNvbG9yLmZvcm1hdCB8fCBmb3JtYXQsXG4gICAgICAgIHI6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5yLCAwKSksXG4gICAgICAgIGc6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5nLCAwKSksXG4gICAgICAgIGI6IG1hdGhNaW4oMjU1LCBtYXRoTWF4KHJnYi5iLCAwKSksXG4gICAgICAgIGE6IGFcbiAgICB9O1xufVxuXG4vLyBDb252ZXJzaW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gcmdiVG9Ic2wsIHJnYlRvSHN2LCBoc2xUb1JnYiwgaHN2VG9SZ2IgbW9kaWZpZWQgZnJvbTpcbi8vIDxodHRwOi8vbWppamFja3Nvbi5jb20vMjAwOC8wMi9yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNvbnZlcnNpb24tYWxnb3JpdGhtcy1pbi1qYXZhc2NyaXB0PlxuXG4vLyByZ2JUb1JnYlxuLy8gSGFuZGxlIGJvdW5kcyAvIHBlcmNlbnRhZ2UgY2hlY2tpbmcgdG8gY29uZm9ybSB0byBDU1MgY29sb3Igc3BlY1xuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvPlxuLy8gKkFzc3VtZXM6KiByLCBnLCBiIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiBbMCwgMjU1XVxuZnVuY3Rpb24gcmdiVG9SZ2IociwgZywgYil7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogYm91bmQwMShyLCAyNTUpICogMjU1LFxuICAgICAgICBnOiBib3VuZDAxKGcsIDI1NSkgKiAyNTUsXG4gICAgICAgIGI6IGJvdW5kMDEoYiwgMjU1KSAqIDI1NVxuICAgIH07XG59XG5cbi8vIHJnYlRvSHNsXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNMLlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIFswLCAyNTVdIG9yIFswLCAxXVxuLy8gKlJldHVybnM6KiB7IGgsIHMsIGwgfSBpbiBbMCwxXVxuZnVuY3Rpb24gcmdiVG9Ic2wociwgZywgYikge1xuXG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG5cbiAgICB2YXIgbWF4ID0gbWF0aE1heChyLCBnLCBiKSwgbWluID0gbWF0aE1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGggLz0gNjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCBsOiBsIH07XG59XG5cbi8vIGhzbFRvUmdiXG4vLyBDb252ZXJ0cyBhbiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIGwgYXJlIGNvbnRhaW5lZCBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICAgIHZhciByLCBnLCBiO1xuXG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKTtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIGwgPSBib3VuZDAxKGwsIDEwMCk7XG5cbiAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICAgICAgaWYodCA8IDApIHQgKz0gMTtcbiAgICAgICAgaWYodCA+IDEpIHQgLT0gMTtcbiAgICAgICAgaWYodCA8IDEvNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICAgIGlmKHQgPCAxLzIpIHJldHVybiBxO1xuICAgICAgICBpZih0IDwgMi8zKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2O1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBpZihzID09PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyByZ2JUb0hzdlxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTVlxuLy8gKkFzc3VtZXM6KiByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgaCwgcywgdiB9IGluIFswLDFdXG5mdW5jdGlvbiByZ2JUb0hzdihyLCBnLCBiKSB7XG5cbiAgICByID0gYm91bmQwMShyLCAyNTUpO1xuICAgIGcgPSBib3VuZDAxKGcsIDI1NSk7XG4gICAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcblxuICAgIHZhciBtYXggPSBtYXRoTWF4KHIsIGcsIGIpLCBtaW4gPSBtYXRoTWluKHIsIGcsIGIpO1xuICAgIHZhciBoLCBzLCB2ID0gbWF4O1xuXG4gICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xuXG4gICAgaWYobWF4ID09IG1pbikge1xuICAgICAgICBoID0gMDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoKG1heCkge1xuICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCB2OiB2IH07XG59XG5cbi8vIGhzdlRvUmdiXG4vLyBDb252ZXJ0cyBhbiBIU1YgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIHYgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuIGZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcblxuICAgIGggPSBib3VuZDAxKGgsIDM2MCkgKiA2O1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgdiA9IGJvdW5kMDEodiwgMTAwKTtcblxuICAgIHZhciBpID0gTWF0aC5mbG9vcihoKSxcbiAgICAgICAgZiA9IGggLSBpLFxuICAgICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICAgIHEgPSB2ICogKDEgLSBmICogcyksXG4gICAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyksXG4gICAgICAgIG1vZCA9IGkgJSA2LFxuICAgICAgICByID0gW3YsIHEsIHAsIHAsIHQsIHZdW21vZF0sXG4gICAgICAgIGcgPSBbdCwgdiwgdiwgcSwgcCwgcF1bbW9kXSxcbiAgICAgICAgYiA9IFtwLCBwLCB0LCB2LCB2LCBxXVttb2RdO1xuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyByZ2JUb0hleFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV1cbi8vIFJldHVybnMgYSAzIG9yIDYgY2hhcmFjdGVyIGhleFxuZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYiwgYWxsb3czQ2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSAzIGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3czQ2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gcmdiYVRvSGV4XG4vLyBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHBsdXMgYWxwaGEgdHJhbnNwYXJlbmN5IHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBhbmRcbi8vIGEgaW4gWzAsIDFdLiBSZXR1cm5zIGEgNCBvciA4IGNoYXJhY3RlciByZ2JhIGhleFxuZnVuY3Rpb24gcmdiYVRvSGV4KHIsIGcsIGIsIGEsIGFsbG93NENoYXIpIHtcblxuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoY29udmVydERlY2ltYWxUb0hleChhKSlcbiAgICBdO1xuXG4gICAgLy8gUmV0dXJuIGEgNCBjaGFyYWN0ZXIgaGV4IGlmIHBvc3NpYmxlXG4gICAgaWYgKGFsbG93NENoYXIgJiYgaGV4WzBdLmNoYXJBdCgwKSA9PSBoZXhbMF0uY2hhckF0KDEpICYmIGhleFsxXS5jaGFyQXQoMCkgPT0gaGV4WzFdLmNoYXJBdCgxKSAmJiBoZXhbMl0uY2hhckF0KDApID09IGhleFsyXS5jaGFyQXQoMSkgJiYgaGV4WzNdLmNoYXJBdCgwKSA9PSBoZXhbM10uY2hhckF0KDEpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCkgKyBoZXhbM10uY2hhckF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gcmdiYVRvQXJnYkhleFxuLy8gQ29udmVydHMgYW4gUkdCQSBjb2xvciB0byBhbiBBUkdCIEhleDggc3RyaW5nXG4vLyBSYXJlbHkgdXNlZCwgYnV0IHJlcXVpcmVkIGZvciBcInRvRmlsdGVyKClcIlxuZnVuY3Rpb24gcmdiYVRvQXJnYkhleChyLCBnLCBiLCBhKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKGNvbnZlcnREZWNpbWFsVG9IZXgoYSkpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gZXF1YWxzXG4vLyBDYW4gYmUgY2FsbGVkIHdpdGggYW55IHRpbnljb2xvciBpbnB1dFxudGlueWNvbG9yLmVxdWFscyA9IGZ1bmN0aW9uIChjb2xvcjEsIGNvbG9yMikge1xuICAgIGlmICghY29sb3IxIHx8ICFjb2xvcjIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcjEpLnRvUmdiU3RyaW5nKCkgPT0gdGlueWNvbG9yKGNvbG9yMikudG9SZ2JTdHJpbmcoKTtcbn07XG5cbnRpbnljb2xvci5yYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlueWNvbG9yLmZyb21SYXRpbyh7XG4gICAgICAgIHI6IG1hdGhSYW5kb20oKSxcbiAgICAgICAgZzogbWF0aFJhbmRvbSgpLFxuICAgICAgICBiOiBtYXRoUmFuZG9tKClcbiAgICB9KTtcbn07XG5cbi8vIE1vZGlmaWNhdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoYW5rcyB0byBsZXNzLmpzIGZvciBzb21lIG9mIHRoZSBiYXNpY3MgaGVyZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9jbG91ZGhlYWQvbGVzcy5qcy9ibG9iL21hc3Rlci9saWIvbGVzcy9mdW5jdGlvbnMuanM+XG5cbmZ1bmN0aW9uIGRlc2F0dXJhdGUoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLnMgLT0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBzYXR1cmF0ZShjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wucyArPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIGdyZXlzY2FsZShjb2xvcikge1xuICAgIHJldHVybiB0aW55Y29sb3IoY29sb3IpLmRlc2F0dXJhdGUoMTAwKTtcbn1cblxuZnVuY3Rpb24gbGlnaHRlbiAoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmwgKz0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG5mdW5jdGlvbiBicmlnaHRlbihjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIHJnYiA9IHRpbnljb2xvcihjb2xvcikudG9SZ2IoKTtcbiAgICByZ2IuciA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5yIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmdiLmcgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuZyAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJnYi5iID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLmIgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKHJnYik7XG59XG5cbmZ1bmN0aW9uIGRhcmtlbiAoY29sb3IsIGFtb3VudCkge1xuICAgIGFtb3VudCA9IChhbW91bnQgPT09IDApID8gMCA6IChhbW91bnQgfHwgMTApO1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmwgLT0gYW1vdW50IC8gMTAwO1xuICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG4vLyBTcGluIHRha2VzIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgYW1vdW50IHdpdGhpbiBbLTM2MCwgMzYwXSBpbmRpY2F0aW5nIHRoZSBjaGFuZ2Ugb2YgaHVlLlxuLy8gVmFsdWVzIG91dHNpZGUgb2YgdGhpcyByYW5nZSB3aWxsIGJlIHdyYXBwZWQgaW50byB0aGlzIHJhbmdlLlxuZnVuY3Rpb24gc3Bpbihjb2xvciwgYW1vdW50KSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaHVlID0gKGhzbC5oICsgYW1vdW50KSAlIDM2MDtcbiAgICBoc2wuaCA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG4gICAgcmV0dXJuIHRpbnljb2xvcihoc2wpO1xufVxuXG4vLyBDb21iaW5hdGlvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGpRdWVyeSB4Q29sb3IgZm9yIHNvbWUgb2YgdGhlIGlkZWFzIGJlaGluZCB0aGVzZVxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZ1c2lvbi9qUXVlcnkteGNvbG9yL2Jsb2IvbWFzdGVyL2pxdWVyeS54Y29sb3IuanM+XG5cbmZ1bmN0aW9uIGNvbXBsZW1lbnQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5oID0gKGhzbC5oICsgMTgwKSAlIDM2MDtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIHRyaWFkKGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMTIwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDI0MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHRldHJhZChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDkwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDE4MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAyNzApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBzcGxpdGNvbXBsZW1lbnQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyA3MikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDIxNikgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gYW5hbG9nb3VzKGNvbG9yLCByZXN1bHRzLCBzbGljZXMpIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cyB8fCA2O1xuICAgIHNsaWNlcyA9IHNsaWNlcyB8fCAzMDtcblxuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIHBhcnQgPSAzNjAgLyBzbGljZXM7XG4gICAgdmFyIHJldCA9IFt0aW55Y29sb3IoY29sb3IpXTtcblxuICAgIGZvciAoaHNsLmggPSAoKGhzbC5oIC0gKHBhcnQgKiByZXN1bHRzID4+IDEpKSArIDcyMCkgJSAzNjA7IC0tcmVzdWx0czsgKSB7XG4gICAgICAgIGhzbC5oID0gKGhzbC5oICsgcGFydCkgJSAzNjA7XG4gICAgICAgIHJldC5wdXNoKHRpbnljb2xvcihoc2wpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbW9ub2Nocm9tYXRpYyhjb2xvciwgcmVzdWx0cykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gICAgdmFyIGhzdiA9IHRpbnljb2xvcihjb2xvcikudG9Ic3YoKTtcbiAgICB2YXIgaCA9IGhzdi5oLCBzID0gaHN2LnMsIHYgPSBoc3YudjtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgdmFyIG1vZGlmaWNhdGlvbiA9IDEgLyByZXN1bHRzO1xuXG4gICAgd2hpbGUgKHJlc3VsdHMtLSkge1xuICAgICAgICByZXQucHVzaCh0aW55Y29sb3IoeyBoOiBoLCBzOiBzLCB2OiB2fSkpO1xuICAgICAgICB2ID0gKHYgKyBtb2RpZmljYXRpb24pICUgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vLyBVdGlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnRpbnljb2xvci5taXggPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMiwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCA1MCk7XG5cbiAgICB2YXIgcmdiMSA9IHRpbnljb2xvcihjb2xvcjEpLnRvUmdiKCk7XG4gICAgdmFyIHJnYjIgPSB0aW55Y29sb3IoY29sb3IyKS50b1JnYigpO1xuXG4gICAgdmFyIHAgPSBhbW91bnQgLyAxMDA7XG5cbiAgICB2YXIgcmdiYSA9IHtcbiAgICAgICAgcjogKChyZ2IyLnIgLSByZ2IxLnIpICogcCkgKyByZ2IxLnIsXG4gICAgICAgIGc6ICgocmdiMi5nIC0gcmdiMS5nKSAqIHApICsgcmdiMS5nLFxuICAgICAgICBiOiAoKHJnYjIuYiAtIHJnYjEuYikgKiBwKSArIHJnYjEuYixcbiAgICAgICAgYTogKChyZ2IyLmEgLSByZ2IxLmEpICogcCkgKyByZ2IxLmFcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRpbnljb2xvcihyZ2JhKTtcbn07XG5cbi8vIFJlYWRhYmlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZiAoV0NBRyBWZXJzaW9uIDIpXG5cbi8vIGNvbnRyYXN0XG4vLyBBbmFseXplIHRoZSAyIGNvbG9ycyBhbmQgcmV0dXJucyB0aGUgY29sb3IgY29udHJhc3QgZGVmaW5lZCBieSAoV0NBRyBWZXJzaW9uIDIpXG50aW55Y29sb3IucmVhZGFiaWxpdHkgPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMikge1xuICAgIHZhciBjMSA9IHRpbnljb2xvcihjb2xvcjEpO1xuICAgIHZhciBjMiA9IHRpbnljb2xvcihjb2xvcjIpO1xuICAgIHJldHVybiAoTWF0aC5tYXgoYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpIC8gKE1hdGgubWluKGMxLmdldEx1bWluYW5jZSgpLGMyLmdldEx1bWluYW5jZSgpKSswLjA1KTtcbn07XG5cbi8vIGlzUmVhZGFibGVcbi8vIEVuc3VyZSB0aGF0IGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgY29sb3IgY29tYmluYXRpb25zIG1lZXQgV0NBRzIgZ3VpZGVsaW5lcy5cbi8vIFRoZSB0aGlyZCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBPYmplY3QuXG4vLyAgICAgIHRoZSAnbGV2ZWwnIHByb3BlcnR5IHN0YXRlcyAnQUEnIG9yICdBQUEnIC0gaWYgbWlzc2luZyBvciBpbnZhbGlkLCBpdCBkZWZhdWx0cyB0byAnQUEnO1xuLy8gICAgICB0aGUgJ3NpemUnIHByb3BlcnR5IHN0YXRlcyAnbGFyZ2UnIG9yICdzbWFsbCcgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdzbWFsbCcuXG4vLyBJZiB0aGUgZW50aXJlIG9iamVjdCBpcyBhYnNlbnQsIGlzUmVhZGFibGUgZGVmYXVsdHMgdG8ge2xldmVsOlwiQUFcIixzaXplOlwic21hbGxcIn0uXG5cbi8vICpFeGFtcGxlKlxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiKSA9PiBmYWxzZVxuLy8gICAgdGlueWNvbG9yLmlzUmVhZGFibGUoXCIjMDAwXCIsIFwiIzExMVwiLHtsZXZlbDpcIkFBXCIsc2l6ZTpcImxhcmdlXCJ9KSA9PiBmYWxzZVxudGlueWNvbG9yLmlzUmVhZGFibGUgPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMiwgd2NhZzIpIHtcbiAgICB2YXIgcmVhZGFiaWxpdHkgPSB0aW55Y29sb3IucmVhZGFiaWxpdHkoY29sb3IxLCBjb2xvcjIpO1xuICAgIHZhciB3Y2FnMlBhcm1zLCBvdXQ7XG5cbiAgICBvdXQgPSBmYWxzZTtcblxuICAgIHdjYWcyUGFybXMgPSB2YWxpZGF0ZVdDQUcyUGFybXMod2NhZzIpO1xuICAgIHN3aXRjaCAod2NhZzJQYXJtcy5sZXZlbCArIHdjYWcyUGFybXMuc2l6ZSkge1xuICAgICAgICBjYXNlIFwiQUFzbWFsbFwiOlxuICAgICAgICBjYXNlIFwiQUFBbGFyZ2VcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDQuNTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQUFsYXJnZVwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gMztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQUFBc21hbGxcIjpcbiAgICAgICAgICAgIG91dCA9IHJlYWRhYmlsaXR5ID49IDc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcblxufTtcblxuLy8gbW9zdFJlYWRhYmxlXG4vLyBHaXZlbiBhIGJhc2UgY29sb3IgYW5kIGEgbGlzdCBvZiBwb3NzaWJsZSBmb3JlZ3JvdW5kIG9yIGJhY2tncm91bmRcbi8vIGNvbG9ycyBmb3IgdGhhdCBiYXNlLCByZXR1cm5zIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yLlxuLy8gT3B0aW9uYWxseSByZXR1cm5zIEJsYWNrIG9yIFdoaXRlIGlmIHRoZSBtb3N0IHJlYWRhYmxlIGNvbG9yIGlzIHVucmVhZGFibGUuXG4vLyAqRXhhbXBsZSpcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczpmYWxzZX0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiIzExMjI1NVwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZX0pLnRvSGV4U3RyaW5nKCk7ICAvLyBcIiNmZmZmZmZcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwibGFyZ2VcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZhZjNmM1wiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJzbWFsbFwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmZmZmZmXCJcbnRpbnljb2xvci5tb3N0UmVhZGFibGUgPSBmdW5jdGlvbihiYXNlQ29sb3IsIGNvbG9yTGlzdCwgYXJncykge1xuICAgIHZhciBiZXN0Q29sb3IgPSBudWxsO1xuICAgIHZhciBiZXN0U2NvcmUgPSAwO1xuICAgIHZhciByZWFkYWJpbGl0eTtcbiAgICB2YXIgaW5jbHVkZUZhbGxiYWNrQ29sb3JzLCBsZXZlbCwgc2l6ZSA7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgaW5jbHVkZUZhbGxiYWNrQ29sb3JzID0gYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnMgO1xuICAgIGxldmVsID0gYXJncy5sZXZlbDtcbiAgICBzaXplID0gYXJncy5zaXplO1xuXG4gICAgZm9yICh2YXIgaT0gMDsgaSA8IGNvbG9yTGlzdC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgcmVhZGFiaWxpdHkgPSB0aW55Y29sb3IucmVhZGFiaWxpdHkoYmFzZUNvbG9yLCBjb2xvckxpc3RbaV0pO1xuICAgICAgICBpZiAocmVhZGFiaWxpdHkgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHJlYWRhYmlsaXR5O1xuICAgICAgICAgICAgYmVzdENvbG9yID0gdGlueWNvbG9yKGNvbG9yTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGlueWNvbG9yLmlzUmVhZGFibGUoYmFzZUNvbG9yLCBiZXN0Q29sb3IsIHtcImxldmVsXCI6bGV2ZWwsXCJzaXplXCI6c2l6ZX0pIHx8ICFpbmNsdWRlRmFsbGJhY2tDb2xvcnMpIHtcbiAgICAgICAgcmV0dXJuIGJlc3RDb2xvcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFyZ3MuaW5jbHVkZUZhbGxiYWNrQ29sb3JzPWZhbHNlO1xuICAgICAgICByZXR1cm4gdGlueWNvbG9yLm1vc3RSZWFkYWJsZShiYXNlQ29sb3IsW1wiI2ZmZlwiLCBcIiMwMDBcIl0sYXJncyk7XG4gICAgfVxufTtcblxuLy8gQmlnIExpc3Qgb2YgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3I+XG52YXIgbmFtZXMgPSB0aW55Y29sb3IubmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiBcImYwZjhmZlwiLFxuICAgIGFudGlxdWV3aGl0ZTogXCJmYWViZDdcIixcbiAgICBhcXVhOiBcIjBmZlwiLFxuICAgIGFxdWFtYXJpbmU6IFwiN2ZmZmQ0XCIsXG4gICAgYXp1cmU6IFwiZjBmZmZmXCIsXG4gICAgYmVpZ2U6IFwiZjVmNWRjXCIsXG4gICAgYmlzcXVlOiBcImZmZTRjNFwiLFxuICAgIGJsYWNrOiBcIjAwMFwiLFxuICAgIGJsYW5jaGVkYWxtb25kOiBcImZmZWJjZFwiLFxuICAgIGJsdWU6IFwiMDBmXCIsXG4gICAgYmx1ZXZpb2xldDogXCI4YTJiZTJcIixcbiAgICBicm93bjogXCJhNTJhMmFcIixcbiAgICBidXJseXdvb2Q6IFwiZGViODg3XCIsXG4gICAgYnVybnRzaWVubmE6IFwiZWE3ZTVkXCIsXG4gICAgY2FkZXRibHVlOiBcIjVmOWVhMFwiLFxuICAgIGNoYXJ0cmV1c2U6IFwiN2ZmZjAwXCIsXG4gICAgY2hvY29sYXRlOiBcImQyNjkxZVwiLFxuICAgIGNvcmFsOiBcImZmN2Y1MFwiLFxuICAgIGNvcm5mbG93ZXJibHVlOiBcIjY0OTVlZFwiLFxuICAgIGNvcm5zaWxrOiBcImZmZjhkY1wiLFxuICAgIGNyaW1zb246IFwiZGMxNDNjXCIsXG4gICAgY3lhbjogXCIwZmZcIixcbiAgICBkYXJrYmx1ZTogXCIwMDAwOGJcIixcbiAgICBkYXJrY3lhbjogXCIwMDhiOGJcIixcbiAgICBkYXJrZ29sZGVucm9kOiBcImI4ODYwYlwiLFxuICAgIGRhcmtncmF5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtncmVlbjogXCIwMDY0MDBcIixcbiAgICBkYXJrZ3JleTogXCJhOWE5YTlcIixcbiAgICBkYXJra2hha2k6IFwiYmRiNzZiXCIsXG4gICAgZGFya21hZ2VudGE6IFwiOGIwMDhiXCIsXG4gICAgZGFya29saXZlZ3JlZW46IFwiNTU2YjJmXCIsXG4gICAgZGFya29yYW5nZTogXCJmZjhjMDBcIixcbiAgICBkYXJrb3JjaGlkOiBcIjk5MzJjY1wiLFxuICAgIGRhcmtyZWQ6IFwiOGIwMDAwXCIsXG4gICAgZGFya3NhbG1vbjogXCJlOTk2N2FcIixcbiAgICBkYXJrc2VhZ3JlZW46IFwiOGZiYzhmXCIsXG4gICAgZGFya3NsYXRlYmx1ZTogXCI0ODNkOGJcIixcbiAgICBkYXJrc2xhdGVncmF5OiBcIjJmNGY0ZlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3R1cnF1b2lzZTogXCIwMGNlZDFcIixcbiAgICBkYXJrdmlvbGV0OiBcIjk0MDBkM1wiLFxuICAgIGRlZXBwaW5rOiBcImZmMTQ5M1wiLFxuICAgIGRlZXBza3libHVlOiBcIjAwYmZmZlwiLFxuICAgIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCI2OTY5NjlcIixcbiAgICBkb2RnZXJibHVlOiBcIjFlOTBmZlwiLFxuICAgIGZpcmVicmljazogXCJiMjIyMjJcIixcbiAgICBmbG9yYWx3aGl0ZTogXCJmZmZhZjBcIixcbiAgICBmb3Jlc3RncmVlbjogXCIyMjhiMjJcIixcbiAgICBmdWNoc2lhOiBcImYwZlwiLFxuICAgIGdhaW5zYm9ybzogXCJkY2RjZGNcIixcbiAgICBnaG9zdHdoaXRlOiBcImY4ZjhmZlwiLFxuICAgIGdvbGQ6IFwiZmZkNzAwXCIsXG4gICAgZ29sZGVucm9kOiBcImRhYTUyMFwiLFxuICAgIGdyYXk6IFwiODA4MDgwXCIsXG4gICAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gICAgZ3JlZW55ZWxsb3c6IFwiYWRmZjJmXCIsXG4gICAgZ3JleTogXCI4MDgwODBcIixcbiAgICBob25leWRldzogXCJmMGZmZjBcIixcbiAgICBob3RwaW5rOiBcImZmNjliNFwiLFxuICAgIGluZGlhbnJlZDogXCJjZDVjNWNcIixcbiAgICBpbmRpZ286IFwiNGIwMDgyXCIsXG4gICAgaXZvcnk6IFwiZmZmZmYwXCIsXG4gICAga2hha2k6IFwiZjBlNjhjXCIsXG4gICAgbGF2ZW5kZXI6IFwiZTZlNmZhXCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCJmZmYwZjVcIixcbiAgICBsYXduZ3JlZW46IFwiN2NmYzAwXCIsXG4gICAgbGVtb25jaGlmZm9uOiBcImZmZmFjZFwiLFxuICAgIGxpZ2h0Ymx1ZTogXCJhZGQ4ZTZcIixcbiAgICBsaWdodGNvcmFsOiBcImYwODA4MFwiLFxuICAgIGxpZ2h0Y3lhbjogXCJlMGZmZmZcIixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCJmYWZhZDJcIixcbiAgICBsaWdodGdyYXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRncmVlbjogXCI5MGVlOTBcIixcbiAgICBsaWdodGdyZXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRwaW5rOiBcImZmYjZjMVwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcImZmYTA3YVwiLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFwiMjBiMmFhXCIsXG4gICAgbGlnaHRza3libHVlOiBcIjg3Y2VmYVwiLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBcImIwYzRkZVwiLFxuICAgIGxpZ2h0eWVsbG93OiBcImZmZmZlMFwiLFxuICAgIGxpbWU6IFwiMGYwXCIsXG4gICAgbGltZWdyZWVuOiBcIjMyY2QzMlwiLFxuICAgIGxpbmVuOiBcImZhZjBlNlwiLFxuICAgIG1hZ2VudGE6IFwiZjBmXCIsXG4gICAgbWFyb29uOiBcIjgwMDAwMFwiLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZjZGFhXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIwMDAwY2RcIixcbiAgICBtZWRpdW1vcmNoaWQ6IFwiYmE1NWQzXCIsXG4gICAgbWVkaXVtcHVycGxlOiBcIjkzNzBkYlwiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBcIjNjYjM3MVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCI3YjY4ZWVcIixcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMGZhOWFcIixcbiAgICBtZWRpdW10dXJxdW9pc2U6IFwiNDhkMWNjXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcImM3MTU4NVwiLFxuICAgIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgICBtaW50Y3JlYW06IFwiZjVmZmZhXCIsXG4gICAgbWlzdHlyb3NlOiBcImZmZTRlMVwiLFxuICAgIG1vY2Nhc2luOiBcImZmZTRiNVwiLFxuICAgIG5hdmFqb3doaXRlOiBcImZmZGVhZFwiLFxuICAgIG5hdnk6IFwiMDAwMDgwXCIsXG4gICAgb2xkbGFjZTogXCJmZGY1ZTZcIixcbiAgICBvbGl2ZTogXCI4MDgwMDBcIixcbiAgICBvbGl2ZWRyYWI6IFwiNmI4ZTIzXCIsXG4gICAgb3JhbmdlOiBcImZmYTUwMFwiLFxuICAgIG9yYW5nZXJlZDogXCJmZjQ1MDBcIixcbiAgICBvcmNoaWQ6IFwiZGE3MGQ2XCIsXG4gICAgcGFsZWdvbGRlbnJvZDogXCJlZWU4YWFcIixcbiAgICBwYWxlZ3JlZW46IFwiOThmYjk4XCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCJhZmVlZWVcIixcbiAgICBwYWxldmlvbGV0cmVkOiBcImRiNzA5M1wiLFxuICAgIHBhcGF5YXdoaXA6IFwiZmZlZmQ1XCIsXG4gICAgcGVhY2hwdWZmOiBcImZmZGFiOVwiLFxuICAgIHBlcnU6IFwiY2Q4NTNmXCIsXG4gICAgcGluazogXCJmZmMwY2JcIixcbiAgICBwbHVtOiBcImRkYTBkZFwiLFxuICAgIHBvd2RlcmJsdWU6IFwiYjBlMGU2XCIsXG4gICAgcHVycGxlOiBcIjgwMDA4MFwiLFxuICAgIHJlYmVjY2FwdXJwbGU6IFwiNjYzMzk5XCIsXG4gICAgcmVkOiBcImYwMFwiLFxuICAgIHJvc3licm93bjogXCJiYzhmOGZcIixcbiAgICByb3lhbGJsdWU6IFwiNDE2OWUxXCIsXG4gICAgc2FkZGxlYnJvd246IFwiOGI0NTEzXCIsXG4gICAgc2FsbW9uOiBcImZhODA3MlwiLFxuICAgIHNhbmR5YnJvd246IFwiZjRhNDYwXCIsXG4gICAgc2VhZ3JlZW46IFwiMmU4YjU3XCIsXG4gICAgc2Vhc2hlbGw6IFwiZmZmNWVlXCIsXG4gICAgc2llbm5hOiBcImEwNTIyZFwiLFxuICAgIHNpbHZlcjogXCJjMGMwYzBcIixcbiAgICBza3libHVlOiBcIjg3Y2VlYlwiLFxuICAgIHNsYXRlYmx1ZTogXCI2YTVhY2RcIixcbiAgICBzbGF0ZWdyYXk6IFwiNzA4MDkwXCIsXG4gICAgc2xhdGVncmV5OiBcIjcwODA5MFwiLFxuICAgIHNub3c6IFwiZmZmYWZhXCIsXG4gICAgc3ByaW5nZ3JlZW46IFwiMDBmZjdmXCIsXG4gICAgc3RlZWxibHVlOiBcIjQ2ODJiNFwiLFxuICAgIHRhbjogXCJkMmI0OGNcIixcbiAgICB0ZWFsOiBcIjAwODA4MFwiLFxuICAgIHRoaXN0bGU6IFwiZDhiZmQ4XCIsXG4gICAgdG9tYXRvOiBcImZmNjM0N1wiLFxuICAgIHR1cnF1b2lzZTogXCI0MGUwZDBcIixcbiAgICB2aW9sZXQ6IFwiZWU4MmVlXCIsXG4gICAgd2hlYXQ6IFwiZjVkZWIzXCIsXG4gICAgd2hpdGU6IFwiZmZmXCIsXG4gICAgd2hpdGVzbW9rZTogXCJmNWY1ZjVcIixcbiAgICB5ZWxsb3c6IFwiZmYwXCIsXG4gICAgeWVsbG93Z3JlZW46IFwiOWFjZDMyXCJcbn07XG5cbi8vIE1ha2UgaXQgZWFzeSB0byBhY2Nlc3MgY29sb3JzIHZpYSBoZXhOYW1lc1toZXhdXG52YXIgaGV4TmFtZXMgPSB0aW55Y29sb3IuaGV4TmFtZXMgPSBmbGlwKG5hbWVzKTtcblxuLy8gVXRpbGl0aWVzXG4vLyAtLS0tLS0tLS1cblxuLy8geyAnbmFtZTEnOiAndmFsMScgfSBiZWNvbWVzIHsgJ3ZhbDEnOiAnbmFtZTEnIH1cbmZ1bmN0aW9uIGZsaXAobykge1xuICAgIHZhciBmbGlwcGVkID0geyB9O1xuICAgIGZvciAodmFyIGkgaW4gbykge1xuICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZmxpcHBlZFtvW2ldXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsaXBwZWQ7XG59XG5cbi8vIFJldHVybiBhIHZhbGlkIGFscGhhIHZhbHVlIFswLDFdIHdpdGggYWxsIGludmFsaWQgdmFsdWVzIGJlaW5nIHNldCB0byAxXG5mdW5jdGlvbiBib3VuZEFscGhhKGEpIHtcbiAgICBhID0gcGFyc2VGbG9hdChhKTtcblxuICAgIGlmIChpc05hTihhKSB8fCBhIDwgMCB8fCBhID4gMSkge1xuICAgICAgICBhID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLy8gVGFrZSBpbnB1dCBmcm9tIFswLCBuXSBhbmQgcmV0dXJuIGl0IGFzIFswLCAxXVxuZnVuY3Rpb24gYm91bmQwMShuLCBtYXgpIHtcbiAgICBpZiAoaXNPbmVQb2ludFplcm8obikpIHsgbiA9IFwiMTAwJVwiOyB9XG5cbiAgICB2YXIgcHJvY2Vzc1BlcmNlbnQgPSBpc1BlcmNlbnRhZ2Uobik7XG4gICAgbiA9IG1hdGhNaW4obWF4LCBtYXRoTWF4KDAsIHBhcnNlRmxvYXQobikpKTtcblxuICAgIC8vIEF1dG9tYXRpY2FsbHkgY29udmVydCBwZXJjZW50YWdlIGludG8gbnVtYmVyXG4gICAgaWYgKHByb2Nlc3NQZXJjZW50KSB7XG4gICAgICAgIG4gPSBwYXJzZUludChuICogbWF4LCAxMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9yc1xuICAgIGlmICgoTWF0aC5hYnMobiAtIG1heCkgPCAwLjAwMDAwMSkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBpbnRvIFswLCAxXSByYW5nZSBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgcmV0dXJuIChuICUgbWF4KSAvIHBhcnNlRmxvYXQobWF4KTtcbn1cblxuLy8gRm9yY2UgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXG5mdW5jdGlvbiBjbGFtcDAxKHZhbCkge1xuICAgIHJldHVybiBtYXRoTWluKDEsIG1hdGhNYXgoMCwgdmFsKSk7XG59XG5cbi8vIFBhcnNlIGEgYmFzZS0xNiBoZXggdmFsdWUgaW50byBhIGJhc2UtMTAgaW50ZWdlclxuZnVuY3Rpb24gcGFyc2VJbnRGcm9tSGV4KHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDE2KTtcbn1cblxuLy8gTmVlZCB0byBoYW5kbGUgMS4wIGFzIDEwMCUsIHNpbmNlIG9uY2UgaXQgaXMgYSBudW1iZXIsIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UgYmV0d2VlbiBpdCBhbmQgMVxuLy8gPGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzQyMjA3Mi9qYXZhc2NyaXB0LWhvdy10by1kZXRlY3QtbnVtYmVyLWFzLWEtZGVjaW1hbC1pbmNsdWRpbmctMS0wPlxuZnVuY3Rpb24gaXNPbmVQb2ludFplcm8obikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PSBcInN0cmluZ1wiICYmIG4uaW5kZXhPZignLicpICE9IC0xICYmIHBhcnNlRmxvYXQobikgPT09IDE7XG59XG5cbi8vIENoZWNrIHRvIHNlZSBpZiBzdHJpbmcgcGFzc2VkIGluIGlzIGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gaXNQZXJjZW50YWdlKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKCclJykgIT0gLTE7XG59XG5cbi8vIEZvcmNlIGEgaGV4IHZhbHVlIHRvIGhhdmUgMiBjaGFyYWN0ZXJzXG5mdW5jdGlvbiBwYWQyKGMpIHtcbiAgICByZXR1cm4gYy5sZW5ndGggPT0gMSA/ICcwJyArIGMgOiAnJyArIGM7XG59XG5cbi8vIFJlcGxhY2UgYSBkZWNpbWFsIHdpdGggaXQncyBwZXJjZW50YWdlIHZhbHVlXG5mdW5jdGlvbiBjb252ZXJ0VG9QZXJjZW50YWdlKG4pIHtcbiAgICBpZiAobiA8PSAxKSB7XG4gICAgICAgIG4gPSAobiAqIDEwMCkgKyBcIiVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbjtcbn1cblxuLy8gQ29udmVydHMgYSBkZWNpbWFsIHRvIGEgaGV4IHZhbHVlXG5mdW5jdGlvbiBjb252ZXJ0RGVjaW1hbFRvSGV4KGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGQpICogMjU1KS50b1N0cmluZygxNik7XG59XG4vLyBDb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIGRlY2ltYWxcbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb0RlY2ltYWwoaCkge1xuICAgIHJldHVybiAocGFyc2VJbnRGcm9tSGV4KGgpIC8gMjU1KTtcbn1cblxudmFyIG1hdGNoZXJzID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzLyNpbnRlZ2Vycz5cbiAgICB2YXIgQ1NTX0lOVEVHRVIgPSBcIlstXFxcXCtdP1xcXFxkKyU/XCI7XG5cbiAgICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI251bWJlci12YWx1ZT5cbiAgICB2YXIgQ1NTX05VTUJFUiA9IFwiWy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslP1wiO1xuXG4gICAgLy8gQWxsb3cgcG9zaXRpdmUvbmVnYXRpdmUgaW50ZWdlci9udW1iZXIuICBEb24ndCBjYXB0dXJlIHRoZSBlaXRoZXIvb3IsIGp1c3QgdGhlIGVudGlyZSBvdXRjb21lLlxuICAgIHZhciBDU1NfVU5JVCA9IFwiKD86XCIgKyBDU1NfTlVNQkVSICsgXCIpfCg/OlwiICsgQ1NTX0lOVEVHRVIgKyBcIilcIjtcblxuICAgIC8vIEFjdHVhbCBtYXRjaGluZy5cbiAgICAvLyBQYXJlbnRoZXNlcyBhbmQgY29tbWFzIGFyZSBvcHRpb25hbCwgYnV0IG5vdCByZXF1aXJlZC5cbiAgICAvLyBXaGl0ZXNwYWNlIGNhbiB0YWtlIHRoZSBwbGFjZSBvZiBjb21tYXMgb3Igb3BlbmluZyBwYXJlblxuICAgIHZhciBQRVJNSVNTSVZFX01BVENIMyA9IFwiW1xcXFxzfFxcXFwoXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVxcXFxzKlxcXFwpP1wiO1xuICAgIHZhciBQRVJNSVNTSVZFX01BVENINCA9IFwiW1xcXFxzfFxcXFwoXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVssfFxcXFxzXSsoXCIgKyBDU1NfVU5JVCArIFwiKVxcXFxzKlxcXFwpP1wiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ1NTX1VOSVQ6IG5ldyBSZWdFeHAoQ1NTX1VOSVQpLFxuICAgICAgICByZ2I6IG5ldyBSZWdFeHAoXCJyZ2JcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgcmdiYTogbmV3IFJlZ0V4cChcInJnYmFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaHNsOiBuZXcgUmVnRXhwKFwiaHNsXCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIGhzbGE6IG5ldyBSZWdFeHAoXCJoc2xhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhzdjogbmV3IFJlZ0V4cChcImhzdlwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICBoc3ZhOiBuZXcgUmVnRXhwKFwiaHN2YVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoZXgzOiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgIGhleDY6IC9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxcbiAgICAgICAgaGV4NDogL14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgaGV4ODogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkL1xuICAgIH07XG59KSgpO1xuXG4vLyBpc1ZhbGlkQ1NTVW5pdFxuLy8gVGFrZSBpbiBhIHNpbmdsZSBzdHJpbmcgLyBudW1iZXIgYW5kIGNoZWNrIHRvIHNlZSBpZiBpdCBsb29rcyBsaWtlIGEgQ1NTIHVuaXRcbi8vIChzZWUgbWF0Y2hlcnMgYWJvdmUgZm9yIGRlZmluaXRpb24pLlxuZnVuY3Rpb24gaXNWYWxpZENTU1VuaXQoY29sb3IpIHtcbiAgICByZXR1cm4gISFtYXRjaGVycy5DU1NfVU5JVC5leGVjKGNvbG9yKTtcbn1cblxuLy8gc3RyaW5nSW5wdXRUb09iamVjdFxuLy8gUGVybWlzc2l2ZSBzdHJpbmcgcGFyc2luZy4gIFRha2UgaW4gYSBudW1iZXIgb2YgZm9ybWF0cywgYW5kIG91dHB1dCBhbiBvYmplY3Rcbi8vIGJhc2VkIG9uIGRldGVjdGVkIGZvcm1hdC4gIFJldHVybnMgeyByLCBnLCBiIH0gb3IgeyBoLCBzLCBsIH0gb3IgeyBoLCBzLCB2fVxuZnVuY3Rpb24gc3RyaW5nSW5wdXRUb09iamVjdChjb2xvcikge1xuXG4gICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKHRyaW1MZWZ0LCAnJykucmVwbGFjZSh0cmltUmlnaHQsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBuYW1lZCA9IGZhbHNlO1xuICAgIGlmIChuYW1lc1tjb2xvcl0pIHtcbiAgICAgICAgY29sb3IgPSBuYW1lc1tjb2xvcl07XG4gICAgICAgIG5hbWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sb3IgPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICByZXR1cm4geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwLCBmb3JtYXQ6IFwibmFtZVwiIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIG1hdGNoIHN0cmluZyBpbnB1dCB1c2luZyByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgIC8vIEtlZXAgbW9zdCBvZiB0aGUgbnVtYmVyIGJvdW5kaW5nIG91dCBvZiB0aGlzIGZ1bmN0aW9uIC0gZG9uJ3Qgd29ycnkgYWJvdXQgWzAsMV0gb3IgWzAsMTAwXSBvciBbMCwzNjBdXG4gICAgLy8gSnVzdCByZXR1cm4gYW4gb2JqZWN0IGFuZCBsZXQgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25zIGhhbmRsZSB0aGF0LlxuICAgIC8vIFRoaXMgd2F5IHRoZSByZXN1bHQgd2lsbCBiZSB0aGUgc2FtZSB3aGV0aGVyIHRoZSB0aW55Y29sb3IgaXMgaW5pdGlhbGl6ZWQgd2l0aCBzdHJpbmcgb3Igb2JqZWN0LlxuICAgIHZhciBtYXRjaDtcbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMucmdiLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5yZ2JhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHNsLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc2xhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIGw6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHN2LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc3ZhLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4OC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDYuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg0LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgJycgKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyAnJyArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArICcnICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSArICcnICsgbWF0Y2hbNF0pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXg4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDMuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyAnJyArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArICcnICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgJycgKyBtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdDQUcyUGFybXMocGFybXMpIHtcbiAgICAvLyByZXR1cm4gdmFsaWQgV0NBRzIgcGFybXMgZm9yIGlzUmVhZGFibGUuXG4gICAgLy8gSWYgaW5wdXQgcGFybXMgYXJlIGludmFsaWQsIHJldHVybiB7XCJsZXZlbFwiOlwiQUFcIiwgXCJzaXplXCI6XCJzbWFsbFwifVxuICAgIHZhciBsZXZlbCwgc2l6ZTtcbiAgICBwYXJtcyA9IHBhcm1zIHx8IHtcImxldmVsXCI6XCJBQVwiLCBcInNpemVcIjpcInNtYWxsXCJ9O1xuICAgIGxldmVsID0gKHBhcm1zLmxldmVsIHx8IFwiQUFcIikudG9VcHBlckNhc2UoKTtcbiAgICBzaXplID0gKHBhcm1zLnNpemUgfHwgXCJzbWFsbFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsZXZlbCAhPT0gXCJBQVwiICYmIGxldmVsICE9PSBcIkFBQVwiKSB7XG4gICAgICAgIGxldmVsID0gXCJBQVwiO1xuICAgIH1cbiAgICBpZiAoc2l6ZSAhPT0gXCJzbWFsbFwiICYmIHNpemUgIT09IFwibGFyZ2VcIikge1xuICAgICAgICBzaXplID0gXCJzbWFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4ge1wibGV2ZWxcIjpsZXZlbCwgXCJzaXplXCI6c2l6ZX07XG59XG5cbnRoaXMudGlueWNvbG9yID0gdGlueWNvbG9yO1xuXG59KSgpYDtcbn1cbi8vIEl0IGlzIGhhY2t5IHdheSB0byBtYWtlIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjb21waWxlZCBwcmVmZXJlbnRpYWxseSBieSBsZXNzXG4vLyByZXNvbHZlIGVycm9yOiBgUmVmZXJlbmNlRXJyb3I6IGNvbG9yUGFsZXR0ZSBpcyBub3QgZGVmaW5lZGBcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1tb3Rpb24vaXNzdWVzLzQ0XG4udGlueUNvbG9yTWl4aW4oKTtcbiIsIkBpbXBvcnQgJy4uL3RoZW1lcy9pbmRleCc7XG5cbi5yZXNldC1jb21wb25lbnQoKSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IEB0ZXh0LWNvbG9yO1xuICBmb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbiAgZm9udC12YXJpYW50OiBAZm9udC12YXJpYW50LWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtYmFzZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBAZm9udC1mZWF0dXJlLXNldHRpbmdzLWJhc2U7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZS90aGVtZXMvaW5kZXgnO1xuQGltcG9ydCAnLi4vLi4vc3R5bGUvbWl4aW5zL2luZGV4JztcblxuQHJhdGUtcHJlZml4LWNsczogfidAe2FudC1wcmVmaXh9LXJhdGUnO1xuXG4uQHtyYXRlLXByZWZpeC1jbHN9IHtcbiAgLnJlc2V0LWNvbXBvbmVudDtcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IEByYXRlLXN0YXItY29sb3I7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICYtZGlzYWJsZWQgJi1zdGFyIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gICYtc3RhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgPiBkaXYge1xuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtZmlyc3QsXG4gICAgJi1zZWNvbmQge1xuICAgICAgY29sb3I6IEByYXRlLXN0YXItYmc7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLkB7aWNvbmZvbnQtY3NzLXByZWZpeH0ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtZmlyc3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLWhhbGYgJi1maXJzdCxcbiAgICAmLWhhbGYgJi1zZWNvbmQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmLWhhbGYgJi1maXJzdCxcbiAgICAmLWZ1bGwgJi1zZWNvbmQge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgJi10ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbiAgfVxufVxuXG5AaW1wb3J0ICcuL3J0bCc7XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZS90aGVtZXMvaW5kZXgnO1xuQGltcG9ydCAnLi4vLi4vc3R5bGUvbWl4aW5zL2luZGV4JztcblxuQHJhdGUtcHJlZml4LWNsczogfidAe2FudC1wcmVmaXh9LXJhdGUnO1xuXG4uQHtyYXRlLXByZWZpeC1jbHN9IHtcbiAgJi1ydGwge1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICB9XG5cbiAgJi1zdGFyIHtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgLkB7cmF0ZS1wcmVmaXgtY2xzfS1ydGwgJiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWZpcnN0IHtcbiAgICAgIC5Ae3JhdGUtcHJlZml4LWNsc30tcnRsICYge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLXRleHQge1xuICAgIC5Ae3JhdGUtcHJlZml4LWNsc30tcnRsICYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC92YXJpYWJsZXMvaW5kZXgubGVzcyc7XG5AaW1wb3J0ICcuL2FwcGxpY2F0aW9uLWNhcmQuY29tcG9uZW50LnRoZW1lLmxlc3MnO1xuQGltcG9ydCAnfm5nLXpvcnJvLWFudGQvcmF0ZS9zdHlsZS9pbmRleC5sZXNzJztcblxuLmFwcGxpY2F0aW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBAYXBwLWNhcmQtd2lkdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogQGFwcC1jYXJkLW1hcmdpbjtcblxuICAgIC5Ae2NhcmQtcHJlZml4LWNsc30tYm9keSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IEBhcHAtY2FyZC1taW4taGVpZ2h0O1xuICAgICAgICBwYWRkaW5nOiBAYXBwLWNhcmQtcGFkZGluZztcbiAgICB9XG5cbiAgICAuQHtjYXJkLXByZWZpeC1jbHN9LWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nOiAwIEBjYXJkLXBhZGRpbmctYmFzZTtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IEBhcHAtY2FyZC1sb2dvLWhlaWdodDtcbiAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtbG9nby1tYXJnaW47XG4gICAgfVxuXG4gICAgJl9fcGFydG5lci10eXBlIHtcbiAgICAgICAgZm9udC1zaXplOiBAYXBwLWNhcmQtcGFydG5lci10eXBlLWZvbnQtc2l6ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtbGc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtc2VtaS1ib2xkO1xuICAgICAgICBjb2xvcjogQGluaztcbiAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtdGl0bGUtbWFyZ2luO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1tZWRpdW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAYXBwLWNhcmQtZGVzY3JpcHRpb24tbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgJl9fY29ubmVjdGVkLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtY29ubmVjdGVkLWJhZGdlLW1hcmdpbjtcbiAgICB9XG5cbiAgICAmX19yYXRlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQGFwcC1jYXJkLXJhdGUtbWFyZ2luO1xuXG4gICAgICAgICYtdmFsdWUge1xuICAgICAgICAgICAgLkB7cmF0ZS1wcmVmaXgtY2xzfSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IEB5ZWxsb3c7XG5cbiAgICAgICAgICAgICAgICAmLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtcmF0ZS1zdGFycy1tYXJnaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvdW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQGFwcC1jYXJkLXJhdGUtY291bnQtbGluZS1oZWlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogQGFwcC1jYXJkLXJhdGUtY291bnQtbWFyZ2luLWxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"],
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-chips", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filtersItem_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", filtersItem_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filtersItem_r1.text, "\n");
      }
    }

    var FiltersComponent = function FiltersComponent() {
      _classCallCheck(this, FiltersComponent);
    };

    FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
      return new (t || FiltersComponent)();
    };

    FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FiltersComponent,
      selectors: [["app-filters"]],
      hostAttrs: [1, "app-filters"],
      inputs: {
        filterItems: "filterItems"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "app-filters__item", "maxWidth", "none", 4, "ngFor", "ngForOf"], ["maxWidth", "none", 1, "app-filters__item"], [1, "app-filters__item-icon", 3, "name"]],
      template: function FiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FiltersComponent_spy_chips_0_Template, 3, 2, "spy-chips", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_2__["ChipsComponent"], _spryker_icon__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n.app-filters__item.spy-chips {\n  padding: 13px 16px 11px 16px;\n  background-color: #fff;\n  color: #121212;\n  line-height: 22px;\n  margin: 0 19px 0 0;\n}\n.app-filters__item-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  font-size: 22px;\n  line-height: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC92YXJpYWJsZXMvZm9udHMubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2Uvbm9kZV9tb2R1bGVzL0BzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy9odG1sLXJlbmRlcmVyLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL2Zyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZDQ007QURBTixvQkFBb0I7QUFDcEI7O0VBRUU7QUVKRDtFQ01XLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBSENaO0FHRVE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FIQVoiLCJmaWxlIjoiZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgbWFwIHdpdGggdGhlIGxpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBnZW5lcmF0ZSBncmlkIHNlbGVjdG9ycyB3aXRoIGJyZWFrcG9pbnRzLlxuICovXG4uYXBwLWZpbHRlcnNfX2l0ZW0uc3B5LWNoaXBzIHtcbiAgcGFkZGluZzogMTNweCAxNnB4IDExcHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDAgMTlweCAwIDA7XG59XG4uYXBwLWZpbHRlcnNfX2l0ZW0taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbiIsIkBpbXBvcnQgKGNzcylcbiAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXAnKTtcblxuQGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJyxcbiAgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG5cbkB0ZXh0LWNvbG9yOiBAZ3JheS1kYXJrO1xuQHRleHQtY29sb3Itc2Vjb25kYXJ5OiBAaW5rO1xuQGhlYWRpbmctY29sb3I6IEBpbms7XG5cbkBmb250LXNpemUtbGc6IDE2cHg7XG5AZm9udC1zaXplLWJhc2U6IDE0cHg7XG5AZm9udC1zaXplLXNtOiAxMnB4O1xuXG5AaGVhZGluZy0xLWZvbnQtc2l6ZTogMzBweDtcbkBoZWFkaW5nLTItZm9udC1zaXplOiAyNnB4O1xuQGhlYWRpbmctMy1mb250LXNpemU6IDIwcHg7XG5AaGVhZGluZy00LWZvbnQtc2l6ZTogMThweDtcbkBoZWFkaW5nLTUtZm9udC1zaXplOiAxNnB4O1xuXG5AbGluZS1oZWlnaHQtYmFzZTogMS4zO1xuXG5AbGV0dGVyLXNwYWNpbmctYmFzZTogMC4wOHB4O1xuXG5AZm9udC13ZWlnaHQtZGVmYXVsdDogNDAwO1xuQGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xuQGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xuXG5AZm9udC1kZWZhdWx0OiBAZm9udC13ZWlnaHQtbWVkaXVtIEBmb250LXNpemUtYmFzZSAvIEBsaW5lLWhlaWdodC1iYXNlXG4gIEBmb250LWZhbWlseTtcblxuQGhlYWRpbmctMS1zaXplOiBAaGVhZGluZy0xLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTItc2l6ZTogQGhlYWRpbmctMi1mb250LXNpemU7XG5AaGVhZGluZy0zLXNpemU6IEBoZWFkaW5nLTMtZm9udC1zaXplO1xuQGhlYWRpbmctNC1zaXplOiBAaGVhZGluZy00LWZvbnQtc2l6ZTtcbiIsIkBodG1sLXJlbmRlcmVyLXByZWZpeC1jbHM6IH4nQHtzcHJ5a2VyLXByZWZpeH0taHRtbC1yZW5kZXJlcic7XG5cbkBodG1sLXJlbmRlcmVyLWxvYWRlci1oZWlnaHQ6IDQwcHg7XG4iLCJAaW1wb3J0ICd+QHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2luZGV4Lmxlc3MnO1xuQGltcG9ydCAnLi9maWx0ZXJzLmNvbXBvbmVudC50aGVtZS5sZXNzJztcblxuLmFwcC1maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgJi5Ae2NoaXBzLXByZWZpeC1jbHN9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IEBmaWx0ZXJzLWl0ZW0tcGFkZGluZztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiBAaW5rO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBmaWx0ZXJzLWl0ZW0tbGluZS1oZWlnaHQ7XG4gICAgICAgICAgICBtYXJnaW46IEBmaWx0ZXJzLWl0ZW0tbWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IEBmaWx0ZXJzLWl0ZW0taWNvbi1tYXJnaW47XG4gICAgICAgICAgICBmb250LXNpemU6IEBmaWx0ZXJzLWl0ZW0taWNvbi1mb250LXNpemU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQGZpbHRlcnMtaXRlbS1pY29uLWxpbmUtaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"],
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


    var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../types */
    "../frontend/app-store-catalog/src/page-catalog/types.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "../frontend/app-store-catalog/src/environments/environment.ts");
    /* harmony import */


    var _services_catalog_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/catalog-page.service */
    "../frontend/app-store-catalog/src/page-catalog/services/catalog-page.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
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

    function PageCatalogComponent_spy_chips_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-chips", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.applicationsCount$), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "HOME.APPLICATIONS_COUNT_TEXT"), " ");
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
      function PageCatalogComponent(apiService, translateService, catalogPageService) {
        var _this = this;

        _classCallCheck(this, PageCatalogComponent);

        this.apiService = apiService;
        this.translateService = translateService;
        this.catalogPageService = catalogPageService;
        this.isAppsLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this.apps$ = this.apiService.appsGet(this.translateService.currentLang, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].tenantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
          return _this.prepareCardData(res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
          return _this.isAppsLoading$.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
          bufferSize: 1,
          refCount: true
        }));
        this.applicationsCount$ = this.apps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (apps) {
          return apps.length;
        }));
        this.categoryOptions = [{
          title: 'All Categories',
          value: 0
        }, {
          title: 'BI Analytics',
          value: 1
        }, {
          title: 'Commerce',
          value: 2
        }, {
          title: 'Customer',
          value: 3
        }, {
          title: 'Data Integration',
          value: 4
        }, {
          title: 'Marketing',
          value: 5
        }, {
          title: 'Operational Cloud',
          value: 6
        }];
        this.selectedCategoryIndex = 0;
        this.navigationItems = this.categoryOptions.map(function (option) {
          return {
            title: option.title,
            url: '#',
            isActive: option.value === _this.selectedCategoryIndex
          };
        });
        this.filterItems$ = this.catalogPageService.getTopFilterItems();
      }

      _createClass(PageCatalogComponent, [{
        key: "prepareCardData",
        value: function prepareCardData(cardData) {
          var _this2 = this;

          return cardData.data.map(function (cardDataItem) {
            return {
              id: cardDataItem.attributes.id,
              logoUrl: cardDataItem.attributes.iconUrl,
              title: cardDataItem.attributes.name,
              description: cardDataItem.attributes.descriptionShort,
              status: _this2.prepareAppStatus(cardDataItem),
              tags: cardDataItem.attributes.categories,
              partnerType: Object(_types__WEBPACK_IMPORTED_MODULE_4__["randomPartnerType"])()
            };
          });
        }
      }, {
        key: "prepareAppStatus",
        value: function prepareAppStatus(app) {
          var localStorageItem = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].payoneStorageStatusKey);

          if (app.attributes.id === _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].payoneId && localStorageItem) {
            return localStorageItem;
          } else {
            return app.attributes.status;
          }
        }
      }]);

      return PageCatalogComponent;
    }();

    PageCatalogComponent.ɵfac = function PageCatalogComponent_Factory(t) {
      return new (t || PageCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_swagger__WEBPACK_IMPORTED_MODULE_1__["DefaultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalog_page_service__WEBPACK_IMPORTED_MODULE_6__["CatalogPageService"]));
    };

    PageCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageCatalogComponent,
      selectors: [["app-page-catalog"]],
      hostAttrs: [1, "page-catalog"],
      decls: 22,
      vars: 18,
      consts: [[1, "page-catalog__title"], [1, "page-catalog__filters", 3, "filterItems"], [1, "spy-row"], [1, "spy-col-pull", "spy-col-lg-hidden", "spy-col-md-hidden", "spy-col-sm-hidden"], [1, "page-catalog__navigation"], [3, "items"], [1, "spy-col"], [1, "spy-row", "spy-row-align-col-flex-end"], ["class", "page-catalog__applications-count", "color", "gray", 4, "ngIf"], [1, "spy-col-3", "spy-col-xl-hidden"], [3, "options", "value"], [3, "isSpinning"], [1, "page-catalog__list"], [1, "spy-row", "spy-row-gutter-lg", "spy-row-align-content-flex-end"], [4, "ngFor", "ngForOf"], ["color", "gray", 1, "page-catalog__applications-count"], ["class", "spy-col-4 spy-col-md-6 spy-col-sm-6 spy-col-gutter-lg", 4, "ngIf", "ngIfElse"], ["addBlockTmplRef", ""], [1, "spy-col-4", "spy-col-md-6", "spy-col-sm-6", "spy-col-gutter-lg"], [3, "app"], [1, "page-catalog__advertisement"], ["src", "/assets/img/ad1.png", "alt", "mapp", 1, "page-catalog__advertisement-image"]],
      template: function PageCatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-filters", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "spy-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "spy-navigation", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PageCatalogComponent_spy_chips_12_Template, 4, 6, "spy-chips", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "spy-select", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, "HOME.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx.filterItems$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navigationItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categoryOptions)("value", ctx.selectedCategoryIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSpinning", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, ctx.apps$));
        }
      },
      directives: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_8__["FiltersComponent"], _spryker_card__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComposerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _spryker_select__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_14__["ChipsComponent"], _app_card_application_card_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationCardComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n/**\n * Provides ie styles only.\n */\n/**\n * Provides transition property configured by the passed parameters.\n * @param {String} @props [opacity visibility]\n * @param {Number} @duration [@common-transition-time]\n * @param {String} @function [@common-transition-function]\n */\n/**\n * Provides custom loop for selectors.\n * @param {Number} @i\n * @param @rules Extends mixin with properties.\n */\n/**\n * Creates @breakpoint variable with 0 or the first value from the $edges list.\n * @param {List} @edges. List length must be less than or equal to 2.\n */\n/**\n * Sets screen media query with min-width set to @min parameter.\n * @param @min {Number} [0]\n * @param @rules Extends mixin with properties for media query.\n */\n/**\n * Sets screen media query with breakpoints range passed as parameters.\n * @param {Number} $min [0]\n * @param {Number} $max [null]\n * @param @rules Extends mixin with properties for media query.\n */\n.page-catalog__title {\n  font-size: 30px;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  font-weight: 600;\n  color: #121212;\n  margin: 40px 0;\n}\n.page-catalog__filters {\n  display: block;\n  margin: 0 0 12px 0;\n}\n@media only screen and (min-width: 1810px) {\n  .page-catalog__filters {\n    margin: 0 0 30px 0;\n  }\n}\n.page-catalog__list {\n  margin: 20px 0 0;\n}\n.page-catalog__advertisement {\n  overflow: hidden;\n  width: 370px;\n  height: 345px;\n  border-radius: 10px;\n}\n.page-catalog__advertisement-image {\n  width: 110%;\n}\n.page-catalog__navigation {\n  display: block;\n  width: 370px;\n  margin: 50px 30px 0 0;\n}\n@media only screen and (min-width: 1810px) and (max-width: 1919px) {\n  .page-catalog__navigation {\n    width: 280px;\n  }\n}\n.page-catalog__navigation .ant-card-body {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9wYWdlLWNhdGFsb2cvcGFnZS1jYXRhbG9nLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2ZvbnRzLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL2Zyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9wYWdlLWNhdGFsb2cvcGFnZS1jYXRhbG9nLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvbWl4aW5zL2JyZWFrcG9pbnQtbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZDQ007QURBTixvQkFBb0I7QUFDcEI7O0VBRUU7QUFDRjs7RUFFRTtBQUNGOzs7OztFQUtFO0FBQ0Y7Ozs7RUFJRTtBQUNGOzs7RUFHRTtBQUNGOzs7O0VBSUU7QUFDRjs7Ozs7RUFLRTtBRTNCRTtFQUNJLGVBQUE7RUFDQSxnTkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUY2QlI7QUUxQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUY0QlI7QUczQkU7RUFBQTtJRENVLGtCQUFBO0VGOEJWO0FBQ0Y7QUUzQkk7RUFDSSxnQkFBQTtBRjZCUjtBRTFCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRjRCUjtBRTNCUTtFQUNJLFdBQUE7QUY2Qlo7QUV6Qkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FGMkJSO0FHcENJO0VBQUE7SURXUSxZQUFBO0VGNkJWO0FBQ0Y7QUVuQ0k7RUFRUSxVQUFBO0FGOEJaIiwiZmlsZSI6ImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9wYWdlLWNhdGFsb2cvcGFnZS1jYXRhbG9nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuLyogcHJldHRpZXItaWdub3JlICovXG4vKipcbiAqIFJldHVybnMgYSBtYXAgd2l0aCB0aGUgbGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGdyaWQgc2VsZWN0b3JzIHdpdGggYnJlYWtwb2ludHMuXG4gKi9cbi8qKlxuICogUHJvdmlkZXMgaWUgc3R5bGVzIG9ubHkuXG4gKi9cbi8qKlxuICogUHJvdmlkZXMgdHJhbnNpdGlvbiBwcm9wZXJ0eSBjb25maWd1cmVkIGJ5IHRoZSBwYXNzZWQgcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBAcHJvcHMgW29wYWNpdHkgdmlzaWJpbGl0eV1cbiAqIEBwYXJhbSB7TnVtYmVyfSBAZHVyYXRpb24gW0Bjb21tb24tdHJhbnNpdGlvbi10aW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IEBmdW5jdGlvbiBbQGNvbW1vbi10cmFuc2l0aW9uLWZ1bmN0aW9uXVxuICovXG4vKipcbiAqIFByb3ZpZGVzIGN1c3RvbSBsb29wIGZvciBzZWxlY3RvcnMuXG4gKiBAcGFyYW0ge051bWJlcn0gQGlcbiAqIEBwYXJhbSBAcnVsZXMgRXh0ZW5kcyBtaXhpbiB3aXRoIHByb3BlcnRpZXMuXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBAYnJlYWtwb2ludCB2YXJpYWJsZSB3aXRoIDAgb3IgdGhlIGZpcnN0IHZhbHVlIGZyb20gdGhlICRlZGdlcyBsaXN0LlxuICogQHBhcmFtIHtMaXN0fSBAZWRnZXMuIExpc3QgbGVuZ3RoIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDIuXG4gKi9cbi8qKlxuICogU2V0cyBzY3JlZW4gbWVkaWEgcXVlcnkgd2l0aCBtaW4td2lkdGggc2V0IHRvIEBtaW4gcGFyYW1ldGVyLlxuICogQHBhcmFtIEBtaW4ge051bWJlcn0gWzBdXG4gKiBAcGFyYW0gQHJ1bGVzIEV4dGVuZHMgbWl4aW4gd2l0aCBwcm9wZXJ0aWVzIGZvciBtZWRpYSBxdWVyeS5cbiAqL1xuLyoqXG4gKiBTZXRzIHNjcmVlbiBtZWRpYSBxdWVyeSB3aXRoIGJyZWFrcG9pbnRzIHJhbmdlIHBhc3NlZCBhcyBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtOdW1iZXJ9ICRtaW4gWzBdXG4gKiBAcGFyYW0ge051bWJlcn0gJG1heCBbbnVsbF1cbiAqIEBwYXJhbSBAcnVsZXMgRXh0ZW5kcyBtaXhpbiB3aXRoIHByb3BlcnRpZXMgZm9yIG1lZGlhIHF1ZXJ5LlxuICovXG4ucGFnZS1jYXRhbG9nX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLnBhZ2UtY2F0YWxvZ19fZmlsdGVycyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MTBweCkge1xuICAucGFnZS1jYXRhbG9nX19maWx0ZXJzIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gIH1cbn1cbi5wYWdlLWNhdGFsb2dfX2xpc3Qge1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuLnBhZ2UtY2F0YWxvZ19fYWR2ZXJ0aXNlbWVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzNzBweDtcbiAgaGVpZ2h0OiAzNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wYWdlLWNhdGFsb2dfX2FkdmVydGlzZW1lbnQtaW1hZ2Uge1xuICB3aWR0aDogMTEwJTtcbn1cbi5wYWdlLWNhdGFsb2dfX25hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM3MHB4O1xuICBtYXJnaW46IDUwcHggMzBweCAwIDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MTBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAucGFnZS1jYXRhbG9nX19uYXZpZ2F0aW9uIHtcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbn1cbi5wYWdlLWNhdGFsb2dfX25hdmlnYXRpb24gLmFudC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiQGltcG9ydCAoY3NzKVxuICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuXG5AZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcblxuQHRleHQtY29sb3I6IEBncmF5LWRhcms7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnk6IEBpbms7XG5AaGVhZGluZy1jb2xvcjogQGluaztcblxuQGZvbnQtc2l6ZS1sZzogMTZweDtcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtc206IDEycHg7XG5cbkBoZWFkaW5nLTEtZm9udC1zaXplOiAzMHB4O1xuQGhlYWRpbmctMi1mb250LXNpemU6IDI2cHg7XG5AaGVhZGluZy0zLWZvbnQtc2l6ZTogMjBweDtcbkBoZWFkaW5nLTQtZm9udC1zaXplOiAxOHB4O1xuQGhlYWRpbmctNS1mb250LXNpemU6IDE2cHg7XG5cbkBsaW5lLWhlaWdodC1iYXNlOiAxLjM7XG5cbkBsZXR0ZXItc3BhY2luZy1iYXNlOiAwLjA4cHg7XG5cbkBmb250LXdlaWdodC1kZWZhdWx0OiA0MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG5AZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XG5cbkBmb250LWRlZmF1bHQ6IEBmb250LXdlaWdodC1tZWRpdW0gQGZvbnQtc2l6ZS1iYXNlIC8gQGxpbmUtaGVpZ2h0LWJhc2VcbiAgQGZvbnQtZmFtaWx5O1xuXG5AaGVhZGluZy0xLXNpemU6IEBoZWFkaW5nLTEtZm9udC1zaXplO1xuQGhlYWRpbmctMi1zaXplOiBAaGVhZGluZy0yLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTMtc2l6ZTogQGhlYWRpbmctMy1mb250LXNpemU7XG5AaGVhZGluZy00LXNpemU6IEBoZWFkaW5nLTQtZm9udC1zaXplO1xuIiwiQGltcG9ydCAnfkBzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy9pbmRleC5sZXNzJztcbkBpbXBvcnQgJ35Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC9taXhpbnMvaW5kZXgubGVzcyc7XG5AaW1wb3J0ICcuL3BhZ2UtY2F0YWxvZy5jb21wb25lbnQudGhlbWUubGVzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvYnJlYWtwb2ludHMubGVzcyc7XG5cbi5wYWdlLWNhdGFsb2cge1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiBAaGVhZGluZy0xLWZvbnQtc2l6ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1zZW1pLWJvbGQ7XG4gICAgICAgIGNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbiAgICAgICAgbWFyZ2luOiBAcGFnZS1jYXRhbG9nLXRpdGxlLW1hcmdpbjtcbiAgICB9XG5cbiAgICAmX19maWx0ZXJzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogQHBhZ2UtY2F0YWxvZy1maWx0ZXJzLW1hcmdpbjtcbiAgICAgICAgLmJyZWFrcG9pbnQtbWVkaWEtYmV0d2Vlbi1taXhpbihAY29udGFpbmVyLWJyZWFrcG9pbnRzW3hsLW1pbl0sIG51bGwsIHtcbiAgICAgICAgICAgIG1hcmdpbjogQHBhZ2UtY2F0YWxvZy1maWx0ZXJzLW1hcmdpbi14bDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICAgIG1hcmdpbjogQHBhZ2UtY2F0YWxvZy1saXN0LW1hcmdpbjtcbiAgICB9XG5cbiAgICAmX19hZHZlcnRpc2VtZW50IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IEBwYWdlLWNhdGFsb2ctYWR2ZXJ0aXNlbWVudC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiBAcGFnZS1jYXRhbG9nLWFkdmVydGlzZW1lbnQtaGVpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAcGFnZS1jYXRhbG9nLWFkdmVydGlzZW1lbnQtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgJi1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTEwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX25hdmlnYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IEBwYWdlLWNhdGFsb2ctbWFpbi1uYXZpZ2F0aW9uLXdpZHRoLXh4bDtcbiAgICAgICAgbWFyZ2luOiBAcGFnZS1jYXRhbG9nLW1haW4tbmF2aWdhdGlvbi1tYXJnaW47XG4gICAgICAgIC5icmVha3BvaW50LW1lZGlhLWJldHdlZW4tbWl4aW4oQGNvbnRhaW5lci1icmVha3BvaW50c1t4bC1taW5dLCBAY29udGFpbmVyLWJyZWFrcG9pbnRzW3hsLW1heF0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBAcGFnZS1jYXRhbG9nLW1haW4tbmF2aWdhdGlvbi13aWR0aC14bDtcbiAgICAgICAgfSk7XG4gICAgICAgIC5Ae2NhcmQtcHJlZml4LWNsc30tYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBAcGFnZS1jYXRhbG9nLW1haW4tbmF2aWdhdGlvbi1wYWRkaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVzIEBicmVha3BvaW50IHZhcmlhYmxlIHdpdGggMCBvciB0aGUgZmlyc3QgdmFsdWUgZnJvbSB0aGUgJGVkZ2VzIGxpc3QuXG4gKiBAcGFyYW0ge0xpc3R9IEBlZGdlcy4gTGlzdCBsZW5ndGggbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMi5cbiAqL1xuLmJyZWFrcG9pbnQtZWRnZS1taW4tbWl4aW4oQGVkZ2VzKSB7XG4gIEBicmVha3BvaW50LWVkZ2VzOiB7XG4gICAgbWluOiBpZihsZW5ndGgoQGVkZ2VzKSA+IDAsIGV4dHJhY3QoQGVkZ2VzLCAxKSwgMCk7XG4gICAgbWF4OiBpZihsZW5ndGgoQGVkZ2VzKSA+IDEsIGV4dHJhY3QoQGVkZ2VzLCAyKSwgbnVsbCk7XG4gIH07XG59XG5cbi8qKlxuICogU2V0cyBzY3JlZW4gbWVkaWEgcXVlcnkgd2l0aCBtaW4td2lkdGggc2V0IHRvIEBtaW4gcGFyYW1ldGVyLlxuICogQHBhcmFtIEBtaW4ge051bWJlcn0gWzBdXG4gKiBAcGFyYW0gQHJ1bGVzIEV4dGVuZHMgbWl4aW4gd2l0aCBwcm9wZXJ0aWVzIGZvciBtZWRpYSBxdWVyeS5cbiAqL1xuLmJyZWFrcG9pbnQtbWVkaWEtbWluLW1peGluKEBtaW46IDAsIEBydWxlcykge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IEBtaW4pIHtcbiAgICBAcnVsZXMoKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgc2NyZWVuIG1lZGlhIHF1ZXJ5IHdpdGggYnJlYWtwb2ludHMgcmFuZ2UgcGFzc2VkIGFzIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0ge051bWJlcn0gJG1pbiBbMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSAkbWF4IFtudWxsXVxuICogQHBhcmFtIEBydWxlcyBFeHRlbmRzIG1peGluIHdpdGggcHJvcGVydGllcyBmb3IgbWVkaWEgcXVlcnkuXG4gKi9cbi5icmVha3BvaW50LW1lZGlhLWJldHdlZW4tbWl4aW4oQG1pbjogMCwgQG1heDogbnVsbCwgQHJ1bGVzKSB7XG4gICYgd2hlbiBub3QgKEBtYXggPSBudWxsKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBAbWluKSBhbmQgKG1heC13aWR0aDogQG1heCkge1xuICAgICAgQHJ1bGVzKCk7XG4gICAgfVxuICB9XG4gICYgd2hlbiAoQG1heCA9IG51bGwpIHtcbiAgICAuYnJlYWtwb2ludC1tZWRpYS1taW4tbWl4aW4oQG1pbiwgQHJ1bGVzKTtcbiAgfVxufVxuIl19 */"],
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
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _services_catalog_page_service__WEBPACK_IMPORTED_MODULE_6__["CatalogPageService"]
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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(), _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconStarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageCatalogModule, {
        declarations: [_components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__["PageCatalogComponent"], _components_app_card_application_card_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationCardComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_17__["FiltersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconStarModule"]]
      });
    })();

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_page_catalog_page_catalog_component__WEBPACK_IMPORTED_MODULE_2__["PageCatalogComponent"], _components_app_card_application_card_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationCardComponent"], _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_17__["FiltersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _spryker_chips__WEBPACK_IMPORTED_MODULE_4__["ChipsModule"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _spryker_icon_icons__WEBPACK_IMPORTED_MODULE_7__["IconSuccessModule"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_9__["SpinnerModule"], _common_connected_badge_connected_badge_module__WEBPACK_IMPORTED_MODULE_10__["ConnectedBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild(), _spryker_navigation__WEBPACK_IMPORTED_MODULE_12__["NavigationModule"], _spryker_select__WEBPACK_IMPORTED_MODULE_13__["SelectModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconNewModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconPopularModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconSilverPartnerCircleModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconGoldPartnerCircleModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_15__["NzRateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _assets_icons__WEBPACK_IMPORTED_MODULE_14__["IconStarModule"]]
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

    var CatalogPageService = /*#__PURE__*/function () {
      function CatalogPageService(translateService) {
        _classCallCheck(this, CatalogPageService);

        this.translateService = translateService;
      }

      _createClass(CatalogPageService, [{
        key: "getTopFilterItems",
        value: function getTopFilterItems() {
          var filterIcons = [_assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconNewModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconPopularModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconGoldPartnerModule"].icon, _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconSilverPartnerModule"].icon];
          var filterTranslationsPrefix = 'HOME.FILTERS';
          var filterTranslationConstants = ['NEW', 'POPULAR', 'GOLD_PARTNER', 'SILVER_PARTNER'].map(function (translationConstant) {
            return "".concat(filterTranslationsPrefix, ".").concat(translationConstant);
          });
          return this.translateService.get(filterTranslationConstants).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (translatedTexts) {
            return filterTranslationConstants.map(function (translationConstant, index) {
              return {
                icon: filterIcons[index],
                text: translatedTexts[translationConstant]
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
  "../frontend/app-store-catalog/src/page-catalog/types.ts": function frontendAppStoreCatalogSrcPageCatalogTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnerType", function () {
      return PartnerType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "randomPartnerType", function () {
      return randomPartnerType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRandomRate", function () {
      return getRandomRate;
    });

    var PartnerType;

    (function (PartnerType) {
      PartnerType["None"] = "none";
      PartnerType["None"] = "none";
      PartnerType["None"] = "none";
    })(PartnerType || (PartnerType = {}));

    function randomPartnerType() {
      var keys = Object.keys(PartnerType).filter(function (k) {
        return !(Math.abs(Number.parseInt(k)) + 1);
      });
      var key = keys[Math.floor(Math.random() * keys.length)];
      return PartnerType[key];
    }

    var minRate = 3;
    var minRateCount = 12;

    function getRandomRate() {
      return {
        count: 0,
        value: 0
      };
    }
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
          var _this3 = this;

          event.stopPropagation();
          event.preventDefault();
          this.interceptorDispatcherService.dispatchToAll(NavigationRedirectInterceptionEvent).subscribe(function () {
            _this3.windowToken.location.href = url;
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
