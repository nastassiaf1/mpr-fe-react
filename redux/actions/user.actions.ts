import { User } from '../../interfaces/user';
import { EUserActions, UserActionType } from '@/redux/types/user.types';

export const LogIn = (userData: User): UserActionType => ({
  type: EUserActions.LOG_IN,
  payload: userData,
})

export const logInSuccess = (userData: User): UserActionType => ({
  type: EUserActions.LOG_IN_SUCCESS,
  payload: userData,
});

export const logInFail = (error: string): UserActionType => ({
  type: EUserActions.LOG_IN_FAIL,
  payload: error,
});

export const LogOut = (): UserActionType => ({
  type: EUserActions.LOG_OUT
});

export const RegisterUser = (userData: User): UserActionType => ({
  type: EUserActions.REGISTER_USER,
  payload: userData,
});

export const RegisterUserSuccess = (userData: User): UserActionType => ({
  type: EUserActions.REGISTER_USER_SUCCESS,
  payload: userData,
});

export const RegisterUserFail = (error: string): UserActionType => ({
  type: EUserActions.REGISTER_USER_FAIL,
  payload: error
});
