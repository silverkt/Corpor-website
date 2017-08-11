import { Component } from "@angular/core";
import { DataService } from "../../data.service";
declare var globalvar: any;

@Component({
    moduleId: 'level1-energy-oper-ser',
    selector: 'root-app',
    templateUrl: 'energy_oper_ser.page.html',
    styleUrls: ['energy_oper_ser.page.css'],
    providers: [ DataService ],
})
export class OperSerPage {

    rqfor: string;
    tscope: string;
    ascope: string;
    tstart: string;
    tstop: string;

    res: any = {
        "errtype": 2,
        "errreason": 12,
        "errsolu": 12,
        "backres": 23,
        "backtype": 8,
        "backno": 25,
        "exps": 2000,
        "exptype": 8,
        "expfreq": 8,
        "expno": 5,
        "diatype": 80,
        "diano": 18
    }

    constructor(public data: DataService) {
        let url = globalvar.api[8].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope+"&tstart="+this.tstart+"&tstop="+this.tstop;
        console.log(url);
        this.data.getData(url).then(res => {
            this.res = res.json();
        }).catch(()=>{
            console.log('Server\'s data service is down!');
        });
    }
 
}