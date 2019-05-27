import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions'
import NewsItem from '../news-item/index';
import withNewsApi from '../hoc/with-news-api';
import ErrorIndicator from '../error-indicator/index';

class NewsPage extends Component{
    componentDidMount(){
        this.props.fetchNews()
    }

    render() {
        const {newsList, loading, error} = this.props;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const loadingBoard = loading ? <div className="alert alert-warning"> Данные загружаются </div> : null;
        const content = hasData ? newsList.map((item,idx) => <NewsItem key={idx} item={ item }/>) : null;


        return(
            <Fragment>
                {errorMessage}
                {loadingBoard}
                {content}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ newsList, loading, error }) => {
    return { newsList, loading, error };
};

const mapDispatchToProps = (dispatch, { newsApi }) => {
    return {
        fetchNews: fetchNews(newsApi, dispatch)
    }
};

export default withNewsApi()(connect(mapStateToProps, mapDispatchToProps)(NewsPage));