import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  viewMode = 'map';
  courses = [
    {id: 1, name: 'Course-1'},
    {id: 2, name: 'Course-2'},
    {id: 3, name: 'Course-3'}
  ];

  onAdd(){
    this.courses.push({ id: 4, name: 'Course-4'});
  }

  onChange(course : any){
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name = 'Updated'
  }
}
