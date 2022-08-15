import Logo from './logo.svg'
function Servicescta(){
  return(
    <div className="w-full  text-center">
      <h1 className='normal-case text-7xl p-8'>How can we help you?</h1>
      <div className='flex py-6 justify-around'>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={Logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" href="">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={Logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" href="">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={Logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" href="">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Servicescta