import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-three',
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
    value = 0;
    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }
}
