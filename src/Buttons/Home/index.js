import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeButton = ({ icon, text }) => {
    return (
        <button className="home-button">
            <p className="btn-text">{ text }</p>
            <FontAwesomeIcon icon={icon} className={icon} />
        </button>
    );
};

export default HomeButton