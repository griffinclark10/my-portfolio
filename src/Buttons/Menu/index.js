import './index.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const MenuButton = () => { 
    return (
        <motion.div
            className='menu-btn'>
            <FontAwesomeIcon icon={faBars}/>
        </motion.div>
    );
};

export default MenuButton;