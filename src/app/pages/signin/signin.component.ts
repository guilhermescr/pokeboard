import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signInForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  accountNotFound: boolean = false;

  ngOnInit(): void {
    this.signInForm.valueChanges.subscribe(() => {
      this.accountNotFound = false;
    });

    if (this.authService.getCurrentUser()) {
      this.authService.logOut();
      this.router.navigateByUrl('/signin');
    }
  }

  onClick(): void {
    if (
      this.signInForm.valid &&
      this.signInForm.value.email &&
      this.signInForm.value.password
    ) {
      const user = {
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      };

      if (!this.authService.isNewAccount(user)) {
        this.authService.logIn(user);
      } else {
        this.accountNotFound = true;
      }
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
