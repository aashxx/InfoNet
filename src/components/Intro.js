import React from 'react';
import styles from './media/styles.css';

// Home page Component
export default function Intro() {
  return (
    <div className='container intro'>
      <div className='header' style={styles}>
          <h1 style={{fontSize: '5rem'}}>InfoNet</h1>
          <h2 style={{fontSize: '3.3rem'}}>Daily Dispatch!</h2>
          <p><small className='text-muted' style={{fontSize: '1rem'}}>Keeping readers informed and engaged with concise and engaging articles. Reliable information on global events, sports, business, technology, entertainment and more.</small></p>
      </div>
      <div className="img-bg"><img src="https://img.freepik.com/premium-photo/online-news-mobile-phone-close-up-businesswoman-reading-news-articles-smartphone-screen-application-hand-holding-smart-device-mockup-website-newspaper-portal-internet_157125-9552.jpg?w=900" alt="InfoNet" /></div>
    </div>
  )
}


