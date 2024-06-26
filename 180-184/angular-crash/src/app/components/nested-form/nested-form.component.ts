import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone
    })

    this.myForm.valueChanges.subscribe(console.log)
    
  }

}
