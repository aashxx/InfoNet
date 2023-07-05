import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import Footer from './components/Footer';

export default function App(props) {
  const apiKey = process.env.REACT_APP_INFONET_API_KEY; //API key
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#fff' progress={progress} height={3}/> {/* --> Top Loading Bar */}
        <Routes>
          <Route exact path='/' element={<><Intro /><News setProgress={setProgress} apiKey={apiKey} key='home' pageSize={3} country='IN' category='news' heading='Top Headlines'/></>} />
          <Route exact path='/world' element={<News setProgress={setProgress} apiKey={apiKey} key='world' pageSize={6} country='IN' category='world' heading='World'/>} />
          <Route exact path='/politics' element={<News setProgress={setProgress} apiKey={apiKey} key='politics' pageSize={6} country='IN' category='politics' heading='Politics'/>} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={6} country='IN' category='business' heading='Business'/>} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={6} country='IN' category='entertainment' heading='Entertainment'/>} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={6} country='IN' category='science' heading='Science'/>} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={6} country='IN' category='sport' heading='Sports'/>} />
          <Route exact path='/gaming' element={<News setProgress={setProgress} apiKey={apiKey} key='gaming' pageSize={6} country='IN' category='gaming' heading='Gaming'/>} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={6} country='IN' category='tech' heading='Technology'/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}



