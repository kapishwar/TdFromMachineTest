import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TdFormsService {

  constructor(private snackbar : MatSnackBar) { }



  OpenSanckbar(msg:string){
    this.snackbar.open(msg,'close',{
      duration:3000,
      verticalPosition:'bottom',
      horizontalPosition:'left'
    })
  }
  
}
