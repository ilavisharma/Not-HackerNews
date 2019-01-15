import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import newsIdReducer from './newsIdReducer';

export default combineReducers({
    newsId: newsIdReducer,
    news: newsReducer
});
