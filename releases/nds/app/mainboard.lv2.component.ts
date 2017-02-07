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
                    <energy-map></energy-map>
                    <div  id="energy-structure"></div>                  
              </div></div>
              <div class="col-md-4" style="background-color: black; "><div class="row mainCol">
                    
                    <div  id="energy-persentage"></div>
                    <div  id="energy-plan"></div>
                    <div  id="energy-rank">
                        <div class="col-md-4"></div>
                        <div class="col-md-4"  style="background-color: black;">{{test}}</div>
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
          
          #energy-persentage {
              height:220px;
              background-color: #003654;
              
          }
          #energy-plan {
              height:320px;
              background-color: #003654;
          }
          #energy-rank {
              height:539px;
              background-color: #024272;
          }
    `], 
})

export class Mainboardlv2Component implements OnInit {
    test: string = '';
    constructor(private route: ActivatedRoute ) {}
    ngOnInit(): void {
        this.route.params.subscribe((v:any) => {console.log(v.id); this.test = v.id;});
    }
}
