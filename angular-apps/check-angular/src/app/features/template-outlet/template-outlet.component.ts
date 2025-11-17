import { Component, ElementRef, inject, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-template-outlet',
    imports: [
        NgTemplateOutlet
    ],
  templateUrl: './template-outlet.component.html',
  styleUrl: './template-outlet.component.scss',
})
export class TemplateOutletComponent {
    viewC = viewChild.required<TemplateRef<any>>('myFragment1');
    private viewContainer = inject(ViewContainerRef);

    onCreate() {
        console.log(this.viewC());
        this.viewContainer.createEmbeddedView(this.viewC());
    }
}
