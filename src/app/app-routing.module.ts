import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Demo1Component } from './components/demos/demo1/demo1.component';
import { Demo2Component } from './components/demos/demo2/demo2.component';
import { Demo3Component } from './components/demos/demo3/demo3.component';
import { Exo1Component } from './components/exos/exo1/exo1.component';
import { Demo4Component } from './components/demos/demo4/demo4.component';
import { Demo5Component } from './components/demos/demo5/demo5.component';
import { TargetComponent } from './components/demos/demo5/target/target.component';
import { ErrorComponent } from './components/demos/error/error.component';
import { Demo6Component } from './components/demos/demo6/demo6.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : "", redirectTo : "home", pathMatch : "full"},
  { path : "home", component : HomeComponent},
  { path : "about", canActivate : [authGuard], component : AboutComponent},
  { path : "demo1", component : Demo1Component},
  { path : "demo2", component : Demo2Component},
  { path : "demo3", component : Demo3Component},
  { path : "demo4", component : Demo4Component},
  { path : "demo5", component : Demo5Component},
  { path : "target/:id", component : TargetComponent},
  { path : "demo6", component : Demo6Component},

  { path : "exo1", component : Exo1Component},
  { path : "error", component : ErrorComponent},
  { path : "**", redirectTo : "error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
