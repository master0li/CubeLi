import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare var Cube: any;

@Injectable({
  providedIn: 'root'
})
export class ScrambleService {

  public onNext = new Subject();    
  public onPrevious = new Subject();   
  public onGenerate = new Subject();

  private index: number = 0;

  private scramble: string = "";
  private scrambles: string[] = [];

  constructor() { 
    
    Cube.initSolver();
    this.scrambles.push(Cube.scramble());

    this.onGenerate.next();
  }

  get Scramble(): string {
    return this.scrambles[this.index];
  }

  public Next(): string {

    this.onNext.next();

    this.scrambles.push(Cube.scramble());
    ++this.index

    this.onGenerate.next();

    return this.scrambles[this.index];

  }

  public Previous(): string {

    this.onPrevious.next();

    if (this.index > 0) {
      --this.index;
    }

    this.onGenerate.next();

    return this.scrambles[this.index];
  }


}
