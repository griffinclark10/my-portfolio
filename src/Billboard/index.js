import LinkButton from '../Buttons/Links'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const Billboard = () => {
    return (
        <div className="container">
            <div className="black-box"></div>
            <div className="bottom">
                <div className='column'>
                    <ul>
                        <li><LinkButton href='#' icon={ faHouse }/></li>
                        <li><LinkButton href='#' icon={ faGithub }/></li>
                        <li><LinkButton href='#' icon={ faLinkedin }/></li>
                        <li><LinkButton href='#' icon={ faFilePdf }/></li>
                    </ul>
                </div>
                <div className='column'>
                    <div className='label-visual'>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Billboard