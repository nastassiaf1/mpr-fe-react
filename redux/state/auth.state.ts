import { User } from '../../interfaces/user';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
}
