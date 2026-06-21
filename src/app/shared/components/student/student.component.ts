import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdFormsService } from '../../services/td-forms.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor( private formserv : TdFormsService) { }

  @ViewChild('StudentForm')StudentForm !: NgForm

  ngOnInit(): void {
  }

  Genderarr=['Male','Female']


  OnSubmit(){
    if(this.StudentForm.valid){

      this.formserv.OpenSanckbar(`Student form is  Register Successfully...`)
      this.StudentForm.reset()
    }
  }

}
