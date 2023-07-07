import { text } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useRef } from 'react';
import './index.scss'

const Experience = () => {

    // const textRefs = useRef([]);

    // useEffect(() => {
    //     const textElements = textRefs.current;

    //     const animateText = (textElement, delay) => {
    //         setTimeout(() => {
    //             textElement.classList.add('typing');
    //         }, delay);
    //     };

    //     let delay = 0;
    //     textElements.forEach((textElement) => {
    //         animateText(textElement, delay);
    //         delay += 1000; // Adjust the delay between each text element here
    //     });
    // }, []);

    return (
        <div className='black-box bb-experience'>
            <h1 className='title'>Professional Experience</h1>
            <div className='divider-horizontal' />
            <div className='separation-col'>
                <h2>Software Engineer</h2>
                <h2>Dealsourcing</h2>
            </div>
            <div className='separation-col'>
                <h3>Jan 2022 - Mar 2023</h3>
                <h3>Vancouver, BC</h3>
            </div>
            <ul>
                <li>Technical lead for a small real estate investement SaaS Startup, independently rewriting the back end of a website using PHP and updating the front-end structure using Laravel, HTML, CSS, AJAX, and jQuery</li>
                <li>Developed a Python scraper that obtains and stores 10,000+ datapoints per day in an AWS RDS accessed using SQL.</li>
                <li>Utilized agile development techniques to effectively manage and coordinate multiple streams of work within the teams, ensuring timely and consistent progress towards project goals.</li>
            </ul>
            <div className='divider-horizontal' />
            <div className='separation-col'>
                <h2>Software Engineer</h2>
                <h2>Alacrity Canada</h2>
            </div>
            <div className='separation-col'>
                <h3>Jan 2022 - May 2023</h3>
                <h3>Victoria, BC</h3>
            </div>
            <ul>
                <li>Technical lead for a small real estate investement SaaS Startup, independently rewriting the back end of a website using PHP and updating the front-end structure using Laravel, HTML, CSS, AJAX, and jQuery</li>
                <li>Developed a Python scraper that obtains and stores 10,000+ datapoints per day in an AWS RDS accessed using SQL.</li>
                <li>Utilized agile development techniques to effectively manage and coordinate multiple streams of work within the teams, ensuring timely and consistent progress towards project goals.</li>
            </ul>
            <div className='divider-horizontal' />
            <div className='separation-col'>
                <h2>Research Intern</h2>
                <h2>McDonald Institute</h2>
            </div>
            <div className='separation-col'>
                <h3>May 2021 - Sep 2021</h3>
                <h3>Kingston, ON</h3>
            </div>
            <ul>
                <li>Advanced research in dark matter through the complex mathematical modelling of stellar and galactic formations with the use of the Queen’s supercomputer server.</li>
                <li>Quickly adapted to unfamiliar hydrodynamic modelling software such as GIZMO, yt and DICE.</li>
                <li>Leveraged python fluency to analyze data coming from the models, as well as teaching the language to high school students.</li>
            </ul>
        </div>
        
    );
}

export default Experience