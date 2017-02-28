import { Component, OnInit, OnDestroy, trigger, state, transition, animate, style } from '@angular/core';
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
                           


    <script src="http://cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
    <iframe id="vd" style="padding:0;" scrolling="no" frameborder="0"></iframe>
    <button id="button">click</button>










                            ssss <a routerLink="/" (click)="changeState()">Heroes</a><br><br>{{site}}

                               <div style="width:100%;height:20px;background-color:#333;" (click)="changeState()">click</div>
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
export class SecondComponent implements OnInit, OnDestroy {
  title = 'app works!';
  state: string;
  people: any;
  site: string;
  constructor(private http: Http, private dataService: DataService) {}
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
    this.dataService.myData.then((response)=>{
      this.site = response.json().site;
    }); 



     
      $(document).ready(function() { 
              
              
                var lwidth = screen.width;
              var lheight = Math.floor(lwidth * 213 / 299);
              $("#vd").width(lwidth);
              $("#vd").height(lheight);
              $("#vd").prop({
                  src: "http://91.p9p.co/ev.php?VID=89a3AjI0rOMKYqCqz28jnZvINzlpfF7vCbWDpX7GGNThl46i"
              });
              var shit = $("#vd").contents().find("#mediaplayer");
              console.log();
              
      
      }); 
      
        
         
     
  }

  ngOnDestroy() {
    this.state = 'out';
    console.log('destroy11');
  }
  changeState() {
    this.state = 'out';
    console.log("clicked");
  }


}
