import { Component, OnInit } from '@angular/core';
import { ScrambleService } from 'src/app/services/scramble.service';


@Component({
  selector: 'scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.scss']
})
export class ScrambleComponent implements OnInit {

  public scramble: string = '';


  constructor(public scrambleService: ScrambleService) { 


    this.scrambleService.onGenerate.subscribe(() => {
      this.scramble = this.scrambleService.Scramble;      
    });

  }

  ngOnInit(): void {

    this.scramble = this.scrambleService.Scramble;
  }

  public previous(){
    this.scrambleService.Previous();
  }

  public next(){
    this.scramble = this.scrambleService.Next();
  }

}
