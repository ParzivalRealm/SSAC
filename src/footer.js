import Logo2 from './Logo.js'
function footer(){

    return(
        <div class="mt-20">
        <footer class="footer p-10 bg-neutral text-base-content " >
        <div>
            <Logo2/>

            <p class="text-primary">Solid State Automation.<br></br>Providing reliable tech</p>
        </div> 
        <div>
            <span class="footer-title text-primary">Services</span> 
            <a class="link link-hover text-primary">PLC Programming and Engineering</a> 
            <a class="link link-hover text-primary">Full Key-turn solutions</a> 
            <a class="link link-hover text-primary">Schematics design</a> 
        </div> 
        <div>
            <span class="footer-title text-primary">Company</span> 
            <a class="link link-hover text-primary">About us</a> 
            <a class="link link-hover text-primary">Contact</a> 
            <a class="link link-hover text-primary">Jobs</a> 
        </div> 
        <div>
            <span class="footer-title text-primary">Legal</span> 
            <a class="link link-hover text-primary">Terms of use</a> 
            <a class="link link-hover text-primary">Privacy policy</a> 
            <a class="link link-hover text-primary">Cookie policy</a>
        </div>
        </footer>
        </div>
    )
}

export default footer