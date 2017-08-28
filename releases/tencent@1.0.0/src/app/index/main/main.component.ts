import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
import {Observable} from 'rxjs/Observable';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
 
import * as Rx from "rxjs"

 


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  reqData: any = [
    {
      "type": "gas",
      "name": "气",
      "unit": "Nm3/h",
      "id": "0",      
      "value": "122"
    },
    {
      "type": "gas",
      "name": "气",
      "unit": "Nm3/h",
      "id": "1",
      "value": "122"
    },
    {
      "type": "gas",
      "name": "气",
      "unit": "Nm3/h",
      "id": "2",
      "value": "122"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "0",
      "value": "122"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "1",
      "value": "122"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "2",
      "value": "122"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "3",
      "value": "122"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "4",
      "value": "122"
    },
    {
      "type": "hot",
      "name": "热",
      "unit": "t/h",
      "id": "0",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "0",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "1",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "2",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "3",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "4",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "5",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "6",
      "value": "122"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "7",
      "value": "122"
    }
  ];
  constructor(public http: HttpClient) { }

  ngOnInit() {
 let rx = Rx.Observable.interval(1000)
      
    // .sampleTime(2000).subscribe(
    //   res => {
    //     console.log(res.unit);
    //   },
    //   err => {
    //     console.log('errorl');
    //   }
    // )
  }


}
