import { Component } from "@angular/core";
 

@Component({
    moduleId: 'level1-energy-ranking',
    selector: 'root-app',
    templateUrl: 'energy_ranking.page.html',
    styleUrls: ['energy_ranking.page.css']
})
export class EnRankPage {
    rqfor: string;
    tscope: string;
    ds: any = {
        "a" : true,
        "b" : false,
        "c" : false,
        "d" : false
    }
 
 
    changeScope(tscope:string) {
        this.tscope = tscope;
        console.log(tscope);
    }

    handleChange(e){
        console.log(e.index);
        this.rqfor = e.index+1;

        if(this.rqfor == "1") {
            this.ds.a = true;
            this.ds.b = false;
            this.ds.c = false;
            this.ds.d = false;
        }

        if(this.rqfor == "2") {
            this.ds.a = false;
            this.ds.b = true;
            this.ds.c = false;
            this.ds.d = false;
        }

        if(this.rqfor == "3") {
            this.ds.a = false;
            this.ds.b = false;
            this.ds.c = true;
            this.ds.d = false;
        }

        if(this.rqfor == "4") {
            this.ds.a = false;
            this.ds.b = false;
            this.ds.c = false;
            this.ds.d = true;
        }
    }
}