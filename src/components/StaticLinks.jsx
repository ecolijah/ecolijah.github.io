import React from 'react';
import '../css/StaticLinks.css';
import LinkedIn_icon from "../assets/icons/icons8-linkedin-2-50.png"
import Github_icon from '../assets/icons/icons8-github-64.png'
import Resume_icon from '..//assets/icons/icons8-profile-50.png'
import Spotify_icon from '..//assets/icons/icons8-spotify-50.png'
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';


export default function StaticLinks() {

  const LinkedIn_buttonHandler = () => {
    window.open("https://www.linkedin.com/in/elijah-lopez-65b809238/", "_blank");
  };

  const GitHub_buttonHandler = () => {
    window.open("https://github.com/ecolijah", "_blank");
  };

  const Resume_buttonHandler = () => {
    //window.open("/resume", "_blank");
    // history.push("/resume")
  };

  const Spotify_buttonHandler = () => {
    window.open("https://open.spotify.com/user/ecolijah", "_blank");
  };

  return (
    <div className='linkbox'>
      <ul className='top-links'>

        <li>
          <img className='imgLinks'
            src={Github_icon} 
            alt="gh" 
            onClick={GitHub_buttonHandler}
          />
        </li>

        <li>
          <img className='imgLinks'
            src={LinkedIn_icon} 
            alt="li" 
            onClick={LinkedIn_buttonHandler}
          />
        </li>

      </ul>
      <ul className='bottom-links'>

        <li>
          <Link className='navItem' to="/resume">
          <img className='imgLinks'
            src={Resume_icon} 
            alt="cv" 
          />
          </Link>
          
        </li>

        <li>
          <img className='imgLinks'
            src={Spotify_icon} 
            alt="sp" 
            onClick={Spotify_buttonHandler}
          />
        </li>

      </ul>
    </div>
  );
}
