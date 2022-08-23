import mainbanner from "./mainbanner4.jpg";
import Navbar from "./Navbar";


import Dynamicdescription from "./Dynamicdescription";
import DynamicGallery from "./DynamicGallery";
export default function Services() {

  

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
        <Dynamicdescription />
      </div>
    </div>
  );
}
