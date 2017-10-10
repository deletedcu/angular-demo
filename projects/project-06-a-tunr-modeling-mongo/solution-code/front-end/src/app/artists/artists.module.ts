import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtistIndexComponent } from './artist-index/artist-index.component';
import { ArtistsComponent } from './artists.component';
import { ArtistNewComponent } from './artist-new/artist-new.component';
import { ArtistEditComponent } from './artist-edit/artist-edit.component';
import { ArtistShowComponent } from './artist-show/artist-show.component';
import { ArtistsService } from './artists.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ArtistIndexComponent, ArtistsComponent, ArtistNewComponent, ArtistEditComponent, ArtistShowComponent],
  providers: [ArtistsService]
})
export class ArtistsModule { }
