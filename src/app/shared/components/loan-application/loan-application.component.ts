import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdFormsService } from '../../services/td-forms.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit {

  constructor( private snackbar : TdFormsService) { }

  @ViewChild('loanform') loanform !: NgForm

  ngOnInit(): void {
  }


  OnSubmit(){
    if(this.loanform.valid){
      this.loanform.reset()

      this.snackbar.OpenSanckbar(`Loan Application form is Apply in successfully....`)
    }
  }

}
