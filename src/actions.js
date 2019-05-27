const newsRequested = () => {
    return {
        type: 'FETCH_NEWS_REQUEST'
    }
};

const newsLoaded = (newsList) => {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: newsList
    };
};

const newsError = (error) => {
    return {
        type: 'FETCH_NEWS_FAILURE',
        payload: error
    };
};

const loggedAdmin = (isLogged) => {
    return {
        type: 'LOGGED_ADMIN',
        payload: isLogged
    }
};

const warningMessage =(isWarning) => {
    return {
        type: 'WARNING_MESSAGE',
        payload: isWarning
    }
};

const fetchNews = (newsApi, dispatch) => () => {
    dispatch(newsRequested());
    newsApi.getNews()
        .then((data) => dispatch(newsLoaded(data)))
        .catch((err) => dispatch(newsError(err)));
};

export {
    fetchNews,
    loggedAdmin,
    warningMessage
};