// import _ from 'lodash';
import hackerNews from '../apis/hackerNews';

export const fetchNewsId = () => async dispatch => {
    const response = await hackerNews.get('/topstories.json?print=pretty');
    response.data.splice(20);
    dispatch({
        type: 'FETCH_NEWS_ID',
        payload: response.data
    });
};

export const fetchNewsFromId = (postId) => async dispatch => {
    const response = await hackerNews.get(`/item/${postId}.json?print=pretty`);
    dispatch({
        type: 'FETCH_NEWS',
        payload: {
            id: response.data.id,
            title: response.data.title,
            by: response.data.by,
            url: response.data.url,
            score: response.data.score,
            comments: response.data.descendants
        }
    });
};

export const fetchNewsAndId = () => async(dispatch, getState) => {
    await dispatch(fetchNewsId());

    getState().newsId.forEach(id => dispatch(fetchNewsFromId(id)));
};
