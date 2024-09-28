import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonService } from '../core/services/pokemon.service';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { Pokemon, PokemonResults } from '../interfaces/pokemon-interface';
import { NavComponent } from "../nav/nav.component";
import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, NavComponent,ErrorMessageComponent ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  //INYECTAR POKEMON SERVICE Y ALMACENARLO EN UN OBSERVABLE
  public errorMessage! : string;
  public pokemonResults$! : Observable<PokemonResults>;
  personajes: Pokemon[] = [];
  personajesAux: Pokemon[] | undefined;
  constructor(private service: PokemonService){
  
  }

  ngOnInit(): void {

      // Llama al servicio para obtener la lista de Pokémon en el ciclo de vida OnInit
      this.service.getPokemonList().subscribe(
        (data) => {
          this.personajes = data.results;  // Asigna los resultados a personajes
          this.personajesAux = data.results;
        },
        (error) => {
          console.error('Error fetching Pokémon:', error);
        }
      );


    this.pokemonResults$ = this.service.getPokemonList().pipe(catchError((error:string) => {
        this.errorMessage = error;
        return EMPTY;
    }))

  }

 

  filter(e: any): void {
   const search : string = e.target.value;
   this.personajesAux = [];
    for (let personaje of this.personajes) {

      if (personaje.name.toLowerCase().startsWith(search.toLowerCase())) {
        this.personajesAux?.push(personaje)
        console.table(this.personajesAux)
      }
    }

   


   

  }
  

 
}