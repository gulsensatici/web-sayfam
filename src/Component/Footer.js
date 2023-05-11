import React from 'react'
import './Footer.css'
import resim4 from "../image/Reac-App.png";
import resim5 from "../image/Reducer-Calculator.png";
import resim6 from "../image/React App.png";
export const Footer = () => {
  
  return (
    <div className='proje'>
        <div>
        <h3>Projects</h3>
        </div>
        <div className='footer-img'>
       <div className='proje1-1'>  <img src={resim5}></img></div>
       <div className='proje-bilgi'>
       <div className='reducer'> <h4>Reducer Calculator</h4>
       <div className='footer-img-1'>
       <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and theme</p>
</div>
       </div>
       <div className='re-re-ax1'>
       <div><p>raect</p></div>
       <div><p>redux</p></div>
       <div><p>axios</p></div>
       </div>
       <nav>
       <a href="https://github.com/gulsensatici/fsweb-s10g1-reducer-calculator">Github</a> 
       <a href="https://fsweb-s10g1-reducer-calculator-sand.vercel.app/">View site</a> 
       </nav>
       </div>
       
       </div>

       <div className='footer-img'>
       <div className='proje1'>  <img src={resim6}></img></div>
       <div className='proje-bilgi'>
       <div className='pembe'> <h4>Workintech </h4>
       <div className='footer-img-2'>
       <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and theme</p>
       </div>
       </div>
       <div className='re-re-ax2'>
       <p>raect</p>
       <p>redux</p>
       <p>axios</p>
       </div>
       <nav>
       <a href="https://github.com/gulsensatici/FSWeb-S7G2-Team-Builder">Github</a> 
       <a href="https://fs-web-s7-g2-team-builder.vercel.app/">View site</a> 
       </nav>
       </div>
       </div>

       <div className='footer-img'>
       <div className='proje1'>  <img src={resim4}></img></div>
       <div className='proje-bilgi'>
       <div className='Minnet'> <h4>Minnet günlüğü </h4>
       <div className='footer-img-3'>
       <p>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and theme</p>
       </div>
       </div>
       <div className='re-re-ax3'>
       <p>raect</p>
       <p>redux</p>
       <p>axios</p>
       </div>
       </div>
      <div className='nava'>
       <nav>
       <a href='https://github.com/gulsensatici/fsweb-s10-challenge'>Github</a>
       
       <a href="https://fsweb-s10-challenge-zeta.vercel.app/">View site</a> 
       </nav>
       </div>
       </div>


       
    </div>
  )
}
