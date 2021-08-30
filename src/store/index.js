import allReducers from './rootReducer';
import {createStore,compose} from 'redux'
const allStoreEnhancers= compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(allReducers, allStoreEnhancers)

export default store
