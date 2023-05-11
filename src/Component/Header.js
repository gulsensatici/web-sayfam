import React, { useContext } from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div >
   
        <header className='header' >
            
                   <div className='navlink' >
                    
                    <ul className='link f_flex uppercase'>
                  
                        <li><a href= "#home"> Skills</a></li>
                        
                        <li><a href= "#home"> Projects</a></li>
                      
                     < div className='hireme' > <li><a href= "#hireme"> Hire Me</a></li>
                     </div>
                    
                
 
                    </ul>

            </div>
        </header>
    </div>
    
  )
}
export default Header;