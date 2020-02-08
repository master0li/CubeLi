import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { TimerService } from 'src/app/services/timer.service';
import { ScrambleService } from 'src/app/services/scramble.service';

declare var Cube: any;

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  host: {
    '(document:keydown)': 'keyPressed($event)'
  }
})
export class TimerComponent implements OnInit {

  

  public intervalTimer;
  public isRunning: boolean = false;
  public isInspection: boolean = false;
  public milliseconds: number = 0;
  public time: number = 0;
  public ao5: number = 0;
  public ao12: number = 0;
  public ao100: number = 0;
  public cube = new Cube();
  public onPressing: boolean = false;


  constructor(public timerService: TimerService, public  scrambleService: ScrambleService) { }

  ngOnInit(): void {

    this.timerService.onTick.subscribe(() => {
      this.time = this.timerService.Milliseconds;
    });

  }

  keyPressed(event: KeyboardEvent) { 
    if (event.keyCode === 32) {

      if (this.timerService.IsRunning){
        this.timerService.Stop();
        this.scrambleService.Next();
      }
      else if (this.timerService.IsInspection){  
             this.timerService.Start();
      }
      else {

        this.timerService.StartInspection();      
      }
    }
    
  }

  public press(event) {
    console.log("press");
    this.onPressing = true;

  }

  public pressUp(event) {
    this.onPressing = false;
    
    console.log("pressUp");
    
    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else if (this.timerService.IsInspection){  
           this.timerService.Start();
    }
    else {

      this.timerService.StartInspection();      
    }
    
  }

  public tap(event) {
    console.log("tap");
    
    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else if (this.timerService.IsInspection){  
           this.timerService.Start();
    }
  }

}
