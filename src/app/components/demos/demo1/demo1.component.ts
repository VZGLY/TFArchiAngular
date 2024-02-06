import { Component } from '@angular/core';
import { Acteur, Film } from './Film.model';


@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  private myProp! : string | null
  public myNumber? : number
  myDate : Date = new Date()
  myBool : boolean = false
  myTruc : any = {nom : "steve", age : 40}
  myBidule : undefined

  myFilm : Film = new Film("star wars")

  myActor : Acteur = {nom : "toto", prenom : "bidule"}

  constructor(){
    this.test()
    this.myFilm.disbonjour()
  }


  test() : boolean | string {
    console.log(this.myProp)
    this.myTruc.prenom = "machin"
    for(let i = 0; i < 10; i++){
      console.log(i)

    }
    return "true"
  }
}

