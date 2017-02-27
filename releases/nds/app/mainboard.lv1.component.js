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
var Mainboardlv1Component = (function () {
    function Mainboardlv1Component() {
        this.title = 'Tour of Heroes';
    }
    return Mainboardlv1Component;
}());
Mainboardlv1Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main-board',
        template: "  \n<div class=\"container-fluid\">\n    <div class=\"row\">\n              <div class=\"col-md-4\" style=\"background-color: black;\"><div class=\"row mainCol\">\n                    <energy-video></energy-video>\n                    <energy-analysis></energy-analysis>\n                    <energy-trend></energy-trend>\n              </div></div>\n              <div class=\"col-md-4\"><div class=\"row mainCol\">\n                    <energy-map></energy-map>\n                    <div  id=\"energy-structure\"></div>                  \n              </div></div>\n              <div class=\"col-md-4\" style=\"background-color: black; \"><div class=\"row mainCol\">                    \n                    <energy-percentage [scope]=\"'\u5168\u56FD'\"></energy-percentage>\n                    <div  id=\"energy-plan\"></div>\n                    <div  id=\"energy-rank\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-4\"  style=\"background-color: black;\">121212</div>\n                        <div class=\"col-md-4\"></div>\n                    </div>   \n              </div></div>\n    </div>      \n</div>\n    ",
        styles: ["\n              .mainCol{              \n              height: 1079px;\n          }      \n          #energy-structure{\n              height:539px;\n              background-color: #003654;\n          }\n          #energy-plan {\n              height:310px;\n              background-color: #003654;\n          }\n          #energy-rank {\n              height:539px;\n              background-color: #024272;\n          }\n    "],
    }),
    __metadata("design:paramtypes", [])
], Mainboardlv1Component);
exports.Mainboardlv1Component = Mainboardlv1Component;
//# sourceMappingURL=mainboard.lv1.component.js.map