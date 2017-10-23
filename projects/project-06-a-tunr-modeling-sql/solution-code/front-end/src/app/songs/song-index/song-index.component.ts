import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-index',
  templateUrl: './song-index.component.html',
  styleUrls: ['./song-index.component.css']
})
export class SongIndexComponent implements OnInit {

	allSongs = [];

  deleteSong(deletedSong) {
    this.songsService.deleteSong(deletedSong)
    .subscribe(response => {
      let songIndex = this.allSongs.indexOf(deletedSong);
      this.allSongs.splice(songIndex, 1);
    });
  }

  constructor(
  	private songsService : SongsService
  ) { }

  ngOnInit() {
  	this.songsService.getAllSongs()
  		.subscribe(response => {
				console.log(response.json());
				this.allSongs = response.json()
			});
  }

}
