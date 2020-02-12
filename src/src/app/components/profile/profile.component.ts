import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseComponent implements OnInit {

  public formProfile: FormGroup;

  constructor(
    public authService: AuthService,   
    private formBuilder: FormBuilder) { 
      super(authService)
    }

  ngOnInit(): void {
    this.formProfile = this.formBuilder.group({
      UserName: [''],
      Email: [''],
      Password: ['']
  });
  }

  public onSubmit() {

  }

}
