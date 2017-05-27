import { Component,ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy } from "@angular/core";

import { TestComponent } from "./test.component";
import { Test1Component } from "./test1.component";  

@Component({
    moduleId: 'partition-index',
    selector: 'app-root',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css']
})
export class PartitionIndexComponent implements OnDestroy{
    componentRef: ComponentRef<TestComponent>;
    @ViewChild("alertContainer", { read: ViewContainerRef}) container: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {}

    createComponent(str: string) {
        this.container.clear();
        const factory: ComponentFactory<TestComponent> = 
        this.resolver.resolveComponentFactory(TestComponent);
        this.componentRef = this.container.createComponent(factory);
        console.log(str);
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    
}