import React from 'react'
import "../css/About.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function About() {

  const aboutMe_pageHandler = () => {
    
    // route to page here
  };

  return (
    <div id='About' className='aboutme'>
      <h1 onClick={aboutMe_pageHandler}>about me</h1>
    </div>
  )
}
