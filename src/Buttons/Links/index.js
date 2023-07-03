import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const LinkButton = ({ buttonId, onMouseEnter, icon, href }) => {

    const [isHovered, setIsHovered] = useState(false);
    // console.log('initial buttonId: ' + buttonId)
    
    const handleMouseEnter = () => {
      setIsHovered(true);
      onMouseEnter(buttonId, true); // Notify the parent component that this button is being hovered
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      onMouseEnter(buttonId, false); 
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
