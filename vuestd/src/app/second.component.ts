import { Component, OnInit, AfterViewInit, trigger, state, transition, animate, style } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { DataService } from "./data.service";

declare var $: any;


@Component({
  selector: 'app-root',
  template: `
 
                      <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
                      <div [@flyInOut]="state" class="pages navbar-through toolbar-through">
                        <!-- Page, "data-page" contains page name -->
                        <div data-page="index" class="page">
                          <!-- Scrollable page content -->
                          <div class="page-content">
                           


   
    <iframe id="vd" style="padding:0;" scrolling="no" frameborder="0"></iframe>
 










                             <a class="button button-fill"routerLink="/" (click)="changeState()">返回目录列表</a> 

                               
                          </div>
                        </div>
                      </div>                    
   `,
   animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(100%)'})),
      transition('void => in', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('in => out', [
        style({transform: 'translateX(0)'}),
        animate(1000)
      ])
    ])
  ],
})
export class SecondComponent implements OnInit, AfterViewInit {
  title = 'app works!';
  state: string;
  people: any;
  site: string;
  constructor(
    private http: Http, 
    private dataService: DataService, 
    private activatedroute: ActivatedRoute,
    ) {}
  ngOnInit() {
    this.state = 'in';
    // this.http.get('https://api.github.com/').toPromise().then((response) => 
    // {
    //     console.log(response.json());
    //     console.log("toPromise");
    // });

    // this.http.get('https://api.github.com/').subscribe((res:Response) => 
    // {
    //     this.people = res.json();
    //     console.log(this.people.current_user_url);
    //     this.shit = this.people.current_user_url;
    //     console.log("subscribe");
    // }); 
    
  }

  ngAfterViewInit(){
    this.dataService.myData.then((response)=>{
      this.site = response.json().site;
      this.activatedroute.params.subscribe((param: any)=>{
        this.site = 'http://'+this.site+param.id;
                     
                          var lwidth = screen.width;
                          var lheight = Math.floor(lwidth * 213 / 299);
                          $("#vd").width(lwidth);
                          $("#vd").height(lheight);
                          $("#vd").prop({
                              src: this.site,
                          });
                         
                         // console.log(this.site); 
                  
        
      });  
    });      
    
  }

  changeState() {
    this.state = 'out';
    console.log("clicked");
  }



}
