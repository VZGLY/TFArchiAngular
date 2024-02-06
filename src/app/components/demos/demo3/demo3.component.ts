import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {

  myString : string = "SaLut TouT le moNde"
  myNumber : number = 15.149
  myDate : Date = new Date()

  myEuroValue : number = 12345678
}
