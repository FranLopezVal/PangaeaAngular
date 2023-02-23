import { Component,ViewChild, ViewRef } from '@angular/core';
import WidgetNode from 'src/models/widgetNode';
import { DataStructComponent as DataStruct, DataStructComponent} from '../data-struct/data-struct.component';
import { DynamicComponent } from '../dynamic.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [DataStructComponent]
})

export class DashboardComponent {
  public elements: Array<{ view: ViewRef, component?: WidgetNode}>=[];
   private WidgetClasses:any = [
    'struct',DataStructComponent,
    'nstruct',DataStructComponent
  ];

  @ViewChild(DynamicComponent) dynamicComponent:DynamicComponent | undefined;  
  
  addComponent(widget: string ): void{
    let component = this.dynamicComponent?.AddDynamic(DataStructComponent);
    let view: ViewRef = this.dynamicComponent?.container.detach(0);
    this.elements.push({view,component});

    this.dynamicComponent?.resetContainer();
  }
}
