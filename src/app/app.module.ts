import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { FormModule } from './shared/components/form/form.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationControlsComponent } from './pages/pokemons/pagination-controls/pagination-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    FavoritesComponent,
    MyProfileComponent,
    HomeComponent,
    PaginationControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
