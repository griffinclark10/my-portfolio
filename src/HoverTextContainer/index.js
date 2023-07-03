import './index.scss'

const HoverTextContainer = ({ showText }) => {
    return (
        <div className="text-container">
            {/* {showText === null && <p>null</p>} */}
            {showText === 1 && <p>Take Me Home</p>}
            {showText === 2 && <p>My Github</p>}
            {showText === 3 && <p>My Linkedin</p>}
            {showText === 4 && <p>My Resume</p>}
        </div>
    );
};

export default HoverTextContainer