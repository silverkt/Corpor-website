/**
 * 综合运行时间对比柱状图组件配置文件
 */
export const CompareRunningBar = {
    color: ['#9bbb59'], 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '6%',
        containLabel: true
    },
    tooltip: {            
            formatter: '{b} : {c}MW'  
        },
    xAxis : [
        {            
            type : 'category',
            data : ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6'], 
        }
    ],
    yAxis : [
        {
            name : 'MW',
            type : 'value',
            nameLocation: 'middle',
            nameGap: 30
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '40%',
            data:[100, 52, 200, 334, 390, 330]
        }
    ]
};