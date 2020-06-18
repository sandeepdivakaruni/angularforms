import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  experienceForm:FormGroup;
  public uploadedExperience=[];

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.experienceForm=new FormGroup({
      'jobRole':new FormControl(null,Validators.required),
      'teamrole':new FormControl(null,Validators.required),
      'technologiesUsed':new FormControl(null,Validators.required),
      'joiningDate':new FormControl(null,Validators.required),
      'resigningDate':new FormControl(null,Validators.required),
      'jobDescription':new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.experienceForm.value);
    this.uploadedExperience.push(this.experienceForm.value);
    this.experienceForm.reset();
  }

}
