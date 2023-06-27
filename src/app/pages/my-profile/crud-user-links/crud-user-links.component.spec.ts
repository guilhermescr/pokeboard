import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUserLinksComponent } from './crud-user-links.component';

describe('CrudUserLinksComponent', () => {
  let component: CrudUserLinksComponent;
  let fixture: ComponentFixture<CrudUserLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUserLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUserLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
