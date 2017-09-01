import { Component, AfterViewInit } from '@angular/core';


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



//import  'rxjs';
// import * as Rx from 'rxjs';


 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngAfterViewInit() {



// var observable1 = Observable.interval(1000);
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

// .fromEvent  
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








  }
 
}
