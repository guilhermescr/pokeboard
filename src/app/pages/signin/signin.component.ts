import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {
    if (this.authService.getCurrentUser()) {
      this.authService.logOut();
    }
  }

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
  }

  onClick(): void {
    if (
      this.signInForm.valid &&
      this.signInForm.value.email &&
      this.signInForm.value.password
    ) {
      const user: User = {
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
        favoritePokemonList: [],
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
