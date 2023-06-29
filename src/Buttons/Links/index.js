import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkButton = (props) => {
  return (
    <a className="btn" href={props.href}>
      <FontAwesomeIcon icon={props.icon} className='icon'/>
    </a>
  );
};

export default LinkButton;
