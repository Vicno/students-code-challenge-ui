import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './page/students-page.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { UpdateStudentDialogComponent } from './components/update-student-dialog/update-student-dialog.component';
import { DeleteStudentDialogComponent } from './components/delete-student-dialog/delete-student-dialog.component';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ClassListingComponent } from './components/class-listing/class-listing.component';

@NgModule({
  declarations: [
    StudentsPageComponent,
    AddStudentDialogComponent,
    UpdateStudentDialogComponent,
    DeleteStudentDialogComponent,
    ClassListingComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDialogActions,
    MatDialogContent,
    FormsModule,
  ],
})
export class StudentsModule {}
