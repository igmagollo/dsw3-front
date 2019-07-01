import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting = false;
  hasError = false;

  constructor(private fb: FormBuilder, private user: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (!this.loginGroup.valid) {
      return;
    }
    this.isSubmitting = true;
    const values = this.loginGroup.getRawValue();
    this.user.login(values.username, values.password).subscribe(res => {
      this.user.initialize(res);
      this.router.navigate(['/']);
    }, err => {
      this.hasError = true;
      this.isSubmitting = false;
    });
  }

}
