import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ArtistsService {

	baseUrl = 'http://localhost:3000';

	getAllArtists() {
		return this.http.get(`${this.baseUrl}/api/artists`);
	}

	getOneArtist(artistId) {
		console.log(artistId);
		return this.http.get(`${this.baseUrl}/api/artists/${artistId}`);	
	}

	deleteArtist(artist) {
		console.log(artist.id);
		return this.http.delete(`${this.baseUrl}/api/artists/${artist.id}`);
	}

	saveArtist(newArtist) {
		console.log(newArtist);
		return this.http.post(`${this.baseUrl}/api/artists/`, newArtist);
	}

	updateArtist(updatedArtist) {
		return this.http.put(`${this.baseUrl}/api/artists/${updatedArtist.id}`, updatedArtist);		
	}

  constructor(private http: Http) { }

}