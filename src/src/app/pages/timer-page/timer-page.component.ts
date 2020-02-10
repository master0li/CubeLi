import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss']
})

export class TimerPageComponent implements OnInit {

  public showScramble = true;
  public showSession = true;


  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {

    // this.breakpointObserver
    //   .observe(['(min-width: 900px)'])
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       this.showVerticalSession = true;
    //     } else {
    //       this.showVerticalSession = false;
    //     }
    //   });

    
    this.showScramble = this.layoutService.ShowScramble;
    this.showSession = this.layoutService.ShowSession;


    this.layoutService.onUpdate.subscribe(() => {
      this.showScramble = this.layoutService.ShowScramble;
      this.showSession = this.layoutService.ShowSession;
    });


  }

}
