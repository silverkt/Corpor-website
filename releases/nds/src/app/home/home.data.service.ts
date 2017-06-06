/**
 * 全国泛能云运营业务展示中心首页数据获取服务
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeDataService {
    constructor( public http: Http) { }

    getData(url: string, scope?: string): Promise<any> {
        return this.http.get(url).toPromise();
    }
}