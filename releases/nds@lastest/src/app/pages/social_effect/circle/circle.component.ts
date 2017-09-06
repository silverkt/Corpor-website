/**
 * 全国泛能云运营业务展示中心首页能源结构
 * 此组件内包含两个子组件
 * 全国能源结构饼图组件和其中可再生能源细分饼图组件
 */
import { Component, Input, OnInit} from "@angular/core";
import { CircleComponent } from "../../../components/circle/circle.component";
import { DataService } from "../../../data.service";
declare var globalvar: any;
 
 
@Component({
    moduleId: 'social-circle',
    selector: 'social-circle',
    template: `
                
                    <div class="outcircle"  ><div class="innercircle"><bR>{{option.title}}<bR>{{option.value}}{{option.unit}}</div></div>
                    
                     
                
    `,
    styles:[`    
     
        span {
            float: left;
            text-align: center;
            padding:20px;
           
        }  
        
        .outcircle {
            width:130px;
            height:130px;
            background-color:#006fbb;
            border-radius:130px;
            padding:10px;
            float: left;
            margin-right:20px;
        }
        .innercircle {
            width:110px;
            height:110px;
            background-color:#fff;
            border-radius:110px;
             text-align: center;
             padding:20px;
        }
    `],
    providers:[ DataService ], 
})
export class CircleSocialComponent extends CircleComponent {    
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[5].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

 
 
}




@Component({
    moduleId: 'social-circle1',
    selector: 'social-circle1',
    template: `
                
                    <div class="outcircle" ><div class="innercircle"><bR>{{option.title}}<bR>{{option.value}}{{option.unit}}</div></div>
                    
                     
                
    `,
    styles:[`    
     
        span {
            float: left;
            text-align: center;
            padding:20px;
           
        }  
        
        .outcircle {
            width:130px;
            height:130px;
            background-color:#006fbb;
            border-radius:130px;
            padding:10px;
            float: left;
            margin-right:20px;
        }
        .innercircle {
            width:110px;
            height:110px;
            background-color:#fff;
            border-radius:110px;
             text-align: center;
             padding:20px;
        }
    `],
    providers:[ DataService ], 
})
export class Circle1SocialComponent extends CircleComponent {    
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[5].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

 
 
}






@Component({
    moduleId: 'social-circle2',
    selector: 'social-circle2',
    template: `
                
                    <div class="outcircle"><div class="innercircle"><bR>{{option.title}}<bR>{{option.value}}{{option.unit}}</div></div>
                    
                     
                
    `,
    styles:[`    
     
        span {
            float: left;
            text-align: center;
            padding:20px;
           
        }  
        
        .outcircle {
            width:130px;
            height:130px;
            background-color:#006fbb;
            border-radius:130px;
            padding:10px;
            float: left;
            margin-right:20px;
        }
        .innercircle {
            width:110px;
            height:110px;
            background-color:#fff;
            border-radius:110px;
             text-align: center;
             padding:20px;
        }
    `],
    providers:[ DataService ], 
})
export class Circle2SocialComponent extends CircleComponent {    
    /**
     * 更新向api请求的url参数
     */
    protected refreshUrl() {
        this.url = globalvar.api[5].url+"?rqfor="+this.rqfor+"&tscope="+this.tscope+"&ascope="+this.ascope;
        console.log(this.url);
    }

        /**
     * 请求api对应数据
     */
    protected getComponentData(): Promise<any> {
        return this.data.getData(this.url).then(response => {            
            let circleJson = response.json();
            this.option.title  = circleJson.title;
            this.option.value = circleJson.value;
            this.option.unit = circleJson.unit;
        }).catch(()=>{
            console.log('Server\'s data service is down!');
            this.option = {
                "title": "节煤标量",
                "value": "263.1",
                "unit":"吨"
            }
        });
    }

 
 
}