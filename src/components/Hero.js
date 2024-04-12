import React from "react";
import heroImg from "../assets/img/home-image.png";
import { FaLeaf, FaUtensilSpoon, FaWater } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className=" container flex flex-col items-center gap-10 md:flex-row ">
        <div className=" mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <img src={heroImg} alt="burgerimage" className=" w-60 md:w-full" />
        </div>

        <div className=" text-center md:basis-1/2 lg:basis-3/5 md:text-start">
          <h1 className=" home__title">HAPPY TUMMY WITH TASTY BURGERS.</h1>
          <div className=" separator mx-auto"></div>
          <p className=" paraghraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ducimus debitis, minus animi, earum libero a sint dolor odio quos ex
            ad nihil ipsum molestiae inventore. Temporibus nesciunt reiciendis
            tempore!
          </p>
          <div className=" text-base flex  items-center justify-center gap-4 py-10 md:justify-start md:gap-20 ">
            <div className=" text-center">
              <i className=" text-secondaryColor text-4xl ">
                <FaUtensilSpoon />
              </i>
              Deligious
            </div>
            <div className=" text-center">
              <i className=" text-secondaryColor text-4xl">
                <FaWater />
              </i>
              Fresh
            </div>
            <div className=" text-center">
              <i className=" text-secondaryColor text-4xl">
                <FaLeaf />
              </i>
              Organic
            </div>
          </div>
          <a href="#Home" className=" btn btn-primary ">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
