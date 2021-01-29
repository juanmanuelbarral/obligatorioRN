import { createStore } from 'redux';
import reducers from '../reducers';

//TODO migrate redux logic to the one-folder method
export default createStore(reducers);
