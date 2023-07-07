import { text } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef, useState } from 'react';
import { ScrollSync } from 'react-scroll-sync';
import './index.scss'


const useTypewriter = (text, delay, initialDelay) => {
    const [typedText, setTypedText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      let currentText = '';
  
      const typeText = () => {
        if (currentIndex < text.length) {
          currentText = text.slice(0, currentIndex + 1);
          setTypedText(currentText);
          currentIndex++;
          setTimeout(typeText, delay);
        }
      };
  
      const typingTimeout = setTimeout(() => {
        typeText();
      }, initialDelay);
  
      return () => {
        clearTimeout(typingTimeout);
      };
    }, [text, delay, initialDelay]);
  
    return typedText;
  };

const Experience = () => {
    const list11 = "Technical lead for a small real estate investement SaaS Startup, independently rewriting the back end of a website using PHP and updating the front-end structure using Laravel, HTML, CSS, AJAX, and jQuery.";
    const list12 = "Developed a Python scraper that obtains and stores 10,000+ datapoints per day in an AWS RDS accessed using SQL."
    const list13 = "Utilized agile development techniques to effectively manage and coordinate multiple streams of work within the teams, ensuring timely and consistent progress towards project goals."
    
    const list21 = "Oversaw the technical and asset acquisition for a small Startup, including working with GitHub, AWS RDS, Stripe, Namecheap, and Heroku.";
    const list22 = "Delivered weekly updates to the board on progress and demonstrated dedication to completing work in a timely manner."
    const list23 = "Served the mid-size company as an in house techincal consultant, often fixing bugs & domain issues, and implementing page redesigns using Wordpress, Hubspot, and Namecheap."

    const list31 = "Advanced research in dark matter through the complex mathematical modelling of stellar and galactic formations with the use of the Queen’s supercomputer server.";
    const list32 = "Quickly adapted to unfamiliar hydrodynamic modelling software such as GIZMO, yt and DICE.";
    const list33 = "Leveraged python fluency to analyze data coming from the models, as well as teaching the language to high school students.";

    const text1 = useTypewriter("Professional Experience", 20, 0);
    const text2 = useTypewriter("Software Engineer", 20, 460);
    const text3 = useTypewriter("Dealsourcing", 20, 460);
    const text4 = useTypewriter("Jan 2022 - Mar 2023", 20, 800);
    const text5 = useTypewriter("Vancouver, BC", 20, 800);
    const text6 = useTypewriter(list11, 2, 1180);
    const text7 = useTypewriter(list12, 2, 1590);
    const text8 = useTypewriter(list13, 2, 1812);

    const text9  = useTypewriter("Software Engineer", 20, 2172);
    const text10 = useTypewriter("Alacrity Canada", 20, 2172);
    const text11 = useTypewriter("Jan 2022 - May 2023", 20, 2492);
    const text12 = useTypewriter("Victoria, BC", 20, 2492);
    const text13 = useTypewriter(list21, 2, 2872);
    const text14 = useTypewriter(list22, 2, 3142);
    const text15 = useTypewriter(list23, 2, 3374);

    const text16 = useTypewriter("Research Intern", 20, 3500);
    const text17 = useTypewriter("McDonald Institute", 20, 3500);
    const text18 = useTypewriter("May 2021 - Sep 2021", 20, 3500);
    const text19 = useTypewriter("Kingston, ON", 20, 3500);
    const text20 = useTypewriter(list31, 2, 3750);
    const text21 = useTypewriter(list32, 2, 4000);
    const text22 = useTypewriter(list33, 2, 4250);

    return (
        <ScrollSync>
            <div className='black-box bb-experience'>
                <h1 className='title'>{text1}</h1>
                <div className='divider-horizontal' />
                <div className='separation-col'>
                    <h2>{text2}</h2>
                    <h2>{text3}</h2>
                </div>
                <div className='separation-col'>
                    <h3>{ text4 }</h3>
                    <h3>{text5}</h3>
                </div>
                <ul>
                    <li>{text6}</li>
                    <li>{text7}</li>
                    <li>{text8}</li>
                </ul>
                <div className='divider-horizontal' />
                <div className='separation-col'>
                    <h2>{text9}</h2>
                    <h2>{text10}</h2>
                </div>
                <div className='separation-col'>
                    <h3>{text11}</h3>
                    <h3>{text12}</h3>
                </div>
                <ul>
                    <li>{text13}</li>
                    <li>{text14}</li>
                    <li>{text15}</li>
                </ul>
                <div className='divider-horizontal' />
                <div className='separation-col'>
                    <h2>{text16}</h2>
                    <h2>{text17}</h2>
                </div>
                <div className='separation-col'>
                    <h3>{text18}</h3>
                    <h3>{text19}</h3>
                </div>
                <ul>
                    <li>{text20}</li>
                    <li>{text21}</li>
                    <li>{text22}</li>
                </ul>
            </div>

        </ScrollSync>
    );
}

export default Experience