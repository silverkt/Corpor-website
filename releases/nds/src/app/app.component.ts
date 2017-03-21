import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var Date: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  nodeList: any = {
    '1001':'南北院',
    '1002':'七修居' 
  };
  jsonData: any = {};
  constructor( private dataService: DataService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((param:any)=>{
      console.log(param.id);
      if(typeof(param.id)=='undefined') {
        this.router.navigate(['/', '1001']);
      }
      let url: string = 'http://222.222.120.72:8080/realtime/ShowDemoServlet?projectid='+param.id;
      //console.log(url);
      this.getData(url);
      this.autoFresh(6000,url);  
    });       
  }

  autoFresh(time: number, url: string): any{
        setInterval(()=>{
            this.getData(url);
        },time)
  }

  getData(url: string) {
    this.dataService.getData(url).then(response => {
      this.jsonData  = response.json();
    });
  }
  
}
