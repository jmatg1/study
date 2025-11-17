import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, computed, contentChild, contentChildren,
    DoCheck, inject,
    input, model,
    OnInit,
    SimpleChanges, viewChild, viewChildren, ViewContainerRef
} from '@angular/core';
import { ViewQueriesChildComponent } from "./view-queries-child/view-queries-child.component";
import { NgComponentOutlet } from "@angular/common";

@Component({
    selector: 'app-view-queries',
    imports: [
        ViewQueriesChildComponent,
        NgComponentOutlet
    ],
    templateUrl: './view-queries.component.html',
    styleUrl: './view-queries.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewQueriesComponent implements AfterViewInit {
    component = ViewQueriesChildComponent;
    header = viewChild(ViewQueriesChildComponent);
    vChildren = viewChildren('content');
    headerText = computed(() => {
        console.log(this.header()?.text, 1);
        return this.header()?.text
    });


    ngAfterViewInit() {
        console.log(this.vChildren());
    }

    private viewContainer = inject(ViewContainerRef);

    loadContent() {
        this.viewContainer.createComponent(ViewQueriesChildComponent);
    }

}
