import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from 'src/app/services/data-interaction.service';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private de: DataInteractionService) { }

  ngOnInit(): void {
    this.de.dataEmitter.subscribe((val) => {
      this.inputText = val;
    })
  }

  inputText: string = '';

}
