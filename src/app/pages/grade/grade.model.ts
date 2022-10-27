import { Student } from "../student/student.model";

export class Grade
{
  id ?:string;
  value ?:number;

  adminId?:string;
  studentId :string;

  students:Student[];
}
