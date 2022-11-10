import { Interview } from "../interview/interview.model";
import { Round } from "../round/round.model";
import { Student } from "../student/student.model";

export class Interviewer{
 id:string;
 interviewerName:string='';
 startDate:string;
 endDate:string;

 interviewId: string;
 interviewName : string;

 adminId:string;

 roundId :number;
 roundName: string;
students:Student[];
 studentName : string;
 studentId:string;
 studentInterviewer:Student[];
}
export class InterviewData {
    interviews:Interview[];
    students: Student[];
    rounds: Round[];
}
