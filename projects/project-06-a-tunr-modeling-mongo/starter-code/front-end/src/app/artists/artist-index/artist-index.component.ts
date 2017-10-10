import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-index',
  templateUrl: './artist-index.component.html',
  styleUrls: ['./artist-index.component.css']
})
export class ArtistIndexComponent implements OnInit {

	allArtists = [];

  deleteArtist(deletedArtist) {
    this.artistsService.deleteArtist(deletedArtist)
    .subscribe(response => {
      let artistIndex = this.allArtists.indexOf(deletedArtist);
      this.allArtists.splice(artistIndex, 1);
    });
  }

  constructor(
  	private artistsService : ArtistsService
  ) { }

  ngOnInit() {
  	this.artistsService.getAllArtists()
  		.subscribe(response => {
				console.log(response.json());
				this.allArtists = response.json()
			});
  }

}
