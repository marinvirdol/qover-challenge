import React from 'react'

function ValidIcon({background = '#31CFDA', color = '#5B7289'}) {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
  <defs>
      <path id="a" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm5.25-12.75L14 6l-6.25 6.25-2.5-2.5L4 11l3.75 3.75 7.5-7.5z"/>
  </defs>
  <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
          <use href="#a"/>
      </mask>
      <use fill="#5B7289" href="#a"/>
      <g fill={background} mask="url(#b)">
          <path d="M0 0h20v20H0z"/>
      </g>
  </g>
</svg>

 )
}

export default ValidIcon