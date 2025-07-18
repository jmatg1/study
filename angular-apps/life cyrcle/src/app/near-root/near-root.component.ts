import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-near-root',
    imports: [],
    templateUrl: './near-root.component.html',
    styleUrl: './near-root.component.scss',

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NearRootComponent {
    intervalValue = 0

    constructor(private cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.intervalValue++;
        }, 1000)
    }
}
