import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MatListModule],
})
export class HomeModule {}
