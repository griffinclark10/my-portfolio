import './index.scss'

const HoverTextContainer = ({ hoveredButton }) => {
    return (
        <div className="text-container">
            <p>Hovered button: {hoveredButton}</p>
            {hoveredButton === null && <p>null</p>}
            {hoveredButton === 1 && <p>Text for Button 1</p>}
            {hoveredButton === 2 && <p>Text for Button 2</p>}
            {hoveredButton === 3 && <p>Text for Button 3</p>}
        </div>
    );
};

export default HoverTextContainer