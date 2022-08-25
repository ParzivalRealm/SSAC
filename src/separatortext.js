import Stats from "./stats.js";

function Separatortext() {
  return (
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
  );
}

export default Separatortext;
