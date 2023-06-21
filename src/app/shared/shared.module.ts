import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SideBarComponent,
    MatIconModule,
  ],
})
export class SharedModule {}
