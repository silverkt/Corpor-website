import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    flyIn, fadeIn
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log('this is hole shit');
  }

}
