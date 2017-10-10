import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-show',
  templateUrl: './artist-show.component.html',
  styleUrls: ['./artist-show.component.css']
})
export class ArtistShowComponent implements OnInit {

	oneArtist;

  constructor(
  	private route : ActivatedRoute,
  	private artistsService : ArtistsService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.artistsService.getOneArtist(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneArtist = response.json();
  		});
  	});
  }

}
