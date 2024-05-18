import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {
  constructor(private student:StudentsService){}
  students:any=[];

  ngOnInit():void{
    this.student.GetAllStudent().subscribe((a)=>{

      this.students=a;
      console.log(this.students);
    })

  }

}
