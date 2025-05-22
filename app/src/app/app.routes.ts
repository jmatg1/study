import { Routes } from '@angular/router';
import { RoutesNoteList } from "./features/note-list-page/note-list-page.routes";
import { NoteListPageComponent } from "./features/note-list-page/note-list-page.component";

export const routes: Routes = [
    {
        path: '',
        children: [

        ]
    },
    ...RoutesNoteList
    //
];
