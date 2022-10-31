import { Student } from "../student/student.model";

export class Interview{
 id:string="";
 interviewName:string='';
 startDate:string;
 endDate:string;

 interviewerId: string;
 studentId:string;

 adminId:string;

}
export class InterviewData {
    students: Student[];
}
