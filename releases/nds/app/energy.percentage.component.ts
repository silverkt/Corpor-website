import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'energy-percentage',
    template: `
               <div class ="energy-title">{{title}}</div>
               <div  id="energy-percentage">
                    <div class="col-md-6">
                        <div id="energy-percentage-all">
                            <div class="col-md-4">1</div><div class="col-md-4">1</div><div class="col-md-4">1</div>
                            <div>121212</div>
                        </div>
                        <div id="energy-percentage-co2">
                        </div>
                    </div>
                    <div class="col-md-6"><div id="energy-percentage-all"></div><div id="energy-percentage-co2"></div></div>
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
              height:170px;
              background-color: #003654;              
          }

          #energy-percentage-all {
              height:110px;
              background-color: #FFFFFF;
          }

           #energy-percentage-co2 {
              height:110px;
              background-color: #000000;
          }
    `]
})
export class EnergypercentageComponent {
    @Input()
    scope: string;
    title: string = "效率概览";
}