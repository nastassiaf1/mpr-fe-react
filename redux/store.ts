import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer from './reducers/index';
import { AppActions } from './types/app.types';

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
