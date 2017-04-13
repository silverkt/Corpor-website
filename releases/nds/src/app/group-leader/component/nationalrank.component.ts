import { Component, AfterViewInit, Input } from "@angular/core";
import { NationalRankPie } from "./nationalrank.pie.option";
import { NationalRankList } from "./nationalrank.list.option";

import { GpleaderDataService } from "../data.service";
declare var echarts: any;

@Component({
    moduleId: 'national-rank',
    selector: 'national-rank',
    template: `
                <div class="row">
                    <div class="col-md-6" id="nationalrank1"></div>
                    <div class="col-md-6" id="nationalrank2">
                        <table class="table">
                            <thead>
                                <th>排名</th><th>区域</th><th>泛能收益</th><th>占比</th>
                            </thead>
                            <tbody>
                            <tr *ngFor="let item of option2">
                                <td>{{item.id}}</td><td>{{item.region}}</td><td>{{item.benifit}}</td><td>{{item.percent}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>  `,
    styles: [`
            .col-md-6 {    
            height: 230px;
        }  
    `],
    providers: [ GpleaderDataService ],
})
export class NationalRankComponent implements AfterViewInit {
    public _scope: string;
    option1: any = NationalRankPie;
    option2: Array<any> = NationalRankList;
 
    @Input()
    set scope(scope) {
        this._scope = scope;
        this.getComData();
    }
    get scope() {
        return this._scope;
    }

    constructor(public data: GpleaderDataService ) { }
 
    ngAfterViewInit() {
     
    }

    getComData() {
        this.data.getRankPieData(this.scope).then(response => {            
            var myChart = echarts.init(document.getElementById('nationalrank1'));  
            this.option1.series[0].data = response.json().pie;       
            myChart.setOption(this.option1);   
        });



    }
}