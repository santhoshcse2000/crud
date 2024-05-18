import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.css'
})

export class AddStudentsComponent {


  constructor(private student:StudentsService){}
  addstudents = new FormGroup({

    name:new FormControl(''),
    email:new FormControl('')


  })

   message: Boolean = false;
  AddStd(){
    //console.log(this.addstudents.value);
    this.student.AddNewStudents(this.addstudents.value).subscribe((value)=>{
      console.log(value);
      this.message=true;
      this.addstudents.reset();
    })

  }
  removeX(){
    this.message=false;
  }

}
