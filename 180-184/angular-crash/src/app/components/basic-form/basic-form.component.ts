import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  // declare the form to type FormGroup
  myForm!: FormGroup;
  myForm2!: FormGroup;
  // adding formbuilder service to the constructor of this component
  constructor(private fb: FormBuilder) { }
  // creating data model of the form during ngOnInit (Schema that holds the actual values and the validation rules for the fields inside the form)
  ngOnInit() {
    // calling the form builder group
    this.myForm = this.fb.group({
      // setting default values of the input field
      email: '',
      // we can set default value
      message: '',
      career: '',
      message2: ''
    })

    // extract the data from the form and the typescript as well using a method from FormGroup
    this.myForm.valueChanges.subscribe(console.log)
    // the above method returns an observable and if subscribe to that observable its going to emits the values everytime it changes
    // next we connect this to our html and bind it with our ui components

  }

  college = [
    { id: 1, name: 'KIIT', selected: false},
    { id: 2, name: 'BIT',  selected: true},
    { id: 3, name: 'VIT',  selected: false}
  ]

  onChangeCollege($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
  }

}
