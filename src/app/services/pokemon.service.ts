import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonFromStore} from "../model/pokemonFromStore";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  public getAllPokemonFromPokestore():Observable<PokemonFromStore[]>{
    return this.http.get<PokemonFromStore[]>('http://localhost:8084/pokestore/inventory/pokemon');
  }

  getReceiptPokemon(){

  }

}
