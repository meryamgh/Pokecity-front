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


  public getAllReceiptsFromPokestore(){
    return this.http.get('http://localhost:8084/pokestore/receipts');
  }

  public getPokemonByLimitedPrice(limitedPrice : number):Observable<PokemonFromStore[]>{
    return this.http.get<PokemonFromStore[]>('http://localhost:8084/pokestore/inventory/pokemon/90');
  }

  public getAllSchoolTickets(){
    return this.http.get('http://localhost:8083/pokeschool/Tickets/AllTickets');
  }


  public getAllSchoolSession(){
    return this.http.get('http://localhost:8083/pokeschool/Sessions/AllSessions');
  }

  public getDrsseurBankAccount(idDresseur : number){
    return this.http.get("http://localhost:8082/bank/bank/1");
  }

  public getAllDresseurPokemon(idDresseur : number){
    return this.http.get("http://localhost:8082/pokemairie/pokemon/all/1");
  }

  public getPokemonFromMairie(idPokemon : number){
    return this.http.get("http://localhost:8082/pokemairie/pokemon/8");
  }

  public getAllTreatmentsTickets(){
    return this.http.get("http://localhost:8081/infirmerie/treatments");
  }

  public getAllFightSession(){
    return this.http.get("http://localhost:8082/fight/pokemon/1");
  }


  /*

  GET
  http://localhost:8082/fight/pokemon/1
    http://localhost:8081/infirmerie/treatments               ok
  http://localhost:8082/pokemairie/pokemon/8                  ok
    http://localhost:8082/pokemairie/pokemon/all/1            ok
  http://localhost:8082/bank/bank/1                           ok
    http://localhost:8083/pokeschool/Sessions/AllSessions     ok
  http://localhost:8083/pokeschool/Tickets/AllTickets         ok
    http://localhost:8084/pokestore/inventory/pokemon         ok
  http://localhost:8084/pokestore/inventory/pokemon/90        ok
    http://localhost:8084/pokestore/receipts                  ok

  POST
  http://localhost:8082/fight/pokemon/1
    http://localhost:8081/infirmerie/1
  http://localhost:8082/pokemairie/goToSchool/1
    http://localhost:8084/pokestore/purchase/6

    */



}
