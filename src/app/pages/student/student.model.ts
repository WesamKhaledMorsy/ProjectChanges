import { Email } from "../email/inbox/inbox.model";
import { Gender } from "../gender/gender.model";
import { Grade } from "../grade/grade.model";
import { Round } from "../round/round.model";
import { Status } from "../status/status.model";
import { Track } from "../track/track.model";
import { University } from "../university/university.model";

export class Student
{
id : string;
studentName ?:string;
phoneNumber ?: string;
email ?: Email;
graduationYear ?:number;

statusId ?:string;
statusName?: string;

universityId ?: string;
universityName?: string;

gradeId ?: string;
gradeValue ?: number;

adminId ?:string;

roundId ?:string;
roundName ?: string;

trackId ?: string;
trackName ?: string;

genderId ?: string;
genderType ?:string;

interviewerId ?:string;
interviewerName ?: string;

interviewId?:string;
interviewName?:string;
// documents:Document[];
profilePicture?:string;
//studentCertificate?;string;
studentGrade ?: number;
interviewDate?:string;
userId?: string;
userName?:string;
}

export class StudentData{
  documents : Document[];
  grades : Grade[];
  universities :University[];
  genders :Gender[];
  statuses : Status[];
  tracks :Track[];
  rounds :Round[];
}
