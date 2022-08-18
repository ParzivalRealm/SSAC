function Stories(){
  return (
  <div class="flex flex-col w-full p-9">
     <div className="text-center">
     <h1 className='normal-case text-4xl p-8 text-primary font-light'>Generating positive impact on the industry</h1>
     <p className="text-2xl pb-8 px-8 text-primary font-light">Know about the success stories we have created along our customers</p>
    <div class="card lg:card-side bg-base-100 m-8 rounded-none">
      <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></img></figure>
      <div class="card-body bg-primary">
        <h2 class="card-title text-base-100">Offshore Crude Mixing Control System</h2>
        <p class="text-base-100">Solid State Automation designed and developed a control system for an off shore mixing platform.  The system is housed in a Nema 7 enclosure and allows operator interface via an IS track pad.  This allows the operator the full functionality of an HMI even in a hazardous environment.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary text-base-100 rounded-none">Watch Video</button>
        </div>
      </div>
    </div>
    <div class="divider"></div> 
    <div class="flex flex-col-reverse w-full">
      <div class="card lg:card-side bg-base-100 m-8 rounded-none">
        <div class="card-body bg-primary">
          <h2 class="card-title text-base-100 text-end justify-end">USS Nassau Ship Monitoring System</h2>
          <p class="text-base-100">The Beaumont Reserve Fleet required a monitoring system capable of tracking temperature, humidity, intrusion, corrosion, and fire protection. Additionally, they needed a system that could communicate all that information back to a central monitoring station. Solid State Automation installed a system aboard the USS Nassau that included 6 fire monitoring boxes, 12 humidty/temperature/air quality sensors, 2 intrusion detectors, and 3 current transducers to monitor ship power. All the information the monitoring system gathered was transmitted wirelessly over two miles back to the central monitoring station and displayed on a custom HMI. The system also included a solar panel and battery array that enabled the system to run even in the event of a shore power loss.</p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary text-base-100 rounded-none">Watch Video</button>
          </div>
        </div>
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></img></figure>
      </div>
    </div>
    <div class="divideer w-full"><button class="btn btn-primary text-base-100 rounded-none">See all</button></div> 

  </div>
  </div>
  )
}

export default Stories