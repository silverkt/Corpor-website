import { Component } from "@angular/core";

@Component({
    moduleId: 'level1-energy-structure',
    selector: 'root-app',
    templateUrl: 'energy_structure.page.html',
    styleUrls: ['energy_structure.page.css']
})
export class EnStructPage {
    tscope: string = "1";
 
    changeScope(tscope:string) {
        this.tscope = tscope;
        console.log(tscope);
    }
}