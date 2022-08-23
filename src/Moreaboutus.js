function Moreaboutus(){
  return (
    <div className="flex flex-col content-center items-center">
    <div className="text-center">
     <h1 className='normal-case text-3xl font-light p-8'>More about us</h1>
     </div>
    <div tabindex="0" class=" collapse collapse-plus border border-base-300 bg-base-100 w-11/12 ">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      Our History
    </div>
    <div class="collapse-content"> 
      <p class="leading-loose">
        Solid State Automation and Controls (SSAC) is a privately owned electrical and automation contracting company specializing in programming, designing, and installing Siemens based control systems in a variety of applications. Established in 2009 and based out of Houston TX, the principals of SSAC have over 20 years industry experience and are certified as a Siemens Solution Partner.
      </p>
      <p class="leading-loose">
        Through a variety of resources, SSAC has the ability to create systems for multiple applications including retrofit projects as well as complete systems from scratch.  SSAC has the resources and staff to program S7 based PLC systems, WinCC SCADA applications, and WinCC Flex interfaces as well as in-depth knowledge of the Siemens variable frequency drives and process transmitters.  Additionally, with an in house panel shop, SSAC has the capacity to build control panels and motor protection gear as well as extensive experience in generating drawings and manuals for all types of systems.  The experienced staff at SSAC has direct experience working with oil and gas, manufacturing, municipalities, and military markets.
      </p>
      <p class="leading-loose">
        Because of the company’s relatively small size, SSAC is able to offer a more focused approach to projects, is able to give every opportunity the full attention it deserves, and can offer both a timely and cost effective solution.
      </p>
     
    </div>
  </div>
    <div tabindex="0" class=" collapse collapse-plus border border-base-300 bg-base-100 w-11/12 ">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      Our partners
    </div>
    <div class="collapse-content leading-loose"> 
      <p>We are certified solution partners by:</p>
      <ul class="pl-2">
        <li>● SIMATIC WinCC OA</li>
        <li>● Siemens</li>
        <li>● Rockwell Automation</li>
      </ul>
    </div>
  </div>
    <div tabindex="0" class=" collapse collapse-plus border border-base-300 bg-base-100 w-11/12 ">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      Our vision
    </div>
    <div class="collapse-content"> 
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>
  </div>
  
  )
}

export default Moreaboutus