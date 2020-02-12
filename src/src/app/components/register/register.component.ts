import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;

  public isLoading: boolean = false;
  public isRegistered: boolean = false;

  constructor(
    public authService: AuthService,     
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
  });
  }

  public onSubmit() {
    this.authService.RegisterWithEmailAndPassword(this.formRegister.get('Email').value,this.formRegister.get('Password').value).then(
      (result) => {

        this.isRegistered = true;


        },
      (error) => {
        console.log("Errored!")
      }
    );

  }

  public LoginGoogle() {

    this.authService.LoginGoogle().then(
      () => {
        console.log("Task Completed!"); 
        this.router.navigate(['/timer'])},
      () => {
        console.log("Task Errored!")
      }
    );

  }

}
