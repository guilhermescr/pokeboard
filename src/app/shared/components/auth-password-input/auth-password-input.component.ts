import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-password-input',
  templateUrl: './auth-password-input.component.html',
  styleUrls: ['./auth-password-input.component.scss'],
})
export class AuthPasswordInputComponent {
  @Input() authFormControl: any = new FormControl();
  @Input() errorValidation!: boolean;
  isPasswordVisible: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    if (this.authFormControl instanceof FormGroup) {
      (<FormGroup>this.authFormControl).addControl('password', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]);
    }
    this.authFormControl;
  }

  showPassword(): void {
    this.isPasswordVisible = true;
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
  }
}
