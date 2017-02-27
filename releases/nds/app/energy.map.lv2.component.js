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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var energy_map_component_geodata_1 = require("./energy.map.component.geodata");
var energy_map_component_option_1 = require("./energy.map.component.option");
var Energymaplv2Component = (function () {
    function Energymaplv2Component(http) {
        this.http = http;
        this.option = {};
        this.geomap = {};
        this.data = {};
        this.provjson = {};
        // 指定图表的配置项和数据
        //配置信息开始
        this.geomap = energy_map_component_geodata_1.geoCoordMap; //获取全国地理城市坐标
        this.option = energy_map_component_option_1.mapOption;
        this.data = this.getServiceData(this.prov); //获取建站城市    
        this.option.series[0].data = this.convertData(this.data.accomplish);
        this.option.series[1].data = this.convertData(this.data.ongoing);
        this.option.series[2].data = this.convertData(this.data.onplan);
        //配置信息结束
    }
    Energymaplv2Component.prototype.ngOnInit = function () {
        var _this = this;
        // 基于准备好的dom，初始化echarts实例
        this.title = this.prov.name;
        var myChart = echarts.init(document.getElementById('energy-map'));
        //console.log(this.option);
        // 使用默认的配置项和数据显示图表。
        this.option.legend.show = false; //暂且关闭图例现实
        var mapjsonfile = 'map/json/' + this.prov.pinyin + '.json';
        this.http.get(mapjsonfile)
            .toPromise().then(function (response) {
            _this.provjson = response.json();
            echarts.registerMap(_this.prov.pinyin, _this.provjson);
            _this.option.geo.map = _this.prov.pinyin;
            //console.log(this.option);
            myChart.setOption(_this.option);
        });
        //     myChart.setOption(this.option);
        //     myChart.on('click', function (params: any) {
        //         console.log(params.name);
        //         window.location.href="./prov/"+params.name;   
        //         //window.location.href="./heroes/"+params.name;         
        //     });          
    };
    Energymaplv2Component.prototype.convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geomap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    Energymaplv2Component.prototype.getServiceData = function (prov) {
        //prov是一个省的对象 一般格式应为 { name: "河北", pinyin: "hebei", id: 121 } 通过此对象向后端获取对应返回数据
        return {
            accomplish: [],
            ongoing: [],
            onplan: []
        };
    };
    return Energymaplv2Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Energymaplv2Component.prototype, "prov", void 0);
Energymaplv2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'energy-map-prov',
        template: "<div class =\"energy-title\">{{title}}</div><div  id=\"energy-map\"></div>",
        styles: ["\n        .energy-title {\n            height: 50px;\n            background-color: #024272;\n            color: #FFFFFF; \n            text-align: center;\n            padding: 10px;\n            font-size: 28px;\n            font-weight: bold;\n        }\n        #energy-map{\n                \n              height:490px;\n              background-color: #024272;\n              \n          }\n    "],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], Energymaplv2Component);
exports.Energymaplv2Component = Energymaplv2Component;
//# sourceMappingURL=energy.map.lv2.component.js.map