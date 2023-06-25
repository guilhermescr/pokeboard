import { Component, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { MatIcon } from '@angular/material/icon';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @ViewChild('starIcon') starIcon!: MatIcon;
  @Input() pokemon!: Pokemon;
  isHover: boolean = false;
  isFavorite: boolean = false;
  isCardModalOpen: boolean = false;

  constructor(
    private pokeApiService: PokeapiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.pokeApiService.isPokemonInFavoriteList(this.pokemon)) {
      this.markPokemonAsFavorite();
      this.cdr.detectChanges();
    }
  }

  handleClickEvent(clickEvent: any): void {
    if (clickEvent.target.id === 'appCardModal') {
      this.closeModal();
    }
  }

  openCardModal(clickEvent: any): void {
    if (!clickEvent.target.className.includes('star')) {
      this.isCardModalOpen = true;
    }
  }

  closeModal(): void {
    this.isCardModalOpen = false;
  }

  onMouseEnterStar(): void {
    this.isHover = true;
  }

  onMouseLeaveStar(): void {
    this.isHover = false;
  }

  markPokemonAsFavorite(): void {
    [this.isHover, this.isFavorite] = [true, true];

    if (!this.pokeApiService.isPokemonInFavoriteList(this.pokemon)) {
      this.pokeApiService.savePokemonInFavoriteList(this.pokemon);
    }
  }

  unmarkPokemonAsFavorite(): void {
    [this.isHover, this.isFavorite] = [false, false];

    this.pokeApiService.removePokemonFromFavoriteList(this.pokemon);
  }
}
