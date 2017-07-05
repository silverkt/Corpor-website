import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Location }    from '@angular/common';

 

@Component({
    selector: 'scada',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css']
})
export class ScadaIndexComponent implements OnInit{
    constructor(public router: ActivatedRoute, public location: Location){}
    abc: any;
    ngOnInit() {
        this.router.params.subscribe((v: any) => {          
            this.abc = document.getElementById("myframe");            
            this.abc.src = v.link;   
        });
     }

     goBack() {
         
         this.location.back();
     }
}