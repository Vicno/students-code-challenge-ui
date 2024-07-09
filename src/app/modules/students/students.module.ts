import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './page/students-page.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
})
export class StudentsModule {}
