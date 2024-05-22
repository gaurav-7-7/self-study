import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        fName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
        lName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('india', Validators.required),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null)
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm)

  }

}
