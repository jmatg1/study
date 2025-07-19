import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientService } from "./core/http-client";
import { materialImports } from "./shared/material-imports/material-imports";
@Component({
    selector: 'app-root',
    imports: [
        RouterLink, RouterOutlet,
        // ...materialImports
    ],
    providers: [...materialImports, HttpClientService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
    title = 'app';
    asyncValue = 1;

    constructor(private httpS: HttpClientService, private cdr: ChangeDetectorRef) {}

    ngOnChanges() {
        this.log(`OnChanges`);
    }

    ngOnInit() {
        this.log(`ngOnInit`);
    }

    ngDoCheck() {
        this.log(`ngDoCheck`);
    }

    ngAfterViewInit() {
        this.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        this.log(`ngAfterViewChecked`);
    }

    ngAfterContentInit() {
        this.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        this.log(`ngAfterContentChecked`);
    }

    private log(msg: string) {
        return
        console.log('app-root ' + msg);
    }
}
