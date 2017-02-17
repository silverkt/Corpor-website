import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-board',
    template: `
<router-outlet>    
</router-outlet>
    `,
})

export class MainboardComponent {
    title: string = 'Tour of Heroes';
}
