import './index.scss';
import ring from './images/iron-ring.png'
import hagiang from './images/hagiang.png'
import field from './images/field.png'
import group from './images/group.png'
import elephants from './images/elephants.png'
import peru from './images/peru.png'
import tofino from './images/tofino.png'
import toronto from './images/toronto.png'
import vancouver from './images/vancouver.png'
import { ScrollSync } from 'react-scroll-sync';
import { ScrollSyncPane } from 'react-scroll-sync';
import MenuButton from '../Buttons/Menu';


const AboutMe = () => {
    return (
        <ScrollSync>
            <div className="black-box bb-about">
                <div className='menu'>
                    <MenuButton />
                </div>
                <ScrollSyncPane>
                    <div className='about-column left'>
                        <h1>Griffin Clark</h1>
                        <h2>Software Engineer</h2>
                        <p>Hey! I'm a Denver-born, Canada-bred engineer with a thirst for knowledge and a heart set on making a difference. As a child growing up in New Brunswick, I learned to appreciate the delicate balance between nature and technology, a balance I strive to find in my work as a Software Engineer.</p><p>My journey began at Queen's University, where I pursued a degree in Engineering Physics. There, I was fascinated by the complexities of how the world works and was drawn to the unlimited possibilities of what technology could achieve. This led me down the road of becoming a software engineer, an intricate role where my passions for problem-solving, precision, critical thinking, and innovation truly come into play.</p><p>But as much as I love tackling complex algorithms and optimizing code, I also believe in living life to the fullest. Currently, I'm writing this from a beach café in Lombok, Indonesia, having spent the last three months exploring the hidden gems of Southeast Asia. Travel fuels my creativity and broadens my perspective, inspiring me to continually innovate and think outside the box.</p><p>I also channel my energy into fitness, particularly running. The discipline and perseverance it takes to complete a marathon are qualities that I carry into my professional life as well. In 2022, I completed the Banff Marathon, an accomplishment that parallels the determination I bring to my work as a software engineer.</p><p>My professional journey is guided by qualities such as logical thinking, attention to detail, adaptability, resilience, and a constant desire for learning—traits that I believe make a successful engineer. I'm not just interested in creating software; I aim to craft solutions that can positively impact our world.</p><p>Looking ahead, my sights are set on an ambitious goal: to serve as the CTO of a fast-paced, innovative climate tech startup within the next decade. I am deeply passionate about leveraging technology to combat climate change and believe in creating sustainable solutions for a better tomorrow.</p>
                    </div>
                </ScrollSyncPane>
                
                <div className='divider' />
                <ScrollSyncPane>
                <div className='about-column right'>
                    <img src={ring} className='portrait' alt='Iron Ring'/>
                    <img src={hagiang} className='portrait img-right' alt='Ha Giang Loop' style={{ zIndex: 1 }}/>
                    <img src={field} className='portrait img-left' alt='Alberta'/>
                    <img src={group} className='landscape' alt='Queens University'/>
                    <img src={peru} className='portrait img-left' alt='Machu Picchu'/>
                    <img src={elephants} className='portrait img-right' alt='Elephants in Thailand' style={{ zIndex: 1 }} />
                    <img src={tofino} className='portrait img-left' alt='Tofino'/>
                    <img src={toronto} className='portrait img-right' alt='CN Tower' />
                    <img src={vancouver} className='img-final' alt='Ghiribaldi National Park' />
                </div>
                </ScrollSyncPane>
            </div>
        </ScrollSync>
    );
};

export default AboutMe;