import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Fix the import for thunk (use curly braces for named import)
import authReducer from './reducers/authReducer'; // Fix the reducer import

// Create the store and apply the thunk middleware
const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
