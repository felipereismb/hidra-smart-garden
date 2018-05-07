webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mqtt_service__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mqtt_service) {
        this.navCtrl = navCtrl;
        this.mqtt_service = mqtt_service;
        this.valores = {
            temp: "",
            umAr: "",
            umSolo: "",
            lumin: "",
        };
        this.valores['temp'] = "Não medido";
        this.valores['umAr'] = "Não medido";
        this.valores['umSolo'] = "Não medido";
        this.valores['lumin'] = "Não medido";
        this.iniciar();
    }
    HomePage.prototype.iniciar = function () {
        this.mqtt_service.conectar();
    };
    HomePage.prototype.irrigar = function () {
        this.mqtt_service.sendMessage("Funcao Irrigar");
    };
    HomePage.prototype.medirTemp = function () {
        // this.mqtt_service.sendMessage("1","REQUISICAO/TEMPERATURA/ST01");
        this.valores['temp'] = "25º C";
        console.log("medindo temp");
    };
    HomePage.prototype.medirUmidAr = function () {
        // this.mqtt_service.sendMessage("1","REQUISICAO/UMIDADE_AR/SUA01");
        this.valores['umAr'] = "Ameno";
        console.log("medindo umidade ar");
    };
    HomePage.prototype.medirUmidSolo = function () {
        // this.mqtt_service.sendMessage("1","REQUISICAO/UMIDADE_SOLO/SUS01");
        this.valores['umSolo'] = "Úmido";
        console.log("medindo umidade terra");
    };
    HomePage.prototype.medirLuminosidade = function () {
        // this.mqtt_service.sendMessage("1","REQUISICAO/LUMINOSIDADE/SL01");
        this.valores['lumin'] = "Alta";
        console.log("medindo luminosidade");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/felipe/Documentos/Hidra/HidraTest/src/pages/home/home.html"*/'<ion-content>\n  <button class="button-div" ion-button style="background: linear-gradient(45deg, #014c82 20%, #2d6f9e 80%);" (click)="medirUmidSolo()">\n    <div class="centered">\n      <img src="assets/img/water.svg" alt="" style="width: 50%;">\n      <p>Umidade do Solo</p>\n      <!-- <p class="valores">teste</p> -->\n      <p class="valores">{{valores.umSolo}}</p>\n    </div>\n  </button>\n  <button class="button-div" ion-button style="background: linear-gradient(45deg, #fdb43a 20%, #ffcb77 80%);" (click)="medirLuminosidade()">\n    <div class="centered">\n      <img src="assets/img/sol.svg" style="width: 50%;">\n      <p>Luminosidade</p>\n      <!-- <p class="valores">teste</p> -->\n      <p class="valores">{{valores.lumin}}</p>\n    </div>\n  </button>\n  <button class="button-div" ion-button style="background:  #0b756c" (click)="medirTemp()">\n    <div class="centered">\n      <img src="assets/img/thermometer.svg" style="width: 50%;">\n      <p>Temperatura</p>\n      <!-- <p class="valores">teste</p> -->\n      <p class="valores">{{valores.temp}}</p>\n    </div>\n  </button>\n  <button class="button-div" ion-button style="background:#858688" (click)="medirUmidAr()">\n    <div class="centered">\n      <img src="assets/img/wind.svg" style="width: 50%;">\n      <p>Umidade do Ar</p>\n      <!-- <p class="valores">teste</p> -->\n      <p class="valores">{{valores.umAr}}</p>\n    </div>\n  </button>\n  \n  <button class="button-personalizado" clear ion-button (click)="irrigar()">\n    <div class="centered">\n      <img src="assets/img/irrigation.svg" style="width: 25%;">\n\n    </div>\n  </button>\n  <!-- <button class="button-personalizado" clear ion-button (click)="acionarPersiana()">\n    <div class="centered">\n      <img src="assets/img/persiana.svg" style="width: 50%;">\n\n    </div>\n  </button> -->\n\n\n  <!--\n\n  #858688 // cinza\n  #858688 // verde\n  #363435 // cinza escuro\n  #0b756c // verde escuro\n  #2d6f9e // azul\n  #014c82 // azul escuro\n  #fdb43a // laranja\n  #ffcb77 // laranja claro\n\n  background: linear-gradient(45deg, #014c82 50%, #2d6f9e 50%); // Gradiente: Cores cortadas ao meio\n-->\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left color="royal">\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- <ion-buttons end>\n      <button ion-button icon-right color="royal" (click)="irParaCamera()">\n        <ion-icon ios="ios-videocam" md="md-videocam"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/felipe/Documentos/Hidra/HidraTest/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mqtt_service__["a" /* MqttService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__mqtt_service__["a" /* MqttService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/felipe/Documentos/Hidra/HidraTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/felipe/Documentos/Hidra/HidraTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MqttService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_mqtt_mqttws31__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_mqtt_mqttws31___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_mqtt_mqttws31__);

var MqttService = /** @class */ (function () {
    function MqttService() {
    }
    MqttService.prototype.conectar = function () {
        console.log("Entrou");
        this.client = new __WEBPACK_IMPORTED_MODULE_0_ng2_mqtt_mqttws31__["Paho"].MQTT.Client('192.168.5.101', 1884, 'Felipe');
        this.onMessage();
        this.onConnectionLost();
        this.client.connect({ onSuccess: this.onConnected.bind(this), onFailure: this.onFalha.bind(this) });
        console.log("Saiu");
    };
    MqttService.prototype.onConnected = function () {
        console.log("Connected: KD");
        this.client.subscribe("REQUISICAO/IRRIGAR");
        // this.sendMessage('Contrutor');
    };
    MqttService.prototype.onFalha = function () {
        console.log("Falhou");
    };
    MqttService.prototype.sendMessage = function (message) {
        var packet = new __WEBPACK_IMPORTED_MODULE_0_ng2_mqtt_mqttws31__["Paho"].MQTT.Message(message);
        packet.destinationName = "REQUISICAO/IRRIGAR";
        this.client.send(packet);
    };
    MqttService.prototype.onMessage = function () {
        this.client.onMessageArrived = function (message) {
            console.log('Message arrived : ' + message.payloadString);
        };
    };
    MqttService.prototype.onConnectionLost = function () {
        var _this = this;
        this.client.onConnectionLost = function (responseObject) {
            console.log('Connection lost : ' + JSON.stringify(responseObject));
            _this.client.connect({ onSuccess: _this.onConnected.bind(_this), onFailure: _this.onFalha.bind(_this) });
        };
    };
    return MqttService;
}());

//# sourceMappingURL=mqtt.service.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map