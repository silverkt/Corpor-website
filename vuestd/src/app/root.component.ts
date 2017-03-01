import { Component, OnInit, Output } from '@angular/core';
import { DataService } from "./data.service";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `
    <!-- Status bar overlay for full screen mode (PhoneGap) -->
                  <div class="statusbar-overlay"></div>
                  <!-- Panels overlay-->
                  <div class="panel-overlay"></div>
                  <!-- Left panel with reveal effect-->
                  <div class="panel panel-left panel-reveal">
                    <div class="content-block">
                      <p>Left panel content goes here</p>
                      thisisisisisi
                    </div>
                  </div>
                  <!-- Views -->
                  <div class="views">
                    <!-- Your main view, should have "view-main" class -->
                    <div class="view view-main">
                      <!-- Top Navbar-->
                      <div class="navbar">
                        <div class="navbar-inner">
                          <!-- We need cool sliding animation on title element, so we have additional "sliding" class -->
                          <div class="center sliding">{{title}}</div>
                          <div class="right">
                            <!-- 
                              Right link contains only icon - additional "icon-only" class
                              Additional "open-panel" class tells app to open panel when we click on this link
                            -->
                            <a href="#" class="link icon-only open-panel"><i class="icon icon-bars"></i></a>
                          </div>
                        </div>
                      </div>
                      <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
<router-outlet >    
</router-outlet>               

                      <!-- Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes-->
                      
                      <!-- Bottom Toolbar-->
                      <div class="toolbar">
                        <div class="toolbar-inner">
                          <!-- Toolbar links -->
                           <a href="#" class="link"> </a>
                          <a href="#" class="link">Link</a>
                        </div>
                      </div>
                    </div>
                  </div>
    `,
    providers:[DataService],
})

export class RootComponent implements OnInit{
    title: string = '小明的美好生活';
    myData: any = {};
    constructor(private Data: DataService) {}
    ngOnInit() {
        this.Data.getData();
        this.Data.myData.then((response) => 
        {
            this.myData = response.json();
            
            // for (var i in this.myData.items) {
            //   console.log(i);
            //   console.log(this.myData.items[i]);
            //   console.log('---------');
            // }

           
            //console.log(response.json());
        });
         
    }
}

