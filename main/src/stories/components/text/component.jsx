import React from 'react'
import PropTypes from 'prop-types';


import './style.css'

const Text = ({ variant, text, fill, fillColor, stroke, strokeColor, strokeWidth, fontSize }) => {

    const length = text.length

    return (
        <svg
            overflow='visible'
            width={length*fontSize*0.9}
            height={fontSize}
            className="container"
            stroke={stroke ? strokeColor : null}
            strokeWidth={strokeWidth}
            fill={fill ? fillColor : null}
            xmlns="http://www.w3.org/2000/svg"
        >
            <text fontSize={fontSize} className='text' y={3*fontSize/5} dominantBaseline="middle">{text}</text>
        </svg>
    );
};

Text.propTypes = {
    variant: PropTypes.oneOf(['title', 'header', 'paragraph']),
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    fill: PropTypes.bool.isRequired,
    fillColor: PropTypes.string,
    stroke: PropTypes.bool.isRequired,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
};

export default Text