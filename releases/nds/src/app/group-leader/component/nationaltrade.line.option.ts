/**
 * 全国凡能交易双曲线组件初始化配置文件
 */
export const NationalTradeLine = {
        legend: {
            data: ['交易量','交易额'],
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
            name: '交易量/MW',
            nameLocation: 'middle',
            nameGap: 20,
            type: 'value',
            axisLabel: {
                textStyle: {
                    fontSize: 9 
                }
            },
        },
        {
            name: '交易额/元',
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
                name:'交易量',
                type:'line',
                data:[3, 6, 8, 9, 10, 8],
                itemStyle: {
                    normal: {
                        color: '#00b0f0',
                    }
                }
            },
            {
                name:'交易额',
                type:'line',
                yAxisIndex:1,
                data:[2, 4, 6, 8, 9, 7],
                itemStyle: {
                    normal: {
                        color: '#9bbb59',
                    }
                }
            },
        ]
}