import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss']
})

export class TimerPageComponent implements OnInit {

  public showVerticalSession = true;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showVerticalSession = true;
        } else {
          this.showVerticalSession = false;
        }
      });
  }

}
