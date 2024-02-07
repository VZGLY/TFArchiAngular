import { Component } from '@angular/core';
import { NavLink } from './navlink.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  links : NavLink[] = [
    {title : "Mes démos", children : [
      {title : "Typescript", url : "demo1"},
      {title : "Bindings", url : "demo2"},
    ]},
    {title : "Exercices", children : [
      {title : "Chrono", url : "exo1"}
    ]}
  ]
}
