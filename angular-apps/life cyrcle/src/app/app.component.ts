import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NoteListPageComponent } from './features/note-list-page/note-list-page.component';
import { catchError, forkJoin, of } from "rxjs";
import { HttpClientService } from "./core/http-client";
import { materialImports } from "./shared/material-imports/material-imports";
import { NearRootComponent } from "./near-root/near-root.component";

@Component({
  selector: 'app-root',
    imports: [
        RouterLink, RouterOutlet,
        NearRootComponent
        // ...materialImports
    ],
    providers: [...materialImports, HttpClientService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
    changeDetection:  ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'app';
    asyncValue = 1;
    constructor(private httpS: HttpClientService, private cdr: ChangeDetectorRef) {
        console.log(this.httpS.param = 2);
        setInterval(() => {
            this.asyncValue = this.asyncValue + 1;
            // this.cdr.markForCheck();
        }, 1000)
    }
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
        console.log('app-root ' + msg);
    }
}
