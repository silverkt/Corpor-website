export const NationalProfitLine = {
    legend: {
        data: ['泛能收益'],
        padding: [30,0,0,0]
    },

    grid: {
        show: true,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2/4','2/6','2/8','2/10','2/12','2/14'],
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 9 
            }
        },
        axisTick: {
            alignWithLabel: true,
        }
    },
    yAxis: [{
        name: '泛能收益/元',
        nameLocation: 'middle',
        nameGap: 20,
        type: 'value',
        axisLabel: {
            textStyle: {
                fontSize: 9 
            }
        },
    }],
    series: [
        {
            name:'泛能收益',
            type:'line',
            data:[3, 6, 8, 9, 10, 8],
            itemStyle: {
                normal: {
                    color: '#00b0f0',
                }
            }
        } 
    ]
}