import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "react-pdf/dist/esm/Page/TextLayer.css";

import resume from '../assets/Pirate_Engineer_Template.pdf';
import '../css/ResumePage.css';

export default function ResumePage() {
  return (
    <div className="resume-main-container">
      <div className="pdf-container">
        <Document file={resume}>
          <Page className='actualpdf' pageNumber={1} renderTextLayer={false} />
        </Document>
      </div>
    </div>
  );
}
