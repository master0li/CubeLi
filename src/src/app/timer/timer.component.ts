import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

declare var Cube: any;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  host: {
    '(document:keydown)': 'keyPressed($event)'
  }
})
export class TimerComponent implements OnInit {

  

  public intervalTimer;
  public isRunning: boolean = false;
  public milliseconds: number = 0;
  public time: string = "0";
  public ao5: string = "0";
  public ao12: string = "0";
  public ao100: string = "0";
  public cube = new Cube();


  constructor() { }

  ngOnInit(): void {
    
  }

  keyPressed(event: KeyboardEvent) { 
    if (event.keyCode === 32) {

      if (this.isRunning){
        clearInterval(this.intervalTimer);
        this.isRunning = false;
      }
      else {
        this.startTimer();
        this.isRunning = true;

      }
    }
    
  }

  public startTimer() {
    this.intervalTimer = setInterval(() => {
      this.milliseconds += 10;
      this.time = this.milliseconds.toString();

    }, 10);

        
  }

  public press() {

  }

  public pressUp() {
    this.startTimer();
    this.isRunning = true;
    
  }

  public tap() {
    this.ao100 = "tap";
    if (this.isRunning){
      clearInterval(this.intervalTimer);
      this.isRunning = false;
    }
    else{
      this.startTimer();
      this.isRunning = true;
    }
  }

}
