import { Injectable } from "@angular/core";

@Injectable()
export class PercentageDetailData {

    /**
     * 获取四率详情页仪表盘数据
     * Params：
     * timeScope: string; 时间范围
     * scope： string; 数据地域范围
     * type: string; 数据类型，四种率
     */
    getGaugeData(timeScope: string, scope: string, type: string): any {
        console.log(timeScope+scope+type);
        let num = Math.round((Math.random() * 100));
        console.log(num);
        return {
            percentage: num,
        }
    }

    /**
     * 获取四率详情页曲线数据
     * Params：
     * timeScope: string; 时间范围
     * scope： string; 数据地域范围
     * type: string; 数据类型，四种率
     */
    getGridLineData(timeScope: string, scope: string, type: string): any {
        let num: number[] = [];
        for (var i=0; i<24; i++) {
            num.push(Math.round((Math.random() * 100)));
        }
        return num;
        //console.log(num);
    }
}