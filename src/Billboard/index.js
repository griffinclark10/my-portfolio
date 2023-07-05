import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkButton from '../Buttons/Links'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import HoverTextContainer from '../HoverTextContainer';
import Home from '../Home';
import AboutMe from '../AboutMe';

const Billboard = () => {
    const [hoveredButton, setHoveredButton] = useState(false);

    const handleButtonHover = (buttonId, hovered) => {
        if (hovered) {
            setHoveredButton(buttonId);
        } else {
            setHoveredButton(null);
        }
    };  

    return (
        <div className="container">
            {/* <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutMe} />
            </Routes> */}
            <div className="black-box bb-row">
                <Home/>
            </div>
            {/* <div className="black-box bb-col">
                <AboutMe/>
            </div> */}
            <div className="bottom">
                <div className='column'>
                    <ul>
                        <li><LinkButton href='#' icon={ faHouse } buttonId={1} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#' icon={ faGithub } buttonId={2} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#/' icon={ faLinkedin } buttonId={3} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#/#' icon={ faFilePdf } buttonId={4} onMouseEnter={handleButtonHover} /></li>
                        <li><LinkButton href='#' icon={ faEnvelope } buttonId={5} onMouseEnter={handleButtonHover}/></li>
                    </ul>
                </div>
                <div className='column'>
                    <HoverTextContainer showText={hoveredButton}/>
                </div>
            </div>
        </div>
    )
}

export default Billboard