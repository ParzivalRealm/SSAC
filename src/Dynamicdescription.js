import { useState } from "react";
import { useEffect } from "react";
import DynamicGallery from "./DynamicGallery";

export default function Dynamicdescription(name) {
  const descriptions = {
    engineering:
      "Solid State Automation offers complete engineering solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
    KeyTurn:
      "Solid State Automation offers complete Key-Turn solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
    Schematics:
      "Solid State Automation offers complete Schematic solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
  };

  const clickedstyles = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const [galleryPhotos, setGalleryPhotos] = useState(6);

  const [description, setDescription] = useState(descriptions[name.name]);
  const [clicked, setClicked] = useState(0);

  function handleClick(state, id, photos) {
    setDescription(descriptions[state]);
    setClicked(clickedstyles[id]);
    setGalleryPhotos(photos);
    console.log(clicked[0]);
  }

  useEffect(() => {
    if (name.name == "engineering") {
      setDescription(descriptions[name.name]);
      setClicked(clickedstyles[0]);
      setGalleryPhotos(6);
    } else if (name.name == "KeyTurn") {
      setDescription(descriptions[name.name]);
      setClicked(clickedstyles[1]);
      setGalleryPhotos(5)
    } else if (name.name == "Schematics") {
      setDescription(descriptions[name.name]);
      setClicked(clickedstyles[2]);
      setGalleryPhotos(4);
    }
  }, [name.name]);

  return (
    <div>
      <div class="sticky top-10 shadow-sm">
        <div class="tabs py-10 px-20 z-10 place-items-center justify-center text-primary bg-white">
          <a
            class={`tab tab-bordered text-primary ${
              clicked[0] == 1 ? "tab-active" : ""
            }`}
            id="1"
            onClick={() => handleClick("engineering", 0, 6)}
          >
            Engineering
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[1] == 1 ? "tab-active" : ""
            }`}
            id="2"
            onClick={() => handleClick("KeyTurn", 1, 5)}
          >
            Full Key-Turn solutions
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[2] == 1 ? "tab-active" : ""
            }`}
            id="3"
            onClick={() => handleClick("Schematics", 2, 4)}
          >
            Schematics
          </a>
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-full">
          <div class="px-20 py-20 grid grid-cols-1 place-items-center w-full bg-neutral">
            <div class="px-5">
              <h1 class="text-2xl leading-loose font-light">Description</h1>
              <p class="leading-loose font-light">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <DynamicGallery photos={galleryPhotos} />
    </div>
  );
}
