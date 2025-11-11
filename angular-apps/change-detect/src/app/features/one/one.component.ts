import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { ThreeComponent } from "../three/three.component";
import { FourComponent } from "../four/four.component";
import { UnlessDirective } from "../../shared/directive/test.directive";

@Component({
    selector: 'app-one',
    imports: [
        ThreeComponent,
        FourComponent,
        UnlessDirective
    ],
    templateUrl: './one.component.html',
    styleUrl: './one.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent implements DoCheck {
    value = 0;

    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }

    ngDoCheck(): void {
        console.log('app-one ngDoCheck');
    }

    markForCheck() {
        setTimeout(() => {
            this.cdr.markForCheck();
            console.log('markForCheck OneComponent');
        }, 5000)
    }

    detectChanges() {
        setTimeout(() => {
            this.cdr.detectChanges();
            console.log('detectChanges OneComponent');
        }, 5000)
    }
}
