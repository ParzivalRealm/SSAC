import mainbanner from "./mainbanner4.jpg";
import Navbar from "./Navbar";

import { useState } from "react";
import { useEffect } from "react";
export default function Services() {
  const descriptions = {
    engineering:
      "Solid State Automation offers complete engineering solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
    KeyTurn:
      "Solid State Automation offers complete Key-Turn solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
    Schematics:
      "Solid State Automation offers complete Schematic solutions for the automation of your manufacturing processes. We offer a wide range of services to meet your needs. We can help you with the following:",
  };

  const clickedstyles = [
    [1,0,0], [0,1,0], [0,0,1]
]

  const [description, setDescription] = useState(descriptions.engineering);
  const [clicked, setClicked] = useState(clickedstyles[0]);

  function handleClick(state, id) {
    setDescription(descriptions[state]);
    setClicked(clickedstyles[id]);
    console.log(clicked[0])
  }


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
        <div>
          <div class="sticky top-10 shadow-sm">
            <div class="tabs py-10 px-20 z-10 place-items-center justify-center bg-white">
              <a
                class={`tab tab-bordered ${clicked[0] == 1 ? "tab-active" : ""}`}
                id="1"
                onClick={() => handleClick("engineering", 0)}
              >
                Engineering
              </a>
              <a
                class={`tab tab-bordered ${clicked[1] == 1 ? "tab-active" : ""}`}
                id="2"
                onClick={() => handleClick("KeyTurn", 1)}
              >
                Full Key-Turn solutions
              </a>
              <a
                class={`tab tab-bordered ${clicked[2] == 1 ? "tab-active" : ""}`}
                id="3"
                onClick={() => handleClick("Schematics", 2)}
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
              <div class="px-20 pt-10 text-center">
                <h1 class="text-2xl leading-loose font-light">Gallery</h1>
              </div>
              <div class="px-20 py-10 grid grid-rows-2 grid-flow-row place-items-center w-full">
                <div class="grid grid-cols-3">
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 py-10">
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="px-5">
                    <div class="card w-96 bg-white shadow-xl">
                      <figure>
                        <img
                          src="https://placeimg.com/400/225/arch"
                          alt="Shoes"
                        />
                      </figure>
                      <div class="card-body place-items-center">
                        <h2 class="card-title text-primary">
                          System Commissioning
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
