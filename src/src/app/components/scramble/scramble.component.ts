import { Component, OnInit } from '@angular/core';

declare var Cube: any;

@Component({
  selector: 'scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.scss']
})
export class ScrambleComponent implements OnInit {

  public scramble: string = '';


  constructor() { }

  ngOnInit(): void {

    Cube.initSolver();

    this.scramble = Cube.scramble();
  }

  public previous(){
    this.scramble = Cube.scramble();
  }

  public next(){
    this.scramble = Cube.scramble();
  }

}
