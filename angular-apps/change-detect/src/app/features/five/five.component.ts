import { ChangeDetectorRef, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-five',
  imports: [],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent {
    @Input('newValue') newValue: number | undefined;
    val = signal(0)
    value = 0;
    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
            // this.val.update(value1 => value1 + 1);
        }, 1000)
    }

    ngOnChanges(){
        console.log('ngOnChange');
    }
    ngDoCheck(){
        console.log('ngDoCheck');
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
