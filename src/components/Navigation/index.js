import React, { useEffect} from 'react';


function Nav(props) {

  const {
     NavBar = [],
     setCurrentNav,
     currentNav
  } = props;

  useEffect(() => {
     document.title = currentNav;
   }, [currentNav]);

  return (
    <header>
        <div >
        <h2>
        <a  href="/">
           Tien Ngo
        </a>
        </h2>
        <nav>

            <ul className="flex-row">
               {NavBar.map((nav) => (
                    <li className={`mx-2 ${
                         currentNav === nav && 'navActive'
                         }`} key={nav} >
                         <span onClick={() => {
                              setCurrentNav(nav)
                            }}>
                         {nav}
                         </span>
                    </li>
               ))}
               
               </ul>
        </nav>
        </div>
    </header>
  );
}

export default Nav;