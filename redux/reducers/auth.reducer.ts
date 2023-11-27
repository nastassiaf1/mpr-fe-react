import { UserActionType } from '@/redux/types/user.types';
import { AuthState, initialAuthState } from '../state/auth.state';
import { EUserActions } from '../types/user.types';

export const authReducers = (state: AuthState = initialAuthState, action: UserActionType): AuthState => {
  switch(action.type) {
    case EUserActions.LOG_IN_SUCCESS:
    case EUserActions.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    };
    case EUserActions.LOG_OUT:
    case EUserActions.REGISTER_USER_FAIL:
    case EUserActions.LOG_IN_FAIL:
    default: {
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    }
  }
};
