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
                        <energy-percentage-clear [scope]="scope"></energy-percentage-clear>
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

          

          
    `]
})
export class EnergypercentageComponent {
    @Input()
    scope: string;
    title: string = "效率概览";
}