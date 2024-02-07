import { Component } from '@angular/core';
import { FakeauthService } from '../../../services/fakeauth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {

  status! : boolean
  constructor(private authService : FakeauthService){
    this.status = this.authService.isConnected
  }

  login() {
    this.authService.login()
    this.status = this.authService.isConnected
  }

  logout() {
    this.authService.logout()
    this.status = this.authService.isConnected
  }
}
