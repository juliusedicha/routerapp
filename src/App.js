import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import About from "./components/About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import Homepage from "./components/Homepage/Homepage";
import User from './components/User/User';
import Users from './components/Users/Users';
import Contact from "./components/Contact/Contact";

import { useTheme } from "./ThemeProvider";
import Error from "./components/Error/Error";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
    
        <div>
          <a
          
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faMoon} />
          </a>

        <nav>
          <ul>
            <li>
              <NavLink activeClassName="activeElementNew" to="/">
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeElementNew" to="/contact">
                Contact Page
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeElementNew" to="/about">
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeElementNew" to="/users">
                Users Page
              </NavLink>
            </li>
          </ul>
            </nav>
          </div>
          

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
        
        <Route path='/' element={<Error />} />
      
      </Routes>
    </div>
  );
}

export default App;




