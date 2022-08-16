import mainbanner from './mainbanner2.jpg'
import Separatortext from './separatortext'
function Hero(){
  return(
    <div>
      <div class="hero h-[35rem]"style={{backgroundImage:`url(${mainbanner})`}}>
        <div class="hero-overlay" data-theme="winter"></div>
        <div class="hero-content text-center text-neutral-content" >
          <div class="max-w-md bg-opacity-60">
            <h1 class="mb-5 text-5xl">modern solutions for the modern industry</h1>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Separatortext />
    </div>
  )
}

export default Hero