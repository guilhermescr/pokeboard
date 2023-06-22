import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';

@NgModule({
  declarations: [SideBarComponent, PokemonCardComponent, PokemonCardsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SideBarComponent,
    PokemonCardsComponent,
    PokemonCardComponent,
    MatIconModule,
  ],
})
export class SharedModule {}
