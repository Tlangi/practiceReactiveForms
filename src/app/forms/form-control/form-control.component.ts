import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  // Use form control to the for all the form fields and add validators
  // USed for simple forms without a lot of fields.
  public firstName = new FormControl('', Validators.required);
  public lastName = new FormControl('', Validators.required);
  public emailAddress = new FormControl('', [Validators.email, Validators.required]);
  public cellphoneNumber = new FormControl('', [Validators.maxLength(10), Validators.required]);
  public gender = new FormControl('');
  public password = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit(): void {
  }

}
