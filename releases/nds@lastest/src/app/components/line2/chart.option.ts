/**
 * 全国凡能交易饼图组件初始化配置文件
 */
export const ChartOpt = {
    title: {
        //text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['节煤标量']
    },
    grid: {
        show: true,
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'15%',
        containLabel: true
    },
    toolbox: {
        feature: {
           // saveAsImage: {}
        }
    },
    xAxis: {
        axisLabel: {
            interval: 0
        },
        type: 'category',
        boundaryGap: false,
        data: ['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时','13时', '14时','15时','16时','17时','18时','19时','20时', '21时','22时','23时','24时']
    },
    yAxis:  [{
        //name: '泛能收益/元',
        //nameLocation: 'middle',
        //nameGap: 20,
        type: 'value',
        // //axisLabel: {
        //     textStyle: {
        //         fontSize: 9 
        //     }
        // },
    }],
    series: [
        {
            name:'节煤标量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134]
        } 
    ]
};