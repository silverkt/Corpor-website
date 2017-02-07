export const mapOption = {
    color:["#a85255","#70a658","#199f96"],    
    backgroundColor: '#024272', 
    tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
           // return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        padding:20,
        orient: 'vertical',
        y: 'bottom',
        x:'left',
        data:['已建','在建','待建'],
        textStyle: {
            color: '#fff'
        }
    }, 
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                }
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#78a3c6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#5782a5'
            }
        }
    },
    series: [
        {
            name: '已建',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:'',
            symbolSize: 8,
            silent: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        //=========add by silver
        {
            name: '在建',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:'',
            symbolSize: 8,
            silent: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '待建',
            type: 'scatter',
            coordinateSystem: 'geo',
            data:'',
            symbolSize: 8,
            silent: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
        //========add by silver end
    ]
};