import hackerNews from '../apis/hackerNews';

export const fetchNewsId = () => async dispatch => {
    const response = await hackerNews.get('/topstories.json?print=pretty');
    response.data.splice(40);
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

export const fetchAskId = () => async dispatch => {
    const response = await hackerNews.get('/askstories.json?print=pretty');
    dispatch({
        type: 'FETCH_ASK_ID',
        payload: response.data
    });
};

export const fetchAskFromId = (askId) => async dispatch => {
    const response = await hackerNews.get(`/item/${askId}.json?print=pretty`);
    dispatch({
        type: 'FETCH_ASK',
        payload: {
            id: response.data.id,
            title: response.data.title,
            by: response.data.by,
            score: response.data.score,
            text: response.data.text
        }
    });
};

export const fetchAskAndId = () => async(dispatch, getState) => {
    await dispatch(fetchAskId());

    getState().askId.forEach(id => dispatch(fetchAskFromId(id)));
};
