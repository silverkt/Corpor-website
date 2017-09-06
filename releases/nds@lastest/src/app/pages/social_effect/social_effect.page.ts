import { Component } from "@angular/core";

@Component({
    moduleId: 'level1-social-effect',
    selector: 'root-app',
    templateUrl: 'social_effect.page.html',
    styleUrls: ['social_effect.page.css']
})
export class SocialEffectPage {
     trendrqfor = 'socialtrend1';

     changeRqfor(trend: string) {
         console.log('click3e');
         this.trendrqfor = trend;
     }

}