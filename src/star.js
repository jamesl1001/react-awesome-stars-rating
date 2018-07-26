import React from 'react';
import PropTypes from 'prop-types';

const StarSVG = ({
  className,
  viewBox,
  size,
  onMouseMove,
  onMouseLeave,
  onClick,
  index,
  stars,
  isHalf,
  primaryColor,
  secondaryColor,
  fill,
}) => {
  if (index <= stars) {
    fill = 'url(#full)';
  } else if (isHalf && index - 0.5 === stars) {
    fill = 'url(#half)';
  }

  return (
    <svg
      width={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ''}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-stars={index}
      onMouseMove={onMouseMove}
    >
      <linearGradient id="full">
        <stop offset="100%" stopColor={primaryColor} />
      </linearGradient>
      <linearGradient id="none">
        <stop offset="100%" stopColor={secondaryColor} />
      </linearGradient>
      <linearGradient id="half">
        <stop offset="50%" stopColor={primaryColor} />
        <stop offset="50%" stopColor={secondaryColor} />
      </linearGradient>

      <polygon
        fill={fill}
        points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 
      94.35,187.425 58.65,299.625"
        pointerEvents="none"
      />
    </svg>
  );
};

StarSVG.defaultProps = {
  viewBox: '0 0 306 306',
  size: 25,
  fill: 'url(#none)',
  primaryColor: 'yellow',
  secondaryColor: 'grey',
};

export default StarSVG;
