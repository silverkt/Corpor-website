import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
declare var globalvar: any;

@Component({
    moduleId: 'bottom-navi',
    selector: 'bottom-navi',
    templateUrl: 'bottom.navi.html',
    styleUrls: ['bottom.navi.css']

})
export class BottomNaviComponent {
 
    public navi: any;

    constructor(public route: ActivatedRoute) {

        this.route.params.subscribe(param => {
            if (param.scene == undefined) {
                this.navi = globalvar.navi["a"];
            } else {
                this.navi = globalvar.navi[param.scene];
            }
        })
    }
}