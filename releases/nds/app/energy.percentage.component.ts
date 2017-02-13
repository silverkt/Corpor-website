import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'energy-percentage',
    template: `
               <div class ="energy-title">{{title}}</div>
               <div  id="energy-percentage">
                    <div class="col-md-6">
                        <energy-percentage-all [scope]="scope"></energy-percentage-all>
                        <energy-percentage-co2 [scope]="scope"></energy-percentage-co2>
                    </div>
                    <div class="col-md-6">
                        <energy-percentage-save [scope]="scope"></energy-percentage-save>
                        <div id="energy-percentage-clear">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">清洁能源利用率</div><div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">75%</div><div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">地热:1243Wh  光热:1223Wh 电热: 1212Wh</div></div>
                        </div>
                    </div>
               </div>
               `,
    styles: [`

         .energy-title {
            height: 50px;
            background-color: #003654;
            color: #FFFFFF; 
            text-align: center;
            padding: 10px;
            font-size: 28px;
            font-weight: bold;
         }
         #energy-percentage {
              padding-top:10px;
              height:180px;
              background-color: #003654;              
          }
         

          

          #energy-percentage-clear {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-clear>.col-md-4 {
              height:80px;
              background-color: #024272;
              color: #fff;
          }
    `]
})
export class EnergypercentageComponent {
    @Input()
    scope: string;
    title: string = "效率概览";
}