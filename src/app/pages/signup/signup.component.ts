import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  accountDoesExist: boolean = false;

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe(() => {
      this.accountDoesExist = false;
    })
  }

  onClick(): void {
    if (
      this.signUpForm.valid &&
      this.signUpForm.value.name &&
      this.signUpForm.value.email &&
      this.signUpForm.value.password
    ) {
      const newUser = {
        name: this.signUpForm.value.name,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      };

      if (this.authService.isNewAccount(newUser)) {
        this.authService.registerNewUser(newUser);
        this.authService.logIn(newUser);
      } else {
        this.accountDoesExist = true;
      }
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
