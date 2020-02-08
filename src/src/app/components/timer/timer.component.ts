import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

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
  public isInspection: boolean = false;
  public milliseconds: number = 0;
  public time: number = 0;
  public ao5: number = 0;
  public ao12: number = 0;
  public ao100: number = 0;
  public cube = new Cube();
  public onPressing: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
  }

  keyPressed(event: KeyboardEvent) { 
    if (event.keyCode === 32) {

      if (this.isRunning){
        clearInterval(this.intervalTimer);
        this.isRunning = false;
      }
      else if (this.isInspection){  
  
        this.isInspection = false;      
        clearInterval(this.intervalTimer);
  
        this.startTimer();
  
      }
      else {
  
        this.startInspection();
        
  
      }
    }
    
  }

  public startTimer() {
    
    this.isRunning = true;
    this.time = 0;

    this.intervalTimer = setInterval(() => {
      this.time += 10;

    }, 10);

        
  }

  public startInspection() {

    this.isInspection = true;

    this.time = 15000;

    this.intervalTimer = setInterval(() => {
      this.time -= 1000;

      if (this.time === 0) {
        this.isInspection = false;
        clearInterval(this.intervalTimer);
      }

    }, 1000);

  }

  public press(event) {
    console.log("press");
    this.onPressing = true;

  }

  public pressUp(event) {
    this.onPressing = false;
    
    console.log("pressUp");
    
    if (this.isRunning){
      clearInterval(this.intervalTimer);
      this.isRunning = false;
    }
    else if (this.isInspection){  

      this.isInspection = false;      
      clearInterval(this.intervalTimer);

      this.startTimer();

    }
    else {

      this.startInspection();
      

    }
    
  }

  public tap(event) {
    console.log("tap");
    
    if (this.isRunning){
      clearInterval(this.intervalTimer);
      this.isRunning = false;
    }
    else if (this.isInspection){  
      
      this.isInspection = false;      
      clearInterval(this.intervalTimer);

      this.startTimer();

    }
  }

}
