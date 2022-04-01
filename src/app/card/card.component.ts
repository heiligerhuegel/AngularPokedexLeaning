import { ColorPickerService } from './../services/color-picker.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  colors: string[] = [];

  colordeg: number = 180;
  colorrota: number = 1;

  colorpro: number = 80;
  colorchager: number = 1;
  colormargin: number = 15;

  constructor(private colorPickerService: ColorPickerService) {}

  ngOnInit(): void {
    if (this.pokemon) {
      this.colors = this.colorPickerService.getColor(this.pokemon.types);
      this.turn();
    }
  }

  turn(): void {
    setInterval(() => {
      this.colordeg += this.colorrota;
      this.colorpro += this.colorchager;
      if (this.colorpro < 20 || this.colorpro > 80) {
        this.colorchager *= -1;
      }
    }, 1000 / 24);
  }

  setBackgroundColor = (colors: string[]): string => {
    if (colors.length > 1) {
      return `linear-gradient( ${this.colordeg}deg, ${colors[0]} ${
        this.colorpro - this.colormargin
      }%,${colors[1]} ${this.colorpro + this.colormargin}%)`;
    } else {
      return `${colors[0]}`;
    }
  };
}
