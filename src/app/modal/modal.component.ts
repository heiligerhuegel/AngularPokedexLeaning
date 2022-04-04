import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  isOnTeam: boolean = false;

  constructor(public Team: TeamService) {}

  @Input() pokemon!: Pokemon;

  ngOnInit(): void {
    this.isOnTeam = this.Team.checkStatus(this.pokemon);
  }

  addToTeam(): void {
    // console.log(
    //   'I want to add:' + this.pokemon.name.toLocaleUpperCase() + ' to my team'
    // );
    this.Team.addPokemon(this.pokemon);
    this.isOnTeam = true;
  }

  remove(): void {
    this.Team.remove(this.pokemon);
    this.isOnTeam = false;
  }
}
