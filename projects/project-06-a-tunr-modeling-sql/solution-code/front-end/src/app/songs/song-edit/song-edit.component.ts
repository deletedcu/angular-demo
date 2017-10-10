import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

	updatedSong = <any>{};

  constructor(
    private route : ActivatedRoute,
    private songsService : SongsService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.songsService.getOneSong(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedSong = response.json();
      });
    });
  }

  updateSong(updatedSong) {
    console.log("updating song yo!");
    this.songsService.updateSong(updatedSong)
    .subscribe(response => {
      console.log(response.json());
      let song = response.json();
      window.location.href = "/songs/" + song.id;
    });  
  }

}
