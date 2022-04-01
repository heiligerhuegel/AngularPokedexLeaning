import { Pokemon } from '../interfaces/pokemon';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor(public Team: TeamService) {}

  ngOnInit(): void {}
}
