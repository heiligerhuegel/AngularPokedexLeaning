import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  myPokemons: [Pokemon?, Pokemon?, Pokemon?, Pokemon?, Pokemon?, Pokemon?] = [];

  constructor() {}

  addPokemon(newPokemon: Pokemon): void {
    //check for first undefined pos and insert pokemon
    if (this.myPokemons.length < 6) {
      console.log(this.myPokemons);
      this.myPokemons.push(newPokemon);
    } else {
      console.log(this.myPokemons);
      console.log('You cant add more Pokemon to your Team');
    }
  }
}
