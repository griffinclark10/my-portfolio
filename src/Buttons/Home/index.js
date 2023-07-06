import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const HomeButton = ({ icon, text, href }) => {
    return (
        <Link to={href} >
            <button className="home-button">
                <p className="btn-text">{ text }</p>
                <FontAwesomeIcon icon={icon} className="icon" />
            </button>
        </Link>
    );
};

export default HomeButton