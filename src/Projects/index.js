import { faAws, faCss3, faGithub, faHtml5, faJs, faLaravel, faLinux, faPhp, faPython, faReact, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollSyncPane } from 'react-scroll-sync';
import { ScrollSync } from 'react-scroll-sync';
import MenuButton from '../Buttons/Menu';
import ProjectButton from '../Buttons/Project';
import dealsourcing1 from './images/dealsourcing1.png';
import dealsourcing2 from './images/dealsourcing2.png';
import queuehop1 from './images/queuehop1.png';
import queuehop2 from './images/queuehop2.png';
import thesis1 from './images/thesis1.png';
import thesis2 from './images/thesis2.png';
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
        <div className='black-box bb-experience' >
            {/* <div className='menu'>
                <MenuButton />
            </div> */}
            <div className='separation-col project-title '>
                    <h1>Projects</h1>
            </div>
            <div className='bb-project'>
                <ScrollSync>
                    <div className='separation-col'>
                        <ScrollSyncPane>
                            <div className='about-column left'>
                                <img src={dealsourcing1} className='project-images' alt="Dealsourcing Home Page" />
                                <img src={dealsourcing2} className='project-images' alt="Dealsourcing Deal Page" />
                                <img src={queuehop1} className='project-images' alt="Queue Hop Home Page" />
                                <img src={queuehop2} className='project-images' alt="Queue Hop Bar Page" />
                                <img src={thesis1} className='project-images' alt="DAIR-V2X dataset" />
                                <img src={thesis2} className='project-images' alt="Results from coalign model" />
                            </div>  
                        </ScrollSyncPane>
                        <ScrollSyncPane>
                            <div className='about-column right'>
                            <h2>Dealsourcing</h2>
                            <h3>Lead Engineer (Full Stack)</h3>
                            <h2 className='icons'><FontAwesomeIcon icon={faPhp} color={'#AEB2D5'} /> &ensp; <FontAwesomeIcon icon={faPython} color={'#4B8BBE'}/> &ensp;  <FontAwesomeIcon icon={faLaravel} color={'#F05340'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> &ensp; <FontAwesomeIcon icon={faAws} color={'#FF9900'} /> &ensp;</h2>
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
                            <div className='project-btn-text'>
                            <h2 className='icons'><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faUbuntu} color={'#E95420'} /> &ensp;  <FontAwesomeIcon icon={faLinux} color={'white'} /> &ensp;  </h2>
                                <ProjectButton href='./documents/ENPH455FinalReport.pdf' icon={faFilePdf} color="blue" />
                            </div>
                            <p>My undergraduate thesis was completed as a student under Dr. Zulkernine with the BAMLAB and Queen's University. This goal of this research was to extend research on cooperative perception for autonomous vehicles. Autonomous vehicles require a holistic view of their surroundings to ensure maximal safety and efficacy. The idea is to use data from surrounding vehicles to build this view. The goal of this research was to implement intermediate feature fusion on the <span className="pink">DAIR-V2X</span> dataset. To achieve this, I used a large <span className="blue">Python</span> program using mainly <span className="blue">pypcd</span> and <span className="blue">mmdet3d</span> libraries on the <span className="pink">CUDA</span> software. The programs were run on a virtual <span className="pink">linux</span> machine and generated positive results (see paper) earning me an A in my defense.</p>
                            </div>
                        </ScrollSyncPane>
                    </div>
                </ScrollSync>
            </div>
            <div className='separation-col'>
                <div className='about-column'>
                    <h2>a-Tweet-A-Stock</h2>
                    <h3>AI/ML Engineer</h3>
                    <div className='project-btn-text space'>
                        <h2 className='icons'><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> </h2>
                        <ProjectButton href='https://github.com/18AnirudhaV/ATweetAStock' icon={faGithub} color="pink" />
                    </div>
                    <p>A-Tweet-a-stock was a project done with a Queen's AI club called QMIND. The idea for the project was to see if we could predict the direction and percent change in a popular stock based on the sentiment of the tweets about it. I used Python's Scrapy to scrape hundreds of thousands of historical tweets about Tesla. We used pytorch sentiment analysis to analyze these tweets and grade them on a 0-1 scale. We then trained KNN and RFF models to determine if the stock would go positive or negative at market open. We achieved a 82% success rate over 18 days real-time testing. This semester-long project was then presented at the Canadian Undergraduate conference on AI. </p>
                    
                    <br /> 
                    
                    <h2>Helping Hand</h2>
                    <h3>AI/ML Engineer</h3>
                    <div className='project-btn-text space'>
                        <h2 className='icons'><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </h2>
                        <ProjectButton href='#' icon={faFilePdf} color="blue" />
                    </div>
                    <p>Another QMIND project, this time using computer vision to detect and translate letters in ASL. In this project, we used the sing language MNIST database to train a model witten in Python's Keras and OpenCV train and test this dataset. We also developped a interface using HTML and CSS that would use a computer's live feed to translate letters in real time. The reult was a model with a 93% accuracy and a paper that won "Best paper" at the Canadian Undergraduate conference on AI judged by professors and industry professionals.</p>

                    <br />
                    
                    <h2>This Portfolio</h2>
                    <h3>Software Engineer</h3>
                    <div className='project-btn-text space'>
                        <h2> <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp;  <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </h2>
                        <ProjectButton href='https://github.com/griffinclark10/my-portfolio' icon={faGithub} color="pink" />
                    </div>
                    <p>This website was built from scratch using Javascript and React and completely styled in Css3 as to ameliorate my styling knowledge and skills. I hope you have enjoyed it :).</p>
                </div>    
            </div>   
        </div>
        
        
    )
}

export default Projects;