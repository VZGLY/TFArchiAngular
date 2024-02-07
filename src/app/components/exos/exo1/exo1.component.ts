import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {

  tempsEcoule : number = 143
  monTimer : any

  start() {
    this.monTimer = setInterval(() => this.tempsEcoule++, 1000)
  }

  pause() {
    clearInterval(this.monTimer)
    this.monTimer = null
  }

  reset() {
    this.pause()
    this.tempsEcoule = 0
  }
}
