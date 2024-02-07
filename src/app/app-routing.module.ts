import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Demo1Component } from './components/demos/demo1/demo1.component';
import { Demo2Component } from './components/demos/demo2/demo2.component';
import { Demo3Component } from './components/demos/demo3/demo3.component';
import { Exo1Component } from './components/exos/exo1/exo1.component';

const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "about", component : AboutComponent},
  { path : "demo1", component : Demo1Component},
  { path : "demo2", component : Demo2Component},
  { path : "demo3", component : Demo3Component},
  { path : "exo1", component : Exo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
