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
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class AppComponent implements AfterViewInit {
  jdata: any = {};
  totalItemNo: number;
  pageNo: number;
  itemPerPg: number;
  pageData: Array<any>;


  constructor(private dataService: DataService) {
      
  }

  ngAfterViewInit() {
    this.getPageData(1);
  }

  getPageData(no: number): any {
    this.dataService.myData.then((response) => {
      this.jdata = response.json();
      this.totalItemNo = this.jdata.totalno;
      this.itemPerPg = 10;
      this.pageNo = this.totalItemNo/this.itemPerPg;
      let pData: Array<any> = [];
      let sum: number = 1;
      let startNo: number = (no - 1) * this.itemPerPg;
      let endNo: number = no * this.itemPerPg;
      for (var i in this.jdata.items) {
         if ((sum > startNo) && (sum < endNo)) {
           var jsond = {
             name: i,
             link: this.jdata.items[i],
             site: this.jdata.site
           };
           console.log(jsond);
           pData.push(jsond);           
         }        
         sum++;
      }       
      this.pageData = pData;
    });
  }            
}
