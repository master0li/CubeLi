import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';
import { AuthService } from './services/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit  {

  public title = "Cubeli";
  
  public showToolbar = true;
  public showSession = true;
  public showScramble = true;
  public drawScramble = true;
  public showLayoutMenu = false;

  public Name = "";


  constructor(
    public authService: AuthService,
    public layoutService: LayoutService, 
    public router: Router) {
            super(authService);  
     }

  ngOnInit(): void {

    super.ngOnInit();

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
      console.log(event);

      this.showLayoutMenu = false;

      if (event.url == '/') {
        this.title = '';
      }


      else if (event.url == '/login') {
        this.title = 'CUBELI';
      }

      else if (event.url == '/register') {
        this.title = 'REGISTER';
      }

      else if (event.url == '/timer') {
        this.title = 'CUBELI';
        this.showLayoutMenu = true;
      }

      else if (event.url == '/profile') {
        this.title = 'PROFILE';
      }

    });


    this.authService.onAuthenticated.subscribe(() => {
      this.Name = this.authService.User?.displayName;
    });

    this.authService.onLogOut.subscribe(() => {
      this.Name = "";
    });

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

  public Logout() {
    this.authService.Logout().then(
      () => {console.log("Task Completed!"); this.router.navigate(['/login'])},
      () => console.log("Task Errored!"),
    );
  }

}
