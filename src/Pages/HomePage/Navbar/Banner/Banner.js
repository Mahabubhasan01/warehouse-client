import React from "react";
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>

          
        </div>

        <div class="carousel-inner relative w-full overflow-hidden">
        
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://i.ibb.co/0FdYyyF/banner1.webp"
              class="block w-full"
              alt="Motorbike Smoke"
            />
            
            <div class="carousel-caption hidden md:block absolute text-left mb-40 ">
              <p className="">“As time goes by the memories of sitting on the edge of a bed and 
                <br /> reading aloud with your kid are going to be very meaningful <br /> in your own mental scrapbook.”</p>
              <h5 class="text-2xl"><button class="btn mt-4">Explore more</button></h5>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://i.ibb.co/c6nDyNc/banner.webp"
              class="block w-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption hidden md:block absolute text-left mb-40">
              <p>“All of my youth growing up in my Italian family was focused <br /> around the table. That’s where I learned about love.”</p>
              <h5 class="text-2xl"><button class="btn mt-4">Explore more</button></h5>
            </div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <img
              src="https://i.ibb.co/0FdYyyF/banner1.webp"
              class="block w-full"
              alt="Woman Reading a Book"
            />
           <div class="carousel-caption hidden md:block absolute text-left mb-40">
              <p>“Our family dinner table was my first platform – every dinner was <br /> all about sharing stories and jokes and points of view.” <br /> Phoebe Waller-Bridge</p>
              <h5 class="text-2xl"><button class="btn mt-4">Explore more</button></h5>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
