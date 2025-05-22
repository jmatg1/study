import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NoteListPageComponent } from './features/note-list-page/note-list-page.component';
import { catchError, forkJoin, of } from "rxjs";
import { HttpClientService } from "./core/http-client";
import { materialImports } from "./shared/material-imports/material-imports";

@Component({
  selector: 'app-root',
    imports: [
        RouterLink, RouterOutlet,
        // ...materialImports
    ],
    // providers: [...materialImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'app';

}
