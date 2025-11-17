import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, contentChild, contentChildren,
    DoCheck,
    input, model,
    OnInit, signal,
    SimpleChanges
} from '@angular/core';
import { MATERIAL_IMPORTS } from "../../../shared/material";
@Component({
    selector: 'app-view-queries-child',
    imports: [
        MATERIAL_IMPORTS,
    ],
    templateUrl: './view-queries-child.component.html',
    styleUrl: './view-queries-child.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewQueriesChildComponent implements AfterViewInit {
    items = contentChildren('content');
    text = 'text';

    onChangeText () {
        this.text = (String(Math.random()).slice(2, 6))
    }
    
    ngAfterViewInit() {
        console.log(this.items().map(el => el));
    }
    
}
