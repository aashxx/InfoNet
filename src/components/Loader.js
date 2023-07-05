import React from 'react'
import loading from './media/loading.gif'
import styles from './media/styles.css'

// Spinner component to visualize loading process
export default function Loader() {
  return (
    <div className='text-center loader' style={styles}>
      <img src={loading} alt="Loading..." />
    </div>
  )
}