import mainbanner from "./mainbanner4.jpg";
import Navbar from "./Navbar";
import {useLocation} from 'react-router-dom';
import Footer from "./footer";
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


import Dynamicdescription from "./Dynamicdescription";
import DynamicGallery from "./DynamicGallery";
import { useEffect } from "react";
export default function Services() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return (
    
    <div>
      <Navbar />
      
      <Transition
      show={true}
      appear={true}
    enter="transition-opacity duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    
  >
      <div className="w-full h-[25rem] flex ">
        <div
          class="hero place-items-center justify-start w-full px-72"
          style={{ backgroundImage: `url(${mainbanner})` }}
        >
          <div class="text-base-100">
            <div class="flex flex-col ">
              <div class="grid flex-grow ">
                {" "}
                <h1 class="text-5xl">Services</h1>
              </div>
              <div class="divider"></div>
              <div class="grid flex-grow card ">
                <h1 class="text-2xl">
                  We help our customers to solve their challenges
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      
     
      
      <div>
        
      </div>
     
      <Dynamicdescription name={location.state}/>
   
      
      
      <Footer />
      </Transition>
    </div>
  );
}
