import bg from './bg.svg'
import './App.css';
import React from 'react';
import useWindowDimensions from './shared/getWindowDimensions';

function App() {

  const { height, width } = useWindowDimensions();
  
  return (
    <div className="container">
      <svg className="overlay" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        {/* <path className="twitter-logo" transform='scale(0.1, 0.1) translate(8000, 3650)' d="
          M 630, 425
          A 195, 195 0 0 1 331, 600
          A 142, 142 0 0 0 428, 570
          A  70,  70 0 0 1 370, 523
          A  70,  70 0 0 0 401, 521
          A  70,  70 0 0 1 344, 455
          A  70,  70 0 0 0 372, 460
          A  70,  70 0 0 1 354, 370
          A 195, 195 0 0 0 495, 442
          A  67,  67 0 0 1 611, 380
          A 117, 117 0 0 0 654, 363
          A  65,  65 0 0 1 623, 401
          A 117, 117 0 0 0 662, 390
          A  65,  65 0 0 1 630, 425
          Z"/>
        <path className="youtube-logo" transform='scale(2.3, 2.3) translate(385, 173)' d="
          M8.051 1.999h.089c.822.003 
          4.987.033 6.11.335a2.01 2.01 
          0 0 1 1.415 1.42c.101.38.172.883.22 
          1.402l.01.104.022.26.008.104c.065.914.073 
          1.77.074 1.957v.075c-.001.194-.01 1.108-.082 
          2.06l-.008.105-.009.104c-.05.572-.124 
          1.14-.235 1.558a2.007 2.007 0 0 1-1.415 
          1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 
          0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 
          2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 
          31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 
          2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 
          0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209
          z"/> */}

        <text className="name" textAnchor="middle" dominantBaseline="middle" x='47.5%' y="42.5%">S
          <tspan>H</tspan>
          <tspan>A</tspan>
          <tspan>K</tspan>
          <tspan>I</tspan>
          <tspan>R</tspan>
        </text>
        <text className="name" textAnchor="middle" dominantBaseline="middle" x='52.5%' y="52.5%">R
          <tspan>A</tspan>
          <tspan>H</tspan>
          <tspan>M</tspan>
          <tspan>A</tspan>
          <tspan>N</tspan>
        </text>
      </svg>
      <img src={bg} alt={'test'} className="bg"/>
    </div>
  );
}

export default App;
