import { Component, OnInit } from '@angular/core';

import { flyIn } from '../../animations/fly-in';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-tpage1',
  templateUrl: './tpage1.component.html',
  styleUrls: ['./tpage1.component.css'],
  animations: [
    flyIn
  ]
})
export class Tpage1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
