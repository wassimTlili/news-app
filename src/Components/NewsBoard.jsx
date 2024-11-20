import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6bf97407d58b401bac3632d7f90775c9`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch(error => console.error('Error fetching the news:', error));
    }, [category]);

    return (
        <div className="container">
            <h2 className='text-center mb-4'>Latest <span className='badge bg-danger'>News</span></h2>
            <div className="d-flex flex-wrap justify-content-center">
                {articles.length > 0 ? (
                    articles.map((news, index) => (
                        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    ))
                ) : (
                    <p>No news available</p>
                )}
            </div>
        </div>
    );
}

export default NewsBoard;
