import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  myProp! : string | null
  myNumber? : number
  myDate : Date = new Date()
  myBool : boolean = false
  myTruc : any = {nom : "steve", age : 40}
  myBidule : undefined

  constructor(){
    this.test()
  }


  test() {
    console.log(this.myProp)
    this.myTruc.prenom = "machin"

  }
}
