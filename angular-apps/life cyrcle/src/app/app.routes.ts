import { Routes } from '@angular/router';
import { RoutesNoteList } from "./features/note-list-page/note-list-page.routes";

export const routes: Routes = [
    {
        path: '',
        children: [

        ]
    },
    ...RoutesNoteList
    //
];
