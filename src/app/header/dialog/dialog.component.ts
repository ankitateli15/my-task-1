import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpDataSerice } from '../../service/http-data.service';

@Component({
  selector: 'app-dialog',
  // standalone: true,
  // imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DialogComponent>, private httpServ: HttpDataSerice) { }
  

  myReactiveForm: FormGroup | any;
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.myReactiveForm = this.fb.group({
      image: this.fb.control(''),
      productName: this.fb.control(''),
      price: this.fb.control('')

    })
  }

  addProduct() {
    console.log(this.myReactiveForm.value)
    this.httpServ.addProduct(this.myReactiveForm.value)

  }
  

}



