export class PokemonFromStore{
  idPokemon : number;
  name : string;
  type : String;
  prix : number;

  constructor(id:number,nom:string,type:string,prix:number) {
    this.idPokemon = id;
    this.name = nom;
    this.type = type;
    this.prix = prix;
  }
}
