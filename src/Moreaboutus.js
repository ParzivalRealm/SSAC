function Moreaboutus(){
  return (
    <div className="flex flex-col content-center items-center">
    <div className="text-center">
     <h1 className='normal-case text-7xl p-8'>More about us</h1>
     </div>
    <div tabindex="0" class=" collapse collapse-plus border border-base-300 bg-base-100 w-11/12 ">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      Our History
    </div>
    <div class="collapse-content"> 
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>
    <div tabindex="0" class=" collapse collapse-plus border border-base-300 bg-base-100 w-11/12 ">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      Our partners
    </div>
    <div class="collapse-content"> 
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
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