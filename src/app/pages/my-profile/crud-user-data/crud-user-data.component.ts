import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-crud-user-data',
  templateUrl: './crud-user-data.component.html',
  styleUrls: ['./crud-user-data.component.scss'],
})
export class CrudUserDataComponent {
  @Output() closeUserDataCrudEvent = new EventEmitter();
  @Input() userData!: User;
  isPasswordVisible: boolean = false;
  areTheseDataAvailable = {
    name: true,
    email: true,
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
    address: ['', Validators.required],
  });

  ngOnInit(): void {
    this.profileForm.setValue({
      name: this.userData.name!,
      email: this.userData.email,
      password: this.userData.password,
      address: this.userData.address ? this.userData.address : '',
    });

    this.profileForm.controls.name.valueChanges.subscribe((newName) => {
      this.areTheseDataAvailable.name = this.authService.isNewDataAvailable(
        true,
        newName!
      );
    });

    this.profileForm.controls.email.valueChanges.subscribe((newEmail) => {
      this.areTheseDataAvailable.email = this.authService.isNewDataAvailable(
        false,
        newEmail!
      );
    });
  }

  fireCloseUserDataCrudEvent(): void {
    this.closeUserDataCrudEvent.emit();
  }

  showPassword(): void {
    this.isPasswordVisible = true;
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
  }

  saveUserData(): void {
    const updatedUser: User = {
      id: this.userData.id,
      name: this.profileForm.value.name!,
      currentProfilePicture: this.userData.currentProfilePicture,
      email: this.profileForm.value.email!,
      password: this.profileForm.value.password!,
      address: this.profileForm.value.address!,
      favoritePokemonList: this.userData.favoritePokemonList,
      links: this.userData.links,
    };
    this.authService.updateCurrentUser(updatedUser);
    this.fireCloseUserDataCrudEvent();

    this.toastr.success(
      'Your profile was updated with no issues :)',
      'Profile Alert'
    );
  }
}
