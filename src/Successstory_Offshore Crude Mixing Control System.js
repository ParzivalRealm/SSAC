import mainbanner from "./mainbanner4.jpg";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";



import Dynamicdescription from "./DynamicdescriptionSuccessstory";

export default function Successstory() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              <div class="text-5xl">
                <h1>Offshore Crude Mixing Control System</h1>
              </div>
              <div class="divider"></div>
              <div class="text-2xl">
                <h1>Success Story</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center py-10 px-10 bg-neutral">
        <h1 class="text-xl text-primary leading-loose font-normal">
          Offshore Crude Mixing company requires solutions that are up to date
          and that help their operation to get more insights and the ability to
          act fast when required. Working with Solid State Automation they
          updated their whole control systems and get a set of modern tools to
          manage their performance
        </h1>
      </div>
      <Dynamicdescription/>

      <div class="px-20 pt-10 text-center ">
        <h1 class="text-2xl leading-loose font-light">Gallery</h1>
      </div>
      <div class="px-20 py-10 grid grid-rows-2 grid-flow-row place-items-center w-full">
        <div class="grid grid-cols-3">
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 1</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 2</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 3</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 py-10">
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 4</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 5 </h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">Example 6</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
