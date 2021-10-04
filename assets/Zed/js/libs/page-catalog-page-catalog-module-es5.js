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


    var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/icons */
    "../frontend/app-store-catalog/src/assets/icons/index.ts");
    /* harmony import */


    var _swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../swagger */
    "../frontend/app-store-catalog/swagger/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var _spryker_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @spryker/icon */
    "../node_modules/@spryker/icon/__ivy_ngcc__/fesm2015/spryker-icon.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../common/connected-badge/connected-badge/connected-badge.component */
    "../frontend/app-store-catalog/src/common/connected-badge/connected-badge/connected-badge.component.ts");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");

    function ApplicationCardComponent_spy_card_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "spy-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.getPartnerTypeIcon());
      }
    }

    function ApplicationCardComponent_spy_card_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-rate", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.app.rate.value)("nzCharacter", _r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.app.rate.count);
      }
    }

    function ApplicationCardComponent_spy_card_0_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spy-icon", 17);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r6.starIcon);
      }
    }

    function ApplicationCardComponent_spy_card_0_app_status_badge_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-status-badge", 18);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r7.app.status);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ApplicationCardComponent_spy_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "spy-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationCardComponent_spy_card_0_Template_spy_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.navigateToDetails();
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationCardComponent_spy_card_0_div_9_Template, 4, 3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationCardComponent_spy_card_0_ng_template_10_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationCardComponent_spy_card_0_app_status_badge_12_Template, 1, 1, "app-status-badge", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("actions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r1));

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

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
        var tag_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r11, " ");
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
        this.starIcon = _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconStarModule"].icon;
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

          switch ((_a = this.app) === null || _a === void 0 ? void 0 : _a.partnerType) {
            case _swagger__WEBPACK_IMPORTED_MODULE_3__["PartnerType"].SilverPartner:
              return _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconSilverPartnerCircleModule"].icon;

            case _swagger__WEBPACK_IMPORTED_MODULE_3__["PartnerType"].GoldPartner:
              return _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconGoldPartnerCircleModule"].icon;

            case _swagger__WEBPACK_IMPORTED_MODULE_3__["PartnerType"].New:
              return _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconNewModule"].icon;

            case _swagger__WEBPACK_IMPORTED_MODULE_3__["PartnerType"].Popular:
              return _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IconPopularModule"].icon;
          }
        }
      }, {
        key: "getIsConnectionBadgeShown",
        value: function getIsConnectionBadgeShown() {
          return this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_3__["ConnectionStatus"].Disconnected && this.app.status !== _swagger__WEBPACK_IMPORTED_MODULE_3__["ConnectionStatus"].NotConnected;
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
      consts: [["hoverable", "", 3, "actions", "click", 4, "ngIf"], ["categories", ""], ["hoverable", "", 3, "actions", "click"], [1, "spy-row"], [1, "spy-col"], [1, "application-card__logo", 3, "src", "alt"], ["class", "spy-col-2 application-card__partner-type", 4, "ngIf"], [1, "application-card__title"], [1, "application-card__description"], ["class", "application-card__rate", 4, "ngIf"], ["characterRate", ""], ["class", "application-card__connected-badge", 3, "status", 4, "ngIf"], [1, "spy-col-2", "application-card__partner-type"], [1, "application-card__partner-type-icon", 3, "name"], [1, "application-card__rate"], ["nzDisabled", "", 1, "application-card__rate-value", 3, "ngModel", "nzCharacter"], [1, "application-card__rate-count"], [3, "name"], [1, "application-card__connected-badge", 3, "status"], ["color", "gray", "maxWidth", "none", 4, "ngFor", "ngForOf"], ["color", "gray", "maxWidth", "none"]],
      template: function ApplicationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationCardComponent_spy_card_0_Template, 13, 10, "spy-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationCardComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.app);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _spryker_card__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _spryker_icon__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzRateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _common_connected_badge_connected_badge_connected_badge_component__WEBPACK_IMPORTED_MODULE_9__["ConnectedBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_10__["ChipsComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-rate {\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #fadb14;\n  font-size: 20px;\n  line-height: unset;\n  list-style: none;\n  outline: none;\n}\n.ant-rate-disabled .ant-rate-star {\n  cursor: default;\n}\n.ant-rate-disabled .ant-rate-star:hover {\n  transform: scale(1);\n}\n.ant-rate-star {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-rate-star:not(:last-child) {\n  margin-right: 8px;\n}\n.ant-rate-star > div:focus {\n  outline: 0;\n}\n.ant-rate-star > div:hover,\n.ant-rate-star > div:focus {\n  transform: scale(1.1);\n}\n.ant-rate-star-first,\n.ant-rate-star-second {\n  color: #f0f0f0;\n  transition: all 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.ant-rate-star-first .anticon,\n.ant-rate-star-second .anticon {\n  vertical-align: middle;\n}\n.ant-rate-star-first {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-half .ant-rate-star-second {\n  opacity: 1;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-full .ant-rate-star-second {\n  color: inherit;\n}\n.ant-rate-text {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 14px;\n}\n.ant-rate-rtl {\n  direction: rtl;\n}\n.ant-rate-rtl .ant-rate-star:not(:last-child) {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.ant-rate-rtl .ant-rate-star-first {\n  right: 0;\n  left: auto;\n}\n.ant-rate-rtl .ant-rate-text {\n  margin-right: 8px;\n  margin-left: 0;\n}\n.application-card {\n  display: block;\n  width: 370px;\n}\n.application-card .ant-card-body {\n  min-height: 300px;\n  padding: 20px 30px;\n}\n.application-card .ant-card-actions {\n  padding: 0 24px;\n}\n.application-card .ant-card-actions li {\n  text-align: left;\n}\n.application-card__logo {\n  display: block;\n  height: 70px;\n  max-width: 140px;\n}\n.application-card__partner-type {\n  font-size: 40px;\n  text-align: right;\n}\n.application-card__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #121212;\n  margin: 15px 0 10px 0;\n}\n.application-card__description {\n  font-weight: 500;\n  line-height: 2.07438;\n}\n.application-card__connected-badge {\n  margin: 16px 0 0;\n}\n.application-card__rate {\n  margin-top: 8px 0 0;\n}\n.application-card__rate-value .ant-rate {\n  color: #fdaf1c;\n}\n.application-card__rate-value .ant-rate-star:not(:last-child) {\n  margin: 0;\n}\n.application-card__rate-count {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 21px;\n  margin-left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9hcHAtY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvQHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2ZvbnRzLmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3N0eWxlL2NvbG9yL3RpbnlDb2xvci5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9zdHlsZS9taXhpbnMvcmVzZXQubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2Uvbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvcmF0ZS9zdHlsZS9pbmRleC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9ub2RlX21vZHVsZXMvbmctem9ycm8tYW50ZC9yYXRlL3N0eWxlL3J0bC5sZXNzIiwiL1VzZXJzL3J1c3RlbXpha2lldi9QaHBzdG9ybVByb2plY3RzL3NwcnlrZXIvc3VpdGUtbm9uc3BsaXQvcmVnaXN0cnktc2VydmljZS9mcm9udGVuZC9hcHAtc3RvcmUtY2F0YWxvZy9zcmMvcGFnZS1jYXRhbG9nL2NvbXBvbmVudHMvYXBwLWNhcmQvYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkNDTTtBREFOLG9CQUFvQjtBQUNwQjs7RUFFRTtBQUNGLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBRVI1RjtFQ0dDLHNCQUFBO0VBR0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0VDSEEscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUpTRjtBSVBFO0VBQ0UsZUFBQTtBSlNKO0FJUkk7RUFDRSxtQkFBQTtBSlVOO0FJTkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FKUUo7QUlOSTtFQUNFLGlCQUFBO0FKUU47QUlKTTtFQUNFLFVBQUE7QUpNUjtBSUhNOztFQUVFLHFCQUFBO0FKS1I7QUlESTs7RUFFRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUpHTjtBSVBJOztFQU1JLHNCQUFBO0FKS1I7QUlESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBSkdOO0FJQUk7O0VBRUUsVUFBQTtBSkVOO0FJQ0k7O0VBRUUsY0FBQTtBSkNOO0FJR0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBSkRKO0FLM0VFO0VBQ0UsY0FBQTtBTDZFSjtBRXBGQztFR2FPLGVBQUE7RUFDQSxnQkFBQTtBTDBFUjtBRXhGQztFR29CTyxRQUFBO0VBQ0EsVUFBQTtBTHVFUjtBRTVGQztFRzRCSyxpQkFBQTtFQUNBLGNBQUE7QUxtRU47QU01RkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBTjhGSjtBTWhHQTtFQUtRLGlCQUFBO0VBQ0Esa0JBQUE7QU44RlI7QU1wR0E7RUFVUSxlQUFBO0FONkZSO0FNdkdBO0VBYVksZ0JBQUE7QU42Rlo7QU16Rkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FOMkZSO0FNeEZJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FOMEZSO0FNdkZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FOeUZSO0FNdEZJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBTndGUjtBTXJGSTtFQUNJLGdCQUFBO0FOdUZSO0FNcEZJO0VBQ0ksbUJBQUE7QU5zRlI7QU1wRlE7RUFFUSxjQUFBO0FOcUZoQjtBTWxGb0I7RUFDSSxTQUFBO0FOb0Z4QjtBTTlFUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FOZ0ZaIiwiZmlsZSI6ImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9hcHAtY2FyZC9hcHBsaWNhdGlvbi1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuLyogcHJldHRpZXItaWdub3JlICovXG4vKipcbiAqIFJldHVybnMgYSBtYXAgd2l0aCB0aGUgbGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGdyaWQgc2VsZWN0b3JzIHdpdGggYnJlYWtwb2ludHMuXG4gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbi5hbnQtcmF0ZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41NzE1O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmFkYjE0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hbnQtcmF0ZS1kaXNhYmxlZCAuYW50LXJhdGUtc3RhciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5hbnQtcmF0ZS1kaXNhYmxlZCAuYW50LXJhdGUtc3Rhcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uYW50LXJhdGUtc3RhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmFudC1yYXRlLXN0YXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmFudC1yYXRlLXN0YXIgPiBkaXY6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmFudC1yYXRlLXN0YXIgPiBkaXY6aG92ZXIsXG4uYW50LXJhdGUtc3RhciA+IGRpdjpmb2N1cyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5hbnQtcmF0ZS1zdGFyLWZpcnN0LFxuLmFudC1yYXRlLXN0YXItc2Vjb25kIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5hbnQtcmF0ZS1zdGFyLWZpcnN0IC5hbnRpY29uLFxuLmFudC1yYXRlLXN0YXItc2Vjb25kIC5hbnRpY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5hbnQtcmF0ZS1zdGFyLWZpcnN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbi5hbnQtcmF0ZS1zdGFyLWhhbGYgLmFudC1yYXRlLXN0YXItZmlyc3QsXG4uYW50LXJhdGUtc3Rhci1oYWxmIC5hbnQtcmF0ZS1zdGFyLXNlY29uZCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYW50LXJhdGUtc3Rhci1oYWxmIC5hbnQtcmF0ZS1zdGFyLWZpcnN0LFxuLmFudC1yYXRlLXN0YXItZnVsbCAuYW50LXJhdGUtc3Rhci1zZWNvbmQge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5hbnQtcmF0ZS10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYW50LXJhdGUtcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG4uYW50LXJhdGUtcnRsIC5hbnQtcmF0ZS1zdGFyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uYW50LXJhdGUtcnRsIC5hbnQtcmF0ZS1zdGFyLWZpcnN0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4uYW50LXJhdGUtcnRsIC5hbnQtcmF0ZS10ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmFwcGxpY2F0aW9uLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM3MHB4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmQgLmFudC1jYXJkLWJvZHkge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmQgLmFudC1jYXJkLWFjdGlvbnMge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG4uYXBwbGljYXRpb24tY2FyZCAuYW50LWNhcmQtYWN0aW9ucyBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcGFydG5lci10eXBlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxMjEyMTI7XG4gIG1hcmdpbjogMTVweCAwIDEwcHggMDtcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjA3NDM4O1xufVxuLmFwcGxpY2F0aW9uLWNhcmRfX2Nvbm5lY3RlZC1iYWRnZSB7XG4gIG1hcmdpbjogMTZweCAwIDA7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcmF0ZSB7XG4gIG1hcmdpbi10b3A6IDhweCAwIDA7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcmF0ZS12YWx1ZSAuYW50LXJhdGUge1xuICBjb2xvcjogI2ZkYWYxYztcbn1cbi5hcHBsaWNhdGlvbi1jYXJkX19yYXRlLXZhbHVlIC5hbnQtcmF0ZS1zdGFyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDA7XG59XG4uYXBwbGljYXRpb24tY2FyZF9fcmF0ZS1jb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4iLCJAaW1wb3J0IChjc3MpXG4gIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG5cbkBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsXG4gIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLFxuICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuXG5AdGV4dC1jb2xvcjogQGdyYXktZGFyaztcbkB0ZXh0LWNvbG9yLXNlY29uZGFyeTogQGluaztcbkBoZWFkaW5nLWNvbG9yOiBAaW5rO1xuXG5AZm9udC1zaXplLWxnOiAxNnB4O1xuQGZvbnQtc2l6ZS1iYXNlOiAxNHB4O1xuQGZvbnQtc2l6ZS1zbTogMTJweDtcblxuQGhlYWRpbmctMS1mb250LXNpemU6IDMwcHg7XG5AaGVhZGluZy0yLWZvbnQtc2l6ZTogMjZweDtcbkBoZWFkaW5nLTMtZm9udC1zaXplOiAyMHB4O1xuQGhlYWRpbmctNC1mb250LXNpemU6IDE4cHg7XG5AaGVhZGluZy01LWZvbnQtc2l6ZTogMTZweDtcblxuQGxpbmUtaGVpZ2h0LWJhc2U6IDEuMztcblxuQGxldHRlci1zcGFjaW5nLWJhc2U6IDAuMDhweDtcblxuQGZvbnQtd2VpZ2h0LWRlZmF1bHQ6IDQwMDtcbkBmb250LXdlaWdodC1tZWRpdW06IDUwMDtcbkBmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcblxuQGZvbnQtZGVmYXVsdDogQGZvbnQtd2VpZ2h0LW1lZGl1bSBAZm9udC1zaXplLWJhc2UgLyBAbGluZS1oZWlnaHQtYmFzZVxuICBAZm9udC1mYW1pbHk7XG5cbkBoZWFkaW5nLTEtc2l6ZTogQGhlYWRpbmctMS1mb250LXNpemU7XG5AaGVhZGluZy0yLXNpemU6IEBoZWFkaW5nLTItZm9udC1zaXplO1xuQGhlYWRpbmctMy1zaXplOiBAaGVhZGluZy0zLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTQtc2l6ZTogQGhlYWRpbmctNC1mb250LXNpemU7XG4iLCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG4udGlueUNvbG9yTWl4aW4oKSB7XG5AZnVuY3Rpb25zOiB+YChmdW5jdGlvbigpIHtcbi8vIFRpbnlDb2xvciB2MS40LjFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZ3JpbnMvVGlueUNvbG9yXG4vLyAyMDE2LTA3LTA3LCBCcmlhbiBHcmluc3RlYWQsIE1JVCBMaWNlbnNlXG52YXIgdHJpbUxlZnQgPSAvXlxccysvLFxuICAgIHRyaW1SaWdodCA9IC9cXHMrJC8sXG4gICAgdGlueUNvdW50ZXIgPSAwLFxuICAgIG1hdGhSb3VuZCA9IE1hdGgucm91bmQsXG4gICAgbWF0aE1pbiA9IE1hdGgubWluLFxuICAgIG1hdGhNYXggPSBNYXRoLm1heCxcbiAgICBtYXRoUmFuZG9tID0gTWF0aC5yYW5kb207XG5cbmZ1bmN0aW9uIHRpbnljb2xvciAoY29sb3IsIG9wdHMpIHtcblxuICAgIGNvbG9yID0gKGNvbG9yKSA/IGNvbG9yIDogJyc7XG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgLy8gSWYgaW5wdXQgaXMgYWxyZWFkeSBhIHRpbnljb2xvciwgcmV0dXJuIGl0c2VsZlxuICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIHRpbnljb2xvcikge1xuICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBjYWxsIHVzaW5nIG5ldyBpbnN0ZWFkXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIHRpbnljb2xvcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW55Y29sb3IoY29sb3IsIG9wdHMpO1xuICAgIH1cblxuICAgIHZhciByZ2IgPSBpbnB1dFRvUkdCKGNvbG9yKTtcbiAgICB0aGlzLl9vcmlnaW5hbElucHV0ID0gY29sb3IsXG4gICAgdGhpcy5fciA9IHJnYi5yLFxuICAgIHRoaXMuX2cgPSByZ2IuZyxcbiAgICB0aGlzLl9iID0gcmdiLmIsXG4gICAgdGhpcy5fYSA9IHJnYi5hLFxuICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDAsXG4gICAgdGhpcy5fZm9ybWF0ID0gb3B0cy5mb3JtYXQgfHwgcmdiLmZvcm1hdDtcbiAgICB0aGlzLl9ncmFkaWVudFR5cGUgPSBvcHRzLmdyYWRpZW50VHlwZTtcblxuICAgIC8vIERvbid0IGxldCB0aGUgcmFuZ2Ugb2YgWzAsMjU1XSBjb21lIGJhY2sgaW4gWzAsMV0uXG4gICAgLy8gUG90ZW50aWFsbHkgbG9zZSBhIGxpdHRsZSBiaXQgb2YgcHJlY2lzaW9uIGhlcmUsIGJ1dCB3aWxsIGZpeCBpc3N1ZXMgd2hlcmVcbiAgICAvLyAuNSBnZXRzIGludGVycHJldGVkIGFzIGhhbGYgb2YgdGhlIHRvdGFsLCBpbnN0ZWFkIG9mIGhhbGYgb2YgMVxuICAgIC8vIElmIGl0IHdhcyBzdXBwb3NlZCB0byBiZSAxMjgsIHRoaXMgd2FzIGFscmVhZHkgdGFrZW4gY2FyZSBvZiBieSBpbnB1dFRvUmdiXG4gICAgaWYgKHRoaXMuX3IgPCAxKSB7IHRoaXMuX3IgPSBtYXRoUm91bmQodGhpcy5fcik7IH1cbiAgICBpZiAodGhpcy5fZyA8IDEpIHsgdGhpcy5fZyA9IG1hdGhSb3VuZCh0aGlzLl9nKTsgfVxuICAgIGlmICh0aGlzLl9iIDwgMSkgeyB0aGlzLl9iID0gbWF0aFJvdW5kKHRoaXMuX2IpOyB9XG5cbiAgICB0aGlzLl9vayA9IHJnYi5vaztcbiAgICB0aGlzLl90Y19pZCA9IHRpbnlDb3VudGVyKys7XG59XG5cbnRpbnljb2xvci5wcm90b3R5cGUgPSB7XG4gICAgaXNEYXJrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpIDwgMTI4O1xuICAgIH0sXG4gICAgaXNMaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0RhcmsoKTtcbiAgICB9LFxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2s7XG4gICAgfSxcbiAgICBnZXRPcmlnaW5hbElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcmlnaW5hbElucHV0O1xuICAgIH0sXG4gICAgZ2V0Rm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgICB9LFxuICAgIGdldEFscGhhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2E7XG4gICAgfSxcbiAgICBnZXRCcmlnaHRuZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi9BRVJUI2NvbG9yLWNvbnRyYXN0XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHJldHVybiAocmdiLnIgKiAyOTkgKyByZ2IuZyAqIDU4NyArIHJnYi5iICogMTE0KSAvIDEwMDA7XG4gICAgfSxcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIFJzUkdCLCBHc1JHQiwgQnNSR0IsIFIsIEcsIEI7XG4gICAgICAgIFJzUkdCID0gcmdiLnIvMjU1O1xuICAgICAgICBHc1JHQiA9IHJnYi5nLzI1NTtcbiAgICAgICAgQnNSR0IgPSByZ2IuYi8yNTU7XG5cbiAgICAgICAgaWYgKFJzUkdCIDw9IDAuMDM5MjgpIHtSID0gUnNSR0IgLyAxMi45Mjt9IGVsc2Uge1IgPSBNYXRoLnBvdygoKFJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEdzUkdCIDw9IDAuMDM5MjgpIHtHID0gR3NSR0IgLyAxMi45Mjt9IGVsc2Uge0cgPSBNYXRoLnBvdygoKEdzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEJzUkdCIDw9IDAuMDM5MjgpIHtCID0gQnNSR0IgLyAxMi45Mjt9IGVsc2Uge0IgPSBNYXRoLnBvdygoKEJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiBSKSArICgwLjcxNTIgKiBHKSArICgwLjA3MjIgKiBCKTtcbiAgICB9LFxuICAgIHNldEFscGhhOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hID0gYm91bmRBbHBoYSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdG9Ic3Y6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzdi5oICogMzYwLCBzOiBoc3YucywgdjogaHN2LnYsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvSHN2U3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICB2YXIgaCA9IG1hdGhSb3VuZChoc3YuaCAqIDM2MCksIHMgPSBtYXRoUm91bmQoaHN2LnMgKiAxMDApLCB2ID0gbWF0aFJvdW5kKGhzdi52ICogMTAwKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcImhzdihcIiAgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlKVwiIDpcbiAgICAgICAgICBcImhzdmEoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlLCBcIisgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b0hzbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHNsLmggKiAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9Ic2xTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHZhciBoID0gbWF0aFJvdW5kKGhzbC5oICogMzYwKSwgcyA9IG1hdGhSb3VuZChoc2wucyAqIDEwMCksIGwgPSBtYXRoUm91bmQoaHNsLmwgKiAxMDApO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwiaHNsKFwiICArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUpXCIgOlxuICAgICAgICAgIFwiaHNsYShcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUsIFwiKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvSGV4OiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCBhbGxvdzNDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4U3RyaW5nOiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4KGFsbG93M0NoYXIpO1xuICAgIH0sXG4gICAgdG9IZXg4OiBmdW5jdGlvbihhbGxvdzRDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JhVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSwgYWxsb3c0Q2hhcik7XG4gICAgfSxcbiAgICB0b0hleDhTdHJpbmc6IGZ1bmN0aW9uKGFsbG93NENoYXIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXg4KGFsbG93NENoYXIpO1xuICAgIH0sXG4gICAgdG9SZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRoUm91bmQodGhpcy5fciksIGc6IG1hdGhSb3VuZCh0aGlzLl9nKSwgYjogbWF0aFJvdW5kKHRoaXMuX2IpLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b1JnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJyZ2IoXCIgICsgbWF0aFJvdW5kKHRoaXMuX3IpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2IpICsgXCIpXCIgOlxuICAgICAgICAgIFwicmdiYShcIiArIG1hdGhSb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9nKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9iKSArIFwiLCBcIiArIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgZzogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcInJnYihcIiAgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSlcIiA6XG4gICAgICAgICAgXCJyZ2JhKFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b05hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhleE5hbWVzW3JnYlRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRydWUpXSB8fCBmYWxzZTtcbiAgICB9LFxuICAgIHRvRmlsdGVyOiBmdW5jdGlvbihzZWNvbmRDb2xvcikge1xuICAgICAgICB2YXIgaGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSk7XG4gICAgICAgIHZhciBzZWNvbmRIZXg4U3RyaW5nID0gaGV4OFN0cmluZztcbiAgICAgICAgdmFyIGdyYWRpZW50VHlwZSA9IHRoaXMuX2dyYWRpZW50VHlwZSA/IFwiR3JhZGllbnRUeXBlID0gMSwgXCIgOiBcIlwiO1xuXG4gICAgICAgIGlmIChzZWNvbmRDb2xvcikge1xuICAgICAgICAgICAgdmFyIHMgPSB0aW55Y29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgICAgICAgICAgc2Vjb25kSGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgocy5fciwgcy5fZywgcy5fYiwgcy5fYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrZ3JhZGllbnRUeXBlK1wic3RhcnRDb2xvcnN0cj1cIitoZXg4U3RyaW5nK1wiLGVuZENvbG9yc3RyPVwiK3NlY29uZEhleDhTdHJpbmcrXCIpXCI7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIHZhciBmb3JtYXRTZXQgPSAhIWZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuX2Zvcm1hdDtcblxuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBbHBoYSA9IHRoaXMuX2EgPCAxICYmIHRoaXMuX2EgPj0gMDtcbiAgICAgICAgdmFyIG5lZWRzQWxwaGFGb3JtYXQgPSAhZm9ybWF0U2V0ICYmIGhhc0FscGhhICYmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIiB8fCBmb3JtYXQgPT09IFwiaGV4M1wiIHx8IGZvcm1hdCA9PT0gXCJoZXg0XCIgfHwgZm9ybWF0ID09PSBcImhleDhcIiB8fCBmb3JtYXQgPT09IFwibmFtZVwiKTtcblxuICAgICAgICBpZiAobmVlZHNBbHBoYUZvcm1hdCkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBcInRyYW5zcGFyZW50XCIsIGFsbCBvdGhlciBub24tYWxwaGEgZm9ybWF0c1xuICAgICAgICAgICAgLy8gd2lsbCByZXR1cm4gcmdiYSB3aGVuIHRoZXJlIGlzIHRyYW5zcGFyZW5jeS5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IFwibmFtZVwiICYmIHRoaXMuX2EgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b05hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJyZ2JcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicHJnYlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4M1wiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4NFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDhcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b05hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhzbFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHNsU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoc3ZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzdlN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFN0cmluZyB8fCB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aW55Y29sb3IodGhpcy50b1N0cmluZygpKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5TW9kaWZpY2F0aW9uOiBmdW5jdGlvbihmbiwgYXJncykge1xuICAgICAgICB2YXIgY29sb3IgPSBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICAgICAgdGhpcy5fciA9IGNvbG9yLl9yO1xuICAgICAgICB0aGlzLl9nID0gY29sb3IuX2c7XG4gICAgICAgIHRoaXMuX2IgPSBjb2xvci5fYjtcbiAgICAgICAgdGhpcy5zZXRBbHBoYShjb2xvci5fYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgbGlnaHRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihsaWdodGVuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgYnJpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oYnJpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBkYXJrZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZGFya2VuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZGVzYXR1cmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkZXNhdHVyYXRlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2F0dXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBncmV5c2NhbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZ3JleXNjYWxlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc3BpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihzcGluLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlDb21iaW5hdGlvbjogZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgIH0sXG4gICAgYW5hbG9nb3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oYW5hbG9nb3VzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgY29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGNvbXBsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtb25vY2hyb21hdGljOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24obW9ub2Nocm9tYXRpYywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNwbGl0Y29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHNwbGl0Y29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHRyaWFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odHJpYWQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICB0ZXRyYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih0ZXRyYWQsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcblxuLy8gSWYgaW5wdXQgaXMgYW4gb2JqZWN0LCBmb3JjZSAxIGludG8gXCIxLjBcIiB0byBoYW5kbGUgcmF0aW9zIHByb3Blcmx5XG4vLyBTdHJpbmcgaW5wdXQgcmVxdWlyZXMgXCIxLjBcIiBhcyBpbnB1dCwgc28gMSB3aWxsIGJlIHRyZWF0ZWQgYXMgMVxudGlueWNvbG9yLmZyb21SYXRpbyA9IGZ1bmN0aW9uKGNvbG9yLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBuZXdDb2xvciA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpIGluIGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb2xvcltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvciwgb3B0cyk7XG59O1xuXG4vLyBHaXZlbiBhIHN0cmluZyBvciBvYmplY3QsIGNvbnZlcnQgdGhhdCBpbnB1dCB0byBSR0Jcbi8vIFBvc3NpYmxlIHN0cmluZyBpbnB1dHM6XG4vL1xuLy8gICAgIFwicmVkXCJcbi8vICAgICBcIiNmMDBcIiBvciBcImYwMFwiXG4vLyAgICAgXCIjZmYwMDAwXCIgb3IgXCJmZjAwMDBcIlxuLy8gICAgIFwiI2ZmMDAwMDAwXCIgb3IgXCJmZjAwMDAwMFwiXG4vLyAgICAgXCJyZ2IgMjU1IDAgMFwiIG9yIFwicmdiICgyNTUsIDAsIDApXCJcbi8vICAgICBcInJnYiAxLjAgMCAwXCIgb3IgXCJyZ2IgKDEsIDAsIDApXCJcbi8vICAgICBcInJnYmEgKDI1NSwgMCwgMCwgMSlcIiBvciBcInJnYmEgMjU1LCAwLCAwLCAxXCJcbi8vICAgICBcInJnYmEgKDEuMCwgMCwgMCwgMSlcIiBvciBcInJnYmEgMS4wLCAwLCAwLCAxXCJcbi8vICAgICBcImhzbCgwLCAxMDAlLCA1MCUpXCIgb3IgXCJoc2wgMCAxMDAlIDUwJVwiXG4vLyAgICAgXCJoc2xhKDAsIDEwMCUsIDUwJSwgMSlcIiBvciBcImhzbGEgMCAxMDAlIDUwJSwgMVwiXG4vLyAgICAgXCJoc3YoMCwgMTAwJSwgMTAwJSlcIiBvciBcImhzdiAwIDEwMCUgMTAwJVwiXG4vL1xuZnVuY3Rpb24gaW5wdXRUb1JHQihjb2xvcikge1xuXG4gICAgdmFyIHJnYiA9IHsgcjogMCwgZzogMCwgYjogMCB9O1xuICAgIHZhciBhID0gMTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIHYgPSBudWxsO1xuICAgIHZhciBsID0gbnVsbDtcbiAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICB2YXIgZm9ybWF0ID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29sb3IgPSBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLnIpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmcpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmIpKSB7XG4gICAgICAgICAgICByZ2IgPSByZ2JUb1JnYihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFN0cmluZyhjb2xvci5yKS5zdWJzdHIoLTEpID09PSBcIiVcIiA/IFwicHJnYlwiIDogXCJyZ2JcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci52KSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICB2ID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci52KTtcbiAgICAgICAgICAgIHJnYiA9IGhzdlRvUmdiKGNvbG9yLmgsIHMsIHYpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc3ZcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5sKSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICBsID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5sKTtcbiAgICAgICAgICAgIHJnYiA9IGhzbFRvUmdiKGNvbG9yLmgsIHMsIGwpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc2xcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xvci5oYXNPd25Qcm9wZXJ0eShcImFcIikpIHtcbiAgICAgICAgICAgIGEgPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYSA9IGJvdW5kQWxwaGEoYSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvazogb2ssXG4gICAgICAgIGZvcm1hdDogY29sb3IuZm9ybWF0IHx8IGZvcm1hdCxcbiAgICAgICAgcjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLnIsIDApKSxcbiAgICAgICAgZzogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmcsIDApKSxcbiAgICAgICAgYjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmIsIDApKSxcbiAgICAgICAgYTogYVxuICAgIH07XG59XG5cbi8vIENvbnZlcnNpb24gRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyByZ2JUb0hzbCwgcmdiVG9Ic3YsIGhzbFRvUmdiLCBoc3ZUb1JnYiBtb2RpZmllZCBmcm9tOlxuLy8gPGh0dHA6Ly9tamlqYWNrc29uLmNvbS8yMDA4LzAyL3JnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY29udmVyc2lvbi1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQ+XG5cbi8vIHJnYlRvUmdiXG4vLyBIYW5kbGUgYm91bmRzIC8gcGVyY2VudGFnZSBjaGVja2luZyB0byBjb25mb3JtIHRvIENTUyBjb2xvciBzcGVjXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8+XG4vLyAqQXNzdW1lczoqIHIsIGcsIGIgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIFswLCAyNTVdXG5mdW5jdGlvbiByZ2JUb1JnYihyLCBnLCBiKXtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBib3VuZDAxKHIsIDI1NSkgKiAyNTUsXG4gICAgICAgIGc6IGJvdW5kMDEoZywgMjU1KSAqIDI1NSxcbiAgICAgICAgYjogYm91bmQwMShiLCAyNTUpICogMjU1XG4gICAgfTtcbn1cblxuLy8gcmdiVG9Ic2xcbi8vIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU0wuXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgaCwgcywgbCB9IGluIFswLDFdXG5mdW5jdGlvbiByZ2JUb0hzbChyLCBnLCBiKSB7XG5cbiAgICByID0gYm91bmQwMShyLCAyNTUpO1xuICAgIGcgPSBib3VuZDAxKGcsIDI1NSk7XG4gICAgYiA9IGJvdW5kMDEoYiwgMjU1KTtcblxuICAgIHZhciBtYXggPSBtYXRoTWF4KHIsIGcsIGIpLCBtaW4gPSBtYXRoTWluKHIsIGcsIGIpO1xuICAgIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYobWF4ID09IG1pbikge1xuICAgICAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgIHN3aXRjaChtYXgpIHtcbiAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cblxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIGw6IGwgfTtcbn1cblxuLy8gaHNsVG9SZ2Jcbi8vIENvbnZlcnRzIGFuIEhTTCBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgbCBhcmUgY29udGFpbmVkIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG5mdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gICAgdmFyIHIsIGcsIGI7XG5cbiAgICBoID0gYm91bmQwMShoLCAzNjApO1xuICAgIHMgPSBib3VuZDAxKHMsIDEwMCk7XG4gICAgbCA9IGJvdW5kMDEobCwgMTAwKTtcblxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgICAgICBpZih0IDwgMCkgdCArPSAxO1xuICAgICAgICBpZih0ID4gMSkgdCAtPSAxO1xuICAgICAgICBpZih0IDwgMS82KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICAgICAgaWYodCA8IDEvMikgcmV0dXJuIHE7XG4gICAgICAgIGlmKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIGlmKHMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG5cbi8vIHJnYlRvSHN2XG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNWXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCB2IH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHN2KHIsIGcsIGIpIHtcblxuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuXG4gICAgdmFyIG1heCA9IG1hdGhNYXgociwgZywgYiksIG1pbiA9IG1hdGhNaW4ociwgZywgYik7XG4gICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZihtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgfVxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIHY6IHYgfTtcbn1cblxuLy8gaHN2VG9SZ2Jcbi8vIENvbnZlcnRzIGFuIEhTViBjb2xvciB2YWx1ZSB0byBSR0IuXG4vLyAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgdiBhcmUgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMTAwXVxuLy8gKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG4gZnVuY3Rpb24gaHN2VG9SZ2IoaCwgcywgdikge1xuXG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKSAqIDY7XG4gICAgcyA9IGJvdW5kMDEocywgMTAwKTtcbiAgICB2ID0gYm91bmQwMSh2LCAxMDApO1xuXG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKGgpLFxuICAgICAgICBmID0gaCAtIGksXG4gICAgICAgIHAgPSB2ICogKDEgLSBzKSxcbiAgICAgICAgcSA9IHYgKiAoMSAtIGYgKiBzKSxcbiAgICAgICAgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKSxcbiAgICAgICAgbW9kID0gaSAlIDYsXG4gICAgICAgIHIgPSBbdiwgcSwgcCwgcCwgdCwgdl1bbW9kXSxcbiAgICAgICAgZyA9IFt0LCB2LCB2LCBxLCBwLCBwXVttb2RdLFxuICAgICAgICBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF07XG5cbiAgICByZXR1cm4geyByOiByICogMjU1LCBnOiBnICogMjU1LCBiOiBiICogMjU1IH07XG59XG5cbi8vIHJnYlRvSGV4XG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XVxuLy8gUmV0dXJucyBhIDMgb3IgNiBjaGFyYWN0ZXIgaGV4XG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiLCBhbGxvdzNDaGFyKSB7XG5cbiAgICB2YXIgaGV4ID0gW1xuICAgICAgICBwYWQyKG1hdGhSb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKG1hdGhSb3VuZChiKS50b1N0cmluZygxNikpXG4gICAgXTtcblxuICAgIC8vIFJldHVybiBhIDMgY2hhcmFjdGVyIGhleCBpZiBwb3NzaWJsZVxuICAgIGlmIChhbGxvdzNDaGFyICYmIGhleFswXS5jaGFyQXQoMCkgPT0gaGV4WzBdLmNoYXJBdCgxKSAmJiBoZXhbMV0uY2hhckF0KDApID09IGhleFsxXS5jaGFyQXQoMSkgJiYgaGV4WzJdLmNoYXJBdCgwKSA9PSBoZXhbMl0uY2hhckF0KDEpKSB7XG4gICAgICAgIHJldHVybiBoZXhbMF0uY2hhckF0KDApICsgaGV4WzFdLmNoYXJBdCgwKSArIGhleFsyXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyByZ2JhVG9IZXhcbi8vIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgcGx1cyBhbHBoYSB0cmFuc3BhcmVuY3kgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIGFuZFxuLy8gYSBpbiBbMCwgMV0uIFJldHVybnMgYSA0IG9yIDggY2hhcmFjdGVyIHJnYmEgaGV4XG5mdW5jdGlvbiByZ2JhVG9IZXgociwgZywgYiwgYSwgYWxsb3c0Q2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSA0IGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3c0Q2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSAmJiBoZXhbM10uY2hhckF0KDApID09IGhleFszXS5jaGFyQXQoMSkpIHtcbiAgICAgICAgcmV0dXJuIGhleFswXS5jaGFyQXQoMCkgKyBoZXhbMV0uY2hhckF0KDApICsgaGV4WzJdLmNoYXJBdCgwKSArIGhleFszXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyByZ2JhVG9BcmdiSGV4XG4vLyBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHRvIGFuIEFSR0IgSGV4OCBzdHJpbmdcbi8vIFJhcmVseSB1c2VkLCBidXQgcmVxdWlyZWQgZm9yIFwidG9GaWx0ZXIoKVwiXG5mdW5jdGlvbiByZ2JhVG9BcmdiSGV4KHIsIGcsIGIsIGEpIHtcblxuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIoY29udmVydERlY2ltYWxUb0hleChhKSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGcpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIobWF0aFJvdW5kKGIpLnRvU3RyaW5nKDE2KSlcbiAgICBdO1xuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBlcXVhbHNcbi8vIENhbiBiZSBjYWxsZWQgd2l0aCBhbnkgdGlueWNvbG9yIGlucHV0XG50aW55Y29sb3IuZXF1YWxzID0gZnVuY3Rpb24gKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgaWYgKCFjb2xvcjEgfHwgIWNvbG9yMikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2JTdHJpbmcoKSA9PSB0aW55Y29sb3IoY29sb3IyKS50b1JnYlN0cmluZygpO1xufTtcblxudGlueWNvbG9yLnJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aW55Y29sb3IuZnJvbVJhdGlvKHtcbiAgICAgICAgcjogbWF0aFJhbmRvbSgpLFxuICAgICAgICBnOiBtYXRoUmFuZG9tKCksXG4gICAgICAgIGI6IG1hdGhSYW5kb20oKVxuICAgIH0pO1xufTtcblxuLy8gTW9kaWZpY2F0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGxlc3MuanMgZm9yIHNvbWUgb2YgdGhlIGJhc2ljcyBoZXJlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkaGVhZC9sZXNzLmpzL2Jsb2IvbWFzdGVyL2xpYi9sZXNzL2Z1bmN0aW9ucy5qcz5cblxuZnVuY3Rpb24gZGVzYXR1cmF0ZShjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wucyAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIHNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5zICs9IGFtb3VudCAvIDEwMDtcbiAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gZ3JleXNjYWxlKGNvbG9yKSB7XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcikuZGVzYXR1cmF0ZSgxMDApO1xufVxuXG5mdW5jdGlvbiBsaWdodGVuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCArPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIGJyaWdodGVuKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgcmdiID0gdGlueWNvbG9yKGNvbG9yKS50b1JnYigpO1xuICAgIHJnYi5yID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLnIgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZ2IuZyA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5nIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmdiLmIgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuYiAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJldHVybiB0aW55Y29sb3IocmdiKTtcbn1cblxuZnVuY3Rpb24gZGFya2VuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIFNwaW4gdGFrZXMgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBhbW91bnQgd2l0aGluIFstMzYwLCAzNjBdIGluZGljYXRpbmcgdGhlIGNoYW5nZSBvZiBodWUuXG4vLyBWYWx1ZXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIHdpbGwgYmUgd3JhcHBlZCBpbnRvIHRoaXMgcmFuZ2UuXG5mdW5jdGlvbiBzcGluKGNvbG9yLCBhbW91bnQpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBodWUgPSAoaHNsLmggKyBhbW91bnQpICUgMzYwO1xuICAgIGhzbC5oID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIENvbWJpbmF0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGFua3MgdG8galF1ZXJ5IHhDb2xvciBmb3Igc29tZSBvZiB0aGUgaWRlYXMgYmVoaW5kIHRoZXNlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2luZnVzaW9uL2pRdWVyeS14Y29sb3IvYmxvYi9tYXN0ZXIvanF1ZXJ5Lnhjb2xvci5qcz5cblxuZnVuY3Rpb24gY29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmggPSAoaHNsLmggKyAxODApICUgMzYwO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gdHJpYWQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAxMjApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjQwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdGV0cmFkKGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgOTApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMTgwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDI3MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0Y29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDcyKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjE2KSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBhbmFsb2dvdXMoY29sb3IsIHJlc3VsdHMsIHNsaWNlcykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gICAgc2xpY2VzID0gc2xpY2VzIHx8IDMwO1xuXG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgcGFydCA9IDM2MCAvIHNsaWNlcztcbiAgICB2YXIgcmV0ID0gW3Rpbnljb2xvcihjb2xvcildO1xuXG4gICAgZm9yIChoc2wuaCA9ICgoaHNsLmggLSAocGFydCAqIHJlc3VsdHMgPj4gMSkpICsgNzIwKSAlIDM2MDsgLS1yZXN1bHRzOyApIHtcbiAgICAgICAgaHNsLmggPSAoaHNsLmggKyBwYXJ0KSAlIDM2MDtcbiAgICAgICAgcmV0LnB1c2godGlueWNvbG9yKGhzbCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBtb25vY2hyb21hdGljKGNvbG9yLCByZXN1bHRzKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgNjtcbiAgICB2YXIgaHN2ID0gdGlueWNvbG9yKGNvbG9yKS50b0hzdigpO1xuICAgIHZhciBoID0gaHN2LmgsIHMgPSBoc3YucywgdiA9IGhzdi52O1xuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgbW9kaWZpY2F0aW9uID0gMSAvIHJlc3VsdHM7XG5cbiAgICB3aGlsZSAocmVzdWx0cy0tKSB7XG4gICAgICAgIHJldC5wdXNoKHRpbnljb2xvcih7IGg6IGgsIHM6IHMsIHY6IHZ9KSk7XG4gICAgICAgIHYgPSAodiArIG1vZGlmaWNhdGlvbikgJSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudGlueWNvbG9yLm1peCA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDUwKTtcblxuICAgIHZhciByZ2IxID0gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2IoKTtcbiAgICB2YXIgcmdiMiA9IHRpbnljb2xvcihjb2xvcjIpLnRvUmdiKCk7XG5cbiAgICB2YXIgcCA9IGFtb3VudCAvIDEwMDtcblxuICAgIHZhciByZ2JhID0ge1xuICAgICAgICByOiAoKHJnYjIuciAtIHJnYjEucikgKiBwKSArIHJnYjEucixcbiAgICAgICAgZzogKChyZ2IyLmcgLSByZ2IxLmcpICogcCkgKyByZ2IxLmcsXG4gICAgICAgIGI6ICgocmdiMi5iIC0gcmdiMS5iKSAqIHApICsgcmdiMS5iLFxuICAgICAgICBhOiAoKHJnYjIuYSAtIHJnYjEuYSkgKiBwKSArIHJnYjEuYVxuICAgIH07XG5cbiAgICByZXR1cm4gdGlueWNvbG9yKHJnYmEpO1xufTtcblxuLy8gUmVhZGFiaWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmIChXQ0FHIFZlcnNpb24gMilcblxuLy8gY29udHJhc3Rcbi8vIEFuYWx5emUgdGhlIDIgY29sb3JzIGFuZCByZXR1cm5zIHRoZSBjb2xvciBjb250cmFzdCBkZWZpbmVkIGJ5IChXQ0FHIFZlcnNpb24gMilcbnRpbnljb2xvci5yZWFkYWJpbGl0eSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyKSB7XG4gICAgdmFyIGMxID0gdGlueWNvbG9yKGNvbG9yMSk7XG4gICAgdmFyIGMyID0gdGlueWNvbG9yKGNvbG9yMik7XG4gICAgcmV0dXJuIChNYXRoLm1heChjMS5nZXRMdW1pbmFuY2UoKSxjMi5nZXRMdW1pbmFuY2UoKSkrMC4wNSkgLyAoTWF0aC5taW4oYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpO1xufTtcblxuLy8gaXNSZWFkYWJsZVxuLy8gRW5zdXJlIHRoYXQgZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBjb2xvciBjb21iaW5hdGlvbnMgbWVldCBXQ0FHMiBndWlkZWxpbmVzLlxuLy8gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIE9iamVjdC5cbi8vICAgICAgdGhlICdsZXZlbCcgcHJvcGVydHkgc3RhdGVzICdBQScgb3IgJ0FBQScgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdBQSc7XG4vLyAgICAgIHRoZSAnc2l6ZScgcHJvcGVydHkgc3RhdGVzICdsYXJnZScgb3IgJ3NtYWxsJyAtIGlmIG1pc3Npbmcgb3IgaW52YWxpZCwgaXQgZGVmYXVsdHMgdG8gJ3NtYWxsJy5cbi8vIElmIHRoZSBlbnRpcmUgb2JqZWN0IGlzIGFic2VudCwgaXNSZWFkYWJsZSBkZWZhdWx0cyB0byB7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifS5cblxuLy8gKkV4YW1wbGUqXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIpID0+IGZhbHNlXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIse2xldmVsOlwiQUFcIixzaXplOlwibGFyZ2VcIn0pID0+IGZhbHNlXG50aW55Y29sb3IuaXNSZWFkYWJsZSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCB3Y2FnMikge1xuICAgIHZhciByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShjb2xvcjEsIGNvbG9yMik7XG4gICAgdmFyIHdjYWcyUGFybXMsIG91dDtcblxuICAgIG91dCA9IGZhbHNlO1xuXG4gICAgd2NhZzJQYXJtcyA9IHZhbGlkYXRlV0NBRzJQYXJtcyh3Y2FnMik7XG4gICAgc3dpdGNoICh3Y2FnMlBhcm1zLmxldmVsICsgd2NhZzJQYXJtcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJBQXNtYWxsXCI6XG4gICAgICAgIGNhc2UgXCJBQUFsYXJnZVwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNC41O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQWxhcmdlXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQUFzbWFsbFwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuXG59O1xuXG4vLyBtb3N0UmVhZGFibGVcbi8vIEdpdmVuIGEgYmFzZSBjb2xvciBhbmQgYSBsaXN0IG9mIHBvc3NpYmxlIGZvcmVncm91bmQgb3IgYmFja2dyb3VuZFxuLy8gY29sb3JzIGZvciB0aGF0IGJhc2UsIHJldHVybnMgdGhlIG1vc3QgcmVhZGFibGUgY29sb3IuXG4vLyBPcHRpb25hbGx5IHJldHVybnMgQmxhY2sgb3IgV2hpdGUgaWYgdGhlIG1vc3QgcmVhZGFibGUgY29sb3IgaXMgdW5yZWFkYWJsZS5cbi8vICpFeGFtcGxlKlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZSh0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiIzEyM1wiLCBbXCIjMTI0XCIsIFwiIzEyNVwiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOmZhbHNlfSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjMTEyMjU1XCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUodGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiMxMjNcIiwgW1wiIzEyNFwiLCBcIiMxMjVcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlfSkudG9IZXhTdHJpbmcoKTsgIC8vIFwiI2ZmZmZmZlwiXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiI2E4MDE1YVwiLCBbXCIjZmFmM2YzXCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6dHJ1ZSxsZXZlbDpcIkFBQVwiLHNpemU6XCJsYXJnZVwifSkudG9IZXhTdHJpbmcoKTsgLy8gXCIjZmFmM2YzXCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjYTgwMTVhXCIsIFtcIiNmYWYzZjNcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlLGxldmVsOlwiQUFBXCIsc2l6ZTpcInNtYWxsXCJ9KS50b0hleFN0cmluZygpOyAvLyBcIiNmZmZmZmZcIlxudGlueWNvbG9yLm1vc3RSZWFkYWJsZSA9IGZ1bmN0aW9uKGJhc2VDb2xvciwgY29sb3JMaXN0LCBhcmdzKSB7XG4gICAgdmFyIGJlc3RDb2xvciA9IG51bGw7XG4gICAgdmFyIGJlc3RTY29yZSA9IDA7XG4gICAgdmFyIHJlYWRhYmlsaXR5O1xuICAgIHZhciBpbmNsdWRlRmFsbGJhY2tDb2xvcnMsIGxldmVsLCBzaXplIDtcbiAgICBhcmdzID0gYXJncyB8fCB7fTtcbiAgICBpbmNsdWRlRmFsbGJhY2tDb2xvcnMgPSBhcmdzLmluY2x1ZGVGYWxsYmFja0NvbG9ycyA7XG4gICAgbGV2ZWwgPSBhcmdzLmxldmVsO1xuICAgIHNpemUgPSBhcmdzLnNpemU7XG5cbiAgICBmb3IgKHZhciBpPSAwOyBpIDwgY29sb3JMaXN0Lmxlbmd0aCA7IGkrKykge1xuICAgICAgICByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShiYXNlQ29sb3IsIGNvbG9yTGlzdFtpXSk7XG4gICAgICAgIGlmIChyZWFkYWJpbGl0eSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgYmVzdFNjb3JlID0gcmVhZGFiaWxpdHk7XG4gICAgICAgICAgICBiZXN0Q29sb3IgPSB0aW55Y29sb3IoY29sb3JMaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW55Y29sb3IuaXNSZWFkYWJsZShiYXNlQ29sb3IsIGJlc3RDb2xvciwge1wibGV2ZWxcIjpsZXZlbCxcInNpemVcIjpzaXplfSkgfHwgIWluY2x1ZGVGYWxsYmFja0NvbG9ycykge1xuICAgICAgICByZXR1cm4gYmVzdENvbG9yO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJncy5pbmNsdWRlRmFsbGJhY2tDb2xvcnM9ZmFsc2U7XG4gICAgICAgIHJldHVybiB0aW55Y29sb3IubW9zdFJlYWRhYmxlKGJhc2VDb2xvcixbXCIjZmZmXCIsIFwiIzAwMFwiXSxhcmdzKTtcbiAgICB9XG59O1xuXG4vLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvcj5cbnZhciBuYW1lcyA9IHRpbnljb2xvci5uYW1lcyA9IHtcbiAgICBhbGljZWJsdWU6IFwiZjBmOGZmXCIsXG4gICAgYW50aXF1ZXdoaXRlOiBcImZhZWJkN1wiLFxuICAgIGFxdWE6IFwiMGZmXCIsXG4gICAgYXF1YW1hcmluZTogXCI3ZmZmZDRcIixcbiAgICBhenVyZTogXCJmMGZmZmZcIixcbiAgICBiZWlnZTogXCJmNWY1ZGNcIixcbiAgICBiaXNxdWU6IFwiZmZlNGM0XCIsXG4gICAgYmxhY2s6IFwiMDAwXCIsXG4gICAgYmxhbmNoZWRhbG1vbmQ6IFwiZmZlYmNkXCIsXG4gICAgYmx1ZTogXCIwMGZcIixcbiAgICBibHVldmlvbGV0OiBcIjhhMmJlMlwiLFxuICAgIGJyb3duOiBcImE1MmEyYVwiLFxuICAgIGJ1cmx5d29vZDogXCJkZWI4ODdcIixcbiAgICBidXJudHNpZW5uYTogXCJlYTdlNWRcIixcbiAgICBjYWRldGJsdWU6IFwiNWY5ZWEwXCIsXG4gICAgY2hhcnRyZXVzZTogXCI3ZmZmMDBcIixcbiAgICBjaG9jb2xhdGU6IFwiZDI2OTFlXCIsXG4gICAgY29yYWw6IFwiZmY3ZjUwXCIsXG4gICAgY29ybmZsb3dlcmJsdWU6IFwiNjQ5NWVkXCIsXG4gICAgY29ybnNpbGs6IFwiZmZmOGRjXCIsXG4gICAgY3JpbXNvbjogXCJkYzE0M2NcIixcbiAgICBjeWFuOiBcIjBmZlwiLFxuICAgIGRhcmtibHVlOiBcIjAwMDA4YlwiLFxuICAgIGRhcmtjeWFuOiBcIjAwOGI4YlwiLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFwiYjg4NjBiXCIsXG4gICAgZGFya2dyYXk6IFwiYTlhOWE5XCIsXG4gICAgZGFya2dyZWVuOiBcIjAwNjQwMFwiLFxuICAgIGRhcmtncmV5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtraGFraTogXCJiZGI3NmJcIixcbiAgICBkYXJrbWFnZW50YTogXCI4YjAwOGJcIixcbiAgICBkYXJrb2xpdmVncmVlbjogXCI1NTZiMmZcIixcbiAgICBkYXJrb3JhbmdlOiBcImZmOGMwMFwiLFxuICAgIGRhcmtvcmNoaWQ6IFwiOTkzMmNjXCIsXG4gICAgZGFya3JlZDogXCI4YjAwMDBcIixcbiAgICBkYXJrc2FsbW9uOiBcImU5OTY3YVwiLFxuICAgIGRhcmtzZWFncmVlbjogXCI4ZmJjOGZcIixcbiAgICBkYXJrc2xhdGVibHVlOiBcIjQ4M2Q4YlwiLFxuICAgIGRhcmtzbGF0ZWdyYXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3NsYXRlZ3JleTogXCIyZjRmNGZcIixcbiAgICBkYXJrdHVycXVvaXNlOiBcIjAwY2VkMVwiLFxuICAgIGRhcmt2aW9sZXQ6IFwiOTQwMGQzXCIsXG4gICAgZGVlcHBpbms6IFwiZmYxNDkzXCIsXG4gICAgZGVlcHNreWJsdWU6IFwiMDBiZmZmXCIsXG4gICAgZGltZ3JheTogXCI2OTY5NjlcIixcbiAgICBkaW1ncmV5OiBcIjY5Njk2OVwiLFxuICAgIGRvZGdlcmJsdWU6IFwiMWU5MGZmXCIsXG4gICAgZmlyZWJyaWNrOiBcImIyMjIyMlwiLFxuICAgIGZsb3JhbHdoaXRlOiBcImZmZmFmMFwiLFxuICAgIGZvcmVzdGdyZWVuOiBcIjIyOGIyMlwiLFxuICAgIGZ1Y2hzaWE6IFwiZjBmXCIsXG4gICAgZ2FpbnNib3JvOiBcImRjZGNkY1wiLFxuICAgIGdob3N0d2hpdGU6IFwiZjhmOGZmXCIsXG4gICAgZ29sZDogXCJmZmQ3MDBcIixcbiAgICBnb2xkZW5yb2Q6IFwiZGFhNTIwXCIsXG4gICAgZ3JheTogXCI4MDgwODBcIixcbiAgICBncmVlbjogXCIwMDgwMDBcIixcbiAgICBncmVlbnllbGxvdzogXCJhZGZmMmZcIixcbiAgICBncmV5OiBcIjgwODA4MFwiLFxuICAgIGhvbmV5ZGV3OiBcImYwZmZmMFwiLFxuICAgIGhvdHBpbms6IFwiZmY2OWI0XCIsXG4gICAgaW5kaWFucmVkOiBcImNkNWM1Y1wiLFxuICAgIGluZGlnbzogXCI0YjAwODJcIixcbiAgICBpdm9yeTogXCJmZmZmZjBcIixcbiAgICBraGFraTogXCJmMGU2OGNcIixcbiAgICBsYXZlbmRlcjogXCJlNmU2ZmFcIixcbiAgICBsYXZlbmRlcmJsdXNoOiBcImZmZjBmNVwiLFxuICAgIGxhd25ncmVlbjogXCI3Y2ZjMDBcIixcbiAgICBsZW1vbmNoaWZmb246IFwiZmZmYWNkXCIsXG4gICAgbGlnaHRibHVlOiBcImFkZDhlNlwiLFxuICAgIGxpZ2h0Y29yYWw6IFwiZjA4MDgwXCIsXG4gICAgbGlnaHRjeWFuOiBcImUwZmZmZlwiLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBcImZhZmFkMlwiLFxuICAgIGxpZ2h0Z3JheTogXCJkM2QzZDNcIixcbiAgICBsaWdodGdyZWVuOiBcIjkwZWU5MFwiLFxuICAgIGxpZ2h0Z3JleTogXCJkM2QzZDNcIixcbiAgICBsaWdodHBpbms6IFwiZmZiNmMxXCIsXG4gICAgbGlnaHRzYWxtb246IFwiZmZhMDdhXCIsXG4gICAgbGlnaHRzZWFncmVlbjogXCIyMGIyYWFcIixcbiAgICBsaWdodHNreWJsdWU6IFwiODdjZWZhXCIsXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzbGF0ZWdyZXk6IFwiNzg5XCIsXG4gICAgbGlnaHRzdGVlbGJsdWU6IFwiYjBjNGRlXCIsXG4gICAgbGlnaHR5ZWxsb3c6IFwiZmZmZmUwXCIsXG4gICAgbGltZTogXCIwZjBcIixcbiAgICBsaW1lZ3JlZW46IFwiMzJjZDMyXCIsXG4gICAgbGluZW46IFwiZmFmMGU2XCIsXG4gICAgbWFnZW50YTogXCJmMGZcIixcbiAgICBtYXJvb246IFwiODAwMDAwXCIsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogXCI2NmNkYWFcIixcbiAgICBtZWRpdW1ibHVlOiBcIjAwMDBjZFwiLFxuICAgIG1lZGl1bW9yY2hpZDogXCJiYTU1ZDNcIixcbiAgICBtZWRpdW1wdXJwbGU6IFwiOTM3MGRiXCIsXG4gICAgbWVkaXVtc2VhZ3JlZW46IFwiM2NiMzcxXCIsXG4gICAgbWVkaXVtc2xhdGVibHVlOiBcIjdiNjhlZVwiLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBcIjAwZmE5YVwiLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogXCI0OGQxY2NcIixcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFwiYzcxNTg1XCIsXG4gICAgbWlkbmlnaHRibHVlOiBcIjE5MTk3MFwiLFxuICAgIG1pbnRjcmVhbTogXCJmNWZmZmFcIixcbiAgICBtaXN0eXJvc2U6IFwiZmZlNGUxXCIsXG4gICAgbW9jY2FzaW46IFwiZmZlNGI1XCIsXG4gICAgbmF2YWpvd2hpdGU6IFwiZmZkZWFkXCIsXG4gICAgbmF2eTogXCIwMDAwODBcIixcbiAgICBvbGRsYWNlOiBcImZkZjVlNlwiLFxuICAgIG9saXZlOiBcIjgwODAwMFwiLFxuICAgIG9saXZlZHJhYjogXCI2YjhlMjNcIixcbiAgICBvcmFuZ2U6IFwiZmZhNTAwXCIsXG4gICAgb3JhbmdlcmVkOiBcImZmNDUwMFwiLFxuICAgIG9yY2hpZDogXCJkYTcwZDZcIixcbiAgICBwYWxlZ29sZGVucm9kOiBcImVlZThhYVwiLFxuICAgIHBhbGVncmVlbjogXCI5OGZiOThcIixcbiAgICBwYWxldHVycXVvaXNlOiBcImFmZWVlZVwiLFxuICAgIHBhbGV2aW9sZXRyZWQ6IFwiZGI3MDkzXCIsXG4gICAgcGFwYXlhd2hpcDogXCJmZmVmZDVcIixcbiAgICBwZWFjaHB1ZmY6IFwiZmZkYWI5XCIsXG4gICAgcGVydTogXCJjZDg1M2ZcIixcbiAgICBwaW5rOiBcImZmYzBjYlwiLFxuICAgIHBsdW06IFwiZGRhMGRkXCIsXG4gICAgcG93ZGVyYmx1ZTogXCJiMGUwZTZcIixcbiAgICBwdXJwbGU6IFwiODAwMDgwXCIsXG4gICAgcmViZWNjYXB1cnBsZTogXCI2NjMzOTlcIixcbiAgICByZWQ6IFwiZjAwXCIsXG4gICAgcm9zeWJyb3duOiBcImJjOGY4ZlwiLFxuICAgIHJveWFsYmx1ZTogXCI0MTY5ZTFcIixcbiAgICBzYWRkbGVicm93bjogXCI4YjQ1MTNcIixcbiAgICBzYWxtb246IFwiZmE4MDcyXCIsXG4gICAgc2FuZHlicm93bjogXCJmNGE0NjBcIixcbiAgICBzZWFncmVlbjogXCIyZThiNTdcIixcbiAgICBzZWFzaGVsbDogXCJmZmY1ZWVcIixcbiAgICBzaWVubmE6IFwiYTA1MjJkXCIsXG4gICAgc2lsdmVyOiBcImMwYzBjMFwiLFxuICAgIHNreWJsdWU6IFwiODdjZWViXCIsXG4gICAgc2xhdGVibHVlOiBcIjZhNWFjZFwiLFxuICAgIHNsYXRlZ3JheTogXCI3MDgwOTBcIixcbiAgICBzbGF0ZWdyZXk6IFwiNzA4MDkwXCIsXG4gICAgc25vdzogXCJmZmZhZmFcIixcbiAgICBzcHJpbmdncmVlbjogXCIwMGZmN2ZcIixcbiAgICBzdGVlbGJsdWU6IFwiNDY4MmI0XCIsXG4gICAgdGFuOiBcImQyYjQ4Y1wiLFxuICAgIHRlYWw6IFwiMDA4MDgwXCIsXG4gICAgdGhpc3RsZTogXCJkOGJmZDhcIixcbiAgICB0b21hdG86IFwiZmY2MzQ3XCIsXG4gICAgdHVycXVvaXNlOiBcIjQwZTBkMFwiLFxuICAgIHZpb2xldDogXCJlZTgyZWVcIixcbiAgICB3aGVhdDogXCJmNWRlYjNcIixcbiAgICB3aGl0ZTogXCJmZmZcIixcbiAgICB3aGl0ZXNtb2tlOiBcImY1ZjVmNVwiLFxuICAgIHllbGxvdzogXCJmZjBcIixcbiAgICB5ZWxsb3dncmVlbjogXCI5YWNkMzJcIlxufTtcblxuLy8gTWFrZSBpdCBlYXN5IHRvIGFjY2VzcyBjb2xvcnMgdmlhIGhleE5hbWVzW2hleF1cbnZhciBoZXhOYW1lcyA9IHRpbnljb2xvci5oZXhOYW1lcyA9IGZsaXAobmFtZXMpO1xuXG4vLyBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLVxuXG4vLyB7ICduYW1lMSc6ICd2YWwxJyB9IGJlY29tZXMgeyAndmFsMSc6ICduYW1lMScgfVxuZnVuY3Rpb24gZmxpcChvKSB7XG4gICAgdmFyIGZsaXBwZWQgPSB7IH07XG4gICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmbGlwcGVkW29baV1dID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxpcHBlZDtcbn1cblxuLy8gUmV0dXJuIGEgdmFsaWQgYWxwaGEgdmFsdWUgWzAsMV0gd2l0aCBhbGwgaW52YWxpZCB2YWx1ZXMgYmVpbmcgc2V0IHRvIDFcbmZ1bmN0aW9uIGJvdW5kQWxwaGEoYSkge1xuICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuXG4gICAgaWYgKGlzTmFOKGEpIHx8IGEgPCAwIHx8IGEgPiAxKSB7XG4gICAgICAgIGEgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vLyBUYWtlIGlucHV0IGZyb20gWzAsIG5dIGFuZCByZXR1cm4gaXQgYXMgWzAsIDFdXG5mdW5jdGlvbiBib3VuZDAxKG4sIG1heCkge1xuICAgIGlmIChpc09uZVBvaW50WmVybyhuKSkgeyBuID0gXCIxMDAlXCI7IH1cblxuICAgIHZhciBwcm9jZXNzUGVyY2VudCA9IGlzUGVyY2VudGFnZShuKTtcbiAgICBuID0gbWF0aE1pbihtYXgsIG1hdGhNYXgoMCwgcGFyc2VGbG9hdChuKSkpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSBjb252ZXJ0IHBlcmNlbnRhZ2UgaW50byBudW1iZXJcbiAgICBpZiAocHJvY2Vzc1BlcmNlbnQpIHtcbiAgICAgICAgbiA9IHBhcnNlSW50KG4gKiBtYXgsIDEwKSAvIDEwMDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzXG4gICAgaWYgKChNYXRoLmFicyhuIC0gbWF4KSA8IDAuMDAwMDAxKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IGludG8gWzAsIDFdIHJhbmdlIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICByZXR1cm4gKG4gJSBtYXgpIC8gcGFyc2VGbG9hdChtYXgpO1xufVxuXG4vLyBGb3JjZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDFcbmZ1bmN0aW9uIGNsYW1wMDEodmFsKSB7XG4gICAgcmV0dXJuIG1hdGhNaW4oMSwgbWF0aE1heCgwLCB2YWwpKTtcbn1cblxuLy8gUGFyc2UgYSBiYXNlLTE2IGhleCB2YWx1ZSBpbnRvIGEgYmFzZS0xMCBpbnRlZ2VyXG5mdW5jdGlvbiBwYXJzZUludEZyb21IZXgodmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xufVxuXG4vLyBOZWVkIHRvIGhhbmRsZSAxLjAgYXMgMTAwJSwgc2luY2Ugb25jZSBpdCBpcyBhIG51bWJlciwgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIGl0IGFuZCAxXG4vLyA8aHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NDIyMDcyL2phdmFzY3JpcHQtaG93LXRvLWRldGVjdC1udW1iZXItYXMtYS1kZWNpbWFsLWluY2x1ZGluZy0xLTA+XG5mdW5jdGlvbiBpc09uZVBvaW50WmVybyhuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKCcuJykgIT0gLTEgJiYgcGFyc2VGbG9hdChuKSA9PT0gMTtcbn1cblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHN0cmluZyBwYXNzZWQgaW4gaXMgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBpc1BlcmNlbnRhZ2Uobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIiAmJiBuLmluZGV4T2YoJyUnKSAhPSAtMTtcbn1cblxuLy8gRm9yY2UgYSBoZXggdmFsdWUgdG8gaGF2ZSAyIGNoYXJhY3RlcnNcbmZ1bmN0aW9uIHBhZDIoYykge1xuICAgIHJldHVybiBjLmxlbmd0aCA9PSAxID8gJzAnICsgYyA6ICcnICsgYztcbn1cblxuLy8gUmVwbGFjZSBhIGRlY2ltYWwgd2l0aCBpdCdzIHBlcmNlbnRhZ2UgdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnRUb1BlcmNlbnRhZ2Uobikge1xuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgICAgbiA9IChuICogMTAwKSArIFwiJVwiO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xufVxuXG4vLyBDb252ZXJ0cyBhIGRlY2ltYWwgdG8gYSBoZXggdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnREZWNpbWFsVG9IZXgoZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZCkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbn1cbi8vIENvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgZGVjaW1hbFxuZnVuY3Rpb24gY29udmVydEhleFRvRGVjaW1hbChoKSB7XG4gICAgcmV0dXJuIChwYXJzZUludEZyb21IZXgoaCkgLyAyNTUpO1xufVxuXG52YXIgbWF0Y2hlcnMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzPlxuICAgIHZhciBDU1NfSU5URUdFUiA9IFwiWy1cXFxcK10/XFxcXGQrJT9cIjtcblxuICAgIC8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jbnVtYmVyLXZhbHVlPlxuICAgIHZhciBDU1NfTlVNQkVSID0gXCJbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/XCI7XG5cbiAgICAvLyBBbGxvdyBwb3NpdGl2ZS9uZWdhdGl2ZSBpbnRlZ2VyL251bWJlci4gIERvbid0IGNhcHR1cmUgdGhlIGVpdGhlci9vciwganVzdCB0aGUgZW50aXJlIG91dGNvbWUuXG4gICAgdmFyIENTU19VTklUID0gXCIoPzpcIiArIENTU19OVU1CRVIgKyBcIil8KD86XCIgKyBDU1NfSU5URUdFUiArIFwiKVwiO1xuXG4gICAgLy8gQWN0dWFsIG1hdGNoaW5nLlxuICAgIC8vIFBhcmVudGhlc2VzIGFuZCBjb21tYXMgYXJlIG9wdGlvbmFsLCBidXQgbm90IHJlcXVpcmVkLlxuICAgIC8vIFdoaXRlc3BhY2UgY2FuIHRha2UgdGhlIHBsYWNlIG9mIGNvbW1hcyBvciBvcGVuaW5nIHBhcmVuXG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0gzID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0g0ID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBDU1NfVU5JVDogbmV3IFJlZ0V4cChDU1NfVU5JVCksXG4gICAgICAgIHJnYjogbmV3IFJlZ0V4cChcInJnYlwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICByZ2JhOiBuZXcgUmVnRXhwKFwicmdiYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoc2w6IG5ldyBSZWdFeHAoXCJoc2xcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgaHNsYTogbmV3IFJlZ0V4cChcImhzbGFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaHN2OiBuZXcgUmVnRXhwKFwiaHN2XCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIGhzdmE6IG5ldyBSZWdFeHAoXCJoc3ZhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhleDM6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgaGV4NjogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICBoZXg0OiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICBoZXg4OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvXG4gICAgfTtcbn0pKCk7XG5cbi8vIGlzVmFsaWRDU1NVbml0XG4vLyBUYWtlIGluIGEgc2luZ2xlIHN0cmluZyAvIG51bWJlciBhbmQgY2hlY2sgdG8gc2VlIGlmIGl0IGxvb2tzIGxpa2UgYSBDU1MgdW5pdFxuLy8gKHNlZSBtYXRjaGVycyBhYm92ZSBmb3IgZGVmaW5pdGlvbikuXG5mdW5jdGlvbiBpc1ZhbGlkQ1NTVW5pdChjb2xvcikge1xuICAgIHJldHVybiAhIW1hdGNoZXJzLkNTU19VTklULmV4ZWMoY29sb3IpO1xufVxuXG4vLyBzdHJpbmdJbnB1dFRvT2JqZWN0XG4vLyBQZXJtaXNzaXZlIHN0cmluZyBwYXJzaW5nLiAgVGFrZSBpbiBhIG51bWJlciBvZiBmb3JtYXRzLCBhbmQgb3V0cHV0IGFuIG9iamVjdFxuLy8gYmFzZWQgb24gZGV0ZWN0ZWQgZm9ybWF0LiAgUmV0dXJucyB7IHIsIGcsIGIgfSBvciB7IGgsIHMsIGwgfSBvciB7IGgsIHMsIHZ9XG5mdW5jdGlvbiBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKSB7XG5cbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UodHJpbUxlZnQsICcnKS5yZXBsYWNlKHRyaW1SaWdodCwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIG5hbWVkID0gZmFsc2U7XG4gICAgaWYgKG5hbWVzW2NvbG9yXSkge1xuICAgICAgICBjb2xvciA9IG5hbWVzW2NvbG9yXTtcbiAgICAgICAgbmFtZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb2xvciA9PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgIHJldHVybiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAsIGZvcm1hdDogXCJuYW1lXCIgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gbWF0Y2ggc3RyaW5nIGlucHV0IHVzaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gICAgLy8gS2VlcCBtb3N0IG9mIHRoZSBudW1iZXIgYm91bmRpbmcgb3V0IG9mIHRoaXMgZnVuY3Rpb24gLSBkb24ndCB3b3JyeSBhYm91dCBbMCwxXSBvciBbMCwxMDBdIG9yIFswLDM2MF1cbiAgICAvLyBKdXN0IHJldHVybiBhbiBvYmplY3QgYW5kIGxldCB0aGUgY29udmVyc2lvbiBmdW5jdGlvbnMgaGFuZGxlIHRoYXQuXG4gICAgLy8gVGhpcyB3YXkgdGhlIHJlc3VsdCB3aWxsIGJlIHRoZSBzYW1lIHdoZXRoZXIgdGhlIHRpbnljb2xvciBpcyBpbml0aWFsaXplZCB3aXRoIHN0cmluZyBvciBvYmplY3QuXG4gICAgdmFyIG1hdGNoO1xuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5yZ2IuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLnJnYmEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc2wuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgbDogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzbGEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgbDogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oc3YuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgdjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzdmEuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgdjogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg4LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleDhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4Ni5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDQuZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyAnJyArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArICcnICsgbWF0Y2hbMl0pLFxuICAgICAgICAgICAgYjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzNdICsgJycgKyBtYXRjaFszXSksXG4gICAgICAgICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdICsgJycgKyBtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gXCJuYW1lXCIgOiBcImhleDhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4My5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArICcnICsgbWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgJycgKyBtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10gKyAnJyArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4XCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV0NBRzJQYXJtcyhwYXJtcykge1xuICAgIC8vIHJldHVybiB2YWxpZCBXQ0FHMiBwYXJtcyBmb3IgaXNSZWFkYWJsZS5cbiAgICAvLyBJZiBpbnB1dCBwYXJtcyBhcmUgaW52YWxpZCwgcmV0dXJuIHtcImxldmVsXCI6XCJBQVwiLCBcInNpemVcIjpcInNtYWxsXCJ9XG4gICAgdmFyIGxldmVsLCBzaXplO1xuICAgIHBhcm1zID0gcGFybXMgfHwge1wibGV2ZWxcIjpcIkFBXCIsIFwic2l6ZVwiOlwic21hbGxcIn07XG4gICAgbGV2ZWwgPSAocGFybXMubGV2ZWwgfHwgXCJBQVwiKS50b1VwcGVyQ2FzZSgpO1xuICAgIHNpemUgPSAocGFybXMuc2l6ZSB8fCBcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxldmVsICE9PSBcIkFBXCIgJiYgbGV2ZWwgIT09IFwiQUFBXCIpIHtcbiAgICAgICAgbGV2ZWwgPSBcIkFBXCI7XG4gICAgfVxuICAgIGlmIChzaXplICE9PSBcInNtYWxsXCIgJiYgc2l6ZSAhPT0gXCJsYXJnZVwiKSB7XG4gICAgICAgIHNpemUgPSBcInNtYWxsXCI7XG4gICAgfVxuICAgIHJldHVybiB7XCJsZXZlbFwiOmxldmVsLCBcInNpemVcIjpzaXplfTtcbn1cblxudGhpcy50aW55Y29sb3IgPSB0aW55Y29sb3I7XG5cbn0pKClgO1xufVxuLy8gSXQgaXMgaGFja3kgd2F5IHRvIG1ha2UgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNvbXBpbGVkIHByZWZlcmVudGlhbGx5IGJ5IGxlc3Ncbi8vIHJlc29sdmUgZXJyb3I6IGBSZWZlcmVuY2VFcnJvcjogY29sb3JQYWxldHRlIGlzIG5vdCBkZWZpbmVkYFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LW1vdGlvbi9pc3N1ZXMvNDRcbi50aW55Q29sb3JNaXhpbigpO1xuIiwiQGltcG9ydCAnLi4vdGhlbWVzL2luZGV4JztcblxuLnJlc2V0LWNvbXBvbmVudCgpIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogQHRleHQtY29sb3I7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuICBmb250LXZhcmlhbnQ6IEBmb250LXZhcmlhbnQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1iYXNlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IEBmb250LWZlYXR1cmUtc2V0dGluZ3MtYmFzZTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlL3RoZW1lcy9pbmRleCc7XG5AaW1wb3J0ICcuLi8uLi9zdHlsZS9taXhpbnMvaW5kZXgnO1xuXG5AcmF0ZS1wcmVmaXgtY2xzOiB+J0B7YW50LXByZWZpeH0tcmF0ZSc7XG5cbi5Ae3JhdGUtcHJlZml4LWNsc30ge1xuICAucmVzZXQtY29tcG9uZW50O1xuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogQHJhdGUtc3Rhci1jb2xvcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJi1kaXNhYmxlZCAmLXN0YXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG5cbiAgJi1zdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICA+IGRpdiB7XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1maXJzdCxcbiAgICAmLXNlY29uZCB7XG4gICAgICBjb2xvcjogQHJhdGUtc3Rhci1iZztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAuQHtpY29uZm9udC1jc3MtcHJlZml4fSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1maXJzdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICYtaGFsZiAmLWZpcnN0LFxuICAgICYtaGFsZiAmLXNlY29uZCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICYtaGFsZiAmLWZpcnN0LFxuICAgICYtZnVsbCAmLXNlY29uZCB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAmLXRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuICB9XG59XG5cbkBpbXBvcnQgJy4vcnRsJztcbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlL3RoZW1lcy9pbmRleCc7XG5AaW1wb3J0ICcuLi8uLi9zdHlsZS9taXhpbnMvaW5kZXgnO1xuXG5AcmF0ZS1wcmVmaXgtY2xzOiB+J0B7YW50LXByZWZpeH0tcmF0ZSc7XG5cbi5Ae3JhdGUtcHJlZml4LWNsc30ge1xuICAmLXJ0bCB7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gIH1cblxuICAmLXN0YXIge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAuQHtyYXRlLXByZWZpeC1jbHN9LXJ0bCAmIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtZmlyc3Qge1xuICAgICAgLkB7cmF0ZS1wcmVmaXgtY2xzfS1ydGwgJiB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgLkB7cmF0ZS1wcmVmaXgtY2xzfS1ydGwgJiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnfkBzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy9pbmRleC5sZXNzJztcbkBpbXBvcnQgJy4vYXBwbGljYXRpb24tY2FyZC5jb21wb25lbnQudGhlbWUubGVzcyc7XG5AaW1wb3J0ICd+bmctem9ycm8tYW50ZC9yYXRlL3N0eWxlL2luZGV4Lmxlc3MnO1xuXG4uYXBwbGljYXRpb24tY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IEBhcHAtY2FyZC13aWR0aDtcblxuICAgIC5Ae2NhcmQtcHJlZml4LWNsc30tYm9keSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IEBhcHAtY2FyZC1taW4taGVpZ2h0O1xuICAgICAgICBwYWRkaW5nOiBAYXBwLWNhcmQtcGFkZGluZztcbiAgICB9XG5cbiAgICAuQHtjYXJkLXByZWZpeC1jbHN9LWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nOiAwIEBjYXJkLXBhZGRpbmctYmFzZTtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IEBhcHAtY2FyZC1sb2dvLWhlaWdodDtcbiAgICAgICAgbWF4LXdpZHRoOiBAYXBwLWNhcmQtbG9nby1tYXgtd2lkdGg7XG4gICAgfVxuXG4gICAgJl9fcGFydG5lci10eXBlIHtcbiAgICAgICAgZm9udC1zaXplOiBAYXBwLWNhcmQtcGFydG5lci10eXBlLWZvbnQtc2l6ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtbGc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtc2VtaS1ib2xkO1xuICAgICAgICBjb2xvcjogQGluaztcbiAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtdGl0bGUtbWFyZ2luO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1tZWRpdW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAYXBwLWNhcmQtZGVzY3JpcHRpb24tbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgJl9fY29ubmVjdGVkLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtY29ubmVjdGVkLWJhZGdlLW1hcmdpbjtcbiAgICB9XG5cbiAgICAmX19yYXRlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQGFwcC1jYXJkLXJhdGUtbWFyZ2luO1xuXG4gICAgICAgICYtdmFsdWUge1xuICAgICAgICAgICAgLkB7cmF0ZS1wcmVmaXgtY2xzfSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IEB5ZWxsb3c7XG5cbiAgICAgICAgICAgICAgICAmLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBAYXBwLWNhcmQtcmF0ZS1zdGFycy1tYXJnaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWNvdW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQGFwcC1jYXJkLXJhdGUtY291bnQtbGluZS1oZWlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogQGFwcC1jYXJkLXJhdGUtY291bnQtbWFyZ2luLWxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"],
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
      styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');\n/* prettier-ignore */\n/**\n * Returns a map with the list of properties that should generate grid selectors with breakpoints.\n */\n.app-filters__item.spy-chips {\n  padding: 13px 16px 11px 16px;\n  background-color: #fff;\n  color: #121212;\n  line-height: 22px;\n  margin: 0 19px 0 0;\n}\n.app-filters__item-icon {\n  vertical-align: middle;\n  margin: 0 10px 0 0;\n  font-size: 22px;\n  line-height: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250ZW5kL2FwcC1zdG9yZS1jYXRhbG9nL3NyYy9wYWdlLWNhdGFsb2cvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvcnVzdGVtemFraWV2L1BocHN0b3JtUHJvamVjdHMvc3ByeWtlci9zdWl0ZS1ub25zcGxpdC9yZWdpc3RyeS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9Ac3ByeWtlci9zdHlsZXMvc3JjL2xpYi90aGVtZXMvZGVmYXVsdC92YXJpYWJsZXMvZm9udHMubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2Uvbm9kZV9tb2R1bGVzL0BzcHJ5a2VyL3N0eWxlcy9zcmMvbGliL3RoZW1lcy9kZWZhdWx0L3ZhcmlhYmxlcy91c2VyLW1lbnUubGVzcyIsIi9Vc2Vycy9ydXN0ZW16YWtpZXYvUGhwc3Rvcm1Qcm9qZWN0cy9zcHJ5a2VyL3N1aXRlLW5vbnNwbGl0L3JlZ2lzdHJ5LXNlcnZpY2UvZnJvbnRlbmQvYXBwLXN0b3JlLWNhdGFsb2cvc3JjL3BhZ2UtY2F0YWxvZy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkNDTTtBREFOLG9CQUFvQjtBQUNwQjs7RUFFRTtBRUpEO0VDTVcsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FIQ1o7QUdFUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUhBWiIsImZpbGUiOiJmcm9udGVuZC9hcHAtc3RvcmUtY2F0YWxvZy9zcmMvcGFnZS1jYXRhbG9nL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuLyogcHJldHRpZXItaWdub3JlICovXG4vKipcbiAqIFJldHVybnMgYSBtYXAgd2l0aCB0aGUgbGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGdyaWQgc2VsZWN0b3JzIHdpdGggYnJlYWtwb2ludHMuXG4gKi9cbi5hcHAtZmlsdGVyc19faXRlbS5zcHktY2hpcHMge1xuICBwYWRkaW5nOiAxM3B4IDE2cHggMTFweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzEyMTIxMjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMCAxOXB4IDAgMDtcbn1cbi5hcHAtZmlsdGVyc19faXRlbS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIiwiQGltcG9ydCAoY3NzKVxuICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuXG5AZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLFxuICBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcblxuQHRleHQtY29sb3I6IEBncmF5LWRhcms7XG5AdGV4dC1jb2xvci1zZWNvbmRhcnk6IEBpbms7XG5AaGVhZGluZy1jb2xvcjogQGluaztcblxuQGZvbnQtc2l6ZS1sZzogMTZweDtcbkBmb250LXNpemUtYmFzZTogMTRweDtcbkBmb250LXNpemUtc206IDEycHg7XG5cbkBoZWFkaW5nLTEtZm9udC1zaXplOiAzMHB4O1xuQGhlYWRpbmctMi1mb250LXNpemU6IDI2cHg7XG5AaGVhZGluZy0zLWZvbnQtc2l6ZTogMjBweDtcbkBoZWFkaW5nLTQtZm9udC1zaXplOiAxOHB4O1xuQGhlYWRpbmctNS1mb250LXNpemU6IDE2cHg7XG5cbkBsaW5lLWhlaWdodC1iYXNlOiAxLjM7XG5cbkBsZXR0ZXItc3BhY2luZy1iYXNlOiAwLjA4cHg7XG5cbkBmb250LXdlaWdodC1kZWZhdWx0OiA0MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG5AZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XG5cbkBmb250LWRlZmF1bHQ6IEBmb250LXdlaWdodC1tZWRpdW0gQGZvbnQtc2l6ZS1iYXNlIC8gQGxpbmUtaGVpZ2h0LWJhc2VcbiAgQGZvbnQtZmFtaWx5O1xuXG5AaGVhZGluZy0xLXNpemU6IEBoZWFkaW5nLTEtZm9udC1zaXplO1xuQGhlYWRpbmctMi1zaXplOiBAaGVhZGluZy0yLWZvbnQtc2l6ZTtcbkBoZWFkaW5nLTMtc2l6ZTogQGhlYWRpbmctMy1mb250LXNpemU7XG5AaGVhZGluZy00LXNpemU6IEBoZWFkaW5nLTQtZm9udC1zaXplO1xuIiwiQHVzZXItbWVudS1wcmVmaXgtY2xzOiB+J0B7c3ByeWtlci1wcmVmaXh9LXVzZXItbWVudSc7XG5cbkB1c2VyLW1lbnUtYWN0aW9uLXNpemU6IDUwcHg7XG5AdXNlci1tZW51LWFjdGlvbi1ib3JkZXItcmFkaXVzOiA1MCU7XG5AdXNlci1tZW51LWFjdGlvbi1ib3JkZXI6IDFweCBzb2xpZCBAdHJhbnNwYXJlbnQ7XG5AdXNlci1tZW51LWljb24tc2l6ZTogMjRweDtcbkB1c2VyLW1lbnUtY29udGVudC13aWR0aDogMzAwcHg7XG5AdXNlci1tZW51LWNvbnRlbnQtcGFkZGluZzogM3B4IDA7XG5AdXNlci1tZW51LWNvbnRlbnQtYm9yZGVyLXJhZGl1czogNHB4O1xuQHVzZXItbWVudS1pdGVtLXBhZGRpbmc6IDE1cHg7XG5AdXNlci1tZW51LWl0ZW0tYm9yZGVyOiAxcHggc29saWQgQGdyYXk7XG5AdXNlci1tZW51LWxpbmstcGFkZGluZzogMTVweDtcbkB1c2VyLW1lbnUtbGluay1ib3JkZXI6IDFweCBzb2xpZCBAZ3JheS1saWdodDtcbkB1c2VyLW1lbnUtbGluay1ib3JkZXItcmFkaXVzOiA0cHg7XG5AdXNlci1tZW51LWxpbmstYm9yZGVyLWhvcml6b250YWwtaW5kZW50OiA1cHg7XG4iLCJAaW1wb3J0ICd+QHNwcnlrZXIvc3R5bGVzL3NyYy9saWIvdGhlbWVzL2RlZmF1bHQvdmFyaWFibGVzL2luZGV4Lmxlc3MnO1xuQGltcG9ydCAnLi9maWx0ZXJzLmNvbXBvbmVudC50aGVtZS5sZXNzJztcblxuLmFwcC1maWx0ZXJzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgJi5Ae2NoaXBzLXByZWZpeC1jbHN9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IEBmaWx0ZXJzLWl0ZW0tcGFkZGluZztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiBAaW5rO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IEBmaWx0ZXJzLWl0ZW0tbGluZS1oZWlnaHQ7XG4gICAgICAgICAgICBtYXJnaW46IEBmaWx0ZXJzLWl0ZW0tbWFyZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IEBmaWx0ZXJzLWl0ZW0taWNvbi1tYXJnaW47XG4gICAgICAgICAgICBmb250LXNpemU6IEBmaWx0ZXJzLWl0ZW0taWNvbi1mb250LXNpemU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogQGZpbHRlcnMtaXRlbS1pY29uLWxpbmUtaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"],
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


    var _filters_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../filters/filters.component */
    "../frontend/app-store-catalog/src/page-catalog/components/filters/filters.component.ts");
    /* harmony import */


    var _spryker_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @spryker/card */
    "../node_modules/@spryker/card/__ivy_ngcc__/fesm2015/spryker-card.js");
    /* harmony import */


    var _spryker_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @spryker/navigation */
    "../node_modules/@spryker/navigation/__ivy_ngcc__/fesm2015/spryker-navigation.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _spryker_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @spryker/select */
    "../node_modules/@spryker/select/__ivy_ngcc__/fesm2015/spryker-select.js");
    /* harmony import */


    var _spryker_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @spryker/spinner */
    "../node_modules/@spryker/spinner/__ivy_ngcc__/fesm2015/spryker-spinner.js");
    /* harmony import */


    var _spryker_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @spryker/chips */
    "../node_modules/@spryker/chips/__ivy_ngcc__/fesm2015/spryker-chips.js");
    /* harmony import */


    var _app_card_application_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.applicationsCount$), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "HOME.APPLICATIONS_COUNT_TEXT"), " ");
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
        this.apps$ = this.apiService.appsGet(this.translateService.currentLang, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].tenantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
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
            var _a;

            return {
              id: cardDataItem.attributes.id,
              logoUrl: cardDataItem.attributes.iconUrl,
              title: cardDataItem.attributes.name,
              description: cardDataItem.attributes.descriptionShort,
              status: _this2.prepareAppStatus(cardDataItem),
              tags: cardDataItem.attributes.categories,
              partnerType: (_a = cardDataItem.attributes.labels[0]) !== null && _a !== void 0 ? _a : null,
              rate: cardDataItem.attributes.rating
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
      }]);

      return PageCatalogComponent;
    }();

    PageCatalogComponent.ɵfac = function PageCatalogComponent_Factory(t) {
      return new (t || PageCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_swagger__WEBPACK_IMPORTED_MODULE_1__["DefaultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalog_page_service__WEBPACK_IMPORTED_MODULE_5__["CatalogPageService"]));
    };

    PageCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageCatalogComponent,
      selectors: [["app-page-catalog"]],
      hostAttrs: [1, "page-catalog"],
      decls: 22,
      vars: 22,
      consts: [[1, "page-catalog__title"], [1, "page-catalog__filters", 3, "filterItems"], [1, "spy-row"], [1, "spy-col-pull", "spy-col-lg-hidden", "spy-col-md-hidden", "spy-col-sm-hidden"], [1, "page-catalog__navigation"], [3, "items"], [1, "spy-col"], [1, "spy-row", "spy-row-align-col-flex-end"], ["class", "spy-col", 4, "ngIf"], [1, "spy-col-3", "spy-col-xl-hidden"], [3, "options", "value"], [3, "isSpinning"], [1, "page-catalog__list"], [1, "spy-row", "spy-row-gutter-lg", "spy-row-align-content-flex-end"], [4, "ngFor", "ngForOf"], ["color", "gray", 1, "page-catalog__applications-count"], ["class", "spy-col-4 spy-col-md-6 spy-col-sm-6 spy-col-gutter-lg", 4, "ngIf", "ngIfElse"], ["addBlockTmplRef", ""], [1, "spy-col-4", "spy-col-md-6", "spy-col-sm-6", "spy-col-gutter-lg"], [3, "app"], [1, "page-catalog__advertisement"], ["src", "/assets/img/ad1.png", "alt", "mapp", 1, "page-catalog__advertisement-image"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PageCatalogComponent_div_11_Template, 5, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, "HOME.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx.filterItems$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navigationItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spy-col-push-left-9", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.categoryOptions)("value", ctx.selectedCategoryIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSpinning", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, ctx.isAppsLoading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, ctx.apps$));
        }
      },
      directives: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"], _spryker_card__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _spryker_navigation__WEBPACK_IMPORTED_MODULE_9__["NavigationComposerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _spryker_select__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"], _spryker_spinner__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _spryker_chips__WEBPACK_IMPORTED_MODULE_13__["ChipsComponent"], _app_card_application_card_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationCardComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
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
