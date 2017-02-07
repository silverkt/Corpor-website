import { Component }               from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Injectable }              from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


 



@Component({
    selector: 'main-board',
    template: `
     
<div class="container-fluid">
     eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
</div>

    
    `,
})

 
export class TestComponent{    

    constructor(private http: Http, private route: ActivatedRoute){ }

    ngOnInit(){
    //    const id = this.route.params;
    //    console.log(id);
        //console.log(this.route.params.id);
        //this.test();

        this.route.params.subscribe((v:any) => console.log(v.id));
    }

    test():void {
        this.http.get('http://localhost:3000/app/test.json')
        .toPromise().then((response) => {
            console.log(response.json());
             console.log(response.json().code_search_url);
            });
    }

}