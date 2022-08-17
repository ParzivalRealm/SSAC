import logo from './logo.svg';
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Servicescta from './Servicescta.js'
import Titledivider from './Titledivider.js'
import Stories from './Stories.js'
import Moreaboutus from './Moreaboutus.js'
import Footer from './footer.js'

import './App.css';
import PreviousMap from 'postcss/lib/previous-map';

function App() {
  return (
    <div data-theme="winter">
      <Navbar />
      <Hero />
      <Titledivider/>
    <Servicescta />
      <Stories />
      <Moreaboutus />
      <Footer/>

    </div>
  );
}

export default App;
