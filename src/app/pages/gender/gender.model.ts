import { Student } from "../student/student.model";

export class Gender{
  id?:string;
  genderType ?: string;

  adminId?:string;
  studentId :string;

  students:Student[];
}
