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
            console.log(document.referrer);
            console.log(v.link);
            this.abc = document.getElementById("myframe");
            this.abc.src = "http://10.38.128.14:2500/1003.htm";
        });
     }

     goBack() {
         
         this.location.back();
     }
}