import './index.scss'
import HomeButton from '../Buttons/Home'
import { faBriefcase, faLaptopCode, faPersonRays } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <div className='col-top'>
                <div className='griffin'>______GRIFFIN_CLARK'S_______</div>
                <div className='portfolio'>____PORTFOLIO____</div>
            </div>
            <div className='col-bottom'>
                <HomeButton text="About Me" icon={faPersonRays} />
                <HomeButton text="Experience" icon={faBriefcase} />
                <HomeButton text="Projects" icon={faLaptopCode} />
            </div>
        </>          
        
    )
}

export default Home