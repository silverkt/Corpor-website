import { Component, OnInit }               from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'main-board',
    template: `  
<div class="container-fluid">
    <div class="row">
              <div class="col-md-4" style="background-color: black;"><div class="row mainCol">
                    <energy-video></energy-video>
                    <energy-analysis></energy-analysis>
                    <energy-trend></energy-trend>
              </div></div>
              <div class="col-md-4"><div class="row mainCol">
                    <energy-map-prov [prov]="clickedProv"></energy-map-prov>
                    <div  id="energy-structure"></div>                  
              </div></div>
              <div class="col-md-4" style="background-color: black; "><div class="row mainCol">                    
                     <energy-percentage [scope]="clickedProv.name"></energy-percentage>
                    <div  id="energy-plan"></div>
                    <div  id="energy-rank">
                        <div class="col-md-4"></div>
                        <div class="col-md-4"  style="background-color: black;">121211</div>
                        <div class="col-md-4"></div>
                    </div>   
              </div></div>
    </div>      
</div>
    `,
    styles: [`
              .mainCol{              
              height: 1079px;
          }       
          #energy-structure{
              height:539px;
              background-color: #003654;
          }
          
          
          #energy-plan {
              height:310px;
              background-color: #003654;
          }
          #energy-rank {
              height:539px;
              background-color: #024272;
          }
    `], 
})

export class Mainboardlv2Component implements OnInit {
    provsData: Array<any> = [
        { name: "河北", pinyin: "hebei"},
        { name: "山东", pinyin: "shandong"}
    ];
    clickedProv: any = {};
    tempProv: any = '';
    constructor(private route: ActivatedRoute ) {}
    ngOnInit(): void {
        this.route.params.subscribe((v:any) => {
            console.log(v.id); 
            for (let prov of this.provsData ) {
                if (prov.name == v.id) {
                    //console.log("##"+prov.pinyin);
                    this.tempProv = prov;
                }
            }
            if (this.tempProv == '') {
                window.location.href="/";   
            } else {
                this.clickedProv = this.tempProv;
            }
        });
    }
}
