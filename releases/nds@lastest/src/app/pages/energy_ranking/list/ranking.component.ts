/**
 * 饼图图表组件
 * 此组件内包含三个部分
 * 组件本身的controller部分和图表的配置文件部分以及组件获取后端数据服务部分
 */
import { Component, Input, OnInit} from "@angular/core";
import { ListComponent } from "../../../components/list/list.component";
import { DataService } from "../../../data.service";
 
declare var globalvar: any;

@Component({
    moduleId: 'list-ranking',
    selector: 'list-ranking',
    template: `<div id={{htmlID}} class="list-ranking">  

<table class="table"> 
<tr>
  <td class="danger">#排名</td> 
  <td class="success">区域名称</td>
  <td class="warning">排名指数</td> 
</tr>
<tr  *ngFor="let x of option.list">
  <td >{{x.no}}</td> 
  <td  >{{x.name}}</td>
  <td  >{{x.value}}</td> 
</tr>
</table>
       
    
    
    </div>
    `,
    styles:[`    
        .list-ranking{    
           
        }      
    `],
    providers:[ DataService ], 
})
export class ListRankingComponent extends ListComponent{ 
    constructor(data: DataService) {
        super(data);      
    }
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[7].url+"?rqfor2="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }
}