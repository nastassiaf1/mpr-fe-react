import { combineReducers } from 'redux';
import { authReducers } from './auth.reducer';
import { AuthState } from '../state/auth.state';

const rootReducer = combineReducers({
  auth: authReducers,
});

export interface RootState {
  auth: AuthState,
}

export default rootReducer;
