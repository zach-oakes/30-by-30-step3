import {Teacher} from "./teacher";
import { v4 as uuid } from 'uuid';

export const TEACHERS: Teacher[] = [
  {
    id: uuid(),
    firstName: 'Harold',
    lastName: 'Wright',
    teachingGrade: 1,
    studentCount: 17
  },
  {
    id: uuid(),
    firstName: 'Dan',
    lastName: 'Melia',
    teachingGrade: 12,
    studentCount: 40
  },
  {
    id: uuid(),
    firstName: 'Jessica',
    lastName: 'Bowman',
    teachingGrade: 4,
    studentCount: 25
  },
  {
    id: uuid(),
    firstName: 'Tracy',
    lastName: 'Smith',
    teachingGrade: 9,
    studentCount: 10
  },
  {
    id: uuid(),
    firstName: 'Matt',
    lastName: 'Damon',
    teachingGrade: 7,
    studentCount: 22,
  },
  {
    id: uuid(),
    firstName: 'Marge',
    lastName: 'Simpson',
    teachingGrade: 10,
    studentCount: 40,
  },
  {
    id: uuid(),
    firstName: 'Bob',
    lastName: 'Barker',
    teachingGrade: 2,
    studentCount: 13,
  },
  {
    id: uuid(),
    firstName: 'Dave',
    lastName: 'Matthews',
    teachingGrade: 5,
    studentCount: 28,
  }
]
