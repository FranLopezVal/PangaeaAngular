import { Component,ElementRef,  Renderer2, OnInit } from '@angular/core';

@Component
({
    selector:'node',
    template: '<ng-content></ng-content>',
})
export default class WidgetNode implements OnInit {

    constructor(protected _ngElRef: ElementRef, protected _renderer: Renderer2)
    {}
    public get element(): any {
        return this._ngElRef.nativeElement;
    }
    removeFromParent() {
         this._ngElRef.nativeElement.remove();
    }
    ngOnInit(): void {
        this._renderer.setAttribute(this._ngElRef.nativeElement,"class","node");
    }
}