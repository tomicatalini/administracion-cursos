import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StudentsModule } from '../features/students/students.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
