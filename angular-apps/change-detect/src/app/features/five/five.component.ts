import { ChangeDetectorRef, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-five',
  imports: [],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent {
    @Input() set newValue(value: number) {
        this.value = value;
        this.val.set(value)
    }
    val = signal(0)
    value = 0;
    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
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
