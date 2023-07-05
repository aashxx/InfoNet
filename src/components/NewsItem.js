import React from 'react';
import styles from './media/styles.css';

export default function NewsItem(props) {
  let {title, imageUrl, newsUrl, author, date, source} = props;
  return (
      <div className='my-3'>
          <div className="card newsItem" style={styles}>
              <div className='img-card' style={styles}><img src={!imageUrl?"https://img.freepik.com/free-photo/error-word-transmission-warp-text_53876-108497.jpg?w=740&t=st=1688383273~exp=1688383873~hmac=e2f66f95bd351b4ffe17c4b9aac15ee09c52a05e103f00639ee67b4a24cf2319":imageUrl} style={{height: '100%', width: '100%', objectFit: 'fill'}} className="card-img-top" alt='Image not displayed' /></div>
              <div className="card-body">
              <div className="position-absolute start-50 translate-middle badge rounded-pill bg-dark" style={{top: '20px'}}>{source}</div>
                  <h5 className="card-title">{title}...</h5>
                  <p className='card-text para' style={{position:'absolute', bottom: '40px'}}><small className='text-muted'>By {!author?"Anonymous":author} on {new Date(date).toUTCString()}</small></p>
                  <div className='text-center read-more'><a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a></div>
              </div>
          </div>
      </div>
  )
}
