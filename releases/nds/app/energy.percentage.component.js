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
var EnergypercentageComponent = (function () {
    function EnergypercentageComponent() {
        this.title = "效率概览";
    }
    return EnergypercentageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EnergypercentageComponent.prototype, "scope", void 0);
EnergypercentageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'energy-percentage',
        template: "\n               <div class =\"energy-title\">{{title}}</div>\n               <div  id=\"energy-percentage\">\n                    <div class=\"col-md-6\">\n                        <div id=\"energy-percentage-all\">\n                            <div class=\"col-md-4\" style=\"font-size:16px;padding-top:15px;font-weight:bold;\">\u7EFC\u5408\u80FD\u6E90\u5229\u7528\u7387</div><div class=\"col-md-4\" style=\"font-size:50px;font-weight:bold;color:#4caead;\">75%</div><div class=\"col-md-4\">1</div>\n                            <div class=\"col-md-12\"><div style=\"padding-top:8px;font-size:10px;\">\u603B\u80FD\u6E90\u8F93\u5165:12436Wh  \u603B\u80FD\u6E90\u8F93\u51FA:12236Wh</div></div>\n                        </div>\n                        <div id=\"energy-percentage-co2\">\n                            <div class=\"col-md-4\" style=\"font-size:16px;padding-top:15px;font-weight:bold;\">CO2\u51CF\u6392\u7387</div><div class=\"col-md-4\" style=\"font-size:50px;font-weight:bold;color:#4caead;\">85%</div><div class=\"col-md-4\">1</div>\n                            <div class=\"col-md-12\"><div style=\"padding-top:3px;font-size:10px;line-height:13px;\">\u5236\u51B7/\u70ED\u91CF:1243Wh  \u989D\u5B9A\u5236\u51B7/\u70ED\u91CF:1223Wh<br>\u53D1\u7535\u91CF:1243Wh  \u989D\u5B9A\u53D1\u7535\u91CF:1223Wh</div></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div id=\"energy-percentage-all\">\n                            <div class=\"col-md-4\" style=\"font-size:16px;padding-top:15px;font-weight:bold;\">\u8282\u80FD\u7387</div><div class=\"col-md-4\" style=\"font-size:50px;font-weight:bold;color:#4caead;\">40%</div><div class=\"col-md-4\">1</div>\n                            <div class=\"col-md-12\"><div style=\"padding-top:8px;font-size:10px;\">\u5929\u7136\u6C14:1243Wh  \u53EF\u518D\u751F\u80FD\u6E90:1223Wh</div></div>\n                        </div>\n                        <div id=\"energy-percentage-co2\">\n                            <div class=\"col-md-4\" style=\"font-size:16px;padding-top:15px;font-weight:bold;\">\u7EFC\u5408\u80FD\u6E90\u5229\u7528\u7387</div><div class=\"col-md-4\" style=\"font-size:50px;font-weight:bold;color:#4caead;\">75%</div><div class=\"col-md-4\">1</div>\n                            <div class=\"col-md-12\"><div style=\"padding-top:8px;font-size:10px;\">\u603B\u80FD\u6E90\u8F93\u5165:1243Wh  \u603B\u80FD\u6E90\u8F93\u51FA:1223Wh</div></div>\n                        </div>\n                    </div>\n               </div>\n               ",
        styles: ["\n\n         .energy-title {\n            height: 50px;\n            background-color: #003654;\n            color: #FFFFFF; \n            text-align: center;\n            padding: 10px;\n            font-size: 28px;\n            font-weight: bold;\n         }\n         #energy-percentage {\n              padding-top:10px;\n              height:180px;\n              background-color: #003654;              \n          }\n\n          #energy-percentage-all {\n              height:110px;\n              background-color: #FFFFFF;\n          }\n          #energy-percentage-all>.col-md-4 {\n              height:80px;\n              background-color: #024272;\n              color: #fff;\n          }\n\n           #energy-percentage-co2 {\n              height:110px;\n              background-color: #FFFFFF;\n          }\n          #energy-percentage-co2>.col-md-4 {\n              height:80px;\n              background-color: #024272;\n              color: #fff;\n          }\n    "]
    }),
    __metadata("design:paramtypes", [])
], EnergypercentageComponent);
exports.EnergypercentageComponent = EnergypercentageComponent;
//# sourceMappingURL=energy.percentage.component.js.map