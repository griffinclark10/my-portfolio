import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkButton from '../Buttons/Links'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import HoverTextContainer from '../HoverTextContainer';
import resume from './documents/GriffinClark_Resume2023-06.pdf';
// import Home from '../Home';
// import AboutMe from '../AboutMe';
// import { Route, Routes } from 'react-router-dom';

const Billboard = ({page}) => {
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
            {page}
            {/* <AboutMe/>
            <Home/> */}
            <div className="bottom">
                <div className='column'>
                    <ul>
                        <li><LinkButton href='/my-portfolio' icon={ faHouse } buttonId={1} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='https://github.com/griffinclark10' icon={ faGithub } buttonId={2} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='https://www.linkedin.com/in/griffin-clark-a02513146/' icon={ faLinkedin } buttonId={3} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href={resume} icon={ faFilePdf } buttonId={4} onMouseEnter={handleButtonHover} /></li>
                        <li><LinkButton href='mailto:griffinclark10@gmail.com' icon={ faEnvelope } buttonId={5} onMouseEnter={handleButtonHover}/></li>
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