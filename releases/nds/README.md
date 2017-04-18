.
│  favicon.ico
│  index.html                           //浏览器入口页面
│  main.ts 			                    //入口文件
│  polyfills.ts                         //兼容性中间层
│  styles.css                           //全局样式文件  
│  test.ts                              
│  tsconfig.app.json
│  tsconfig.spec.json
│  typings.d.ts
│
├─app                                   //代码主目录 
│  │  app.component.css
│  │  app.component.html
│  │  app.component.spec.ts
│  │  app.component.ts
│  │  app.module.ts                     //根模块
│  │  app.routing.component.ts          //路由组件  
│  │  data.service.ts
│  │  root.component.ts                 //根组件
│  │
│  ├─big-client                         //上栏-大客户场景下的逻辑 ，尚未实现
│  ├─economic-effect                    //下栏-经济效益场景下的逻辑，尚未实现
│  ├─energy-structure                   //下栏-能源结构场景下的逻辑，尚且实现
│  ├─gov-leader                         //上栏-政府领导场景下的逻辑，尚未实现
│  ├─group-leader                       //上栏-集团领导场景下的逻辑
│  │  │  data.service.ts                //数据获取服务，此服务为单例，将会注入各个需要的组件中
│  │  │  index.component.css            //集团领导场景下的区域地图组件样式
│  │  │  index.component.html           //集团领导场景下的区域地图组件view
│  │  │  index.component.ts             //集团领导场景下的区域地图组件逻辑 v model 
│  │  │  index2.component.css           //集团领导场景下的泛能项目组件样式
│  │  │  index2.component.html          //集团领导场景下的泛能项目组件view
│  │  │  index2.component.ts            //集团领导场景下的泛能项目组件路基 v model
│  │  │
│  │  └─component                       //集团领导场景下的子组件文件夹
│  │          nationalprofit.component.ts       //集团领导场景下全国泛能效益组件
│  │          nationalprofit.line.option.ts     //集团领导场景下全国泛能效益曲线组件
│  │          nationalprofit.pie.option.ts      //集团领导场景下全国泛能效益饼图组件
│  │          nationalrank.component.ts         //集团领导场景下全国排名组件
│  │          nationalrank.list.option.ts       //集团领导场景下全国排名列表组件
│  │          nationalrank.pie.option.ts        //集团领导场景下全国排名饼图组件
│  │          nationaltrade.component.ts        //集团领导场景下全国泛能交易组件
│  │          nationaltrade.line.option.ts      //集团领导场景下全国泛能交易曲线组件
│  │          nationaltrade.pie.option.ts       //集团领导场景下全国泛能交易饼图组件
│  │
│  ├─navi                               //导航组件文件夹
│  │      bottombar.component.ts                //底部导航组件
│  │      leftbar.component.ts                  //左侧导航组件
│  │      rightbar.component.ts                 //右侧导航组件
│  │      topbar.component.ts                   //顶部导航组件
│  │
│  ├─ranking                            //下栏-对比排行场景下的逻辑，尚未实现
│  └─social-effect                      //下栏-社会效益场景下的逻辑，尚未实现
├─assets
│      .gitkeep
│
└─environments
        environment.prod.ts             //开发及生产环境配置（配合摇树优化）
        environment.ts