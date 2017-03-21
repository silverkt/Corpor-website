export const GaugeOption = {
    title:{
       
        left: 'center',
        bottom: '25',
        text:'213',
        textStyle:{
            color:'#fff',
        }
        //textBaseline: 'bottom',
    },
    backgroundColor: '#003654',
    // tooltip : {
    //     formatter: "{a} <br/>{b} : {c}%"
    // },     
    series: [
        {
            name: '',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '85%', //仪表盘半径
            detail: {formatter:'{value}%'},
            //data: [{value: 80, name: '综合能源利用率'}]
            data: [{value: 75}],
             axisLine:{
                lineStyle:{
                    color:[[0.3,'#ffffff'],[0.6,'#d6e9e7'],[1,'#b4c7e7']],
                    width:20
                } 
                 
            }
        }
    ]
};
