import { Interviewer } from "../interviewer/interviewer.model";
import { Student } from "../student/student.model";

export class Interview{
 id:string;
 interviewName:string='';
 startDate:string;
 endDate:string;

 startTime:string;
 endTime:string;
 interviewerId: string="";
 studentId:string;
 studentName:string;
 Students:Student[];
 count:number;
 adminId:string;

}
export class InterviewData {
    students: Student[];
    interviewers:Interviewer[];
}
