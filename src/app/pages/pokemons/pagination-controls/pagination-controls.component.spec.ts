import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationControlsComponent } from './pagination-controls.component';

describe('PaginationControlsComponent', () => {
  let component: PaginationControlsComponent;
  let fixture: ComponentFixture<PaginationControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
