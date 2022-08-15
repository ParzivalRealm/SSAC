import logo from './logo.svg';
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Servicescta from './Servicescta.js'
import Stories from './Stories.js'
import Moreaboutus from './Moreaboutus.js'
import Button from './Button.js'
import './App.css';
import PreviousMap from 'postcss/lib/previous-map';

function App() {
  return (
    <div data-theme="winter">
      <Navbar />
      <Hero />
      <Servicescta />
      <Stories />
      <Moreaboutus />
    </div>
  );
}

export default App;
