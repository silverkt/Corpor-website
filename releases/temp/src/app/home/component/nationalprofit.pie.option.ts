/**
 * 全国凡能收益饼图组件初始化配置文件
 */
export const NationalProfitPie = {
    title: {
                text: '各多能源泛能收益对比',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                }
            },
    color: ['#9bbb59','#b3a2c7','#00b0f0', '#8eb4e3'],
    series: [{
        name: '多能源成交占比',
        type: 'pie',
        radius: [0,'60%'],
        label: {
            normal: {
                formatter: '{b}{d}%',
            }
        },
        labelLine: {
            normal: {
                length: 5,
                length2: 5,
            }
        },
        data: [{name:'其他',value:10},{name:'燃气',value:10},{name:'电力',value:60},{name:'冷/热',value:20}]
    }]
}