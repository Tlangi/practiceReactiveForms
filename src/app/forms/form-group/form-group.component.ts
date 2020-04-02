import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  // use form group to group all the form controls.
  // Form groups can also contain other form groups, and form arrays.
  public signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', [Validators.email, Validators.required]),
    cellphoneNumber: new FormControl('', [Validators.maxLength(10), Validators.required]),
    gender: new FormControl(''),
    password: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
