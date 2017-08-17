import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations: [
    flyIn
  ]
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
