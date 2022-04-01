import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public Team: TeamService) {}

  isOnTeam: boolean = false;

  @Input() pokemon!: Pokemon;

  ngOnInit(): void {}

  addToTeam(): void {
    console.log('I want to add:' + this.pokemon.name + ' to my team');
    if (!this.isOnTeam) {
      this.Team.addPokemon(this.pokemon);
    } else {
      console.log('This Pokemon is on you Team!');
    }
  }

  removeFromTeam(): void {
    console.log('I want to remove:' + this.pokemon.name + ' to my team');
  }
}
