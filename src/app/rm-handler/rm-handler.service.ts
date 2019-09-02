import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RmHandlerService 
{ charactersEndPoint = 'https://rickandmortyapi.com/api/character/';
  locationsEndPoint  = 'https://rickandmortyapi.com/api/location/';
  episodesEndPoint   = 'https://rickandmortyapi.com/api/episode/';
  //currentEpEndPoint  = '';
  constructor(private http: HttpClient) { }
  
  getCharacters    (  ) { return this.http.get(this.charactersEndPoint);          }
  getCharactersById(id) { return this.http.get(`${this.charactersEndPoint}${id}`);}
  getLocations     (  ) { return this.http.get(this.locationsEndPoint);           }
  getLocationsById (id) { return this.http.get(`${this.locationsEndPoint}${id}`); }
  getEpisodes      (  ) { return this.http.get(this.episodesEndPoint);            }
  getEpisodesById  (id) { return this.http.get(`${this.episodesEndPoint}${id}`);  }
  getCurrentEp (endPoint) { return this.http.get(endPoint); }

}
