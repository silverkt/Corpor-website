import { Component, trigger, state, style, transition, animate, AfterViewInit } from '@angular/core';
import { DataService } from "./data.service";


@Component({
  selector: '',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class AppComponent implements AfterViewInit {
  jdata: any = {};
  constructor(private dataService: DataService) {
      
  }
  ngAfterViewInit() {
    this.dataService.myData.then((response) => {
      this.jdata = response.json();
    }
    );
  }            
}
