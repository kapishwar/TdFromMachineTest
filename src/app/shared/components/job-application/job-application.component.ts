import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TdFormsService } from '../../services/td-forms.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

  constructor(private snackbar : TdFormsService) { }

  @ViewChild('jobform') jobform !: NgForm

  ngOnInit(): void {
  }


  Onsubmit(){
    if(this.jobform.valid){
      this.jobform.reset()
      this.snackbar.OpenSanckbar(`Job Application form is submited succesfully...`)

    }
  }
}
