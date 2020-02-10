import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = "Cubeli";
  
  public showToolbar = true;
  public showSession = true;
  public showScramble = true;
  public drawScramble = true;


  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.showSession = this.layoutService.ShowSession;
    this.showScramble = this.layoutService.ShowScramble;
    this.drawScramble = this.layoutService.DrawScramble;

    this.layoutService.onUpdate.subscribe(() => {
      this.showToolbar = this.layoutService.ShowToolbar;
    });

  }

  public onShowSessionChanged() {
    this.showSession = !this.showSession;
    this.layoutService.ShowSession = this.showSession;

  }

  public onShowScrambleChanged() {
    this.showScramble = !this.showScramble;
    this.layoutService.ShowScramble = this.showScramble;
    
  }

  public onDrawScrambleChanged() {
    this.drawScramble = !this.drawScramble;
    this.layoutService.DrawScramble = this.drawScramble;
    
  }

}
