import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { OneComponent } from "./features/one/one.component";
import { TwoComponent } from "./features/two/two.component";

@Component({
    selector: 'app-root',
    imports: [
        OneComponent,
        TwoComponent,
    ],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    value = 0;
    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }
}
