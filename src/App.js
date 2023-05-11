
import React, { useState,useContext } from 'react';
import './App.css';
 import  Header from './Component/Header';
import { Home } from './Component/Home';
import Main from './Component/Main'
import { Footer } from './Component/Footer';
import { End } from './Component/End';

import Toggle from './Component/Toggle';

function App() {
  const [language, setLanguage] = useState("en");


  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };

  return (
  <div>
  <Toggle
      language={language}
      handleLanguageChange={handleLanguageChange}/>
   <Header language={language} />
   <Home language={language} />
   <Main language={language} />
   <Footer language={language} />
   <End language={language} />
   </div> 
  );
}

export default App;
