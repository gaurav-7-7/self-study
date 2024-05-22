import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBeverage = 'coffee'
  beverages = ['milk', 'tea', 'coffee', 'juice']

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
  }
}
