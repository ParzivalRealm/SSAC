

export default function DynamicGallery() {
  return (
    <div>
      <div class="px-20 pt-10 text-center">
        <h1 class="text-2xl leading-loose font-light">Gallery</h1>
      </div>
      <div class="px-20 py-10 grid grid-rows-2 grid-flow-row place-items-center w-full">
        <div class="grid grid-cols-3">
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 py-10">
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
          <div class="px-5">
            <div class="card w-96 bg-white shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div class="card-body place-items-center">
                <h2 class="card-title text-primary">System Commissioning</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
