import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-new',
  templateUrl: './artist-new.component.html',
  styleUrls: ['./artist-new.component.css']
})
export class ArtistNewComponent implements OnInit {

	newArtist = <any>{};

  constructor(
  	private artistsService : ArtistsService
  ) { }

  ngOnInit() {

  }

  saveArtist(newArtist) {
  	console.log("saving artist");
  	console.log(newArtist);
  	this.artistsService.saveArtist(newArtist)
  			.subscribe(response => {
			console.log(response.json());
			let artist = response.json();
			window.location.href = "/artists/" + artist.id;
		})
  }

}
