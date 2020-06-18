import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  skillsForm:FormGroup;
  public uploadedSkills=[];
  skills:SelectItem[];
  skill_items: SelectItem[];
  items: MenuItem[];

  constructor(private activatedroute:ActivatedRoute,)
              {
                this.skills = [
                  {label: 'C', value: 'C'},
                  {label: 'C++', value: 'C++'},
                  {label: 'Java', value: 'Java'},
                  {label: 'Python', value: 'Python'},
              ];
        
              this.skill_items = [];
              for (let i = 0; i < 10000; i++) {
                  this.skill_items.push({label: 'SItem ' + i, value: 'SItem ' + i});
              }
          }

  ngOnInit() {
    this.skillsForm=new FormGroup({
      'technical_skills':new FormControl(null,Validators.required),
      'additional_skills':new FormControl(null,Validators.required),
      
    });
  }
  onSubmit(){
    console.log(this. skillsForm.value);
    this.uploadedSkills.push(this. skillsForm.value);
    this. skillsForm.reset();
  }

}
