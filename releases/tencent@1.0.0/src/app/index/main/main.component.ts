import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

 


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
      "value": "1170"
    },
    {
      "type": "gas",
      "name": "气",
      "unit": "Nm3/h",
      "id": "1",
      "value": "625"
    },
    {
      "type": "gas",
      "name": "气",
      "unit": "Nm3/h",
      "id": "2",
      "value": "545"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "0",
      "value": "11000"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "1",
      "value": "1175"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "2",
      "value": "212"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "3",
      "value": "935"
    },
    {
      "type": "cold",
      "name": "冷",
      "unit": "kw",
      "id": "4",
      "value": "2000"
    },
    {
      "type": "hot",
      "name": "热",
      "unit": "t/h",
      "id": "0",
      "value": "1"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "0",
      "value": "6320"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "1",
      "value": "10000"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "2",
      "value": "2500"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "3",
      "value": "17500"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "4",
      "value": "7500"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "5",
      "value": "2352"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "6",
      "value": "2053"
    },
    {
      "type": "elec",
      "name": "电",
      "unit": "kW",
      "id": "7",
      "value": "1000"
    }
  ];
  constructor(public http: HttpClient) { }

  ngOnInit() {
 
      

let x = Observable.interval(1000);
 let m = x.subscribe(res=> {
   console.log(res);
 });

 setTimeout(()=>{
   m.unsubscribe();
   console.log('shit over');
   
 },10000)


 let sx = Observable.create(observer=>{
   observer.next('shit1');
  
   observer.next('shit2');
   var i = 0;
   setInterval(()=>{
     i = i +1;
     observer.next(i);
   },2000);
 })

 let f = sx.subscribe(res=>{
   console.log(res)
 })




  setTimeout(()=>{
   f.unsubscribe();
   console.log('shit over again');
   
 },20000)


   setTimeout(()=>{
    sx.subscribe(res=> {
      console.log(res);
    });
 },25000)
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
