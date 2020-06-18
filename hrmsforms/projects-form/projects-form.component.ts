import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {
  rForm: FormGroup;
  public addedForms=[];

  constructor(private activatedroute:ActivatedRoute)  { }

  ngOnInit() {
    this.rForm=new FormGroup({
      'ProjectName':new FormControl(null,Validators.required),
      'TeamSize':new FormControl(null,Validators.compose([Validators.required,Validators.max(100)])),
      'TechnologiesUsed':new FormControl(null,Validators.compose([Validators.required,Validators.maxLength(500)])),
      'ProjectStartDate':new FormControl(null,Validators.compose([Validators.required])),
      'ProjectEndDate':new FormControl(null,Validators.compose([Validators.required])),
      'Description':new FormControl(null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)]))
    })
  }
  onSubmit(){
    console.log(this.rForm.value);
    this.addedForms.push(this.rForm.value);
    this.rForm.reset();
  }

}
