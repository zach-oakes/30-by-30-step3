import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-student-list-view',
  templateUrl: './student-list-view.component.html',
  styleUrl: './student-list-view.component.css'
})
export class StudentListViewComponent {
  @Input() students: Student[] = [];
  @Output() deleteStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() selectStudent: EventEmitter<Student> = new EventEmitter<Student>();
}
