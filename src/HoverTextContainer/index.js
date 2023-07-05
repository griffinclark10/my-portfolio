import './index.scss'

const HoverTextContainer = ({ showText }) => {
    return (
        <div className="text-container">
            {/* {showText === null && <p>null</p>} */}
            {showText === 1 && <p>TAKE ME HOME</p>}
            {showText === 2 && <p>MY GITHUB</p>}
            {showText === 3 && <p>MY LINKEDIN</p>}
            {showText === 4 && <p>MY RESUME</p>}
        </div>
    );
};

export default HoverTextContainer