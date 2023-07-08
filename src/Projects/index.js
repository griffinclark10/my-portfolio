import { faAws, faCss3, faGithub, faHtml5, faJs, faLaravel, faLinux, faPhp, faPython, faReact, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollSyncPane } from 'react-scroll-sync';
import { ScrollSync } from 'react-scroll-sync';
import MenuButton from '../Buttons/Menu';
import ProjectButton from '../Buttons/Project';
import './index.scss'

const Projects = () => {
    //Projects:
    //Dealsourcing
    //Queue Hop
    //Thesis
    //QMIND 2
    //QMIND 1
    //Alacrity Canada Website
    // This website
    return (
        <ScrollSync>
            <div className='black-box bb-project' >
                <div className='menu'>
                    <MenuButton />
                </div>
                <ScrollSyncPane>
                    <div className='about-column left'>
                        <p>Hi</p>
                    </div>
                </ScrollSyncPane>
                <ScrollSyncPane>
                    <div className='about-column right'>
                        <h1>Projects</h1>
                        <h2>Dealsourcing</h2>
                        <h3>Lead Engineer (Full Stack)</h3>
                        <h2 className='icons'><FontAwesomeIcon icon={faPhp} color={'#AEB2D5'} /> &ensp; <FontAwesomeIcon icon={faPython} color={'#4B8BBE'}/> &ensp;  <FontAwesomeIcon icon={faLaravel} color={'#F05340'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> &ensp; <FontAwesomeIcon icon={faAws} color={'#FF9900'} /> &ensp; </h2>
                        <p>Dealsourcing is a real estate investment software based in the UK with clients all over Europe. I was the lead engineer of this real estate investment SaaS startup. I developped a pricing and ROI estimatation algorithm using 1,000,000+ datapoints and <span className='blue'>Python's Tensorflow, Open-NN</span>, etc. I built a front-end application for customer service and marketing using<span className='blue'> PHP, Blade, HTML5, CSS, AJAX,</span> and <span className='blue'>Jquerry</span>. I used <span className='blue'>Laravel</span> and created data pipelines for backend implementation. <span className='pink'>Heroku</span> was used for deployment, <span className='pink'>AWS RDS</span> for data storage, and <span className='blue'> MYSQL </span>for database management. </p>
                        
                        <br />
                        
                        <h2>Queue Hop</h2>
                        <h3>Lead App Developper / AI Engineer</h3>
                        <h2 className='icons'><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp;  <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </h2>
                        <div className='project-btns'>
                            <ProjectButton href='#' icon={faFilePdf} color="blue" />
                            <ProjectButton href='https://github.com/Jonah1234567/QueueHop' icon={faGithub} color="pink" />
                        </div>
                        <p>Queue Hop was a capstone project completed by me and 4 other software minded engineering physics students. The goal of this project was to estimate the wait time that it would take to get into the engineering bar on Queen's campus, a bar with a famously long wait. My role on the team was leading the app development, using <span className="blue">Javascript</span> and <span className="blue">React Native</span> for app design and <span className="pink">google sheets api</span> for data transmission. I also helped with developping the <span className="blue">P2P-Net in Python</span> model used to count the number of people in line and give a time estimate. This project was sucessful and gained us an A+ in the class.  </p>

                        <br />

                        <h2>Cooperative Perception for AVs</h2>
                        <h3>Research Student</h3>
                        <h2 className='icons'><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faUbuntu} color={'#E95420'} /> &ensp;  <FontAwesomeIcon icon={faLinux} color={'white'} /> &ensp;  </h2>
                        <div className='project-btns'>
                            <ProjectButton href='#' icon={faFilePdf} color="blue" />
                        </div>
                        <p>My undergraduate thesis was completed as a student under Dr. Zulkernine with the BAMLAB and Queen's University. This goal of this research was to extend research on cooperative perception for autonomous vehicles. Autonomous vehicles require a holistic view of their surroundings to ensure maximal safety and efficacy. The idea is to use data from surrounding vehicles to build this view. The goal of this research was to implement intermediate feature fusion on the <span className="pink">DAIR-V2X</span> dataset. To achieve this, I used a large <span className="blue">Python</span> program using mainly <span className="blue">pypcd</span> and <span className="blue">mmdet3d</span> libraries on the <span className="pink">CUDA</span> software. The programs were run on a virtual <span className="pink">linux</span> machine and generated positive results (see paper) earning me an A in my defense.</p>

                    </div>
                </ScrollSyncPane>
            </div>
        </ScrollSync>
    )
}

export default Projects;