import { Component, OnInit } from '@angular/core';

import { flyIn } from "../../animations/fly-in";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  animations: [
    flyIn
  ]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
