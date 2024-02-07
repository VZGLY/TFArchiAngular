import { Component } from '@angular/core';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  status! : boolean
  constructor(private authService : FakeauthService) {
    this.status = this.authService.isConnected
  }
}
