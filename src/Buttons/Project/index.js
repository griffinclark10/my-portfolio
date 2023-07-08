import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import './index.scss'

const ProjectButton = ({ href, icon, color }) => {
    const cName = 'project-button ' + color;
    return (
        <Link to={href}>
            <button className={cName}>
                <FontAwesomeIcon icon={icon}/>
            </button>
        </Link>
    );
};

export default ProjectButton;