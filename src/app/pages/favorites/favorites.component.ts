import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favoritePokemonList: Pokemon[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((currentUserData) => {
      if (currentUserData) {
        this.favoritePokemonList = currentUserData.favoritePokemonList;
      }
    });
  }
}
