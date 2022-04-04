import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initalState = {}

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(
  thunk,
  createLogger()
)));

export default store;