import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  state = {
    logged: true ,
  };

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  inValidForm = false;

  ngOnInit(): void {
    if (this.state.logged) {
      this.router.navigate(['home-page']);
    }
  }

  submit() {
    if (this.loginForm.valid) {
      const rightUser =
        this.loginForm.get('username').value === 'myUser' &&
        this.loginForm.get('password').value === 'myPassword';
      if (rightUser) {
        this.router.navigate(['home-page']);
        this.inValidForm = false;
      }
    } else {
      this.inValidForm = true;
    }
  }
}
