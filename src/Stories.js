function Stories(){
  return (
  <div class="flex flex-col w-full p-9">
     <div className="text-center">
     <h1 className='normal-case text-7xl p-8'>Helping our customers to be better</h1>
    <div class="card lg:card-side bg-base-100 ">
      <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></img></figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    <div class="divider"></div> 
    <div class="flex flex-col-reverse w-full">
      <div class="card lg:card-side bg-base-100 ">
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></img></figure>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Stories