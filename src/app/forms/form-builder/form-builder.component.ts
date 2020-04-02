import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {


  // Form builder users form groups/controls/arrays so I have to instantiate the form group
  public signUpForm: FormGroup;

  // We instantiate the formBuilder on the constructor
  constructor(private formBuilder: FormBuilder) {
  }

  // We use the createForm method to add the form builder to the form group.
  // We can use the form Control or group or even the array,
  // but here I used the formGroup.
  // I don't have to call the new method all the time I want to add a new field
  // The form builder makes it easy to add new fields
  createForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.email, Validators.required]],
      cellphoneNumber: ['', [Validators.maxLength(10), Validators.required]],
      gender: [''],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

}
