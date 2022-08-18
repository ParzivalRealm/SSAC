import mainbanner from './mainbanner4.jpg'
import Separatortext from './separatortext'
function Hero(){
  return(
    <div>
      <div class="hero h-[35rem]"style={{backgroundImage:`url(${mainbanner})`}}>
       
        <div class="hero-content text-left text-base-100" >
          <div class="max-w-2xl bg-opacity-60">
          <div class="flex w-full">
            <div class="grid flex-grow place-items-center"> <h1 class="text-5xl">Modern solutions for the modern industry</h1></div>
            <div class="divider divider-horizontal"></div>
            <div class="grid flex-grow card w-full place-items-center"><h1 class="text-2xl">We help our customers to reach their goals</h1></div>
          </div>
          <div class="w-full flex justify-center p-16">
              <button class="btn rounded-none text-primary shadow-primary shadow-">Get Started</button>
          </div>
           
            
          </div>
        </div>
      </div>
      <Separatortext />
    </div>
  )
}

export default Hero