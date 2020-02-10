import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { TimerService } from 'src/app/services/timer.service';
import { ScrambleService } from 'src/app/services/scramble.service';
import {  timer } from 'rxjs';

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
  public timer;
  public isRunning: boolean = false;
  public isPending:boolean = false;
  public isReady:boolean = false;
  public isMouseUp:boolean = true;
  public isPenalty:boolean = false;
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

    this.timerService.onStart.subscribe(() => {
      this.isReady = false;
      this.isRunning = true;
      this.isInspection = false;
    });

    this.timerService.onStop.subscribe(() => {
      this.isRunning = false;
      this.isInspection = false;
    });

    this.timerService.onInspection.subscribe(() => {
      this.isReady = false;
      this.isInspection = true;
      this.isPending = false;
    });

    this.timerService.onPenalty.subscribe(() => {
      this.isReady = false;
      this.isInspection = false;
      this.isPending = false;
      this.isPenalty = true;
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

  public onMouseDown(event) {
    console.log("mousedown");

    this.isMouseUp = false;

    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else {
      this.isPending = true;

    this.timer = timer(1000).subscribe(
     () => { 
        if (!this.isRunning && !this.isInspection && this.isPending) {
          this.isPending = false;
          this.isReady = true;
        }
      })
    }

  }

  public onMouseUp(event) {    
    console.log("mouseup");    

    this.isPending = false;
    this.timer.unsubscribe();
    
    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else if (this.isReady) {
      this.isReady = false;
      this.timerService.StartInspection();      
    }
    else if (this.timerService.IsInspection){  
           this.timerService.Start();
    }
    
  }

  public press(event){

    console.log("press");

    this.isMouseUp = false;

    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else {
      this.isPending = true;

    this.timer = timer(1000).subscribe(
     () => { 
        if (!this.isRunning && !this.isInspection && this.isPending) {
          this.isPending = false;
          this.isReady = true;
        }
      })
    }

  }

  public pressUp(event){
    console.log("pressUp");    

    this.isPending = false;
    this.timer.unsubscribe();
    
    if (this.timerService.IsRunning){
      this.timerService.Stop();
      this.scrambleService.Next();
    }
    else if (this.isReady) {
      this.isReady = false;
      this.timerService.StartInspection();      
    }
    else if (this.timerService.IsInspection){  
           this.timerService.Start();
    }
  }

  public tap(event){
    console.log("tap");   
    // if (this.timerService.IsRunning){
    //   this.timerService.Stop();
    //   this.scrambleService.Next();
    // }
    // else if (this.timerService.IsInspection){  
    //        this.timerService.Start();
    // }
    // else if (this.isReady) {
    //   this.timerService.StartInspection();      
    // }
  }

}
