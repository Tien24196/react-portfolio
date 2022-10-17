import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header({currentNav}) {

  
    return (
      
        <main>
          
          {currentNav === "About Me" && <About></About>}
          {currentNav === "Contact" && <Contact></Contact>}
          {currentNav === "Portfolio" && <Portfolio></Portfolio>}
          {currentNav === "Resume" && <Resume></Resume>}
         
        </main>
      
  
      
    );
  }
  
  export default Header;