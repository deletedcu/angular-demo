import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SongIndexComponent } from './song-index/song-index.component';
import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongNewComponent } from './song-new/song-new.component';
import { SongShowComponent } from './song-show/song-show.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [SongsComponent, SongIndexComponent, SongEditComponent, SongNewComponent, SongShowComponent],
  providers: [SongsService]
})
export class SongsModule { }
