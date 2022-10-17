import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [NavBar] = useState(['About Me', 'Contact', 'Portfolio', 'Resume']);
  const [currentNav, setCurrentNav] = useState(NavBar[0]);
  
  return (
    <div>
      <Nav
        NavBar = {NavBar}
        setCurrentNav = {setCurrentNav}
        currentNav = {currentNav}
      >
      </Nav>
      <Header currentNav={currentNav}
      ></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
