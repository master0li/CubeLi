import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public isLoggedIn: boolean = false;
  public isLoading: boolean = false;


  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.onAuthenticated.subscribe(() => {

      if (this.authService.Authenticated) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;

      }
      

    });

    this.authService.onLogOut.subscribe(() => {
      this.isLoggedIn = false;
    });
  }

}
