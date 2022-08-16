import Stats from './stats.js'

function Separatortext(){
    return (
        <div>
            <div class="w-full text-center flex flex-col justify-center">
                <div class="px-16 pt-16 text-4xl">
                    <h1>Solid State Automation and Controls</h1>
                </div>
                <div class="px-16 pt-0 text-3xl">
                    <h2 class="text-opacity-100">We have the knowledge and expertise to help <br></br>with your automation and control system needs.</h2>
                </div>    
            </div>
            <div class="w-full flex justify-center p-8">
            <Stats />
            </div>
        </div>
    )
}

export default Separatortext