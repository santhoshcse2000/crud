import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrl: './edit-students.component.css'
})

export class EditStudentsComponent {

  constructor(private student:StudentsService, private router:ActivatedRoute){}
  UpdateStd = new FormGroup({

    name:new FormControl(''),
    email:new FormControl('')


  })

  ngOnInit():void {


    console.log("Edit",this.router.snapshot.params['id']);
    this.student.GetUpdate(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.UpdateStd = new FormGroup({
        name:new FormControl(result['name']),
        email:new FormControl(result['email'])

      })
    })


  }

   message: Boolean = false;
   EditStd(){
    console.log("submitvalue",this.UpdateStd.value)

    this.student.UpdateMethod(this.router.snapshot.params['id'],this.UpdateStd.value).subscribe((UpDatevalue)=>{
      console.log("Updated Successful",UpDatevalue)
      this.UpdateStd.reset();

    })

  }
  removeX(){
    this.message=false;
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

