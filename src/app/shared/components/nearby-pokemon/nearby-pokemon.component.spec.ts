import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyPokemonComponent } from './nearby-pokemon.component';

describe('NearbyPokemonComponent', () => {
  let component: NearbyPokemonComponent;
  let fixture: ComponentFixture<NearbyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
