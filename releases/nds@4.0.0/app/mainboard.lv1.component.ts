import { Component } from '@angular/core';

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
                    <energy-percentage [scope]="'全国'" (click)="navjump(1)"></energy-percentage>
                    <div  id="energy-plan">sasdasd</div>
                    <div  id="energy-rank">
                        <div class="col-md-4"></div>
                        <div class="col-md-4"  style="background-color: black;">121212</div>
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

export class Mainboardlv1Component {
    title: string = '';
    navjump(id: number) {
        window.location.href="http://www.baidu.com/"+id;
    }
}
