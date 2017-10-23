import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit {

	oneSong;

  constructor(
  	private route : ActivatedRoute,
  	private songsService : SongsService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.songsService.getOneSong(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneSong = response.json();
  		});
  	});
  }

}
