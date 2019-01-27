export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ASK_ID':
            return action.payload;
        default:
            return state;
    }
};
