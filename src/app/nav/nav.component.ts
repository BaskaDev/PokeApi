import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/services/pokemon.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']  // Corregido 'styleUrl' a 'styleUrls'
})
export class NavComponent implements OnInit {  // Implementa OnInit para inicialización

  // Inicializa personajes como un array vacío

  constructor(private pokemonService: PokemonService) { }  // Inyecta el servicio en el constructor

  ngOnInit(): void {
  
  }


}
