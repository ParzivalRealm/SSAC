import mainbanner from "./mainbanner4.jpg";
import Separatortext from "./separatortext";
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

function Hero() {
  function handleClick() {
    document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div
        class="hero h-[35rem] "
        style={{ backgroundImage: `url(${mainbanner})` }}
      >
        <div class="hero-content text-left text-base-100">
          <div class="max-w-2xl bg-opacity-60">
            <div class="flex w-full">
              <div class="grid flex-grow place-items-center">
                {" "}
                <h1 class="text-5xl">
                  Modern solutions for the modern industry
                </h1>
              </div>
              <div class="divider divider-horizontal"></div>
              <div class="grid flex-grow card w-full place-items-center">
                <h1 class="text-2xl">
                  We help our customers to reach their goals
                </h1>
              </div>
            </div>

            <div class="w-full flex justify-center p-16">
              <button
                class="btn rounded-none text-primary shadow-primary transition "
                onClick={handleClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-full text-center bg-neutral flex flex-col justify-center">
          <div class="px-16 pt-16 text-4xl">
            <h1>Solid State Automation and Controls</h1>
          </div>
          <div class="px-16 pt-0 text-3xl">
            <h2 class="text-opacity-100">
              We have the knowledge and expertise to help <br></br>with your
              automation and control system needs.
            </h2>
          </div>
        </div>
        <div class="w-full flex justify-center p-8 bg-neutral">
          <div class="stats shadow-lg rounded-none">
            <div class="stat place-items-center w-72">
              <div class="stat-title">Years of experience</div>
              <div class="stat-value">20</div>
              <div class="stat-desc">
                Our team has over 20 years of <br></br>experience.
              </div>
            </div>

            <div class="stat place-items-center w-72">
              <div class="stat-title">Customers</div>
              <div class="stat-value text-secondary">+100</div>
              <div class="stat-desc text-secondary">
                have trusted in our solutions.
              </div>
            </div>

            <div class="stat place-items-center w-72">
              <div class="stat-title">Development hours</div>
              <div class="stat-value">400</div>
              <div class="stat-desc">
                have been invested to create our robust apps
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
