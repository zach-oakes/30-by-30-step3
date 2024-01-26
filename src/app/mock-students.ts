import {Student} from "./student";
import {TEACHERS} from "./mock-teachers";
import {Teacher} from "./teacher";
import {formatDate} from "@angular/common";

export const STUDENTS: Student[] = [
  {
    id: 1,
    firstName: 'Bart',
    lastName: 'Simpson',
    course: 'Math',
    teacher: randomTeacher(),
    startDate: randomDate(),
  },
  {
    id: 2,
    firstName: 'Fred',
    lastName: 'Flintstone',
    course: 'Science',
    teacher: randomTeacher(),
    startDate: randomDate(),
  },
  {
    id: 3,
    firstName: 'Hank',
    lastName: 'Hill',
    course: 'History',
    teacher: randomTeacher(),
    startDate: randomDate(),
  },
  {
    id: 4,
    firstName: 'Hulk',
    lastName: 'Hogan',
    course: 'Science',
    teacher: randomTeacher(),
    startDate: randomDate(),
  },
  {
    id: 5,
    firstName: 'Mickey',
    lastName: 'Mouse',
    course: 'Math',
    teacher: randomTeacher(),
    startDate: randomDate(),
  }
];

export function randomTeacher(): Teacher {
  const index = Math.floor(Math.random() * TEACHERS.length);

  return TEACHERS[index];
}

export function randomDate(): string {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);

  return formatDate(new Date(timestamp), 'M/d/yy', 'en_us');
}
