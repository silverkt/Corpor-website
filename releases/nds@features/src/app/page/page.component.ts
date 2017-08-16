import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
    flyIn
  ]
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
