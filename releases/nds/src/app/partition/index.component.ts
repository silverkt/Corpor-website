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
    
        if (str == 'success') {
            var factory: ComponentFactory<TestComponent> = 
            this.resolver.resolveComponentFactory(TestComponent);
        } else {
            var factory: ComponentFactory<Test1Component> = 
            this.resolver.resolveComponentFactory(Test1Component);
        }
       
        this.componentRef = this.container.createComponent(factory);
        console.log(str);
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    
}