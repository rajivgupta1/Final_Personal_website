import './App.css';

import DarkMode from './Components/DarkMode/DarkMode';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Abouts from './Components/Abouts/Abouts';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import { useState } from 'react';

import Jsonfile from './Data/Jsonfile.json'


function App() {
  const [showScreen, setShowScreen] = useState("");

  const screens = {
    Skills: <Skills/>,
    Projects:  <Projects/>,
    about:  <Abouts/>,
    contact: <Contacts />,
  };
  return (
    <div className="wrapper">
    <DarkMode/>
    <Header setShowScreen={setShowScreen}/>

    {!showScreen ? (
        <>
          <Hero />
          {Object.values(screens)}
        </>
      ) : (
        screens[showScreen]
      )}

    <Footer/>
    <Scroll/>
    </div>
  );
}

export default App;
