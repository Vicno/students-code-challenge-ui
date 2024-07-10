import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesPageComponent } from './page/classes-page.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ClassFilterPipe } from './pipes/class-filter.pipe';
import { AddClassDialogComponent } from './components/add-class-dialog/add-class-dialog.component';
import { UpdateClassDialogComponent } from './components/update-class-dialog/update-class-dialog.component';
import { DeleteClassDialogComponent } from './components/delete-class-dialog/delete-class-dialog.component';
import { StudentListingDialogComponent } from './components/student-listing-dialog/student-listing-dialog.component';
import { AddStudentsListingDialogComponent } from './components/add-students-listing-dialog/add-students-listing-dialog.component';

@NgModule({
  declarations: [
    ClassesPageComponent,
    ClassFilterPipe,
    AddClassDialogComponent,
    UpdateClassDialogComponent,
    DeleteClassDialogComponent,
    StudentListingDialogComponent,
    AddStudentsListingDialogComponent,
  ],
  imports: [CommonModule, FormsModule, MatListModule, MatIconModule],
})
export class ClassesModule {}
