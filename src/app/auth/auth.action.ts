import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export class AuthActions {
  public static login = createAction(
    '[Login Page] User Login',
    props<{ user: User }>()
  );

  public static logout = createAction(
    '[Top Menu] User Logout'
  );

}


