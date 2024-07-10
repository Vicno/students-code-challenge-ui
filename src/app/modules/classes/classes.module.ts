import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesPageComponent } from './page/classes-page.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ClassFilterPipe } from './pipes/class-filter.pipe';

@NgModule({
  declarations: [ClassesPageComponent, ClassFilterPipe],
  imports: [CommonModule, FormsModule, MatListModule, MatIconModule],
})
export class ClassesModule {}
