import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import {PokemonFromStore} from "./model/pokemonFromStore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Pokemon';
  pokemonStored !:PokemonFromStore[];

  constructor(private service:PokemonService) {
  }

  ngOnInit(): void {
    this.service.getAllPokemonFromPokestore().subscribe((val) => {
      this.pokemonStored = val;
    });
  }
}
