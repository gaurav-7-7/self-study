import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  myForm!: FormGroup

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }
  // getter to get the form for phone number field
  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }
  // next we define an onClick function for out button that will actually add the form
  addPhone() {
    // defining out form builder group
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })
    // calling the defined getter and pushing the form group
    this.phoneForms.push(phone);
  }
  // deleting a form markup
  deletePhone(i: any) {
    this.phoneForms.removeAt(i);
  }

}
