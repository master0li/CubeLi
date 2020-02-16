import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  public isLoading: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      Email: [''],
      Password: ['']
    });
  }

  public onSubmit() {
    this.authService.LoginEmail(this.formLogin.get("Email").value, this.formLogin.get("Password").value).then(
      (result) => {
        this.router.navigate(['/timer'])
      },
      (error) => {
        window.alert(error);
      }
    );
  }

  public LoginGoogle() {

    this.authService.LoginGoogle().then(
      (result) => {
        console.log("Task Completed!");
        this.router.navigate(['/timer'])
      },
      (error) => {
        window.alert(error);
      }
    );

  }

}
