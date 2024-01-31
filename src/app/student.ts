import {Teacher} from "./teacher";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  course: string;
  teacher: Teacher;
  startDate: string;
}
