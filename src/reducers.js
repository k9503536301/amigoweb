const initialState = {
    newsList:[],
    loading: true,
    error: false,
    isLogged: false,
    isWarning: false
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_NEWS_REQUEST':
            return {
                newsList:[],
                loading: true,
                error: false
            };

        case 'FETCH_NEWS_SUCCESS':
            return {
                newsList: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_NEWS_FAILURE':
            return {
                newsList:[],
                loading: false,
                error: true
            };

        case 'LOGGED_ADMIN':
            return {...state, isLogged: action.payload};

        case 'WARNING_MESSAGE':
            return {...state, isWarning: action.payload};

        default:
            return state;
    }
};

export default reducer;