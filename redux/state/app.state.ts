import { AuthState, initialAuthState } from './auth.state';

export interface AppState {
  auth: AuthState;
}

export const initialAppState: AppState = {
  auth: initialAuthState,
}

export function getInitialState(): AppState {
  return initialAppState;
}
