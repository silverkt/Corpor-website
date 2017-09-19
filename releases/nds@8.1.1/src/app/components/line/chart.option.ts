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
        right: 35,
        data:['电力','蒸汽','冷热','总量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '18%',
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
        name: '时',
        type: 'category',
        boundaryGap: false,
        data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    },
    yAxis:  [{
        name: 'MWh',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'value',
        axisLabel: {
             textStyle: {
                 fontSize: 9 
             }
        },
    }],
    series: [
        {
            name:'电力',
            type:'line',
           // stack: '总量',
            data:[121, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134]
        },
        {
            name:'蒸汽',
            type:'line',
           // stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234]
        },
        {
            name:'冷热',
            type:'line',
           // stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154]
        },
        {
            name:'总量',
            type:'line',
           // stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334]
        } 
    ]
};