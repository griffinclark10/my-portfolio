// import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Billboard from './Billboard';

function App() {
  return (
    <BrowserRouter>
      <Billboard />
    </BrowserRouter>
  );
}

export default App;
