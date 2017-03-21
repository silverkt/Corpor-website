import { Component, OnInit } from '@angular/core';

declare var echarts: any;

@Component({
    moduleId: module.id,
    selector: 'energy-trend',
    template: `<div  id="energy-trend"></div>`,
    styles: [`
        #energy-trend {
              height: 379px;
              background-color: #024272;
          }
    `],
})
export class EnergytrendComponent implements OnInit {
    ngOnInit() {
           let option: any = {
   	backgroundColor: '#013c64',
   	textStyle: {
        color: 'rgba(255, 255, 255, 1)'
    },
    title: {
    	textStyle: {
        color: '#a9ccaf',
        fontSize:30
    },
        padding:20,
        text: '产能趋势图',
        left: 'center'
    },
    tooltip: {

        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    color:['#367fc7','#ff0000','#ffc68b'],
    legend: {
    	textStyle: {
        color: 'rgba(255, 255, 255, 1)'
    },
         padding:20,
        left: 'left',
        data: ['冷', '热','电']
    },
    xAxis: {
    	   
        type: 'category',
        name: '年',
        splitLine: {show: false},
        data: ['2011', '2012', '2013', '2014', '2015', '2016'],
        axisLine: {
    	       lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
            }

         },
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        top: '26%',
        containLabel: true
    },
    yAxis: {
       
        name: 'kwh',
        axisLine: {
    	       lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
            }

         },
    },
    
    series: [
       
        {
            name: '冷',
            type: 'line',
            data: [10,15,50,80,168,320]
            
        },
        {
            name: '热',
            type: 'line',
             data: [5,9,35,48,110,192]
        },
        {
            name: '电',
            type: 'line',
            data: [4,7.2,25,38,75,153.6]
        }
    ]
};
var dom = document.getElementById("energy-trend");
var myChart = echarts.init(dom); 
 myChart.setOption(option);
          myChart.on('click', function (params) {
    //console.log(params.name);
    window.location.href="./energy-analysis.html?="+params.name; 
});   
    }

}