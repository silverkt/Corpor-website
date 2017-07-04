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
            
            this.abc.src = v.link;
           
        

            var iframeBodyCover = document.createElement("iframe");  
            iframeBodyCover.id = "__iframeBodyCover";  
            iframeBodyCover.style.cssText = "position:absolute;top:0;left:0;width:200px; height:200px;background-color:#000000;filter:alpha(opacity=0);display:none;";  
            iframeBodyCover.src ="javascript:false;";  
            document.body.appendChild(iframeBodyCover);  
            this.abc = document.getElementById("__iframeBodyCover");
            this.abc.style.zIndex = "998";




          
        });
     }

     goBack() {
         
         this.location.back();
     }
}