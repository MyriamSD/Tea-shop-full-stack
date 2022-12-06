import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redu'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk), composeWithDevTools());

export default store;

// rootReducer, composeWithDevTools(applyMiddleware(thunk)));