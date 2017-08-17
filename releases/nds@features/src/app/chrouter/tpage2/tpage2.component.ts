import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { fadeIn } from '../../animations/fade-in';


@Component({
  selector: 'app-tpage2',
  templateUrl: './tpage2.component.html',
  styleUrls: ['./tpage2.component.css'],
  animations: [
    flyIn
  ]
})
export class Tpage2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
