import React, { useState } from "react";
import { Button, ShoeCard } from "../components/index.js";
import { arrowRight } from "../assets/icons/index.js";
import { statistics, shoes } from "../constants/index.js";
import { bigShoe1 } from "../assets/images/index.js";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start  max-xl:padding-x pt-28">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
         font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 max-lg:z-0 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-center items-center flex-wrap w-full mt-20 gap-16">
          {statistics?.map((stat, index) => (
            <div key={index} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-8 font-montserrat text-slate-gray text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10 max-lg:z-0"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes?.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
