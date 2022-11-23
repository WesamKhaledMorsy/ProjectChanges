import { Student } from "../student/student.model";
import { Track } from "../track/track.model";

export class Round
{
  id ?:string;
  roundName ?: string;
  startDate ?: string;
  endDate ?:string;
  startAdmission ?: string;
  endAdmission ?:string;
  adminId ?:string;

  students :Student[];
  tracks:Track[];
}

export class RoundData {
  students :Student[];
  tracks:Track[];
}
