import { Component, Input, OnInit } from "@angular/core";
import { DatamainboardServices } from './data.services';

@Component({
    moduleId: module.id,
    selector: "energy-percentage-save",
    template: `
         <div id="energy-percentage-save">
            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">节能率</div>
            <div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">{{odata.percentage}}</div>
            <div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">天然气:{{odata.gas}}  可再生能源:{{odata.renewable}}</div></div>
        </div>
    `,
    styles: [`
          #energy-percentage-save {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-save>.col-md-4 {
              height:80px;
              background-color: #024272;
              color: #fff;
          }
    `],
    providers: [DatamainboardServices]
    
})
export class EnergypercentagesaveComponent implements OnInit{ 
    @Input()
    scope: string;
    odata: any;         
    constructor(private data: DatamainboardServices ){   //!!!!!! private   
    }

    ngOnInit() {
        this.odata = this.data.get4lsave(this.scope); 
    }

   

}