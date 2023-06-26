import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMessageComponent } from './center-message.component';

describe('CenterMessageComponent', () => {
  let component: CenterMessageComponent;
  let fixture: ComponentFixture<CenterMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
