import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom'

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
    <Link to={href} >
      <button className="btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={icon} className='icon'/>
      </button>
    </Link>
        
  );
};

export default LinkButton;
