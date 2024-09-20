import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.css']
})
export class DataSharingComponent implements OnInit {
  // taking input of from the parent component
  @Input() beverage = 'tea'
  // using output decorator we're creating a new object of eventEmitter type
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverage(val: string) {
    this.newBeverageEvent.emit(val);
  }

}
