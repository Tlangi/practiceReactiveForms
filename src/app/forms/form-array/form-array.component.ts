import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  // Using form group to handle simple form details
  public signUpForm: FormGroup;

  // create form builder to combine the form group with form array and handle form controls
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [''],
      password: ['', Validators.required],
      // Binding form Array to the form group
      contacts: this.formBuilder.array([])
    });
  }

  // Using a getter to access contact details as a form array
  get contacts(): FormArray {
    return this.signUpForm.get('contacts') as FormArray;
  }

  // Add form controls to the form form group
  addContacts() {
    this.contacts.push(this.formBuilder.group({
      cellphoneNumber: ['', [Validators.maxLength(10), Validators.required]],
      emailAddress: ['', [Validators.email, Validators.required]],
    }));
  }

  ngOnInit(): void {
    this.addContacts();
  }

}
