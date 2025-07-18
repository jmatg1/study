import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-six',
  imports: [],
  templateUrl: './six.component.html',
  styleUrl: './six.component.scss'
})
export class SixComponent {
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
