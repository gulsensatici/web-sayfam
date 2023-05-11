import React , {useContext}from 'react'
import './Main.css'



 const Main = () => {
  return (
    
    <div className='all'>
        <h3>Skills</h3>
        <div className='twice'>
<div className='title'>
<h4>Java Script</h4>
<p>  JavaScript is a programming language used to create dynamic behaviors on web pages. It can be used on both client-side (i.e., in the browser) and server-side (Node.js) environments. </p>
</div>

<div className='title'>
<h4> React.Js</h4>
<p> React.js is a popular open-source JavaScript library used for building user interfaces (UIs). It allows developers to create reusable UI components.</p>
</div>

<div className='title'>
<h4>CSS</h4>
<p> CSS is a styling language used to describe the presentation of a document written in HTML or XML. It defines how the content is displayed on the web page, including layout, colors, fonts, and other visual elements.</p>
</div>
</div>
<div className='çizgi'>

</div>
<div className='profile'>
 <h3>Profile</h3> 
<div className='profile-top'>
  <div><h4>Profile</h4></div>
<div className='profile-alt'>
  <ul>
    <li>Doğum tarihi</li>
    <li> İkamet şehri</li>
    <li>Eğitim Durumu</li>
    <div className='tercih'>
    <li>Tercih Ettiği Rol</li>
    </div>
  </ul>
  <div className='bilgi'>
  <ul>
    <li>08.02.1999</li>
    <li>İzmir</li>
    <li>Ege Ünv. Matematik <br/>Lisans, 2022</li>
    <div className='rol'><li>Frontend, UI</li></div>
  </ul>
  </div>
  <div className='hakkımda'>
    <h4>About me</h4>
<p>I went to the University of Ege and majored in Maths.</p>
  </div>
  </div>
</div>
</div>
<div className='çizgi'>

</div>
    </div>
    
  )
}
export default Main;