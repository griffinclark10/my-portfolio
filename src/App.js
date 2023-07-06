// import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Billboard from './Billboard';
import Home from './Home/index.js'
import AboutMe from './AboutMe/index.js'

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Billboard page={<Home />} />} />  
        <Route path="about-me" element={<Billboard page={<AboutMe />} />} />  
      </Routes>
    </Router>
      
  );
}

export default App;
