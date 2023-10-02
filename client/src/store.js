import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import fitnessTrackerReducer from './reducers/fitness-tracker.reducer';

const store=createStore(fitnessTrackerReducer,applyMiddleware(thunk))

export default store;