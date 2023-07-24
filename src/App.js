// import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Billboard from './Billboard';
import Home from './Home/index.js'
import AboutMe from './AboutMe/index.js'
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/my-portfolio" element={<Billboard page={<Home />} />} />  
        <Route path="/about-me" element={<Billboard page={<AboutMe />} />} />  
        <Route path="/experience" element={<Billboard page={<Experience />} />} /> 
        <Route path="/projects" element={<Billboard page={<Projects />} />} />
      </Routes>
    </Router>
      
  );
}

export default App;
