import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, computed, contentChild, contentChildren,
    DoCheck,
    input, model,
    OnInit,
    SimpleChanges, viewChild, viewChildren
} from '@angular/core';
import { ViewQueriesChildComponent } from "./view-queries-child/view-queries-child.component";

@Component({
    selector: 'app-view-queries',
    imports: [
        ViewQueriesChildComponent
    ],
    templateUrl: './view-queries.component.html',
    styleUrl: './view-queries.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewQueriesComponent implements AfterViewInit {
    header = viewChild(ViewQueriesChildComponent);
    vChildren = viewChildren('content');
    headerText = computed(() => {
        console.log(this.header()?.text, 1);
        return this.header()?.text
    });


    ngAfterViewInit() {
        console.log(this.vChildren());
    }


}
