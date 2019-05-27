import React from 'react';

import './news-item.css';

const NewsItem = ({item}) =>{
    const {title, author, publishedAt, urlToImage, content, url } = item;
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>

                <div className="card-subtitle">
                    <span className="card-subtitle-author">{author}</span>
                    <span>{`  ${publishedAt.split('T')[0]}`}</span>
                </div>

                <img className="img-fluid" src={urlToImage} alt="Картинка"/>

                <p className="card-text">{content}</p>
                <a href={url} className="card-link">Источник</a>
            </div>
        </div>
    )
};

export default NewsItem;