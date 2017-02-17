export const GridlineOption = {
    
   	backgroundColor: '#003654',
       color:[ '#b4c7e7'],
   	textStyle: {
        color: 'rgba(255, 255, 255, 1)'
    },
    title: {
    	textStyle: {
        color: 'rgba(255, 255, 255, 1)'
    },
        text: '清洁能源利用率',
        left: 'center',
        bottom: '25',
    },
    tooltip: {

        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
//    legend: {
//    	textStyle: {
//        color: 'rgba(255, 255, 255, 1)'
//    },
//        left: 'left',
//        data: ['冷', '热','电']
//    },
    xAxis: {
    	   
        type: 'category',
        name: '时',
        splitLine: {show: false}, //分割粒度网格线，默认为true
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        axisLine: {
    	       lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
            }
         },
         axisLabel: {
             rotate: 45,
         },
         boundaryGap: false,
    },
    grid: {
        show: true,
        width: '96%',
        top:'45',
        left: '0',

        // right: '4%',
        // bottom: '10%',
        containLabel: true,
    },
    yAxis: {
     
        name: '百分比',     
        axisLine: {
    	       lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
            }
         },
         
    },
    
    series: [
       
        {
            name: '热',
            type: 'line',
            data: [1, 2, 5, 13, 81, 24, 74, 22, 66,1, 2, 5, 13, 81, 24, 74, 22, 66,1, 2, 5, 13, 81,8]
        }
        
    ]
};