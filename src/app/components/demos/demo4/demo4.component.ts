import { Component } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  isVisible : boolean = false

  maListe : string[] = ["Arthur", "Leodagan", "Merlin", "Goustan"]

  switchValue! : number
  switchVisible() {
    this.isVisible = !this.isVisible
  }
}
