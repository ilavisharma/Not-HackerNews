export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NEWS_ID':
            return action.payload;
        default:
            return state;
    }
};
