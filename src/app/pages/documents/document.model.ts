import { Student } from "../student/student.model";

export class Document
{
  id?: string;
  documentName ?:string;
  adminId:string;
  student: Student;
  studentId :string;
}
