import React ,{useContext} from 'react'

import "./Home.css";
import resim1 from "../image/github-mark.png"
import resim2 from "../image/linkedin.png"
import resim3 from "../image/gulsen.jpeg";


export const Home = () => {

  return (
  
    
    <div >
          <div className='name'>
                <hr></hr>
                <p>Gülşen SATICI</p>
                </div>
        <section className='hero' id="home">
          <div className='container f_flex top'>
             
            <div className='left-top'>
              <h3>Creative thinker <br/> Minimalisim lover</h3>
              <p>Hi, I’m Gülşen. I’m a full-stack developer.
                 If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. 
                 Let’s shake hands with me</p>

                 <div className='hero_btn d_flex'>

                  <div className='col_1'>
                    <div className='butonlar'>
                    <div className='button-'>
                      <div className='btn_shadow1'>
                      
                        <a href='http://localhost:3001/'>Hire me</a>
                        
                        </div>
                        </div>
                        <div className='button'>
                        <div  className='btn_shadow'>

                        <a href='https://github.com/gulsensatici'> Github</a>
                         </div>
                        <div className='btn_shadow'>
                       
                        <a  href='https://www.linkedin.com/in/g%C3%BCl%C5%9Fen-sat%C4%B1c%C4%B1-b108a61b8/'>Linkedin</a>
                      </div>
                    </div>
                      <div className='resim2'>
                        <img src={resim2}></img>
                        </div>
                     <div className='resim1'>
                        <img src={resim1}></img>
                        </div> 
                    </div>
               
                  </div>
                 </div>
            </div>
                 <div >
              <img src={resim3}  className='picture' alt="foto"/>
            </div>

          
            
          </div>

        </section>
    </div>
    
  

    
  )
}
