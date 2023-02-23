import { Component, OnInit, Renderer2, Inject, forwardRef, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import WidgetNode from 'src/models/widgetNode';

@Component({
  selector: 'app-data-struct',
  templateUrl: './data-struct.component.html',
  //styleUrls: ['./data-struct.component.css']
  providers: [{provide:WidgetNode,
  useExisting: forwardRef(()=>DataStructComponent)}]
})
export class DataStructComponent extends WidgetNode implements OnInit {

  nameComponent: string | undefined;

  GlobalCategory?: string = "global"; 
  InnerCategory?: string = "main";

  constructor(ngEl: ElementRef, renderer: Renderer2) {
    super(ngEl, renderer);
    }
    override ngOnInit(): void {
    }
  

}
