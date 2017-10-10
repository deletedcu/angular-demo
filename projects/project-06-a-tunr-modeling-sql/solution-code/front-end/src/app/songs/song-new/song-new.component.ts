import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css']
})
export class SongNewComponent implements OnInit {

	newSong = <any>{};

    constructor(
      private songsService : SongsService
    ) { }

    ngOnInit() {

    }

    saveSong(newSong) {
      console.log("saving song");
      console.log(newSong);
      this.songsService.saveSong(newSong)
          .subscribe(response => {
        console.log(response.json());
        let song = response.json();
        window.location.href = "/songs/" + song.id;
      })
    }

}
