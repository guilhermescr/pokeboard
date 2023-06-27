import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUserDataComponent } from './crud-user-data.component';

describe('CrudUserDataComponent', () => {
  let component: CrudUserDataComponent;
  let fixture: ComponentFixture<CrudUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
