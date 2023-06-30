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
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { CardModalComponent } from './components/card-modal/card-modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CenterMessageComponent } from './components/center-message/center-message.component';
import { StatComponent } from './components/card-modal/stat/stat.component';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { CapitalizeStringPipe } from './pipes/capitalize-string.pipe';
import { AuthPasswordInputComponent } from './components/auth-password-input/auth-password-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonForTeamComponent } from './components/pokemon-for-team/pokemon-for-team.component';
import { NearbyPokemonComponent } from './components/nearby-pokemon/nearby-pokemon.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    SideBarComponent,
    PokemonCardComponent,
    PokemonCardsComponent,
    WrapperComponent,
    CardModalComponent,
    LoaderComponent,
    CenterMessageComponent,
    StatComponent,
    ConfirmPopupComponent,
    CapitalizeStringPipe,
    AuthPasswordInputComponent,
    PokemonForTeamComponent,
    NearbyPokemonComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    SideBarComponent,
    PokemonCardsComponent,
    PokemonCardComponent,
    PokemonForTeamComponent,
    NearbyPokemonComponent,
    ItemComponent,
    CardModalComponent,
    WrapperComponent,
    LoaderComponent,
    CenterMessageComponent,
    ConfirmPopupComponent,
    AuthPasswordInputComponent,
    CapitalizeStringPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
