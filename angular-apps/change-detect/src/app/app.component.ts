import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { OneComponent } from "./features/one/one.component";
import { TwoComponent } from "./features/two/two.component";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [
        OneComponent,
        TwoComponent,
        RouterOutlet,
        RouterLink
    ],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
    asd = 0;
    value = 0;
    constructor(public cdr: ChangeDetectorRef) {
        setInterval(() => {
            this.value++;
        }, 1000)
    }
}
