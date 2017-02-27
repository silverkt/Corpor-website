"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var mainboard_component_1 = require("./mainboard.component");
var mainboard_lv1_component_1 = require("./mainboard.lv1.component");
var energy_video_component_1 = require("./energy.video.component");
var energy_analysis_component_1 = require("./energy.analysis.component");
var energy_trend_component_1 = require("./energy.trend.component");
var energy_map_component_1 = require("./energy.map.component");
var energy_percentage_component_1 = require("./energy.percentage.component");
var mainboard_lv2_component_1 = require("./mainboard.lv2.component");
var energy_map_lv2_component_1 = require("./energy.map.lv2.component");
var test_component_1 = require("./test.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            mainboard_component_1.MainboardComponent,
            mainboard_lv1_component_1.Mainboardlv1Component,
            mainboard_lv2_component_1.Mainboardlv2Component,
            test_component_1.TestComponent,
            energy_video_component_1.EnergyvideoComponent,
            energy_analysis_component_1.EnergyanalysisComponent,
            energy_trend_component_1.EnergytrendComponent,
            energy_map_component_1.EnergymapComponent,
            energy_percentage_component_1.EnergypercentageComponent,
            energy_map_lv2_component_1.Energymaplv2Component
        ],
        bootstrap: [mainboard_component_1.MainboardComponent],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map