import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { User } from '../model/user.model';
import {AuthActions} from '../action-types';
import {A} from '@angular/cdk/keycodes';

export const authFeatureKey = 'auth';

export interface AppState {
  user: User
}

export const initialAuthState: AppState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user:   action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })

);



