function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
    if (!it) {
        if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && typeof o.length === 'number')
        ) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return { done: true };
                    return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F,
            };
        }
        throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it['return'] != null) it['return']();
            } finally {
                if (didErr) throw err;
            }
        },
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['main'],
    {
        /***/
        '../frontend/app-store-catalog/$$_lazy_route_resource lazy recursive': function frontendAppStoreCatalog$$_lazy_route_resourceLazyRecursive(
            module,
            exports,
        ) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }

            webpackEmptyAsyncContext.keys = function () {
                return [];
            };

            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = '../frontend/app-store-catalog/$$_lazy_route_resource lazy recursive';
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/app-routing.module.ts': function frontendAppStoreCatalogSrcAppAppRoutingModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function () {
                return AppRoutingModule;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/router */
                '../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js',
            );

            var routes = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'catalog',
                },
                {
                    path: 'catalog',
                    loadChildren: function loadChildren() {
                        return Promise.all(
                            /*! import() | page-catalog-page-catalog-module */
                            [
                                __webpack_require__.e(
                                    'default~page-app-details-page-app-details-module~page-catalog-page-catalog-module',
                                ),
                                __webpack_require__.e('page-catalog-page-catalog-module'),
                            ],
                        )
                            .then(
                                __webpack_require__.bind(
                                    null,
                                    /*! ../page-catalog/page-catalog.module */
                                    '../frontend/app-store-catalog/src/page-catalog/page-catalog.module.ts',
                                ),
                            )
                            .then(function (m) {
                                return m.PageCatalogModule;
                            });
                    },
                },
                {
                    path: 'catalog/:id',
                    loadChildren: function loadChildren() {
                        return Promise.all(
                            /*! import() | page-app-details-page-app-details-module */
                            [
                                __webpack_require__.e(
                                    'default~page-app-details-page-app-details-module~page-catalog-page-catalog-module',
                                ),
                                __webpack_require__.e('page-app-details-page-app-details-module'),
                            ],
                        )
                            .then(
                                __webpack_require__.bind(
                                    null,
                                    /*! ../page-app-details/page-app-details.module */
                                    '../frontend/app-store-catalog/src/page-app-details/page-app-details.module.ts',
                                ),
                            )
                            .then(function (m) {
                                return m.PageAppDetailsModule;
                            });
                    },
                },
            ];

            var AppRoutingModule = function AppRoutingModule() {
                _classCallCheck(this, AppRoutingModule);
            };

            AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
                type: AppRoutingModule,
            });
            AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
                factory: function AppRoutingModule_Factory(t) {
                    return new (t || AppRoutingModule)();
                },
                imports: [
                    [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes)],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
                ],
            });

            (function () {
                (typeof ngJitMode === 'undefined' || ngJitMode) &&
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AppRoutingModule, {
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                    });
            })();

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    AppRoutingModule,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                            args: [
                                {
                                    imports: [
                                        _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes),
                                    ],
                                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                                },
                            ],
                        },
                    ],
                    null,
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/app.component.ts': function frontendAppStoreCatalogSrcAppAppComponentTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'AppComponent', function () {
                return AppComponent;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @ngx-translate/core */
                '../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js',
            );
            /* harmony import */

            var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../environments/environment */
                '../frontend/app-store-catalog/src/environments/environment.ts',
            );
            /* harmony import */

            var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/router */
                '../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js',
            );

            var AppComponent = /*#__PURE__*/ (function () {
                function AppComponent(translate) {
                    _classCallCheck(this, AppComponent);

                    this.translate = translate;
                }

                _createClass(AppComponent, [
                    {
                        key: 'ngOnInit',
                        value: function ngOnInit() {
                            this.translate.addLangs(['en', 'de']);
                            this.translate.setDefaultLang(
                                _environments_environment__WEBPACK_IMPORTED_MODULE_2__['environment'].language,
                            );
                            this.translate.use(this.translate.getDefaultLang());
                        },
                    },
                ]);

                return AppComponent;
            })();

            AppComponent.ɵfac = function AppComponent_Factory(t) {
                return new (t || AppComponent)(
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                    ),
                );
            };

            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
                type: AppComponent,
                selectors: [['app-root']],
                decls: 2,
                vars: 0,
                consts: [[1, 'app-store-container']],
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'router-outlet');

                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterOutlet']],
                encapsulation: 2,
                changeDetection: 0,
            });

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    AppComponent,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                            args: [
                                {
                                    selector: 'app-root',
                                    templateUrl: './app.component.html',
                                    changeDetection:
                                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewEncapsulation'].None,
                                },
                            ],
                        },
                    ],
                    function () {
                        return [
                            {
                                type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                            },
                        ];
                    },
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/app.module.ts': function frontendAppStoreCatalogSrcAppAppModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'swaggerConfigurationFactory', function () {
                return swaggerConfigurationFactory;
            });
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'AppModule', function () {
                return AppModule;
            });
            /* harmony import */

            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/platform-browser */
                '../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js',
            );
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./app-routing.module */
                '../frontend/app-store-catalog/src/app/app-routing.module.ts',
            );
            /* harmony import */

            var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./app.component */
                '../frontend/app-store-catalog/src/app/app.component.ts',
            );
            /* harmony import */

            var _swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ../../swagger */
                '../frontend/app-store-catalog/swagger/index.ts',
            );
            /* harmony import */

            var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! @angular/common/http */
                '../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js',
            );
            /* harmony import */

            var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! @angular/platform-browser/animations */
                '../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js',
            );
            /* harmony import */

            var _spryker_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                /*! @spryker/drawer */
                '../node_modules/@spryker/drawer/__ivy_ngcc__/fesm2015/spryker-drawer.js',
            );
            /* harmony import */

            var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                /*! @ngx-translate/core */
                '../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js',
            );
            /* harmony import */

            var _spryker_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                /*! @spryker/notification */
                '../node_modules/@spryker/notification/__ivy_ngcc__/fesm2015/spryker-notification.js',
            );
            /* harmony import */

            var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                /*! ../environments/environment */
                '../frontend/app-store-catalog/src/environments/environment.ts',
            );
            /* harmony import */

            var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
                /*! @angular/common */
                '../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js',
            );
            /* harmony import */

            var _cors_allow_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
                /*! ./cors-allow.interceptor */
                '../frontend/app-store-catalog/src/app/cors-allow.interceptor.ts',
            );
            /* harmony import */

            var _translation_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
                /*! ./translation-loader.service */
                '../frontend/app-store-catalog/src/app/translation-loader.service.ts',
            );

            if (window['catalogSpaOptions']) {
                var catalogSpaOptions = window['catalogSpaOptions'];

                if (catalogSpaOptions.tenantId) {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_10__['environment'].tenantId =
                        catalogSpaOptions.tenantId;
                }

                if (catalogSpaOptions.tenantDomain) {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_10__['environment'].tenantDomain =
                        catalogSpaOptions.tenantDomain;
                }

                if (catalogSpaOptions.language) {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_10__['environment'].language =
                        catalogSpaOptions.language;
                }

                if (catalogSpaOptions.apiUrl) {
                    _environments_environment__WEBPACK_IMPORTED_MODULE_10__['environment'].apiUrl =
                        catalogSpaOptions.apiUrl;
                }
            }

            function swaggerConfigurationFactory() {
                return new _swagger__WEBPACK_IMPORTED_MODULE_4__['Configuration']({
                    basePath: _environments_environment__WEBPACK_IMPORTED_MODULE_10__['environment'].apiUrl,
                });
            }

            var AppModule = function AppModule() {
                _classCallCheck(this, AppModule);
            };

            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
                type: AppModule,
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__['AppComponent']],
            });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
                factory: function AppModule_Factory(t) {
                    return new (t || AppModule)();
                },
                providers: [
                    {
                        provide: _swagger__WEBPACK_IMPORTED_MODULE_4__['Configuration'],
                        useFactory: swaggerConfigurationFactory,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HTTP_INTERCEPTORS'],
                        useClass: _cors_allow_interceptor__WEBPACK_IMPORTED_MODULE_12__['CorsAllowInterceptor'],
                        multi: true,
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__['LocationStrategy'],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__['HashLocationStrategy'],
                    },
                ],
                imports: [
                    [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__['BrowserAnimationsModule'],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__['AppRoutingModule'],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClientModule'],
                        _swagger__WEBPACK_IMPORTED_MODULE_4__['ApiModule'],
                        _spryker_drawer__WEBPACK_IMPORTED_MODULE_7__['DrawerModule'],
                        _spryker_notification__WEBPACK_IMPORTED_MODULE_9__['NotificationModule'].forRoot(),
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__['TranslateModule'].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__['TranslateLoader'],
                                useClass:
                                    _translation_loader_service__WEBPACK_IMPORTED_MODULE_13__[
                                        'TranslationLoaderService'
                                    ],
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']],
                            },
                        }),
                    ],
                ],
            });

            (function () {
                (typeof ngJitMode === 'undefined' || ngJitMode) &&
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](AppModule, {
                        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__['AppComponent']],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__[
                                'BrowserAnimationsModule'
                            ],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__['AppRoutingModule'],
                            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClientModule'],
                            _swagger__WEBPACK_IMPORTED_MODULE_4__['ApiModule'],
                            _spryker_drawer__WEBPACK_IMPORTED_MODULE_7__['DrawerModule'],
                            _spryker_notification__WEBPACK_IMPORTED_MODULE_9__['NotificationModule'],
                            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__['TranslateModule'],
                        ],
                    });
            })();

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
                    AppModule,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                            args: [
                                {
                                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__['AppComponent']],
                                    imports: [
                                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__[
                                            'BrowserAnimationsModule'
                                        ],
                                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__['AppRoutingModule'],
                                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClientModule'],
                                        _swagger__WEBPACK_IMPORTED_MODULE_4__['ApiModule'],
                                        _spryker_drawer__WEBPACK_IMPORTED_MODULE_7__['DrawerModule'],
                                        _spryker_notification__WEBPACK_IMPORTED_MODULE_9__[
                                            'NotificationModule'
                                        ].forRoot(),
                                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__['TranslateModule'].forRoot({
                                            loader: {
                                                provide:
                                                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__['TranslateLoader'],
                                                useClass:
                                                    _translation_loader_service__WEBPACK_IMPORTED_MODULE_13__[
                                                        'TranslationLoaderService'
                                                    ],
                                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']],
                                            },
                                        }),
                                    ],
                                    providers: [
                                        {
                                            provide: _swagger__WEBPACK_IMPORTED_MODULE_4__['Configuration'],
                                            useFactory: swaggerConfigurationFactory,
                                        },
                                        {
                                            provide:
                                                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HTTP_INTERCEPTORS'],
                                            useClass:
                                                _cors_allow_interceptor__WEBPACK_IMPORTED_MODULE_12__[
                                                    'CorsAllowInterceptor'
                                                ],
                                            multi: true,
                                        },
                                        {
                                            provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__['LocationStrategy'],
                                            useClass:
                                                _angular_common__WEBPACK_IMPORTED_MODULE_11__['HashLocationStrategy'],
                                        },
                                    ],
                                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__['AppComponent']],
                                },
                            ],
                        },
                    ],
                    null,
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/cors-allow.interceptor.ts': function frontendAppStoreCatalogSrcAppCorsAllowInterceptorTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'CorsAllowInterceptor', function () {
                return CorsAllowInterceptor;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );

            var CorsAllowInterceptor = /*#__PURE__*/ (function () {
                function CorsAllowInterceptor() {
                    _classCallCheck(this, CorsAllowInterceptor);
                }

                _createClass(CorsAllowInterceptor, [
                    {
                        key: 'intercept',
                        value: function intercept(request, next) {
                            request.headers.set('access-control-allow-origin', '*');
                            return next.handle(request);
                        },
                    },
                ]);

                return CorsAllowInterceptor;
            })();

            CorsAllowInterceptor.ɵfac = function CorsAllowInterceptor_Factory(t) {
                return new (t || CorsAllowInterceptor)();
            };

            CorsAllowInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
                token: CorsAllowInterceptor,
                factory: CorsAllowInterceptor.ɵfac,
            });

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    CorsAllowInterceptor,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                        },
                    ],
                    null,
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/i18n/de.ts': function frontendAppStoreCatalogSrcAppI18nDeTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'de', function () {
                return de;
            });

            var de = {
                HOME: {
                    TITLE: 'App-Store-Katalog',
                    APPLICATIONS_COUNT_TEXT: 'anwendungen',
                    FILTERS: {
                        NEW: 'Neu',
                        POPULAR: 'Beliebt',
                        GOLD_PARTNER: 'Goldpartner',
                        SILVER_PARTNER: 'Silverpartner',
                    },
                },
                CONNECTED_BADGE: {
                    CONNECTION_PENDING: 'Verbindung ausstehend',
                    CONNECTED: 'Verbunden',
                },
                DETAILS: {
                    BACK_TO_CATALOG: 'Zurück zum Katalog',
                    BY: 'von',
                    CONNECT: 'Verbinden',
                    CONFIGURE: 'Konfigurieren',
                    DISCONNECT: 'Trennen',
                    OVERVIEW: 'Überblick',
                    DESCRIPTION: 'Beschreibung',
                    FEATURES: 'Merkmale',
                    HOW_IT_WORKS: 'So funktioniert es mit Spryker',
                    LEGAL: 'Rechtliches',
                    RESOURCES: 'Ressourcen',
                    CONNECT_NOTIFICATION: {
                        TITLE: 'Verbinden',
                        DESCRIPTION: 'Anwendung wurde erfolgreich verbunden.',
                    },
                    DISCONNECT_NOTIFICATION: {
                        TITLE: 'Getrennt',
                        DESCRIPTION: 'Anwendung wurde erfolgreich getrennt.',
                    },
                },
                CONFIGURATION: {
                    SAVE: 'Senden',
                    SAVE_NOTIFICATION: {
                        TITLE: 'Konfigurieren',
                        DESCRIPTION: 'Konfiguration wurde erfolgreich gespeichert.',
                    },
                },
            };
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/i18n/en.ts': function frontendAppStoreCatalogSrcAppI18nEnTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'en', function () {
                return en;
            });

            var en = {
                HOME: {
                    TITLE: 'App Store Catalog',
                    APPLICATIONS_COUNT_TEXT: 'applications',
                    FILTERS: {
                        NEW: 'New',
                        POPULAR: 'Popular',
                        GOLD_PARTNER: 'Gold partner',
                        SILVER_PARTNER: 'Silver partner',
                    },
                },
                CONNECTED_BADGE: {
                    CONNECTION_PENDING: 'Connection pending',
                    CONNECTED: 'Connected',
                },
                DETAILS: {
                    BACK_TO_CATALOG: 'Back to catalog',
                    BY: 'by',
                    CONNECT: 'Connect app',
                    CONFIGURE: 'Configure',
                    DISCONNECT: 'Disconnect',
                    OVERVIEW: 'Overview',
                    DESCRIPTION: 'Description',
                    FEATURES: 'Features',
                    HOW_IT_WORKS: 'How it works with Spryker',
                    LEGAL: 'Legal',
                    RESOURCES: 'Resources',
                    CONNECT_NOTIFICATION: {
                        TITLE: 'Connected',
                        DESCRIPTION: 'Application has been connected successfully.',
                    },
                    DISCONNECT_NOTIFICATION: {
                        TITLE: 'Disconnected',
                        DESCRIPTION: 'Application has been disconnected successfully.',
                    },
                },
                CONFIGURATION: {
                    SAVE: 'Save',
                    SAVE_NOTIFICATION: {
                        TITLE: 'Configuration',
                        DESCRIPTION: 'Configuration has been saved successfully.',
                    },
                },
            };
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/i18n/index.ts': function frontendAppStoreCatalogSrcAppI18nIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony import */

            var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./en */
                '../frontend/app-store-catalog/src/app/i18n/en.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'en', function () {
                return _en__WEBPACK_IMPORTED_MODULE_0__['en'];
            });
            /* harmony import */

            var _de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./de */
                '../frontend/app-store-catalog/src/app/i18n/de.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'de', function () {
                return _de__WEBPACK_IMPORTED_MODULE_1__['de'];
            });
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/app/translation-loader.service.ts': function frontendAppStoreCatalogSrcAppTranslationLoaderServiceTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'TranslationLoaderService', function () {
                return TranslationLoaderService;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./i18n */
                '../frontend/app-store-catalog/src/app/i18n/index.ts',
            );
            /* harmony import */

            var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! rxjs */
                '../node_modules/rxjs/_esm2015/index.js',
            );

            var TranslationLoaderService = /*#__PURE__*/ (function () {
                function TranslationLoaderService() {
                    _classCallCheck(this, TranslationLoaderService);
                }

                _createClass(TranslationLoaderService, [
                    {
                        key: 'getTranslation',
                        value: function getTranslation(lang) {
                            if (lang === 'en') {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])(
                                    _i18n__WEBPACK_IMPORTED_MODULE_1__['en'],
                                );
                            }

                            if (lang === 'de') {
                                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])(
                                    _i18n__WEBPACK_IMPORTED_MODULE_1__['de'],
                                );
                            }

                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])('{}');
                        },
                    },
                ]);

                return TranslationLoaderService;
            })();

            TranslationLoaderService.ɵfac = function TranslationLoaderService_Factory(t) {
                return new (t || TranslationLoaderService)();
            };

            TranslationLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
                token: TranslationLoaderService,
                factory: TranslationLoaderService.ɵfac,
            });

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    TranslationLoaderService,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                        },
                    ],
                    null,
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/environments/environment.ts': function frontendAppStoreCatalogSrcEnvironmentsEnvironmentTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'environment', function () {
                return environment;
            });

            var environment = {
                production: false,
                tenantId: 'X',
                apiUrl: 'https://glue.trs.demo-spryker.com',
                language: 'en',
                tenantDomain: 'http://backoffice.de.spryker.local/',
            };
            /***/
        },

        /***/
        '../frontend/app-store-catalog/src/main.ts': function frontendAppStoreCatalogSrcMainTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./environments/environment */
                '../frontend/app-store-catalog/src/environments/environment.ts',
            );
            /* harmony import */

            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./app/app.module */
                '../frontend/app-store-catalog/src/app/app.module.ts',
            );
            /* harmony import */

            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! @angular/platform-browser */
                '../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js',
            );

            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
            }

            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
                .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
                ['catch'](function (err) {
                    return console.error(err);
                });
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/api.module.ts': function frontendAppStoreCatalogSwaggerApiModuleTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'ApiModule', function () {
                return ApiModule;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./configuration */
                '../frontend/app-store-catalog/swagger/configuration.ts',
            );
            /* harmony import */

            var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! @angular/common/http */
                '../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js',
            );
            /* harmony import */

            var _api_default_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./api/default.service */
                '../frontend/app-store-catalog/swagger/api/default.service.ts',
            );

            var ApiModule = /*#__PURE__*/ (function () {
                function ApiModule(parentModule, http) {
                    _classCallCheck(this, ApiModule);

                    if (parentModule) {
                        throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
                    }

                    if (!http) {
                        throw new Error(
                            'You need to import the HttpClientModule in your AppModule! \n' +
                                'See also https://github.com/angular/angular/issues/20575',
                        );
                    }
                }

                _createClass(ApiModule, null, [
                    {
                        key: 'forRoot',
                        value: function forRoot(configurationFactory) {
                            return {
                                ngModule: ApiModule,
                                providers: [
                                    {
                                        provide: _configuration__WEBPACK_IMPORTED_MODULE_1__['Configuration'],
                                        useFactory: configurationFactory,
                                    },
                                ],
                            };
                        },
                    },
                ]);

                return ApiModule;
            })();

            ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
                type: ApiModule,
            });
            ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
                factory: function ApiModule_Factory(t) {
                    return new (t || ApiModule)(
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](ApiModule, 12),
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
                            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClient'],
                            8,
                        ),
                    );
                },
                providers: [_api_default_service__WEBPACK_IMPORTED_MODULE_3__['DefaultService']],
                imports: [[]],
            });

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    ApiModule,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                            args: [
                                {
                                    imports: [],
                                    declarations: [],
                                    exports: [],
                                    providers: [_api_default_service__WEBPACK_IMPORTED_MODULE_3__['DefaultService']],
                                },
                            ],
                        },
                    ],
                    function () {
                        return [
                            {
                                type: ApiModule,
                                decorators: [
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'],
                                    },
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['SkipSelf'],
                                    },
                                ],
                            },
                            {
                                type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClient'],
                                decorators: [
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'],
                                    },
                                ],
                            },
                        ];
                    },
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/api/api.ts': function frontendAppStoreCatalogSwaggerApiApiTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'APIS', function () {
                return APIS;
            });
            /* harmony import */

            var _default_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./default.service */
                '../frontend/app-store-catalog/swagger/api/default.service.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'DefaultService', function () {
                return _default_service__WEBPACK_IMPORTED_MODULE_0__['DefaultService'];
            });

            var APIS = [_default_service__WEBPACK_IMPORTED_MODULE_0__['DefaultService']];
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/api/default.service.ts': function frontendAppStoreCatalogSwaggerApiDefaultServiceTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'DefaultService', function () {
                return DefaultService;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );
            /* harmony import */

            var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @angular/common/http */
                '../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js',
            );
            /* harmony import */

            var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ../variables */
                '../frontend/app-store-catalog/swagger/variables.ts',
            );
            /* harmony import */

            var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ../configuration */
                '../frontend/app-store-catalog/swagger/configuration.ts',
            );

            var DefaultService = /*#__PURE__*/ (function () {
                function DefaultService(httpClient, basePath, configuration) {
                    _classCallCheck(this, DefaultService);

                    this.httpClient = httpClient;
                    this.basePath = 'https://apps.spryker.com';
                    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpHeaders']();
                    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__['Configuration']();

                    if (basePath) {
                        this.basePath = basePath;
                    }

                    if (configuration) {
                        this.configuration = configuration;
                        this.basePath = basePath || configuration.basePath || this.basePath;
                    }
                }

                _createClass(DefaultService, [
                    {
                        key: 'canConsumeForm',
                        value: function canConsumeForm(consumes) {
                            var form = 'multipart/form-data';

                            var _iterator = _createForOfIteratorHelper(consumes),
                                _step;

                            try {
                                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                    var consume = _step.value;

                                    if (form === consume) {
                                        return true;
                                    }
                                }
                            } catch (err) {
                                _iterator.e(err);
                            } finally {
                                _iterator.f();
                            }

                            return false;
                        },
                    },
                    {
                        key: 'appsAppIdConfigurationGet',
                        value: function appsAppIdConfigurationGet(appId, xTenantId, acceptLanguage) {
                            var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
                            var reportProgress =
                                arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                            if (appId === null || appId === undefined) {
                                throw new Error(
                                    'Required parameter appId was null or undefined when calling appsAppIdConfigurationGet.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsAppIdConfigurationGet.',
                                );
                            }

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsAppIdConfigurationGet.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = [];
                            return this.httpClient.request(
                                'get',
                                ''
                                    .concat(this.basePath, '/apps/')
                                    .concat(encodeURIComponent(String(appId)), '/configuration'),
                                {
                                    withCredentials: this.configuration.withCredentials,
                                    headers: headers,
                                    observe: observe,
                                    reportProgress: reportProgress,
                                },
                            );
                        },
                    },
                    {
                        key: 'appsAppIdConfigurationPost',
                        value: function appsAppIdConfigurationPost(body, xTenantId, acceptLanguage, appId) {
                            var observe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'body';
                            var reportProgress =
                                arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

                            if (body === null || body === undefined) {
                                throw new Error(
                                    'Required parameter body was null or undefined when calling appsAppIdConfigurationPost.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsAppIdConfigurationPost.',
                                );
                            }

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsAppIdConfigurationPost.',
                                );
                            }

                            if (appId === null || appId === undefined) {
                                throw new Error(
                                    'Required parameter appId was null or undefined when calling appsAppIdConfigurationPost.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = ['application/json'];
                            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

                            if (httpContentTypeSelected != undefined) {
                                headers = headers.set('Content-Type', httpContentTypeSelected);
                            }

                            return this.httpClient.request(
                                'post',
                                ''
                                    .concat(this.basePath, '/apps/')
                                    .concat(encodeURIComponent(String(appId)), '/configuration'),
                                {
                                    body: body,
                                    withCredentials: this.configuration.withCredentials,
                                    headers: headers,
                                    observe: observe,
                                    reportProgress: reportProgress,
                                },
                            );
                        },
                    },
                    {
                        key: 'appsAppIdConnectPost',
                        value: function appsAppIdConnectPost(body, xTenantId, acceptLanguage, appId) {
                            var observe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'body';
                            var reportProgress =
                                arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

                            if (body === null || body === undefined) {
                                throw new Error(
                                    'Required parameter body was null or undefined when calling appsAppIdConnectPost.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsAppIdConnectPost.',
                                );
                            }

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsAppIdConnectPost.',
                                );
                            }

                            if (appId === null || appId === undefined) {
                                throw new Error(
                                    'Required parameter appId was null or undefined when calling appsAppIdConnectPost.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = ['application/json'];
                            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

                            if (httpContentTypeSelected != undefined) {
                                headers = headers.set('Content-Type', httpContentTypeSelected);
                            }

                            return this.httpClient.request(
                                'post',
                                ''
                                    .concat(this.basePath, '/apps/')
                                    .concat(encodeURIComponent(String(appId)), '/connect'),
                                {
                                    body: body,
                                    withCredentials: this.configuration.withCredentials,
                                    headers: headers,
                                    observe: observe,
                                    reportProgress: reportProgress,
                                },
                            );
                        },
                    },
                    {
                        key: 'appsAppIdDisconnectPost',
                        value: function appsAppIdDisconnectPost(body, xTenantId, acceptLanguage, appId) {
                            var observe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'body';
                            var reportProgress =
                                arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

                            if (body === null || body === undefined) {
                                throw new Error(
                                    'Required parameter body was null or undefined when calling appsAppIdDisconnectPost.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsAppIdDisconnectPost.',
                                );
                            }

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsAppIdDisconnectPost.',
                                );
                            }

                            if (appId === null || appId === undefined) {
                                throw new Error(
                                    'Required parameter appId was null or undefined when calling appsAppIdDisconnectPost.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = ['application/json'];
                            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

                            if (httpContentTypeSelected != undefined) {
                                headers = headers.set('Content-Type', httpContentTypeSelected);
                            }

                            return this.httpClient.request(
                                'post',
                                ''
                                    .concat(this.basePath, '/apps/')
                                    .concat(encodeURIComponent(String(appId)), '/disconnect'),
                                {
                                    body: body,
                                    withCredentials: this.configuration.withCredentials,
                                    headers: headers,
                                    observe: observe,
                                    reportProgress: reportProgress,
                                },
                            );
                        },
                    },
                    {
                        key: 'appsAppIdGet',
                        value: function appsAppIdGet(appId, acceptLanguage, xTenantId) {
                            var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
                            var reportProgress =
                                arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                            if (appId === null || appId === undefined) {
                                throw new Error(
                                    'Required parameter appId was null or undefined when calling appsAppIdGet.',
                                );
                            }

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsAppIdGet.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsAppIdGet.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = [];
                            return this.httpClient.request(
                                'get',
                                ''.concat(this.basePath, '/apps/').concat(encodeURIComponent(String(appId))),
                                {
                                    withCredentials: this.configuration.withCredentials,
                                    headers: headers,
                                    observe: observe,
                                    reportProgress: reportProgress,
                                },
                            );
                        },
                    },
                    {
                        key: 'appsGet',
                        value: function appsGet(acceptLanguage, xTenantId) {
                            var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
                            var reportProgress =
                                arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                            if (acceptLanguage === null || acceptLanguage === undefined) {
                                throw new Error(
                                    'Required parameter acceptLanguage was null or undefined when calling appsGet.',
                                );
                            }

                            if (xTenantId === null || xTenantId === undefined) {
                                throw new Error(
                                    'Required parameter xTenantId was null or undefined when calling appsGet.',
                                );
                            }

                            var headers = this.defaultHeaders;

                            if (acceptLanguage !== undefined && acceptLanguage !== null) {
                                headers = headers.set('Accept-Language', String(acceptLanguage));
                            }

                            if (xTenantId !== undefined && xTenantId !== null) {
                                headers = headers.set('x-tenant-id', String(xTenantId));
                            }

                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = [];
                            return this.httpClient.request('get', ''.concat(this.basePath, '/apps'), {
                                withCredentials: this.configuration.withCredentials,
                                headers: headers,
                                observe: observe,
                                reportProgress: reportProgress,
                            });
                        },
                    },
                    {
                        key: 'appsPost',
                        value: function appsPost(body) {
                            var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
                            var reportProgress =
                                arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                            if (body === null || body === undefined) {
                                throw new Error('Required parameter body was null or undefined when calling appsPost.');
                            }

                            var headers = this.defaultHeaders;
                            var httpHeaderAccepts = ['application/json'];
                            var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

                            if (httpHeaderAcceptSelected != undefined) {
                                headers = headers.set('Accept', httpHeaderAcceptSelected);
                            }

                            var consumes = ['application/json'];
                            var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

                            if (httpContentTypeSelected != undefined) {
                                headers = headers.set('Content-Type', httpContentTypeSelected);
                            }

                            return this.httpClient.request('post', ''.concat(this.basePath, '/apps'), {
                                body: body,
                                withCredentials: this.configuration.withCredentials,
                                headers: headers,
                                observe: observe,
                                reportProgress: reportProgress,
                            });
                        },
                    },
                ]);

                return DefaultService;
            })();

            DefaultService.ɵfac = function DefaultService_Factory(t) {
                return new (t || DefaultService)(
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
                    ),
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
                        _variables__WEBPACK_IMPORTED_MODULE_2__['BASE_PATH'],
                        8,
                    ),
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
                        _configuration__WEBPACK_IMPORTED_MODULE_3__['Configuration'],
                        8,
                    ),
                );
            };

            DefaultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
                token: DefaultService,
                factory: DefaultService.ɵfac,
            });

            (function () {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                    DefaultService,
                    [
                        {
                            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                        },
                    ],
                    function () {
                        return [
                            {
                                type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
                            },
                            {
                                type: undefined,
                                decorators: [
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'],
                                    },
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'],
                                        args: [_variables__WEBPACK_IMPORTED_MODULE_2__['BASE_PATH']],
                                    },
                                ],
                            },
                            {
                                type: _configuration__WEBPACK_IMPORTED_MODULE_3__['Configuration'],
                                decorators: [
                                    {
                                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'],
                                    },
                                ],
                            },
                        ];
                    },
                    null,
                );
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/configuration.ts': function frontendAppStoreCatalogSwaggerConfigurationTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'Configuration', function () {
                return Configuration;
            });

            var Configuration = /*#__PURE__*/ (function () {
                function Configuration() {
                    var configurationParameters =
                        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, Configuration);

                    this.apiKeys = configurationParameters.apiKeys;
                    this.username = configurationParameters.username;
                    this.password = configurationParameters.password;
                    this.accessToken = configurationParameters.accessToken;
                    this.basePath = configurationParameters.basePath;
                    this.withCredentials = configurationParameters.withCredentials;
                }

                _createClass(Configuration, [
                    {
                        key: 'selectHeaderContentType',
                        value: function selectHeaderContentType(contentTypes) {
                            var _this = this;

                            if (contentTypes.length == 0) {
                                return undefined;
                            }

                            var type = contentTypes.find(function (x) {
                                return _this.isJsonMime(x);
                            });

                            if (type === undefined) {
                                return contentTypes[0];
                            }

                            return type;
                        },
                    },
                    {
                        key: 'selectHeaderAccept',
                        value: function selectHeaderAccept(accepts) {
                            var _this2 = this;

                            if (accepts.length == 0) {
                                return undefined;
                            }

                            var type = accepts.find(function (x) {
                                return _this2.isJsonMime(x);
                            });

                            if (type === undefined) {
                                return accepts[0];
                            }

                            return type;
                        },
                    },
                    {
                        key: 'isJsonMime',
                        value: function isJsonMime(mime) {
                            var jsonMime = new RegExp(
                                '^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$',
                                'i',
                            );
                            return (
                                mime != null &&
                                (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json')
                            );
                        },
                    },
                ]);

                return Configuration;
            })();
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/index.ts': function frontendAppStoreCatalogSwaggerIndexTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony import */

            var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./api/api */
                '../frontend/app-store-catalog/swagger/api/api.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'DefaultService', function () {
                return _api_api__WEBPACK_IMPORTED_MODULE_0__['DefaultService'];
            });
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'APIS', function () {
                return _api_api__WEBPACK_IMPORTED_MODULE_0__['APIS'];
            });
            /* harmony import */

            var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! ./model/models */
                '../frontend/app-store-catalog/swagger/model/models.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'ConnectionStatus', function () {
                return _model_models__WEBPACK_IMPORTED_MODULE_1__['ConnectionStatus'];
            });
            /* harmony import */

            var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! ./variables */
                '../frontend/app-store-catalog/swagger/variables.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'BASE_PATH', function () {
                return _variables__WEBPACK_IMPORTED_MODULE_2__['BASE_PATH'];
            });
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'COLLECTION_FORMATS', function () {
                return _variables__WEBPACK_IMPORTED_MODULE_2__['COLLECTION_FORMATS'];
            });
            /* harmony import */

            var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! ./configuration */
                '../frontend/app-store-catalog/swagger/configuration.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'Configuration', function () {
                return _configuration__WEBPACK_IMPORTED_MODULE_3__['Configuration'];
            });
            /* harmony import */

            var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! ./api.module */
                '../frontend/app-store-catalog/swagger/api.module.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'ApiModule', function () {
                return _api_module__WEBPACK_IMPORTED_MODULE_4__['ApiModule'];
            });
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/model/connectionStatus.ts': function frontendAppStoreCatalogSwaggerModelConnectionStatusTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'ConnectionStatus', function () {
                return ConnectionStatus;
            });

            var ConnectionStatus = {
                NotConnected: 'not connected',
                Disconnected: 'disconnected',
                ConnectionPending: 'connection pending',
                WaitingForConfiguration: 'waiting for configuration',
                Connected: 'connected',
            };
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/model/models.ts': function frontendAppStoreCatalogSwaggerModelModelsTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony import */

            var _connectionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./connectionStatus */
                '../frontend/app-store-catalog/swagger/model/connectionStatus.ts',
            );
            /* harmony reexport (safe) */

            __webpack_require__.d(__webpack_exports__, 'ConnectionStatus', function () {
                return _connectionStatus__WEBPACK_IMPORTED_MODULE_0__['ConnectionStatus'];
            });
            /***/
        },

        /***/
        '../frontend/app-store-catalog/swagger/variables.ts': function frontendAppStoreCatalogSwaggerVariablesTs(
            module,
            __webpack_exports__,
            __webpack_require__,
        ) {
            'use strict';

            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'BASE_PATH', function () {
                return BASE_PATH;
            });
            /* harmony export (binding) */

            __webpack_require__.d(__webpack_exports__, 'COLLECTION_FORMATS', function () {
                return COLLECTION_FORMATS;
            });
            /* harmony import */

            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @angular/core */
                '../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
            );

            var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['InjectionToken']('basePath');
            var COLLECTION_FORMATS = {
                csv: ',',
                tsv: '   ',
                ssv: ' ',
                pipes: '|',
            };
            /***/
        },

        /***/
        0: function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
                /*! /Users/rustemzakiev/PhpstormProjects/spryker/suite-nonsplit/registry-service/frontend/app-store-catalog/src/main.ts */
                '../frontend/app-store-catalog/src/main.ts',
            );
            /***/
        },
    },
    [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main-es5.js.map
