import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "main-board",
    template: `1234551{{scope}}`,
    styles: [``]
})
export class EnergyPercentageDetailComponent{
    scope: string;
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
         this.route.params.subscribe((v:any) => {
            this.scope = v.id;
         });
    }

}