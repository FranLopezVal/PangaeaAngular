import { Component, ComponentFactoryResolver,  ViewChild, 
    ViewContainerRef, ComponentFactory, Type} from '@angular/core';
    import WidgetNode from './../../models/widgetNode';
    
    @Component({
    
        selector: 'dynamic-component',
        template: '<div #container><ng-content></ng-content></div>'
    
    })
    export class DynamicComponent {
     private _elements: WidgetNode[] = [];    
     @ViewChild("container", { read: ViewContainerRef }) container: any; 
     
     constructor() {
     }
     
     public AddDynamic(ngItem: Type<WidgetNode>): WidgetNode {
     const ref = this.container.createComponent(ngItem);
     
     const newItem: WidgetNode = ref.instance;
     this._elements.push(newItem);                 
     return newItem;
   }
      resetContainer(){
          this._elements = [];
      }
    }