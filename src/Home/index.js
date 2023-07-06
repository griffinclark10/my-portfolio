import './index.scss'
import HomeButton from '../Buttons/Home'
import { faBriefcase, faLaptopCode, faPersonRays } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className='black-box bb-row'>
            <div className='col-top'>
                <div className='griffin'>_________GRIFFIN'S_ENGINEERING________</div>
                <div className='portfolio'>____PORTFOLIO____</div>
            </div>
            <div className='col-bottom'>
                <HomeButton text="About Me" icon={faPersonRays} href="about-me"/>
                <HomeButton text="Experience" icon={ faBriefcase } href="experience"/>
                <HomeButton text="Projects" icon={ faLaptopCode } href="projects"/>
            </div>
        </div>          
        
    )
}

export default Home