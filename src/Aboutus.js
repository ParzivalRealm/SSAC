import Navbar from "./Navbar";
import mainbanner from "./mainbanner4.jpg";
import Dynamicdescription from "./Dynamicdescriptionaboutus";
import Dynamicmenu from "./Dynamicmenu";
import Footer from "./footer";

import { Link } from "react-router-dom";
export default function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[25rem] flex ">
        <div
          class="hero place-items-center justify-start w-full px-72"
          style={{ backgroundImage: `url(${mainbanner})` }}
        >
          <div class="text-base-100">
            <div class="flex flex-col ">
              <div class="grid flex-grow ">
                {" "}
                <h1 class="text-5xl font-light">About Us</h1>
              </div>
              <div class="divider"></div>
              <div class="grid flex-grow card ">
                <h1 class="text-2xl font-thin">
                  Solid State provides high quality solutions <br></br>in the
                  field of industrial controls and automations
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center bg-neutral flex flex-col justify-center">
        <div class="px-16 pt-2 text-2xl h-72 align-middle flex flex-col w-full place-content-center text-primary  font-thin">
          <h1 class="px-16  text-4xl font-light">Get To Know Solid State</h1>
          <h2 class="text-opacity-100 ">
            Learn why our customers trust us to deliver the best solutions for
            their needs
          </h2>
        </div>
      </div>
      <Dynamicdescription />
      <div class="w-full text-center bg-neutral flex flex-col justify-center">
        <div class="px-16 py-20 text-2xl align-middle flex flex-col w-full place-content-center text-primary  font-thin">
          <h1 class="px-16 pb-5 text-4xl font-light">Want to know more?</h1>
          <h2 class="text-opacity-100 ">Check all the ways we can help you</h2>
        </div>
      </div>
      <Dynamicmenu />
     
     <Footer />
    </div>
  );
}
