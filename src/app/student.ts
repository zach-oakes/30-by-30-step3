import {Teacher} from "./teacher";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  teacher: Teacher;
  startDate?: string;
}
