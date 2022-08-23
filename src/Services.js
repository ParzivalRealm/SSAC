import mainbanner from './mainbanner4.jpg'
import Navbar from './Navbar';
export default function Services(){
    return(
        <div>
            <Navbar />
            <div className='w-full h-[25rem] flex '>
                <div class="hero place-items-center justify-start w-full px-72"style={{backgroundImage:`url(${mainbanner})`}}>
                    <div class="text-base-100" >
                            <div class="flex flex-col ">
                                <div class="grid flex-grow "> <h1 class="text-5xl">Services</h1></div>
                                <div class="divider"></div>
                                <div class="grid flex-grow card "><h1 class="text-2xl">We help our customers to solve their challenges</h1></div>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="sticky top-10 shadow-sm">
                        <div class="tabs py-10 px-20 z-10 place-items-center justify-center bg-white">
                            <a class="tab tab-bordered">Engineering</a> 
                            <a class="tab tab-bordered tab-active">Full Key-Turn solutions</a> 
                            <a class="tab tab-bordered">Schematics</a>
                        </div>
                    </div>
                    <div class="w-full flex">
                        <div>
                            <div class="px-20 py-20 grid grid-cols-1 place-items-center w-full bg-neutral">
                                <div class="px-5">
                                <h1 class="text-2xl leading-loose font-light">Description</h1>
                                <p class="leading-loose font-light">Solid State Automation offers complete turn-key solutions for PLC based control systems for multiple applications including retrofit projects as well as complete systems from scratch.  This includes programming and system design, drawings and documentation, and system install and commissioning.  Solid State has the resources and staff to program S7 based PLC systems, WinCC SCADA applications and WinCC Flex interfaces, as well as the capacity to assemble control panels and motor protection gear in our panel shop.  Solid State also has in-depth knowledge of the Siemens variable frequency drives and process transmitters and extensive experience in generating drawings and manuals for all types of systems and has direct experience working with oil and gas, manufacturing, municipalities, and military markets.</p>
                                </div>
                            </div>
                            <div class="px-20 pt-10 text-center"><h1 class="text-2xl leading-loose font-light">Gallery</h1></div>
                            <div class="px-20 py-10 grid grid-rows-2 grid-flow-row place-items-center w-full">
                                <div class="grid grid-cols-3">
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-3 py-10">
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-5">
                                        <div class="card w-96 bg-white shadow-xl">
                                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                            <div class="card-body place-items-center">
                                                <h2 class="card-title text-primary">System Commissioning</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                           
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}