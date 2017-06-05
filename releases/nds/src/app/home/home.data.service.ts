/**
 * 全国泛能云运营业务展示中心首页数据获取服务
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeDataService {
    constructor( public http: Http) { }

    /**
     * 获取全国泛能云运营业务展示中心首页能源结构占比数据,
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
     * Param scope:string   scope为区域代码
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

    /**
     * 获取集团领导区域地图首页区域泛能收入排行榜数据
     * Param scope:string   scope为区域代码
     */
    getRankPieData(scope?: string): Promise<any> {
        console.log('rankPle'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glrankpie.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    getRankListData(scope?: string): Promise<any> {
        console.log('ranklist'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glranklist.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    /**
     * 获取集团领导泛能项目首页泛能交易对比数据
     */
    getCompareTradeData(scope?: string): Promise<any> {
        console.log('comparetrade'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glcomparetrdebar.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    /**
     * 获取集团领导泛能项目首页综合运行时间对比数据
     */
    getCompareRunningData(scope?: string): Promise<any> {
        console.log('comparerun'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glcomparerunbar.json?scope="+scope;
        return this.http.get(url).toPromise();
    }

    /**
     * 获取集团领导泛能项目首页项目收益对比数据
     */
    getCompareBenifitData(scope?: string): Promise<any> {
        console.log('comparebenifit'+scope);
        let url: string = "http://pz.webcity3d.com/eos/web/images/glcomparebenifitbar.json?scope="+scope;
        return this.http.get(url).toPromise();
    }



}