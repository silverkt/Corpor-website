import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService1 {
    constructor( private http: Http) {}

    getData(url: string): Promise<any> {
        return this.http.get(url).toPromise();
    }

    

}