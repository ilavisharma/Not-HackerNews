export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ASK':
            return [...state, action.payload];
        default:
            return state;
    }
};
