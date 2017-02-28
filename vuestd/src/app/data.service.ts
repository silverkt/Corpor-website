import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class DataService {
    myData: Promise<any>;
    constructor(private http: Http){}
    getData(): void {
        this.myData =  this.http.get('http://pz.webcity3d.com/tt.json').toPromise();
    }
    
}