import { Dispatch } from 'redux';
import { UserActionType } from '@/redux/types/user.types';
import AuthService from './../../services/auth';
import { User } from '@/interfaces/user';

import { logInSuccess, logInFail } from '@/redux/actions/user.actions';
import { AppThunk } from '../store';

export const logIn = ({ login, password }: User): AppThunk => {
  return async (dispatch: Dispatch<UserActionType>) => {
    try {
        const { _login, id, email } = await AuthService.login({ login, password });

        dispatch(logInSuccess({
            login: _login,
            id,
            email
        }));
    } catch (error: any) {
        dispatch(logInFail(error.message));
    }
  };
};
