import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GpleaderDataService {
    constructor( public http: Http) { }

    /**
     * 获取集团领导区域地图首页全国泛能交易情况多能源成交占比数据,
     * Param scope:string   scope为区域代码
     */
    getTradePieData(scope?: string): Promise<any> {
        console.log('pie'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/pie.json?scope="+scope;
        return this.http.get(url).toPromise(); 
    }

    getTradeLineData(scope?: string): Promise<any> {
        console.log('line'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/line.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    /**
     * 获取集团领导区域地图首页全国泛能收益状况数据
     */
    getProfitPieData(scope?: string): Promise<any> {
        console.log('profilePie'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glprofitpie.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    getProfitLineData(scope?: string): Promise<any> {
        console.log('profileLine'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glprofitline.json?scope="+scope;
        return this.http.get(url).toPromise();
    }



}