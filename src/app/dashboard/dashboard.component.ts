import {Component} from '@angular/core';
import {STUDENTS} from "../mock-students";
import {Student} from "../student";
import {TEACHERS} from "../mock-teachers";
import {Teacher} from "../teacher";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  students: Student[] = STUDENTS;
  teachers: Teacher[] = TEACHERS;
  selectedStudent: Student = {} as Student;
  courses: string[] = [
    'Math',
    'Science',
    'History',
    'English'
  ];

  selectStudent(student: Student): void {
    // Select
    if (!this.selectedStudent || this.selectedStudent.id !== student.id) {
      this.selectedStudent = {...student};
    } else {
      // Unselect
      this.selectedStudent = {} as Student;
    }
  }

  deleteStudent(student: Student): void {
    if (this.students.length) {
      this.students = this.students.filter(s => s.id !== student.id);
      this.selectedStudent = {} as Student;
    }
  }

  updateStudentList(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);

    // -1 if not found
    if (index !== -1) {
      this.students[index] = student;
    } else {
      this.students.push(student);
    }

    this.selectedStudent = {} as Student;
  }

  addNewStudent(student: Student): void {
    this.students.push({
      id: uuid(),
      firstName: student.firstName,
      lastName: student.lastName,
      course: student.course,
      teacher: student.teacher,
      startDate: student.startDate,
    });

    this.selectedStudent = {} as Student;
  }
}
