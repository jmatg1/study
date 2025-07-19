import { Routes } from '@angular/router';

export const RoutesNoteList: Routes = [
    {
        path: 'list',
        loadComponent: () => import('./note-list-page.component').then(m => m.NoteListPageComponent),
        // children: [
        //     {
        //         path: 'create',
        //         loadComponent: () => import('../add-new-note/add-new-note.component').then(m => m.AddNewNoteComponent)
        //     }
        // ]
    }
];
