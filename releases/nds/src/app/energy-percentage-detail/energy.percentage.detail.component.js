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
var router_1 = require('@angular/router');
var EnergyPercentageDetailComponent = (function () {
    function EnergyPercentageDetailComponent(route) {
        this.route = route;
    }
    EnergyPercentageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (v) {
            _this.scope = v.id;
        });
    };
    EnergyPercentageDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "main-board",
            template: "\n<div class=\"container-fluid\">\n    <div class=\"row\" id=\"all\">\n        <div class=\"col-md-2\"><div class=\"sample1\"></div></div>\n        <div class=\"col-md-2\"><div class=\"sample2\"></div></div>\n        <div class=\"col-md-2\"><div class=\"sample1\"></div></div>\n        <div class=\"col-md-6\"><div class=\"sample2\"></div></div>              \n    </div>\n    <div class=\"row\" id=\"co2\">\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-2\"><div class=\"sample1\"></div></div>\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-6\"><div class=\"sample1\"></div></div>              \n    </div>  \n    <div class=\"row\" id=\"save\">\n        <div class=\"col-md-2\"><div class=\"sample1\"></div></div>\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-2\"><div class=\"sample1\"></div></div>\n        <div class=\"col-md-6\">1</div>              \n    </div>  \n    <div class=\"row\" id=\"clear\">\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-2\">1</div>\n        <div class=\"col-md-6\">1</div>              \n    </div>  \n</div>\n    ",
            styles: ["\n     #all>div{\n              height:270px;\n          }\n          \n          #co2>div{\n              height:270px;\n          }\n          \n          #save>div{\n              height:270px;\n          }\n          \n          #clear>div{\n              height:269px;\n              background-color: aquamarine;\n          }\n          \n          .sample1{\n              width: 100%;\n              background-color: black;\n              height: 270px;\n          }\n          .sample2{\n              width: 100%;\n               height: 270px;\n               \n          }\n          \n        \n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], EnergyPercentageDetailComponent);
    return EnergyPercentageDetailComponent;
}());
exports.EnergyPercentageDetailComponent = EnergyPercentageDetailComponent;
//# sourceMappingURL=energy.percentage.detail.component.js.map