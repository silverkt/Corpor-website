import { Component, Input } from "@angular/core";
import {  DatamainboardServices } from "./data.services";

@Component({
    moduleId: module.id,
    selector: "energy-percentage-co2",
    template: `
        <div id="energy-percentage-co2">
                <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">CO2减排率</div>
                <div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">{{data.percentage}}</div>
                <div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                <div class="col-md-12"><div style="padding-top:3px;font-size:10px;line-height:13px;">制冷/热量:{{data.cool_heat}}  额定制冷/热量:{{data.rated_cool_heat}}<br>发电量:{{data.electric_produce}}  额定发电量:{{data.rated_electric_produce}}</div></div>
        </div>
    `,
    styles: [`
          #energy-percentage-co2 {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-co2>.col-md-4 {
              height:80px;
              background-color: #024272;
              color: #fff;
          }

    `],
    providers: [DatamainboardServices ]
})
export class Energypercentageco2Component { 
    @Input()
    scope: string;
    data: any = {
        percentage: '',
        cool_heat: "",               //制冷热量
        rated_cool_heat: "",         //额定制冷热量
        electric_produce: "",        //发电量
        rated_electric_produce: ""   //额定发电量 
    }
        
    constructor(data: DatamainboardServices ){
         this.data = data.get4lco2(this.scope);
    }

    
}