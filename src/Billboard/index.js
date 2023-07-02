import {useState} from 'react'
import LinkButton from '../Buttons/Links'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import HoverTextContainer from '../HoverTextContainer';

const Billboard = () => {
    const [hoveredButton, setHoveredButton] = useState(false);

    const handleButtonHover = (buttonId, hovered) => {
        console.log('handlebuttonhover, hover: ' + {hovered})
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
                        <li><LinkButton href='#' icon={faHouse} buttonId={1} onHover={handleButtonHover}/></li>
                        <li><LinkButton href='#' icon={ faGithub } buttonId={2} onHover={handleButtonHover}/></li>
                        <li><LinkButton href='#' icon={ faLinkedin } buttonId={3} onHover={handleButtonHover}/></li>
                        <li><LinkButton href='#' icon={ faFilePdf } buttonId={4} onHover={handleButtonHover}/></li>
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