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
import { UserLinksComponent } from './my-profile/user-links/user-links.component';
import { UserInfoComponent } from './my-profile/user-info/user-info.component';
import { UserDataComponent } from './my-profile/user-data/user-data.component';
import { CrudUserLinksComponent } from './my-profile/crud-user-links/crud-user-links.component';
import { CrudUserDataComponent } from './my-profile/crud-user-data/crud-user-data.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PokemonsComponent,
    FavoritesComponent,
    MyProfileComponent,
    PaginationControlsComponent,
    UserLinksComponent,
    UserInfoComponent,
    UserDataComponent,
    CrudUserLinksComponent,
    CrudUserDataComponent,
  ],
  imports: [SharedModule, FormModule, NgxPaginationModule],
})
export class PagesModule {}
