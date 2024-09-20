import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees : any [] = [];

  constructor(private _empservice: EmployeeService) { }

  ngOnInit(): void {
    this._empservice.getEmployees().subscribe( data => this.employees = data);
  }

}
