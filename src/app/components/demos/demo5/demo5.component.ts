import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {

  constructor(
    private routerService : Router
  ){}

  redirection() {
    this.routerService.navigate(["target", 42])
  }

  //voir dans le routing pour les redirection/path vide/ et par défaut
}
