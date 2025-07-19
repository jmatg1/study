import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { OneComponent } from "../one/one.component";
import { FiveComponent } from "../five/five.component";
import { SixComponent } from "../six/six.component";

@Component({
  selector: 'app-two',
    imports: [
        FiveComponent,
        SixComponent
    ],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss',
    changeDetection: ChangeDetectionStrategy.Default
})
export class TwoComponent {
    value = 0;
    newValue = 0;

    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }
    asd(){}

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

    sendValue() {
        setTimeout(() =>{
            this.newValue = Math.random();
            console.log('передали число ' + this.newValue);
            this.cdr.detectChanges();
        }, 5000)
    }

    protected readonly Math = Math;
}
