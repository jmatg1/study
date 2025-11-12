import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    input, model,
    OnInit,
    SimpleChanges
} from '@angular/core';
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
export class OneComponent implements DoCheck, OnInit {
    value = 0;
    value2 = model(2);

    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }

    ngOnInit(): void {
        console.log('ngOnInit', this.value2());
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
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
