import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seachbar',
  templateUrl: './seachbar.component.html',
  styleUrls: ['./seachbar.component.css'],
})
export class SeachbarComponent implements OnInit {
  @Output() output = new EventEmitter<[string, string, number, number]>();
  nameFilter: string = '';
  ////
  typeFilter: string = '';
  ////
  heightFilter: number = 0;
  ////
  weightFilter: number = 0;
  ////

  sendData(): void {
    this.output.emit([
      this.nameFilter,
      this.typeFilter,
      this.heightFilter,
      this.weightFilter,
    ]);
  }

  ////

  constructor() {}

  ngOnInit(): void {}
}
