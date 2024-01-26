import { Component } from '@angular/core';
import { STUDENTS } from "../mock-students";
import { Student } from "../student";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  students: Student[] = STUDENTS;
  selectedStudent?: Student;

  onStudentSelected(student: Student): void {
    this.selectedStudent = student;
  }
}
