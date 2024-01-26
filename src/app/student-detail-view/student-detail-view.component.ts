import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Student} from "../student";
import {Teacher} from "../teacher";
import {TEACHERS} from "../mock-teachers";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-student-detail-view',
  templateUrl: './student-detail-view.component.html',
  styleUrl: './student-detail-view.component.css',
  providers: [provideNativeDateAdapter(), DatePipe],
})
export class StudentDetailViewComponent implements OnChanges {
  @Input() selectedStudent?: Student;
  @Input() students: Student[] = [];
  @Output() onStudentEditedOrAdded = new EventEmitter<Student>;

  firstName: string = '';
  id: number = 0;
  lastName: string = '';
  selectedCourse: string = '';
  teacher?: Teacher;
  teachers: Teacher[] = TEACHERS;
  courses: string[] = [
    'Math',
    'Science',
    'History',
    'English'
  ];

  startDate?: string = '';
  dateObject = new Date();

  constructor(private datePipe: DatePipe) {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue = changes['selectedStudent'] && changes['selectedStudent'].currentValue;

    this.firstName = currentValue ? currentValue.firstName : '';
    this.id = currentValue ? currentValue.id : '';
    this.lastName = currentValue ? currentValue.lastName : '';
    this.selectedCourse = currentValue ? currentValue.course : '';
    this.teacher = currentValue ? currentValue.teacher : undefined;
    this.selectedStudent = currentValue ?? undefined;
    this.startDate = currentValue ? currentValue.startDate : '';
    this.dateObject = currentValue ? new Date(currentValue.startDate) : new Date();

  }

  createStudent(): void {
    let id;
    if (!this.students.length) {
      id = 1;
    } else {
      // Find the largest id and increment by 1
      const ids = this.students.map(s => s.id);
      let largestId = Math.max(...ids);
      id = largestId + 1;
    }

    this.onStudentEditedOrAdded.emit(<Student>{
      id,
      firstName: this.firstName,
      lastName: this.lastName,
      course: this.selectedCourse,
      teacher: this.teacher,
      startDate: this.startDate === '' ?
        this.datePipe.transform(new Date().toDateString(), 'M/d/yy') :
        this.startDate,
    });

    this.resetData();
  }

  isSameTeacher(t1: Teacher, t2: Teacher): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  get isButtonDisabled(): boolean {
    return this.firstName === '' ||
      this.lastName === '' ||
      this.selectedCourse === '' ||
      this.teacher === undefined;
  }

  editStudent(): void {
    this.onStudentEditedOrAdded.emit(<Student>{
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      course: this.selectedCourse,
      teacher: this.teacher,
      startDate: this.startDate,
    });

    this.resetData();
  }

  onDateChange(date:string): void {
    const transformed = this.datePipe.transform(date, 'M/d/yy');
    this.startDate = transformed ?? '';
  }

  private resetData(): void {
    this.firstName = '';
    this.lastName = '';
    this.selectedCourse = '';
    this.selectedStudent = undefined;
    this.teacher = undefined;
    this.startDate = undefined;
  }

}
