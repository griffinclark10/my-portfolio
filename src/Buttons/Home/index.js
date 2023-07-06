import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HomeButton = ({ icon, text, href }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.0 }}>
            <Link to={href} >
                <button className="home-button">
                    <p className="btn-text">{ text }</p>
                    <FontAwesomeIcon icon={icon} className="icon" />
                </button>
            </Link>
        </motion.div>
    );
};

export default HomeButton