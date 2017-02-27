import { Component, OnInit, OnDestroy, trigger, state, transition, animate, style } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  template: `
 
                      <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
                      <div [@flyInOut]="state" class="pages navbar-through toolbar-through">
                        <!-- Page, "data-page" contains page name -->
                        <div data-page="index" class="page">
                          <!-- Scrollable page content -->
                          <div class="page-content">
                            <p>Page content goes here</p>
                            <!-- Link to another page -->
                            ssss <a routerLink="/" (click)="changeState()">Heroes</a><br><br>{{shit}}

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
  shit: string;
  constructor(private http: Http) {}
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

  ngOnDestroy() {
    this.state = 'out';
    console.log('destroy11');
  }
  changeState() {
    this.state = 'out';
    console.log("clicked");
  }


}
