import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs.component';
import { SongIndexComponent } from './song-index/song-index.component';
import { SongNewComponent } from './song-new/song-new.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongShowComponent } from './song-show/song-show.component';

const aboutRoutes: Routes = [
    {
        path: 'songs',
        component: SongsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: SongIndexComponent
            },
            {
                path: 'new',
                component: SongNewComponent
            },
            {
                path: 'edit/:id',
                component: SongEditComponent
            },
            {
                path: ':id',
                component: SongShowComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SongsRoutingModule { }