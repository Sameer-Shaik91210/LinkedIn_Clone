import React from 'react'
import './Widgets.css';
import { FiberManualRecordRounded, Info } from '@mui/icons-material';
function Widgets() {
 const newsArticle=(heading,subtitle)=>(
   <div className="widgets_article">
    <div className="widgets_articleLeft">
        <FiberManualRecordRounded/>
    </div>
    <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
   </div>
 )
 
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle('Israel-Hamas War: Latest updates','By Nirajita Banerjee, Editor at LinkedIn News')}
        {newsArticle('Festive sales, but employees first','By Divya Pathak, Editor at LinkedIn News')}
        {newsArticle('EV firms spark campus hiring','By Dipal Desai, Editor at LinkedIn News')}
        {newsArticle('Decoding a bond breakthrough','By Preethi Ramamoorthy, Editor at LinkedIn News')}
        {newsArticle('Green is in at FMCG firms','By Divya Pathak, Editor at LinkedIn News')}
    </div>
  )
}

export default Widgets