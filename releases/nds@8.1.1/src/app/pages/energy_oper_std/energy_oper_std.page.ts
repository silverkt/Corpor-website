import { Component } from "@angular/core";
import { DataService } from "../../data.service";
declare var globalvar: any; 

@Component({
    moduleId: 'level1-energy-oper-std',
    selector: 'root-app',
    templateUrl: 'energy_oper_std.page.html',
    styleUrls: ['energy_oper_std.page.css'],
    providers: [ DataService ],
})
export class OperStdPage {

    rqfor: string;
    tscope: string;
    ascope: string;
    tstart: string;
    tstop: string;

    res: any = {
        "stationtype": 5,
        "stationno": 20,
        "opertype": 8,
        "operno": 50,
        "operrate": "50%",
        "traintype": 50,
        "trainno1": 200,
        "trainno2": 500,
        "trainno3": 300,
        "errtype": 6,
        "errno": 20,
        "errtime": 100,
        "errrate": "0.1%"
 
    }

    constructor(public data: DataService) {
        let url = globalvar.api[9].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope+"&tstart="+this.tstart+"&tstop="+this.tstop;
        console.log(url);
        this.data.getData(url).then(res => {
            this.res = res.json();
        }).catch(()=>{
            console.log('Server\'s data service is down!');
        });
    }   
 
}