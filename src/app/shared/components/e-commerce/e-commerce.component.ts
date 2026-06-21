import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TdFormsService } from '../../services/td-forms.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {


  @ViewChild('ecomform') ecomform !: NgForm

  constructor(private snackbar : TdFormsService) { }

  ngOnInit(): void {
  }

  Onsubmit(){
    if(this.ecomform.valid){
      this.ecomform.reset()

      this.snackbar.OpenSanckbar(`Product Review is Submited successfully....`)
    }
  }

}
