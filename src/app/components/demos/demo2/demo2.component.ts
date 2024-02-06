import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.scss'
})
export class Demo2Component {
  myProp : string = "Hello world"
  myNumber : number = 5

  increment() {
    this.myNumber++
    setInterval(() => {this.myNumber++}, 1000)
  }

  decrement() {
    this.myNumber--
  }
}
