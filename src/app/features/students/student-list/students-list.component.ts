import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  
  // displayedColumns: string[] = ['name', 'surname', 'email', 'birthdate', 'phone', 'actions'];
  displayedColumns: string[] = ['completeName', 'email', 'birthdate', 'phone', 'actions'];

  @Input()
  dataSource: Student[] = [];

  @Output()
  studentEdit = new EventEmitter<Student>();

  @Output()
  studentDelete = new EventEmitter();

  constructor(){}

  edit(value: Student): void{
    this.studentEdit.emit(value);
  }

  delete(value: Student): void {
    this.studentDelete.emit(value);
  }
}
