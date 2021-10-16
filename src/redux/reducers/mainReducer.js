import { combineReducers } from 'redux';
import userReducer from './userReducer';
import mfReducer from './mfReducer';

export default combineReducers({
    userDetails: userReducer,
    mutualFundData: mfReducer
});

