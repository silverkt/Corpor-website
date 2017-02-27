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
var energy_map_component_geodata_1 = require("./energy.map.component.geodata");
var energy_map_component_option_1 = require("./energy.map.component.option");
var EnergymapComponent = (function () {
    function EnergymapComponent() {
        this.title = "全国3D轮廓图";
        this.option = {};
        this.geomap = {};
        this.data = {};
        // 指定图表的配置项和数据
        //配置信息开始
        this.geomap = energy_map_component_geodata_1.geoCoordMap;
        this.option = energy_map_component_option_1.mapOption;
        this.data = this.getServiceData();
        this.option.series[0].data = this.convertData(this.data.accomplish);
        this.option.series[1].data = this.convertData(this.data.ongoing);
        this.option.series[2].data = this.convertData(this.data.onplan);
        //console.log(this.option);
        //console.log(this.option.series[0].data); 
        //配置信息结束
    }
    EnergymapComponent.prototype.ngOnInit = function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('energy-map'));
        //console.log(this.option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
        myChart.on('click', function (params) {
            console.log(params.name);
            window.location.href = "./prov/" + params.name;
            //window.location.href="./heroes/"+params.name;         
        });
    };
    EnergymapComponent.prototype.convertData = function (data) {
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
    EnergymapComponent.prototype.getServiceData = function () {
        return {
            accomplish: [
                { name: "莱芜", value: 1 },
                { name: "常德", value: 1 },
                { name: "保定", value: 1 },
                { name: "湘潭", value: 1 },
                { name: "金华", value: 1 },
                { name: "岳阳", value: 1 },
                { name: "长沙", value: 1 },
                { name: "衢州", value: 1 },
                { name: "廊坊", value: 1 },
                { name: "菏泽", value: 1 },
                { name: "合肥", value: 1 },
                { name: "武汉", value: 1 },
                { name: "大庆", value: 1 }
            ],
            ongoing: [
                { name: "海门", value: 2 },
                { name: "鄂尔多斯", value: 2 },
                { name: "招远", value: 2 },
                { name: "舟山", value: 2 },
                { name: "齐齐哈尔", value: 2 },
                { name: "盐城", value: 2 },
                { name: "赤峰", value: 2 },
                { name: "青岛", value: 2 },
                { name: "乳山", value: 2 },
                { name: "大庆", value: 2 }
            ],
            onplan: [
                { name: "鞍山", value: 3 },
                { name: "溧阳", value: 3 },
                { name: "库尔勒", value: 3 },
                { name: "安阳", value: 3 },
                { name: "开封", value: 3 },
                { name: "济南", value: 3 },
                { name: "德阳", value: 3 },
                { name: "温州", value: 3 },
                { name: "九江", value: 3 },
                { name: "邯郸", value: 3 },
                { name: "临安", value: 3 },
                { name: "兰州", value: 3 },
                { name: "沧州", value: 3 }
            ]
        };
    };
    return EnergymapComponent;
}());
EnergymapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'energy-map',
        template: "<div class =\"energy-title\" >{{title}}</div><div  id=\"energy-map\"></div>",
        styles: ["\n        .energy-title {\n            height: 50px;\n            background-color: #024272;\n            color: #FFFFFF; \n            text-align: center;\n            padding: 10px;\n            font-size: 28px;\n            font-weight: bold;\n        }\n        #energy-map{\n                \n              height:490px;\n              background-color: #024272;\n              \n          }\n    "],
    }),
    __metadata("design:paramtypes", [])
], EnergymapComponent);
exports.EnergymapComponent = EnergymapComponent;
//# sourceMappingURL=energy.map.component.js.map