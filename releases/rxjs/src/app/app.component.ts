import { Component, AfterViewInit } from '@angular/core';

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



//import  'rxjs';
// import * as Rx from 'rxjs';


 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public http: HttpClient) {

  }
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

// .fromEvent从事件建立可观察对象，将其绑定到某元素的事件  
var input = Observable.fromEvent(document.querySelector('input'),'keypress')

// .filter 通过事件中的属性，给定条件来过滤生成的可观察对象
// input.filter((event:any) => event.target.value.length>2).subscribe((value: any)=> console.log(value.target.value));

// .delay 将可观察对象的输出延迟2000毫秒
// input.delay(2000).subscribe(res=>{
//   console.log('2000ms');
// })

// .throttleTime 将可观察对象产生的流，每1000ms放行一次
// input.throttleTime(1000).subscribe(
//   (res:any) => {console.log(res.key); console.log('只每1000ms放过一次事件通过');}
// )


// .debounceTime 去抖动，凡是前后输出停顿间隔在2000ms以内的，将会被hold住，直到最后一次输出后，时间超过2000ms停顿，将最后一次输出放行
// input.debounceTime(2000).subscribe(
//   (res:any) => {console.log(res.key); console.log('去抖动2000ms放最后一次事件通过');}
// )



// .take 将可观察对象产生的流，只取前3次，之后停止订阅
// input.take(3).subscribe(
//   (res:any) => {console.log(res.key); console.log('取前3次之后停止订阅');}
// )

// .fromEvent从事件建立可观察对象，将其绑定到某元素的事件  
// .takeUntil 直到这个事件发生之前，一直可以订阅。
//var stopStream = Observable.fromEvent(document.querySelector('button'),'click');
// input.takeUntil(stopStream).subscribe((res:any) => {console.log(res.key); console.log('点击button之后取消订阅');})

// .map建立输入和输出的一个映射关系
// input.map((event:any)=> {return event.target.value}).subscribe(res=>{console.log(res)});

// .pluck 依次抽取对象中的属性，参数是渐进关系
//input.pluck('target','value','length').subscribe(res=>{console.log(res);console.log('依次抽取对象中特定属性');});


this.http.get<any>('https://www.easy-mock.com/mock/59a8d3424006183e48ef9507/myproj/test').subscribe(res=>{
  console.log(res.data.code);
})





  }
 
}
