import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  myPokemons: Pokemon[] = [];

  constructor() {}

  addPokemon(newPokemon: Pokemon): void {
    //check for first undefined pos and insert pokemon
    if (this.myPokemons.length < 6 && this.checkForDoublePokemon(newPokemon)) {
      // console.log(this.myPokemons);
      this.myPokemons.push(newPokemon);
    } else {
      // console.log(this.myPokemons);
      console.log('You cant add more Pokemon to your Team');
    }
  }

  checkForDoublePokemon(newPokemon: Pokemon): boolean {
    let foundPokemons = this.myPokemons.find((pokemon) => {
      return pokemon.name === newPokemon.name;
    });
    return !foundPokemons;
  }

  remove(removePokemon: Pokemon): void {
    this.myPokemons = this.myPokemons.filter((pokemon) => {
      if (pokemon.name !== removePokemon.name) {
        return true;
      } else {
        return false;
      }
    });
  }

  checkStatus(statusPokemon: Pokemon): boolean {
    let foundPokemons = this.myPokemons.find((pokemon) => {
      return pokemon.name === statusPokemon.name;
    });
    return !!foundPokemons;
  }
}
