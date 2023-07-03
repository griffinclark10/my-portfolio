import {useState} from 'react'
import LinkButton from '../Buttons/Links'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import HoverTextContainer from '../HoverTextContainer';
import Home from '../Home';

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
            <div className="black-box"></div>
            <div className="bottom">
                <div className='column'>
                    <ul>
                        <li><LinkButton href='#' icon={faHouse} buttonId={1} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#' icon={ faGithub } buttonId={2} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#/' icon={ faLinkedin } buttonId={3} onMouseEnter={handleButtonHover}/></li>
                        <li><LinkButton href='/#/#' icon={ faFilePdf } buttonId={4} onMouseEnter={handleButtonHover}/></li>
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