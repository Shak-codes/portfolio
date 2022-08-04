import bg from './assets/background/bg.svg'
import './App.css';
import React from 'react';
import useWindowDimensions from './shared/getWindowDimensions';

function App() {

  const { height, width } = useWindowDimensions();
  
  return (
    <div className="container">
      <svg className="overlay" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
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
        <text className="headline" textAnchor="middle" dominantBaseline="middle" x='52.5%' y="52.5%">
          Developer
        </text>
        <text className="headline" textAnchor="middle" dominantBaseline="middle" x='52.5%' y="62.5%">
          Competitor
        </text>
        <text className="headline" textAnchor="middle" dominantBaseline="middle" x='52.5%' y="72.5%">
          Creator
        </text>
      </svg>
      <img src={bg} alt={'test'} className="bg"/>
    </div>
  );
}

export default App;
