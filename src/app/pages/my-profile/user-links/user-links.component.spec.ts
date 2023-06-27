import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLinksComponent } from './user-links.component';

describe('UserLinksComponent', () => {
  let component: UserLinksComponent;
  let fixture: ComponentFixture<UserLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
