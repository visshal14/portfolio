import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Achievement from './components/Achievement/Achievement';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import HomePage from './components/Homepage/HomePage';
import LatestArt from './components/LatestArt/LatestArt';
import LastestProject from './components/LatestProject/LatestProject';
import Navbar from './components/Navbar/Navbar';

function App() {
  // eslint-disable-next-line
  const [isAchievement, setIsAchievement] = useState(true)
  // eslint-disable-next-line
  const [isArt, setIsArt] = useState(true)


  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <LastestProject />
      {isArt && <LatestArt />}
      <AboutMe />
      {isAchievement && <Achievement />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
