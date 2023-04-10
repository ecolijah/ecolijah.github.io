import React from 'react';
import '../css/StaticLinks.css';
import LinkedIn_icon from "../assets/icons/icons8-linkedin-2-50.png"
import Github_icon from '../assets/icons/icons8-github-64.png'
import Resume_icon from '..//assets/icons/icons8-profile-50.png'
import Spotify_icon from '..//assets/icons/icons8-spotify-50.png'

export default function StaticLinks() {

  const LinkedIn_buttonHandler = () => {
    window.open("", "_blank");
  };

  const GitHub_buttonHandler = () => {
    window.open("https://github.com/ecolijah", "_blank");
  };

  const Resume_buttonHandler = () => {
    window.open("", "_blank");
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
          />
        </li>

      </ul>
      <ul className='bottom-links'>

        <li>
          <img className='imgLinks'
            src={Resume_icon} 
            alt="cv" 
          />
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
