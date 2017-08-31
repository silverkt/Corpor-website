import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'; 

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pluck';



// //import  'rxjs';



// import * as Rx from 'rxjs';
 
 

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
      // let url = 'http://pz.webcity3d.com/eos/web/images/rems/txdata.json';
      // let x = Observable.interval(1000);

 
      // let stop = x.subscribe( 
      //     res=> {
      //       console.log(res);          
      //       this.http.get<any>(url).subscribe({
      //         next: rqdata=>{
      //           this.reqData = rqdata;
      //         },
      //         error: err=> {
      //         console.log('shit On again');
      //         stop.unsubscribe();
      //         }
      //       });
      //     }
      // ); 
      
      

//       var observable1 = Observable.interval(1000);
// var observable2 = Observable.interval(2000);
// var merged = Observable.merge(observable1, observable2);

// merged.subscribe(rs=>{
//   console.log(rs);
// });
//----------

var obserable1 = new Subject()
obserable1.map(x=>x+"newone").subscribe(res => {
  console.log(res);
});

obserable1.next('shitnext');
obserable1.next('shitnext1');
obserable1.next('shitnext2');
//-------------------------------
 
var input = Observable.fromEvent(document.querySelector('input'),'keypress')
// input.filter((event:any) => event.target.value.length>2).subscribe((value: any)=> console.log(value.target.value));


// input.delay(2000).subscribe(res=>{
//   console.log('2000ms');
// })

// input.throttleTime(1000).subscribe(
//   (res:any) => {console.log(res.key); console.log('只每1000ms放过一次事件通过');}
// )

// input.debounceTime(2000).subscribe(
//   (res:any) => {console.log(res.key); console.log('去抖动2000ms放最后一次事件通过');}
// )

// input.take(3).subscribe(
//   (res:any) => {console.log(res.key); console.log('取前3次之后停止订阅');}
// )


//var stopStream = Observable.fromEvent(document.querySelector('button'),'click');
// input.takeUntil(stopStream).subscribe((res:any) => {console.log(res.key); console.log('点击button之后取消订阅');})


// input.map((event:any)=> {return event.target.value}).subscribe(res=>{console.log(res)});

input.pluck('target','value','length').subscribe(res=>{console.log(res);console.log('依次抽取对象中特定属性');});


//---------------------------
  }
}
