/**
 * 全国凡能交易饼图组件初始化配置文件
 */
export const ChartOpt = {
    title: {
                text: '',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '15',
                }
            },
    color: ['#9bbb59','#b3a2c7','#00b0f0', '#8eb4e3'],
    series: [{
        name: '能源结构',
        type: 'pie',
        radius: [0,'60%'],
        label: {
            normal: {
                formatter: '{b}\n{d}%'
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 15,
            }
        },
        data: [{name:'其他',value:10},{name:'燃气',value:10},{name:'电力',value:60},{name:'冷/热',value:20}]
    }]
}