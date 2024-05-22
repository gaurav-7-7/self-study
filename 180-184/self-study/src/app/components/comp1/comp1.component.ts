import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from 'src/app/services/data-interaction.service';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private de: DataInteractionService) { }

  ngOnInit(): void {
  }

  enteredText: string = '';

  onBClick() {
    this.de.dataEmit(this.enteredText)
  }
}
