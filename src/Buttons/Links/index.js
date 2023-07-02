import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const LinkButton = ({ buttonID, onHover, icon, href }) => {

    const [isHovered, setIsHovered] = useState(false);
    console.log('initial buttonID: ' + {buttonID})
    
    const handleMouseEnter = () => {
      setIsHovered(true);
      onHover(buttonID, true); // Notify the parent component that this button is being hovered
      console.log('buttonID: ' + {buttonID})
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      onHover(buttonID, false); 
    };

  return (
        <button className="btn"
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon icon={icon} className='icon'/>
    </button>
  );
};

export default LinkButton;
