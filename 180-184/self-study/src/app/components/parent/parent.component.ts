import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { DataInteractionService } from 'src/app/services/data-interaction.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [DataInteractionService]
})
export class ParentComponent implements OnInit {

  counterObservable = interval(1000)
  count!: any;

  constructor() { }

  ngOnInit(): void {
  }

  sub() {
    this.count = this.counterObservable.subscribe((val) => {
      console.log(val)
    })
  }

  unsub() {
    this.count.unsubscribe();
  }


}
