import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'energy-percentage',
    template: `
               <div class ="energy-title">{{title}}</div>
               <div  id="energy-percentage">
                    <div class="col-md-6">
                        <div id="energy-percentage-all">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">综合能源利用率</div><div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">75%</div><div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">总能源输入:12436Wh  总能源输出:12236Wh</div></div>
                        </div>
                        <div id="energy-percentage-co2">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">CO2减排率</div><div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">85%</div><div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:3px;font-size:10px;line-height:13px;">制冷/热量:1243Wh  额定制冷/热量:1223Wh<br>发电量:1243Wh  额定发电量:1223Wh</div></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="energy-percentage-all">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">节能率</div><div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">40%</div><div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">天然气:1243Wh  可再生能源:1223Wh</div></div>
                        </div>
                        <div id="energy-percentage-co2">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">综合能源利用率</div><div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">75%</div><div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">总能源输入:1243Wh  总能源输出:1223Wh</div></div>
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

          #energy-percentage-all {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-all>.col-md-4 {
              height:80px;
              background-color: #024272;
              color: #fff;
          }

           #energy-percentage-co2 {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-co2>.col-md-4 {
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