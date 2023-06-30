import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordInputComponent } from './auth-password-input.component';

describe('AuthPasswordInputComponent', () => {
  let component: AuthPasswordInputComponent;
  let fixture: ComponentFixture<AuthPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
