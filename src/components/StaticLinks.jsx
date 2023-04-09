import React from 'react';
import '../css/StaticLinks.css';

export default function StaticLinks() {
  return (
    <div className='linkbox'>
      <ul className='top-links'>
        <li>github</li>
        <li>linkedin</li>
      </ul>
      <ul className='bottom-links'>
        <li>youtube</li>
        <li>resume</li>
      </ul>
    </div>
  );
}
