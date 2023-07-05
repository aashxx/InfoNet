import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import PropTypes from 'prop-types';
import styles from './media/styles.css'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(1);

    // Capitalize method 
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // Fetching data from NewsAPI using fetch
    const updateNewsItems = async() => {
        props.setProgress(10);
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${props.country}&topic=${props.category}&lang=en&page=${page}&page_size=${props.pageSize}`;
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': `${props.apiKey}`
            }
        }
        setLoading(true);
        let data = await fetch(url,options);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    // Calling updateNewsItems() after render()
    useEffect(()=> {
        document.title = `InfoNet - ${capitalize(props.category)}`;
        updateNewsItems();
    }, [])

    // Infinite Load 
    const fetchMoreData = async() => {
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${props.country}&topic=${props.category}&lang=en&page=${page+1}&page_size=${props.pageSize}`;
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': `${props.apiKey}`
            }
        }
        setPage(page + 1);
        let data = await fetch(url,options);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults)
    };

    // News Component 
    return (
    <div className='container my-3'>
        <h1 className='text-center' style={{margin: '100px auto 40px auto'}}>InfoNet - {props.heading}</h1>
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
        >
        <div className="row news-card" style={styles}>
            {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,100)} imageUrl={element.media} newsUrl={element.link} author={element.author} date={element.published_date} source={element.clean_url}/>
                </div>
            })}
        </div>
        </InfiniteScroll>
    </div>
    )
}

// PropTypes 
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    heading: PropTypes.string
}

// Default Props 
News.defaultProps = {
    country: 'IN',
    pageSize: 6,
    category: 'news',
    heading: 'Top Headlines',
    totalResults: 0
}
