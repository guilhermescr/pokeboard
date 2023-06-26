import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PaginationControlsComponent } from './pokemons/pagination-controls/pagination-controls.component';
import { FormModule } from '../shared/components/form/form.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PokemonsComponent,
    FavoritesComponent,
    MyProfileComponent,
    PaginationControlsComponent,
  ],
  imports: [SharedModule, FormModule, NgxPaginationModule],
})
export class PagesModule {}
