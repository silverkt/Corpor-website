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
var router_1 = require("@angular/router");
var Mainboardlv2Component = (function () {
    function Mainboardlv2Component(route) {
        this.route = route;
        this.provsData = [
            { name: "河北", pinyin: "hebei" },
            { name: "山东", pinyin: "shandong" }
        ];
        this.clickedProv = {};
        this.tempProv = '';
    }
    Mainboardlv2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (v) {
            console.log(v.id);
            for (var _i = 0, _a = _this.provsData; _i < _a.length; _i++) {
                var prov = _a[_i];
                if (prov.name == v.id) {
                    //console.log("##"+prov.pinyin);
                    _this.tempProv = prov;
                }
            }
            if (_this.tempProv == '') {
                window.location.href = "/";
            }
            else {
                _this.clickedProv = _this.tempProv;
            }
        });
    };
    return Mainboardlv2Component;
}());
Mainboardlv2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main-board',
        template: "  \n<div class=\"container-fluid\">\n    <div class=\"row\">\n              <div class=\"col-md-4\" style=\"background-color: black;\"><div class=\"row mainCol\">\n                    <energy-video></energy-video>\n                    <energy-analysis></energy-analysis>\n                    <energy-trend></energy-trend>\n              </div></div>\n              <div class=\"col-md-4\"><div class=\"row mainCol\">\n                    <energy-map-prov [prov]=\"clickedProv\"></energy-map-prov>\n                    <div  id=\"energy-structure\"></div>                  \n              </div></div>\n              <div class=\"col-md-4\" style=\"background-color: black; \"><div class=\"row mainCol\">\n                    \n                    <div  id=\"energy-persentage\"></div>\n                    <div  id=\"energy-plan\"></div>\n                    <div  id=\"energy-rank\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-4\"  style=\"background-color: black;\">{{test}}</div>\n                        <div class=\"col-md-4\"></div>\n                    </div>   \n              </div></div>\n    </div>      \n</div>\n    ",
        styles: ["\n              .mainCol{              \n              height: 1079px;\n          }       \n          #energy-structure{\n              height:539px;\n              background-color: #003654;\n          }\n          \n          #energy-persentage {\n              height:220px;\n              background-color: #003654;\n              \n          }\n          #energy-plan {\n              height:320px;\n              background-color: #003654;\n          }\n          #energy-rank {\n              height:539px;\n              background-color: #024272;\n          }\n    "],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], Mainboardlv2Component);
exports.Mainboardlv2Component = Mainboardlv2Component;
//# sourceMappingURL=mainboard.lv2.component.js.map