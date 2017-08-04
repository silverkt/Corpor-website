import { Component } from "@angular/core";
 

@Component({
    moduleId: 'level1-energy-ranking',
    selector: 'root-app',
    templateUrl: 'energy_ranking.page.html',
    styleUrls: ['energy_ranking.page.css']
})
export class EnRankPage {
    tscope: string;
 
 
    changeScope(tscope:string) {
        this.tscope = tscope;
        console.log(tscope);
    }

    handleChange(e){
        console.log(e.index);
    }
}