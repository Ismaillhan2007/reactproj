import {combineReducers,legacy_createStore as  createStore} from 'redux';
import housesReducer from "./housesReducer";
import commentsReducer from "./commentsReducer";
let reducers = combineReducers({
    housesPage:housesReducer,
    reviewsPage:commentsReducer
    
});
let store = createStore(reducers);

export default store;