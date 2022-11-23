import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Round } from '../round.model';
import { RoundService } from '../round.service';

@Component({
  selector: 'app-round-create',
  templateUrl: './round-create.component.html',
  styleUrls: ['./round-create.component.scss']
})
export class RoundCreateComponent implements OnInit {

  roundData :Round[];
 newRound :Round;
 editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
 isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
 RoundId :string;

  @Input() roundInput : Round = new Round();
  @Output() roundUpdated= new EventEmitter <Round[]>();

  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
  @ViewChild('dp', { static: true }) datePicker: any;
  constructor(private http :HttpClient,
    private roundServices : RoundService ,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
     // Catch the Id from  URL
     this.route.paramMap.subscribe((params)=>{
      const id =params.get("id");
      this.RoundId=id;
      this.isAddMode =! id;
      if(id)
    {
      this.roundServices.getRoundById(id.toString()).subscribe((result)=>{

        debugger
        this.roundInput.roundName=result[0].roundName;
        this.roundInput.startDate=this.formatDate(result[0].startDate);
        this.roundInput.endDate=this.formatDate(result[0].endDate);
        this.roundInput.startAdmission=this.formatDate(result[0].startAdmission);
        this.roundInput.endAdmission=this.formatDate(result[0].endAdmission);
        this.roundInput.adminId=result[0].adminId;
        console.log(result);
      }
    );
    }
    });
  }

  formatDate(date) {
    var d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  onSubmit(form:NgForm){
    if(this.isAddMode){
      const headers = new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      });
      let round = new Round();
        round.id =form.value.id ;
        round.roundName = form.value.roundName;
        round.startDate = form.value.startDate;
        round.endDate = form.value.endDate;
        round.startAdmission = form.value.startAdmission;
        round.endAdmission = form.value.endAdmission;
        round.adminId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        (`${environment.apiUrl}/api/Round/CreateNewRound`,round ,{headers:headers}).subscribe(data => {
          console.log(data)

          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Round created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      })


    }
    else{
      this.roundInput.id=this.RoundId;
      this.roundServices.UpdateRound(this.roundInput)
          .subscribe((UpRound)=>{
          this.roundUpdated.emit(UpRound);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Project Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
        form.reset(this.roundInput);
  }


}

