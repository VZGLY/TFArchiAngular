import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
})
export class TargetComponent {

  id! : number
  constructor(
    private ar : ActivatedRoute
  ){
    this.id = ar.snapshot.params["id"]
  }


}
