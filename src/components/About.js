import React from "react";
import about from "../assets/img/about.jpg";
import { FaCheck } from "react-icons/fa";
const About = () => {
  return (
    <section>
      <div className=" container flex flex-col gap-10 md:flex-row">
        <div className=" flex-1">
          <img src={about} alt="aboutimage" className=" rounded-lg" />
        </div>
        <div className=" flex-1">
          <h2 className=" section__title">
            Find food nd drinks, All-in-one place for your best taste.
          </h2>
          <div className="separator"></div>
          <p className=" paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            minus nobis minima sed soluta, ipsa quos, ducimus alias rem possimus
            officia, consequatur ipsam. Eveniet quisquam neque repellat ipsa
            voluptas! Adipisci.
          </p>
          <ul className=" grid grid-cols-2 py-5 space-y-1">
            <li className="flex items-center gap-2">
              <i className=" text-secondaryColor">
                <FaCheck />
              </i>
              Best Price
            </li>
            <li className="flex items-center gap-2">
              <i className=" text-secondaryColor">
                <FaCheck />
              </i>
              Best Service
            </li>
            <li className="flex items-center gap-2">
              <i className=" text-secondaryColor">
                <FaCheck />
              </i>
              Fresh Incredient
            </li>
            <li className="flex items-center gap-2">
              <i className=" text-secondaryColor">
                <FaCheck />
              </i>{" "}
              Health Protocal
            </li>

          </ul>
          <a href="#about" className=" btn btn-primary">About Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
