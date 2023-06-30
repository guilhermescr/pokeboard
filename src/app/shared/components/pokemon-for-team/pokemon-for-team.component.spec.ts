import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonForTeamComponent } from './pokemon-for-team.component';

describe('PokemonForTeamComponent', () => {
  let component: PokemonForTeamComponent;
  let fixture: ComponentFixture<PokemonForTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonForTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonForTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
