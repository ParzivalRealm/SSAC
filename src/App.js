import logo from "./logo.svg";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Servicescta from "./Servicescta.js";
import Titledivider from "./Titledivider.js";
import Stories from "./Stories.js";
import Moreaboutus from "./Moreaboutus.js";
import Footer from "./footer.js";
import { Transition } from '@headlessui/react'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import "./App.css";
import PreviousMap from "postcss/lib/previous-map";

function App() {
  return (
    <Transition
      show={true}
      appear={true}
    enter="transition-opacity duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    
  >
    <ScrollContainer>
      <ScrollPage>
        <Navbar />
        <Animator animation={batch(FadeOut(1,0), MoveOut(0,-1000))}>
          <Hero />
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(FadeOut(1,0), MoveIn(-1000,0))}>
          <div id="scroll"></div>
          <Servicescta />
        </Animator>
      </ScrollPage>

      
        <Stories />


      <Moreaboutus />
      <Footer />
    </ScrollContainer>
  </Transition>
  );
}

export default App;
