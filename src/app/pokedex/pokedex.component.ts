import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../services/get-pokemon.service';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  //Loading
  loading: boolean = false;
  newloadPokemon: number = 150;
  maxPokemon: boolean = false;

  //AllPokemons
  pokemons: Pokemon[] = [];

  //Filteredpokemons
  filteredPokemon: Pokemon[] = [];

  // Filter
  name: string = '';
  type: string = '';
  height: number = 0;
  weight: number = 0;

  constructor(private getPokemonService: GetPokemonService) {}

  setData(event: [string, string, number, number]): void {
    this.name = event[0].toLocaleLowerCase();
    this.type = event[1].toLocaleLowerCase();
    this.height = event[2];
    this.weight = event[3];
    this.setFilter();
  }

  setFilter(): void {
    this.filteredPokemon = this.pokemons;
    if (this.name != '') {
      this.filteredPokemon = this.filteredPokemon.filter((e) =>
        e.name.toLocaleLowerCase().includes(this.name)
      );
    }
    if (this.type != '') {
      this.filteredPokemon = this.filteredPokemon.filter((e) => {
        if (
          e.types[0].type.name === this.type ||
          e.types[1]?.type.name === this.type
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
    if (this.height != 0) {
      this.filteredPokemon = this.filteredPokemon.filter(
        (e) => e.height > this.height
      );
    }
    if (this.weight != 0) {
      this.filteredPokemon = this.filteredPokemon.filter(
        (e) => e.weight > this.weight
      );
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.appendItems();
    this.filteredPokemon = this.pokemons;
    this.loading = false;
  }

  onScrollDown(ev: any): void {
    if (!this.loading && !this.maxPokemon) {
      this.loading = true;
      this.appendItems();
    }
  }

  appendItems() {
    for (
      let i = this.pokemons.length + 1;
      i < this.pokemons.length + this.newloadPokemon;
      ++i
    ) {
      this.getPokemonService.getPokemon(i).subscribe(
        (e: Pokemon) => {
          this.pokemons.push(e);
          this.pokemons.sort((a, b) => a.id - b.id);
        },
        (_error: any) => {
          i = this.pokemons.length + this.newloadPokemon + 1;
          this.maxPokemon = true;
        }
      );
    }
    this.loading = false;
    this.setFilter();
  }
}
