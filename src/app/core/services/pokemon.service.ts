import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PokemonResults } from '../../interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResults> {

    return this.http.get<PokemonResults>(environment.apiUrlBase+'pokemon?limit=100&offset=0');
    
  }
}