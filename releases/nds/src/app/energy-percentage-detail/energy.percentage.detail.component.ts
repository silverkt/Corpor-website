import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "main-board",
    template: `
<div class="container-fluid">
    <div class="row" id="all">
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当年'" [type]="'综合能源利用率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当月'" [type]="'综合能源利用率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当日'" [type]="'综合能源利用率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-6"><energy-percentage-gridline [timeScope]="'即时'" [type]="'综合能源利用率'" [scope]="scope"></energy-percentage-gridline></div>              
    </div>
    <div class="row" id="co2">
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当年'" [type]="'co2减排率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当月'" [type]="'co2减排率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当日'" [type]="'co2减排率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-6"><energy-percentage-gridline [timeScope]="'即时'" [type]="'co2减排率'" [scope]="scope"></energy-percentage-gridline></div>           
    </div>  
    <div class="row" id="save">
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当年'" [type]="'节能率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当月'" [type]="'节能率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当日'" [type]="'节能率'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-6"><energy-percentage-gridline [timeScope]="'即时'" [type]="'节能率'" [scope]="scope"></energy-percentage-gridline></div>            
    </div>  
    <div class="row" id="clear">
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当年'" [type]="'清洁能源利用'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当月'" [type]="'清洁能源利用'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-2"><energy-percentage-gauge [timeScope]="'当日'" [type]="'清洁能源利用'" [scope]="scope"></energy-percentage-gauge></div>
        <div class="col-md-6"><energy-percentage-gridline [timeScope]="'即时'" [type]="'清洁能源利用'" [scope]="scope"></energy-percentage-gridline></div>               
    </div>  
</div>
    `,
    styles: [`
     #all>div{
              height:270px;
          }
          
          #co2>div{
              height:270px;
          }
          
          #save>div{
              height:270px;
          }
          
          #clear>div{
              height:269px;
               
          }
          
          
          
        

    `]
})
export class EnergyPercentageDetailComponent{
    scope: string;
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
         this.route.params.subscribe((v:any) => {
            this.scope = v.id;
         });
    }

}