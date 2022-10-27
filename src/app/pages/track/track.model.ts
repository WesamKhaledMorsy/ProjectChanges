import { Round } from "../round/round.model";
import { Student } from "../student/student.model";

export class Track
{
  id ?:string;
  trackName ?: string;
  startDate ?: string;
  endDate?: string;

  adminId ?:string;
  roundId ?: string;
  roundName ?:string;

  students : Student[];
}
export class RoundData {
  students :Student[];
  rounds:Round[];
}
