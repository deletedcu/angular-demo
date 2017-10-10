import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists.component';
import { ArtistIndexComponent } from './artist-index/artist-index.component';
import { ArtistNewComponent } from './artist-new/artist-new.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { ArtistShowComponent } from './artist-show/artist-show.component';


const aboutRoutes: Routes = [
    {
        path: 'artists',
        component: ArtistsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: ArtistIndexComponent
            },
            {
                path: 'new',
                component: ArtistNewComponent
            },
            {
                path: 'edit/:id',
                component: ArtistEditComponent
            },
            {
                path: ':id',
                component: ArtistShowComponent
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
export class ArtistsRoutingModule { }