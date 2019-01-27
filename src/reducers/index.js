import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import newsIdReducer from './newsIdReducer';
import askIdReducer from './askIdReducer';
import askReducer from './askReducer';

export default combineReducers({
    newsId: newsIdReducer,
    news: newsReducer,
    askId: askIdReducer,
    ask: askReducer
});
