import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeI } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "assets/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<EmployeeI[]> {
    return this.http.get<EmployeeI[]>(this.url)
  }
}

