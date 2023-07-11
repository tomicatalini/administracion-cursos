import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
