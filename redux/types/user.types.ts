import { User } from '../../interfaces/user';

export enum EUserActions {
  LOG_IN = '[USER] Log In',
  LOG_IN_SUCCESS = '[USER] Log In Success',
  LOG_IN_FAIL = '[USER] Log In Fail',
  LOG_OUT = '[USER] Log Out',
  REGISTER_USER = '[USER] Register User',
  REGISTER_USER_SUCCESS = '[USER] Register User Success',
  REGISTER_USER_FAIL ='[USER] Register User Fail',
}

export interface LogIn {
  type: EUserActions.LOG_IN;
  payload: User
}

export interface logInSuccess {
  type: EUserActions.LOG_IN_SUCCESS;
  payload: User
}

export interface LogInFail {
  type: EUserActions.LOG_IN_FAIL;
  payload: string;
}

export interface LogOut {
  type: EUserActions.LOG_OUT;
}

export interface RegisterUser {
  type: EUserActions.REGISTER_USER;
  payload: User
}

export interface RegisterUserSuccess {
  type: EUserActions.REGISTER_USER_SUCCESS;
  payload: User
}

export interface RegisterUserFail {
  type: EUserActions.REGISTER_USER_FAIL;
  payload: string;
}

export type UserActionType = LogIn | logInSuccess | LogInFail | LogOut | RegisterUser | RegisterUserSuccess | RegisterUserFail;
