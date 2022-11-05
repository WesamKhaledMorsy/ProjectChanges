import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { guid } from '@fullcalendar/angular';
import { User } from 'src/app/core/models/auth.models';
import { Interviewer } from '../../interviewer/interviewer.model';
import { Round } from '../../round/round.model';
import { Track } from '../../track/track.model';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {


  studentDetails :Student[];
  rounds : Round[] =[];
  tracks :Track[];
  students: Student[];
  interviewer : Interviewer[];
  users:User[];

  StudentId :string;
  isAddMode :boolean;

  @Input() studentInput : Student = new Student();
  @Output() studentUpdated = new EventEmitter<Student[]>();
  constructor(private studentServices :StudentService,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      const id = params.get("id");
      this.StudentId=id;
      this.isAddMode =! id;
      if(id)
      {
      this.studentServices.getStudentById(id).subscribe((result)=>{
        debugger

          this.studentInput.studentName=result[0].studentName;
          this.studentInput.phoneNumber=result[0].phoneNumber;
          this.studentInput.email=result[0].email;
          this.studentInput.universityId=result[0].universityId;
          this.studentInput.universityName=result[0].universityName;
          this.studentInput.graduationYear=result[0].graduationYear;
          this.studentInput.gradeId=result[0].gradeId;
          this.studentInput.gradeValue=result[0].gradeValue;
          this.studentInput.statusId=result[0].statusId;
          this.studentInput.statusName=result[0].statusName;
          this.studentInput.roundId=result[0].roundId;
          this.studentInput.roundName=result[0].roundName;
          this.studentInput.trackId=result[0].trackId;
          this.studentInput.trackName=result[0].trackName;
          this.studentInput.interviewId=result[0].interviewId;
          this.studentInput.interviewName=result[0].interviewName;
          this.studentInput.interviewerId=result[0].interviewerId;
          this.studentInput.interviewerName=result[0].interviewerName;
          this.studentInput.userName=result[0].userName;
          debugger
          console.log(result);
        })

       }else if(id == ""){
        debugger
        this.studentInput.id = guid();
        let id =this.studentInput.id ;
        this.studentServices.getStudentById(id.toString()).subscribe((result)=>{
          debugger

          this.studentInput.studentName=result[0].studentName;
          this.studentInput.phoneNumber=result[0].phoneNumber;
          this.studentInput.email=result[0].email;
          this.studentInput.universityId=result[0].universityId;
          this.studentInput.universityName=result[0].universityName;
          this.studentInput.graduationYear=result[0].graduationYear;
          this.studentInput.gradeId=result[0].gradeId;
          this.studentInput.gradeValue=result[0].gradeValue;
          this.studentInput.statusId=result[0].statusId;
          this.studentInput.statusName=result[0].statusName;
          this.studentInput.roundId=result[0].roundId;
          this.studentInput.roundName=result[0].roundName;
          this.studentInput.trackId=result[0].trackId;
          this.studentInput.trackName=result[0].trackName;
          this.studentInput.interviewId=result[0].interviewId;
          this.studentInput.interviewName=result[0].interviewName;
          this.studentInput.interviewerId=result[0].interviewerId;
          this.studentInput.interviewerName=result[0].interviewerName;
          this.studentInput.userName=result[0].userName;
          debugger
         console.log(result);
       })
            }
    });





      // formatDate(date) {
      //   var d = new Date(date),
      //     day = "" + d.getDate(),
      //     month = "" + (d.getMonth() + 1),
      //     year = d.getFullYear();

      //   if (month.length < 2) month = "0" + month;
      //   if (day.length < 2) day = "0" + day;
      //   return [year, month, day].join("-");
      // }
  }
}




