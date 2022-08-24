import { useState } from "react";
import { useEffect } from "react";
import Dynamicservices from "./Dynamicservices";

export default function Dynamicdescription(name) {
  const clickedstyles = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const [galleryPhotos, setGalleryPhotos] = useState(6)
    
  

  const [clicked, setClicked] = useState(clickedstyles[0]);

  

  function handleClick(id, photos) {
    setClicked(clickedstyles[id]);
    setGalleryPhotos(photos);

    console.log(clicked[0]);
  }

  return (
    <div>
      <div class="  shadow-sm">
        <div class="tabs py-10 px-20 z-10 place-items-center justify-center text-primary bg-white shadow-sm">
          <a
            class={`tab tab-bordered text-primary ${
              clicked[0] == 1 ? "tab-active" : ""
            }`}
            id="1"
            onClick={() => handleClick(0, 6)}
          >
            Engineering
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[1] == 1 ? "tab-active" : ""
            }`}
            id="2"
            onClick={() => handleClick(1, 5)}
          >
            Full-Key
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[2] == 1 ? "tab-active" : ""
            }`}
            id="3"
            onClick={() => handleClick(2, 4)}
          >
            Schematics
          </a>
        </div>
      </div>
      <Dynamicservices photos={galleryPhotos}/>
    </div>
  );
}
