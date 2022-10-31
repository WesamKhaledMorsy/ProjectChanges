import { Interview } from "../interview/interview.model";
import { Student } from "../student/student.model";

export class Interviewer{
 id:string="";
 interviewerName:string='';
 startDate:string;
 endDate:string;

 interviewId: string;
 studentId:string;

 adminId:string;

}
export class InterviewData {
    interviews:Interview[];
    students: Student[];
}
