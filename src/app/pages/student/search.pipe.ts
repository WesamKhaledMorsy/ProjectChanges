import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(students: Student[], searchText:string): Student[]{
    if(!students || !searchText ){
      return students;
    }
    else if(searchText){
      return students.filter((students)=>
      students.studentName
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()) ||
      students.statusName
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()) ||
      students.email)


    }
}
}
