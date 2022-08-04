import React from 'react'
import PropTypes from 'prop-types';

import useWindowDimensions from '../../../shared/getWindowDimensions';

import './style.css'

const Text = ({ variant, text, color, fontSize }) => {
    const { height, width } = useWindowDimensions();

    return (
        <svg fill={color !== null ? color : '#000000'} viewbox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
            <text fontSize={fontSize} className='text' y="40">{text}</text>
        </svg>
    );
};

Text.propTypes = {
    variant: PropTypes.oneOf(['title', 'header', 'paragraph']),
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string
};

Text.defaultProps = {
    variant: 'title',
    text: "test-string",
    color: null
};

export default Text