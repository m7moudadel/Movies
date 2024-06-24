import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const _Router= inject(Router)
if (localStorage.getItem('myToken') != null) {
  return true
}else{
  _Router.navigate(['/login'])
    return false;
}
};
