import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myVar = 'app';
  logo = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  public clr = "orange"
  public titleStyles = {
    color: 'teal',
    fontStyle: 'italic'

  }
  // constructor() {
  //   this.myVar = ""
  //   setInterval(() => {
  //     this.myVar = Math.random().toString();
  //   }, 500)
  // }
  updateValue(e: any) {
    this.myVar = e.target.value
    console.log(e.target.value)
  }

  onClick() {
    alert('Thanks for subscribing!')
    this.clr = "red"
  }

}
