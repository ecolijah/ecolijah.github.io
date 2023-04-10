import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/Pirate_Engineer_Template.pdf'
export default function ResumePage() {
  return (
    <div className='resume-main-container'>
        <Document file={resume}>
            <Page pageNumber={1} />
        </Document>
    </div>
  )
}
