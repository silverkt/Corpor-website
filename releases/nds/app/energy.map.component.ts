import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'energy-map',
    template: `<div  id="energy-map"></div>`,
    styles: [`
        #energy-map{
                
              height:540px;
              background-color: #024272;
              
          }
    `],
})
export class EnergymapComponent {

}