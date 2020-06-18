import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-academic-form',
  templateUrl: './academic-form.component.html',
  styleUrls: ['./academic-form.component.css']
})
export class AcademicFormComponent implements OnInit {
  academicForm:FormGroup;
  public uploadedSchools=[];
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.academicForm=new FormGroup({
      'college_name':new FormControl(null,Validators.required),
      'college_type':new FormControl(null,Validators.required),
      'qualification':new FormControl(null,Validators.required),
      'course':new FormControl(null,Validators.required),
      'percentage_type':new FormControl(null,Validators.required),
      'percentage':new FormControl(null,Validators.required),
      'start_year':new FormControl(null,Validators.required),
      'end_year':new FormControl(null,Validators.required),
      'college_address':new FormControl(null,Validators.required)
  })

}
onSubmit(){
  console.log(this. academicForm.value);
  this.uploadedSchools.push(this. academicForm.value);
  this. academicForm.reset();
}
}
