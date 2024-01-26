import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-student-list-view',
  templateUrl: './student-list-view.component.html',
  styleUrl: './student-list-view.component.css'
})
export class StudentListViewComponent implements OnChanges {
  @Input() students: Student[] = [];
  @Input() selectedStudent?: Student;
  @Output() onStudentSelected = new EventEmitter<Student>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStudent'] && changes['selectedStudent'].currentValue) {
      this.updateStudentList(changes['selectedStudent'].currentValue);
    }
  }

  selectStudent(student: Student): void {
    // Select
    if (!this.selectedStudent || this.selectedStudent !== student) {
      this.onStudentSelected.emit(student);
    } else {
      // Unselect
      this.onStudentSelected.emit(undefined);
    }
  }

  deleteStudent(student: Student): void {
    if (this.students) {
      this.students = this.students.filter(s => s.id !== student.id);
    }

    this.onStudentSelected.emit(undefined);
  }

  updateStudentList(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);

    // -1 if not found
    if (index !== -1) {
      this.students[index] = student
    } else {
      this.students.push(student);
    }
  }
}
