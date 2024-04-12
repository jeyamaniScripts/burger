import React from "react";
import burger1 from "../assets/img/burger-1.png";
import burger2 from "../assets/img/snack-1.png";
import burger3 from "../assets/img/beverage-2.png";

const Category = () => {
  return (
    <section id="category">
      <div className="container flex flex-col gap-5 md:flex-row">
        {/* card1  */}
        <div className=" bg-secondaryColor flex rounded-lg py-3 overflow-hidden md:flex-1">
          <div className=" basis-1/3 relative">
            <img
              src={burger1}
              alt="burger-1"
              className=" w-28 absolute -left-4 -bottom-4"
            />
          </div>
          <div className=" ">
            <div className="mb-2">
              <h4 className=" card__title">food</h4>
              <p className=" text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
            </div>
            <a href="#buy" className="text-black">
              Buy Online
            </a>
          </div>
        </div>
        {/* card2  */}
        <div className=" bg-redColor rounded-lg flex overflow-hidden py-3 md:flex-1">
          <div className=" basis-1/3 relative">
            <img
              src={burger2}
              alt="burger-2"
              className=" w-28 absolute -left-4 -bottom-4"
            />
          </div>
          <div>
            <div className=" mb-2">
              <h4 className=" card__title">SNACK</h4>
              <p className=" text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
            </div>
            <a href="#buy" className=" text-secondaryColor">
              Buy Online
            </a>
          </div>
        </div>

        {/* card3  */}
        <div className=" bg-greenColor rounded-lg flex  overflow-hidden py-3 md:flex-1">
          <div className=" basis-1/3 relative">
            <img
              src={burger3}
              alt=" burger-3"
              className=" w-28 absolute -left-4 -bottom-4"
            />
          </div>
          <div>
            <div className=" mb-2">
              <h4 className=" card__title">BEVERAGE</h4>
              <p className=" text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
            </div>
            <a href="#buy" className=" text-black">
              Buy Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
