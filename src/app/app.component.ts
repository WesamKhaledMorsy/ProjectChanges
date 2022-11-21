import { Component , OnInit} from '@angular/core';
import { error } from 'jquery';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  // appName = this.server.getAppName();
  // servers = [
  //   {
  //     name: 'Testserver',
  //     capacity: 10,
  //     //id: this.generateId()
  //   },
  //   {
  //     name: 'Liveserver',
  //     capacity: 100,
  //     //id: this.generateId()
  //   }
  // ];

  constructor(private server : ServerService){}

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;
  ngOnInit() {
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    const role :any =localStorage.getItem('roles');
    if(role == "Admin"){
       this.IsAdmin =true;
       this.IsInterviewer=false;
       this.IsUser=false;
       this.LoggedIn=true;
    }else if (role=="Interviewer"){
      this.IsInterviewer= true;
      this.IsAdmin = false;
      this.IsUser=false;
      this.LoggedIn=true;
    }
    else if(role == "Trainee"){
      this.IsUser=true;
      this.IsInterviewer=false;
      this.IsAdmin=false;
      this.LoggedIn=true;
    }
  }
  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');

  }

  // onSave(){
  //   this.server.storeServers(this.servers)
  //   .subscribe(
  //     (Response)=>console.log(Response),
  //     (error)=>console.log(error)
  //   );
  // }
  // onGet(){
  //   this.server.getServers()
  //   .subscribe(
  //     (servers: any[]) => this.servers = servers,
  //     (error)=>console.log(error)
  //   );
  // }


}
