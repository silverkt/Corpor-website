import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "main-board",
    template: `
<div class="container-fluid">
    <div class="row" id="all">
        <div class="col-md-2"><div class="sample1"></div></div>
        <div class="col-md-2"><div class="sample2"></div></div>
        <div class="col-md-2"><div class="sample1"></div></div>
        <div class="col-md-6"><div class="sample2"></div></div>              
    </div>
    <div class="row" id="co2">
        <div class="col-md-2">1</div>
        <div class="col-md-2"><div class="sample1"></div></div>
        <div class="col-md-2">1</div>
        <div class="col-md-6"><div class="sample1"></div></div>              
    </div>  
    <div class="row" id="save">
        <div class="col-md-2"><div class="sample1"></div></div>
        <div class="col-md-2">1</div>
        <div class="col-md-2"><div class="sample1"></div></div>
        <div class="col-md-6">1</div>              
    </div>  
    <div class="row" id="clear">
        <div class="col-md-2">1</div>
        <div class="col-md-2">1</div>
        <div class="col-md-2">1</div>
        <div class="col-md-6">1</div>              
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
              background-color: aquamarine;
          }
          
          .sample1{
              width: 100%;
              background-color: black;
              height: 270px;
          }
          .sample2{
              width: 100%;
               height: 270px;
               
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