import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdFormsService } from '../../services/td-forms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private snackbar : TdFormsService) { }

  @ViewChild('empform') empform !:NgForm

  ngOnInit(): void {
  }

  FormDate : string =''
  ToDate : string =''


  OnSubmit(){
    if(this.empform.valid){
      this.empform.reset()

      this.snackbar.OpenSanckbar(`Employee form is Apply successfully....`)

    }
  }


  FronToDate(){
    return this.FormDate && this.ToDate ? new Date(this.FormDate) > new Date(this.ToDate) :false
  }
}
