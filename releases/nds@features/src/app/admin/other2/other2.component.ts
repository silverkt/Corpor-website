import { Component, OnInit } from '@angular/core';

import { fadeIn } from "../../animations/fade-in";

@Component({
  selector: 'app-other2',
  templateUrl: './other2.component.html',
  styleUrls: ['./other2.component.css'],
  animations: [
    fadeIn
  ]
})
export class Other2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
