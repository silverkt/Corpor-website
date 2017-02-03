import { Component }               from '@angular/core';
import { Injectable }              from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


 



@Component({
    selector: 'map',
    template: '',
})

 
export class TestComponent{    

    constructor(private http: Http){ }

    ngOnInit(){
        this.test();
    }

    test():void {
        this.http.get('http://localhost:3000/app/test.json')
        .toPromise().then((response) => {
            console.log(response.json());
             console.log(response.json().code_search_url);
            });
    }

}