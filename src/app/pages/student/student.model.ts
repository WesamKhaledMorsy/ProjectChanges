import { Email } from "../email/inbox/inbox.model";

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

// documents:Document[];

userId?: string;
}

export class StudentData{
  // documents : Document[];
  // grades : Grade[];
  //universities :University[];
  //genders :Gender[];
  //statuses : Status[];
  //tracks :Track[];
  //rounds :Round[];
}
