/**
 * 全国凡能交易饼图组件初始化配置文件
 */
export const EnergyStructurePie = {
    api: 'http://pz.webcity3d.com/eos/web/images/pie.json?scope=',
    title: {
                text: '',
                x: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
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
                length: 5,
                length2: 3,
            }
        },
        data: [{name:'其他',value:10},{name:'燃气',value:10},{name:'电力',value:60},{name:'冷/热',value:20}]
    }]
}