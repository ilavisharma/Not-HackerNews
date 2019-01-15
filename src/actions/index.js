// import _ from 'lodash';
import hackerNews from '../apis/hackerNews';

export const fetchNewsId = () => async dispatch => {
    const response = await hackerNews.get('/topstories.json?print=pretty');
    response.data.length -= 490;
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
            title: response.data.title,
            by: response.data.by,
            url: response.data.url,
            score: response.data.score
        }
    });
};

export const fetchNewsAndId = () => async(dispatch, getState) => {
    console.log('about to fetch news');
    await dispatch(fetchNewsId());
    console.log(getState().newsId);
    // console.log(getState().newsId);

    // _.chain(getState().newsId)
    //     .forEach(id => dispatch(fetchNewsFromId(id)))
    //     .value();

    // getState().newsId.forEach(id => dispatch(fetchNewsAndId(id)));
};
