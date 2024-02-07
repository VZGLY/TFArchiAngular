import { CanActivateFn, Router } from '@angular/router';
import { FakeauthService } from '../services/fakeauth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let service : FakeauthService = inject(FakeauthService)
  let router : Router = inject(Router)
  if(service.isConnected)
    return true;
  router.navigate(["error"])
  return false;
};
