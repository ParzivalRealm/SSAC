import Plc from './plcs.jpg'
import Panel from './panelbuild.jpeg'
import Schemas from './scheme.jpg'
function Servicescta(){
  return(

     
      <div className='flex justify-around'>
        <div class="card w-96 bg-base-100 shadow-xl rounded-none ">
          <figure class="demo-wrap"><img class="demo-bg"src={Plc} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">PLC Programming and Engineering</h2>
            <p>Solid State Automation offers complete turn-key solutions for PLC based control systems for multiple applications including retrofit projects as well as complete systems from scratch. </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary rounded-none text-white" href="">Learn more</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure class="demo-wrap"><img class="demo-bg"src={Panel} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Full Key-turn solutions</h2>
            <p>As a Siemens Solution Partner and a Rockwell Systems Integrator, Solid State Automation has the knowledge and experience to develop control systems for a wide range of applications.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary rounded-none text-white" href="">Learn more</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure class="demo-wrap"><img class="demo-bg"src={Schemas} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Schematics design</h2>
            <p>In addition to programming, Solid State Automation can develop full system design documents including panel layout and wiring diagrams for field install.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary rounded-none text-white" href="">Learn more</button>
            </div>
          </div>
        </div>
      </div>


    
  )
}

export default Servicescta