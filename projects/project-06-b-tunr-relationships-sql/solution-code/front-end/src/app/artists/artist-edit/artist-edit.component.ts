import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.css']
})
export class ArtistEditComponent implements OnInit {

  updatedArtist = <any>{};

  constructor(
    private route : ActivatedRoute,
    private artistsService : ArtistsService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.artistsService.getOneArtist(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedArtist = response.json();
      });
    });
  }

  updateArtist(updatedArtist) {
    console.log("updating artist yo!");
    this.artistsService.updateArtist(updatedArtist)
    .subscribe(response => {
      console.log(response.json());
      let artist = response.json();
      window.location.href = "/artists/" + artist.id;
    });  
  }

}
