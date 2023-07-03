import './index.scss'
import HomeButton from '../Buttons/Home'
import { faBriefcase, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <div className='col-top'>
                <div className='griffin'>_____GRIFFIN_CLARK'S______</div>
                <div className='portfolio'>____PORTFOLIO____</div>
            </div>
            <div className='col-bottom'>
                <HomeButton text="About Me" icon={faUser} />
                <HomeButton text="Experience" icon={faBriefcase} />
                <HomeButton text="Projects" icon={faProjectDiagram} />
            </div>
        </>          
        
    )
}

export default Home