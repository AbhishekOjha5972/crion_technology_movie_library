import {
    compose,
    combineReducers,
    applyMiddleware,
    legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './movies.reducer';


const rootReducer = combineReducers({
masterMovies:moviesReducer
});

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);