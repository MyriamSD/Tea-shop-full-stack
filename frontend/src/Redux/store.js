import { createStore } from 'redux'
// import thunk from 'redu'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// rootReducer, composeWithDevTools(applyMiddleware(thunk)));