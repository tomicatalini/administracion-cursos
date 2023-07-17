import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './student-list/students-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StudentsComponent } from './students.component';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControlErrorPipe } from './pipes/form-control-error.pipe';

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentFormComponent,
    StudentsComponent,
    CompleteNamePipe,
    FormControlErrorPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    StudentsComponent,
    CompleteNamePipe
  ]
})
export class StudentsModule {}
