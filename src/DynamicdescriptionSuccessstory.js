import { useState } from "react";
import { useEffect } from "react";

export default function Dynamicdescription(name) {
  const clickedstyles = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const descriptions = {
    goals:
    <div class="w-full flex   min-h-full py-10 px-20 shadow-sm">
    <div class="grid w-full min-h-full grid-cols-3 text-center ">
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
        <h1>&bull; Goals</h1>
      </div>
    </div>
  </div>,
    challenges:
    <div class="w-full flex   min-h-full py-10 px-20 shadow-sm">
    <div class="grid w-full min-h-full grid-cols-3 text-center ">
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
        <h1>&bull; Challenges</h1>
      </div>
    </div>
  </div>,
    results:
    <div class="w-full flex   min-h-full py-10 px-20 shadow-sm">
    <div class="grid w-full min-h-full grid-cols-3 text-center ">
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
      </div>
      <div class="grid grid-rows-3 min-h-full h-72 justify-center align-middle ">
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
        <h1>&bull; results</h1>
      </div>
    </div>
  </div>
  };

  const [clicked, setClicked] = useState(clickedstyles[0]);

  const [description, setDescription] = useState(descriptions["goals"]);

  function handleClick(id, description) {
    setClicked(clickedstyles[id]);
    setDescription(descriptions[description]);

    console.log(clicked[0]);
  }

  return (
    <div>
      <div class="sticky top-10 shadow-sm">
        <div class="tabs py-10 px-20 z-10 place-items-center justify-center text-primary bg-white shadow-sm">
          <a
            class={`tab tab-bordered text-primary ${
              clicked[0] == 1 ? "tab-active" : ""
            }`}
            id="1"
            onClick={() => handleClick(0, "goals")}
          >
            Goals
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[1] == 1 ? "tab-active" : ""
            }`}
            id="2"
            onClick={() => handleClick(1, "challenges")}
          >
            Challenges
          </a>
          <a
            class={`tab tab-bordered text-primary ${
              clicked[2] == 1 ? "tab-active" : ""
            }`}
            id="3"
            onClick={() => handleClick(2, "results")}
          >
            Results
          </a>
        </div>
        {description}
      </div>
    </div>
  );
}
