import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: 'error-page',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css'],
})
export class ErrorComponent implements AfterViewInit{
    public timer: number = 3 ;
    constructor(public router: Router) {}
    ngAfterViewInit() {
        let inval = setInterval(()=>{
            this.timer = this.timer -1;
            if (this.timer == 0) {
                clearInterval(inval);
                this.router.navigate(['']);
            }
        },1000)
    }

}